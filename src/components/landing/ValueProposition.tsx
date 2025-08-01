import Image from "next/image";

export default function ValueProposition() {
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <span className="font-bold uppercase text-primary">Our Vision</span>
            <h2 className="font-headline mt-2 text-3xl font-bold text-primary md:text-4xl">
              SBTCが目指すもの：単なる交流ではない、「事業創出」のプラットフォーム
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              SportsBizTech Consortium (SBTC)は、異業種の交流を目的としたサロンではありません。具体的な事業と投資機会を創出するための
              <span className="font-bold text-primary">「共創型プラットフォーム」</span>です。
            </p>
            <p className="mt-4 text-foreground/80">
              大企業は顧客基盤と資本を。スタートアップは破壊的な技術とスピードを。リーグやクラブは熱狂的なファンとコンテンツを。アスリートは唯一無二の経験と影響力を。そして大学・研究機関は、未来を洞察する知見を。それぞれが持つ最強の武器を持ち寄り、利害を超えて本音でぶつかり合い、世界と伍する「稼ぐ力」を持ったエコシステムを、我々の手で構築します。
            </p>
          </div>
          <div className="rounded-lg shadow-2xl">
             <Image 
                src="https://placehold.co/800x600.png"
                alt="Collaboration ecosystem"
                width={800}
                height={600}
                className="rounded-lg"
                data-ai-hint="collaboration ecosystem"
             />
          </div>
        </div>
      </div>
    </section>
  );
}
