import React from 'react';
import { useState } from 'react';
import { Searchbar } from 'react-native-paper';
interface Props {
  onChange: (arg0: string) => void;
}
const Search: React.FC<Props> = ({ onChange }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = (query: string) => {
    setSearchQuery(query);
    onChange(query);
  };

  return (
    <Searchbar
      autoComplete
      placeholder="Who are you looking for?"
      testID="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

export default Search;
