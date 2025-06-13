import React, { type PropsWithChildren } from "react";

const Wrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className="px-4 py-2 h-screen bg-amber-50 flex flex-col">
      {children}
    </div>
  );
};

export default Wrapper;
