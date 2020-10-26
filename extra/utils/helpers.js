export default function ValidateEmail(IEmail) {
    var reEmail =  /^[a-zA-Z0-9._-]+@successive.tech/;
    if (reEmail.test(IEmail) == false) 
    {
        //console.log('Invalid Email Address');
        return false;
    }
    else{
        //console.log('valid Email Address');
        return true;
    }
  
  }
