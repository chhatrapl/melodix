

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 to-slate-800 px-4">
      <div className="text-center max-w-md w-full">
        
        {/* 404 */}
        <h1 className="text-7xl sm:text-8xl font-extrabold text-indigo-500">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-white">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-3 text-sm sm:text-base text-slate-400">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

     

      </div>
    </div>
  );
};

export default NotFound;
