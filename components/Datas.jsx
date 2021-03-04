function Datas(props) {
    const dataDinamica = new Date();
    const dataDinamicaStr = dataDinamica.toGMTString();

    console.log(props)
    console.log(props.dataEstaticaStr)

    return (
        <div>
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
        revalidate: 1
        //Será atualizada/revalidada a cada 1 segundo
    }
}

export default Datas;