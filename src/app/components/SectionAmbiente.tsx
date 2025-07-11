


interface ConteudoTypes {
    newImage: string,
    newDescribe: string

}
export default function SectionAmbiente() {
    const conteudoImg: ConteudoTypes[] = [
        {
            newImage: "./img/interior.jpg",
            newDescribe: "Interior da cafeteria"
        },
        {
            newImage: "./img/cafe-pao.avif",
            newDescribe: "Mesa com chicara de café"
        }
    ]
    return (
        <section id="ambiente">
            <h2>Nosso Ambiente</h2>
            <div className="container-ambiente">
                {conteudoImg.map((image, index) => (
                    <div key={index} className="ambiente-container">
                        <img src={image.newImage} alt={image.newDescribe} className="ambienteImg" />
                    </div>

                ))}
            </div>
            <p>
                Um espaço acolhedor, perfeito para relaxar, trabalhar ou reunir amigos. Venha conhecer e sentir o aroma do nosso café em um ambiente agradável.

            </p>
        </section>
    )
}