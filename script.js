const form = document.getElementById("visitorForm");

const thankYou = document.getElementById("thankYou");


form.addEventListener("submit", function(event) {

    event.preventDefault();


    form.style.display = "none";

    thankYou.style.display = "block";

});