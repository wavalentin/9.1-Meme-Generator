let img = document.getElementsByTagName("img");
let form = document.querySelector("form");
const button = document.querySelector("button");

// adding meme into website
form.addEventListener("submit", function(e){
    e.preventDefault();
    const meme = document.createElement("div");
    const topText= document.createElement("span");
    const bottomText = document.createElement("span");
    const img = document.createElement("img");
    const removeButton = document.createElement("span");

    img.src = document.getElementById("imgURL").value;
    topText.classList.add("topText");
        topText.innerHTML = document.getElementById("topText").value;

    bottomText.classList.add("bottomText");
      bottomText.innerHTML = document.getElementById("bottomText").value;
    
    removeButton.classList.add("red-cross");
    removeButton.innerText = "X";
    removeButton.style.color = "red";  
    removeButton.addEventListener('click', function(event) {
      event.preventDefault();
      console.log(event.target.parentElement.remove());
    });


    meme.classList.add("meme");
    meme.append(topText);
    meme.append(img);
    meme.append(bottomText);
    meme.append(removeButton);
    


    let memeLocation = document.getElementById("meme-generator");
    memeLocation.append(meme);

form.reset()
   

function remove(event){
    event.target.parentNode.remove();
  }
  
  
  form.addEventListener('click', remove, false);
  
  });


    
  
    
  
