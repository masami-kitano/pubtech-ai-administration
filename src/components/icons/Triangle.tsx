import { SVGProps } from 'react';

export function Circle({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 14 12'
      className={className}
      {...props}
    >
      <path
        d='M7,0c.19,0,.37.1.47.26l6.46,10.97c.09.16.09.35,0,.51-.1.16-.27.25-.46.25H.54c-.19,0-.37-.1-.46-.25-.1-.16-.1-.35,0-.51L6.53.26c.1-.16.27-.26.47-.26ZM1.46,10.97h11.08L7,1.56,1.46,10.97Z'
        fill='#4f4f4f'
        fill-rule='evenodd'
      />
    </svg>
  );
}

export default Circle;
