import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import Main from './components/Main.jsx';

function App() {
  return (
    <div className='flex flex-1 h-screen w-screen'>
      <Sidebar />
      <div className='flex  flex-col lg:flex-8 flex-1 '>
        <Navbar />
        <Main />
      </div>
    </div>
  );
}

export default App;
