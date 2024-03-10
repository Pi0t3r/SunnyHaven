import ErrorIcon from '@mui/icons-material/Error';
interface iErrorMessage {
  error: string;
}
export const ErrorMessage = ({error}: iErrorMessage) => {
  return (
    <div className='flex flex-col items-center'>
      <ErrorIcon />
      <p>Error while fetching data: {error}</p>
    </div>
  );
};
