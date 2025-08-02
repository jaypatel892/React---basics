import "./Product.css";
import Price from "./Price";

function Product({ title, idx  }) {
  //   const list = features.map((feature) => <li>{feature}</li>);
  //   Dynamic Component styling
  // let isDiscount = price > 30000;
  //   let styles = { backgroundColor: isDiscount ? "pink"  : ""};

  let oldPrices = ["12,495", "11,900", "10,400", "599"];
  let newPrices = ["12,505", "11,950", "10,800", "700"];
  let description = [
   [ "8,000 DPI", "5 Programmable buttons"],
   [ "intutive surface","designed for iPad pro"],
   [ "designed for iPad pro","intutive surface"],
    ["Wirless", "optical orientation"]
  ];

  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
    </div>
  );
}

export default Product;
