import { ReactNode } from "react";

type AnnouncementProps = {
  title: string;
  description: string;
  action?: ReactNode;
};

const Announcement = ({ title, description, action }: AnnouncementProps) => {
  return (
    <div className="bg-cyan-800">
      <div className="container-sm py-3 ">
        <span className="font-[600] text-white">{title}</span>
        <span className="mx-2 font-[600] text-white">-</span>
        <span className="text-[14px] text-white">{description}</span>
        <span>{action}</span>
      </div>
    </div>
  );
};

export default Announcement;
