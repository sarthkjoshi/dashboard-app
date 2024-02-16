import Image from "next/image";
import React from "react";

export default function Card({ data, label, icon }: CardData) {
  return (
    <div className="rounded-xl border bg-white py-6 px-7.5 shadow-2xl">
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2">
        <Image src={icon} width={50} height={50} alt={""} />
      </div>
      <div className="mt-4 text-center  ">
        <div className="flex flex-col gap-5 ">
          <h4 className="text-xl font-bold text-black text-center ">{label}</h4>
          <p className="text-md font-medium text-center p-3">{data}</p>
        </div>
      </div>
    </div>
  );
}
