import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => (
  <div className="mx-auto max-w-screen-xl px-4 w-full">{children}</div>
);

export default Container;
