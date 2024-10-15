const myTimeOut = setTimeout(hello, 3000);

button.addEventListener('click', event => {
  while (true);
});

function hello() {
    alert("Hi");
}





const myPromise = new Promise(function(resolve, reject) {
  setTimeout(() => {
    resolve('Promise resolved after 2 secounds');
  }, 2000);
});

myPromise.then((message) => {
  console.log(message);
});


//openmeteo



/*
function fetchData() {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 3000);
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve({ data: 'Fetched data successfully!' });
      } else {
        reject('Error fetching data');
      }
    }, delay);
  });
}

fetchData()
  .then(response => console.log(response))
  .catch(error => console.error(error));
*/