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