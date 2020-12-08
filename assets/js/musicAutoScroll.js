


const flavoursContainer = document.getElementById('flavoursContainer');
const flavoursScrollWidth = flavoursContainer.scrollWidth;
let proceed = true;

window.addEventListener('load', () => {
    setTimeout(() =>
        self.setInterval(() => {
            if (proceed == true) {
                if (flavoursContainer.scrollLeft !== flavoursScrollWidth) {
                    flavoursContainer.scrollTo(flavoursContainer.scrollLeft + 1, 0);
                }
            }
        }, 20),
    1500);
});

flavoursContainer.addEventListener("click", stopLoop);

function stopLoop() {
    if (proceed == true) {
        proceed = false;
    } else {
        proceed = true;
    }

}

// works!!!
