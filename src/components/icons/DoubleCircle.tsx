import { SVGProps } from 'react';

export function DoubleCircle({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 20.5 20.5'
      className={className}
      {...props}
    >
      <path
        d='M10.25,1.5C5.42,1.5,1.5,5.42,1.5,10.25s3.92,8.75,8.75,8.75,8.75-3.92,8.75-8.75S15.08,1.5,10.25,1.5ZM0,10.25C0,4.59,4.59,0,10.25,0s10.25,4.59,10.25,10.25-4.59,10.25-10.25,10.25S0,15.91,0,10.25Z'
        fill='#4f4f4f'
        fillRule='evenodd'
      />
      <path
        d='M10.25,6.89c-1.85,0-3.36,1.5-3.36,3.36s1.5,3.36,3.36,3.36,3.36-1.5,3.36-3.36-1.5-3.36-3.36-3.36ZM5.39,10.25c0-2.68,2.18-4.86,4.86-4.86s4.86,2.17,4.86,4.86-2.18,4.86-4.86,4.86-4.86-2.18-4.86-4.86Z'
        fill='#4f4f4f'
        fillRule='evenodd'
      />
    </svg>
  );
}

export default DoubleCircle;
