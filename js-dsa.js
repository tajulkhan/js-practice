//Parse URL Query Params to Object
function parseQuery(queryString) {
  const result = {};
  queryString = queryString.startsWith("?") ? queryString.slice(1) : queryString;

  const pairs = queryString.split("&");

  for (let pair of pairs) {
    let [key, value] = pair.split("=");
    result[decodeURIComponent(key)] = decodeURIComponent(value || "");
  }

  return result;
}

console.log(parseQuery("?name=Taj&role=dev&city=Chennai"));
