import React from 'react';
import { FunctionKey } from '../ui/FunctionKey';

export default function OrderFormActions() {
  return (
    <div className="flex gap-1 border-t pt-4">
      <FunctionKey label="登録" shortcut="F1" onClick={() => {}} />
      <FunctionKey label="全照" shortcut="F2" onClick={() => {}} />
      <FunctionKey label="日付指" shortcut="F3" onClick={() => {}} />
      <FunctionKey label="行挿除" shortcut="F4" onClick={() => {}} />
      <FunctionKey label="再読" shortcut="F5" onClick={() => {}} />
      <FunctionKey label="諸登録" shortcut="F7" onClick={() => {}} />
      <FunctionKey label="注文" shortcut="F8" onClick={() => {}} />
      <FunctionKey label="クリア" shortcut="F12" onClick={() => {}} />
    </div>
  );
}