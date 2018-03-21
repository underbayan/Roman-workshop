#!/usr/bin/env node
let mergeSort= function (arr, arrcopy,start,end,revert=false){
  let mid= Math.floor((end-start)/2)+start
  console.log(start, end,mid)
  if(start<end-1){
    if(revert){
      mergeSort(arrcopy,arr,start,mid,!revert)
      mergeSort(arrcopy,arr,mid,end,!revert)
    } else {
      mergeSort(arr,arrcopy,start,mid,!revert)
      mergeSort(arr,arrcopy,mid,end,!revert)
    }
    let AIndex = start
    let BIndex = mid
    let copyIndex = start

    while(AIndex < mid && BIndex < end){
      arrcopy[copyIndex]=arr[AIndex]<arr[BIndex]?arr[AIndex++]:arr[BIndex++]
      copyIndex++
    }
    while(AIndex<mid){
      arrcopy[copyIndex++]=arr[AIndex++]
    }
    while(BIndex<end){
      arrcopy[copyIndex++]=arr[BIndex++]
    }

    console.log(start,mid,end,'copy',arrcopy,'last array',arr)

  }
  else{

    return arrcopy
  }
}
//1:
arrcopy =[2,3,4,5,6,1]
mergeSort([2,3,4,5,6,1],arrcopy,0,6)
console.log(arrcopy)
