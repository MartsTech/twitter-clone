import { SearchIcon } from "@heroicons/react/outline";
import type { FC } from "react";

const WidgetSearch: FC = () => {
  return (
    <div
      data-testId="search"
      className="mt-2 flex items-center space-x-2 rounded-full
      bg-gray-100 p-3"
    >
      <SearchIcon data-testId="icon" className="h-5 w-5 text-gray-400" />
      <input
        data-testId="input"
        type="text"
        placeholder="Search Twitter"
        className="flex-1 bg-transparent outline-none"
      />
    </div>
  );
};

export default WidgetSearch;
