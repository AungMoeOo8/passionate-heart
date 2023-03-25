import Link from "next/link";
import { AnnouncementProps } from "../../types";

const Announcement = ({ title, description, action }: AnnouncementProps) => {
  return (
    <div className="bg-cyan-800">
      <div className="container-sm py-3 ">
        <Link href={"#"}>
          <p className="cursor-pointer hover:underline underline-offset-4 decoration-2 decoration-primary">
            <span className="font-[600] text-white">{title}</span>
            <span className="mx-2 font-[600] text-white">-</span>
            <span className="text-[14px] text-white">{description}</span>
            <span>{action}</span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Announcement;
