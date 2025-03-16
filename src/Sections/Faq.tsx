'use client';

import { useState } from 'react';
import gsap from 'gsap';
import FaqItem from '@/components/FaqItem';

export default function Faq() {
  const [openedItems, setOpenedItems] = useState<number[]>([]);

  const faqItems = [
    {
      question: 'ChatGPTやGeminiの違いは何ですか',
      answer: 'チャットボット型の生成AIサービスは、対話型のように見えて対話型ではありません。直前の指示に従った出力を行うため、順を追った思考が苦手で、すぐに結論を生成してしま う結果、行政で利活用するには精度面で不足が目立ちます。<br />パブテクAI行政は、思考回路をテンプレートで管理することで、生成AIに順を追って思考させたうえで利用者が方向性を調整することができます。利用者とAIが対等で、プロンプトエンジニアリングなどの新たなテクニックを学ぶ必要がないため、より多くの方々にストレスなくご利用いただけます。',
    },
    {
      question: '情報漏洩リスクの有無と、その対策について知りたい。',
      answer:
        '回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。',
    },
    {
      question: '庁舎からシステムへの接続方法は',
      answer:
        '回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。',
    },
    {
      question: '生成AIはパブリックテクノロジーズの独自技術ですか?',
      answer:
        '回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。',
    },
    {
      question: '導入費用はどれくらいかかりますか?',
      answer:
        '回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。',
    },
    {
      question: '本サービスを利用開始できるまでどれぐらい時間がかかりますか？',
      answer:
        '回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。',
    },
    {
      question: '会話数や文字数に制限はありますか？',
      answer: '回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。?',
    },
    {
      question: '情報源データベースを構築するメリットは何ですか',
      answer: '回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。?',
    },
  ];

  const handleToggle = (index: number, isOpen: boolean) => {
    const content = document.querySelector(`[data-index="${index}"] .js-faq-content`);
    if (!content) return;

    if (isOpen) {
      gsap.to(content, {
        height: 'auto',
        duration: 0.3,
        ease: 'power2.out',
        onComplete: () => {
          setOpenedItems([...openedItems, index]);
        },
      });
    } else {
      gsap.to(content, {
        height: 0,
        duration: 0.3,
        ease: 'power2.out',
        onComplete: () => {
          const details = document.querySelector(`[data-index="${index}"] details`) as HTMLDetailsElement;
          if (details) {
            details.open = false;
          }
          setOpenedItems(openedItems.filter((item) => item !== index));
        },
      });
    }
  };

  const halfLength = Math.ceil(faqItems.length / 2);

  return (
    <section id='faq' className='relative mt-20 pt-25 px-20 pb-50'>
      <div className='relative max-w-280 mx-auto'>
        <h2 className='text-32/[1.4] font-semibold text-center'>
          よくある質問
        </h2>

        <div className='mt-15 grid grid-cols-2 gap-x-8'>
          <div className='relative border-t border-[#D1D1D1]'>
            {faqItems.slice(0, halfLength).map((item, index) => (
              <FaqItem
                key={index}
                question={item.question}
                answer={item.answer}
                index={index}
                onToggle={handleToggle}
              />
            ))}
          </div>
          <div className='relative border-t border-[#D1D1D1]'>
            {faqItems.slice(halfLength).map((item, index) => (
              <FaqItem
                key={index + halfLength}
                question={item.question}
                answer={item.answer}
                index={index + halfLength}
                onToggle={handleToggle}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
