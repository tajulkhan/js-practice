const button = document.getElementById("changeText");
const text = document.getElementById("text");

button.addEventListener("click", () => {
  text.textContent = "Text has been changed!";
});
const title = document.getElementById("title");
const intro = document.querySelector(".intro");
title.textContent = "DOM Manipulation in JavaScript"; 
title.style.color = "blue"; 
intro.classList.add("highlight"); 
intro.innerHTML = "<strong>This is important!</strong>"; 
const list = document.getElementById("myList");

// Create a new list item
const newItem = document.createElement("li");
newItem.textContent = "New item";
list.appendChild(newItem);
const removeEl = document.getElementById("removeItem");
removeEl.remove();

const mainImage = document.getElementById("mainImage");
const thumbnails = document.querySelectorAll("#thumbnails img");

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener("click", () => {
    const newImageSrc = thumbnail.getAttribute("data-image");
    mainImage.setAttribute("src", newImageSrc);
  });
});

const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const errorMessage = document.getElementById("errorMessage");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    if(nameInput.value ==="" || emailInput.value ===""){
        errorMessage.textContent = "Please fill in all fields.";
    } else{
        errorMessage.textContent= "Form submitted successfully!";
        errorMessage.style.color="green";
        form.reset();
    }
});
const toggleButton = document.getElementById("themeToggle");

toggleButton.addEventListener("click", () => {
    if (document.body.classList.contains("dark-mode")) {
      document.body.classList.remove("dark-mode");
      document.body.classList.add("light-mode");
      toggleButton.textContent = "Light mode";
    } else {
      document.body.classList.remove("light-mode");
      document.body.classList.add("dark-mode");
      toggleButton.textContent = "Dark mode";
    }
  });
  
  async function fetchApi(){
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/3");
    const data = await res.json();
    return data;
  } 
  fetchApi()
  .then((data)=>{
        document.getElementById("apiData").innerHTML=data.title;
        console.log("User ID: 1", data)
    })
  .catch((error)=>console.log(error));

  async function fetchDataWithErrorHandling() {
    try {
      const response = await fetch('https://api.example.com/data');
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      console.log('Data:', data);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }
  