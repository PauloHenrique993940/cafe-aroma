interface TypesCards {
  ImgUrl: string;
  tituloDoCard: string;
  paragrafo: string;
  valor: number;
}

export default function Section() {
  const cards: TypesCards[] = [
    {
      ImgUrl: "/img/graos-de-cafe.jpg",
      tituloDoCard: "Café em Grãos 250g",
      paragrafo: "Grãos 100% arábica torrados artesanalmente.",
      valor: 24.9,
    },
    {
      ImgUrl: "/img/cafe-moido.jpg",
      tituloDoCard: "Café Moído 250g",
      paragrafo: "Perfeito para coador ou prensa francesa.",
      valor: 22.9,
    },
    {
      ImgUrl: "/img/cafe-gelado.jpg",
      tituloDoCard: "Café Gelado 300ml",
      paragrafo: "Refrescante e pronto para beber. Baixo teor de açúcar.",
      valor: 12.89,
    },
  ];

  return (
    <section id="produtos">
      <h2>Nosso Café</h2>
      <div className="cards">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.ImgUrl} alt={card.tituloDoCard} />
            <h3>{card.tituloDoCard}</h3>
            <p>{card.paragrafo}</p>
            <p>
              <strong>
                {card.valor.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </strong>
            </p>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <button>Comprar</button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
