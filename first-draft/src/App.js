import Dashboard from './pages/dashboard/Dashboard.js';
import Header from './components/header/Header';
import './assets/scss/_imports.scss';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
