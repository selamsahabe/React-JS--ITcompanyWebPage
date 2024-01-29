import React, { useEffect, useState, useRef } from 'react';
import './style.css';

const About = () => {
  const [users, setUsers] = useState([]);
  const [isHidden, setIsDataVisible] = useState(false);
  const buttonRef = useRef(isHidden ? 'Show Team' : 'Hide Team');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=5');
        const result = await response.json();
        setUsers(result.results);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUsers();
  }, []);

  const toggleVisibility = () => {
    setIsDataVisible(!isHidden);
  };

  useEffect(() => {
    if (isHidden) {
      buttonRef.current.textContent = 'Hide Team ';
    } else {
      buttonRef.current.textContent = 'Show Team';
    }
  }, [isHidden]);

  return (
    <div className= "body-about">
    <div className="user-list">
      <h1 >Our Team</h1>
      <p>Introduction to the team that created this projects.</p>
      <button className="toggle-button" ref={buttonRef} onClick={toggleVisibility}>
        {isHidden ? 'Show Team' : 'Hide Team'}
      </button>
      {isHidden && (
        <ul className="user-list">
          {users.map((person) => (
            <li className="user-item" key={person.cell}>
              <img src={person.picture.large} alt="" />
              <span>{person.name.first} {person.name.last}</span>
              <span>{person.email}</span>
              <span>{person.phone}</span>
              <span>{person.location.city}, {person.location.country}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
    </div>
  );
};

export default About;
