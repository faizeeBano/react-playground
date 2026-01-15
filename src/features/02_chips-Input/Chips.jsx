import React, { useState, useCallback, memo } from 'react'
import './chips.css';

export default function Chips() {
  const [inputValue, setInputValue] = useState('');
  const [chips, setChips] = useState([]);

  const handleEnter = useCallback((e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      setChips(prev => [
        ...prev,
        { id: Date.now(), title: inputValue }
      ]);
      setInputValue('');
    }
  }, [inputValue]);

  const handleClose = useCallback((id) => {
    setChips(prev => prev.filter(chip => chip.id !== id));
  }, []);

  return (
    <div className='chips-container'>
      <input
        type='text'
        placeholder='Type here...'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleEnter}
      />

      <div className='chips-list'>
        {chips.map(chip => (
          <Chip
            key={chip.id}
            chip={chip}
            onRemove={handleClose}
          />
        ))}
      </div>
    </div>
  )
}

/* 🔹 Memoized child component */
const Chip = memo(function Chip({ chip, onRemove }) {
  return (
    <div className="chip">
      <span>{chip.title}</span>
      <button
        className='close-btn'
        onClick={() => onRemove(chip.id)}
      >
        X
      </button>
    </div>
  )
});
