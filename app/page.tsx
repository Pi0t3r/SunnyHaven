'use client';
import {Banner} from './components/data/BannerData';
import {QuoteData} from './components/data/QuoteData';
import {IconsList} from './components/section/IconList/IconList';
import {PetFoodSection} from './components/section/PetFoodSection/PetFoodSection';
import {Sale} from './components/section/Sale/Sale';
import {SectionBackground} from './components/section/Section';
import {CarouselImage, CarouselText} from './components/ui/Carousel';
import {Logo} from './components/ui/Logo';
import {Card} from './components/ui/Card';
import {Button} from './components/ui/Button';
import {BlogPostSection} from './components/section/BlogPost/BlogPostSection';
export default function Home() {
  return (
    <main>
      <Logo />
      <SectionBackground>
        <CarouselImage items={Banner} />
      </SectionBackground>
      <IconsList />
      <section className='px-10 my-10'>
        <div className='mb-10'>
          <h3 className='capitalize text-5xl'>pet clothing</h3>
          <Button href='/clothes' title='shop now'/>
        </div>
        <Card
          name='Grey hoodie'
          price={18}
          isNew={true}
          isDiscount={false}
          isSold={false}
          src='https://demo.templatesjungle.com/waggy/images/item1.jpg'
        />
      </section>
      <PetFoodSection />
      <SectionBackground>
        <Sale />
      </SectionBackground>
      <section className='p-12'>
        <CarouselText items={QuoteData} />
      </section>
      <section className='px-10 my-10'>
        <div className='mb-10'>
          <h3 className='capitalize text-5xl'>best selling products</h3>
          <Button href='/best' title='shop now'/>
        </div>
        <Card
          name='Grey hoodie'
          price={18}
          isNew={false}
          isDiscount={false}
          isSold={false}
          src='https://demo.templatesjungle.com/waggy/images/item5.jpg'
        />
      </section>
      <BlogPostSection />
    </main>
  );
}
