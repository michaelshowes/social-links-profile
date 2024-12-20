export type ProfileProps = {
	image: {
		src: string;
		alt: string;
	};
	firstName: string;
	lastName: string;
	city: string;
	country: string;
	tagline: string;
	socials: {
		name: string;
		url: string;
	}[];
};

export const profile: ProfileProps = {
	image: {
		src: '/images/avatar-jessica.jpeg',
		alt: 'Jessica'
	},
	firstName: 'Jessica',
	lastName: 'Randall',
	city: 'London',
	country: 'United Kingdom',
	tagline: 'Front-end developer and avid reader.',
	socials: [
		{
			name: 'GitHub',
			url: '#'
		},
		{
			name: 'Frontend Mentor',
			url: '#'
		},
		{
			name: 'LinkedIn',
			url: '#'
		},
		{
			name: 'Twitter',
			url: '#'
		},
		{
			name: 'Instagram',
			url: '#'
		}
	]
};
