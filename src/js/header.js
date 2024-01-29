// JS file that contains the header html to be added to the pages

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
                <li id="projectsNav" class="project-dropdown active flex">
                    <a 
                        href="/index.html#projects" 
                        class="fs-600 ff-sans-cond nav-link project-link"
                        aria-label="Go to projects section on the home page"
                    >
                        Projects
                    </a>
                    <div class="dropdown-content">
                        <a 
                            class="fs-400 ff-sans-cond dropdown-1" 
                            href="/src/recipebook.html"
                            aria-label="Go to recipe book project page"
                        >
                            Recipe Book
                        </a>
                        <a 
                            class="fs-400 ff-sans-cond dropdown-2" 
                            href="/src/ppm.html"
                            aria-label="Go to Pak patch manager project page"
                        >
                            Pak Patch Manager
                        </a>
                        <a 
                            class="fs-400 ff-sans-cond dropdown-3" 
                            href="/src/web-portfolio.html"
                            aria-label="Go to web portfolio project page"
                        >
                            Web Portfolio
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