import type { FC, SVGProps } from "react";

interface Props {
  title: string;
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}

const SidebarRow: FC<Props> = ({ title, Icon, ...props }) => {
  return (
    <div
      {...props}
      className="px-4 py-3 group flex items-center min-w-[80%] 
      space-x-2 rounded-full hover:bg-gray-100 cursor-pointer 
      transition-all duration-200 ease-in-out"
    >
      <Icon data-testid="icon" className="h-6 w-6" />
      <p
        data-testid="title"
        className="group-hover:text-primary hidden md:inline-flex
        text-base font-light lg:text-xl"
      >
        {title}
      </p>
    </div>
  );
};

export default SidebarRow;
