// click question -> open answer
// when open the question, arrow rotates 180deg
const accordionEl = document.querySelectorAll(".accordion");

function accordion (){
    for(let item of accordionEl){
        let question = item.firstElementChild;
        question.addEventListener("click", function() {
             // add a class named "bold" in question element
            this.classList.toggle("bold");
            // answer toggle
            let answer = question.nextElementSibling;
            answer.classList.toggle("active");
            // arrow rotate
            let arrow = question.firstElementChild;
            arrow.classList.toggle("rotate");
        }
    )}
}

accordion();