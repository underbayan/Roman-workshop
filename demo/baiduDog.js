  let preId=0
  let ttt_id=1
  let  normalPreId=0
  let  haveOrder=[]
  function ttt() {
    b = new Date().getTime()
    fetch("https://pet-chain.baidu.com/data/market/queryPetsOnSale", {
      method: 'POST',
      credentials: "include",
      body: JSON.stringify({
        appId: ttt_id,
        lastAmount: null,
        lastRareDegree: null,
        pageNo: 1,
        pageSize: 10,
        petIds: [],
        querySortType: "AMOUNT_ASC",
        requestId: b,
        tpl: ""
      }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(res => res.json()).then(json => {
      json.data.petsOnSale.map(o => {
      if(!haveOrder.includes(o.petId)){
        if (o.amount < 500) {

            preId=o.petId
            fetch("https://pet-chain.baidu.com/data/market/shouldJump2JianDan", {
              method: 'POST',
              credentials: "include",
              body: JSON.stringify({
                appId: ttt_id,
                requestId: b,
                tpl: ""
              }),
              headers: new Headers({
                'Content-Type': 'application/json'
              })
            }).then(res => res.json()).then(p => {
              b = new Date().getTime()
              fetch("https://pet-chain.baidu.com/data/txn/create", {
                  method: 'POST',
                  credentials: "include",
                  body: JSON.stringify({
                    appId: ttt_id,
                    petId: o.petId,
                    requestId: b,
                    tpl: ""
                  }),
                  headers: new Headers({
                    'Content-Type': 'application/json'
                  })
                }
              ).then(res => res.json()).then((_r)=>{if((_r.errorNo-0)===10002){
                haveOrder.push (o.id);
                if(haveOrder.length>100){
                  haveOrder.shift()
                }
              }})
            })
        }
      } else{console.log("Have ordered id :", o.petId)}
      })
      if(normalPreId==json.data.petsOnSale[0].petId){
        setTimeout(ttt,2000)
        console.log('start Another request 5000ms later')
      }
      else{
        setTimeout(ttt,500)
        console.log('start Another request 1000ms later')
      }
      normalPreId=json.data.petsOnSale[0].petId

    }).catch(()=>{preId=0;normalPreId=0;setTimeout(ttt,5000); console.log('start Another request 5000ms later')})
  }
  ttt()















