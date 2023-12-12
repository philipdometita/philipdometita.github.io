// JS for the main page of the website.
// JS for nav intersection observer is contained here instead of nav.js since observer won't be used on other pages

// options for intersection observer
let options = {
    rootMargin: "0px",
    threshold: .3,
};

const homeNav = document.getElementById("homeNav");
const aboutNav = document.getElementById("aboutNav");
const projectsNav = document.getElementById("projectsNav");

// callback function for the intersection observer
// adds active class to the currently visible section on the home screen
// so it can be highlighted
let callback = (entries) => {
    entries.forEach(entry => {
        const intersecting = entry.isIntersecting;
        switch (entry.target.id) {
            case "title":
                if (intersecting) {
                    homeNav.classList.add("active");
                } else {
                    homeNav.classList.remove("active");
                }
                break;
            case "about":
                if (intersecting) {
                    aboutNav.classList.add("active");
                } else {
                    aboutNav.classList.remove("active");
                }
                break;
            case "projects":
                if (intersecting) {
                    projectsNav.classList.add("active");
                } else {
                    projectsNav.classList.remove("active");
                }
                break;
        }
    })
}

let titleObserver = new IntersectionObserver(callback, options);
let aboutObserver = new IntersectionObserver(callback, options);
let projectsObserver = new IntersectionObserver(callback, options);

titleObserver.observe(document.getElementById("title"));
aboutObserver.observe(document.getElementById("about"));
projectsObserver.observe(document.getElementById("projects"));

// About button onclick effect
const aboutButton = document.getElementById('about-button');
const aboutParagraph = document.getElementById('about-paragraph');
const line = document.getElementById('line');
document.getElementById('about-button').onclick = () => {
    aboutParagraph.classList.add('fade-in');
    aboutButton.classList.add('about-button--transition');
    line.classList.add('expand');
    aboutParagraph.style.maxHeight = aboutParagraph.scrollHeight + "px";
};

// adjusts the about paragraph size if the the window is resized when the about paragraph is visible
window.onresize = async () => {
    await this.sleep(100); // added delay to fix paragraph not adjusting size when snapping window 
    if (aboutButton.classList.contains("about-button--transition")) {
        aboutParagraph.style.maxHeight = aboutParagraph.scrollHeight + "px";
    }
}




