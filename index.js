// Fixed prices
  var priceLaptop = 40000;
  var priceSmartphone = 15000;
  var priceHeadphones = 2000;

  // Get quantity inputs from the user
  var qtyLaptop = prompt("Enter quantity of Laptops:");
  var qtySmartphone = prompt("Enter quantity of Smartphones:");
  var qtyHeadphones = prompt("Enter quantity of Headphones:");

  // Convert string inputs to numbers
  qtyLaptop = parseInt(qtyLaptop);
  qtySmartphone = parseInt(qtySmartphone);
  qtyHeadphones = parseInt(qtyHeadphones);

  // Calculate total bill
  var totalBill = (qtyLaptop * priceLaptop) + (qtySmartphone * priceSmartphone) + (qtyHeadphones * priceHeadphones);
  var discount = 0;

  // Apply discount using if-else
  if (totalBill > 5000) {
    discount = totalBill * 0.20;
  } else if (totalBill > 3000) {
    discount = totalBill * 0.15;
  } else if (totalBill > 1000) {
    discount = totalBill * 0.10;
  } else {
    discount = 0;
  }

  var finalAmount = totalBill - discount;

  // Optional: Show an alert to confirm
  alert("Calculation complete!");

  // Display the results
  document.write("<h2>Shopping Bill</h2>");
  document.write("Total Bill: Rs " + totalBill.toFixed(2) + "<br>");
  document.write("Discount: Rs " + discount.toFixed(2) + "<br>");
  document.write("Amount to Pay: Rs " + finalAmount.toFixed(2));


  