import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoDetails} = props
  const {currencyLogo, currencyName, usdValue, euroValue} = cryptoDetails
  return (
    <li>
      <div className="name-img">
        <img src={currencyLogo} alt={currencyName} className="currency-image" />
        <p>{currencyName}</p>
      </div>
      <div className="currency-value">
        <p>{usdValue}</p>
        <p>{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
