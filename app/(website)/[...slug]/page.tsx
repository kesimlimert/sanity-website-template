import { notFound } from 'next/navigation'
import { getAllSlugs, getContentBySlug } from '@/sanity/lib/client'
import { ServicesContent } from '@/components/pageContents/ServicesContent'
import { PageContent } from '@/components/pageContents/PageContent'
import { AboutUsContent } from '@/components/pageContents/AboutUsContent'
import { ContactUsContent } from '@/components/pageContents/ContactUsContent'

export default async function Page({ params }: { params: { slug: string[] } }) {
	const slug = params.slug.join('/')
	const content = await getContentBySlug(slug)
    
	if (!content) {
	  notFound()
	}
  
	switch (content._type) {
	  case 'post':
		return <ServicesContent content={content} />
	  case 'page':
		return <PageContent content={content} />
	  case 'aboutUs':
		return <AboutUsContent content={content} />
	  case 'contactUs':
		return <ContactUsContent content={content} />
	  default:
		notFound()
	}
  }
  