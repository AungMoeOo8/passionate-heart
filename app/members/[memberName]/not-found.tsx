import { Metadata } from "next";

export const Head: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="h-[calc(100dvh-397.75px)] grid place-content-center">
      <div className="font-bold text-6xl text-center text-primary">404</div>
      <div className="font-bold text-4xl">Page Not Found!</div>
    </div>
  );
}
