import './EightBall.css'
import EightBall from './EightBall'
import answers from './answers'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>I made a change</h1>
      <EightBall answers={answers} />
    </div>
  );
}

export default App;
