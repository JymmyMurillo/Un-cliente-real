export default function ShoppingSummaryCard() {
  return (
    <div className="own-cart-card  rounded-3 d-flex flex-row align-items-center">
      <img
        className="own-img-cart-card rounded-3"
        src=""
        alt="Imagen de Categoria"
      ></img>
      <div className="d-flex flex-row justify-content-evenly own-product-text-cart">
        <div className="own-product-cart-name d-flex flex-column align-items-center justify-content-evenly">
          <p className="m-0 text-center own-product-cart-name">
            Hogar y Decoracíon
          </p>
          <p className="m-0 text-center own-product-cart-name">COP $165.000</p>
        </div>
        <div className="d-flex flex-row align-items-center">
          <div className="own-product-cart-title mt-1">1</div>
        
            <p className="m-0 own-product-cart-title fw-bold mt-1"> Und. </p>
         
        </div>
        
          <p className="m-0 text-center own-product-cart-name d-flex align-items-center justify-content-evenly">
            $165.000
          </p>
        
      </div>
    </div>
  );
}
