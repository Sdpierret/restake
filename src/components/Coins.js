import _ from 'lodash'

function Coins(props) {
  function amount(coins, decimals){
    if (!decimals) {
      return _.round(coins.amount / 1e6, 6)
    } else {
      return _.round(coins.amount / decimals, 6)
    }
  }

  function denom(coins){
    if(!coins.denom) return

    if(coins.denom.startsWith('base')){
      return coins.denom.slice(4).toUpperCase()
    }else if(['u', 'a'].includes(coins.denom[0])){
      return coins.denom.slice(1).toUpperCase()
    }
    return coins.denom.toUpperCase()
  }

  if(!props.coins || !props.coins.denom){
    return null
  }

  return (
    <span className="coins">
      <span className="amount">{amount(props.coins, props.decimals)}</span>&nbsp;
      <span className="denom">{denom(props.coins, props.decimals)}</span>
    </span>
  )
}

export default Coins;
