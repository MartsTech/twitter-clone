import { RefreshIcon } from "@heroicons/react/outline";

const Feed = () => {
  return (
    <section>
      <div className="flex items-center justify-between">
        <h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
        <RefreshIcon
          className="h-8 w-8 cursor-pointer text-primary 
          mr-5 mt-5 transition-all duration-500 ease-out
          hover:rotate-180 active:scale-125"
        />
      </div>
    </section>
  );
};

export default Feed;
