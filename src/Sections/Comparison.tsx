'use client';

import Circle from '@/components/icons/Circle';
import DoubleCircle from '@/components/icons/DoubleCircle';
import Triangle from '@/components/icons/Triangle';
import CrossLine from '@/components/icons/CrossLine';

export default function Comparison() {
  const comparisonTables = {
    headItems: [
      '料金',
      'プロンプト（指示文）<br />作成支援機能',
      'RAG機能',
      '推敲指示/回覧機能',
      '自治体間共有機能',
      '問い合わせ対応の効率化機能',
      '首長・幹部向け<br />庁内マネジメント支援機能',
      'セキュリティ対策',
    ],
    pubtechItems: [
      {
        icon: <DoubleCircle />,
        text: 'プロンプト不要',
      },
      {
        icon: <DoubleCircle />,
        text: '自治体特化に対応',
      },
      {
        icon: <DoubleCircle />,
        text: '部分指定で指示/関係者と<br />共同確認・生成が可能',
      },
      {
        icon: <DoubleCircle />,
        text: '成功事例やナレッジを<br />共有可能（許可制）',
      },
      {
        icon: <DoubleCircle />,
        text: 'データ解析で優先度判断が可能',
      },
      {
        icon: <DoubleCircle />,
        text: 'プロジェクト進捗や<br />担当者の確認可能',
      },
      {
        icon: <DoubleCircle />,
        text: 'ISMS認証/LG-WAN対応',
      },
    ],
    otherAItems: [
      {
        icon: <CrossLine className='w-3.5' />,
        text: '非対応',
      },
      {
        icon: <DoubleCircle className='w-5' />,
        text: '自治体特化に対応',
      },
      {
        icon: <Circle className='w-3.5' />,
        text: 'チャット形式での指示に対応',
      },
      {
        icon: <CrossLine className='w-3.5' />,
        text: '非対応',
      },
      {
        icon: <CrossLine className='w-3.5' />,
        text: '非対応',
      },
      {
        icon: <CrossLine className='w-3.5' />,
        text: '非対応',
      },
      {
        icon: <DoubleCircle className='w-5' />,
        text: 'ISMS認証/LG-WAN対応',
      },
    ],
    otherBItems: [
      {
        icon: <Triangle className='w-3.5' />,
        text: 'テンプレートを提供',
      },
      {
        icon: <Triangle className='w-3.5' />,
        text: '汎用資料を学習',
      },
      {
        icon: <CrossLine className='w-3.5' />,
        text: '修正は最初から再指示',
      },
      {
        icon: <CrossLine className='w-3.5' />,
        text: '非対応',
      },
      {
        icon: <CrossLine className='w-3.5' />,
        text: '非対応',
      },
      {
        icon: <CrossLine className='w-3.5' />,
        text: '非対応',
      },
      {
        icon: <CrossLine className='w-3.5' />,
        text: '非対応',
      },
    ]
  };

  return (
    <section
      id='comparison'
      className='relative pt-50 pb-50 px-20 bg-[#EDEFF4]'
    >
      <div className='max-w-240 mx-auto'>
        <h2 className='text-40/[1.4] text-center font-semibold'>
          他社ツールと<span className='text-pubtech-blue'>比べてみて</span>
          ください
        </h2>
        <p className='text-14/[1.7] text-center mt-6'>
          パブテクAI行政ならではの特徴を、ぜひ他のツールと見比べてみてください。
          <br />
          自治体業務に最適化された使いやすさや、効率化の違いを感じていただけるはずです。
        </p>
        <div className='mt-20'>
          <div className='relative grid grid-cols-4'>
            <div className='relative rounded-l-2xl overflow-hidden'>
              <div className='h-14 bg-[#88B0FD]'></div>
              {comparisonTables.headItems.map((item, index) => (
                <div
                  key={index}
                  className='h-27 grid place-items-center text-center bg-[#C1D9FC] text-14/[1.7] font-semibold text-deep-blue border-b border-[#88B0FD] last:border-b-0'
                  dangerouslySetInnerHTML={{ __html: item }}
                ></div>
              ))}
            </div>
            <div className='relative z-10 bg-[#EDEFF4] shadow-[0_1.5625rem_1.5625rem_0_rgba(0,0,0,0.15)] rounded-2xl overflow-hidden scale-105'>
              <h3 className='grid place-items-center h-[3.6625rem] bg-pubtech-blue text-center text-white font-semibold text-14/[1.7]'>
                パブテクAI行政
              </h3>
              <div className='grid place-items-center h-27 text-center text-deep-blue border-b border-[#C1D9FC]'>
                <div className='relative'>
                  <h4 className='text-14/[1.7] font-semibold'>
                    初期開発費 <span>+</span> ¥1,000/人〜
                  </h4>
                  <p className='mt-0.5 text-12/[1.7]'>
                    ご利用人数にあわせて変動します
                  </p>
                </div>
              </div>
              {comparisonTables.pubtechItems.map((item, index) => (
                <div
                  key={index}
                  className='grid place-items-center h-27 text-center text-deep-blue border-b border-[#C1D9FC] last:border-b-0'
                >
                  <div className='relative flex flex-col items-center justify-center'>
                    <div className='[&_path]:fill-pubtech-blue [&_svg]:w-5'>{item.icon}</div>
                    <p className='mt-1 text-14/[1.7] font-semibold' dangerouslySetInnerHTML={{ __html: item.text }}></p>
                  </div>
                </div>
              ))}
            </div>
            <div className='relative bg-[#F6F6F6] overflow-hidden'>
              <h3 className='grid place-items-center h-[3.6625rem] bg-[#D1D1D1] text-center text-black-base font-semibold text-14/[1.7]'>
                他社ツールA
              </h3>
              <div className='grid place-items-center h-27 text-center text-deep-blue border-b border-[#E7E7E7]'>
                <div className='relative text-14/[1.7]'>ー</div>
              </div>
              {comparisonTables.otherAItems.map((item, index) => (
                <div
                  key={index}
                  className='grid place-items-center h-27 text-center text-[#4F4F4F] border-b border-[#E7E7E7] last:border-b-0'
                >
                  <div className='relative flex flex-col items-center justify-center'>
                    <div className='[&_path]:fill-[#4F4F4F]'>{item.icon}</div>
                    <p className='mt-1 text-14/[1.7]' dangerouslySetInnerHTML={{ __html: item.text }}></p>
                  </div>
                </div>
              ))}
            </div>
            <div className='relative bg-[#F6F6F6] border-l border-[#E7E7E7] overflow-hidden rounded-r-2xl'>
              <h3 className='grid place-items-center h-[3.6625rem] bg-[#D1D1D1] text-center text-black-base font-semibold text-14/[1.7]'>
                他社ツールA
              </h3>
              <div className='grid place-items-center h-27 text-center text-deep-blue border-b border-[#E7E7E7]'>
                <div className='relative text-14/[1.7]'>ー</div>
              </div>
              {comparisonTables.otherBItems.map((item, index) => (
                <div
                  key={index}
                  className='grid place-items-center h-27 text-center text-[#4F4F4F] border-b border-[#E7E7E7] last:border-b-0'
                >
                  <div className='relative flex flex-col items-center justify-center'>
                    <div className='[&_path]:fill-[#4F4F4F]'>{item.icon}</div>
                    <p className='mt-1 text-14/[1.7]' dangerouslySetInnerHTML={{ __html: item.text }}></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
