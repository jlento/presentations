// White, fixed size slide background

[].forEach.call(document.querySelectorAll('section'), function (e) {
    e.setAttribute("data-background-size", "contain");
    e.setAttribute("data-background", "whitebg.svg");
});

//Reveal.sync();
