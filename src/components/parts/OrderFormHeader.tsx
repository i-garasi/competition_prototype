import React from "react";
import { SelectField } from "../ui/SelectField";
import { InputField } from "../ui/InputField";

const orderMethods = [
  { value: "1", label: "電話" },
  { value: "2", label: "FAX" },
  { value: "3", label: "メール" },
];

const offices = [
  { value: "110", label: "110: 北海道営業所" },
  { value: "120", label: "120: 東北営業所" },
  { value: "130", label: "130: 関東営業所" },
];

const shippingPoints = [
  { value: "010", label: "010: 本社物流センター" },
  { value: "020", label: "020: 東日本物流センター" },
  { value: "030", label: "030: 西日本物流センター" },
];

export default function OrderFormHeader() {
  return (
    <>
      <div className="grid grid-cols-12 items-center gap-4">
        <div className="col-span-3">
          <InputField
            label="受注番号"
            id="orderNumber"
            name="orderNumber"
            defaultValue="5438-0342"
            labelWidth="w-[100px]"
            required
          />
        </div>
        <div className="col-span-3">
          <SelectField
            label="受注方法"
            id="orderMethod"
            name="orderMethod"
            labelWidth="w-[100px]"
            required
            options={orderMethods}
            defaultValue="1"
          />
        </div>
        <div className="col-span-6">
          <div className="flex items-center space-x-2">
            <InputField
              label="担当者コード"
              id="representativeCode"
              name="representativeCode"
              required
              defaultValue="1408"
              labelWidth="w-[100px]"
              inputWidth="w-[70px]"
            />
            <button className="px-2 py-1 bg-gray-100 rounded text-sm h-[26px]">
              検索
            </button>
            <span className="text-sm">テストユーザー</span>
          </div>
        </div>
        <div className="col-span-3">
          <SelectField
            label="伝票区分"
            id="orderSection"
            name="orderSection"
            labelWidth="w-[100px]"
            required
            options={[{ value: "1", label: "1: 通常売上" }]}
            defaultValue="1"
          />
        </div>
        <div className="col-span-3">
          <SelectField
            label="営業所コード"
            id="officeCode"
            name="officeCode"
            labelWidth="w-[170px]"
            required
            options={offices}
            defaultValue="110"
          />
        </div>
        <div className="col-span-3">
          <SelectField
            label="出荷拠点"
            id="shippingPoint"
            name="shippingPoint"
            labelWidth="w-[100px]"
            required
            options={shippingPoints}
            defaultValue="010"
          />
        </div>
        <div className="col-span-3">
          <SelectField
            label="地域コード"
            id="regionCode"
            name="regionCode"
            labelWidth="w-[130px]"
            required
            options={offices}
            defaultValue="110"
          />
        </div>
      </div>
    </>
  );
}
