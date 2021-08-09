// WHEN I view the footer
// THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter)

import React from 'react';
import './styles/footer.css';

function Footer() {
    return (
        <footer>
            <p><a href="https://github.com/wingeh" target="_blank">GitHub</a> -
            <a href="https://www.linkedin.com/in/andrew-wing-03a47968/" target="_blank">LinkedIn</a> -
            <a href="https://twitter.com" target="_blank">Twitter</a>
            </p>
            <p>Copyright &copy; 2021 Andrew Wing <br />
            All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;