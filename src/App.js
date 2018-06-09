import React, {Component} from 'react';
import {} from 'react-router-dom';
import 'bulma/css/bulma.css';
import Table from './components/table';
import laLiga from './data/laLiga.json';

class App extends Component {

  render() {
    return (
      <div>
        <header className="container">
          <section className="hero is-dark">
            <div className="hero-body">
              <div className="container">
                <h1 className="title">
                  80/20 Insights
                </h1>
                <h2 className="subtitle">
                  Getting a new point of view using the 80/20 principle
                </h2>
              </div>
            </div>
          </section>
        </header>
        <main className="container">
          <section className="section">
            <div className="container">
              <h2 class="title is-3">La Liga 80/20 Points</h2>
              <Table
                title="Spanish League Goals"
                data={laLiga}
                universe="equip"
                field="punts"/>
            </div>
          </section>
          <section className="section">
            <div className="container">
              <h2 class="title is-3">La Liga 80/20 Goals</h2>
              <Table
                title="Spanish League Goals"
                data={laLiga}
                universe="equip"
                field="gols"/>
            </div>
          </section>
          <section className="section">
            <div className="container">
              <h2 class="title is-3">La Liga 80/20 Goals Against</h2>
              <Table
                title="Spanish League Goals"
                data={laLiga}
                universe="equip"
                field="golsC"/>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
