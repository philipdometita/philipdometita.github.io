// JS file that contains the header html to be added to the pages

// add active class to project or frontend mentor if those are the current pages
// for the underline indicator
let projectActiveClass = "";
let femActiveClass = "";
const projects = ["ppm", "recipebook", "web-portfolio"];
const currUrl = window.location.href;

if (currUrl.includes("frontendmentor")) femActiveClass = "active";

if (projects.some(el => currUrl.includes(el))) projectActiveClass = "active";

// header html
const header = `
    <header class="flex">
        <a 
            href="/index.html" 
            class="flex logo"
            aria-label="Return to home page"
        >
            <img src="/assets/general/PDlogo-white.svg" aria-hidden="true" alt="logo with upright keyboard and letters PD beside it"/>
            <p class="fs-600 ff-sans-cond text-white">Philip Dometita</p>
        </a>
        <!-- stopPropagation() required to close slideout menu on outside click -->
        <button class="mobile-nav-toggle" aria-controls="primary-navigation" onclick="event.stopPropagation()"><span class="sr-only" aria-expanded="false">Menu</span></button>
        <nav>
            <ul id="primary-navigation" tabindex="-1" data-visible="false" class="flex primary-navigation underline-indicators">
                <li id="homeNav" class="flex">
                    <a 
                        href="/index.html" 
                        class="fs-600 ff-sans-cond nav-link"
                        aria-label="Return to home page"
                    >
                        Home
                    </a>
                </li>
                <li id="aboutNav" class="flex">
                    <a 
                        href="/index.html#about" 
                        class="fs-600 ff-sans-cond nav-link"
                        aria-label="Go to about me section on the home page"
                    >
                        About Me
                    </a>
                </li>
                <li id="projectsNav" class="dropdown flex ${projectActiveClass}">
                    <a 
                        href="/index.html#projects" 
                        class="fs-600 ff-sans-cond nav-link project-link"
                        aria-label="Go to projects section on the home page"
                    >
                        Projects
                    </a>
                    <div class="project-dropdown-content">
                        <a 
                            class="fs-400 ff-sans-cond project-dropdown-1" 
                            href="/src/recipebook.html"
                            aria-label="Go to recipe book project page"
                        >
                            Recipe Book
                        </a>
                        <a 
                            class="fs-400 ff-sans-cond project-dropdown-2" 
                            href="/src/ppm.html"
                            aria-label="Go to Pak patch manager project page"
                        >
                            Pak Patch Manager
                        </a>
                        <a 
                            class="fs-400 ff-sans-cond project-dropdown-3" 
                            href="/src/web-portfolio.html"
                            aria-label="Go to web portfolio project page"
                        >
                            Web Portfolio
                        </a>
                    </div>
                </li>
                <li id="femNav" class="dropdown flex ${femActiveClass}">
                    <a 
                        href="/src/frontendmentor.html" 
                        class="fs-600 ff-sans-cond nav-link project-link"
                        aria-label="Go to projects section on the home page"
                    >
                        Front End Mentor
                    </a>
                    <div class="fem-dropdown-content">
                        <a 
                            class="fs-400 ff-sans-cond fem-dropdown-1" 
                            href="/src/frontendmentor/splitter.html"
                            aria-label="Go to splitter: tip calculator page"
                        >
                            Splitter: Tip Calculator
                        </a>
                    </div>
                </li>
            </ul>
        </nav>
    </header>
`;

// add header html to the start of the body for pages that use this script
const headerTemplate = document.createElement("template");

headerTemplate.innerHTML = header;

document.body.insertBefore(headerTemplate.content, document.body.firstChild);