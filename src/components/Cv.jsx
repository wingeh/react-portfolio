// WHEN I am presented with the Resume section
// THEN I see a link to a downloadable resume and a list of the developer’s proficiencies


import React from 'react';
import {Link} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';

function Cv() {
    return (
      <div>
      <h2>Curriculum Vitae</h2>
      <Link to="./../downloads/pdf/cv.pdf" target="_blank" download><FaIcons.FaDownload />Download PDF</Link>
      </div>
    );
};

export default Cv;