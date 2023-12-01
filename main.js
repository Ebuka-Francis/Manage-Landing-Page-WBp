let form = document.querySelector("#myform");
let input = document.querySelector("#input");
let msg = document.querySelector(".msg");
let men = document.querySelector(".men").addEventListener("click", menu);
// let button = document.querySelector("#callback").addEventListener('click', onClick);

// setInterval(onSubmit, 3000)
form.addEventListener("submit", async function (e) {
    e.preventDefault();

    if(input.value === '' || 
    !validateEmail(input.value)
     ){
        msg.classList.add("error");
        msg.textContent = 'please insert a valid email !!! ';
    // setTimeout(() => msg.remove(), 3000);

       
    } else {
        await timeOut();

        form.reset();
        msg.textContent = 'Registeration successful';
        msg.style.color = '#fff';
        msg.style.fontSize = '10px';
    setTimeout(() => msg.remove(), 30000);


    } 


});



function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function timeOut() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 2000)
    });
}

 function onClick() {
  let click = document.querySelector(".nas");
  if(click.style.display === "block" ){
      click.style.display === "none";  
  } else {
    click.style.display = 'block';
  }
}

function menu() {
    let x = document.querySelector(".menudropdown");
    if(x.style.display === "block"){
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}