import React from 'react';
import { InputField } from '../ui/InputField';

export default function OrderFormFooter() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-12 gap-4 items-center">
        <div className="col-span-2 text-sm font-medium text-gray-700">税抜売上</div>
        <div className="col-span-2">
          <InputField
            name="subtotal"
            defaultValue="6,937"
            disabled
            hideLabel
          />
        </div>
        <div className="col-span-2 text-sm font-medium text-gray-700">消費税</div>
        <div className="col-span-2">
          <InputField
            name="tax"
            defaultValue="555"
            disabled
            hideLabel
          />
        </div>
        <div className="col-span-1 flex items-center">
          <span className="text-sm">税率</span>
          <span className="ml-2">0.08</span>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 items-center">
        <div className="col-span-2 text-sm font-medium text-gray-700">税込売上</div>
        <div className="col-span-2">
          <InputField
            name="totalWithTax"
            defaultValue="7,492"
            disabled
            hideLabel
          />
        </div>
        <div className="col-span-2 text-sm font-medium text-gray-700">代引手数料</div>
        <div className="col-span-2">
          <InputField
            name="codFee"
            defaultValue="0"
            disabled
            hideLabel
          />
        </div>
        <div className="col-span-2 text-sm font-medium text-gray-700">総合計</div>
        <div className="col-span-2">
          <InputField
            name="grandTotal"
            defaultValue="7,492"
            disabled
            hideLabel
          />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 items-center">
        <div className="col-span-2 text-sm font-medium text-gray-700">社外コメント</div>
        <div className="col-span-10">
          <InputField
            name="externalComments"
            multiline
            rows={2}
            hideLabel
          />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 items-center">
        <div className="col-span-2 text-sm font-medium text-gray-700">特別売上理由</div>
        <div className="col-span-10">
          <InputField
            name="specialSalesReason"
            multiline
            rows={2}
            hideLabel
          />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 items-center">
        <div className="col-span-2 text-sm font-medium text-gray-700">納期回答先FAX番号</div>
        <div className="col-span-4">
          <InputField
            name="billingFax"
            defaultValue="01652-7-2769"
            hideLabel
          />
        </div>
      </div>
    </div>
  );
}