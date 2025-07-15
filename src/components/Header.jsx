import React from "react";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { PenBox } from "lucide-react";
import UserMenu from "./ui/user-menu";
import { checkUser } from "./lib/checkUser";

const header = async () => {
  await checkUser();
  return (
    <header className="container">
      <nav className="py-6 px-4 flex items-center justify-between">
        <Link href={"/"}>
          <Image
            src={"/logo2.png"}
            alt="ZCRUM logo"
            width={200}
            height={56}
            className="h-10 w-auto object-contain"
          />
        </Link>

        <div className="flex items-center gap-4">
          <Link
            href={"/project/create"}
            className="text-[#6c47ff] font-semibold"
          >
            <Button
              variant={"destructive"}
              className={"flex items-center gap-2"}
            >
              <PenBox size={18} />
              <span>Create Project </span>
            </Button>
          </Link>
          <SignedOut>
            <SignInButton mode="redirect" forceRedirectUrl="/onboarding">
              <Button variant={"outline"}> Login</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserMenu />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default header;
