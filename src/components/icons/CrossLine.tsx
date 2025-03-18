import { SVGProps } from 'react';

export function CrossLine({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 14 14'
      className={className}
      {...props}
    >
      <path
        d='M.2.2c.26-.26.69-.26.96,0l5.84,5.84L12.84.2c.26-.26.69-.26.96,0,.26.26.26.69,0,.96l-5.84,5.84,5.84,5.84c.26.26.26.69,0,.96-.26.26-.69.26-.96,0l-5.84-5.84L1.16,13.8c-.26.26-.69.26-.96,0-.26-.26-.26-.69,0-.96l5.84-5.84L.2,1.16c-.26-.26-.26-.69,0-.96Z'
        fill='#4f4f4f'
        fillRule='evenodd'
      />
    </svg>
  );
}

export default CrossLine;
