import React from "react";

const page = ({ params }) => {
  const { orgId } = params;
  return <div>inside organization {orgId} </div>;
};

export default page;
