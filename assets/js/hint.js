document.getElementById('viewWork').addEventListener('click', () => {


    let ig = document.getElementById("instagram");
    let ld = document.getElementById("linkedin");
    let gh = document.getElementById("github");

    interval(ig, ld, gh);

// instagram
// linkedin
// github

});


document.getElementById('followMe').addEventListener('click', () => {
    let yt = document.getElementById("youtube");
    let ig = document.getElementById("instagram");
    let sp = document.getElementById("spotify");

    interval(yt, ig, sp);
});


document.getElementById('contactMe').addEventListener('click', () => {
    let ig = document.getElementById("instagram");
    let wa = document.getElementById("whatsapp");
    let mail = document.getElementById("mail");


    interval(ig, wa, mail);
});


function interval(element1, element2, element3) {

    let style = 'filter: invert(20%); position: relative; bottom: 5px;';

    function addstyle() {
        element1.style = style;
        element2.style = style;
        element3.style = style;
    }

    function removeStyle() {
        element1.style = '';
        element2.style = '';
        element3.style = '';
    }

    let active = 0;
    let counter = 0;
    let i = setInterval(function () {
        if (active === 0) {
            active = 1;
            addstyle();
        } else {
            active = 0;
            removeStyle();
        }
        counter++;
        if (counter === 10) {
            clearInterval(i);
        }
    }, 300);
}


// youtube
// instagram
// spotify
// linkedin
// github
// whatsapp
// mail