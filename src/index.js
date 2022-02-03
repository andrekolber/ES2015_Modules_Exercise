import { choice, remove } from './helpers';
import { foods } from './foods';

const food = choice(foods);

console.log(`I would like one ${food} please.`);
console.log(`Here you go: ${food}`);
console.log(`Delicious! may I have another?`);

const foodsLeft = remove(foods, food);

console.log(`I'm sorry. we're all out of that. We have ${foodsLeft} left`);
