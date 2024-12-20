import { ReactNode } from 'react';

type ButtonProps = {
	href: string;
	children: ReactNode;
};

export default function Button({ href, children }: ButtonProps) {
	return (
		<a
			href={href}
			className={
				'font-bold bg-gray-700 hover:bg-green hover:text-gray-700 transition-all duration-300 p-150 rounded-100 w-full inline-block text-center'
			}
		>
			{children}
		</a>
	);
}
