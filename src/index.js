module.exports = function check(str, bracketsConfig) {
    const openBrackets = [];
    const closeBrackets = [];
   
    for (let i=0; i<bracketsConfig.length; i++){
      const a = bracketsConfig[i];
      openBrackets.push(a[0]);
      closeBrackets.push(a[1]);
    }
    const arr = [];
    if (str.length % 2 !== 0) {  
      return false;
    }

     for (let i = 0; i < str.length; i++) {
      if (closeBrackets.includes(str[i])) {
        if (openBrackets.indexOf(arr[arr.length - 1]) === closeBrackets.indexOf(str[i])) {
          arr.pop();
        } else {
          arr.push(str[i]);
        }
      } else {
        arr.push(str[i]);
      }
    } 
    return arr.length===0;
  }