
   
const birthdate = document.querySelector("#birthdate"); 
const luckyno = document.querySelector("#lucky-number");
const resultBtn = document.querySelector(".btn"); 
const img = document.querySelector('#img');
const sadimgUrl = 'https://thumbs.dreamstime.com/b/children-boy-thinking-smile-idea-chalkboard-cute-kid-imagine-classroom-space-your-text-education-concept-books-102349052.jpg';
const happyimgUrl = 'https://img.freepik.com/free-vector/happy-young-couple-having-fun-girl-guy-dancing-party-celebrating-good-news-flat-illustration_74855-10820.jpg?size=338&ext=jpg'; 
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
           img.innerHTML = `<img src=${happyimgUrl} />`

        } 
        else {
           output.innerText= LuckyNUM +"is not that lucky" ;
           img.innerHTML = `<img src=${sadimgUrl} />`;

        }  
      } 

      