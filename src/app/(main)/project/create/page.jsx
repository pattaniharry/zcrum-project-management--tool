"use client";
import OrgSwitcher from "@/components/org-switcher";
import { useOrganization, useUser } from "@clerk/nextjs";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { set } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { projectSchema } from "@/components/lib/schema/validators";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
const CreateProjectPage = () => {
  const { isLoaded: isOrgLoaded, membership } = useOrganization();
  const { isLoaded: isUserLoaded, user } = useUser();
  const [isAdmin, setIsAdmin] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(projectSchema),
  });

  useEffect(() => {
    if (isOrgLoaded && isUserLoaded && membership) {
      setIsAdmin(membership.role === "org:admin");
    }
  }, [isOrgLoaded, isUserLoaded, membership]);

  if (!isOrgLoaded || !isUserLoaded) {
    return null;
  }

  const onsubmit = async () => {};

  if (!isAdmin) {
    return (
      <div className="text-center">
        <h1 className="text-2xl font-bold">Access Denied</h1>
        <p>You do not have permission to create a project.</p>
        <OrgSwitcher />
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10 ">
      <h1 className="text-6xl text-center font-bold mb-8 gradient-title">
        Create New Project{" "}
      </h1>
      <form
        action=""
        className=" flex flex-col gap-4"
        onSubmit={handleSubmit(onsubmit)}
      >
        <div>
          <Input
            id="name"
            className="bg-slate-950"
            placeholder="Project Name"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <Input
            id="key"
            className="bg-slate-950"
            placeholder="Project key (Ex: GGL)"
            {...register("key")}
          />
          {errors.key && (
            <p className="text-red-500 text-sm mt-1">{errors.key.message}</p>
          )}
        </div>
        <div>
          <Textarea
            id="description"
            className="bg-slate-950 h-28"
            placeholder="Project Description"
            {...register("description")}
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>
        <Button
          type="submit"
          size="lg"
          className="bg-blue-500 text-white hover:text-blue-500"
        >
          Create Project
        </Button>
      </form>
    </div>
  );
};

export default CreateProjectPage;
