import type { IIconLinks } from "./navInterfaces"

const textLinks: { label: string; href: string }[] = [
	{ label: 'Home', href: '/' },
	{ label: 'Work', href: '/work/' },
	{ label: 'About', href: '/about/' },
];

const iconLinks: IIconLinks[] = [
	{ label: 'Linkedin', href: 'https://www.linkedin.com/in/fernando-batoni-areias', icon: 'linkedin-logo' },
	{ label: 'Instagram', href: 'https://instagram.com/fernando_batoni', icon: 'instagram-logo' },
	{ label: 'GitHub', href: 'https://github.com/fernandobatoni', icon: 'github-logo' },
];

export {
  textLinks, iconLinks
}
