"use server";

import { auth, clerkClient } from "@clerk/nextjs/server";
import { db } from "@/components/lib/prisma";

export async function createProject(data) {
  const { userId, orgId } = await auth();

  if (!userId) {
    throw new Error("User is not authenticated");
  }

  if (!orgId) {
    throw new Error("Organization ID is required");
  }

  const { data: membership } = await (
    await clerkClient()
  ).organizations.getOrganizationMembershipList({
    organizationId: orgId,
  });

  const userMembership = membership.find(
    (member) => member.publicUserData.userId === userId
  );

  if (!userMembership || userMembership.role !== "org:admin") {
    throw new Error("User does not have permission to create a project");
  }

  try {
    const project = await db.project.create({
      data: {
        name: data.name,
        key: data.key,
        description: data.description,
        organizationId: orgId,
      },
    });
    return project;
  } catch (error) {
    throw new Error("Failed to create project: " + error.message);
  }
}
