import { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import BookList from '../components/BookList';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import Pagination from '../components/Pagination';
import axios from 'axios';

const LIMIT = 16;

const HomePage = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isTrending, setIsTrending] = useState(true);

    const [query, setQuery] = useState('bestseller');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const fetchBooks = async (searchQuery, page = 1) => {
        setLoading(true);
        setError(null);

        try {
        const res = await axios.get(
            `https://openlibrary.org/search.json?q=${encodeURIComponent(
            searchQuery
            )}&page=${page}&limit=${LIMIT}`
        );

        setBooks(res.data.docs);
        setTotalPages(Math.ceil(res.data.numFound / LIMIT));
        } catch {
        setError('Failed to load books');
        } finally {
        setLoading(false);
        }
    };

    /* -------- TRENDING ON LOAD -------- */
    useEffect(() => {
        fetchBooks(query, currentPage);
    }, [currentPage]);

    /* -------- SEARCH -------- */
    const handleSearch = (searchQuery) => {
        if (!searchQuery.trim()) return;

        setIsTrending(false);
        setQuery(searchQuery);
        setCurrentPage(1);
        fetchBooks(searchQuery, 1);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div>
        <SearchBar onSearch={handleSearch} />

        {loading && <LoadingSpinner />}
        {error && <ErrorMessage message={error} />}

        {!loading && !error && (
            <>
            <h2 className="text-3xl font-bold mb-6">
                {isTrending ? 'Trending Books' : 'Search Results'}
            </h2>

            <BookList books={books} />

            {/* PAGINATION FOOTER */}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
            </>
        )}
        </div>
    );
};

export default HomePage;
