// WHEN I am presented with the Portfolio section
// THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repositories


import React from 'react';
import cup from './../images/cup-o-sugar.png';
import profile from './../images/screencap-of-deploted-app.png';
import kar from './../images/project-kar-krashians.png';
import weather from './../images/project-weather-station.png';
import keep from './../images/main.png';
import planner from './../images/planner.png';
import './styles/projects.css';

function Projects() {
    return (
      
      <div>
      <h1>Projects</h1>
      <div>
      <h2>Cup-o-Sugar</h2>
      <img src={cup} alt="Cup-o-Sugar App" className="project-pic"/>
      <p>GitHub: <a href="https://github.com/wingeh/cupofsugar" target="blank">https://github.com/wingeh/cupofsugar</a></p>
      <p>Deployed App: <a href="http://cup-sugar.herokuapp.com/" target="blank">http://cup-sugar.herokuapp.com/</a></p>
      </div>
      <div>
      <h2>Static Profile</h2>
      <img src={profile} alt="Static Profile" className="project-pic"/>
      <p>GitHub: <a href="https://github.com/wingeh/portfolio" target="blank">https://github.com/wingeh/portfolio</a></p>
      <p>Deployed App: <a href="https://wingeh.github.io/portfolio/" target="blank">https://wingeh.github.io/portfolio/</a></p>
      </div>
      <div>
      <h2>Avoiding the Kar Krashians</h2>
      <img src={kar} alt="Avoiding the Kar Krashians App" className="project-pic"/>
      <p>GitHub: <a href="https://github.com/wingeh/Car-Crashians" target="_blank">https://github.com/wingeh/Car-Crashians</a></p>
      <p>Deployed App: <a href="https://wingeh.github.io/Car-Crashians/" target="_blank">https://wingeh.github.io/Car-Crashians/</a></p>
      </div>
      <div>
      <h2>Weather Station</h2>
      <img src={weather} alt="Weather Station App" className="project-pic"/>
      <p>GitHub: <a href="https://github.com/wingeh/weather-station" target="_blank">https://github.com/wingeh/weather-station</a></p>
      <p>Deployed App: <a href="https://wingeh.github.io/weather-station/" target="_blank">https://wingeh.github.io/weather-station/</a></p>
      </div>
      <div>
      <h2>Keepr: Note Taker</h2>
      <img src={keep} alt="Keepr App" className="project-pic"/>
      <p>GitHub: <a href="https://github.com/wingeh/Keepr" target="_blank">https://github.com/wingeh/Keepr</a></p>
      <p>Deployed App: <a href="https://keepr-note-taker.herokuapp.com/" target="_blank">https://keepr-note-taker.herokuapp.com/</a></p>
      </div>
      <div>
      <h2>Day Planner</h2>
      <img src={planner} alt="Day Planner App" className="project-pic"/>
      <p>GitHub: <a href="https://github.com/wingeh/day-planner" target="_blank">https://github.com/wingeh/day-planner</a></p>
      <p>Deployed App: <a href="https://wingeh.github.io/day-planner/" target="_blank">https://wingeh.github.io/day-planner/</a></p>
      </div>

      </div>
    );
};

export default Projects;