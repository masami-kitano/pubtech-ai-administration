import Cloud from '@/components/icons/Cloud';
import SecurityIcon from '@/components/icons/Security';
import Block from '@/components/icons/Block';

export default function Security() {
  const securityItems = [
    {
      icon: <Cloud className='w-9' />,
      title: 'LG-WAN<span>（総合行政ネットワーク）</span>対応',
    },
    {
      icon: <SecurityIcon className='w-6.75' />,
      title:
        'ISMS<span>（情報セキュリティマネジメントシステム）</span>認証取得',
    },
    {
      icon: <Block className='w-8.25' />,
      title:
        'AIの再学習対象にならない保証<br /><span>（データ保護の上、自治体間でのナレッジ共有で使われる可能性はあります）</span>',
    },
  ];
  return (
    <section className='relative mt-25 pt-25'>
      <div className='mt-15 grid grid-cols-[1fr_22rem] gap-7.25'>
        <div className='relative'>
          <div className='sticky top-25'>
            <h2 className='text-40/[1.4] font-semibold text-pubtech-blue'>
              セキュリティとプライバシーの徹底管理
            </h2>
            <p className='mt-6 text-14/[1.7]'>
              他の生成AIがクラウドベースで提供されるのに対し、「パブテクAI行政」は自治体のセキュリティ要件に対応した厳密な管理体制を整備。機密情報を安全に取り扱いながら、自治体業務を支援します。
            </p>
          </div>
        </div>
        <div className='grid grid-cols-1 gap-y-4'>
          {securityItems.map((item, index) => (
            <div key={index} className='p-8 bg-deep-blue rounded-2xl'>
              <div className='w-10 aspect-square grid place-items-center'>
                {item.icon}
              </div>
              <h3
                className='text-18/[1.4] font-semibold text-white mt-2 [&_span]:text-12/[1.7]'
                dangerouslySetInnerHTML={{ __html: item.title }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
