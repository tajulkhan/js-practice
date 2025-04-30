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




