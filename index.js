
   
const birthdate = document.querySelector("#birthdate"); 
const luckyno = document.querySelector("#lucky-number");
const resultBtn = document.querySelector(".btn");
const output = document.querySelector(".output");  
resultBtn.addEventListener('click', checkluckynum ) ;  


   function checkluckynum ()  { 
      
      let BOD = birthdate.value.replaceAll('-',"") ; 
      let LuckyNUM = luckyno.value ;
   
       let sum= 0 ;
      for( let i=0;i<BOD.length;i++) {
         console.log(BOD.charAt(i)) ;
         sum = sum + Number(BOD.charAt(i)) 
      }
        if (sum%LuckyNUM==0) {
           output.innerText= "your birthdate is lucky" ; 

        } 
        else {
           output.innerText= LuckyNUM +"is not that lucky" ;
        }  
      } 

      