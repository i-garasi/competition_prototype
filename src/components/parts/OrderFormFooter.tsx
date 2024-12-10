import React from 'react';
import { InputField } from '../ui/InputField';
import { SelectField } from '../ui/SelectField';

export default function OrderFormFooter() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-2">
          <InputField
            label="税抜売上"
            name="subtotal"
            defaultValue="6,937"
            disabled
          />
        </div>
        <div className="col-span-2">
          <InputField
            label="消費税"
            name="tax"
            defaultValue="555"
            disabled
          />
        </div>
        <div className="col-span-1 flex items-center mt-6">
          <span className="text-sm">税率</span>
          <span className="ml-2">0.08</span>
        </div>
        <div className="col-span-2">
          <InputField
            label="税込売上"
            name="totalWithTax"
            defaultValue="7,492"
            disabled
          />
        </div>
        <div className="col-span-2">
          <InputField
            label="代引手数料"
            name="codFee"
            defaultValue="0"
            disabled
          />
        </div>
        <div className="col-span-2">
          <InputField
            label="総合計"
            name="grandTotal"
            defaultValue="7,492"
            disabled
          />
        </div>
      </div>

      <div className="space-y-2">
        <InputField
          label="社外コメント"
          name="externalComments"
          multiline
          rows={2}
        />
        <InputField
          label="特別売上理由"
          name="specialSalesReason"
          multiline
          rows={2}
        />
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-4">
          <SelectField
            label="請求回答手段"
            name="billingResponseMethod"
            options={[
              { value: '1', label: '回答しない' },
              { value: '2', label: 'FAX' },
              { value: '3', label: 'メール' },
            ]}
          />
        </div>
        <div className="col-span-4">
          <InputField
            label="請求回答先FAX番号"
            name="billingFax"
            defaultValue="01652-7-2769"
          />
        </div>
      </div>
    </div>
  );
}