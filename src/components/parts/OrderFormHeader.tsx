import React from 'react';
import { SelectField } from '../ui/SelectField';
import { InputField } from '../ui/InputField';

export default function OrderFormHeader() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-12 gap-4 items-end">
        <div className="col-span-3">
          <InputField
            label="受注番号"
            name="orderNumber"
            defaultValue="5438-0342"
            required
          />
        </div>
        <div className="col-span-2">
          <SelectField
            label="受注方法"
            name="orderMethod"
            required
            options={[
              { value: '1', label: '電話' },
            ]}
          />
        </div>
        <div className="col-span-4">
          <div className="flex gap-2 items-end">
            <InputField
              label="担当者コード"
              name="representativeCode"
              required
              defaultValue="1408"
            />
            <button className="px-2 py-2 bg-gray-100 rounded text-sm h-[38px]">検索</button>
            <span className="py-2 text-sm">八幡 圭祐</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 items-end">
        <div className="col-span-2">
          <SelectField
            label="伝票区分"
            name="voucherType"
            required
            options={[
              { value: '1', label: '通常売上' },
            ]}
          />
        </div>
        <div className="col-span-3">
          <div className="flex gap-2 items-end">
            <InputField
              label="営業所コード"
              name="officeCode"
              required
              defaultValue="110"
            />
            <span className="py-2 text-sm">北海道営業所</span>
          </div>
        </div>
        <div className="col-span-4">
          <SelectField
            label="出荷拠点"
            name="shippingPoint"
            required
            options={[
              { value: '010', label: '010-本社物流センター' },
            ]}
          />
        </div>
        <div className="col-span-3">
          <div className="flex gap-2 items-end">
            <InputField
              label="地域コード"
              name="regionCode"
              required
              defaultValue="110"
            />
            <span className="py-2 text-sm">北海道営業所</span>
          </div>
        </div>
      </div>
    </div>
  );
}