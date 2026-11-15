
function upDate(previewPic) {

    console.log("Mouse over or focus event");

    console.log(previewPic.alt);
    console.log(previewPic.src);

    document.getElementById("image").innerHTML = previewPic.alt;

    document.getElementById("image").style.backgroundImage =
        "url('" + previewPic.src + "')";
}

function undo() {

    console.log("Mouse leave or blur event");

    document.getElementById("image").innerHTML =
        "Hover over or focus on an image below to display here.";

    document.getElementById("image").style.backgroundImage =
        "url('')";
}

function addTabIndex() {

    console.log("Page loaded - adding tabindex");

    var figures = document.querySelectorAll("figure");

    for (var i = 0; i < figures.length; i++) {

        figures[i].setAttribute("tabindex", "0");

        var img = figures[i].querySelector("img");

        figures[i].addEventListener("mouseover", function() {
            upDate(this.querySelector("img"));
        });

        figures[i].addEventListener("mouseleave", function() {
            undo();
        });

        figures[i].addEventListener("focus", function() {
            upDate(this.querySelector("img"));
        });

        figures[i].addEventListener("blur", function() {
            undo();
        });
    }
}

window.addEventListener("load", addTabIndex);
