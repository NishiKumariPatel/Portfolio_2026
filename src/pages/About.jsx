import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaSchool, FaGraduationCap } from "react-icons/fa";
import headshot from "../../public/Nishi_Headshot.jpeg";

const AboutMe = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "radial-gradient(circle at top, #0d0d0d, #000)",
        color: "white",
        padding: "3rem 1rem",
      }}
    >
      {/* --- About Me + Education Section --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        style={{
          width: "100%",
          maxWidth: "1100px",
          textAlign: "left",
          marginTop: "1rem",
          lineHeight: 1.8,
          background: "rgba(255,255,255,0.04)",
          padding: "3rem 3.5rem",
          borderRadius: "18px",
          boxShadow: "0 0 25px rgba(0,255,200,0.08)",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* --- Header --- */}
        <h2
          style={{
            fontSize: "1.9rem",
            marginBottom: "1.2rem",
            background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          About Me
        </h2>

        {/* --- Flex Container for Image and text --- */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "2.5rem", alignItems: "flex-start" }}>
          
          {/* --- 3:4 Headshot Rectangle --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              flex: "0 0 280px",
              aspectRatio: "3/4",
              borderRadius: "16px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 10px 30px rgba(0,255,200,0.08)",
            }}
          >
            <img 
              src={headshot} 
              alt="Nishi Kumari" 
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} 
            />
          </motion.div>

          <div style={{ flex: "1 1 400px" }}>
            {/* --- Description --- */}
            <p
              style={{
                fontSize: "1.1rem",
                color: "rgba(255,255,255,0.85)",
                marginBottom: "1rem",
              }}
            >
              Hi, I’m <strong>Nishi Kumari</strong>. As an aspiring professional in Artificial Intelligence and Machine
              Learning, I am passionate about exploring how data-driven
              technologies can transform industries and improve everyday life.
            </p>

            <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.8)", marginBottom: "1rem" }}>
              My interests lie in building intelligent systems, applying machine
              learning models to real-world problems, and continuously advancing
              my technical expertise. I believe in blending creativity with analytical
              thinking to develop impactful solutions.
            </p>

            <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.8)" }}>
                With a strong drive for
                continuous learning and collaboration, I aim to contribute to projects
                that push innovation forward while growing as a technology
                professional.
            </p>
          </div>
        </div>

        {/* --- Education Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          style={{ marginTop: "3rem" }}
        >
          <h3
            style={{
              fontSize: "1.6rem",
              marginBottom: "1.5rem",
              background:
                "linear-gradient(90deg, var(--accent), var(--accent-2))",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Education
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.2rem",
            }}
          >
            {/* --- Education Card 1 --- */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1.5rem 2rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(0,255,200,0.05)",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              <FaUniversity size={40} color="var(--accent)" />
              <div>
                <h4
                  style={{
                    color: "var(--accent)",
                    marginBottom: "0.4rem",
                    fontSize: "1.25rem",
                  }}
                >
                  B.Tech in CSE (Artificial Intelligence & Machine Learning)
                </h4>
                <p
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    marginBottom: "0.2rem",
                  }}
                >
                  <strong>Bengal Institute of Technology</strong> — Kolkata, WB
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  Final Year
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>Aug 2024 – Jul 2027</p>
              </div>
            </motion.div>

            {/* --- Education Card 2 --- */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1.5rem 2rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(0,255,200,0.05)",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              <FaGraduationCap size={38} color="var(--accent)" />
              <div>
                <h4
                  style={{
                    color: "var(--accent)",
                    marginBottom: "0.4rem",
                    fontSize: "1.25rem",
                  }}
                >
                  Diploma in Computer Science & Engineering
                </h4>
                <p
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    marginBottom: "0.2rem",
                  }}
                >
                  <strong>Government Women's Polytechnic</strong> — Muzaffarpur, Bihar
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  Diploma
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>Dec 2021 – May 2024</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
