import React from 'react';
import './App.scss';
import Preview from './Preview';
import Speed from './Speed';
import GetText from './GetText'
const initialState = {
    text: GetText(),
    userInput:'',
    symbols:0,
    sec: 0,
    started: false,
    finished: false
}

export default class App extends React.Component{
  state = initialState;
  onRestart = ()=>{
    this.setState(initialState);
    window.location.reload();
  }
  onInput =(e) => {
    this.setTimer();
    this.onFinish(e.target.value);
    this.setState({
      userInput:e.target.value,
      symbols: this.countCorrectSymbols(e.target.value)
    })
  }

  onFinish(userInput){
    if(userInput === this.state.text){
      clearInterval(this.interval)
      this.setState({
        finished: true
      })
    }
  }

  countCorrectSymbols(userInput){
    const text = this.state.text.replace(' ','');
    return userInput.replace(' ','').split('').filter((s,i)=> s === text[i]).length
  }

  setTimer(){
    if(!this.state.started){
      this.setState({
        started:true
      });
      this.interval = setInterval(() => {
        this.setState(prevProps =>{
          return {sec:prevProps.sec + 1}
        })
      }, 1000);
    }
  }
  render(){
    return(
      <div className='container mt-5 mb-5'>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <Preview text = {this.state.text} userInput={this.state.userInput}/>
            <textarea value={this.state.userInput} onChange={this.onInput} className='form-control mb-3' placeholder='Start Typing...' readOnly={this.state.finished}></textarea>
            <Speed symbols={this.state.symbols} sec={this.state.sec}/>
            <div className="text-right">
              <button className='btn btn-light' onClick={this.onRestart}>Restart</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}