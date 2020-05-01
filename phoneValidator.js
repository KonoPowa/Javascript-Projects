//Phone Number Validator
/* just to note, I could get all except a few to pass on FCC so I had to take a look at the solution. I went through the regex
      seeing what they did to learn what I was doing wrong. The one thing I wasn't doing was grouping using ().
function telephoneCheck(str) {
   var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return regex.test(str);
}

telephoneCheck("555-555-5555");
