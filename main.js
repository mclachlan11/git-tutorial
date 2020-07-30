document.addEventListener("DOMContentLoaded", function(event) {
    var people = document.getElementsByClassName("person-frame-inner");
    for (let person of people) {
        person.style["animation-delay"] = -Math.floor(Math.random() * 1000) + "s"
    }
});