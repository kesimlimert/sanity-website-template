import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import { IconPhone } from "@tabler/icons-react";
import { IconMail } from "@tabler/icons-react";
import { IconBrandLinkedin } from "@tabler/icons-react";
import { IconBrandYoutube } from "@tabler/icons-react";
import { IconBrandInstagram } from "@tabler/icons-react";
import { IconBrandX } from "@tabler/icons-react";
import { IconBrandFacebook } from "@tabler/icons-react";
import { IconHome } from '@tabler/icons-react';

type SocialMediaItem = {
  url: string;
  media: string;
  _key: string;
};

type ImageAsset = {
  _ref: string;
  _type: "reference";
};

type Image = {
  _type: "image";
  alt?: string;
  asset: ImageAsset;
};

type Settings = {
  openGraphImage: {
    asset: ImageAsset;
    _type: "image";
  };
  _id: string;
  logoalt: Image;
  email: string;
  phone: string;
  address: string;
  logo: Image;
  _rev: string;
  _type: "settings";
  url: string;
  social: SocialMediaItem[];
  _createdAt: string;
  copyright: string;
  keywords: string[];
  description: string;
  _updatedAt: string;
  title: string;
};

type NavigationItem = {
  _type: string;
  title: string;
  slug: string;
};

type FooterData = {
  title: string;
  navigation: NavigationItem[];
  displaySocialMedia: boolean;
};

type Props = {
  settings: Settings;
  footer: FooterData;
};

export function Footer({ settings, footer }: Props) {
  const socialMediaIcon = settings?.social.map((social) => {
    switch (social.media) {
      case "linkedin":
        return <IconBrandLinkedin stroke={2} />;
      case "youtube":
        return <IconBrandYoutube stroke={2} />;
      case "instagram":
        return <IconBrandInstagram stroke={2} />;
      case "twitter":
        return <IconBrandX stroke={2} />;
      case "facebook":
        return <IconBrandFacebook stroke={2} />;
      default:
        return null;
    }
  });
  return (
    <>
      {footer && settings && (
        <div className="max-w-6xl w-full mx-auto px-8 rounded-t-xl text-white bg-gradient-to-tr pt-10 from-violet-600 via-violet-600 to-indigo-600">
          <div className="flex items-center gap-4 flex-col">
            <div className="flex gap-2 items-center">
              <Image
                src={urlForImage(settings.logo)?.src || ""}
                alt={urlForImage(settings.logo)?.alt || ""}
                width={70}
                height={100}
              />
              <p className="text-xl font-bold">{settings.title}</p>
            </div>
            <p className="text-sm">{settings.description}</p>
            <div className="flex gap-2 items-center">
              <div className="flex gap-1 items-center">
                <IconMail stroke={2} />
                <p className="text-sm hover:underline">
                  <Link href={`mailto:${settings.email}`}>
                    {settings.email}
                  </Link>
                </p>
              </div>
              <div className="flex gap-1 items-center">
                <IconPhone stroke={2} />
                <p className="text-sm hover:underline">
                  <Link href={`tel:${settings.phone}`}>{settings.phone}</Link>
                </p>
              </div>
              <div className="flex gap-1 items-center">
                <IconHome stroke={2} />
                <div className="text-sm hover:underline">
                  <p>{settings.address}</p>
                </div>
              </div>
            </div>
            <div className="w-full flex items-center py-4 justify-center">
              <div className="w-full border-t border-white"></div>
              <div className="flex gap-4 mx-4">
                {settings.social.map((social, index) => (
                  <Link
                    key={social._key}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {socialMediaIcon[index]}
                  </Link>
                ))}
              </div>
              <div className="w-full border-t border-white"></div>
            </div>
            <div className="flex gap-4">
              {footer.navigation.map((item, index) => (
                <Link className="hover:underline" key={index} href={item.slug}>
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
		  <p className="text-sm pb-2 pt-4 text-center">{settings.copyright}</p>
        </div>
      )}
    </>
  );
}
