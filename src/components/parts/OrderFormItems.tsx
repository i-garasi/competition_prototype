import React from 'react';

interface OrderItem {
  id: number;
  name: string;
  code: string;
  quantity: number;
  orderRemaining: number;
  allocated: number;
  total: number;
  unitPrice: number;
  amount: number;
}

const initialItems: OrderItem[] = [
  {
    id: 1,
    name: "スプリング付片",
    code: "11108120D100",
    quantity: 1,
    orderRemaining: 1,
    allocated: 0,
    total: 91,
    unitPrice: 91,
    amount: 7,
  },
  {
    id: 2,
    name: "カバーとスペーサー付",
    code: "M111552620101",
    quantity: 1,
    orderRemaining: 1,
    allocated: 0,
    total: 6846,
    unitPrice: 6846,
    amount: 546,
  },
];

export default function OrderFormItems() {
  return (
    <div className="border rounded">
      <table className="w-full text-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 border-b text-left w-8">#</th>
            <th className="px-4 py-2 border-b text-left">部品名</th>
            <th className="px-4 py-2 border-b text-left">部品コード</th>
            <th className="px-4 py-2 border-b text-right w-16">数量</th>
            <th className="px-4 py-2 border-b text-right w-16">受注残</th>
            <th className="px-4 py-2 border-b text-right w-16">引当数</th>
            <th className="px-4 py-2 border-b text-right w-20">全額</th>
            <th className="px-4 py-2 border-b text-right w-20">単価</th>
            <th className="px-4 py-2 border-b text-right w-16">値引</th>
          </tr>
        </thead>
        <tbody>
          {initialItems.map((item) => (
            <tr key={item.id} className={item.id % 2 === 0 ? 'bg-gray-50' : ''}>
              <td className="px-4 py-2 border-b">{item.id}</td>
              <td className="px-4 py-2 border-b">{item.name}</td>
              <td className="px-4 py-2 border-b">{item.code}</td>
              <td className="px-4 py-2 border-b text-right">{item.quantity}</td>
              <td className="px-4 py-2 border-b text-right">{item.orderRemaining}</td>
              <td className="px-4 py-2 border-b text-right">{item.allocated}</td>
              <td className="px-4 py-2 border-b text-right">{item.total}</td>
              <td className="px-4 py-2 border-b text-right">{item.unitPrice}</td>
              <td className="px-4 py-2 border-b text-right">{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}