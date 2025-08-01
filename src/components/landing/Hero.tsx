import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center text-center text-white overflow-hidden">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Background image of a sports stadium"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
        data-ai-hint="sports stadium"
      />
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="relative z-20 container mx-auto px-4">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-white md:text-6xl">
          日本のスポーツを新たな時代の主役へ
        </h1>
        <p className="mt-4 text-lg text-white/90 md:text-xl">
          SportsBizTech Consortium (SBTC) 設立に向けた挑戦状
        </p>
        <p className="mx-auto mt-6 max-w-3xl text-base text-white/80 md:text-lg">
          今、世界のスポーツ産業は、我々の想像を絶する速度と規模で変貌を遂げている。これは単なる変化ではない。新たな富と熱狂を生み出す「革命」だ。この歴史的な転換期を前に、我々は傍観者でいるのか、それとも未来を創る当事者となるのか。その選択が、日本のスポーツの未来を決定づける。
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="#interest-form">挑戦に参加する</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <a href="#benefits">得られる価値を見る</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
