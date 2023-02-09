import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>

<header class="header">
    <p  class="logo">Developer</p>
    <div class="nav-items">
     
      <Link to='/login'>Login</Link>
      <Link to='/Signup'>Signup</Link>
    </div>
  </header>
  <main>
    <div class="intro">
      <h1>A Web Developer</h1>
      <p>I am a web developer and I love to create websites.</p>
      <button Link="">Learn More</button>
    </div>
    <div class="achievements">
      <div class="work">
        <i class="fas fa-atom"></i>
        <p class="work-heading">Projects</p>
        <p class="work-text">I have worked on many projects and I am very proud of them. I am a very good developer and I am always looking for new projects.</p>
      </div>
      <div class="work">
        <i class="fas fa-skiing"></i>
        <p class="work-heading">Skills</p>
        <p class="work-text">I have a lot of skills and I am very good at them. I am very good at programming and I am always looking for new skills.</p>
      </div>
      <div class="work">
        <i class="fas fa-ethernet"></i>
        <p class="work-heading">Network</p>
        <p class="work-text">I have a lot of network skills and I am very good at them. I am very good at networking and I am always looking for new network skills.</p>
      </div>
    </div>
    <div class="about-me">
      <div class="about-me-text">
        <h2>About Me</h2>
        <p>I am a web developer and I love to create websites. I am a very good developer and I am always looking for new projects. I am a very good developer and I am always looking for new projects.</p>
      </div>
      
    </div>
  </main>
  <footer class="footer">
    <div class="copy">&copy; 2022 Developer</div>
    <div class="bottom-links">
      
      <div class="links">
        <span>Social Links</span>
        <p>Facebook</p>
      </div>
    </div>
  </footer>
      
      
      

    </div>
  )
}