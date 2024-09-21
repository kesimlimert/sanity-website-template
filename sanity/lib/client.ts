import { apiVersion, dataset, projectId, useCdn } from "./config";
import {
  postquery,
  limitquery,
  paginatedquery,
  configQuery,
  singlequery,
  pathquery,
  allauthorsquery,
  authorsquery,
  postsbyauthorquery,
  postsbycatquery,
  catpathquery,
  catquery,
  getAll,
  servicesnavquery,
  navbarmenuquery,
  homepagequery,
  footerquery,
  pathcontactquery,
  pathaboutquery,
  pathpagequery,
  contentbyslugquery,
} from "./groq";
import { createClient } from "next-sanity";

if (!projectId) {
  console.error(
    "The Sanity Project ID is not set. Check your environment variables."
  );
}

/**
 * Checks if it's safe to create a client instance, as `@sanity/client` will throw an error if `projectId` is false
 */
const client = projectId
  ? createClient({ projectId, dataset, apiVersion, useCdn })
  : null;

export const fetcher = async ([query, params]: [string, any]) => {
  return client ? client.fetch(query, params) : [];
};

(async () => {
  if (client) {
    const data = await client.fetch(getAll);
    if (!data || !data.length) {
      console.error(
        "Sanity returns empty array. Are you sure the dataset is public?"
      );
    }
  }
})();

export async function getAllPosts() {
  if (client) {
    return (await client.fetch(postquery)) || [];
  }
  return [];
}

export async function getSettings() {
  if (client) {
    return (await client.fetch(configQuery)) || [];
  }
  return [];
}

export async function getPostBySlug(slug: string) {
  if (client) {
    return (await client.fetch(singlequery, { slug })) || {};
  }
  return {};
}

export async function getAllPostsSlugs() {
  if (client) {
    const slugs: string[] = (await client.fetch(pathquery)) || [];
    return slugs.map(slug => ({ slug }));
  }
  return [];
}

// Author
export async function getAllAuthorsSlugs() {
  if (client) {
    const slugs: string[] = (await client.fetch(authorsquery)) || [];
    return slugs.map(slug => ({ author: slug }));
  }
  return [];
}

export async function getAuthorPostsBySlug(slug: string) {
  if (client) {
    return (await client.fetch(postsbyauthorquery, { slug })) || {};
  }
  return {};
}

export async function getAllAuthors() {
  if (client) {
    return (await client.fetch(allauthorsquery)) || [];
  }
  return [];
}

// Navbar

export async function getAllPostsServicesMenu() {
  if (client) {
    return (await client.fetch(servicesnavquery)) || [];
  }
  return [];
}

export async function getNavbarMenu() {
  if (client) {
    return (await client.fetch(navbarmenuquery)) || [];
  }
  return [];
}

// Homepage

export async function getHomepage() {
  if (client) {
    return (await client.fetch(homepagequery)) || {};
  }
  return {};
}

// Footer

export async function getFooter() {
  if (client) {
    return (await client.fetch(footerquery)) || {};
  }
  return {};
}

// Category

export async function getAllCategories() {
  if (client) {
    const slugs: string[] = (await client.fetch(catpathquery)) || [];
    return slugs.map(slug => ({ category: slug }));
  }
  return [];
}

export async function getPostsByCategory(slug: string) {
  if (client) {
    return (await client.fetch(postsbycatquery, { slug })) || {};
  }
  return {};
}

export async function getTopCategories() {
  if (client) {
    return (await client.fetch(catquery)) || [];
  }
  return [];
}

export async function getPaginatedPosts({ limit, pageIndex }: { limit: number; pageIndex?: number }) {
  if (client) {
    return (
      (await client.fetch(paginatedquery, {
        pageIndex: pageIndex,
        limit: limit
      })) || []
    );
  }
  return [];
}

export async function getAboutUsSlug() {
  if (client) {
    const slug = await client.fetch(pathaboutquery);
    return slug ? { slug } : null;
  }
  return null;
}

export async function getContactUsSlug() {
  if (client) {
    const slug = await client.fetch(pathcontactquery);
    return slug ? { slug } : null;
  }
  return null;
}

export async function getAllPagesSlugs() {
  if (client) {
    const slugs: string[] = (await client.fetch(pathpagequery)) || [];
    return slugs.map(slug => ({ slug }));
  }
  return [];
}

export async function getAllSlugs() {
  if (client) {
    const posts = await getAllPostsSlugs();
    const pages = await getAllPagesSlugs();
    const about = await getAboutUsSlug();
    const contact = await getContactUsSlug();
    
    return [
      ...posts.map(({ slug }) => ({ _type: 'post', slug })),
      ...pages.map(({ slug }) => ({ _type: 'page', slug })),
      ...(about ? [{ _type: 'aboutUs', slug: about.slug }] : []),
      ...(contact ? [{ _type: 'contactUs', slug: contact.slug }] : [])
    ];
  }
  return [];
}

export async function getContentBySlug(slug: string) {
  const params = { slug };
  const result = await client?.fetch(contentbyslugquery, params);
  return result;
}
