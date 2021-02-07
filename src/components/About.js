import React from 'react';
import './About.css';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Kristin from '../images/kristin.jpg';
import InstagramIcon from '../images/instagram-icon.png';
import GithubIcon from '../images/github-icon-1.png';
import LinkedinIcon from '../images/linkedin-icon.png';

const About = () => {
    return (
        <>
        <Container maxWidth='lg' align='center'>
            <img src={Kristin} width="500" alt='Kristin' />
            <br />
            <img src={InstagramIcon} alt="instagram" className="icon"/>
            <a href="https://github.com/kristinhargrove" target="_blank" rel="noreferrer">
                <img src={GithubIcon} alt='Github' className="icon"  />
            </a>
            <a href="https://www.linkedin.com/in/kristin-hargrove-65462179/" target="_blank" rel="noreferrer">
                <img src={LinkedinIcon} alt="Linkedin" className="icon" />
            </a>
            <Typography variant='h4' className="creator-title">
                Kristin Hargrove
            </Typography>
        </Container>
        <Container maxWidth='sm' align='center'>
            <Typography variant='body1'>
                Kristin is a full stack developer and mortgage expert.<br /><br />
                When she's not helping people buy houses or making websites, she likes to read, play games, play sports (right now, she loves Pickleball), and cook. 
                <br /><br />
                She wants to thank her boyfriend, Spencer, for inspiring her to make this quiz. She is sorry for all the times she made them mad. Sometimes, she just doesn't want to do the dishes (okay, fine, most of the time).
            </Typography>
        </Container>
        </>
    )
} 

export default About;