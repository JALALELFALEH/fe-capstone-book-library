const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    if (totalPages <= 1) return null;

    const maxPagesToShow = 10;
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = startPage + maxPagesToShow - 1;

    if (endPage > totalPages) {
        endPage = totalPages;
        startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }

    return (
        <nav className="flex justify-center mt-10 bg-gray-100 py-4 rounded-lg shadow-inner">
        <ul className="flex gap-2 flex-wrap items-center">
            {/* Prev button */}
            <li>
            <button
                onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-3 py-2 rounded-md border bg-white text-gray-700 hover:bg-gray-200 disabled:opacity-50"
            >
                Prev
            </button>
            </li>

            {/* Page numbers */}
            {pages.map((page) => (
            <li key={page}>
                <button
                onClick={() => onPageChange(page)}
                className={`px-4 py-2 rounded-md border text-sm font-medium transition
                    ${
                    page === currentPage
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white text-gray-700 hover:bg-gray-200'
                    }`}
                >
                {page}
                </button>
            </li>
            ))}

            {/* Next button */}
            <li>
            <button
                onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="px-3 py-2 rounded-md border bg-white text-gray-700 hover:bg-gray-200 disabled:opacity-50"
            >
                Next
            </button>
            </li>
        </ul>
        </nav>
    );
};

export default Pagination;
