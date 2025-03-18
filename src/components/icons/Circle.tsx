import { SVGProps } from 'react';

export function Circle({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 14 14'
      className={className}
      {...props}
    >
      <path
        d='M7,1.02C3.7,1.02,1.02,3.7,1.02,7s2.68,5.98,5.98,5.98,5.98-2.68,5.98-5.98S10.3,1.02,7,1.02ZM0,7C0,3.13,3.13,0,7,0s7,3.13,7,7-3.13,7-7,7S0,10.87,0,7Z'
        fill='#4f4f4f'
        fillRule='evenodd'
      />
    </svg>
  );
}

export default Circle;
