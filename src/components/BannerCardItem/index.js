// Write your code here.
import './index.css'

const CardDetails = props => {
  const {card} = props
  const {headerText, description, className} = card
  return (
    <li className={${className} card-container}>
      <h1 className="heading">{headerText} </h1>
      <p className="para">{description} </p>
      <button className="button">Show More</button>
    </li>
  )
}

export default CardDetails
