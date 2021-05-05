export let a = 'a';
export function hello(){
  console.log('hello');
};
export const obj = {};

let c = 'c';
let d = 'd';
let e = 'e';

export { c, d, e};

const h = {
  foo:"bar"
};

export const { foo } = h;

