import React from 'react';
import { SelectField } from '../ui/SelectField';
import { InputField } from '../ui/InputField';

const orderMethods = [
  { value: '1', label: '電話' },
  { value: '2', label: 'FAX' },
  { value: '3', label: 'メール' },
];

const offices = [
  { value: '110', label: '110: 北海道営業所' },
  { value: '120', label: '120: 東北営業所' },
  { value: '130', label: '130: 関東営業所' },
];

const shippingPoints = [
  { value: '010', label: '010: 本社物流センター' },
  { value: '020', label: '020: 東日本物流センター' },
  { value: '030', label: '030: 西日本物流センター' },
];

export default function OrderFormHeader() {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="space-y-4">
        <div>
          <label htmlFor="orderNumber" className="block text-sm font-medium text-gray-700 mb-1">
            受注番号
          </label>
          <InputField
            id="orderNumber"
            name="orderNumber"
            defaultValue="5438-0342"
            required
            hideLabel
          />
        </div>
        <div>
          <label htmlFor="orderMethod" className="block text-sm font-medium text-gray-700 mb-1">
            受注方法
          </label>
          <SelectField
            id="orderMethod"
            name="orderMethod"
            required
            options={orderMethods}
            defaultValue="1"
            hideLabel
          />
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="representativeCode" className="block text-sm font-medium text-gray-700 mb-1">
            担当者コード
          </label>
          <div className="flex gap-2">
            <InputField
              id="representativeCode"
              name="representativeCode"
              required
              defaultValue="1408"
              hideLabel
            />
            <button className="px-2 py-2 bg-gray-100 rounded text-sm h-[38px]">検索</button>
            <span className="py-2 text-sm">八幡 圭祐</span>
          </div>
        </div>
        <div>
          <label htmlFor="officeCode" className="block text-sm font-medium text-gray-700 mb-1">
            営業所コード
          </label>
          <SelectField
            id="officeCode"
            name="officeCode"
            required
            options={offices}
            defaultValue="110"
            hideLabel
          />
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="regionCode" className="block text-sm font-medium text-gray-700 mb-1">
            地域コード
          </label>
          <SelectField
            id="regionCode"
            name="regionCode"
            required
            options={offices}
            defaultValue="110"
            hideLabel
          />
        </div>
        <div>
          <label htmlFor="shippingPoint" className="block text-sm font-medium text-gray-700 mb-1">
            出荷拠点
          </label>
          <SelectField
            id="shippingPoint"
            name="shippingPoint"
            required
            options={shippingPoints}
            defaultValue="010"
            hideLabel
          />
        </div>
      </div>
    </div>
  );
}