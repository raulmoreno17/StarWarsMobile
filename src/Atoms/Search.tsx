import {useState} from 'react';
import { Searchbar } from 'react-native-paper';
const Search = (props) => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = (query: string) => {
      setSearchQuery(query)
      props.onChange(query)
    };

  return <Searchbar placeholder="Search" onChangeText={onChangeSearch} value={searchQuery} />;
};

export default Search;
