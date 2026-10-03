import { useState } from "react";
import { Container, Form, Button, Alert, Spinner } from "react-bootstrap";
import { profile } from "../data";

const SHEET_URL = process.env.REACT_APP_SHEET_URL;
const emptyForm = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
        try {
      if (!SHEET_URL) throw new Error("SHEET_URL kosong (variabel belum terbaca)");
      const res = await fetch(SHEET_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(form),
      });
      const result = await res.json();
      if (!result.ok) throw new Error(result.error);
      setForm(emptyForm);
      setStatus("success");
    } catch (err) {
      console.error(err);
      setErrorMsg(String(err.message || err));
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section">
      <Container fluid className="inner">
        <p className="kicker">Kontak</p>
        <h2>Mari Berkolaborasi</h2>
        <p className="lead-text">Tertarik mengajak saya mengerjakan proyek bersama? Kirim pesan atau hubungi saya langsung.</p>
        <div className="mb-4">
          <Button className="btn-accent me-2" href={`mailto:${profile.email}`}>Kirim Email</Button>
          <Button variant="outline-light" href={`https://wa.me/${profile.whatsapp}`} target="_blank">WhatsApp</Button>
        </div>
        <Form onSubmit={handleSubmit} className="contact-form">
          <Form.Group className="mb-3">
            <Form.Label>Nama</Form.Label>
            <Form.Control name="name" value={form.name} onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" value={form.email} onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Pesan</Form.Label>
            <Form.Control as="textarea" rows={4} name="message" value={form.message} onChange={handleChange} required />
          </Form.Group>
          {status === "success" && <Alert variant="success">Pesan terkirim. Terima kasih!</Alert>}
          {status === "error" && <Alert variant="danger">Pesan gagal terkirim. Coba lagi atau kirim lewat email.</Alert>}
          <Button type="submit" className="btn-accent" disabled={status === "loading"}>
            {status === "loading" ? <><Spinner size="sm" className="me-2" />Mengirim...</> : "Kirim pesan"}
          </Button>
        </Form>
      </Container>
      <footer className="site-footer">
        <span>{profile.name} · Thank You</span>
        <div className="socials">
          {profile.socials.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noreferrer">{s.label}</a>
          ))}
        </div>
      </footer>
    </section>
  );
}