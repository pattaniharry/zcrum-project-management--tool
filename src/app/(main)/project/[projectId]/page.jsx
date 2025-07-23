import React from "react";
import { notFound } from "next/navigation";
import { getProject } from "@/actions/projects";
import SprintCreationForm from "../_components/create-sprint";

const page = async ({ params }) => {
  const { projectId } = params;
  const project = await getProject(projectId);
  if (!project) {
    notFound();
  }
  return (
    <div className="Container mx-auto">
      {/*sprint Creation */}
      <SprintCreationForm
        projectTitle={project.name}
        projectId={project.id}
        projectKey={project.key}
        sprintKey={project.sprints?.length + 1}
      />

      {/*sprint board */}
      {project.sprints.length > 0 ? (
        <></>
      ) : (
        <div>Create a Sprint from button above</div>
      )}
    </div>
  );
};

export default page;
