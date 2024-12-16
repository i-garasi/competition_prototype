import React from "react";
import { InputField } from "../ui/InputField";

interface OrderItem {
  id: number;
  name: string;
  code: string;
  quantity: number;
  orderRemaining: number;
  allocated: number;
  unitPrice: number;
  amount: number;
  tax: number;
  stock: number;
  changeInfo: string;
  model: string;
}

const initialItems: OrderItem[] = [
  {
    id: 1,
    name: "スプリング付片",
    code: "11108120D100",
    quantity: 1,
    orderRemaining: 1,
    allocated: 0,
    unitPrice: 91,
    amount: 91,
    tax: 7,
    stock: 50,
    changeInfo: "変更なし",
    model: "ABC-123",
  },
  {
    id: 2,
    name: "カバーとスペーサー付",
    code: "M111552620101",
    quantity: 1,
    orderRemaining: 1,
    allocated: 0,
    unitPrice: 6846,
    amount: 6846,
    tax: 546,
    stock: 25,
    changeInfo: "変更なし",
    model: "XYZ-789",
  },
  {
    id: 3,
    name: "",
    code: "",
    quantity: 0,
    orderRemaining: 0,
    allocated: 0,
    unitPrice: 0,
    amount: 0,
    tax: 0,
    stock: 0,
    changeInfo: "",
    model: "",
  },
];

export default function OrderFormItems() {
  return (
    <div className="border rounded">
      <div className="max-h-80 overflow-y-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 sticky top-0">
            <tr>
              <th className="px-4 py-2 border-b text-left">部品名</th>
              <th className="px-4 py-2 border-b text-left">部品コード</th>
              <th className="px-4 py-2 border-b text-right">数量</th>
              <th className="px-4 py-2 border-b text-right">受注残</th>
              <th className="px-4 py-2 border-b text-right">引当数</th>
              <th className="px-4 py-2 border-b text-right">単価</th>
              <th className="px-4 py-2 border-b text-right">金額</th>
              <th className="px-4 py-2 border-b text-right">消費税</th>
              <th className="px-4 py-2 border-b text-right">在庫</th>
              <th className="px-4 py-2 border-b text-left">変更情報</th>
              <th className="px-4 py-2 border-b text-left">機種</th>
            </tr>
          </thead>
          <tbody>
            {initialItems.map((item) => (
              <tr
                key={item.id}
                className={item.id % 2 === 0 ? "bg-gray-50" : ""}
              >
                <td className="px-4 py-2 border-b">{item.name}</td>
                <td className="px-4 py-2 border-b">
                  <InputField
                    label="部品コード"
                    id="partsCode"
                    name="partsCode"
                    defaultValue={item.code}
                    required={false}
                    hideLabel
                  />
                </td>
                <td className="px-4 py-2 border-b text-right">
                  <InputField
                    label="数量"
                    id="quantity"
                    name="quantity"
                    defaultValue={item.quantity}
                    inputWidth="w-[32px]"
                    required={false}
                    hideLabel
                  />
                </td>
                <td className="px-4 py-2 border-b text-right">
                  {item.orderRemaining}
                </td>
                <td className="px-4 py-2 border-b text-right">
                  {item.allocated}
                </td>
                <td className="px-4 py-2 border-b text-right">
                  {item.unitPrice}
                </td>
                <td className="px-4 py-2 border-b text-right">{item.amount}</td>
                <td className="px-4 py-2 border-b text-right">{item.tax}</td>
                <td className="px-4 py-2 border-b text-right">{item.stock}</td>
                <td className="px-4 py-2 border-b">{item.changeInfo}</td>
                <td className="px-4 py-2 border-b">{item.model}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
