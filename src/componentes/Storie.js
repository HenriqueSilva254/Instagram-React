export default function Storie(props){
    return (
      <div class="story">
                  <div class="imagem">
                    <img src={props.imagem} alt={props.alt}/>
                  </div>
                  <div class="usuario">
                   {props.alt}
                  </div>
                </div>
    )
  }