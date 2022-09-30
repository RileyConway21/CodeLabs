function theSum(arr, num) {
    let obj = {}
    let diff
  
    for (let i = 0; i < arr.length; i++) {
      diff = num - arr[i]
  
      if (obj[diff]) {
        return true
      } else {
        obj[arr[i]] = true
      }
    }
    return false
  }
  
  let theSumResult = theSum([6, 4, 3, 2], 7)

  
  let anothertheSumrResult = theSum([6, 4, 3, 2], 1)
  
  document.write(theSumResult)

  document.write(theSum([6,4,3,2,1,7], 14))