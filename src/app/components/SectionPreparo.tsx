interface ImageTypes {
  imageUrl: string;
  alt: string;
}

export default function SectionPreparo() {
  const atributosImg: ImageTypes[] = [
    {
      imageUrl: "./img/preparo.jpg",
      alt: "Barista preparando o café",
    },
    {
      imageUrl: "./img/xicara.avif",
      alt: "café coado",
    },
    {
      imageUrl: "./img/cafe-leite.jpg",
      alt: "Café com leite",
    },
  ];
  return (
    <section id="preparo">
      <h2>O Preparo Perfeito</h2>
      <div className="container-imagens">
        {atributosImg.map((atributo, index) => (
          <div className="item" key={index}>
            <img src={atributo.imageUrl} alt={atributo.alt} />
            <p>{atributo.alt}</p>
          </div>
        ))}
      </div>
      <p className="descricao">
        Nosso café é preparado por baristas experientes que garantem o sabor e
        aroma únicos em cada xícara. Desde o grão até a sua mesa, tudo com muito
        carinho e técnica.
      </p>
    </section>
  );
}
