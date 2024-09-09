import './App.css';
import Form from './components/Form'

function App() {
  return (
    <div className="App columns-2">
      <div class="relative">
        <div className='bg-violet-950 h-screen'></div>
        <div className='h-screen'></div>
      </div>
      <div class="absolute inset-0">
        <Form />
      </div>
    </div>
  );
}

export default App;
