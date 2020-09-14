import React from 'react';
import Helmet from 'react-helmet';
// @ts-ignore
import Thumbnail from 'images/profile.jpg';
import config from 'mock/config';

type Props = { [key: string]: string };

const SEO = ({
  title,
  type,
  description,
  articleBody,
  datePublished,
  dateModified,
  cover,
  location = '',
  readTime,
}: Props) => {
  const {
    url,
    defaultTitle,
    defaultDescription,
    social,
    socialLinks,
    address,
    contact,
    legalName,
    foundingDate,
    logo,
    author,
  } = config;

  const structuredDataArticle = `{
		"@context": "http://schema.org",
		"@type": "${type}",
		"mainEntityOfPage": {
			"@type": "WebPage",
			"@id": "https://google.com/article"
		},
		"headline": "${description}",
		"image": "${cover ? `https://skange.com${cover}` : `https://skange.com${Thumbnail}`}",
		"datePublished": "${datePublished}",
		"dateModified": "${dateModified}",
		"author": {
			"@type": "Person",
			"name": "${author}"
		},
		"articleBody": "${articleBody}",
		"publisher": {
			"@type": "Organization",
			"name": "${author}",
			"logo": {
				"@type": "ImageObject",
				"url": "${logo}"
			}
		},
		"description": "${description}",
		"url": "${url}${location}/?ref=skange.com"
	}`;

  const structuredDataOrganization = `{
		"@context": "http://schema.org",
		"@type": "${type}",
		"legalName": "${legalName}",
		"url": "${url}",
		"logo": "${logo}",
		"foundingDate": "${foundingDate}",
		"founders": [{
			"@type": "Person",
			"name": "${legalName}"
		}],
		"contactPoint": [{
			"@type": "ContactPoint",
			"email": "${contact.email}",
			"telephone": "${contact.phone}",
			"contactType": "customer service"
		}],
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "${address.city}",
			"addressRegion": "${address.region}",
			"addressCountry": "${address.country}",
			"postalCode": "${address.zipCode}"
		},
		"sameAs": [
			"${socialLinks.twitter}",
			"${socialLinks.linkedin}",
			"${socialLinks.instagram}",
			"${socialLinks.github}"
		]
    }`;

  // @ts-ignore
  return (
    <Helmet>
      <meta name="description" content={description || defaultDescription} />
      <meta name="image" content={cover ? `${url}${cover}` : `${url}${Thumbnail}`} />

      <meta property="og:url" content={`${url}${location}/?ref=skange.com`} />
      <meta property="og:type" content={type === 'NewsArticle' ? 'NewsArticle' : 'website'} />
      <meta property="og:title" content={title ? `Angeliki Skandali | ${title}` : defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={cover ? `${url}${cover}` : `${url}${Thumbnail}`} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={socialLinks.twitter} />
      <meta name="twitter:site" content={social.twitter} />
      <meta name="twitter:title" content={title ? `Angeliki Skandali | ${title}` : defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image:src" content={cover ? `${url}${cover}` : `${url}${Thumbnail}`} />
      <script type="application/ld+json">
        {type === 'NewsArticle' ? structuredDataArticle : structuredDataOrganization}
      </script>
      <title>{title ? `Angeliki Skandali | ${title}` : defaultTitle}</title>
      {type === 'NewsArticle' && <meta name="twitter:label1" value="Reading time" />}
      {type === 'NewsArticle' && <meta name="twitter:data1" value={`${readTime} min read`} />}
      {type === 'NewsArticle' && (
        <meta name="author" content="Angeliki Skandali" data-react-helmet="true" />
      )}
      {type === 'NewsArticle' && (
        <meta name="article:published_time" content={datePublished} data-react-helmet="true" />
      )}
      <html lang="en" dir="ltr" />
    </Helmet>
  );
};

export default SEO;
