/*
  SALES TAX
  =========
  A business requires a program that calculates how much the price of a product is including sales tax
  Sales tax is 20% of the price of the product.
*/

function calculateSalesTax(price) {
  return price + (20 / 100) * price;
  // var salesTax = (20 / 100) * price;
  // var totalPrice = price + salesTax;
  // return totalPrice;
}
// console.log(calculateSalesTax(15));
/*
  CURRENCY FORMATTING
  ===================
  The business has informed you that prices must have 2 decimal places
  They must also start with the currency symbol
  Write a function that adds tax to a number, and then transforms the total into the format £0.00

  Remember that the prices must include the sales tax (hint: you already wrote a function for this!)
*/

function addTaxAndFormatCurrency(price) {
  let taxIncluded = calculateSalesTax(price);
  let decimalPlaces = taxIncluded.toFixed(2);
  let priceCurrency = `£${decimalPlaces}`;
  // var tax = (20 / 100) * price;
  // var total = "£" + price + tax;
  return priceCurrency;
}
// console.log(addTaxAndFormatCurrency(15));
/* 
===================================================
======= TESTS - DO NOT MODIFY BELOW THIS LINE =====S

There are some Tests in this file that will help you work out if your code is working.

To run the tests for just this one file, type `npm test -- --testPathPattern 4-tax` into your terminal
(Reminder: You must have run `npm install` one time before this will work!)
===================================================
*/

test("calculateSalesTax for £15", () => {
  expect(calculateSalesTax(15)).toEqual(18);
});

test("calculateSalesTax for £17.50", () => {
  expect(calculateSalesTax(17.5)).toEqual(21);
});

test("calculateSalesTax for £34", () => {
  expect(calculateSalesTax(34)).toEqual(40.8);
});

test("addTaxAndFormatCurrency for £15", () => {
  expect(addTaxAndFormatCurrency(15)).toEqual("£18.00");
});

test("addTaxAndFormatCurrency for £17.50", () => {
  expect(addTaxAndFormatCurrency(17.5)).toEqual("£21.00");
});

test("addTaxAndFormatCurrency for £34", () => {
  expect(addTaxAndFormatCurrency(34)).toEqual("£40.80");
});
