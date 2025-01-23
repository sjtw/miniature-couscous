'use client';
import React from 'react';
import Image from 'next/image';
import Button from '@/components/button';
import { Comm } from '@/app/lib/definitions';
import DiagonalBox from '@/components/diagonal-box';

interface Props {
  comm: Comm
}

function Card({ comm }: Props) {

  const onclick = () => undefined;

  return (
    <div>
      <DiagonalBox position="top-right"/>
      <div className="flex bg-white rounded-md border border-gray-400 overflow-hidden">
        <Image className="flex-1" src={'/images/cat.jpg'} alt={'Image of a cat.'} width={300} height={400} />
        <div className="flex-1  pt-8 px-4">
          <h1 className="text-xl text-green-600 font-bold">{comm.title}</h1>
          <p className="font-light mt-2">{comm.message}</p>
          <p className="font-bold mt-4">Total Price: ${comm.totalPrice}</p>
          <div className="pb-0 flex">
            <Button className="flex-1 mr-4" text="SEE DETAILS" onClick={onclick} />
            <Button className="flex-1" text="EDIT DELIVERY" onClick={onclick} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
