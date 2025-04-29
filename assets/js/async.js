// Mastering async loops + clean error handling in for, forEach, and map.
const urls = ['url1', 'url2', 'url3'];

urls.forEach(async (url) => {
  const res = await fetch(url);   
  const data = await res.json();
  console.log(data);
});
// ❌ this won't wait!



