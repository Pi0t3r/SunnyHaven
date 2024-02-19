import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
export const Button = () => {
  return (
    <button className='border-[1px] uppercase px-5 py-2 border-main-black rounded-md flex items-center'>
      shop now <ArrowRightAltIcon style={{marginLeft: 10}} />
    </button>
  );
};
