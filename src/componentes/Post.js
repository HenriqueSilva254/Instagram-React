let likes = 99999
let contador = 0
export default function Post(props){
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
          <img src={props.imagem} alt={props.alt_imagem} data-test="post-image" onDoubleClick={Curtir}/>
        </div>
    
        <div class="fundo">
          <div class="acoes">
            <div>
              <div data-test="like-post" onClick={Curtir} id={props.alt} class="coracao"><ion-icon name="heart-outline"></ion-icon></div>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <div data-test="save-post" class="save"><ion-icon name="paper-plane-outline"></ion-icon></div>
            </div>
            <div>
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
    function Curtir(){
      const curtiu = document.getElementById(props.alt)
      const curtidas = document.getElementById(props.alt_cutidas)
      if(contador === 0 ){
        curtiu.innerHTML = `<ion-icon name="heart"></ion-icon>`
        curtiu.style.color = "red"
        contador = 1
        likes++
        curtidas.innerHTML = `Curtido por <strong>respondeai</strong> e <strong>outras ${likes} pessoas</strong>`
      }else{ 
        curtiu.innerHTML = `<ion-icon name="heart-outline"></ion-icon>`
        curtiu.style.color = "black"
        contador = 0
        likes--
        curtidas.innerHTML = `Curtido por <strong>respondeai</strong> e <strong>outras ${likes} pessoas</strong>`
      }
      
    }
  }

  