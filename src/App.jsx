import MainContent from './components/MainContent';
import logo from './assets/images/logo.png';

function App() {
  return (
    <base>
      <header>
        <div id="logo-img">
          <img src={logo} />
        </div>
        <h1>Learn & Master GitHub Actions</h1>
      </header>
      <MainContent />
    </base>
  );
}

export default App;
