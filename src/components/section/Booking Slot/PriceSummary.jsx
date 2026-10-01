import React from "react";

const PriceSummary = ({ services, discount = 0, onContinue }) => {
  const total = services.reduce((sum, s) => sum + s.price, 0) - discount;

  return (
    <div className="w-full max-w-xs">
      {services.map((s) => (
        <div key={s.id} className="flex justify-between py-1 text-sm text-gray-500">
          <span>Sub Total</span>
          <span>${s.price}</span>
        </div>
      ))}

      {discount > 0 && (
        <div className="flex justify-between py-1 text-sm text-green-600">
          <span>Discount</span>
          <span>-${discount}</span>
        </div>
      )}

      <div className="mt-2 flex justify-between border-t border-gray-200 pt-2">
        <span className="text-lg font-bold text-gray-900">Total</span>
        <span className="text-lg font-bold text-gray-900">${total}</span>
      </div>

      <button
        onClick={onContinue}
        className="mt-4 w-full rounded-lg bg-primary py-3 font-semibold text-white transition-colors hover:bg-primary/90"
      >
        Continue
      </button>
    </div>
  );
};

export default PriceSummary;