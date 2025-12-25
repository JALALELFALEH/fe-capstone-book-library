const AboutPage = () => {
    return (
        <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-6 text-center">About MyBookApp</h1>

        <p className="text-gray-700 mb-4 leading-relaxed">
            MyBookApp is a modern web application that allows users to search, browse, 
            and discover books from the Open Library database. It is designed to be 
            fast, responsive, and user-friendly, providing a seamless experience 
            for book enthusiasts.
        </p>

        <p className="text-gray-700 mb-4 leading-relaxed">
            Users can search for books by title, author, or keyword, view trending 
            books on the homepage, and click on any book to see detailed information 
            including the cover, description, subjects, and publication date. 
            Each book also has a direct link to its page on Open Library.
        </p>

        <p className="text-gray-700 mb-4 leading-relaxed">
            This project is built using <span className="font-semibold"> React </span> 
            for the frontend, <span className="font-semibold"> React Router v6 </span> 
            for client-side routing, <span className="font-semibold"> Axios </span> 
            for API requests, and <span className="font-semibold"> Tailwind CSS </span> 
            for styling.
        </p>

        <p className="text-gray-700 leading-relaxed">
            The goal of MyBookApp is to provide a clean and simple platform for users 
            to explore books, learn about new titles, and navigate book details easily.
        </p>
        </div>
    );
};

export default AboutPage;
