//Caesars Cipher


function rot13(str) {
  str = str.toLowerCase()
  let arr = str.split("")

  for (let i = 0; i < str.length; i++){
    if (97 <= str.charCodeAt(i) && str.charCodeAt(i) <= 122){
      if(str.charCodeAt(i) + 13 <= 122){
        var replacement = str.charCodeAt(i) + 13 
        arr.splice(i,1,String.fromCharCode(replacement))

      }else if(str.charCodeAt(i) + 13 > 122){
        var replacement = str.charCodeAt(i) + 13 
        var circle = replacement - 122
        replacement = 96 + circle
        arr.splice(i,1,String.fromCharCode(replacement))
      }
    }
  }
  let newStr = arr.join("").toUpperCase()
  return newStr;
}

console.log(rot13("SERR CVMMN!"));
