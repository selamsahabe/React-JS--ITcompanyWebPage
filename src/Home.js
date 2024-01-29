import React, { useEffect, useRef, useState } from 'react';
import './style.css';
import './App.js';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [showMore, setIsDataVisible] = useState(false);
  const projectsRef = useRef(showMore ? 'Show More' : 'Hide ');


  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // I creat by self , but not randomly ist's limited.
        const response = await fetch('https://my-json-server.typicode.com/selamsahabe/db.json/projects');
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        
        const limitedProjects = data.slice(0, 5);
        setProjects(limitedProjects);

      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  const toggleVisibility = () => {
    setIsDataVisible(!showMore);
  };

  useEffect(() => {
    if (showMore) {
      projectsRef.current.textContent = 'Hide ';
    } else {
      projectsRef.current.textContent = 'Show More';
    }
  }, [showMore]);


  return (
    <div className="home-container">
      <header className="header">
        <h1>BlackMountain Technologies</h1>
        <nav>
          <ul >
            <li><a href="#services">Our Services</a></li>
            <li><a href="#Projects"> Our Projects</a></li>
            
          </ul>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h2>Innovate with BlackMountain Technologies</h2>
          <p>Empowering businesses through cutting-edge technology solutions.</p> 
          <Link to="/contact" className="hero-button">
            Get in Touch
          </Link>
          <img
            src="https://www.jud-gmbh.de/upload/large/large_646b69ba52930dc5ddadd4e7_a3c324c8af186ef749826c44d27b5d44b9e463e2023c1df534ed21d3e9b396b9_649ebbdb.jpg"
            alt="IT Solutions"
            className="hero-image"
          />
          
          
        </div>
      </section>

      <section id="services" className="services">
        <h2>Our Services</h2>
        <p>Explore our range of services that cater to your business needs.</p>
        
        <div className="service-item">
          <div className="service-icon">💻</div>
          <p>Custom Software Development</p>
        </div>
        <div className="service-item">
          <div className="service-icon">🌐</div>
          <p>Web Application Development</p>
        </div>
        <div className="service-item">
          <div className="service-icon">📱</div>
          <p>Mobile App Development</p>
        </div>
      </section>

      <section id="Projects" className="Projects">
        <h2>Our Projects</h2>
        <p>Check out our showcased projects and success stories.</p>

        <div className="project" >
            
            <h3>Mobile App Security Assessment</h3>
                <p>Conducting a comprehensive security assessment for a mobile application</p>
                <p>Start Date: 2023-02-10</p>
                <p>End Date: 2023-05-30</p>
                <p>Status: In Progress</p>
            </div>

        <button className="toggle-button" ref={projectsRef} onClick={toggleVisibility}>
        {showMore ? 'Show More' : 'Hide '}
        </button>

        {showMore && (

          <div className="portfolio-content">
          {projects.map((project) => (
            <div className="project" key={project.id}>
            
            <h3>{project.name}</h3>
                <p>{project.description}</p>
                <p>Start Date: {project.start_date}</p>
                <p>End Date: {project.end_date}</p>
                <p>Status: {project.status}</p>
            </div>
          ))}
        </div>
        )}

      </section>

      <footer className="footer">
        <p>&copy; 2024 BlackMountain Technologies. All rights reserved by Selam Karadag.</p>
        <div className="social-icons">
          {/* My Githup Accound */}
          <a href="https://github.com/selamsahabe" target="_blank" >
            <FontAwesomeIcon icon={faGithub} className="github-icon" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;