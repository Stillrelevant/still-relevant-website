export const site = {
  name: 'Still Relevant',
  founder: 'Temi Olajide',
  tagline: 'AI is changing the world. Still Relevant helps you understand where you fit in.',
  strapline: 'Still Relevant with Temi',
  url: 'https://stillrelevant.co.uk',
  description:
    'Still Relevant helps adults 40+ discover practical ways to use AI in everyday life, work and new opportunities, so they can stay confident, capable and relevant as the world changes.',
  email: 'hello@stillrelevant.co.uk',
  // SAFE MODE: leave as null and forms validate, show success and error states, but send nowhere.
  // Paste a Formspree / MailerLite / Google Form endpoint here to go live. Nothing else changes.
  formEndpoint: null,
  social: [
    { label: 'YouTube', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'Facebook', href: '#' },
  ],
  // Real quotes only. Leave empty and the testimonial sections do not render at all.
  testimonials: [],
};

export const nav = [
  { label: 'Start here', href: '/start/' },
  { label: 'Learn', href: '/learn/' },
  { label: 'Articles', href: '/articles/' },
  { label: 'Shop', href: '/shop/' },
  { label: 'Speaking', href: '/speaking/' },
  { label: 'For Organisations', href: '/organisations/' },
  { label: 'About', href: '/about/' },
];

/**
 * The three content worlds are the spine of the whole site.
 * Everything else supports them.
 */
export const worlds = [
  {
    slug: 'everyday-life',
    name: 'AI for everyday life',
    short: 'Everyday life',
    tagline: 'The ordinary things you already care about',
    blurb:
      'Trips, cooking, family, grandchildren, gardening, letters, hobbies, writing, planning, keeping on top of things. The parts of life that have nothing to do with a job.',
    intro:
      'Nothing here needs a job title, a company laptop or anyone’s permission. This is AI for the ordinary business of running a life, which turns out to be where a lot of the genuine usefulness hides.',
  },
  {
    slug: 'work-and-career',
    name: 'AI for work and career',
    short: 'Work and career',
    tagline: 'Being better prepared, whatever your workplace allows',
    blurb:
      'Preparing for meetings, thinking through a decision, getting your head around something complicated, practising for an interview, learning a skill you have been meaning to pick up.',
    intro:
      'A lot of people assume this is only relevant if their employer permits AI at work. It is not. Most of what follows happens on your own time, on your own device, to help you arrive better prepared.',
  },
  {
    slug: 'whats-next',
    name: 'AI for what’s next',
    short: 'What’s next',
    tagline: 'The thing you have been meaning to start',
    blurb:
      'A passion project, a small business, a book, a community group, a new skill, a bit of extra income, or something you have quietly wanted to try for years.',
    intro:
      'This one matters most for people in their fifties, sixties and seventies. Your next chapter can still be full of possibilities, and this is about making a start on it feel less daunting.',
  },
];

/** Supporting topics. Practical, and deliberately free of jargon. */
export const supportingTopics = [
  {
    slug: 'getting-started',
    name: 'Getting started',
    short: 'Getting started',
    tagline: 'From nowhere to your first useful result',
    blurb:
      'What these tools actually are, how to ask them better questions, and why your first attempt probably disappointed you.',
    intro:
      'If you have opened one of these tools, typed something, got something bland back and quietly closed the tab, start here. Nothing in this section assumes you know anything.',
  },
  {
    slug: 'using-ai-well',
    name: 'Using AI well',
    short: 'Using AI well',
    tagline: 'Getting good answers and spotting bad ones',
    blurb:
      'How to tell when it is wrong, what is safe to share with it, and how to keep your own judgement firmly in charge.',
    intro:
      'These tools sound just as confident when they are wrong as when they are right. This section is about staying in control of that, which is easier than it sounds.',
  },
  {
    slug: 'staying-relevant',
    name: 'Staying relevant',
    short: 'Staying relevant',
    tagline: 'Where you fit in as things change',
    blurb:
      'Why experience is an advantage here rather than a handicap, and how to keep your value visible without chasing every new thing.',
    intro:
      'The story going round is that experience is now a liability. Having taught a lot of rooms, I think it is the other way round. This section is about why.',
  },
];

export const topics = [...worlds, ...supportingTopics];

export const topicBySlug = Object.fromEntries(topics.map((t) => [t.slug, t]));
