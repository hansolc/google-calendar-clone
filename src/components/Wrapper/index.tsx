import { type PropsWithChildren } from "react";

const Wrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className="px-4 py-2 h-screen flex flex-col bg-[#f8fafd]">
      {children}
    </div>
  );
};

export default Wrapper;
