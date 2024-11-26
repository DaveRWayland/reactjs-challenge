import React, { useState } from 'react';
import style from '@/styles/Anagram.module.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Chip } from 'primereact/chip';

export default function Anagrama() {
  const [Words, setWord] = useState([]);
  const [value, setValue] = useState([]);
  const [Anagrams, setAnagram] = useState([]);

  const handleAddWord = () => {
    Words.push(value);
    BuildAnagrams(Words);
    setWord(Words);
    setValue('');
  };

  const handleChipRemove = (e) => {
    const indexChip = Words.indexOf(e.value);
    Words.splice(indexChip, 1);
    BuildAnagrams(Words);
  };

  function sortWords(word) {
    return word.toLowerCase().split('').sort().join('');
  }

  function BuildAnagrams(Words) {
    if (Words) {
      console.log(Words);
      const collection = new Map();
      console.log(Words);
      Words.map((item) => {
        const wordSorted = sortWords(item);
        if (collection.has(wordSorted)) {
          collection.get(wordSorted).push(item);
        } else {
          collection.set(wordSorted, [item]);
        }
      });
      setAnagram(Array.from(collection.values()).filter((group) => group.length > 1));
    }
  }

  return (
    <>
      <div className={style.anagram_container}>
        <div className={style.anagram_contain}>
          <h1>Anagrama</h1>
          <div className='p-inputgroup flex-1 my-5'>
            <InputText value={value} onChange={(e) => setValue(e.target.value)} />
            <Button icon='pi pi-check' onClick={handleAddWord}>
              Agregar
            </Button>
          </div>
        </div>
        <div className='card flex flex-wrap gap-2'>
          {Words && Words.map((item, index) => <Chip key={index} label={item} removable onRemove={handleChipRemove} />)}
        </div>
        <div className='mt-5'>
          {Anagrams &&
            Anagrams.map((anagram, indexAnagram) => (
              <div className='anagram_chip card flex flex-wrap gap-2 mt-5' key={indexAnagram}>
                {anagram.map((i, indexItem) => (
                  <Chip key={indexItem} label={i} />
                ))}
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
