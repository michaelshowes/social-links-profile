import { profile } from '../data';
import Button from './ui/Button';

export default function SocialCard() {
	return (
		<article
			className={
				'bg-gray-800 p-300 md:p-500 rounded-150 max-w-[456px] lg:max-w-[384px] flex flex-col items-center gap-300 w-full'
			}
		>
			{/* Image */}
			<div className={'rounded-full overflow-hidden w-[88px]'}>
				<img
					src={profile.image.src}
					alt={profile.image.alt}
				/>
			</div>

			{/* Header */}
			<header className={'flex flex-col gap-50'}>
				<h1
					className={'text-lg'}
				>{`${profile.firstName} ${profile.lastName}`}</h1>
				<div
					className={'font-bold text-green'}
				>{`${profile.city}, ${profile.country}`}</div>
			</header>

			{/* Tagline */}
			<p>"{profile.tagline}"</p>

			{/* Socials */}
			<ul className={'flex flex-col gap-200 w-full'}>
				{profile.socials.map((social) => (
					<li
						key={social.name}
						className={'w-full'}
					>
						<Button href={social.url}>{social.name}</Button>
					</li>
				))}
			</ul>
		</article>
	);
}
