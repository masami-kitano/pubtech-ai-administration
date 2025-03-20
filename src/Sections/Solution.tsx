import { GraghLine } from '@/components/icons/GraghLine';
import { Document } from '@/components/icons/Document';
import { Bulb } from '@/components/icons/Bulb';

export default function Solution() {
  const solutionItems = [
    {
      icon: 'gragh-line',
      title: '業務効率を最大化するAIサービス',
      description:
        '「パブテクAI行政」は、自治体特有の業務フローを学習し、ノンコア業務を効率化します。',
      items: [
        {
          dt: '例1',
          dd: '資料作成や調査データの要約を数秒で提供。',
        },
        {
          dt: '例2',
          dd: '日々の問い合わせ対応やFAQの自動生成で、職員の負担を軽減。',
        },
      ],
    },
    {
      icon: 'document',
      title: '高精度な行政文書作成をサポート',
      description:
        '自治体ごとの特性に応じた独自のデータベースを構築し、自治体固有の課題に即した回答を生成します。',
      items: [
        {
          dt: '特徴',
          dd: 'プロンプト（指示・質問入力文）の工夫が不要。必要なデータを入力するだけで適切な出力が得られる。',
        },
        {
          dt: '活用例',
          dd: '会議資料、政策提案書、広報文書の自動生成。',
        },
      ],
    },
    {
      icon: 'bulb',
      title: '意思決定に集中できる環境を構築',
      description:
        '煩雑な調査や事務作業をAIが肩代わりし、職員は意思決定と判断に専念できる環境を提供。',
      items: [
        {
          dt: '業務の効率化',
          dd: '情報整理やデータ分類の時間を削減し、本質的な課題に向き合える。',
        },
        {
          dt: '思考のサポート',
          dd: 'AIが必要な情報を適切に抽出・整理し、根拠のある判断を後押し。',
        },
      ],
    },
  ];

  return (
    <section id='solution' className='relative mt-20 pt-25'>
      <div className="relative">
        <div className='absolute top-23.25 left-0 w-full h-[103%] bg-[#F6F6F6] -skew-y-10' />
        <div className="relative max-w-320 mx-auto">
          <h2 className='relative font-semibold text-64/[1.4] text-center'>
            そんなお悩み
            <br />
            <span className='text-pubtech-blue'>「パブテクAI行政」</span>
            が解決します
          </h2>
        </div>
        <div className='relative max-w-[calc((100%-80rem)/2+80rem)] mr-auto'>
          <div className='grid grid-cols-[33rem_1fr] gap-x-32 mt-25 pr-20 xl:grid-cols-[1fr_34rem]'>
            <div className='relative rounded-r-2xl bg-white shadow-[0_1.5625rem_1.5625rem_0_rgba(0,0,0,0.15)]'></div>
            <ul className=' grid grid-cols-1 gap-12 pt-8 pb-13'>
              {solutionItems.map((item, index) => (
                <li key={index}>
                  <div className='w-10 aspect-square grid place-items-center'>
                    {item.icon === 'gragh-line' && (
                      <GraghLine className='w-8.25' />
                    )}
                    {item.icon === 'document' && <Document className='w-6.25' />}
                    {item.icon === 'bulb' && <Bulb className='w-8.25' />}
                  </div>
                  <h3 className='mt-2 items-start text-18/[1.4] font-semibold'>
                    {item.title}
                  </h3>
                  <p className='mt-2 text-14/[1.7]'>{item.description}</p>
                  <dl className='mt-4 grid grid-cols-1 gap-y-2'>
                    {item.items.map((item, index) => (
                      <div key={index} className='flex items-center gap-2'>
                        <dt className='px-2 text-12/[1.7] tracking-[.02em] font-semibold shrink-0 bg-[#B0B0B0] rounded-sm text-white'>{item.dt}</dt>
                        <dd className='text-12/[1.7] grow'>{item.dd}</dd>
                      </div>
                    ))}
                  </dl>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
