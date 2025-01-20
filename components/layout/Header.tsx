"use client";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import { useState, useEffect } from "react";
import { IconChevronDown, IconMenu2, IconX } from "@tabler/icons-react";
import { useRouter, usePathname } from "next/navigation";
import { useNavbarStore } from "@/lib/store";

type Props = {
  logo?: string;
  servicesMenu: any;
  navbarMenu: any;
};

export function Header({ logo, servicesMenu, navbarMenu }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const navbarItems = navbarMenu.pageReferences;
  const { activeItem, setActiveItem } = useNavbarStore();
  
  // Reset activeItem when on homepage
  useEffect(() => {
    if (pathname === '/') {
      setActiveItem('');
    }
  }, [pathname, setActiveItem]);

  const { src, width, height, alt } = urlForImage(logo) ?? {
    src: "",
    width: 0,
    height: 0,
    alt: "",
  };

  const handleNavigation = (slug: string) => {
    router.push("/" + slug);
    setIsMenuOpen(false);
  };

  return (
    <div className="relative bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              {logo && (
                <Image
                  src={src}
                  width={width}
                  height={height}
                  alt={alt}
                  priority={true}
                  className="w-20 h-auto"
                />
              )}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            {!navbarMenu?.hideDropdown && (
              <div className="relative">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center space-x-1 text-[#A20100] hover:text-[#A20100]/80"
                >
                  <span>{navbarMenu?.title}</span>
                  <IconChevronDown size={20} className="text-[#A20100]" />
                </button>
                {isServicesOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    {servicesMenu?.map((item: any, index: number) => (
                      <Link
                        key={index}
                        href={`/${item.slug}`}
                        className="block px-4 py-2 text-sm text-[#A20100] hover:bg-gray-100"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}
            {navbarItems?.map((item: any, index: number) => (
              <Link
                key={index}
                href={`/${item.slug}`}
                className={`text-[#A20100] hover:text-[#A20100]/80 ${
                  activeItem === item.slug ? "font-semibold" : ""
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#A20100] hover:text-[#A20100]/80 hover:bg-gray-100"
            >
              {isMenuOpen ? (
                <IconX className="h-6 w-6" />
              ) : (
                <IconMenu2 className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {!navbarMenu?.hideDropdown && (
              <>
                <div className="px-3 py-2 font-semibold text-[#A20100]">{navbarMenu?.title}</div>
                {servicesMenu?.map((item: any, index: number) => (
                  <Link
                    key={index}
                    href={`/${item.slug}`}
                    className="block px-3 py-2 text-base font-medium text-[#A20100] hover:text-[#A20100]/80 hover:bg-gray-50 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </>
            )}
            {navbarItems?.map((item: any, index: number) => (
              <Link
                key={index}
                href={`/${item.slug}`}
                className={`block px-3 py-2 text-base font-medium text-[#A20100] hover:text-[#A20100]/80 hover:bg-gray-50 rounded-md ${
                  activeItem === item.slug ? "bg-gray-50" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
