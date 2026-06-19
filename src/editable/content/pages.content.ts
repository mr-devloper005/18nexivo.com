import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'Media distribution, press visibility, and newsroom updates',
      description: 'Explore media distribution updates, press releases, partner announcements, and campaign coverage through a fast discovery experience.',
      openGraphTitle: 'Media distribution and press visibility',
      openGraphDescription: 'Discover distributed media, campaign updates, public announcements, and partner content.',
      keywords: ['media distribution', 'press release distribution', 'newsroom updates', 'campaign visibility'],
    },
    hero: {
      badge: 'Media distribution desk',
      title: ['Move every announcement', 'from draft to public reach.'],
      description: 'Distribute press releases, campaign updates, partner news, and media-ready stories with a focused archive built for discovery.',
      primaryCta: { label: 'Browse media updates', href: '/media-distribution' },
      secondaryCta: { label: 'Search the archive', href: '/search' },
      searchPlaceholder: 'Search releases, campaigns, partners, and updates',
      focusLabel: 'Focus',
      featureCardBadge: 'latest cover rotation',
      featureCardTitle: 'Latest releases shape the front page briefing.',
      featureCardDescription: 'Recent media-distribution posts stay visible without replacing real backend content.',
    },
    intro: {
      badge: 'About the platform',
      title: 'Built for distributing announcements with clarity and momentum.',
      paragraphs: [
        'This site brings press releases, distribution updates, partner announcements, and campaign briefs into a structured media hub.',
        'Every page is shaped to help visitors scan what was released, understand why it matters, and continue into related coverage.',
        'The layout supports fast discovery while keeping real published posts connected to their task detail pages.',
      ],
      sideBadge: 'At a glance',
      sidePoints: [
        'Text-first homepage cards for rapid release scanning.',
        'Dedicated archive for real media-distribution posts.',
        'Focused detail pages for announcements and campaigns.',
        'Lightweight motion that keeps browsing fast and polished.',
      ],
      primaryLink: { label: 'Browse articles', href: '/article' },
      secondaryLink: { label: 'See visuals', href: '/image' },
    },
    cta: {
      badge: 'Start exploring',
      title: 'Explore releases, campaign updates, and media-ready resources.',
      description: 'Move between distributed posts, search results, and publishing tools through one clear media-distribution system.',
      primaryCta: { label: 'Browse Updates', href: '/media-distribution' },
      secondaryCta: { label: 'Contact Sales', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest posts in this section.',
    },
  },
  about: {
    badge: 'About us',
    title: 'A sharper way to distribute media updates.',
    description: `${slot4BrandConfig.siteName} helps press releases, partner announcements, and campaign updates move through one clear public-facing hub.`,
    paragraphs: [
      'Instead of burying releases in scattered pages, the platform organizes each update into a clear archive with readable summaries and direct detail pages.',
      'Whether someone starts with a campaign note, partner release, or public announcement, they can continue exploring without losing context.',
    ],
    values: [
      {
        title: 'Distribution-first experience',
        description: 'We prioritize clarity, pacing, and structure so every update is easy to scan, read, and share.',
      },
      {
        title: 'Connected campaign context',
        description: 'Announcements, resources, and related posts stay connected so discovery feels natural across the site.',
      },
      {
        title: 'Fast and trustworthy',
        description: 'We focus on clean navigation and clear page structure to help visitors find verified updates faster.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'Talk to the media distribution desk.',
    description: 'Tell us what you want to publish, amplify, correct, or route to partners. We will help place the request in the right workflow.',
    formTitle: 'Request distribution support',
  },

  search: {
    metadata: {
      title: 'Search',
      description: 'Search media-distribution posts, topics, categories, and content across the site.',
    },
    hero: {
      badge: 'Search the distribution archive',
      title: 'Find releases, campaigns, partners, and updates faster.',
      description: 'Use keywords, categories, and content types to discover real posts from every active section of the site.',
      placeholder: 'Search by release, campaign, partner, category, or title',
    },
    resultsTitle: 'Latest searchable content',
  },
  create: {
    metadata: {
      title: 'Create',
      description: 'Create and submit new content for the site.',
    },
    locked: {
      badge: 'Creator access',
      title: 'Login to create new content.',
      description: 'Use your account to open the publishing workspace and prepare media-distribution posts for the active sections of this site.',
    },
    hero: {
      badge: 'Publishing workspace',
      title: 'Create a media-ready update.',
      description: 'Choose the content type, add release details, and prepare a clean post with source links, summary, and body content.',
    },
    formTitle: 'Content details',
    submitLabel: 'Submit content',
    successTitle: 'Content submitted successfully.',
  },
  auth: {
    login: {
      metadataDescription: 'Login page for this site.',
      badge: 'Member access',
      title: 'Welcome back to the distribution desk.',
      description: 'Login to manage submissions, prepare updates, and continue through your media-distribution workspace.',
      formTitle: 'Login',
      submitLabel: 'Continue',
      noAccount: 'No account matched these details. Create an account first, then login.',
      success: 'Login successful. Redirecting...',
      createCta: 'Create an account',
    },
    signup: {
      metadataDescription: 'Signup page for this site.',
      badge: 'Site access',
      title: 'Create your account and start distributing.',
      description: 'Create an account to access the publishing workspace, save release details, and submit media-ready content.',
      formTitle: 'Create account',
      submitLabel: 'Create account',
      passwordShort: 'Use at least 4 characters for the password.',
      success: 'Account created successfully. Redirecting...',
      loginCta: 'Login',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'Related articles',
      fallbackTitle: 'Article details',
    },
    listing: {
      relatedTitle: 'Related listings',
      fallbackTitle: 'Listing details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested articles',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit Official Site',
    },
  },
} as const
