import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Gallery from './pages/Gallery'
import Certificates from './pages/Certificates'
import Blog from './pages/Blog'
import Resume from './pages/Resume'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import SkillNetwork from './pages/Skills'  

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/skills" element={<SkillNetwork />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<About />} /> {/* ✅ fixed lowercase */}
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="footer" style={{ padding: "50px 20px 20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div className="footer-content" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap", gap: "30px", width: "100%", maxWidth: "1000px" }}>
          
          <div className="footer-block" style={{ textAlign: "left", flex: 1, minWidth: "250px" }}>
            <h3 className="footer-brand" style={{ display: "inline-block", fontSize: "2rem", marginBottom: "15px", margin: 0 }}>NK.</h3>
            <p style={{ color: "var(--muted)", lineHeight: 1.6, fontSize: "14px", marginTop: "10px" }}>
              Aspiring AI & ML Engineer dedicated to creating data-driven technologies that solve real-world problems and push innovation forward.
            </p>
          </div>

          <div className="footer-block" style={{ flex: 1, minWidth: "250px", display: "flex", flexDirection: "column", gap: "10px", alignItems: "center", justifyContent: "center" }}>
            <h4 style={{ color: "#fff", marginBottom: "5px", fontSize: "16px", fontWeight: "600", margin: 0 }}>Explore</h4>
            <div style={{ display: "flex", gap: "20px", marginTop: "10px" }}>
              <a href="/about" style={{ color: "var(--muted)", textDecoration: "none", fontSize: "14px", transition: "color 0.3s" }} onMouseOver={e=>e.target.style.color="#fff"} onMouseOut={e=>e.target.style.color="var(--muted)"}>About</a>
              <a href="/projects" style={{ color: "var(--muted)", textDecoration: "none", fontSize: "14px", transition: "color 0.3s" }} onMouseOver={e=>e.target.style.color="#fff"} onMouseOut={e=>e.target.style.color="var(--muted)"}>Projects</a>
              <a href="/skills" style={{ color: "var(--muted)", textDecoration: "none", fontSize: "14px", transition: "color 0.3s" }} onMouseOver={e=>e.target.style.color="#fff"} onMouseOut={e=>e.target.style.color="var(--muted)"}>Skills</a>
              <a href="/contact" style={{ color: "var(--muted)", textDecoration: "none", fontSize: "14px", transition: "color 0.3s" }} onMouseOver={e=>e.target.style.color="#fff"} onMouseOut={e=>e.target.style.color="var(--muted)"}>Contact</a>
            </div>
          </div>
          
        </div>
        
        <div style={{ width: "100%", maxWidth: "1000px", height: "1px", background: "rgba(255,255,255,0.08)", margin: "40px 0 20px" }}></div>

        <div className="footer-text" style={{ textAlign: "center", width: "100%" }}>
          © {new Date().getFullYear()} <span>Nishi Kumari</span>. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
