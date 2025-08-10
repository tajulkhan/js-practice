// Fetch API
let promise = fetch(url, {
  method: "GET", // POST, PUT, DELETE, etc.
  headers: {
    // the content type header value is usually auto-set
    // depending on the request body
    "Content-Type": "text/plain;charset=UTF-8"
  },
  body: undefined, // string, FormData, Blob, BufferSource, or URLSearchParams
  referrer: "about:client", // or "" to send no Referer header,
  // or an url from the current origin
  referrerPolicy: "strict-origin-when-cross-origin", // no-referrer-when-downgrade, no-referrer, origin, same-origin...
  mode: "cors", // same-origin, no-cors
  credentials: "same-origin", // omit, include
  cache: "default", // no-store, reload, no-cache, force-cache, or only-if-cached
  redirect: "follow", // manual, error
  integrity: "", // a hash, like "sha256-abcdef1234567890"
  keepalive: false, // true
  signal: undefined, // AbortController to abort request
  window: window // null
});

// fetch() request with many optional parameters.

let promise = fetch(url, {
  method: "GET", // Type of request: GET, POST, PUT, DELETE, etc.
  
  headers: {
    "Content-Type": "text/plain;charset=UTF-8"
  },
  
  body: undefined, // Only used with methods like POST or PUT, not GET
  
  referrer: "about:client", // The referrer information sent
  
  referrerPolicy: "strict-origin-when-cross-origin", // Controls when to send the referrer
  
  mode: "cors", // 'cors', 'no-cors', 'same-origin' – controls CORS policy
  
  credentials: "same-origin", // Send cookies with the request: 'omit', 'same-origin', or 'include'
  
  cache: "default", // How the request uses the browser cache
  
  redirect: "follow", // Automatically follow redirects: 'follow', 'manual', 'error'
  
  integrity: "", // Used for Subresource Integrity (rare in fetch)
  
  keepalive: false, // Allows request to outlive the page (e.g. in unload)
  
  signal: undefined, // Used to abort fetch with AbortController
  
  window: window // Browser context (only used in some cases)
});
