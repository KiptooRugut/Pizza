function Total(size, crust, topping, delivery) {
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    this.delivery = delivery;
}

function validatePick() {
    let selectedCrust = parseFloat(document.getElementById("pizza-crust").value);
    let selectedToppings = parseFloat(document.getElementById("pizza-toppings").value);
    let selectedSize = parseFloat(document.getElementById("pizza-size").value);
    let quantity = document.getElementById("pizzaNumber").value;
    let selectedDelivery = parseFloat(document.getElementById("pick").value);

    const pickDelivery = new Total(selectedSize, selectedCrust, selectedToppings, selectedDelivery);

    var cost = pickDelivery.size + pickDelivery.crust + pickDelivery.topping + pickDelivery.delivery
    let totalCost = cost * quantity;

    if (selectedCrust == "" || selectedToppings == "" || selectedSize == "" || quantity == "") {
        $(".alert").show();
    } else {
        $(".order-form").hide();
        $(".summary").show();
        document.getElementById("itemQuantity").innerHTML = quantity;
        document.getElementById("itemSize").innerHTML = selectedSize;
        document.getElementById("itemCrust").innerHTML = selectedCrust;
        document.getElementById("itemTopping").innerHTML = selectedToppings;
        document.getElementById("totalValue").innerHTML = totalCost;

    }

}

function validateDeliver() {
    let selectedCrust = parseFloat(document.getElementById("pizza-crust").value);
    let selectedToppings = parseFloat(document.getElementById("pizza-toppings").value);
    let selectedSize = parseFloat(document.getElementById("pizza-size").value);
    let selectedDelivery = parseFloat(document.getElementById("deliver").value);
    let quantity = document.getElementById("pizzaNumber").value;

    const deliver = new Total(selectedSize, selectedCrust, selectedToppings, selectedDelivery);

    var cost = deliver.size + deliver.crust + deliver.topping + deliver.delivery
    let totalCost = cost * quantity;
    if (selectedCrust == "" || selectedToppings == "" || selectedSize == "" || quantity == "") {
        $(".alert").show();
    } else {
        $(".alertDeliver").show();
        if (charge) {
            $(".order-form").hide();
            $(".summary").show();
        } else {
            return false;
        }

    }
    if (charge) {
        $("#itemQuantity").text(quantity);
        $("#itemSize").text(selectedSize);
        $("#itemCrust").text(selectedCrust);
        $("#itemTopping").text(selectedToppings);
        $("#totalValue").text(totalCost);
    }
}

function checkOut() {
    let selectedCrust = parseFloat(document.getElementById("pizza-crust").value);
    let selectedToppings = parseFloat(document.getElementById("pizza-toppings").value);
    let selectedSize = parseFloat(document.getElementById("pizza-size").value);
    let selectedDelivery = parseFloat(document.getElementById("pick").value);
    let quantity = document.getElementById("pizzaNumber").value;
    let total = (selectedCrust + selectedToppings + selectedSize + selectedDelivery) * quantity;
    $("#quantity").text(quantity);
    $("#size").text(selectedSize);
    $("#crust").text(selectedCrust);
    $("#topping").text(selectedToppings);
    $("#value").text(total);
}

var charge = "There will be an additional charge for transport";
var noInput = "Kindly provide all fields";
var confirmTransport = "Are you sure you don't need delivery?";

$(document).ready(function() {
            $("#bg-order").addClass("order");
            $(".summary").hide();
            $(".receipt").hide();
            $(".order-form").hide();
            $(".print").hide();
            $(".alert").hide();
            $(".alertDeliver").hide();

            $("#bg-order").on('click', function() {
                $("#landing").hide();
                $(".order-form").show();
            });