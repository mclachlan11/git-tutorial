$.ajax({
    url: "images/",
    success: data => {
        $(data).find("a").attr("href", (_i, filename) => {
            if (filename.match(/\.(jpe?g|png|gif)$/)) {
                $('body').append(
                    "<div class=\"head-container\"><img class=\"head\" src=\"images/" + filename + "\"/></div>"
                );
            }
        });

        let people = document.getElementsByClassName("head-container");
        for (let person of people) {
            person.style["animation-delay"] = -Math.floor(Math.random() * 1000) + "s"
        }
    }
});
