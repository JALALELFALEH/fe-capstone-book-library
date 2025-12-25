const ErrorMessage = ({ message = 'An error occurred. Please try again.' }) => {
    return (
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg my-8 shadow-sm">
        <div className="flex items-center">
            {/* Error icon */}
            <div className="shrink-0">
            <svg className="h-8 w-8 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            </div>
            
            {/* Error content */}
            <div className="ml-4">
            <h3 className="text-lg font-medium text-red-800">Oops! Something went wrong</h3>
            <div className="mt-2 text-red-700">
                <p>{message}</p>
            </div>
            </div>
        </div>
        </div>
    );
};

export default ErrorMessage;