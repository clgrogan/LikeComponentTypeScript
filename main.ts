import { Likes } from "./likes";

let likes = new Likes(123, false);
console.log();
console.log("Initial state");
likes.draw();

likes.clicked();
console.log();
console.log("First click");
likes.draw();

likes.clicked();
console.log();
console.log("Second click");
likes.draw();

likes.clicked();
console.log();
console.log("Third click");
likes.draw();
