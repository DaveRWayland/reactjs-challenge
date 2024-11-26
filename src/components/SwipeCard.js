import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import Image from 'next/image';
import styles from '@/styles/SwipeCard.module.css';
import Link from 'next/link';

export default function SwipeCard() {
  return (
    <>
      <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]} className='mySwiper'>
        <SwiperSlide className={styles.slide}>
          <Link href={'/anagrama'}>
            <Image className={styles.slide_img} src={'/anagrama.png'} width={100} height={100} alt='Anagrama' />
          </Link>
          <h3 className={styles.slide_text}>Anagrama</h3>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Link href={'/romano'}>
            <Image className={styles.slide_img} src={'/romano.png'} width={100} height={100} alt='Números Romanos' />
          </Link>
          <h3 className={styles.slide_text}>Romano a Decimal</h3>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Link href={'/gallery'}>
            <Image className={styles.slide_img} src={'/nube.png'} width={100} height={100} alt='API REST' />
          </Link>
          <h3 className={styles.slide_text}>API REST</h3>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
