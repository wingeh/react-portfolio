// WHEN I view the footer
// THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter)

import React from 'react';
import './styles/footer.css';

function Footer() {
    return (
        <footer>
            <p>Copyright &copy; 2021 Andrew Wing</p>
            <p>All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;