export default function Personalized() {
  const personalizedItems = [
    {
      'title': '実施したい作業や相談内容を「トピック」として入力します。',
      'description': 'プロンプトを入力する必要もないので、すぐに始められます。データベースに登録していない関連情報や手書きのメモなどを追加することも可能です。'
    },
    {
      'title': '背景情報や論点を整理します。',
      'description': 'AIが提案する情報をベースにユーザーが補足・修正することで、「トピック」に背景情報を与えることで精度の高い成果物を生成します。'
    },
    {
      'title': '「トピック」の内容によって、確認すべきステップがあります。',
      'description': '行政文書を出力したいのか、挨拶文を出力したいのか、イベント開催のアイデアを出力したいのか。確認すべきステップは目的に応じてカスタマイズされています。'
    },
    {
      'title': '最終成果物を確認します',
      'description': '関係者や上司に成果物を共有することで、内容の確認・承認や成果物の微調整を「パブテクAI行政」内で回覧しながら行えます。'
    },
  ]

  return (
    <section className='relative mt-25 pt-25'>
      <h2 className="text-40/[1.4] font-semibold text-center text-pubtech-blue">
        自治体業務に特化した
        <br />
        パーソナライズ設計
      </h2>
      <p className="mt-6 text-14/[1.7] text-center">
        他の生成AIが提供する汎用的な回答とは異なり、<br />
        「パブテクAI行政」は自治体特有の業務フローに基づいて最適化されています。<br />
        自治体職員が直面する実務の流れに寄り添い、必要な情報を適切に整理・生成することで、<br />
        より精度の高い成果物を提供します。
      </p>
      <ul className="mt-15 grid grid-cols-4 gap-x-8">
        {personalizedItems.map((item, index) => (
          <li key={index} className="relative">
            <div className="aspect-video border border-[#E7E7E7] rounded-2xl"></div>
            <h3 className="mt-4 text-14/[1.7] font-semibold">{item.title}</h3>
            <p className="mt-2 text-12/[1.7]">{item.description}</p>
          </li>
        ))}
      </ul>
      <div className="mt-15 grid grid-cols-[1fr_22rem] gap-7.25">
        <div className="p-8 bg-pubtech-blue rounded-2xl">
          <h3 className="text-32/[1.4] font-semibold text-white">
            業務フローを自治体ごとに最適化し、
            <br />
            テンプレート化
          </h3>
          <p className="mt-2 text-12/[1.7] text-white">
            業務フローは自治体ごとに最適化し、テンプレート化することで、業務の目的に応じた適切な流れを提示し、補助金申請書の作成やイベント開催準備、議会報告書の作成など、それぞれの業務に最適なフローを提案するとともに、頻繁に発生する業務については自治体独自のテンプレートとして保存し繰り返し活用できるようにすることで、「この業務では、まず〇〇を確認し、次に△△を検討する」といった手順を一括で設定し、職員ごとの対応のばらつきを防止します。
          </p>
        </div>
        <div className="grid grid-cols-1 gap-y-4">
          <div className="p-8 bg-[#DCE9FD] rounded-2xl">
            <h4 className="text-24/[1.7] font-semibold text-deep-blue">
              自治体専用データベースの活用
            </h4>
            <p className="mt-2 text-12/[1.7]">
              自治体専用のデータベースを活用し、地域ごとの特性に応じた情報の整理と提供を行います。住民の属性や過去の施策を反映させることで、自治体ごとに最適な対応を自動で提案できます。
            </p>
          </div>
          <div className="p-8 bg-[#DCE9FD] rounded-2xl">
            <h4 className="text-24/[1.7] font-semibold text-deep-blue">
              自治体特有の文書フォーマットにも対応
            </h4>
            <p className="mt-2 text-12/[1.7]">
              フォーマット対応: 議事録・政策提案書など、自治体の標準フォーマットに沿った文書を即座に作成。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
