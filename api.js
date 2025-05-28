// Boosting API Performance with Parallel Requests!
// Instead of calling APIs one by one (which is slow and inefficient), I implemented a smarter solution using Promise.all() to fetch multiple product details simultaneously from the Fake Store API.
// ✅ Faster execution ✅ Cleaner code ✅ Better user experience

const apiEndPoints = [
"https://fakestoreapi.com/products/1",
"https://fakestoreapi.com/products/2",
"https://fakestoreapi.com/products/3",
"https://fakestoreapi.com/products/4",
"https://fakestoreapi.com/products/5"

];

const fetchProductData = async (urls) => {
    try{
        const response = await Promise.all(
            urls.map(async(url)=>{
                const res = await fetch(url);
                if(!res.ok){
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
        );
        console.log(response);

    } catch(e){
        console.log(e);
    }
};
fetchProductData(apiEndPoints);
