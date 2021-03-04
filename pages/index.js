function Home(props) {
    const dataDinamica = new Date();
    const dataDinamicaStr = dataDinamica.toGMTString();

    return (
        <div>
            <div>
                <p>Olá, mundo!</p>
            </div>
            <div>{dataDinamicaStr} (dinâmico)</div>
            <br />
            <div>{props.dataEstaticaStr} (estático)</div>
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