import { SVGProps } from 'react';

export function PlayMovie({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 67 74.91'
      className={className}
      {...props}
    >
      <path
        d='M63,30.53c5.33,3.08,5.33,10.78,0,13.86l-51,29.44C6.67,76.91,0,73.06,0,66.9V8.01C0,1.85,6.67-2,12,1.08l51,29.44Z'
        fill='#fff'
      />
    </svg>
  );
}

export default PlayMovie;
