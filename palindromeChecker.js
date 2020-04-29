//Palindrome Checker


function palindrome(str) {
  str = str.replace(/[!@#\$%\^\&*\)\(+=._-\s/,']/g,'')
  str = str.toLowerCase()
  console.log(str)
  if (str == str.split("").reverse().join("")){
    return true
  }
  return false
}



//console.log(palindrome("not a palindrome"));
