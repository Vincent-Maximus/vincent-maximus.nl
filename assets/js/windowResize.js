// document.getElementsByClassName("workCard");


getHeight();

//on body resize
document.getElementsByTagName("BODY")[0].onresize = function () {
    getHeight();
};

//get height of card
function getHeight() {
    let height = document.getElementById("projectCardId").clientHeight;


    let cardHeight = height - 40;
    giveHeight(cardHeight);
}


function giveHeight(cardHeight) {
    let cards = document.getElementsByClassName("cardTitle");


    for (let i = 0, len = cards.length; i < len; i++) {
        cards[i].style.width = "" + cardHeight + "px";
    }
}


document.getElementById('everything').addEventListener('click', () => {
    let ShowItem = "everything";
    filterWorkOn(ShowItem);
});
document.getElementById('school').addEventListener('click', () => {
    let ShowItem = "school";
    filterWorkOn(ShowItem);
});
document.getElementById('photography').addEventListener('click', () => {
    let ShowItem = "photography";
    filterWorkOn(ShowItem);
});
document.getElementById('personal').addEventListener('click', () => {
    let ShowItem = "personal";
    filterWorkOn(ShowItem);
});
document.getElementById('projects').addEventListener('click', () => {
    let ShowItem = "projects";
    filterWorkOn(ShowItem);
});
document.getElementById('internships').addEventListener('click', () => {
    let ShowItem = "internships";
    filterWorkOn(ShowItem);
});
document.getElementById('volunteer').addEventListener('click', () => {
    let ShowItem = "volunteer";
    filterWorkOn(ShowItem);
});


function filterWorkOn(ShowItem) {
    fadeIn();

    setTimeout(function () {
        // hide cards that contain specific class
        let cards = document.getElementsByClassName("" + ShowItem + "");
        let hide = document.getElementsByClassName("everything");

        for (let h = 0, ben = hide.length; h < ben; h++) {
            hide[h].style.display = "none";
        }

        for (let i = 0, len = cards.length; i < len; i++) {
            cards[i].style.display = "block";
        }
    }, 200);
}

//fade in

function fadeIn() {
    const element = document.getElementById("fadeIn");
    element.style.display = "inline";

    let opacity = 0;

    let intervalIn = setInterval(function() {

        if (opacity < 1) {
            opacity = opacity + 0.1
            element.style.opacity = opacity;
        } else {
            clearInterval(intervalIn);

            setTimeout(function () {
            let intervalOut = setInterval(function() {
                if (opacity > 0) {
                    opacity = opacity - 0.1
                    element.style.opacity = opacity;

                } else {
                    clearInterval(intervalOut);
                    element.style.display = "none";
                }
            }, 25);
            }, 50);
        }
    }, 25);

}




