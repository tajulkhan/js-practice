// Mastering async loops + clean error handling in for, forEach, and map.
const urls = ['url1', 'url2', 'url3'];

urls.forEach(async (url) => {
  const res = await fetch(url);   
  const data = await res.json();
  console.log(data);
});
// ❌ this won't wait!

// Solution: Use for...of + await
async function fetchInOrder(urls) {
  for (const url of urls) {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log("✅", data);
    } catch (err) {
      console.error("❌ Failed:", err.message);
    }
  }
}

// What if you want parallel fetch?
async function fetchInParallel(urls) {
  try {
    const results = await Promise.all(
      urls.map(async (url) => {
        const res = await fetch(url);
        return res.json();
      })
    );
    console.log("✅ All done:", results);
  } catch (err) {
    console.error("❌ At least one failed:", err.message);
  }
}

//Custom Retry Inside Loop
async function fetchWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Bad response");
      return await res.json();
    } catch (err) {
      if (i === retries - 1) throw err;
      console.warn(`Retrying ${url} (${i + 1})...`);
    }
  }
}

async function fetchUrlsWithRetries(urls) {
  for (const url of urls) {
    try {
      const data = await fetchWithRetry(url);
      console.log("✅ Success:", data);
    } catch (err) {
      console.error("❌ Final fail for", url, ":", err.message);
    }
  }
}

// map(...).catch(...) with Promise.all (for partial success)
const urls = ['url1', 'url2', 'url3'];
const promises = urls.map((url) =>
  fetch(url)
    .then((res) => res.json())
    .catch((err) => {
      console.warn(`❌ Failed for ${url}: ${err.message}`);
      return null; // fallback value
    })
);
Promise.all(promises).then((results) => {
  console.log("✅ Partial results:", results); // some may be null
});

// Promise.allSettled() (show success + failure explicitly)
const promises = urls.map((url) => fetch(url).then(res => res.json()));
Promise.allSettled(promises).then((results) => {
  results.forEach((result, idx) => {
    if (result.status === "fulfilled") {
      console.log(`✅ [${idx}]`, result.value);
    } else {
      console.warn(`❌ [${idx}]`, result.reason.message);
    }
  });
});

// Mix .map() + async/await inside loop (if you need more logic)
const fetchWithHandler = async (url) => {
  try {
    const res = await fetch(url);
    return await res.json();
  } catch (err) {
    console.error(`Error fetching ${url}:`, err.message);
    return null;
  }
};
const promises = urls.map(fetchWithHandler);
Promise.all(promises).then((results) => {
  console.log("Results:", results);
});



