
import {iSectionBackground} from '@/app/types/types';
export const SectionBackground = ({children}: iSectionBackground) => {
  return (
    <section className='bg-banner text-center py-10 px-10'>
      {children}
    </section>
  );
};
