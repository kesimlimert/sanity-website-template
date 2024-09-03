# Agency Landing Page

This project is an agency landing page built with Next.js and Sanity, designed to provide a dynamic and easily manageable content experience for agencies. The purpose of using Sanity as the CMS is to enable dynamic content management for various sections of the website, including headers, static pages, and services.

## Features

- **Dynamic Content Management**: Leverage Sanity CMS to update content across various sections without code changes.
- **Dynamic Routing**: Services are dynamically routed, allowing each service to have its own dedicated page.
- **Static Pages**: Easily manage the content of static pages such as About Us, Home, Contact Us, FAQ, Testimonials, and Benefits.

## Pages

1. **Home Page**: A welcoming landing page with dynamic content.
2. **About Us Page**: A page describing the agency, its mission, and team, all managed dynamically through Sanity.
3. **Contact Us Page**: A page with contact information and a form for inquiries.
4. **FAQ Page**: A frequently asked questions page, where questions and answers can be managed through Sanity.
5. **Testimonials Page**: A page showcasing client testimonials, dynamically sourced from Sanity.
6. **Benefits Page**: A page detailing the benefits of working with the agency.
7. **Services**: Each service has its own dedicated page, dynamically routed using Next.js.

## Getting Started
To run project successfully on local follow steps below.

### Add .env.local
Add file named `.env.local` on root level of the project.

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=SANITY_PROJECT_ID
NEXT_PUBLIC_SANITY_DATASET="production"
```

### Running project 
```bash
npm install
npm run dev
```

### Open Sanity Studio
Project will be run on **localhost:3000**. To open studio navigate to **/studio**.
