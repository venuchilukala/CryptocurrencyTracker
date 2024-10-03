import CryptocurrencyList from '../CryptocurrencyList'
import './index.css'

const CryptocurrencyTracker = () => (
  <div className="container">
    <div className="inner-container">
      <h1 className="heading">Cryptocurrency Tracker</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
        className="main-img"
      />
      <CryptocurrencyList />
    </div>
  </div>
)

export default CryptocurrencyTracker
