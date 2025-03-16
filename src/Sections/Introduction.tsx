import { Books } from '@/components/icons/Books';
import { Clock } from '@/components/icons/Clock';

export default function Introduction() {
  const introductionItems = [
    {
      icon: 'clock',
      title: '職員ひとり一人の負担増加',
      items: [
        '人口減少と職員数の削減が進む中、<span class="font-semibold">「本質的な施策に割く時間が取れない」</span>',
        '非効率な調査や資料作成に手間がかかり、疲弊しがち',
        '膨大な資料を整理しきれず、単純作業に追われる日々'
      ]
    },
    {
      icon: 'books',
      title: '複雑な課題に向き合うリソース不足',
      items: [
        '政策立案やイベント企画がいつも同じような内容になってしまう',
        '<span class="font-semibold">複雑な行政文書・資料作成の手間が膨大</span>で、住民対応にまで手が回らない',
        '本質的な行政業務に割けるリソースが足りず、業務品質の維持が困難に'
      ]
    },
    {
      icon: 'books',
      title: '既存の生成AI導入で感じる物足りなさ',
      items: [
        '一般的なAIツールを試しても、<span class="font-semibold">「結局自分で書き直しや校正が発生」</span>',
        '汎用的な回答ばかりで、行政特有のニーズに合わない',
        '作業効率が思ったほど向上せず、課題が根本的に解決されていない'
      ]
    }
  ]

  return (
    <section id="introduction" className="relative mt-25 pt-25">
      <div className="max-w-280 mx-auto">
        <h2 className="relative font-semibold text-[2rem] leading-[1.4] pl-24">
          <span className="absolute top-1/2 left-0 -translate-y-1/2 h-0.5 w-16.75 bg-black-base"></span>
          増え続ける負担と限られたリソース。
          <br />
          その作業、<span className="text-pubtech-blue">本当に必要</span>ですか？
        </h2>
      </div>
      <div className="px-4">
        <div className="max-w-280 mx-auto">
          <ul className="mt-20 grid grid-cols-3 gap-8">
            {introductionItems.map((item, index) => (
              <li key={index}>
                <h3 className="relative flex gap-2 items-start text-18/[1.4] font-semibold">
                  <span className="w-6.25 aspect-square grid place-items-center">
                    {item.icon === 'clock' && <Clock className="w-full" />}
                    {item.icon === 'books' && <Books className="w-full" />}
                  </span>
                  <span>{item.title}</span>
                </h3>
                <ul className="mt-6">
                  {item.items.map((item, index) => (
                    <li className="relative text-14/[1.7] pl-[1em] before:content-['・'] before:absolute before:left-0" key={index} dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}