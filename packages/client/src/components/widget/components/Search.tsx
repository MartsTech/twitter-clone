import { SearchIcon } from "@heroicons/react/outline";

const WidgetSearch = () => {
  return (
    <div
      className="flex items-center space-x-2 bg-gray-100 
      p-3 mt-2 rounded-full"
    >
      <SearchIcon className="h-5 w-5 text-gray-400" />
      <input
        type="text"
        placeholder="Search Twitter"
        className="bg-transparent flex-1 outline-none"
      />
    </div>
  );
};

export default WidgetSearch;
