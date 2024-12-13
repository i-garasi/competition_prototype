import React from "react";
import { InputField } from "../ui/InputField";

export default function OrderFormFooter() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-12 gap-4 items-center">
        <div className="col-span-2">
          <InputField
            label="税抜売上"
            name="subtotal"
            defaultValue="6,937"
            labelWidth="w-[100px]"
            disabled
          />
        </div>
        <div className="col-span-2">
          <InputField
            label="消費税"
            name="tax"
            defaultValue="694"
            labelWidth="w-[80px]"
            disabled
          />
        </div>
        <div className="col-span-2 flex items-center">
          <span className="text-sm">税率</span>
          <span className="ml-2">0.10</span>
        </div>

        <div className="col-span-2">
          <InputField
            label="税込売上"
            name="totalWithTax"
            defaultValue="7,631"
            labelWidth="w-[100px]"
            disabled
          />
        </div>
        <div className="col-span-2">
          <InputField
            label="代引手数料"
            name="codFee"
            defaultValue="0"
            labelWidth="w-[130px]"
            disabled
          />
        </div>
        <div className="col-span-2">
          <InputField
            label="総合計"
            name="grandTotal"
            defaultValue="7,631"
            labelWidth="w-[80px]"
            disabled
          />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 items-center">
        <div className="col-span-7">
          <InputField
            label="社外コメント"
            name="externalComments"
            multiline
            rows={1}
          />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 items-center">
        <div className="col-span-7">
          <InputField
            label="特別売上理由"
            name="specialSalesReason"
            multiline
            rows={1}
          />
        </div>

        <div className="col-span-5">
          <InputField
            label="納期回答先FAX番号"
            name="billingFax"
            defaultValue="01652-7-2769"
            labelWidth="w-[200px]"
          />
        </div>
      </div>
    </div>
  );
}
