fetch('https://api.github.com/repos/code4community/git-tutorial/git/trees/master')
    .then(response => response.json())
    .then(data => {
        const imagesUrl = data.tree.find(element => element.path === 'images').url

        fetch(imagesUrl)
            .then(response => response.json())
            .then(data => {
                const filenames = data.tree.map(element => element.path)

                filenames.forEach(filename => {
                    $('body').append(
                        "<div class=\"head-container\"><img class=\"head\" src=\"images/" + filename + "\"/></div>"
                    )
                })

                const people = document.getElementsByClassName("head-container");
                for (let person of people) {
                    person.style["animation-delay"] = -Math.floor(Math.random() * 1000) + "s"
                }
            })
    })
