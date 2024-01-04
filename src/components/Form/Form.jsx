import { useState } from 'react';
import { SearchForm, Input, Button } from './Form.styled';

const Form = ({ searchMovies }) => {
  const [query, setQwery] = useState('');

  const handleInputChange = event => {
    setQwery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    searchMovies(query.toLowerCase());
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <Input
        type="text"
        name="query"
        autoFocus
        value={query}
        onChange={handleInputChange}
      />
      <Button type="submit">Search</Button>
    </SearchForm>
  );
};

export default Form;
