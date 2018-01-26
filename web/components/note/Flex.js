import './Flex.scss'
export let ItemList = p => [1, 2, 3].map(n=><div key={n} className="_items">{n}</div>)
let Flex = p => <div>
  <p> flex-direction: column;</p>

  <div className="_flex">
    {ItemList()}
  </div>
  <p> flex-direction: column-reverse;
  </p>

  <div className="_flex">

    {ItemList()}
  </div>
  <p> flex-direction: row;
  </p>
  <div className="_flex">

    {ItemList()}
  </div>
  <p> flex-direction: row-reverse;
  </p>
  <div className="_flex">

    {ItemList()}
  </div>
  <div className="_flex">
    {ItemList()}
  </div>
</div>

export default Flex
