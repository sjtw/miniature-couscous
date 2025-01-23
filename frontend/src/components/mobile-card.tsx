'use client';
import React from 'react';
import Button from '@/components/button';
import { Comm } from '@/app/lib/definitions';
import DiagonalBox from '@/components/diagonal-box';
import CircleImage from '@/components/circle-image';

interface Props {
  comm: Comm
}

function Card({ comm }: Props) {

  const onclick = () => undefined;

  return (
    <div className="mt-8">
      <div className="relative">
        <CircleImage />
      </div>
      <div className="flex bg-white rounded-md border border-gray-400 overflow-hidden text-center pt-8">
        <div className="flex-1 pt-8 px-4 pb-8">
          <h1 className="text-xl text-green-600 font-bold">{comm.title}</h1>
          <p className="font-light mt-2">{comm.message}</p>
          <p className="font-bold mt-4">Total Price: ${comm.totalPrice}</p>
          <div className="pb-0 pt-4 flex">
            <Button className="flex-1 mr-4" text="SEE DETAILS" onClick={onclick} />
            <Button className="flex-1" text="EDIT DELIVERY" onClick={onclick} />
          </div>
        </div>
      </div>
      <DiagonalBox position="bottom" />
    </div>
  );
}

export default Card;
