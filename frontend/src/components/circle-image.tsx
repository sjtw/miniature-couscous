import React from 'react';
import Image from 'next/image';

function CircleImage() {
  return (
    <div className="w-24 h-24 rounded-full overflow-hidden absolute left-1/2 -translate-x-1/2 -top-12">
      <Image className="w-full h-full object-cover" src={'/images/cat.jpg'} alt={'Image of a cat.'} width={300} height={400}/>
    </div>
  );
}

export default CircleImage;