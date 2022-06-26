import { SearchIcon } from "@heroicons/react/outline";
import type { FC } from "react";

const WidgetSearch: FC = () => {
  return (
    <div
      data-testId="search"
      className="flex items-center space-x-2 bg-gray-100 
      p-3 mt-2 rounded-full"
    >
      <SearchIcon data-testId="icon" className="h-5 w-5 text-gray-400" />
      <input
        data-testId="input"
        type="text"
        placeholder="Search Twitter"
        className="bg-transparent flex-1 outline-none"
      />
    </div>
  );
};

export default WidgetSearch;
