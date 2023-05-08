import { useState } from 'react';
import ReactDOM from 'react-dom';


export default function User() {
    let [perfil, setPerfil] = useState("assets/img/catanacomics.svg")
    let [nome, setNome] = useState("catanacomics")
   
    return (
        <div class="usuario">
            <div id="fotoPerfil" onClick={MudarImagem}>
                <img data-test="profile-image" src={perfil} alt="imagem de perfil" />
            </div>
            <div class="texto">
                <span id="nome" >
                    <strong data-test="name">{nome}</strong>
                    <ion-icon onClick={Mudanome} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )

    function Mudanome() {
        const nomePrompt = prompt('Digite seu nome')

        if (nomePrompt === '') {

        } else {
            nome = nomePrompt
            setNome(nome)
            return (
                <span id="nome" >
                    <strong data-test="name">{nome}</strong>
                    <ion-icon onClick={Mudanome} name="pencil"></ion-icon>
                </span>
            )
        }if (nomePrompt !== ''){
            ReactDOM.render(<Mudanome />, document.querySelector('.texto'))
        }
    }
    function MudarImagem() {
        const foto = document.getElementById('fotoPerfil')
        const Url = prompt('Digite uma URL de imagem, para alterar sua imagem de perfil')

        const verificador = Url.slice(0, 5)

        if (verificador === 'https') {
            perfil = Url
            setPerfil(perfil)
            foto.innerHTML = `<img data-test="profile-image" src=${perfil} alt="imagem de perfil"/>`
        }

    }

}