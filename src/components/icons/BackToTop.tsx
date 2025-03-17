import { SVGProps } from 'react';

export function Arrow({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 32 32'
      className={className}
      {...props}
    >
      <circle cx='16' cy='16' r='16' fill='#3a78f1' />
      <path
        d='M7.51,19.61c.25.25.59.39.94.39s.69-.14.94-.39l6.6-6.6,6.6,6.6c.25.24.59.38.94.37.35,0,.68-.14.93-.39.25-.25.39-.58.39-.93s-.13-.69-.37-.94l-7.54-7.54c-.25-.25-.59-.39-.94-.39s-.69.14-.94.39l-7.54,7.54c-.25.25-.39.59-.39.94s.14.69.39.94Z'
        fill='#fff'
      />
    </svg>
  );
}

export default Arrow;
