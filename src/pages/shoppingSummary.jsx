import ShoppingSummaryCard from "../components/ShoppingSummaryCard";
import TotalShoppingSummaryCard from "../components/TotalShoppingSummaryCard";

export default function ShoppingSummary() {
  return (
    <div className=" d-flex flex-wrap justify-content-evenly gap-3">
      <p className="own-p-total-card">
        Has enviado un pedido con lo siguiente:
      </p>
      <ShoppingSummaryCard />
      <TotalShoppingSummaryCard />
    </div>
  );
}
