// WHEN I am presented with the Resume section
// THEN I see a link to a downloadable resume and a list of the developer’s proficiencies


import React from 'react';
import cv from './../downloads/pdf/cv.pdf';
import * as FaIcons from 'react-icons/fa';

function Cv() {
    return (
      <div>
      <h2>Curriculum Vitae</h2>
      <a href={cv} download><FaIcons.FaDownload />Download PDF</a>
      </div>
    );
};

export default Cv;