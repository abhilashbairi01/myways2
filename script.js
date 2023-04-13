function fizbuzz(phonenumber) {
    let sum = 0;
    let phonestring = phonenumber.toString();
  
    for (let i = 0; i < phonestring.length; i++) {
      sum += parseInt(phonestring[i]);
    }
    for(let i = 1; i <=sum; i++) {
      if(i%4==0 && i%5==0)
      {
        document.write("FizzBuzz ");
          
      }
      else if(i%4==0 )
      {
        document.write("Fizz ");
      }
      else if(i%5==0)
      {
          document.write("Buzz ");
      }
      
      else
      {
          document.write(i+" ");
      }
    }
  }
  console.log(fizbuzz(8688653527));
  
