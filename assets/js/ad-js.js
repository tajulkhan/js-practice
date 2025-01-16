async function fetchSequentialData() {
    const postData = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await postData.json();
  
    const userData = await fetch(`https://jsonplaceholder.typicode.com/users/${posts[0].userId}`);
    const user = await userData.json();
    console.log(user);
    
  
    console.log(user.name);
  }
  
  fetchSequentialData();  