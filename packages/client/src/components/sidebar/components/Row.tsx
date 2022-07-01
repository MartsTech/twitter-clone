import type { FC, SVGProps } from "react";

interface Props {
  title: string;
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  onClick?: () => void;
}

const SidebarRow: FC<Props> = ({ title, Icon, onClick, ...props }) => {
  return (
    <div
      data-testid="row"
      {...props}
      onClick={onClick}
      className="group flex min-w-[80%] cursor-pointer items-center 
      space-x-2 rounded-full px-4 py-3 transition-all duration-200
      ease-in-out hover:bg-gray-100"
    >
      <Icon data-testid="icon" className="h-6 w-6" />
      <p
        data-testid="title"
        className="hidden text-base font-light 
        group-hover:text-primary md:inline-flex lg:text-xl"
      >
        {title}
      </p>
    </div>
  );
};

export default SidebarRow;
