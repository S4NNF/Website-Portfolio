import { Carousel, Container, Badge, Button } from "react-bootstrap";
import { projects } from "../data";

// Panah putih buatan sendiri (SVG)
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
        <Carousel interval={null} prevIcon={<Arrow dir="prev" />} nextIcon={<Arrow dir="next" />}>
          {projects.map((p, i) => (
            <Carousel.Item key={p.title}>
              <div className="slide">
                {/* Screenshot projek: tampil sebagai gambar biasa di atas teks */}
                {p.image && <img className="slide-img" src={p.image} alt={`Screenshot ${p.title}`} />}
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