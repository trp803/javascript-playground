//1. var let const

  function setWidth() {
    var width = 100;
    console.log(width);
  }
  setWidth();

  var age = 100;
  if(age > 12) {
    const dogYears = age * 7;
    console.log(`You are ${dogYears} dog years old!`);
  }

  let height = 200;
  const key = 'abc123';

//2. let const

  const key = 'abc123';
  let points = 50;
  let winner = false;

  const person = {
    name: 'Wes',
    age: 28
  }

  const wes = Object.freeze(person);

//3. let const real life

  {
    const name = 'wes';
    console.log(name);
  }

  for(let i = 0; i < 10; i++) {
    console.log(i);
    setTimeout(function() {
      console.log('The number is ' + i);
    },1000);
  }