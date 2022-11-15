import "./styles/app.scss";

function App() {
  return (
    <div id="App">
      <div id="big-title">
        <div id="title-container">
          <div id="header-1">
            <img src="header.png" />
            <span>The</span>
          </div>
          <h1 id="header-2">Fastest, Most Accurate</h1>
          <h1 id="header-3">Way to Close Your Books!</h1>
        </div>
      </div>
      <div id="section">
        <div id="section-title">
          <h1>SCHEDULE A DEMO</h1>
          <h3>Learn More About FloQast.</h3>
        </div>
        <div id="section-body">
          <h2>
            Learn How FloQast Can <span>Improve Your Month-End</span>
          </h2>
          <div id="input-button-container">
            <input type="text" placeholder="First Name∗" />
            <input type="text" placeholder="Email∗" />
            <button>SCHEDULE NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
