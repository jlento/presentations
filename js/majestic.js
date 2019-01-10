const splitBeforeTags = ["H1", "H2", "H3"];
let currentSlide = 0;

function resizeRem() {
    document.documentElement.style.setProperty(
        '--screen-font-size',
        document.body.childNodes[currentSlide].offsetWidth/50 + "px");
}

function hide(element) {
    element.style.display = "none";
}

function show(element) {
    element.style.display = "block";
}

function splitBefore(tag, tags) {
    return tags.some(function(splitat){return splitat === tag;});
}

function chop(body) {
    let islide = currentSlide;
    body.insertBefore(document.createElement("div"),
                      body.childNodes[0]);
    body.childNodes[0].className = "slide";
    hide(body.childNodes[0]);
    while (body.childNodes.length > islide + 1) {
        if (splitBefore(body.childNodes[islide + 1].tagName, splitBeforeTags) && body.childNodes[islide].childNodes.length > 1) {
            body.insertBefore(body.childNodes[0].cloneNode(false),
                              body.childNodes[islide].nextSibling);
            islide++;
        }
        body.childNodes[islide]
            .appendChild(body.childNodes[islide + 1]);
    }
}

function init() {
    var body = document.body;
    chop(body);
    show(body);
    show(body.childNodes[currentSlide]);
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
