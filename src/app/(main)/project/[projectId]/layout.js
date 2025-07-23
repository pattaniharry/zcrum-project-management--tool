import React, { Suspense } from "react";
import { BarLoader } from "react-spinners";

const ProjectLayout = ({ children }) => {
  return (
    <div className="max-auto ">
      <Suspense fallback={<span>Loading projects</span>}>{children}</Suspense>
    </div>
  );
};

export default ProjectLayout;
