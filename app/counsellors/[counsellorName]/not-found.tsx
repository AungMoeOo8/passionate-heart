import { Metadata } from "next";

export const Head: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className=" h-[460px] grid place-content-center">
      <div className="">
        <div className="font-semibold text-6xl text-center">404</div>
        <div className="font-medium text-xl text-center">Page Not Found!</div>
      </div>
    </div>
  );
}
