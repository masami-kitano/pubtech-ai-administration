import { SVGProps } from 'react';

export function Bulb({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 33.33 33.33'
      className={className}
      {...props}
    >
      <path
        d='M3.33,15c.42,0,.83.16,1.14.45.31.29.49.69.52,1.11.02.42-.11.84-.39,1.17-.27.33-.66.54-1.08.59h-.19s-1.67.01-1.67.01c-.42,0-.83-.16-1.14-.45-.31-.29-.49-.69-.52-1.11-.02-.42.11-.84.39-1.17.27-.33.66-.54,1.08-.59h.2s1.67-.01,1.67-.01ZM16.66,0c.41,0,.8.15,1.11.42.31.27.5.65.55,1.05v.2s.01,1.67.01,1.67c0,.42-.16.83-.45,1.14-.29.31-.69.49-1.11.52-.42.02-.84-.11-1.17-.39-.33-.27-.54-.66-.59-1.08v-.19s-.01-1.67-.01-1.67c0-.44.18-.87.49-1.18.31-.31.74-.49,1.18-.49ZM31.66,15c.42,0,.83.16,1.14.45.31.29.49.69.52,1.11.02.42-.11.84-.39,1.17-.27.33-.66.54-1.08.59h-.2s-1.67.01-1.67.01c-.42,0-.83-.16-1.14-.45-.31-.29-.49-.69-.52-1.11-.02-.42.11-.84.39-1.17.27-.33.66-.54,1.08-.59h.19s1.67-.01,1.67-.01ZM4.82,4.82c.29-.29.67-.46,1.07-.48.41-.03.81.1,1.13.35l.16.14,1.17,1.17c.3.3.47.7.49,1.13.01.42-.14.84-.42,1.15s-.67.52-1.09.56c-.42.04-.84-.08-1.18-.34l-.16-.14-1.17-1.17c-.31-.31-.49-.74-.49-1.18s.18-.87.49-1.18ZM26.15,4.82c.3-.3.7-.47,1.13-.49.42-.01.84.14,1.15.42.32.28.52.67.56,1.09.04.42-.08.84-.34,1.18l-.14.16-1.17,1.17c-.3.3-.7.47-1.13.49-.42.01-.84-.14-1.15-.42-.32-.28-.52-.67-.56-1.09-.04-.42.08-.84.34-1.18l.14-.16,1.17-1.17ZM20,26.67c.44,0,.87.18,1.18.49.31.31.49.74.49,1.18,0,1.33-.53,2.6-1.46,3.54-.94.94-2.21,1.46-3.54,1.46s-2.6-.53-3.54-1.46c-.94-.94-1.46-2.21-1.46-3.54,0-.41.15-.8.42-1.11.27-.31.65-.5,1.05-.55h.19s6.67-.01,6.67-.01ZM16.66,6.67c2.1,0,4.14.66,5.85,1.89,1.7,1.23,2.98,2.96,3.64,4.95.66,1.99.68,4.14.06,6.14-.63,2-1.87,3.76-3.55,5.02-.23.17-.5.28-.78.32h-.22s-10,.01-10,.01c-.36,0-.71-.12-1-.33-1.68-1.26-2.92-3.01-3.55-5.02-.63-2-.61-4.15.06-6.14.66-1.99,1.94-3.72,3.64-4.95,1.7-1.23,3.75-1.89,5.85-1.89Z'
        fill='#3a78f1'
      />
    </svg>
  );
}

export default Bulb;
