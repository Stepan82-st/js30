const url = 'https://api.icndb.com/jokes/random';
const input = document.querySelector('.input');
const btn = document.querySelector('.btn');

 
 btn.addEventListener('click', async () => {
  try {
    const response = await fetch('quotes.json');
    const result = await response.json();     
    
         let i = Math.floor(Math.random() * result.length)
        input.textContent = result[i].text + " - "+ result[i].author;
      console.log(input)
    }
       catch(err){
         console.log(err)
       }

   });  

  
  