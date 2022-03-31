import React from 'react';
import {useState} from 'react';
import { Searchbar } from 'react-native-paper';
interface props { onChange: (arg0: string) => void;
};
const Search = (props: props) => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = (query: string) => {
      setSearchQuery(query)
      props.onChange(query)
    };

  return <Searchbar autoComplete placeholder="Who are you looking for?" testID="Search" onChangeText={onChangeSearch} value={searchQuery} />;
};

export default Search;
