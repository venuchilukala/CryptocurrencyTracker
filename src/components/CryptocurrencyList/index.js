import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrencyList extends Component {
  state = {cryptoList: []}

  componentDidMount() {
    this.getCryptoCurrencyList()
  }

  getCryptoCurrencyList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedList = data.map(crypto => ({
      id: crypto.id,
      currencyLogo: crypto.currency_logo,
      currencyName: crypto.currency_name,
      usdValue: crypto.usd_value,
      euroValue: crypto.euro_value,
    }))

    this.setState({cryptoList: updatedList})
  }

  render() {
    const {cryptoList} = this.state
    return (
      <div className="content">
        <div className="type-heading">
          <p className="coin-type">Coin Type</p>
          <p>USD</p>
          <p>EURO</p>
        </div>
        <ul>
          {cryptoList.map(crypto => (
            <CryptocurrencyItem key={crypto.id} cryptoDetails={crypto} />
          ))}
        </ul>
      </div>
    )
  }
}
export default CryptocurrencyList