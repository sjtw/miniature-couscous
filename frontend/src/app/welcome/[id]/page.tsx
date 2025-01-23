import Card from '@/components/card';
import React from 'react';
import { getComm } from '@/app/lib/actions';
import MobileCard from '@/components/mobile-card';

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({ params }: Props) {
  try {
    const { id } = await params;
    const comm = await getComm(id);

    return (
      <>
        <div className="w-full hidden md:block">
          <Card comm={comm} />
        </div>
        <div className="w-full block md:hidden">
          <MobileCard comm={comm} />
        </div>
      </>
    );
  } catch (err) {
    if (err instanceof Error) {
      return (
        <div>
          {err.message}
        </div>
      );
    }
  }
}
