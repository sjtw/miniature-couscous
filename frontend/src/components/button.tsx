import React from 'react';
import clsx from 'clsx'

interface Props {
  text: string;
  onClick: () => void;
  className?: string;
}

function Button({text, className, onClick}: Props) {
  return (
    <button className={clsx('bg-green-600 rounded-md text-white justify-center p-2 my-4', className)} onClick={onClick}>{text}</button>
  );
}

export default Button;