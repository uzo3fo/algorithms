/*LAB 7
convert this es5 class to es6
 
function Foo(options) {
  this.index = options.index;
  this.name = options.name || 'foo';
  var items = options.items;
  var self = this;
  function bar() {
        self.say();
  }
  items.forEach(function() {
        self.say();
  });
  for (var i = 0; i < items.length; i++) {
        bar();
  }
}
 
Foo.prototype.say = function() {
  console.log(arguments);
};*/
let Foo = (options) =>{
  this.index = options.index;
  this.name = options.name || 'foo';
  let items = options.items;
  let self = this
  let bar = ()=> self.say();
}
items.forEach(()=>self.say());
for(let i of items){bar()}
Foo.prototype.say = () => console.log(arguments);