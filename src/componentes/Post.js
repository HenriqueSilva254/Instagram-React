import { useState } from "react"
let contador = 0


export default function Post(props){
  let [likes, setLikes] = useState(99999)

    return (
      
      <div class="post" data-test="post">
        <div class="topo">
          <div class="usuario">
            <img src={props.perfil} alt={props.alt}/>
            {props.alt}
          </div>
          <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>
    
        <div class="conteudo">
          <img src={props.imagem} alt={props.alt_imagem} data-test="post-image" onDoubleClick={ CurtirDoubleClick }/>
        </div>
    
        <div class="fundo">
          <div class="acoes">
            <div>
              <div  onClick={Curtir} id={props.alt} class="coracao"><ion-icon data-test="like-post" name="heart-outline"></ion-icon></div>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div  data-test="save-post" id={props.save} onClick={Salvar}>
              <ion-icon name="bookmark-outline"></ion-icon> 
            </div>
          </div>
    
          <div class="curtidas">
            <img src={props.imagem_curtidas} alt={props.alt_cutidas} />
            <div id={props.alt_cutidas} data-test="likes-number" class="texto">
              Curtido por <strong>respondeai</strong> e <strong>outras {likes} pessoas</strong>
            </div>
          </div>
        </div>
      </div>
      
    )
    function Salvar(){
      const salvar = document.getElementById(props.save)
     
      if(contador === 0 ){
        salvar.innerHTML = ` <ion-icon name="bookmark"></ion-icon>`
        
        contador = 1
        }else{ 
        salvar.innerHTML = `<ion-icon name="bookmark-outline"></ion-icon>`
        contador = 0
              }
    }
    function Curtir(){
      const curtiu = document.getElementById(props.alt)
      const curtidas = document.getElementById(props.alt_cutidas)
      if(contador === 0 ){
        curtiu.innerHTML = `<ion-icon data-test="like-post" name="heart"></ion-icon>`
        curtiu.style.color = "red"
        contador = 1
        likes++
        setLikes(likes)
        curtidas.innerHTML = `Curtido por <strong>respondeai</strong> e <strong>outras ${likes} pessoas</strong>`
      }else{ 
        curtiu.innerHTML = `<ion-icon data-test="like-post" name="heart-outline"></ion-icon>`
        curtiu.style.color = "black"
        contador = 0
        likes--
        setLikes(likes)
        curtidas.innerHTML = `Curtido por <strong>respondeai</strong> e <strong>outras ${likes} pessoas</strong>`
      }
      
    }
    function CurtirDoubleClick(){
      const curtiu = document.getElementById(props.alt)
      const curtidas = document.getElementById(props.alt_cutidas)
      if(contador === 0 ){
        curtiu.innerHTML = `<ion-icon data-test="like-post" name="heart"></ion-icon>`
        curtiu.style.color = "red"
        contador = 1
        likes++
        setLikes(likes)
        curtidas.innerHTML = `Curtido por <strong>respondeai</strong> e <strong>outras ${likes} pessoas</strong>`
      }else {contador = 0}
    }

  }