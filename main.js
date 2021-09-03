$.ajax({
    url: "images/",
    success: data => {
        $(data).find("a").attr("href", (_i, filename) => {
            if (filename.match(/\.(jpe?g|png|gif)$/)) {
                $('#heads-area').append(
                    "<div class=\"person-frame-inner\"><img class=\"ball\" src=\"images/" + filename + "\"/></div>"
                );
            }
        });

        let people = document.getElementsByClassName("person-frame-inner");
        for (let person of people) {
            person.style["animation-delay"] = -Math.floor(Math.random() * 1000) + "s"
        }
    }
});
