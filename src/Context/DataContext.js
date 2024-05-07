// DataContext.js
import React, { createContext, useState, useEffect } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [clickedItems, setClickedItems] = useState([]);

  const incrementCount = () => {
    setCount(count + 1);
    const newItem = `Item ${count + 1}`;
    setClickedItems([...clickedItems, newItem]);
  };

  useEffect(() => {
    localStorage.setItem('clickedItems', JSON.stringify(clickedItems));
  }, [clickedItems]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('clickedItems'));
    if (storedItems) {
      setClickedItems(storedItems);
    }
  }, []);

  return (
    <DataContext.Provider value={{ count, clickedItems, incrementCount }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
