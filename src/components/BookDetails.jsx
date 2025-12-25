import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const BookDetails = () => {
    const { workId } = useParams();
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBook = async () => {
        try {
            const res = await axios.get(
            `https://openlibrary.org/works/${workId}.json`
            );
            setBook(res.data);
        } catch {
            setError('Failed to load book details');
        } finally {
            setLoading(false);
        }
        };

        fetchBook();
    }, [workId]);

    /* ---------------- LOADING STATE ---------------- */
    if (loading) {
        return (
        <div className="animate-pulse max-w-4xl mx-auto flex gap-8">
            <div className="w-64 h-96 bg-gray-300 rounded"></div>
            <div className="flex-1 space-y-4">
            <div className="h-8 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
            <div className="h-4 bg-gray-300 rounded w-2/3"></div>
            </div>
        </div>
        );
    }

    if (error) {
        return (
        <p className="text-center text-red-600 font-semibold">
            {error}
        </p>
        );
    }

    /* ---------------- DATA ---------------- */
    const coverUrl = book.covers
        ? `https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`
        : 'https://via.placeholder.com/300x450?text=No+Cover';

    return (
        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-6 md:p-10">
        <div className="flex flex-col md:flex-row gap-10">
            
            {/* COVER */}
            <img
            src={coverUrl}
            alt={book.title}
            className="w-72 rounded-lg shadow-md mx-auto md:mx-0"
            />

            {/* DETAILS */}
            <div className="flex-1">
            <h1 className="text-4xl font-bold mb-4">
                {book.title}
            </h1>

            {/* DESCRIPTION */}
            <p className="text-gray-700 leading-relaxed mb-6">
                {book.description
                ? typeof book.description === 'string'
                    ? book.description
                    : book.description.value
                : 'No description available.'}
            </p>

            {/* METADATA */}
            <div className="space-y-2 text-sm text-gray-600 mb-6">
                {book.first_publish_date && (
                <p>
                    <span className="font-semibold">First published:</span>{' '}
                    {book.first_publish_date}
                </p>
                )}

                {book.subjects && (
                <p>
                    <span className="font-semibold">Subjects:</span>{' '}
                    {book.subjects.slice(0, 5).join(', ')}
                </p>
                )}
            </div>

            {/* ACTION BUTTON */}
            <a
                href={`https://openlibrary.org/works/${workId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
                View on Open Library
            </a>
            </div>
        </div>
        </div>
    );
};

export default BookDetails;
