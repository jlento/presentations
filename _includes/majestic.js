var currentSlide = 0;
const splitBefore = "H2";

function init() {
    var body = document.body;
    var islide = currentSlide;
    body.insertBefore(document.createElement("div"),
                      body.childNodes[0]);
    body.childNodes[0].style.display = "none";
    while (body.childNodes.length > islide + 1) {
        if (body.childNodes[islide + 1].tagName === splitBefore) {
            body.insertBefore(body.childNodes[0].cloneNode(false),
                              body.childNodes[islide].nextSibling);
            islide++;
        }
        body.childNodes[islide]
            .appendChild(body.childNodes[islide + 1]);
    }
    body.style.display = "block";
    body.childNodes[0].style.display = "block";
}

function change(event) {
    var body = document.body;
    var key = event.charCode || event.keyCode;
    if ((key === 37 || key === 38) &&
        body.childNodes[currentSlide].previousSibling) {
        body.childNodes[currentSlide].style.display = "none";
        currentSlide--;
        body.childNodes[currentSlide].style.display = "block";
    }
    if ((key === 39 || key === 40) &&
        body.childNodes[currentSlide].nextSibling) {
        body.childNodes[currentSlide].style.display = "none";
        currentSlide++;
        body.childNodes[currentSlide].style.display = "block";
    }
}
