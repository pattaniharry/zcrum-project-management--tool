import React from "react";
import { getOrganization } from "@/actions/organization";
import OrgSwitcher from "@/components/org-switcher";
import ProjectList from "./_components/project-list";
import UserIssues from "./_components/user-issues";

const Page = async ({ params }) => {
  const { orgId } = await params;

  const organization = await getOrganization(orgId);

  if (!organization) {
    return (
      <div className="text-4xl font-extrabold w-screen pt-96 grid place-items-center">
        Organization not found
      </div>
    );
  } else {
    return (
      <div className="container mx-auto mt-5">
        <div className="mb-4 flex flexpcol sm:flex-row items-start justify-between">
          <h1 className="text-5xl font-bold gradient-title pb-2">
            {organization.name}'s Projects
          </h1>

          <OrgSwitcher />
        </div>
        <div className="mb-4">
          {" "}
          <ProjectList orgId={organization.id} />{" "}
        </div>

        <div className="mt-8">
          <UserIssues userId={userId} />
        </div>
      </div>
    );
  }
};

export default Page;
