console.log("-- JavaCrisp --")
console.log("Welcome to our Cafe")
console.log("Menu: \n 1. PIZZA Rs.3500 \n 2. BURGER Rs.750 \n 3. SANDWICH Rs.550     (🔥🔥14% DISCOUNT ON BUYING 5000 ITEMS OR MORE🔥🔥) \n 4. SHAWARMA Rs.450 \n 5. NUGGETS(Bucket) Rs.800 \n -Press 0 to Exit-")
console.log("Enter the number according to the food you want to order:")

let quantity,total,items,totalbgst,order = prompt("Enter the order number:")

// invalid order number check   // exit condition when user enters 0
if(order > 5){alert("Invalid Order Number")} 
else if(order == 0){
        alert("KUCH ORDER NI KARNA THA TO AYE KYU????????")
}
alert("🔥🔥14% DISCOUNT ON BUYING 5000 ITEMS OR MORE🔥🔥")

// order taking
if(order == 1){
       quantity= prompt("Enter the quantity of Pizzas you want to order:")
       total=3500*quantity
       items="Pizza"
}
else if(order == 2){
        quantity=prompt("Enter the quantity of Burgers you want to order:")
        total=750*quantity
        items="Burger"
}
else if(order == 3){
        quantity=prompt("Enter the quantity of  Sandwiches you want to order:")
        total=550*quantity
        items="Sandwich"
}
else if(order == 4){
        quantity=prompt("Enter the quantity of Shawarma you want to order:")
        total=450*quantity
        items="Shawarma"
}
else if(order == 5){
        quantity=prompt("Enter the quantity of Nuggets you want to order:")
        total=800*quantity
        items="Nuggets"
}
else{
        alert("Invalid Order Number")
}

// total with discount
if(quantity>=5000){
        total=total-(total*0.14)
        totalbgst=totalbgst-(totalbgst*0.14)

}
else{total=total}



//  if quantity is greater than 5000
if(quantity>=5000){
        console.log("-----------------------------------")
console.log("Original Order Summary:")
console.log(`Items:  ${items}`)
console.log(`Quantity: ${quantity}`)
console.log(`Total Cost:Rs. ${total}`)
console.log("-----------------------------------\n \n \n ")

// summary after gst
totalbgst=total+(total*0.17)

console.log("-----------------------------------")
console.log(" Order Summary after Discount and Taxes:")
console.log(`Items:  ${items}`)
console.log(`Quantity: ${quantity}`)
console.log(`Total Cost:Rs. ${totalbgst}(17% GST , 14% Discount included)`)
console.log("-----------------------------------")
}
else{
        // summary before gst


console.log("-----------------------------------")
console.log("Original Order Summary:")
console.log(`Items:  ${items}`)
console.log(`Quantity: ${quantity}`)
console.log(`Total Cost:Rs. ${total}`)
console.log("-----------------------------------\n \n \n ")

// summary after gst
totalbgst=total+(total*0.17)
console.log("-----------------------------------")
console.log(" Order Summary after Discount and Taxes:")
console.log(`Items:  ${items}`)
console.log(`Quantity: ${quantity}`)
console.log(`Total Cost:Rs. ${totalbgst}(17% GST , 0% Discount included)`)
console.log("-----------------------------------")
}


// thankyou
console.log("\n \n \n�� Thank you for choosing our Cafe! ��")