console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async () => {
  const promiseWifeBringingTickets = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'), 3000);
  });

  const getPopcorn = new Promise((resolve, reject) => resolve('popcorn'));
  const addButter = new Promise((resolve, reject) => resolve('butter'));
  const getColdDrink=new Promise((resolve,reject)=> resolve('colddrink'));

  let ticket = await promiseWifeBringingTickets;

  console.log(`wife: I have the ${ticket}`);
  console.log('husband: we should go in');

  console.log('wife: no, I am hungry');

  let popcorn = await getPopcorn;

  console.log(`husband: I got some ${popcorn}`);

  console.log('husband: we should go in');
  console.log('wife: I need butter on my popcorn');

  let butter = await addButter;

  console.log(`husband: I got some ${butter} on popcorn`);
  console.log('husband: Anything else, darling?');
  console.log('wife: we are late');
  console.log('husband: Thank you for the reminder, grins');

  let colddrink = await getColdDrink;
  console.log("I want colddrink");

  return ticket;
};

preMovie().then((ticket) => {
  console.log(`Got the ${ticket}!`);
});

console.log('person4: shows ticket');
console.log('person5: shows ticket');