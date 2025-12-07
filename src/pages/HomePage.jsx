import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import BookList from '../components/BookList';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import axios from 'axios'; // or use fetch

const HomePage = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async (query) => {
        if (!query.trim()) return;
        
        setLoading(true);
        setError(null);
        
        try {
        const response = await axios.get(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`);
        console.log(response.data); // Inspect the data structure!
        setBooks(response.data.docs); // Open Library returns 'docs' array
        } catch (err) {
        setError('Failed to fetch books. Please check your connection and try again.');
        console.error(err);
        } finally {
        setLoading(false);
        }
    };

    return (
        <div>
        <SearchBar onSearch={handleSearch} />
        {loading && <LoadingSpinner />}
        {error && <ErrorMessage message={error} />}
        {!loading && !error && <BookList books={books} />}
        </div>
    );
};

export default HomePage;