import Container from "@/components/ui/container";
import Link from "next/link";
import MainNav from "@/components/main-nav";
import NavbarActions from "@/components/navbar-actions";
import React from "react";
import getCategories from "@/actions/get-categories";

export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();
  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex items-center h-16">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">Store</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
