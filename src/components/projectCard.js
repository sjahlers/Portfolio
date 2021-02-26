import React from 'react';
import {Link} from 'react-router-dom';
import demo from '../img/demo.jpg';
import marine from '../img/marine.jpg';
import tripsnip from '../img/tripsnip.jpg';
import theatre from '../img/theatre.jpg';
import shoppinglist from '../img/shoppinglist.jpg';
import fcb from '../img/fcb.jpg';

const myProjects = [
  {
    name: 'INxSQL E-Commerce',
    link: 'projects/inxsql',
    img: demo,
    desc: 'An e-commerce website powered by INxSQL Software.'
  },
  {
    name: 'Marine Fasteners',
    link: 'projects/marine',
    img: marine,
    desc: "An e-commerce site built upon INxSQL's web template."
  },
  {
    name: 'TripSnip',
    link: 'projects/tripsnip',
    img: tripsnip,
    desc: 'A web app for the world traveler, using AngularJS, Gulp, and REST API.'
  },
  {
    name: 'Theatre Seat Reservations',
    link: 'https://sjahlers.github.io/Lab-10-Theatre-Seating/',
    img: theatre,
    desc: 'A single-page theatre seat reservation app featuring jQuery.'
  },
  {
    name: 'Shopping List',
    link: 'https://sjahlers.github.io/Simple-Shopping-List/',
    img: shoppinglist,
    desc: 'A simple shopping list app featuring JavaScipt.'
  },
  {
    name: 'Squarespace',
    link: 'http://fcbmusic.org/',
    img: fcb,
    desc: 'The Farmington Community Band website designed and built with Squarespace.'
  }
]

class ProjectCard extends React.Component {
  render() {
    return (
      <div className='row'>
        {myProjects.map(project=>
          <div className='col-12 col-md-6 col-xl-4' key={project.name}>
            <Link to={project.link} className='project'>
              <p className='project-title'>{project.name}</p>
              <img src={project.img} className='project-img' alt="Project Screenshot"/>
              <div className='project-desc'>
                <p>{project.desc}</p>
              </div>
            </Link>
          </div>
        )}
      </div>
    )
  }
}

export default ProjectCard;
