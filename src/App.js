import './App.css';
import { MonComposantClass, MonComposantFonction } from './components/MyComponent';
import { HeaderBar } from './components/header/HeaderBar';
import { ArticleList } from './components/articles/ArticleList';
import { LoginCard } from './components/login/LoginCard';

function App() {
  const users = [
    "User 1",
    "User 2",
    "User 3",
    "User 4",
    "User 5",
  ]

  const articles = [
    {
      titre:"Toto mange un pomme",
      date:"01/02/2003",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      img: "http://....",
      auteur: {
        speudo: "Jean Michou",
        metier: "redacteur en chef"
      },
      commentaires:[
        {auteur:{
          speudo: "Jean Michou",
          metier: "redacteur en chef"
        }, body: "Merci pour cette article incroyable! Vraiment un bon journaliste!!!"},
        {auteur:{
          speudo: "Michou Jean",
          metier: "Tricheur",
          imgSrc: "https://resize.programme-television.ladmedia.fr/r/670,670/img/var/premiere/storage/images/tele-7-jours/news-tv/mort-de-michou-pierre-jean-chalencon-en-larmes-a-l-evocation-de-son-ami-video-4654435/99061014-1-fre-FR/Mort-de-Michou-Pierre-Jean-Chalencon-en-larmes-a-l-evocation-de-son-ami-VIDEO.jpg"
        }, body: "Super!"}
      ]
    },
    {
      titre:"Toto mange une autre pomme",
      date:"01/02/2003",
      body: "Evenement interplanetaire: Toto a mangé une pomme",
      img: "http://....",
      auteur: {
        speudo: "Jean Michou",
        metier: "redacteur en chef"
      },
      commentaires:[
        {auteur:{
          speudo: "Jean Michou",
          metier: "redacteur en chef"
        }, body: "Merci pour cette article incroyable! Vraiment un bon journaliste!!!"}
      ]
    }
  ]
  return (
    <div className="App">
      {/* <HeaderBar/>
      <ArticleList articles={articles}/> */}
      <LoginCard/>
      <MonComposantClass message="Mon message"/>
      <MonComposantFonction message="Mon message"/>
    </div>
  );
}

export default App;
