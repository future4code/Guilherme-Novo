import React from "react";
import "./styles.css";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Etapafinal from "./components/Etapafinal";

export default class App extends React.Component {
  state = {
    estado: 1
  };

  irParaProximaEtapa = () => {
    this.setState({ estado: this.state.estado + 1 });
  };

  renderizaEtapa = () => {
    switch (this.state.estado) {
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <Etapafinal />;
      default:
    }
  };

  render() {
    return (
      <div className="App">
        {this.renderizaEtapa()}
        <button onClick={this.irParaProximaEtapa}>Próxima Etapa</button>
      </div>
    );
  }
}
