/**
 * SEO Configuration and Helpers
 * Update the siteUrl constant with your actual domain
 */

export const siteConfig = {
  siteUrl: 'https://kevinguadalupevega.com',
  siteName: 'Kevzo8 - Kevin Vega Portfolio',
  title: 'Kevzo8 | Kevin Vega - Software Engineer, Educator, Content Creator',
  description: 'Portfolio of Kevin Vega (Kevzo8) - Filipino Software Engineer, University Instructor, VTuber, and Variety Streamer.',
  author: 'Kevin Vega',
  twitterHandle: '@kevzo8',
  socialLinks: {
    facebook: 'https://www.facebook.com/cmsckvz',
    twitter: 'https://twitter.com/kevzo8',
    youtube: 'https://www.youtube.com/@kevzo8',
    twitch: 'https://www.twitch.tv/kevzo8',
    github: 'https://github.com/kevzo8',
  },
  skills: [
    'Full Stack Web Development',
    'React',
    'TypeScript',
    'Next.js',
    'Node.js',
    'Software Engineering',
    'Web Technologies',
    'Programming Education',
  ],
}

export function generateMetadata(page: {
  title?: string
  description?: string
  ogImage?: string
}) {
  return {
    title: page.title || siteConfig.title,
    description: page.description || siteConfig.description,
    openGraph: {
      title: page.title || siteConfig.title,
      description: page.description || siteConfig.description,
      image: page.ogImage || `${siteConfig.siteUrl}/og-image.png`,
    },
  }
}

export function getStructuredData(type: 'person' | 'organization') {
  if (type === 'person') {
    return {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: siteConfig.author,
      url: siteConfig.siteUrl,
      jobTitle: 'Software Engineer',
      sameAs: Object.values(siteConfig.socialLinks),
    }
  }
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.siteName,
    url: siteConfig.siteUrl,
  }
}
