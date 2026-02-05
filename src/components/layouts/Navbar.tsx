import { useId } from "react";
import { SearchIcon } from "lucide-react";

import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ModeToggle } from "@/components/DarkMode/mode-toggle";

import { Link } from "react-router-dom";

const navigationLinks = [
  { to: "/", label: "Home" },
  { to: "/all-products", label: "Products" },
  { to: "/categories", label: "Categories" },
  { to: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const id = useId();

  return (
    <header className="my-container sticky top-2 z-50 border border-gray-200 bg-white backdrop-blur-lg transition-all duration-300 dark:border-[#262E40] dark:bg-[#262E40] rounded-xl shadow-xl">
      <div className="flex h-16 items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex flex-1 items-center gap-2">
          {/* Mobile menu */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 md:hidden"
                variant="ghost"
                size="icon"
              >
                {/* Icon */}
                <svg
                  className="pointer-events-none"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path
                    d="M4 12L20 12"
                    className="origin-center -translate-y-[7px] transition-all"
                  />
                  <path d="M4 12H20" className="origin-center transition-all" />
                  <path
                    d="M4 12H20"
                    className="origin-center translate-y-[7px] transition-all"
                  />
                </svg>
              </Button>
            </PopoverTrigger>

            <PopoverContent align="start" className="w-36 p-1 md:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                  {/* Mobile Nav */}
                  {navigationLinks.map((link, index) => (
                    <NavigationMenuItem key={index} className="w-full">
                      <NavigationMenuLink asChild className="py-1.5">
                        <Link to={link.to}>{link.label}</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}

                  <NavigationMenuItem className="w-full">
                    <div
                      role="separator"
                      className="-mx-1 my-1 h-px bg-border"
                    ></div>
                  </NavigationMenuItem>

                  <NavigationMenuItem className="w-full">
                    <NavigationMenuLink asChild className="py-1.5">
                      <Link to="/signin">Sign In</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem className="w-full">
                    <Button
                      asChild
                      size="sm"
                      className="mt-0.5 w-full text-left text-sm"
                    >
                      <Link to="/cart">
                        Cart{" "}
                        <span className="text-xs text-primary-foreground/60">
                          2
                        </span>
                      </Link>
                    </Button>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>

          {/* Logo & Main Nav */}
          <div className="flex flex-1 items-center gap-6 max-md:justify-between">
            {/* Logo */}
            <Link to="/" className="text-primary hover:text-primary/90">
              <Logo />
            </Link>

            {/* Desktop Navigation */}
            <NavigationMenu className="max-md:hidden">
              <NavigationMenuList className="gap-2">
                {navigationLinks.map((link, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      asChild
                      className="py-1.5 font-medium text-muted-foreground hover:text-primary"
                    >
                      <Link to={link.to}>{link.label}</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Search */}
            <div className="relative">
              <Input
                id={id}
                className="peer h-8 ps-8 pe-2 lg:w-150 md:w-80 sm:w-90 max-w-100"
                placeholder="Search..."
                type="search"
              />
              <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-2 text-muted-foreground/80">
                <SearchIcon size={16} />
              </div>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2 max-md:hidden">
          <Button asChild variant="ghost" size="sm">
            <Link to="/signin">Sign In</Link>
          </Button>

          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
