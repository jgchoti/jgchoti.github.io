// Add event listener to the "Read More" button
var readMoreElements = document.getElementsByClassName("read-more");
for (var i = 0; i < readMoreElements.length; i++) {
    (function (index) {
        readMoreElements[index].addEventListener("click", function () {
            var btnText = this;
            if (btnText.innerHTML === "Hide...") {
                btnText.innerHTML = "Read More...";
            } else {
                btnText.innerHTML = "Hide...";
            }
        });
    })(i);
}

//scroll animation
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);
