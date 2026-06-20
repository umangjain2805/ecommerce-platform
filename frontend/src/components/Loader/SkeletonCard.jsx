function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden animate-pulse">

      {/* Fake Image */}
      <div className="w-full h-64 bg-gray-300"></div>

      {/* Fake Text */}
      <div className="p-4 space-y-3">

        <div className="h-6 bg-gray-300 rounded w-3/4"></div>

        <div className="h-5 bg-gray-300 rounded w-1/3"></div>

        <div className="h-10 bg-gray-300 rounded"></div>

      </div>

    </div>
  );
}

export default SkeletonCard;