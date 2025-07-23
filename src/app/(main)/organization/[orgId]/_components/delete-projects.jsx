"use client";

import React, { useEffect } from "react";
import { useOrganization } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import useFetch from "@/hooks/use-fetch";
import { deleteProject } from "@/actions/projects";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
const DeleteProject = ({ projectId }) => {
  const { membership } = useOrganization();
  const router = useRouter();

  const {
    data: deleted,
    loading: isDeleting,
    error,
    fn: deleteProjectFn,
  } = useFetch(deleteProject);

  const handleDelete = async () => {
    if (
      window.confirm(
        "Are you sure you want to delete this project? This action cannot be undone."
      )
    ) {
      await deleteProjectFn(projectId);
    }
  };

  useEffect(() => {
    if (deleted) {
      router.refresh();
      toast.error("Project deleted successfully");
    }
  }, [deleted]);

  const isAdmin = membership?.role === "org:admin";

  if (!isAdmin) {
    return <p>You do not have permission to delete this project.</p>;
  }

  return (
    <div>
      <Button
        variant="ghost"
        size="sm"
        className={isDeleting ? "animate-pulse" : ""}
        onClick={handleDelete}
        disabled={isDeleting}
      >
        <Trash2 className="h-4 w-4 text-red-500" />
      </Button>
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  );
};

export default DeleteProject;
