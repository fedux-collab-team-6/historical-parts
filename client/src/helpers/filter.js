export default function filterstring(filterobj) {
  const output = [];
  for (const key in filterobj) {
    //
    if (filterobj.hasOwnProperty(key) && filterobj[key] !== undefined) {
      //
      switch (key) {
        case "price":
          output.push("filters[price][$lt]=" + filterobj.price);
          break;
        case "location":
          output.push("filters[location][$eq]=" + filterobj.location);

          break;
        case "shippingOptions":
          if (filterobj.shippingOptions.length > 1) {
            console.log("two");
            break;
          }
          output.push(
            "filters[shippingOptions][$eq]=" + filterobj.shippingOptions
          );
          break;
        case "material":
          const materials = [];
          filterobj.material.map((mat, i) => {
            materials.push(`filters[$or][${i}][materials][$eq]=${mat}`);
          });
          output.push(materials.join("&"));
          break;
        case "era":
          const eras = [];
          filterobj.era.map((era, i) => {
            eras.push(`filters[$or][${i}][Era][$eq]=${era}`);
          });
          output.push(eras.join("&"));
          break;
        case "condition":
          const conditions = [];
          filterobj.condition.map((condition, i) => {
            conditions.push(`filters[$or][${i}][Condition][$eq]=${condition}`);
          });
          output.push(conditions.join("&"));
          break;
      }
    }
  }
  return output.join("&");
}

// module.exports = {
//   filterstring,
// };
