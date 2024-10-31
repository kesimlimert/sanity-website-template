"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import { useState } from "react";
import { IconChevronDown } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useNavbarStore } from "@/lib/store";
type Props = {
  logo?: string;
  servicesMenu: any;
  navbarMenu: any;
};

export function Header({ logo, servicesMenu, navbarMenu }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const navbarItems = navbarMenu.pageReferences;
  const { activeItem } = useNavbarStore();
  const { src, width, height, alt } = urlForImage(logo) ?? {
    src: "",
    width: 0,
    height: 0,
    alt: "",
  };

  const handleNavigation = (slug: string) => {
    router.push("/" + slug);
  };

  return (
    <Navbar
      isBordered
      onMenuOpenChange={setIsMenuOpen}
      isBlurred={false}
      shouldHideOnScroll
      maxWidth="lg"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="text-secondary"
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="center">
        <NavbarBrand>
          {logo && (
            <div className="w-full h-auto max-w-20">
              <Link href="/">
                <Image
                  src={src}
                  width={width}
                  height={height}
                  alt={alt}
                  priority={true}
                  sizes="(max-width: 640px) 100vw, 200px"
                />
              </Link>
            </div>
          )}
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarBrand>
          {logo && (
            <div className="w-full h-auto max-w-20">
              <Link href="/">
                <Image
                  src={src}
                  width={width}
                  height={height}
                  alt={alt}
                  priority={true}
                  sizes="(max-width: 640px) 100vw, 200px"
                />
              </Link>
            </div>
          )}
        </NavbarBrand>
        {!navbarMenu?.hideDropdown && (
          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                  endContent={<IconChevronDown stroke={2} />}
                  radius="sm"
                  variant="light"
                  color="secondary"
                >
                  <p className="text-medium text-secondary">{navbarMenu?.title}</p>
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              className="w-[340px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              {servicesMenu &&
                servicesMenu.map((item: any, index: number) => (
                  <DropdownItem
                    onClick={() => handleNavigation(item.slug)}
                    key={index}
                    color="secondary"
                    className="hover:text-white data-[hover=true]:text-white"
                  >
                    {item.title}
                  </DropdownItem>
                ))}
            </DropdownMenu>
          </Dropdown>
        )}
        {navbarMenu &&
          navbarItems.map((item: any, index: number) => (
            <NavbarItem key={index} isActive={activeItem === item.slug}>
              <Link color="secondary" href={"/" + item.slug}>
                {item.title}
              </Link>
            </NavbarItem>
          ))}
      </NavbarContent>
      <NavbarMenu>
        {servicesMenu?.map((item: any, index: number) => (
          <NavbarMenuItem key={index} isActive={activeItem === item.slug}>
            <Link
              className="w-full"
              color="secondary"
              href={"/" + item.slug}
              size="lg"
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
        {navbarMenu &&
          navbarItems.map((item: any, index: number) => (
            <NavbarMenuItem key={index} isActive={activeItem === item.slug}>
              <Link
                className="w-full"
                color="secondary"
                href={"/" + item.slug}
                size="lg"
              >
                {item.title}
              </Link>
            </NavbarMenuItem>
          ))}
      </NavbarMenu>
    </Navbar>
  );
}
