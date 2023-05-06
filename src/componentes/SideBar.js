import Suggestions from './Suggestions';
import { useState } from "react"

export default function SideBar(){
  let [perfil, setPerfil] = useState("assets/img/catanacomics.svg")
    return (
        <div class="sidebar">
        <div class="usuario">
          <div id="fotoPerfil" onClick={MudarImagem}>
          <img  data-test="profile-image" src={perfil} alt="imagem de perfil"/>
          </div>
          <div class="texto">
            <span>
              <strong>catanacomics</strong>
              <ion-icon name="pencil"></ion-icon>
            </span>
          </div>
        </div>


        <Suggestions />
        
        <div class="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
          Hashtags • Idioma
        </div>

        <div class="copyright">
          © 2021 INSTAGRAM DO FACEBOOK
        </div>
      </div>
    )
    function MudarImagem(){
      const foto = document.getElementById('fotoPerfil')
      const Url = prompt('Digite uma URL de imagem, para alterar sua imagem de perfil')
      
      const verificador = Url.slice(0, 5)
      
      if (verificador === 'http:') {
        perfil = Url
        setPerfil(perfil)
        foto.innerHTML = `<img data-test="profile-image" src=${perfil} alt="imagem de perfil"/>`}
      }

    }
