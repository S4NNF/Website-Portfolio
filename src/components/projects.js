import { Carousel, Container, Badge, Button } from "react-bootstrap";
import { projects } from "../data";

// Panah buatan sendiri (SVG). Warna panah ada di stroke="#ffffff"
function Arrow({ dir }) {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff"
         strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points={dir === "prev" ? "15 4 7 12 15 20" : "9 4 17 12 9 20"} />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <Container fluid className="inner">
        <p className="kicker">Portofolio</p>
        <h2>Proyek Pilihan</h2>
        <Carousel interval={5000} prevIcon={<Arrow dir="prev" />} nextIcon={<Arrow dir="next" />}>
          {projects.map((p, i) => (
            <Carousel.Item key={p.title}>
              {/* Kalau projek punya field "image" di data.js, gambarnya jadi latar kartu */}
              <div
                className="slide"
                style={p.image ? {
                  backgroundImage: `linear-gradient(rgba(11,15,20,.75), rgba(11,15,20,.85)), url(${p.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                } : undefined}
              >
                <small>Project {i + 1}</small>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="mb-3">
                  {p.tech.map((t) => (
                    <Badge key={t} bg="dark" className="me-2">{t}</Badge>
                  ))}
                </div>
                <Button className="btn-accent" size="sm" href={p.link} target="_blank" rel="noreferrer">
                  Lihat projek
                </Button>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
}