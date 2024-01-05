import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import EditorList from '../../components/EditorList/EditorList';
import Form from 'components/Form/Form';
import { fetchSearchByKeyword } from 'services/TmbdApi';

const Movies = () => {
  const [searchFilms, setSearchFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noMoviesText, setNoMoviesText] = useState(false);

  // Отримуємо параметри пошуку з URL
  const [searchParams, setSearchParams] = useSearchParams();

  // Оголошуємо функцію searchMovies, яка використовує параметри пошуку
  const searchMovies = queryMovie => {
    setLoading(true);

    fetchSearchByKeyword(queryMovie)
      .then(searchResults => {
        setSearchFilms(searchResults);
        setNoMoviesText(searchResults.length === 0);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Отримуємо значення параметра "query" з URL
  const queryFromParams = searchParams.get('query') || '';

  // Встановлюємо значення з параметрів у компонент Form
  const handleFormSubmit = query => {
    searchParams.set('query', query);
    setSearchParams(searchParams);
    searchMovies(query);
  };

  return (
    <main>
      {/* Передаємо значення queryFromParams в компонент Form */}
      <Form searchMovies={handleFormSubmit} initialQuery={queryFromParams} />
      {loading && <Loader />}
      {noMoviesText && (
        <p>There is no movies with this request. Please, try again</p>
      )}
      {searchFilms && <EditorList films={searchFilms} />}
    </main>
  );
};

export default Movies;
