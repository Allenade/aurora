import ProductsAegis from "./products-aegis";
import ProductsBrainiac from "./products-brainiac";
import ProductsForm from "./product-form";
import ProductsHero from "./products-hero";
import ProductsIndustry from "./products-industry";
import ProductsMobility from "./product-mobility";
import ProductsQorel from "./products-qorel";

const ProductsPage = () => {
  return (
    <>
      <ProductsHero />
      <ProductsAegis />
      <ProductsBrainiac />
      <ProductsQorel />
      <ProductsMobility />
      <ProductsIndustry />
      <ProductsForm />
    </>
  );
};

export default ProductsPage;
