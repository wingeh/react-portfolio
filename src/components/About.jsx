// WHEN I am presented with the About Me section
// THEN I see a recent photo or avatar of the developer and a short bio about them

import React from 'react';
import pic from './../images/andrew.png';

function About() {
    return (
        <content>
            <h1>About Me</h1>
            <img src={pic} alt="Recent photo of Andrew Wing" />
            <p>My name is Andrew Wing and I am a recent Full-Stack web development bootcamp graduate living in Ottawa, Ontario, Canada</p>
        </content>
      
    );
};

export default About;