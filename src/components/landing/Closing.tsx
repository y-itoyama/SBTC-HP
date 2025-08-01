import { Button } from "@/components/ui/button";

export default function Closing() {
    return (
        <section className="py-20 sm:py-32">
            <div className="container mx-auto px-4 text-center">
                <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">
                    宣言：未来へ、行動を。
                </h2>
                <p className="mx-auto mt-6 max-w-3xl text-lg text-foreground/80">
                    もはや傍観者である時間はありません。SBTCは、日本のスポーツを愛し、その可能性を信じるすべての挑戦者のための「ロッカールーム」です。伝統への敬意と、未来への大胆な野心。その両方を胸に、日本のスポーツを新たな時代の主役へと押し上げる革命の狼煙を上げましょう。
                </p>
                <div className="mt-8">
                    <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                        <a href="#interest-form">この挑戦に、ともにチャレンジしよう</a>
                    </Button>
                </div>
            </div>
        </section>
    )
}
