import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
    const coverUrl = book.cover_i 
        ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
        : 'https://via.placeholder.com/150x200?text=No+Cover';

    return (
        <Link to={`/book/${book.key}`}>
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer h-full">
            <img 
            src={coverUrl} 
            alt={`Cover of ${book.title}`}
            className="w-full h-48 object-cover"
            />
            <div className="p-4">
            <h3 className="font-bold text-lg mb-2 line-clamp-2">{book.title}</h3>
            <p className="text-gray-600 text-sm">
                by {book.author_name ? book.author_name.join(', ') : 'Unknown Author'}
            </p>
            </div>
        </div>
        </Link>
    );
};

export default BookCard;