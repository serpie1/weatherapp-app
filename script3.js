const promise = new Promise((resolve, reject) => {
    // Simulate an asynchronous operation
    setTimeout(() => {
      resolve('Success!');
    }, 1000);
  });

  promise
    .then(result => {
      console.log(result); // logs 'Success!'
      return 'Next Step'; // returns a new value
    })
    .then(nextResult => {
      console.log(nextResult); // logs 'Next Step'
    })
    .catch(error => {
      console.error('Error:', error);
    });