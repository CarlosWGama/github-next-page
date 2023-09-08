'use client';
import Image from "next/image";
import AppButton from "./button";
import style from './page.module.css';

export default function Tela2() {
    return (
        <main className={style.main}>
            <h1>Tela 2</h1>
            <AppButton texto="Clique-me" onClick={() => alert('Clicou!')}/>

            <Image src='/assets/imgs/stein.jpeg' alt='logo' width={100} height={100}/>
        </main>
    )
}