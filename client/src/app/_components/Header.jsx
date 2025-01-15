"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  LayoutGridIcon,
  ListOrdered,
  LogOut,
  Search,
  ShoppingBag,
  User,
} from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import GlobalApi from "@/app/_utils/GlobalApi";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const router = useRouter();

  useEffect(() => {
    getCategoriesList();
    const jwt = sessionStorage.getItem("jwt");
    setIsLoggedIn(jwt);
  }, []);

  const getCategoriesList = async () => {
    const response = await GlobalApi.getCategories();
    const data = response?.data?.data;
    setCategories(data);
  };

  const handleLogout = () => {
    sessionStorage.clear();
    localStorage.clear()
    router.push("/sign-in");
  };

  return (
    <div className="p-5 shadow-sm flex justify-between items-center">
      <div className="flex items-center gap-8">
        <Link href={"/"} className="text-xl font-bold text-primary">
          Grocery Store
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="md:flex gap-2 items-center border rounded-full p-2 px-10 bg-slate-200 hidden cursor-pointer">
              <LayoutGridIcon /> Category
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Browse Category</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {categories.map((category) => (
              <DropdownMenuItem key={category.id}>
                <Link
                  href={`/products-category/${category?.name?.replaceAll(
                    " ",
                    "_"
                  )}`}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <Image
                    src={
                      process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
                      category.icon[0].url
                    }
                    width={22}
                    height={22}
                    objectFit="cover"
                    alt={category.name}
                  />
                  {category.name}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="hidden md:flex gap-3 items-center border rounded-full p-2">
          <Search />
          <input placeholder="Search" className="outline-none" />
        </div>
      </div>
      <div className="flex gap-5 items-center">
        {isLoggedIn && (
          <Link href={"/cart"}>
            <Button variant="outline" size="icon">
              <ShoppingBag />
            </Button>
          </Link>
        )}
        {isLoggedIn ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full">
                <User />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
              <DropdownMenuItem asChild>
                <button className="cursor-pointer w-full">
                  <User />
                  <span>Profile</span>
                </button>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <button className="cursor-pointer w-full">
                  <ListOrdered />
                  <span>My order</span>
                </button>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={handleLogout}
                className="cursor-pointer"
              >
                <LogOut />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link href={"/sign-in"}>
            <Button>Login</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
