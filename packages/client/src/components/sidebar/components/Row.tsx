import type { FC, SVGProps } from "react";

interface Props {
  title: string;
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}

const SidebarRow: FC<Props> = ({ title, Icon, ...props }) => {
  return (
    <div
      {...props}
      className="group flex items-center max-w-fit space-x-2 
      px-4 py-3 rounded-full hover:bg-gray-100 cursor-pointer 
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
