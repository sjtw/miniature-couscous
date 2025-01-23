import clsx from 'clsx';

interface Props {
  position: 'top-right' | 'bottom';
}

export default function DiagonalBox({ position }: Props) {
  const positionClass = position === 'top-right' ? '-top-2 -right-3 rotate-12 transform' : 'left-1/2 -translate-x-1/2 -bottom-2 -rotate-12 transform';

  return (
    <div className="relative bg-gray-200">
      <div
        className={clsx('absolute bg-pink-200 text-pink-800 py px-4 border border-pink-300 font-bold ', positionClass)}>
        FREE GIFT
      </div>
    </div>
  );
}
