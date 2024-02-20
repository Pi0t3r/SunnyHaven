import {Button} from '../../ui/Button';

export const BlogPostSection = () => {
  return (
    <section className='px-4'>
        <h3 className='capitalize text-4xl'>latest blog post</h3>
      <Button title='read all' href='/blog'/>
    </section>
  );
};
