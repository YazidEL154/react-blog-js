import './App.css';
import { HeaderBar } from './components/header/HeaderBar';
import { ArticleLayout } from './layouts/ArticleLayout';

function App() {

  return (
    <div className="App">
      <HeaderBar/>
      <ArticleLayout/>
    </div>
  );
}

export default App;
