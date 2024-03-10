import {iBurgerMenu} from '@/app/types/types';
export default function BurgerMenu({open, handleClick}: iBurgerMenu) {
  return (
    <div className='z-[100] cursor-pointer'>
      <button
        onClick={handleClick}
        className='flex flex-col justify-center items-center gap-y-px'
      >
        <span
          className={`bg-main-black w-8 h-[3px] rounded-full mb-px transition duration-100 ease-in ${
            open ? '-rotate-45 translate-y-1' : ''
          }`}
        ></span>
        <span
          className={`bg-main-black w-8 h-[3px] rounded-full mb-px transition duration-200 ease-in ${
            open ? 'opacity-0 translate-x-full' : ''
          }`}
        ></span>
        <span
          className={`bg-main-black w-8 h-[3px] rounded-full transition duration-100 ease-in ${
            open ? 'rotate-45 -translate-y-[5.5px]' : ''
          }`}
        ></span>
      </button>
    </div>
  );
}
