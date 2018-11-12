var currentSlide = 0;

function resizeRem() {
    document.documentElement.style.fontSize =
        document.body.childNodes[currentSlide].offsetWidth/80 + "px";
}

function hide(element) {
    element.style.display = "none";
}

function show(element) {
    element.style.display = "block";
}

function splitBefore(tag) {
    return ["H1", "H2", "H3"]
        .some(function(splitat){return splitat === tag;});
}

function init() {
    var body = document.body;
    var islide = currentSlide;
    body.insertBefore(document.createElement("div"),
                      body.childNodes[0]);
    hide(body.childNodes[0]);
    while (body.childNodes.length > islide + 1) {
        if (splitBefore(body.childNodes[islide + 1].tagName)) {
            body.insertBefore(body.childNodes[0].cloneNode(false),
                              body.childNodes[islide].nextSibling);
            islide++;
        }
        body.childNodes[islide]
            .appendChild(body.childNodes[islide + 1]);
    }
    show(body);
    show(body.childNodes[0]);
    resizeRem();
}

function change(event) {
    var body = document.body;
    var key = event.charCode || event.keyCode;
    if ((key === 37 || key === 38) &&
        body.childNodes[currentSlide].previousSibling) {
        hide(body.childNodes[currentSlide]);
        currentSlide--;
        show(body.childNodes[currentSlide]);
    }
    if ((key === 39 || key === 40) &&
        body.childNodes[currentSlide].nextSibling) {
        hide(body.childNodes[currentSlide]);
        currentSlide++;
        show(body.childNodes[currentSlide]);
    }
}
