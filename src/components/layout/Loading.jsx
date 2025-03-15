
export const Loading = () => {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-t-transparent border-blue-500 animate-spin"></div>
        </div>
        <span className="ml-4 text-lg font-semibold text-gray-700">Loading...</span>
      </div>
    );
  };
  
  export default Loading;
  