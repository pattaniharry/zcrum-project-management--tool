"use client";

import { useUser, useOrganization } from "@clerk/nextjs";
import { BarLoader } from "react-spinners";
import React from "react";

const UserLoading = () => {
  const { isLoaded } = useOrganization();
  const { isLoaded: isUserLoaded } = useUser();

  if (!isLoaded || !isUserLoaded) {
    return <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />;
  } else {
    <></>;
  }
};

export default UserLoading;
