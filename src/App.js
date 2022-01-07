import Navbar from './components/Navbar.jsx';
import './App.css';
import Sidebar from './components/Sidebar.jsx';
import Main from './components/Main.jsx';

function App() {
  return (
    <div className='App'>
      <Sidebar />
      <div className='Main'>
        <Navbar />
        <Main />
      </div>
    </div>
  );
}

export default App;
