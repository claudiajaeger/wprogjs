//A program that shows a loading symbol until the page has loaded
document.onreadystatechange = function() {
    var checkState = document.readyState;
    if (checkState == "interactive") {
        document.querySelector(".symbol").style.visibility = "hidden";
    } else if (checkState == "complete") {
        setTimeout (function() {
            document.getElementById("interactive");
            document.querySelector(".loading").style.visibility = "hidden";
            document.querySelector(".symbol").style.visibility = "visible";
            setTimeout (function() {
                document.querySelector(".symbol").style.visibility = "hidden";
            }, 500);
        }, 1000);
    }
}