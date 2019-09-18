/**
 * Created by WebStorm.
 * User: lomond
 * Date: 2018/1/10
 * Time: 下午3:44
 * To change this template use File | Settings | File Templates.
 */
require('isomorphic-fetch');
let newFetch
export default newFetch = (...v)=> {
  return fetch(this,...v)
}
