import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Link from 'next/link';
import {iButton} from '@/app/types/types';
export const Button = ({title, href}: iButton) => {
  return (
    <button className='border-[1px] uppercase px-5 py-2 border-main-black rounded-md flex items-center'>
      <Link href={href}>
        {title} <ArrowRightAltIcon style={{marginLeft: 10}} />
      </Link>
    </button>
  );
};
