const Shimmer = () => {
  return (
    <div>
      <div className="bg-gray-300 rounded-lg w-96 h-56"></div>
      <div className="flex">
        <div className="mt-4 bg-gray-200 rounded-full w-10 h-10"></div>
        <div className="mt-2">
          <div className="ml-2 bg-gray-200 rounded-sm w-64 h-6"></div>
          <div className="mt-2 ml-2 bg-gray-200 rounded-sm w-36 h-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
