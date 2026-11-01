import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">{timelineData.person}'s social media feed</h1>
      </header>

      <main className="App-main">
        <Timeline data={timelineData.events} />
      </main>
    </div>
  );
}

export default App;
