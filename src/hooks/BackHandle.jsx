import { ArrowLeft } from 'lucide-react';

function BackHandle({ active }) {
  const handleClick = () => active(prev => !prev);

  return (
    <div onClick={handleClick} className="z-50 cursor-pointer">
      <button
        type="button"
        className="flex items-center justify-center border bg-white hover:bg-slate-100 text-black rounded-md m-1 p-2 shadow-sm transition-colors"
        aria-label="Go back"
      >
        <ArrowLeft size={24} strokeWidth={2.5} />
      </button>
    </div>
  );
}

export default BackHandle;
