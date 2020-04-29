//Roman Numeral Converter 
//(I came up with a solution that uses subtraction to test what letters are needed, this resulted in a lot of 
//if else statements but I got the result I wanted)
function convertToRoman(num) {
  let newNum = num
  let numbers = [1, 2, 3, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000]
  let numerals = 
  ['I', 'II', 'III', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M']
  let answer = []

  while(newNum > 0){
    if (newNum - 1000 > -1){
      answer.push('M')
      newNum -= 1000
    }else if (newNum - 900 > -1){
      answer.push('CM')
      newNum -= 900
    }else if (newNum - 500 > -1){
      answer.push('D')
      newNum -= 500
    }else if (newNum - 400 > -1){
      answer.push('CD')
      newNum -= 400
    }else if (newNum - 100 > -1){
      answer.push('C')
      newNum -= 100
    }else if (newNum - 90 > -1){
      answer.push('XC')
      newNum -= 90
    }else if (newNum - 50 > -1){
      answer.push('L')
      newNum -= 50
    }else if (newNum - 40 > -1){
      answer.push('XL')
      newNum -= 40
    }else if (newNum - 10 > -1){
      answer.push('X')
      newNum -= 10
    }else if (newNum - 9 > -1){
      answer.push('IX')
      newNum -= 9
    }else if (newNum - 5 > -1){
      answer.push('V')
      newNum -= 5
    }else if (newNum - 4 > -1){
      answer.push('IV')
      newNum -= 4
    }else if (newNum - 3 > -1){
      answer.push('III')
      newNum -= 3
    }else if (newNum - 2 > -1){
      answer.push('II')
      newNum -= 2
    }else if (newNum - 1 > -1){
      answer.push('I')
      newNum -= 1
    }

  }
  answer = answer.join("")
   console.log(answer)
 return answer;
}

convertToRoman(2);
