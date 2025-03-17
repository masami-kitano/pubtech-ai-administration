'use client';

import Image from 'next/image';

import Cross from '@/components/icons/Cross';
import Success from '@/components/icons/Success';

import Personalized from '@/Sections/features/Personalized';
import Security from '@/Sections/features/Security';

export default function Features() {
  const features = {
    existingAiItems: [
      'AI利用スキルにより<span class="font-semibold">回答の質に差</span>が出る',
      '知識の範囲でプロンプトを作成するため、<span class="font-semibold">情報元が限られて</span>しまう',
      '求める回答が得られるまで何度も<span class="font-semibold">確認→プロンプトの再入力を繰り返さなければ</span>ならない',
    ],
    pubtechAiItems: [
      '対話しながら作業を進めることで<span class="font-semibold">プロンプトを試行錯誤せず</span>に精度の高い成果物が完成する',
      '<span class="font-semibold">各ステップで内容のチェックと修正</span>が可能',
      '<span class="font-semibold">自治体独自のデータベース</span>を参照するため情報源が豊富',
    ],
    contents: [
      {
        'title': '専門知識が不要、試行錯誤の手間を削減',
        'description': '既存の生成AIでは、適切なプロンプトを試行錯誤しながら調整する必要がありましたが、パブテクAI行政は、自治体の業務フローを理解し、最適な提案を自動で行うため職員の負担を軽減します。',
      },
      {
        'title': '順を追った提案型プロセス',
        'description': 'AIは単なる回答を提供するのではなく、業務の流れを踏まえたアシストを行い、例えば「住民満足度を上げたい」と入力すると、必要なデータや過去の事例を提案するだけでなく、追加の質問を投げかけて課題を整理し、最適な政策案を構築した上で、修正やカスタマイズが可能な形で支援します。',
      },

    ]
  }

  return (
    <section id='experience-difference' className='relative mt-25 pt-25 px-20'>
      <div className="max-w-280 mx-auto">
        <div className="relative grid grid-cols-[28rem_1fr] gap-x-8">
          <div className="relative">
            <div className="sticky top-25">
              <h2 className="text-40/[1.4] font-semibold text-pubtech-blue">
                思考プロセスに寄り添う
                <br />
                対話型サポート
              </h2>
              <p className="mt-6 text-14/[1.7]">
                パブテクAI行政は、一度きりの出力で終わるのではなく、次のステップを提案しながら自然な対話で進行します。対話を通じて職員の考えを整理し、的確な意思決定を支援します。
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-y-4">
            <div className="p-8 bg-[#F6F6F6] rounded-2xl">
              <div className="grid grid-cols-2 gap-x-2">
                <div className="relative">
                  <h3 className="text-16/[1.7] font-semibold">既存の生成AI</h3>
                  <div className="mt-2">
                    <Image src="/images/features-existing-ai.png" alt="既存の生成AI" width={280.75} height={429} />
                  </div>
                </div>
                <div className="relative">
                  <h3 className="text-16/[1.7] font-semibold text-pubtech-blue">パブテクAI財政</h3>
                  <div className="mt-2">
                    <Image src="/images/features-pubtech-ai.png" alt="パブテクAI財政" width={280.75} height={429} />
                  </div>
                </div>
              </div>
              <div className="mt-8 grid grid-cols-1 gap-y-6">
                <div className="relative">
                  <h3 className="text-16/[1.7] font-semibold">既存の生成AIは...</h3>
                  <ul className="mt-4 grid grid-cols-1 gap-y-2">
                    {features.existingAiItems.map((item, index) => (
                      <li key={index} className="text-14/[1.7] flex items-center gap-x-2">
                        <Cross className="w-6" />
                        <span dangerouslySetInnerHTML={{ __html: item }} />
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative">
                  <h3 className="text-16/[1.7] font-semibold text-deep-blue">パブテクAI財政なら...</h3>
                  <ul className="mt-4 grid grid-cols-1 gap-y-2">
                    {features.pubtechAiItems.map((item, index) => (
                      <li key={index} className="text-14/[1.7] flex items-center gap-x-2">
                        <Success className="w-6" />
                        <span dangerouslySetInnerHTML={{ __html: item }} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {features.contents.map((content, index) => (
              <div key={index} className="p-8 bg-[#DCE9FD] rounded-2xl">
                <h3 className="text-24/[1.4] font-semibold text-deep-blue">{content.title}</h3>
                <p className="mt-2 text-14/[1.7]">{content.description}</p>
              </div>
            ))}
          </div>
        </div>
        <Personalized />
        <Security />
      </div>
    </section>
  );
}
