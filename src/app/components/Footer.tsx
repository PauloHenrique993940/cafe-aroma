'use client';


export default function Footer() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
        <hr />
      <p>&copy; 2025 Cafeteria Sabor e Aroma</p>
      <p>
        <a href="#" onClick={() => scrollToSection('contato')}>Instagram</a> |{' '}
        <a href="#" onClick={() => scrollToSection('contato')}>Facebook</a> |{' '}
        <a href="#" onClick={() => scrollToSection('contato')}>WhatsApp</a>
      </p>
    </footer>
  );
}
