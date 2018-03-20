/**
 * Created by WebStorm.
 * User: lomond
 * Date: 2018/3/19
 * Time: 下午5:09
 * To change this template use File | Settings | File Templates.
 */
// import Bsn from 'Bsn'
let fv = (o, v1, v2)=> {
  if (!o)return 0
  let flag = (o.value === v1 ? 1 : o.value === v2 ? 2 : 0) | fv(o.left, v1, v2) | fv(o.right, v1, v2)
  if (flag === 3) console.log('The parent node is : ', o.value)
  return flag
}
module.exports = fv
