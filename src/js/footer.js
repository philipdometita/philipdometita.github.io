// Js file that contains footer html to be added to the pages

// footer html
const footer = `
    <footer class="footer flex">
        <div class="footer-info flex">
            <img src="/assets/general/PDlogo-light.svg" alt="logo with upright keyboard and letters PD beside it" aria-hidden="true"/>
            <p class="text-light ff-sans-normal">A website by Philip Dometita</p>
        </div>
        <div class="footer-contacts flex">
            <h2 class="text-light ff-sans-normal">My links:</h2>
            <div class="footer-contacts-imgs flex">
                <a 
                    href="mailto:philadometita@gmail.com" 
                    class="contact-links"
                    aria-label="my email link"
                >
                    <img src="/assets/general/email-svgrepo-com.svg" alt="mail icon"/>
                    <h3 class="sr-only">Email Link</h3>
                </a>
                <a 
                    href="https://github.com/philipdometita/" 
                    target="_blank" 
                    class="contact-links"
                    aria-label="my github link"
                >
                    <img src="/assets/general/github-svgrepo-com.svg" alt="github icon"/>
                    <h3 class="sr-only">Github Link</h3>
                </a>
            </div>
        </div>
    </footer>
`;

// add footer html to the bottom of pages that use this script
const footerTemplate = document.createElement("template");

footerTemplate.innerHTML = footer;

document.body.appendChild(footerTemplate.content);