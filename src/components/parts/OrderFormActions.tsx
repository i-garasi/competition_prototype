import React from "react";
import { FunctionKey } from "../ui/FunctionKey";

export default function OrderFormActions() {
  return (
    <div className="flex gap-2 border-t pt-4">
      <FunctionKey label="登録" shortcut="F1" onClick={() => {}} />
      <FunctionKey label="参照" shortcut="F2" onClick={() => {}} />
      <FunctionKey label="行追加" shortcut="F3" onClick={() => {}} />
      <FunctionKey label="行削除" shortcut="F4" onClick={() => {}} />
      <FunctionKey label="削除" shortcut="F5" onClick={() => {}} />
      <FunctionKey label="出荷登録" shortcut="F6" onClick={() => {}} />
      <FunctionKey label="諸口登録" shortcut="F7" onClick={() => {}} />
      <FunctionKey label="複写" shortcut="F8" onClick={() => {}} />
      <FunctionKey label="" shortcut="F9" onClick={() => {}} />
      <FunctionKey label="" shortcut="F10" onClick={() => {}} />
      <FunctionKey label="クリア" shortcut="F11" onClick={() => {}} />
      <FunctionKey label="戻る" shortcut="F12" onClick={() => {}} />
    </div>
  );
}
