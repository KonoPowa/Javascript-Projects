/****************************************************** CASH REGISTER ****************************************************/
	/* I think I could've made this simpler, but I came up with ideas as I wrote the code so I ended up with
		a lot of nested if statements and for loops that are probably unneccessary. However, the code works as expected.*/
		
function checkCashRegister(price, cash, cid) {
  function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}
//added numerical value at index [0]
  let answer = [ 
  [.01,"PENNY", 0],
  [.05,"NICKEL", 0],
  [.10,"DIME", 0],
  [.25,"QUARTER", 0],
  [1,"ONE", 0],
  [5,"FIVE", 0],
  [10,"TEN", 0],
  [20,"TWENTY", 0],
  [100,"ONE HUNDRED", 0]
  ]
  //change due
  let extra = cash - price

  for(let i = 8; i > -1; i--){
    while (extra > 0){
      if(extra - answer[i][0] > -.01 & cid[i][1] > 0){
		  //adds coin value to answer[i][2], subtracts coin value from extra and cid
          answer[i][2] += answer[i][0]
          extra -= answer[i][0]
          cid[i][1] -= answer[i][0]
		  //checks for insufficient funds, intentionally added before checking for closed due to what if looks for
          if(cid[0][1]== 0 & extra > 0){
        return {status: "INSUFFICIENT_FUNDS", change: []}
        break;
        }
		//checks for closed, if closed I calculated the change within this block and format it as necessary
          if (cid[0][1] <= 0){
            answer = answer.filter(curr => curr[2] > 0)
            for (let i = 0; i < answer.length; i++){
                answer[i].splice(0,1)
                answer[i][1] = round(answer[i][1],2)
                if (cid[i][0] == answer[i][0]){
                  cid.splice(i,1)
                }
                cid[i][1] = round(cid[i][1],2)
            }
            return {status: "CLOSED", change: answer.concat(cid)}
          }
      }
	  //if not closed or insufficient, the loop breaks and proceeds to calculate change and formats below
      else{
        break;
      }
  }
}

//change calculation and formatting
answer = answer.filter(curr => curr[2] > 0).reverse()
for (let i = 0; i < answer.length; i++){
  answer[i].splice(0,1)
}
let newAnswer = {status: "OPEN", change: answer}
//console.log(answer)

 return newAnswer;

  
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
