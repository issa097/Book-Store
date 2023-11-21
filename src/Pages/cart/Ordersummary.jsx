const Ordersummary = ({ Totalprice }) => {
  return (
    <div className="cart-continer">
      <div className="cart-order-summary">
        <div className="title">Order Summary</div>
        <div className="cart-order-item">
          <span>SubTotal</span>
          <span>${Totalprice}</span>
        </div>
        <div className="cart-order-item">
          <span>Shopping Cost</span>
          <span>0</span>
        </div>
        <div className="cart-order-item">
          <span>Discount</span>
          <span>0</span>
        </div>
        <div className="cart-order-item">
          <span>Total</span>
          <span>${Totalprice}</span>
        </div>
      </div>
    </div>
  );
};

export default Ordersummary;
