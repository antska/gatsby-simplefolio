import React from 'react';
import { nanoid } from 'nanoid';
import { Twitter, LinkedinIn, Github } from '@emotion-icons/fa-brands';

// HEAD DATA
export const headData = {
  title: 'Angeliki Skandali', // e.g: 'Name | Developer'
  extraTitle: 'Data Analyst - Scientist',
  lang: 'en',
  description:
    'Data Analyst - Scientist with in depth knowledge of statistical modeling, data analysis and statistical learning.',
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Angeliki Skandali',
  subtitle: 'I am a curious Data Analyst',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Data Analyst with in depth knowledge of statistical modeling, data analysis and statistical learning.',
  paragraphTwo:
    'Conducted data analysis in a big variety of projects that included prediction, modeling different kind of data, machine learning techniques, visualization of results etc.',
  paragraphThree:
    'Successfully developed and implemented clinical trial design that detects gene signatures, classifies sensitive patients and tests treatment efficacy.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'pharmacologic_substances_coronavirus.png',
    title: 'PHARMACOLOGIC SUBSTANCES & CORONAVIRUS',
    info:
      'Data analysis on relationships between pharmacologic substances or targets & disease. ' +
      'Among others, drug identification, finding the top 10 key opinion leaders per drug and ' +
      'clustering based on protein target have been achieved.',
    info2: '',
    url: '/files/pharmacologic_substances_coronavirus.pdf',
  },
  {
    id: nanoid(),
    img: 'clinical_trials_graph.png',
    title:
      'Biomarker adaptive designs in clinical trials with subgroup analysis and survival outcome.',
    info:
      'In this study we are interested in creating an adaptive design for detecting gene signatures ' +
      'and prospectively identify a target subpopulation ' +
      'when having time-to-event endpoints as a primary outcome.',
    info2: '',
    url: '/files/clinical_trials_angeliki_skandali.pdf',
  },
  {
    id: nanoid(),
    img: 'ck.png',
    title: 'Clustering users of a telecommunication company',
    info:
      'This analysis focuses on clustering users from a telecommunication company based on their ' +
      'mobile phone usage. Based on this clustering, it is possible to extract valuable information' +
      " about the users' behaviour and preferences per group.",
    info2: '',
    url: 'https://github.com/askandali/clustering-telecom-users',
    repo: 'https://github.com/askandali/clustering-telecom-users', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'angeliki.skandali@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/angeliki-skandali',
      Icon: <LinkedinIn size={28} />,
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/askandali',
      Icon: <Github size={28} />,
    },
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/AngelikiSkanda1',
      Icon: <Twitter size={28} />,
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
