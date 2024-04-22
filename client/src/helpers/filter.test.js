const { filterstring } = require("./filter");

const testobj1 = {
  price: 500,
};

test("Only price", () => {
  expect(filterstring(testobj1)).toBe("filters[Price][$lt]=500");
});

const testobj2 = {
  location: "Stockholm",
};

test("Only location", () => {
  expect(filterstring(testobj2)).toBe("filters[Location][$eq]=Stockholm");
});

const testobj3 = {
  price: 300,
  location: "Stockholm",
  shippingOptions: "Pick up yourself",
};

test("Price , shipping and location", () => {
  expect(filterstring(testobj3)).toBe(
    "filters[Price][$lt]=300&filters[Location][$eq]=Stockholm&filters[ShippingOptions][$eq]=Pick up yourself"
  );
});

const testobj4 = {
  price: 901,
  location: "Stockholm",
  shippingOptions: "Pick up yourself",
  material: ["Steel"],
};

test("Price, shipping, location and material", () => {
  expect(filterstring(testobj4)).toBe(
    "filters[Price][$lt]=901&filters[Location][$eq]=Stockholm&filters[ShippingOptions][$eq]=Pick up yourself&filters[$or][0][Material][$eq]=Steel"
  );
});

const testobj5 = {
  era: ["C. 1880s New Renaissance", "E. 1900-1910s Art Nouveau"],
};

test("Two eras", () => {
  expect(filterstring(testobj5)).toBe(
    "filters[$or][0][Era][$eq]=C. 1880s New Renaissance&filters[$or][1][Era][$eq]=E. 1900-1910s Art Nouveau"
  );
});

const testobj6 = {
  condition: ["Good condition"],
};

test("One condition", () => {
  expect(filterstring(testobj6)).toBe(
    "filters[$or][0][Condition][$eq]=Good condition"
  );
});

const testobj7 = {
price: 200,
location: "Eskilstuna",
shippingOptions: "Home delivery within 2-3 days",
material: ["Wood"],
condition: ["Needs renovation"],
};

test("Price, location, shipping, condition and material", () => {
expect(filterstring(testobj7)).toBe(
  "filters[Price][$lt]=200&filters[Location][$eq]=Eskilstuna&filters[ShippingOptions][$eq]=Home delivery within 2-3 days&filters[$or][0][Material][$eq]=Wood&filters[$or][0][Condition][$eq]=Needs renovation"
);
});
