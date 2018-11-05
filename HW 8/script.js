// THIS Tasks
// 2
let products = {
    price: 50,
    count: 4,
    sum: function(){return this.price * this.count + '$';}
};
console.log(products.sum());
// 3
let detProducts = {
    count: 10,
    price: 10,
};
detProducts.sum = products.sum;
console.log(detProducts.sum());
// 4
let sizes = {
    width: 5,
    height: 10
};
let getSquare = function(){
    return this.width * this.height + 'px';
};
console.log(getSquare.call(sizes));
// 5
let numbers = [4, 12, 0, 10, -2,  4];
console.log(Math.min.apply(Math, numbers));
// 6
const element = {
    height: '15px',
    marginTop: '5px',
    marginBottom: '5px',
    getFullSize: function(){
        return parseInt(this.height) + parseInt(this.marginBottom) + parseInt(this.marginTop) + 'px';
    }
};
console.log(element.getFullSize());
const block =  {
    height: '20px',
    marginBottom: '6px',
    marginTop: '6px'
};
block.getFullSize = element.getFullSize;
console.log(block.getFullSize());
// 7
let el = {
    height: 25,
    getHeight: function(){return this.height;}
};
el.getHeight = el.getHeight.bind(el);
let getElementHeight = el.getHeight;
console.log(getElementHeight());