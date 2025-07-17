"use server";
import { db } from "@/components/lib/prisma";
import { auth, clerkClient } from "@clerk/nextjs/server";

export async function getOrganization(slug) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("User not authorized");
  }

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const organization = await (
    await clerkClient()
  ).organizations.getOrganization({
    slug,
  });

  if (!organization) {
    return null;
  }

  const { data: membership } = await (
    await clerkClient()
  ).organizations.getOrganizationMembershipList({
    organizationId: organization.id,
  });

  const userMembership = membership.find(
    (member) => member.publicUserData.userId === userId
  );

  if (!userMembership) {
    throw new Error("User is not a member of this organization");
  }

  return organization;
}
