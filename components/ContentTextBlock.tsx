import React from 'react'

type Props = {
	texts: {
	  subTitle?: string;
	  title?: string;
	  paragraph?: string;
	};
  }

export function ContentTextBlock({ texts }: Props) {
  return (
	<div className='text-center pt-16 m-auto px-4 max-w-xl'>
		<h3 className='font-semibold text-secondary'>{texts?.subTitle}</h3>
		<h2 className='text-4xl pt-2 font-bold leading-tight'>{texts?.title}</h2>
		<p className='text-gray-600 pt-2 text-lg'>{texts?.paragraph}</p>
	</div>
  )
}