do {
  hotdog = (prompt("How many hotdogs do you want?", "0"));
  hotdog_b = parseInt(hotdog);
  if (isNaN(hotdog)) {
    alert("Enter a valid number");
  }
  else if (hotdog != hotdog_b) {
    alert("Please enter whole quantity");
  }
} while(isNaN(hotdog) || hotdog != hotdog_b);
if (hotdog != 0) {
  hotdog = hotdog.replace(/^(0+)/g, '');
}

do {
  fries = (prompt("How many orders of fries do you want?", "0"));
  fries_b = parseInt(fries);
  if (isNaN(fries)) {
    alert("Enter a valid number");
  }
  else if (fries != fries_b) {
    alert("Please enter whole quantity");
  }
} while(isNaN(fries) || fries != fries_b);
if (fries != 0) {
  fries = fries.replace(/^(0+)/g, '');
}

do {
  drinks = (prompt("How many drinks do you want?", "0"));
  drinks_b = parseInt(drinks);
  if (isNaN(drinks)) {
    alert("Enter a valid number");
  }
  else if (drinks != drinks_b) {
    alert("Please enter whole quantity");
  }
} while(isNaN(drinks) || drinks != drinks_b);
if (drinks != 0) {
  drinks = drinks.replace(/^(0+)/g, '');
}

if (hotdog < 0) {
  hotdog = 0;
}

if (fries < 0) {
  fries = 0;
}

if (drinks < 0) {
  drinks = 0;
}

hotdog_price = 3.25, fries_price = 2.00, drinks_price = 1.50;

total_hotdog_price = (hotdog * hotdog_price)
total_fries_price = (fries * fries_price)
total_drinks_price = (drinks * drinks_price)

subtotal = total_hotdog_price + total_fries_price + total_drinks_price;

subtotal_discount = subtotal * 0.9;

tax_discount = 0.0625 * subtotal_discount;
tax = 0.0625 * subtotal;

total_discount = tax_discount + subtotal_discount;
total = tax + subtotal;