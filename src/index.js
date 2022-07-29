module.exports = function check(str, bracketsConfig) {
  let resultString = str
  let configArr = bracketsConfig.map (a => a.join(''))
  let configLength = configArr.length   
  function removeBracketPair () {
      for (let i = 0; i < configLength; i++) {
          if (resultString.includes(configArr[i])){
              resultString = resultString.replace(configArr[i], '')
          }
      }
      let includeCounter = 0
      for (let i = 0; i < configLength; i++) {
          if (resultString.includes(configArr[i])) {
              includeCounter++
          }
      }
      if (includeCounter > 0) {
          return removeBracketPair ()
      } else return      
  } 
  removeBracketPair()
  return resultString.length == 0 ? true : false 
}