const timeout = setTimeout(() => {
    console.log('Execute after 1.5 sec');
  }, 1500);
  
  const interval = setInterval(() => {
    console.log('Execute every 1 sec');
  }, 1000);
  
  const timeout2 = setTimeout(() => {
    console.log('Execute after 3 sec');
  }, 3000); // will not execute
  
  setTimeout(() => { 
    clearTimeout(timeout2);
    clearInterval(interval);
  }, 2500); // will execute after 2.5 sec
  
  const immediate = setImmediate(() => {
    console.log('Execute immediately');
  });
  
  const immediate2 = setImmediate(() => {
    console.log('Execute immediately');
  }); // will not execute
  clearImmediate(immediate2);