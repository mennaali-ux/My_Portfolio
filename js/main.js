document.getElementById("contactForm").addEventListener("submit", function(e){

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let message = document.getElementById("message").value;

if(name === "" || email === "" || message === ""){
alert("Please fill all fields");
e.preventDefault();
}

});
const backToTop = document.getElementById("backToTop");


window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTop.style.display = "flex";
  } else {
    backToTop.style.display = "none";
  }
};


backToTop.addEventListener("click", function(){
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

document.getElementById("contactForm").onsubmit = function(e) {
  e.preventDefault();
  alert("Message sent successfully! 🚀");
};

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(e) {
        e.preventDefault(); // يمنع الفورم من الrefresh
        let isValid = true;

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const phone = document.getElementById("phone");
        const message = document.getElementById("message");

        // reset
        document.querySelectorAll(".error").forEach(el => el.innerText = "");
        document.querySelectorAll("input, textarea").forEach(el => {
            el.classList.remove("error-border", "success");
        });

        // name
        if (name.value.trim() === "") {
            document.getElementById("nameError").innerText = "Name is required";
            name.classList.add("error-border");
            isValid = false;
        } else {
            name.classList.add("success");
        }

        // email
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.value.match(emailPattern)) {
            document.getElementById("emailError").innerText = "Enter valid email";
            email.classList.add("error-border");
            isValid = false;
        } else {
            email.classList.add("success");
        }

        // phone
        if (phone.value !== "" && phone.value.length < 11) {
            document.getElementById("phoneError").innerText = "Phone must be 11 digits";
            phone.classList.add("error-border");
            isValid = false;
        } else if (phone.value !== "") {
            phone.classList.add("success");
        }

        // message
        if (message.value.trim().length < 10) {
            document.getElementById("messageError").innerText = "Message too short";
            message.classList.add("error-border");
            isValid = false;
        } else {
            message.classList.add("success");
        }

        if (isValid) {
            alert("Message sent successfully 🚀");
            form.reset();
            document.querySelectorAll("input, textarea").forEach(el => el.classList.remove("success"));
        }
    });
});