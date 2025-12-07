import BookCard from './BookCard';

const BookList = ({ books }) => {
    if (books.length === 0) {
        return (
        <div className="text-center py-12 text-gray-500">
            <p className="text-xl">No books to display. Try a search!</p>
        </div>
        );
    }

    return (
        <div>
        <h2 className="text-2xl font-semibold mb-4">
            Found {books.length} {books.length === 1 ? 'book' : 'books'}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {books.map((book) => (
            <BookCard key={book.key} book={book} />
            ))}
        </div>
        </div>
    );
};

export default BookList;