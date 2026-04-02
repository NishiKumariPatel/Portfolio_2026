import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CERTS = {
  "Cloud & Data": [
    {
      title: "Google Analytics 4 (GA4)",
      org: "Udemy",
      date: "2025",
      img: "/certs/Udemy_Google_G4.jpeg",
      link: "/certs/Udemy_Google_G4.jpeg",
    },
    {
      title: "Mastering AWS Serverless",
      org: "Udemy",
      date: "2025",
      img: "/certs/Udemy_AWS_Serverless.jpeg",
      link: "/certs/Udemy_AWS_Serverless.jpeg",
    },
  ],
  "Development": [
    {
      title: "Web Development",
      org: "Certification",
      date: "2024",
      img: "/certs/Nishi Kumari _WebDevelopmentCertificate_page-0001.jpg",
      link: "/certs/Nishi Kumari _WebDevelopmentCertificate_page-0001.jpg",
    },
    {
      title: "Android Development",
      org: "Certification",
      date: "2024",
      img: "/certs/Android_DEV_Certificate-147.jpg",
      link: "/certs/Android_DEV_Certificate-147.jpg",
    },
  ],
  "Networking & Security": [
    {
      title: "Cyber Security",
      org: "CISCO",
      date: "2024",
      img: "/certs/NishiKumari-cyber security-certificate_page-0001.jpg",
      link: "/certs/NishiKumari-cyber security-certificate_page-0001.jpg",
    },
    {
      title: "Packet Tracer",
      org: "CISCO",
      date: "2024",
      img: "/certs/NishiKumari-AICTE-CISCO INTE-certificate (2)_page-0001.jpg",
      link: "/certs/NishiKumari-AICTE-CISCO INTE-certificate (2)_page-0001.jpg",
    },
    {
      title: "Networking & Support",
      org: "CISCO",
      date: "2024",
      img: "/certs/NishiKumari-AICTE-CISCO INTE-certificate (3)_page-0001.jpg",
      link: "/certs/NishiKumari-AICTE-CISCO INTE-certificate (3)_page-0001.jpg",
    },
  ],
  "Achievements": [
    {
      title: "Skill Certification",
      org: "Institute",
      date: "2024",
      img: "/certs/6637ae76-0895-41db-a510-a97194624263_page-0001.jpg",
      link: "/certs/6637ae76-0895-41db-a510-a97194624263_page-0001.jpg",
    },
  ],
};

export default function Certificates() {
  const [tab, setTab] = useState(Object.keys(CERTS)[0]);
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="container" style={{ padding: "40px 0" }}>
      <div className="card" style={{ background: "#111", borderRadius: 12, padding: 24 }}>
        <h2 style={{ fontSize: "1.8rem", color: "#fff", marginBottom: 4 }}>Certificates</h2>
        <p className="lead" style={{ color: "#aaa" }}>
          Explore my certifications — technical & others.
        </p>

        {/* Tabs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 16 }}>
          {Object.keys(CERTS).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={tab === t ? "tab active" : "tab"}
              style={{
                padding: "8px 18px",
                borderRadius: 8,
                border: "none",
                cursor: "pointer",
                background: tab === t ? "#0ea5e9" : "#333",
                color: "#fff",
                fontWeight: 500,
                transition: "0.3s",
              }}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div
          className="certs-grid"
          style={{
            marginTop: 28,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          <AnimatePresence mode="wait">
            {CERTS[tab].map((c, idx) => (
              <motion.div
                key={c.title}
                className="cert card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 15px rgba(0, 123, 255, 0.4)",
                }}
                style={{
                  background: "#1a1a1a",
                  borderRadius: 12,
                  padding: 16,
                  color: "#fff",
                }}
              >
                <img
                  src={c.img}
                  alt={c.title}
                  style={{
                    width: "100%",
                    height: 160,
                    borderRadius: 10,
                    objectFit: "contain",
                    backgroundColor: "#050505",
                    marginBottom: 12,
                  }}
                />
                <strong style={{ fontSize: 16 }}>{c.title}</strong>
                <div className="muted" style={{ fontSize: 13, color: "#bbb" }}>
                  {c.org} • {c.date}
                </div>

                <div style={{ marginTop: 12 }}>
                  <button
                    className="btn"
                    onClick={() => setSelectedCert(c)}
                    style={{
                      background: "#007bff",
                      border: "none",
                      color: "white",
                      borderRadius: 6,
                      padding: "6px 14px",
                      cursor: "pointer",
                    }}
                  >
                    View
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal Preview */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0,0,0,0.8)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
            }}
            onClick={() => setSelectedCert(null)}
          >
            {selectedCert.link && selectedCert.link.toLowerCase().endsWith(".pdf") ? (
              <iframe
                src={selectedCert.link}
                title={selectedCert.title}
                style={{
                  width: "85%",
                  height: "85%",
                  borderRadius: 10,
                  border: "none",
                  boxShadow: "0 0 25px rgba(255,255,255,0.2)",
                  background: "#fff",
                }}
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <motion.img
                src={selectedCert.link}
                alt={selectedCert.title}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                style={{
                  maxWidth: "90%",
                  maxHeight: "85%",
                  borderRadius: 10,
                  boxShadow: "0 0 25px rgba(255,255,255,0.2)",
                }}
                onClick={(e) => e.stopPropagation()}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
