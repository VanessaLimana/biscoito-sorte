import React, {Component} from 'react';
import './estilo.css'

class App extends Component{

  constructor(props){
    super(props);
    this.state = {};

    this.quebraBiscoito = this.quebraBiscoito.bind(this);
    this.frases = ['A solidão é a sorte de todos os espíritos excepcionais', 'Não ser amado é falta de sorte, mas não amar é a própria infelicidade.'
, 'Se a sua vida for a melhor coisa que já te aconteceu, acredite, você tem mais sorte do que pode imaginar','Eu acredito demais na sorte. E tenho constatado que, quanto mais duro eu trabalho, mais sorte eu tenho.','A sorte não existe. Aquilo a que chamas sorte é o cuidado com os pormenores.','Tente a sua sorte! A vida é feita de oportunidades. O homem que vai mais longe é quase sempre aquele que tem coragem de arriscar.','Destino não é uma questão de sorte, mas uma questão de escolha; não é uma coisa que se espera, mas que se busca.','Que sorte possuir uma grande inteligência: nunca te faltam asneiras para dizer.','A sorte favorece a mente bem preparada.'];
     
    }
  quebraBiscoito(){
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() *  this.frases.length );
    state.textoFrase = this.frases[numeroAleatorio];
    this.setState(state);
  }

  render(){
    return(
      <div className="container" >
        <img src='images/biscoito.png' className="img" />
        <Botao nome = "Abrir biscoito" acaoBtn={this.quebraBiscoito} />
        <h3 className="textoFrase">{this.state.textoFrase} </h3>
      </div>
    );
  }
}

class Botao extends Component{
  render(){
    return(
      <div>
          <button onClick ={this.props.acaoBtn}> {this.props.nome}</button>
      </div>
    );
  }
}

export default App;