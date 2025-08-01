"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function ValueProposition() {
  // 各要素のスクロールアニメーション
  const labelAnimation = useScrollAnimation<HTMLSpanElement>({ threshold: 0.2, triggerOnce: true });
  const titleAnimation = useScrollAnimation<HTMLHeadingElement>({ threshold: 0.2, triggerOnce: true });
  const firstParagraphAnimation = useScrollAnimation<HTMLParagraphElement>({ threshold: 0.2, triggerOnce: true });
  const secondParagraphAnimation = useScrollAnimation<HTMLParagraphElement>({ threshold: 0.2, triggerOnce: true });
  const imageAnimation = useScrollAnimation<HTMLDivElement>({ threshold: 0.3, triggerOnce: true });

  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <span 
              ref={labelAnimation.ref}
              className={`font-bold uppercase text-primary transition-all duration-1000 ease-out ${
                labelAnimation.isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-6'
              }`}
            >
              Our Vision
            </span>
            <h2 
              ref={titleAnimation.ref}
              className={`font-headline mt-2 text-3xl font-bold text-primary md:text-4xl transition-all duration-1000 ease-out ${
                titleAnimation.isVisible 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-8 scale-95'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              SBTCが目指すもの：単なる交流ではない、「事業創出」のプラットフォーム
            </h2>
            <p 
              ref={firstParagraphAnimation.ref}
              className={`mt-4 text-lg text-muted-foreground transition-all duration-1000 ease-out ${
                firstParagraphAnimation.isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              SportsBizTech Consortium (SBTC)は、異業種の交流を目的としたサロンではありません。具体的な事業と投資機会を創出するための
              <span className="font-bold text-primary">「共創型プラットフォーム」</span>です。
            </p>
            <p 
              ref={secondParagraphAnimation.ref}
              className={`mt-4 text-foreground/80 transition-all duration-1000 ease-out ${
                secondParagraphAnimation.isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              大企業は顧客基盤と資本を。スタートアップは破壊的な技術とスピードを。リーグやクラブは熱狂的なファンとコンテンツを。アスリートは唯一無二の経験と影響力を。そして大学・研究機関は、未来を洞察する知見を。それぞれが持つ最強の武器を持ち寄り、利害を超えて本音でぶつかり合い、世界と伍する「稼ぐ力」を持ったエコシステムを、我々の手で構築します。
            </p>
          </div>
          <div 
            ref={imageAnimation.ref}
            className={`rounded-lg shadow-2xl transition-all duration-1000 ease-out ${
              imageAnimation.isVisible 
                ? 'opacity-100 translate-x-0 scale-100' 
                : 'opacity-0 translate-x-8 scale-95'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
             <Image 
                src="https://placehold.co/800x600.png"
                alt="Collaboration ecosystem"
                width={800}
                height={600}
                className="rounded-lg transform hover:scale-105 transition-transform duration-300"
                data-ai-hint="collaboration ecosystem"
             />
          </div>
        </div>
      </div>
    </section>
  );
}
