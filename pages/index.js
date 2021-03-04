function Home(props) {
    const dataDinamica = new Date();
    const dataDinamicaStr = dataDinamica.toGMTString();

    return (
        <div>
            <div>
                <p>Olá, mundo!</p>
            </div>
            <div>
                <strong>{dataDinamicaStr}</strong> (renderizado dinâmicamente a cada request)
            </div>
            <br />
            <div>
                <strong>{props.dataEstaticaStr}</strong> (renderizado no build e ficando estático por <strong> 5 segundos</strong>, até ser revalidado/atualizado),
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const dataEstatica = new Date();
    const dataEstaticaStr = dataEstatica.toGMTString();

    return {
        props: {
            dataEstaticaStr
        },
        revalidate: 5
        //Será atualizada/revalidada a cada 1 segundo
    }
}

export default Home;