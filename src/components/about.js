import { Container, Row, Col, Button } from "react-bootstrap";
import { profile } from "../data";

export default function About({ onNavigate }) {
  return (
    <section id="about" className="section">
      <Container fluid className="inner">
        <p className="kicker">Tentang Saya</p>
        <h2>{profile.aboutTitle}</h2>
        <p className="lead-text">{profile.bio}</p>
        <Button className="btn-accent mb-4" onClick={() => onNavigate("projects")}>Lihat Portofolio</Button>
        <Row className="g-3">
          {profile.info.map((i) => (
            <Col xs={6} key={i.label}>
              <div className="info-box">
                <span>{i.label}</span>
                <strong>{i.value}</strong>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}