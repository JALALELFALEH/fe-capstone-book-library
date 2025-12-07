const LoadingSpinner = () => {
    return (
        <div className="flex flex-col items-center justify-center py-12">
        {/* Main spinner */}
        <div className="relative">
            {/* Outer ring */}
            <div className="w-16 h-16 border-4 border-blue-100 rounded-full"></div>
            {/* Animated segment */}
            <div className="absolute top-0 left-0 w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
        
        {/* Loading text with fade animation */}
        <p className="mt-4 text-gray-600 font-medium animate-pulse">
            Loading books...
        </p>
        
        {/* Optional subtle dots animation */}
        <div className="flex space-x-1 mt-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
        </div>
    );
};

export default LoadingSpinner;