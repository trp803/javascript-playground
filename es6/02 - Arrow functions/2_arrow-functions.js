//------------------------------------------------------------------------------
const race = '100m Dash';
const winners = ['Hunter Gath', 'Singa Song', 'Imda Bos'];

const win = winners.map((winner, i) => ({name: winner, race, place: i + 1}));

const ages = [23,62,45,234,2,62,234,62,34];

const old = ages.filter(age => age >= 60);
console.log(old);
//------------------------------------------------------------------------------
const names = ['wes', 'kait', 'lux'];

const fullNames = names.map(function(name) {
  return `${name} bos`;
});

const fullNames2 = names.map((name) => {
  return `${name} bos`;
});

const fullNames3 = names.map(name => {
  return `${name} bos`;
});

const fullNames4 = names.map(name => `${name} bos`);

const fullNames5 = names.map(() => `cool bos`);

const sayMyName = (name) => {
  alert(`Hello ${name}!`)
}

sayMyName('Wes');
//------------------------------------------------------------------------------
