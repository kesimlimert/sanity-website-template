import { getSettings, getAllPostsServicesMenu, getNavbarMenu } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Params from "next/router";
import { Header } from "@/components/Header";

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
  
  return (
    <>
      <Header logo={settings.logo} servicesMenu={servicesMenu} navbarMenu={navbarMenu}  />

      <div>{children}</div>

      {/* <Footer {...settings} /> */}
    </>
  );
}
