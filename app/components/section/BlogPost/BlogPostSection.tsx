import {Button} from '../../ui/Button';
import BlogImage1 from '@/public/assets/img/blog1.jpg';
import BlogImage2 from '@/public/assets/img/blog2.jpg';
import BlogImage3 from '@/public/assets/img/blog3.jpg';
import {Post} from '../../ui/Post';

export const BlogPostSection = () => {
  return (
    <section className='px-4 flex flex-col items-center mb-10'>
      <h3 className='capitalize text-4xl'>latest blog post</h3>
      <Button title='read all' href='/blog' />
      <Post
        src={BlogImage1}
        title='10 reasons to be helpful towards any animals'
        desc='At the core of our practice is the idea that cities are the incubators of our greatest achievements, and the best hope for a sustainable future.'
        day='20'
        month='Feb'
      />
      <Post
        src={BlogImage2}
        title='how to know your pet is hungry'
        day='21'
        month='feb'
        desc='At the core of our practice is the idea that cities are the incubators of our greatest achievements, and the best hope for a sustainable future.'
      />
      <Post
        src={BlogImage3}
        title='best home for your pets'
        day='22'
        month='feb'
        desc='At the core of our practice is the idea that cities are the incubators of our greatest achievements, and the best hope for a sustainable future.'
      />
    </section>
  );
};
