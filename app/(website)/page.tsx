// app/page.tsx
import { BlockRenderer } from "@/components/BlockRenderer";
import { getHomepage } from "@/sanity/lib/client";

export default async function Page() {
  const homePage = await getHomepage();
  const content = homePage?.content;

  return (
    <div>
      <BlockRenderer content={content} />
    </div>
  );
}
