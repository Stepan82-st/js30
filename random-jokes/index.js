const url = 'https://api.icndb.com/jokes/random';
const input = document.querySelector('.input');
const btn = document.querySelector('.btn');

console.log(input);

  async function getData() {
    const quotes = 'quotes.json';
    const res = await fetch(url);
    const data = await res.json();
    const text = document.createTextNode(data);
    return text;
  }
 console.log(getData());

  function getZapros(){
    const $p1 = document.createElement('p');
    $p1.textContent = getData();
    // вставим элемент $p1 в начало $message
    input.prepend($p1); 
  }
  
  btn.addEventListener('click', () => {
  
    let pElem = document.createElement('p');
    pElem.textContent = getZapros().map(item => item.value);
    document.body.appendChild(pElem);
  });