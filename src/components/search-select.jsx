import { useState, useEffect, useRef } from 'react';
import { Input } from '@/components/input';
import { Text } from '@/components/text';

export function SearchSelect({ options, onChange, placeholder }) {
  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const dropdownRef = useRef(null);

  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(search.toLowerCase()) ||
    option.value.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    const newSelectedOptions = [...selectedOptions, option];
    setSelectedOptions(newSelectedOptions);
    onChange(newSelectedOptions.map(o => o.value));
    setSearch('');
  };

  const handleRemove = (option) => {
    const newSelectedOptions = selectedOptions.filter(o => o.value !== option.value);
    setSelectedOptions(newSelectedOptions);
    onChange(newSelectedOptions.map(o => o.value));
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onFocus={() => setIsOpen(true)}
        placeholder={placeholder}
        className="w-full"
      />
      {selectedOptions.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {selectedOptions.map(option => (
            <div key={option.value} className="flex items-center bg-zinc-100 rounded-full px-3 py-1 text-sm">
              <span>{option.label}</span>
              <button onClick={() => handleRemove(option)} className="ml-2 text-zinc-500 hover:text-zinc-700">
                &times;
              </button>
            </div>
          ))}
        </div>
      )}
      {isOpen && filteredOptions.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-zinc-200 rounded-lg shadow-lg max-h-60 overflow-auto">
          {filteredOptions.map(option => (
            <div
              key={option.value}
              className="px-4 py-2 hover:bg-zinc-100 cursor-pointer"
              onClick={() => handleSelect(option)}
            >
              <Text>{option.label}</Text>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}