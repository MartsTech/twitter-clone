import type { FC, SVGProps } from "react";

interface Props {
  title: string;
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}

const SidebarRow: FC<Props> = ({ title, Icon }) => {
  return (
    <div
      className="group flex items-center max-w-fit space-x-2 
      px-4 py-3 rounded-full hover:bg-gray-100 cursor-pointer 
      transition-all duration-200 ease-in-out"
    >
      <Icon className="h-6 w-6" />
      <p className="group-hover:text-primary">{title}</p>
    </div>
  );
};

export default SidebarRow;
