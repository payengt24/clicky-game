import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Headers from './components/Headers'
import characters from './characters.json'
import CardComponent from "./components/cardComponent";

let randomNum;

export default class App extends Component {

  state = {
    score: 0,
    topScore: 0,
     characters,
     message: 'Click an image to begin'
  }


  handleImagePress = (id) => {
    console.log('id', id);
    this.randomNumBetween1and12()

    if(randomNum === id){
      this.setState({
        message: 'you guessed correctly',
        score: this.state.score + 1
      })
      this.shuffleCardPlacement();
      this.randomNumBetween1and12();
    }else{
      this.setState({
        message: 'you guessed incorrectly',
        score: 0
      })
      this.randomNumBetween1and12();
      if(this.state.score > this.state.topScore){
        this.setState({
          topScore: this.state.score
        })
      }
    }

  }

  shuffleCardPlacement = () => {
    characters.sort(() => Math.random() - 0.5);
    this.setState({characters})
  }

  randomNumBetween1and12 = (id) => {
    randomNum = Math.floor(Math.random() * 1) + 1;
    console.log('randomNum', randomNum);

  }



  render() {

    return (
      <div className="app">
        <Headers score={this.state.score} topScore={this.state.topScore} message={this.state.message}/>

      
      <div className="container">
      <div className="row">
      {this.state.characters.map(element => {
        return <CardComponent image={element.image} id={element.id} name={element.name} handleImagePress={() => this.handleImagePress(element.id)}/>
      })}
         </div>

        </div>

      
      </div>
    );
  }
}
