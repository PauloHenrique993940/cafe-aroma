'use client';
import { useState } from 'react';

type Item = { nome: string; preco: string; imagem: string };

const categorias: Record<string, { nome: string; itens: Item[] }> = {
  cafes: {
    nome: 'Cafés',
    itens: [
      { nome: 'Espresso', preco: 'R$ 6,00', imagem: 'https://s2-receitas.glbimg.com/6jn_UQlCTjvBvsygxcyf-WF226k=/0x0:1200x675/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2024/H/q/QocgYnTUaBxbG5ELYUMQ/pao-de-queijo-com-cream-cheese-e-ricota-light.jpg' },
      { nome: 'Café coado', preco: 'R$ 5,00', imagem: 'https://cafefazendaalianca.com.br/wp-content/uploads/2021/12/diferenca-de-cafe-coado-e-cafe-expresso.jpg' },
      { nome: 'Cappuccino', preco: 'R$ 9,00', imagem: 'https://www.lecreuset.com.br/dw/image/v2/BDRT_PRD/on/demandware.static/-/Sites-le-creuset-br-master/default/dw85a7cb0f/images/Cappuccino-caseiro-receita-le_creuset.png?sw=650&sh=650&sm=fit' },
      { nome: 'Latte', preco: 'R$ 8,00', imagem: 'https://www.cuisinart.com/dw/image/v2/ABAF_PRD/on/demandware.static/-/Sites-us-cuisinart-sfra-Library/default/dw2ca0aa66/images/recipe-Images/cafe-latte1-recipe.jpg?sw=1200&sh=630' },
    ],
  },
  geladas: {
    nome: 'Bebidas Geladas',
    itens: [
      { nome: 'Cold Brew', preco: 'R$ 10,00', imagem: 'https://www.wellcoffee.com.br/wp-content/uploads/2020/02/cold-brew.jpg' },
      { nome: 'Café Gelado com Leite', preco: 'R$ 11,00', imagem: 'https://cdn.shopify.com/s/files/1/0684/0877/0860/files/copo-de-cafe-gelado-com-leite-e-colher_480x480.jpg' },
      { nome: 'Frappuccino', preco: 'R$ 12,00', imagem: 'https://parade.com/.image/ar_1:1,c_fill,cs_srgb,fl_progressive,q_auto:good,w_1200/MjA5NjYwMzk1MTQzNTcwODc0/copycat-frappuccino-recipe.jpg' },
      { nome: 'Suco de Laranja', preco: 'R$ 5,00', imagem: 'https://s2-globorural.glbimg.com/z2hYaq0UftCO0v8brR_FtJI0e50=/0x0:2048x1365/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_afe5c125c3bb42f0b5ae633b58923923/internal_photos/bs/2022/6/A/xDQ31DQqAS0DWYqQG9Aw/2019-01-15-31617293018-896bf29d55-k.jpg' },
    ],
  },
  salgados: {
    nome: 'Salgados',
    itens: [
      { nome: 'Pão de Queijo', preco: 'R$ 4,00', imagem: 'https://receitadaboa.com.br/wp-content/uploads/2024/08/Imagem-ilustrativa-de-pao-de-queijo-3.webp' },
      { nome: 'Empada de Frango', preco: 'R$ 6,00', imagem: 'https://seletosabor.com/media/catalog/product/cache/1/image/500x500/9df78eab33525d08d6e5fb8d27136e95/c/_/c_pia_de_10.png' },
      { nome: 'Quiche de Alho Poró', preco: 'R$ 8,00', imagem: 'https://s2-receitas.glbimg.com/mRPiKE_o8wCLhHGfJ0Dekub3PRw=/0x0:1510x647/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2024/j/s/eXEcd7QMyY2wTwIzTUhw/quiche-de-alho-poro-e-queijo.jpg' },
      { nome: 'Cochinha de Carne', preco: 'R$ 7,50', imagem: 'https://www.estadao.com.br/resizer/v2/Q7HKQKQW4RDTFMK7CR4ZZWTTTI.JPG?quality=80&auth=060f77d9ab978eace9c4b28ec294049d907aac5dbed5157f114eb18088799e0f&width=1075&height=527&focal=2436,1420' },
    ],
  },
  doces: {
    nome: 'Doces',
    itens: [
      { nome: 'Bolo de Cenoura com Chocolate', preco: 'R$ 7,00', imagem: 'https://canaldareceita.com.br/wp-content/uploads/2025/01/BOLO-DE-CENOURA-FOFINHO-DE-LIQUIDIFICADOR.jpg.webp' },
      { nome: 'Torta de Limão', preco: 'R$ 6,50', imagem: 'https://images.aws.nestle.recipes/original/efde94328c90a3df9c569a57186862e0_19_torta_limao.png' },
      { nome: 'Brownie', preco: 'R$ 6,00', imagem: 'https://www.acasaencantada.com.br/wp-content/uploads/2020/05/Brownie-fa%CC%81cil-final.mp4.00_01_02_11.Quadro008.jpg' },
      { nome: 'Torta de Pêssego', preco: 'R$ 7,99', imagem: 'https://i.panelinha.com.br/i1/bk-8107-torta-de-pessego.webp' },
    ],
  },
};

export default function Cardapio() {
  const [categoria, setCategoria] = useState('cafes');
  const { nome, itens } = categorias[categoria];

  return (
    <section id="cardapio">
      <h2>Cardápio</h2>

      <div className="botoes-categorias">
        {Object.entries(categorias).map(([id, cat]) => (
          <button key={id} onClick={() => setCategoria(id)} className={categoria === id ? 'ativo' : ''}>
            {cat.nome}
          </button>
        ))}
      </div>

      <div className="categoria-conteudo">
        <h3>{nome}</h3>
        <div className="itens">
          {itens.map((item, i) => (
            <div className="item-cardapio" key={i}>
              <img src={item.imagem} alt={item.nome} />
              <div>
                <p><strong>{item.nome}</strong></p>
                <p>{item.preco}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
