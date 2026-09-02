export const site = {
  name: 'Still Relevant',
  founder: 'Temi Olajide',
  tagline: 'AI is changing the world. Still Relevant helps you understand where you fit in.',
  strapline: 'Still Relevant with Temi',
  url: 'https://stillrelevant.co.uk',
  description:
    'Still Relevant helps adults 40+ discover practical ways to use AI in everyday life, work and new opportunities, so they can stay confident, capable and relevant as the world changes.',
  phone: '+44 7950 735340',
  phoneHref: 'tel:+447950735340',
  // SAFE MODE: leave as null and forms validate, show success and error states, but send nowhere.
  // Paste a Formspree / MailerLite / Google Form endpoint here to go live. Nothing else changes.
  formEndpoint: null,
  // Google Calendar booking page for the 2.5 hour one-to-one.
  bookingUrl:
    'https://calendar.app.google/pXXZ132o2k7ntCd99',
  // Opens a WhatsApp chat with Temi. Works on phone and desktop.
  whatsappUrl: 'https://wa.me/447950735340',
  social: [
    { label: 'YouTube', href: 'https://www.youtube.com/@Stillrelevantwithtemi' },
    { label: 'Instagram', href: 'https://www.instagram.com/Stillrelevantwithtemi' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/temiolajide/' },
    { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61590858944815' },
  ],
  // Real quotes only, from the AI Made Simple for Everyday Life workshop feedback form.
  // Every person below ticked yes to sharing their words with their first name.
  // Never add a quote here that somebody did not actually write.
  testimonials: [
    {
      quote:
        'Being taken through it step by step and being encouraged to know that I can do it has made me feel much more confident.',
      name: 'Funmi K',
      role: 'AI Made Simple workshop',
    },
    {
      quote:
        'Before today, I thought AI was a weird thing and it was just for tech people.',
      name: 'Funmi K',
      role: 'AI Made Simple workshop',
    },
    {
      quote:
        'I thought AI could be used for mostly techy things. I learned that I could start using AI for personal tasks.',
      name: 'Ife',
      role: 'AI Made Simple workshop',
    },
    {
      quote:
        'I learnt how to write better prompts so AI can create useful content and save me time.',
      name: 'Adeyosola',
      role: 'AI Made Simple workshop',
    },
    {
      quote:
        'I learnt how to prompt AI properly to get the required results, both for my personal life and business development.',
      name: 'Folasade',
      role: 'AI Made Simple workshop',
    },
    {
      quote:
        'I learnt how to use AI to make resources in a few minutes. It leads to time saving and better organisation.',
      name: 'Sam',
      role: 'AI Made Simple workshop',
    },
    {
      quote: 'It is informative and equips you for the future.',
      name: 'Essie',
      role: 'AI Made Simple workshop',
    },
    {
      quote:
        'Even for those already familiar with AI, this workshop prompts you to actually start using it in practice.',
      name: 'Funmi L',
      role: 'AI Made Simple workshop',
    },
  ],
};

export const nav = [
  { label: 'Start here', href: '/start/' },
  { label: 'Learn', href: '/learn/' },
  { label: 'Work with me', href: '/one-to-one/' },
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
      'Growing a business, making content and videos without losing your week to it, flyers and marketing you would otherwise pay for, a book, a community group, or a bit of extra income.',
    intro:
      'This is the busiest of the three worlds, and by a distance. When people finish a session and say what they want to do next, it is nearly always this: grow the thing, promote the thing, make the content, get the idea moving. Your next chapter can still be full of possibilities, and this is about making a start on it feel less daunting.',
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
