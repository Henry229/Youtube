import React, { memo, useRef } from 'react';
import styles from './search_header.module.css';

const SearchHeader = memo (
  ({search}) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    search(value);
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const onClick = () => {
    handleSearch(); 
  };

  console.log('Rendering SearchHeader!!');
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="/images/logo.png" alt="logo" />
        <h1 className={styles.title} ><a href="/">Youtube</a></h1>
      </div>
      <input 
        className={styles.input}
        ref={inputRef} 
        type="search" 
        placeholder='Search...' 
        onKeyPress={onKeyPress}
      />
      <button className={styles.button} type='submit' onClick={onClick}>
        <img className={styles.buttonImg} src="/images/search.png" alt="search" />
      </button>
    </header>
  )
}
)

export default SearchHeader;
