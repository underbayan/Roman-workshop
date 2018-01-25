import './Flex.scss'
export  let ItemList = p => <div>
  <div className="_items">1</div>
  <div className="_items">2</div>
  <div className="_items">3</div>
  <div className="_items">4</div>
  <div className="_items">5</div>
  <div className="_items">6</div>
</div>
let Flex = p => <div>
  <div className="_flex">
    <ItemList/>
  </div>
  <div className="_flex">
    <ItemList/>
  </div>
  <div className="_flex">
    <ItemList/>
  </div>
  <div className="_flex">
    <ItemList/>
  </div>
  <div className="_flex">
    <ItemList/>
  </div>
</div>

export default Flex
