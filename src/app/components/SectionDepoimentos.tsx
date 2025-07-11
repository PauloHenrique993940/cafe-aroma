
interface FeedebacksTypes {
    name: string,
    coment: string
}

export default function SectionDepoimentos(){
    const comentariosFeed: FeedebacksTypes[] = [
        {
            name: "Juliana R.",
            coment: "O café moído deles é simplesmente perfeito!"
        },
        {
            name: "Lucas M.",
            coment: "Comprei para minha mãe e ela amou. Entrega rápida!"

        },{
            name: "Ana C.",
            coment: "O café gelado é maravilhoso. Já virou meu favorito. "
        }
    ]
    return (
        <section id="feedeback">
            <h2>Depoimentos de Clientes</h2>
            <div className="feedbacks" >
                {comentariosFeed.map((item, index) => (
                    <div className="feedback" key={index}>
                        <strong>{item.name}</strong>
                        <p>{item.coment}</p>

                    </div>
                ))}

            </div>
        </section>
    )
}