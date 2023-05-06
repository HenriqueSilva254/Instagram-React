import Post from "./Post"

export default function Posts(){
    return (
        <div class="posts">
          <Post save="1" perfil="assets/img/meowed.svg" imagem="assets/img/gato-telefone.svg" alt="meowed" alt_imagem="gato-telefone" imagem_curtidas="assets/img/respondeai.svg" alt_cutidas="respondeai"/>
          <Post save="2" perfil="assets/img/barked.svg" imagem="assets/img/dog.svg" alt="barked" alt_imagem="gog"  imagem_curtidas="assets/img/adorable_animals.svg" alt_cutidas="adorable_animals"/>
          <Post save="3" perfil="assets/img/meowed.svg" imagem="assets/img/gato-telefone.svg" alt="Cats" alt_imagem="gato-telefone" imagem_curtidas="assets/img/respondeai.svg" alt_cutidas="Driven"/>
        </div>
    )
}
