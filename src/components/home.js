import React from 'react';
import ProjectCard from './projectCard';
import SectionTitle from './sectionTitle';

class Home extends React.Component {
  render() {
    return (
      <div>
      <section id="projects" className="container">
        <SectionTitle color="tri-hotpink" title="my projects"/>
        <ProjectCard/>
      </section>

      <section id="about">
        <div className="container">
          <SectionTitle color="tri-lightpink" title="about me"/>
        </div>
        <div className="about-me">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <p className="about-title"><span className="fancy">Hello! I'm Sara Ahlers, </span>a front-end web developer in Metro Detroit.</p>
                <p>I've got a passion to fix the internet one site at a time, by creating visually stunning designs and user-friendly interfaces. Let's stop the traffic loss, keep users engaged, and let them easily find what they need. I'm a graduate of Grand Circus Detroit, a 10-week, front-end web development bootcamp. With a background in public relations, I can provide your project with a unique perspective.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <p className="fancy" style={{fontSize: '1.15em'}}>My Awesome Skills</p>
              </div>
              <div className="col-12">
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>SASS</li>
                  <li>JavaScript</li>
                  <li>JQuery</li>
                  <li>AngularJS</li>
                  <li>React</li>
                  <li>Bootstrap</li>
                  <li>Git</li>
                  <li>Gulp</li>
                  <li>NodeJS</li>
                  <li>JSON</li>
                  <li>Visual Studio</li>
                  <li>Razor</li>
                  <li>SquareSpace</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="container">
        <SectionTitle color="tri-gray" title="contact me"/>
        <div className="row">
          <div className="col-12 contact-icons">
            <a href="mailto:sjahlers@gmail.com" title="Email Sara"><i className="fas fa-envelope"></i></a>
            <a href="https://www.linkedin.com/in/sara-ahlers/" target="_blank" title="LinkedIn"><i className="fab fa-linkedin"></i></a>
            <a href="https://github.com/sjahlers" target="_blank" title="GitHub"><i className="fab fa-github"></i></a>
          </div>
        </div>
      </section>

      </div>
    )
  }
}

export default Home;
