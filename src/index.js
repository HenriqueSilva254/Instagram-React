import ReactDOM from 'react-dom';
import NavBar from './componentes/NavBar';
import Body from './componentes/Body';

function App(){
    return (
        <div>
           <NavBar />
           
    <Body />
        </div>
    )
}
/* 
function Body(){}

function SideBar(){}

function NavBar(){
    return (
         <div class="container">
        <div class="logo">
          <ion-icon name="logo-instagram"></ion-icon>
          <div class="separador"></div>
          <img src="assets/img/logo.png" alt="logo"/>
        </div>

        <div class="pesquisa">
          <input type="text" placeholder="Pesquisar" />
        </div>

        <div class="icones">
          <ion-icon name="paper-plane-outline"></ion-icon>
          <ion-icon name="compass-outline"></ion-icon>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="person-outline"></ion-icon>
        </div>

        <div class="icones-mobile">
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
      </div>
    )
}

function User(){}

function Stories(){}

function Story(){}

function Posts(){}

function Post(){}

function Suggestions(){}

function Suggestion(){

}
*/

ReactDOM.render(App(), document.querySelector('.root'))