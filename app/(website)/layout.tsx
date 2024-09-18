import { getSettings, getAllPostsServicesMenu, getNavbarMenu, getFooter } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Params from "next/router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

async function sharedMetaData(params: any) {
  const settings = await getSettings();
  return {
    title: settings?.title,
    description: settings?.description,
    keywords: settings?.keywords,
    canonical: settings?.url,
    openGraph: {
      images: [
        {
          url: urlForImage(settings?.openGraphImage)?.src,
          width: 800,
          height: 600,
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: [
        { url: urlForImage(settings?.logo)?.src},
        { url: urlForImage(settings?.logo)?.src, width: 16, height: 16 },
        { url: urlForImage(settings?.logo)?.src, width: 32, height: 32 },
      ],
    },
  };
}

export async function generateMetadata({ params }: { params: typeof Params }) {
  return await sharedMetaData(params);
}

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const settings = await getSettings();
  const servicesMenu = await getAllPostsServicesMenu();
  const navbarMenu = await getNavbarMenu();
  const footer = await getFooter();
  return (
    <>
      <Header logo={settings.logo} servicesMenu={servicesMenu} navbarMenu={navbarMenu}  />

      <div>{children}</div>

      <Footer settings={settings} footer={footer} />
    </>
  );
}
