import Navbar from '@/components/Navbar';
import styles from '../styles/Home.module.css';
import SwipeCard from '@/components/SwipeCard';
export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.options_container}>
          <SwipeCard className='pb-5 h-100' />
        </div>
      </div>
    </>
  );
}
