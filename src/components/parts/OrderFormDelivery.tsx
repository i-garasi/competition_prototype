import React from "react";
import { SelectField } from "../ui/SelectField";
import { InputField } from "../ui/InputField";

export default function OrderFormDelivery() {
  return (
    <div className="space-y-2">
      <div className="grid grid-cols-12 gap-4 items-end">
        <div className="col-span-3">
          <InputField
            label="受注日"
            name="orderDate"
            type="date"
            labelWidth="w-[80px]"
            required
            defaultValue="2024-12-23"
          />
        </div>
        <div className="col-span-3">
          <InputField
            label="出荷指示日"
            name="shippingDate"
            type="date"
            labelWidth="w-[120px]"
            defaultValue="2024-12-23"
          />
        </div>
        <div className="col-span-3">
          <SelectField
            label="指図書単価表示"
            name="priceDisplay"
            labelWidth="w-[210px]"
            options={[{ value: "1", label: "1: 表示" }]}
            defaultValue="1"
          />
        </div>
        <div className="col-span-3">
          <InputField
            label="掛率"
            name="rate"
            required
            defaultValue="70"
            suffix="%"
            inputWidth="w-[80px]"
            textAlign="text-right"
          />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 items-end">
        <div className="col-span-4">
          <div className="flex items-center space-x-2">
            <SelectField
              label="運賃内容"
              name="freightContent"
              labelWidth="w-[80px]"
              inputWidth="w-[130px]"
              required
              options={[{ value: "1", label: "1: 立替" }]}
              defaultValue="1"
            />
            <SelectField
              label="運賃内容"
              name="freightContent"
              labelWidth="w-[120px]"
              inputWidth="w-[130px]"
              required
              options={[{ value: "1", label: "1: 送付" }]}
              defaultValue="1"
              hideLabel
            />
          </div>
        </div>
        <div className="col-span-3">
          <SelectField
            label="便名"
            name="shipmentName"
            required
            options={[{ value: "1", label: "01: 第一貨物" }]}
            defaultValue="1"
          />
        </div>
        <div className="col-span-3">
          <SelectField
            label="直扱い"
            name="directDeliveryType"
            labelWidth="w-[100px]"
            options={[{ value: "0", label: "通常" }]}
          />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 items-end">
        <div className="col-span-3">
          <InputField
            label="県指図日"
            name="prefectureInstructionDate"
            type="date"
            labelWidth="w-[100px]"
          />
        </div>
        <div className="col-span-3">
          <InputField
            label="県指図番号"
            name="prefectureInstructionNumber"
            labelWidth="w-[120px]"
          />
        </div>
        <div className="col-span-3">
          <InputField label="指図日" name="instructionDate" type="date" />
        </div>
        <div className="col-span-3">
          <InputField
            label="指図番号"
            name="instructionNumber"
            labelWidth="w-[100px]"
          />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 items-end">
        <div className="col-span-2">
          <InputField
            label="立替運賃"
            name="freightCost"
            labelWidth="w-[100px]"
            textAlign="text-right"
            defaultValue="0"
          />
        </div>
        <div className="col-span-2">
          <InputField
            label="（数量"
            name="freightQuantity"
            labelWidth="w-[60px]"
            textAlign="text-right"
            defaultValue="1"
          />
        </div>
        <div className="col-span-1 text-center">×</div>
        <div className="col-span-2">
          <InputField
            label="単価"
            name="freightPrice"
            labelWidth="w-[40px]"
            textAlign="text-right"
          />
        </div>
        <div className="col-span-3 text-sm">）※数量×単価は保存されません</div>
      </div>
    </div>
  );
}
