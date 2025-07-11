"use client";

import { useState } from "react";

interface ImageTypesOrigens {
  url: string;
  describe: string;
}

export default function SectionOrigens() {
  const atributosImg: ImageTypesOrigens[] = [
    {
      url: "./img/fazenda.jpg",
      describe: "fazenda de café",
    },
    {
      url: "./img/graos.jpg",
      describe: "café coado",
    },
  ];

  return (
    <section id="origem">
      <h2>Origem dos Nossos Grãos</h2>
      <div className="container-imagens">
        {atributosImg.map((atributo, index) => (
          <ImageWithFallback key={index} src={atributo.url} alt={atributo.describe} />
        ))}
      </div>
      <p className="descricao">
        Selecionamos os melhores grãos das regiões mais tradicionais do Brasil,
        garantindo qualidade, sabor e sustentabilidade em cada colheita.
      </p>
    </section>
  );
}

interface ImageWithFallbackProps {
  src: string;
  alt: string;
}

function ImageWithFallback({ src, alt }: ImageWithFallbackProps) {
  const [erro, setErro] = useState(false);

  return (
    <div className="item">
      {!erro ? (
        <img src={src} alt={alt} onError={() => setErro(true)} />
      ) : (
        <p>{alt}</p>
      )}
    </div>
  );
}
