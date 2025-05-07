//getting form elements
const form = document.getElementById("contactForm")
const message = document.getElementById("message")
const charCount = document.getElementById("characterCount")
const responseDiv = document.getElementById("responseMessage")

//shows character count
message.addEventListener("input", () => {
    characterCount.textContent = `Characters: ${message.value.length}`;
});

  //now we get form values
  form.addEventListener("submit",function (e){
    e.preventDefault(); //will stop page reload
   const firstName = document.getElementById('firstName').value;
   const lastName = document.getElementById('lastName').value;
   const email =  document.getElementById('email').value;
   const msg= message.value;

   //display values to console(output)
   console.log("Submission:");
   console.log("First Name=>", firstName)
   console.log("Last Name=>", lastName)
   console.log("Email=>", email);
   console.log("Message=>", msg);
 
   if (firstName && lastName && email && msg) {
    responseDiv.innerHTML = `<p>Thank you! <b>${firstName} ${lastName}</b>! Your message has been received.</p>`;
    responseDiv.style.display = "block"; e
    form.reset(); 
    characterCount.textContent = "Characters: 0"; 
} else {
    responseDiv.innerHTML = `<p style="color: red;">Please fill in all fields.</p>`;
    responseDiv.style.display = "block"; 
}


const submitButton = document.querySelector('button');
submitButton.classList.add("clicked");

setTimeout(() => {
    submitButton.classList.remove("clicked");
}, 500);
});
    

