import Payment from "../Payment";

const BuyModal = ({ amount }) => {
  return (
    <div className="bg-white w-96 p-8 rounded-lg">
      <Payment amount={amount} />
    </div>
  );
};

export default BuyModal;

// passing the property to component using ' amount' to payment component
