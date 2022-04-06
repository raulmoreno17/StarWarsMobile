import React from 'react';
import { Searchbar } from 'react-native-paper';
interface Props {
  onChange: (arg0: string) => void;
  searchValue: string;
  placeholder: string;
}
const Search: React.FC<Props> = ({ onChange, searchValue, placeholder }) => {
  return (
    <Searchbar
      autoComplete="true"
      placeholder={placeholder}
      testID="Search"
      onChangeText={onChange}
      value={searchValue}
    />
  );
};

export default Search;
