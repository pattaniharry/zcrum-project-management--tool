"use client";

import React, { useState } from "react";
import SprintManger from "./sprint-manger";
const SprintBoard = ({ sprints, projectId, orgId }) => {
  const [currentSprint, setCurrentSprint] = useState(
    sprints.find((spr) => spr.status == "ACTIVE") || sprints[0]
  );

  return (
    <div>
      {/* Sprint Manger */}
      <SprintManger
        sprint={currentSprint}
        setSprint={setCurrentSprint}
        sprints={sprints}
        projectId={projectId}
      />

      {/* Kanban Board */}
    </div>
  );
};

export default SprintBoard;
