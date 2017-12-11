function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
};

Pizza.prototype.price = function() {
  var price = this.size;
  this.toppings.each(function() {
    var topping = parseInt( $(this).val() );
    price += topping;
  });
  return price;
};

$(document).ready(function(){
  var pizzas = [];
  var counter = 1;

  $("#order-form").submit(function(event){
    event.preventDefault();

    var orderedSize = parseInt( $("input:radio[name=size]:checked").val() );
    var orderedToppings = $("input:checkbox[name=toppings]:checked");
    var orderedPizza = new Pizza(orderedSize, orderedToppings);
    pizzas.push(orderedPizza);

    $("#pizzas").append("<li>Pizza #" + counter + ": $" + orderedPizza.price() + "</li>");

    counter += 1;

    var totalPrice = 0;
    pizzas.forEach(function(pizza) {
      totalPrice += pizza.price();
    });

    $("#number").text(counter);
    $("#price").text("Your total is $" + totalPrice);
  });
});
