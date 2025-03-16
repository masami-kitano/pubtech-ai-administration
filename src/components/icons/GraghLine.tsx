import { SVGProps } from 'react';

export function GraghLine({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 33.33 30'
      className={className}
      {...props}
    >
      <path
        d='M23.33,14.63l7.07-12.22,2.88,1.67-8.72,15.08-10.85-6.25-7.95,13.75h27.57v3.33H0V0h3.33v24.23l9.17-15.9,10.83,6.3Z'
        fill='#3a78f1'
      />
    </svg>
  );
}

export default GraghLine;
