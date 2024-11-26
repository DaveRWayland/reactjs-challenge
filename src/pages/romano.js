import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { FloatLabel } from 'primereact/floatlabel';
import style from '@/styles/Roman.module.css';

export default function Roman() {
  const [number, setNumber] = useState('');

  var conversion = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  var romanToInt = function (romano) {
    let resultado = 0;
    const letters = romano.split('');
    letters.forEach((x, index) => {
      if (index + 1 != letters.length) {
        if (conversion[x] >= conversion[letters[index + 1]]) {
          resultado += conversion[x];
        } else {
          resultado -= conversion[x];
        }
      } else {
        resultado += conversion[x];
      }
    });
    return resultado;
  };

  return (
    <>
      <div className={style.roman_container}>
        <h1 className='my-5'>Romano a Decimal</h1>
        <FloatLabel className='mt-8'>
          <InputText
            className='p-inputtext-lg'
            id='inputRoman'
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            keyfilter={/^M?M?M?(CM|CD|D?C?C?C?)(XC|XL|L?X?X?X?)(IX|IV|V?I?I?I?)$/}
          />
          <label htmlFor='inputRoman'>Numero Romano</label>
        </FloatLabel>
        <h3 className={style.roman_result}>{romanToInt(number)}</h3>
      </div>
    </>
  );
}
