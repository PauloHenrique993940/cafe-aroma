'use client';
import React from 'react';


export default function Contato() {
  return (
    <section id="contato" className="contato-section">
      <h2>Fale Conosco</h2>
      <div className="contato-info">
        <p><strong>Endereço:</strong> Rua Café Quente, 123 - Centro</p>
        <p><strong>WhatsApp:</strong> (71) 90000-0000</p>
        <p><strong>Email:</strong> atendimento@saborearoma.com.br</p>
        <p><strong>Horário:</strong> Seg a Sáb - 8h às 19h</p>
      </div>

      <form className="contato-form">
        <input type="text" placeholder="Seu nome" required />
        <input type="email" placeholder="Seu email" required />
        <textarea placeholder="Sua mensagem" rows={5} required />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}
