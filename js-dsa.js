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

//Convert CSV to JSON
//input 
name,age,city
Taj,28,Chennai
John,32,Bangalore
//output
[
  { name: "Taj", age: "28", city: "Chennai" },
  { name: "John", age: "32", city: "Bangalore" }
]

function csvToJson(csv) {
  const lines = csv.trim().split("\n");
  const headers = lines[0].split(",");

  return lines.slice(1).map(line => {
    const values = line.split(",");
    const obj = {};
    headers.forEach((header, i) => {
      obj[header.trim()] = values[i].trim();
    });
    return obj;
  });
}

const inputCSV = `name,age,city
Taj,28,Chennai
John,32,Bangalore`;

console.log(csvToJson(inputCSV));

