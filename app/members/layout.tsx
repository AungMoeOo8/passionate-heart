import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container-sm mt-10 mb-10 min-h-[460px]">
      {children}
    </div>
  );
}
