"use client"
export default function Header() {
    return (
        <header>
            <img src="/img/imagem-Banner.jpg" alt="Cafeteria" className="capa" />
            <div className="header-conteudo">
                <h1>Cafeteria Sabor e Aroma</h1>
                <p>Cafés especiais direto na sua casa!</p>
                <button onClick={() => scrollToSection('produtos')}>Comprar Agora</button>
                <button onClick={() => scrollToSection('contato')}>Fale Conosco</button>

            </div>
        </header>
    )
}

