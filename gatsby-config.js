require(`dotenv`).config({
	path: `.env`,
});

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

module.exports = {
	siteMetadata: {
		siteTitle: `Mohammed Asker`,
		siteTitleAlt: `Mohammed Asker - Front-end Developer, Blogger, and Freelancer`,
		siteHeadline: `Mohammed Asker - Front-end Developer, Blogger, and Freelancer`,
		siteUrl: `https://mohammedasker.com`,
		siteDescription: `I'm a Front-End Developer building a beautiful, mobile-responsive,
		and accessible websites and web applications.`,
		siteLanguage: `en`,
		author: `@MooAsker`,
		siteImage: `/banner.jpg`,
	},
	plugins: [
		{
			resolve: `@lekoarts/gatsby-theme-minimal-blog`,
			// See the theme's README for all available options
			options: {
				navigation: [
					{
						title: `Blog`,
						slug: `/blog`,
					},
					{
						title: `About`,
						slug: `/about`,
					},
					{
						title: `Contact`,
						slug: `/contact`,
					},
				],
				externalLinks: [
					{
						name: `Twitter`,
						url: `https://twitter.com/mooasker`,
					},
					{
						name: `GitHub`,
						url: `https://www.github.com/mohammedasker/`,
					},
					{
						name: `LinkedIn`,
						url: `https://linkedin.com/in/mohdasker`,
					},
				],
			},
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: `UA-174924847-1`,
			},
		},
		{
			resolve: `gatsby-plugin-feed`,
			options: {
				query: `
				{
				  site {
					siteMetadata {
					  title
					  description
					  siteUrl
					  site_url: https://www.mohammedasker.com/
					}
				  }
				}
			  `,
				feeds: [
					{
						serialize: ({ query: { site, allMarkdownRemark } }) => {
							return allMarkdownRemark.edges.map((edge) => {
								return Object.assign({}, edge.node.frontmatter, {
									description: edge.node.excerpt,
									date: edge.node.frontmatter.date,
									url: site.siteMetadata.siteUrl + edge.node.fields.slug,
									guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
									custom_elements: [{ "content:encoded": edge.node.html }],
								});
							});
						},
						query: `
					{
					  allMarkdownRemark(
						sort: { order: DESC, fields: [frontmatter___date] },
					  ) {
						edges {
						  node {
							excerpt
							html
							fields { slug }
							frontmatter {
							  title
							  date
							}
						  }
						}
					  }
					}
				  `,
						output: "/rss.xml",
						title: "Your Site's RSS Feed",
					},
				],
			},
		},
		`gatsby-plugin-sitemap`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Mohammed Asker - Front-end Developer, Blogger, and Freelancer`,
				short_name: `Mohammed Asker`,
				description: `I'm a Front-End Developer building a beautiful, mobile-responsive,
				and accessible websites and web applications.`,
				start_url: `/`,
				background_color: `#fff`,
				theme_color: `#6B46C1`,
				display: `standalone`,
				icons: [
					{
						src: `/android-chrome-192x192.png`,
						sizes: `192x192`,
						type: `image/png`,
					},
					{
						src: `/android-chrome-512x512.png`,
						sizes: `512x512`,
						type: `image/png`,
					},
				],
			},
		},
		`gatsby-plugin-offline`,
		`gatsby-plugin-netlify`,
		shouldAnalyseBundle && {
			resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
			options: {
				analyzerMode: `static`,
				reportFilename: `_bundle.html`,
				openAnalyzer: false,
			},
		},
	].filter(Boolean),
};
