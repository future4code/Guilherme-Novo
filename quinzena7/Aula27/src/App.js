import React from "react";
import axios from "axios";
import Home from "./Componentes/Home";

class App extends React.Component {
  state = {
    lancamento: []
  };

  componentDidMount = () => {
    axios
      .get("https://api.spacexdata.com/v3/launches")
      .then((response) => {
        this.setState({ lancamento: response.data });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Home />
          {this.state.lancamento.map(lancar => {
            return <p> Nome da Nave: {lancar.mission_name} - Ano de lançamento: {lancar.launch_year}</p>
          })}
      </div>
    );
  }
}

export default App;
