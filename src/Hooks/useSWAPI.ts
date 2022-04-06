import { useState } from 'react';
import { useQuery } from 'react-query';

const useSWAPI = () => {
  const [requestLink, setRequestLink] = useState('https://swapi.dev/api/people');
  const [currentPage, setCurrentPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const getCharacters = async () => {
    const request = await fetch(requestLink)
      .then((response) => response.json())
      .then((data) => {
        const numberOfPages = Math.round(data.count / 10);
        const result = {
          characters: data.results,
          pagination: {
            previous: data.previous,
            next: data.next,
            count: data.count,
            currentPage: currentPage,
            numberOfPages: numberOfPages,
            paginationLabel: `${currentPage + 1} of ${numberOfPages}`,
          },
        };
        return result;
      });
    return request;
  };
  const { data, isLoading } = useQuery(['characters', requestLink], getCharacters);

  // Defines values depending if there exists data for the table
  let characters = [];
  let pagination = {
    count: 0,
    currentPage: 0,
    next: '',
    previous: '',
    numberOfPages: 0,
    paginationLabel: '',
  };
  if (data) {
    characters = data.characters;
    pagination = data.pagination;
  }

  const newRequest = (event: number) => {
    setCurrentPage(event);
    if (data!.pagination.currentPage < event) {
      setRequestLink(pagination.next);
    } else if (data!.pagination.currentPage > event) {
      setRequestLink(pagination.previous);
    }
  };

  const searchCharacter = (input: string) => {
    setSearchQuery(input);
    setRequestLink(`https://swapi.dev/api/people/?search=${input}`);
  };

  return { characters, pagination, isLoading, newRequest, searchCharacter, searchQuery };
};

export default useSWAPI;
