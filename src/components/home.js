import { Container, Button } from "react-bootstrap";
import { profile } from "../data";

export default function Home({ onNavigate }) {
  return (
    <section id="home" className="section hero">
      {profile.video && (
        <video className="hero-video" src={profile.video} autoPlay muted loop playsInline />
      )}
      <div className="hero-overlay" />
      <Container fluid className="hero-inner">
        <h2 className="hero-title">{profile.name}: {profile.headline}</h2>
        <p className="hero-tagline">{profile.tagline}</p>
        <Button className="btn-accent" onClick={() => onNavigate("contact")}>Kolaborasi Project</Button>
        <div className="socials mt-4">
          {profile.socials.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noreferrer">{s.label}</a>
          ))}
        </div>
      </Container>
    </section>
  );
}