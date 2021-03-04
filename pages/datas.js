import {useState} from 'react'

function Datas(props) {
    const dataDinamica = new Date();
    const dataDinamicaStr = dataDinamica.toGMTString();

    return (
        <div>
            <div>{dataDinamicaStr} (dinâmico)</div>
            <br />
            <div>{props.dataEstaticaStr} (estático)</div>
        </div>
    )
}

export async function getStaticProps() {
    console.log('passei')
    const dataEstatica = new Date();
    const dataEstaticaStr = dataEstatica.toGMTString();

    return {
        props: {
            dataEstaticaStr
        },
        revalidate: 5
        //Será atualizada/revalidada a cada 5 segundo
    }
}

export default Datas;