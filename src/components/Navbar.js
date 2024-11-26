import React from 'react';
import { Menubar } from 'primereact/menubar';
import styles from '@/styles/Navbar.module.css';

export default function Navbar() {
  const items = [
    {
      label: 'Anagrama',
      icon: 'pi pi-home',
      url: '/anagrama',
    },
    {
      label: 'Romano a Decimal',
      icon: 'pi pi-star',
      url: '/romano',
    },
    {
      label: 'API REST',
      icon: 'pi pi-envelope',
      url: '/gallery',
    },
  ];

  return (
    <div className='card'>
      <Menubar className={styles.navbar_menu} model={items} />
    </div>
  );
}
