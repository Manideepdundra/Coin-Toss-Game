import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    Coin: true,
    Heads: 0,
    Tails: 0,
  }

  tossCoin = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    if (randomNumber % 2 === 0) {
      this.setState(prevState => ({
        Coin: true,
        Total: prevState.Total + 1,
        Heads: prevState.Heads + 1,
      }))
    } else {
      this.setState(prevState => ({
        Coin: false,
        Tails: prevState.Tails + 1,
      }))
    }
  }

  render() {
    const {Coin, Heads, Tails} = this.state
    const Total = Heads + Tails

    return (
      <div className="bgContainer">
        <div className="coinTossContainer">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          {Coin ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              className="img"
              alt="toss result"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              className="img"
              alt="toss result"
            />
          )}
          <button type="button" className="button" onClick={this.tossCoin}>
            Toss Coin
          </button>
          <div className="resultsContainer">
            <p className="result">Total: {Total}</p>
            <p className="result">Heads: {Heads}</p>
            <p className="result">Tails: {Tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
