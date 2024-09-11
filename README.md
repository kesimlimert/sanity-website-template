# Sanity Landing Page Template

This project is an agency landing page built with Next.js and Sanity, designed to provide a dynamic and easily manageable content experience for agencies. The purpose of using Sanity as the CMS is to enable dynamic content management for various sections of the website, including headers, static pages, and services.

## Features

- **Dynamic Content Management**: Leverage Sanity CMS to update content across various sections without code changes.
- **Dynamic Routing**: Pages and services are dynamically routed, allowing each service to have its own dedicated page.
- **Static Pages**: Easily manage the content of static pages such as About Us, Contact Us.

## Single Documents

1. **Home Page**: Occurs with created Sanity components.
2. **About Us Page**: Contains a paragraph and authors.
3. **Contact Us Page**:To display contact info filled via Sanity.
4. **Navigation**: Organizing navbar of website
5. **Site Settings**: Able to user add seo settings and website icon

## Dynamic Pages

1. **Services**: To display added multiple post as service.
2. **Page**: Dynamic page can be multiple, occurs with Sanity components

# Components

1. **BrandsList**: To display brands(images) in flex
2. **CardList**: Flex cards to give information to user
3. **Divider**: Adds page a divider with text, title and optional button to navigate in webpage
4. **FaqList**: To list question and and answer section
5. **ImageFullWidth**: To display full width image on page
6. **ImageGallery**: To display desired image gallery collection in page
7. **PageTexts**: To display side by side image and text. Image postion, adding list and button optional.
8. **VideoReferences**: To add video source (youtube, vimeo... etc)
---
![screenshot1](https://res.cloudinary.com/dfatlyafz/image/upload/v1725792726/tefvl40gooh2isdpw4z0.png)

![screenshot1](https://res.cloudinary.com/dfatlyafz/image/upload/v1725792726/hafxpn3qwcpljisu6qu2.png)

---
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
