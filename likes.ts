export class Likes {
  constructor(private count: number, private selected: boolean) {}
  draw() {
    console.log("Count:", this.count);
    console.log("Selected:", this.selected);
  }
  clicked() {
    // increment or decrement based on the state of selected
    this.selected ? this.count-- : this.count++;
    this.selected = !this.selected; // toggle selected boolean
  }
}

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
