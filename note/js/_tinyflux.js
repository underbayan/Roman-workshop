let Flux = {
  Action: function(dispatcher) {
    return {
      create(initData) {
        dispatcher.dispatch({ type: 'create', item: initData })
      },
      additem(item) {
        dispatcher.dispatch({ type: 'add', item })
      },
      remove(item) {
        dispatcher.dispatch({ type: 'remove', item })
      }
    }
  },
  Dispatcher: function() {
    let _cid = 0 // callbackId
    let _callbacks = []
    return {
      register: function(callback) {
        _callbacks[_cid] = callback
        return _cid++
      },
      unregister: function(_cid) {
        _callbacks.splice(_cid, _cid)
      },
      dispatch: function(payload) {
        _callbacks.forEach(callback => callback(payload))
      }
    }
  },
  Store: function(dispatcher) {
    let _itemList = []
    let _emit = new Flux.Dispatcher()
    dispatcher.register(function(payload) {
      switch (payload.type) {
        case 'create':
          _itemList = [...payload.item]
          break
        case 'add':
          _itemList.push(payload.item)
          break
        case 'remove':
          _itemList = _itemList.filter(item => item.id != payload.item.id)
          break
        default:
          // 其他操作
          break
      }
      _emit.dispatch()
    })
    return {
      getList: function() {
        return _itemList
      },
      addEmiter: function(callback) {
        return _emit.register(callback)
      },
      removeEmiter: function(callbackId) {
        _emit.unregister(callbackId)
      }
    }
  }
}
const initStaffs = [{ id: 0, name: 'A' }, { id: 1, name: 'B' }, { id: 2, name: 'C' }]
const dispatcher = new Flux.Dispatcher()
const store = new Flux.Store(dispatcher)
const action = new Flux.Action(dispatcher)
const render = _ => console.log(store.getList())
action.create(initStaffs)
store.addEmiter(render)
action.additem({ id: 3, name: 'D' })
action.additem({ id: 4, name: 'E' })
action.remove({ id: 2, name: 'C' })
