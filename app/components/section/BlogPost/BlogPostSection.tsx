import {Button} from '../../ui/Button';
import { FetchPostData } from '../../Blog/FetchData';
export const BlogPostSection = () => {
  return (
    <section className='px-4 flex flex-col items-center mb-10'>
      <h3 className='capitalize text-4xl'>latest blog post</h3>
      <Button title='read all' href='/blog' />
      <FetchPostData />
    </section>
  );
};
