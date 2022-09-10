import Image from "next/image"
import styles  from "../styles/About.module.css"
export default function About(){
    return (
        <div className={styles.about}>
            <h1>
                Sobre o Projeto
            </h1>
            <p>O objetivo deste projeto é aprender mais sobre o Next Js utilizando a PokemonApi
                . O Next Js é uma ótima ferramenta para produção rápida e eficiente para criação de páginas web.
                Aproveite o Projeto e obrigado por sua atenção.
                </p>
            <Image src="/images/charizard.png"  width="300" height="300" alt="Charizard"/>
        </div>
    )
}