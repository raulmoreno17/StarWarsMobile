import { useState } from 'react';
import { useQuery } from 'react-query';

const useSWAPI = () => {
  const [requestLink, setRequestLink] = useState('https://swapi.dev/api/people');
  const [currentPage, setCurrentPage] = useState(0);

  const getCharacters = async () => {
    const request = await fetch(requestLink)
      .then((response) => response.json())
      .then((data) => {
        const result = {
          characters: data.results,
          pagination: {
            previous: data.previous,
            next: data.next,
            count: data.count,
            currentPage: currentPage,
          },
        };
        return result;
      });
    return request;
  };
  const { data, isLoading } = useQuery(['characters', requestLink], getCharacters);

  // Defines default values for empty table
  let characters = [];
  let pagination = {
    count: 0,
    currentPage: 0,
  };

  if (data) {
    characters = data.characters;
    pagination = data.pagination;
  }

  const newRequest = (event: number) => {
    setCurrentPage(event);
    if (data.pagination.currentPage < event) {
      setRequestLink(pagination.next);
    } else if (data.pagination.currentPage > event) {
      setRequestLink(pagination.previous);
    }
    console.log('new Request function triggered!');
  };

  return { characters, pagination, isLoading, newRequest };
};

export default useSWAPI;
