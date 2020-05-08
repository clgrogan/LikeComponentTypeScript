"use strict";
exports.__esModule = true;
var Likes = /** @class */ (function () {
    function Likes(count, selected) {
        this.count = count;
        this.selected = selected;
    }
    Likes.prototype.draw = function () {
        console.log("Count:", this.count);
        console.log("Selected:", this.selected);
    };
    Likes.prototype.clicked = function () {
        // increment or decrement based on the state of selected
        this.selected ? this.count-- : this.count++;
        this.selected = !this.selected; // toggle selected boolean
    };
    return Likes;
}());
exports.Likes = Likes;
// let likes = new Likes(666, false);
// console.log();
// console.log("Initial state");
// likes.draw();
// likes.clicked();
// console.log();
// console.log("First click");
// likes.draw();
// likes.clicked();
// console.log();
// console.log("Second click");
// likes.draw();
// likes.clicked();
// console.log();
// console.log("Third click");
// likes.draw();
