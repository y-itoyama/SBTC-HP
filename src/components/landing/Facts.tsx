import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Landmark, Handshake, DollarSign } from "lucide-react";

const facts = [
  {
    value: "60兆円超",
    label: "世界のスポーツ市場",
  },
  {
    value: "5兆円超",
    label: "北米プロリーグ年間収益",
  },
  {
    value: "数千億円",
    label: "国内プロリーグ市場規模",
  },
];

const opportunities = [
    {
        icon: <Handshake className="h-8 w-8 text-primary" />,
        title: "権利ビジネスの次元の違い",
        description: "海外では放映権が数十億ドル規模の収益源。デジタル配信でファンと直接繋がり、新たなキャッシュエンジンに。",
    },
    {
        icon: <Landmark className="h-8 w-8 text-primary" />,
        title: "解禁された新たな市場",
        description: "米国のスポーツベッティングや大学スポーツのNIL（Name, Image, and Likeness）は、テクノロジーが創出した数兆円規模の新市場。",
    },
    {
        icon: <TrendingUp className="h-8 w-8 text-primary" />,
        title: "投資対象としてのスポーツ",
        description: "海外では「情熱」の対象から「成長資産」へ。ファンドがチームを買収し、企業価値を飛躍的に向上させている。",
    },
]

export default function Facts() {
  return (
    <section className="bg-white/30 dark:bg-black/10 py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">
            我々が直面する「圧倒的な差」と「無限の機会」
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            世界の潮流から見る、日本のスポーツビジネスが立つ現在地。その差は危機か、それとも好機か。
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {facts.map((fact) => (
            <Card key={fact.label} className="text-center">
              <CardHeader>
                <CardTitle className="text-muted-foreground text-xl font-medium">{fact.label}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-5xl font-bold text-primary">{fact.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-20">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {opportunities.map((item) => (
                    <Card key={item.title} className="flex flex-col items-center text-center">
                        <CardHeader className="items-center">
                            <div className="rounded-full bg-primary/10 p-4">
                                {item.icon}
                            </div>
                            <CardTitle className="mt-4">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{item.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>

        <div className="mt-20 text-center">
            <p className="text-lg font-semibold text-foreground">
                このままでは、日本は世界のスポーツビジネスにおける「周回遅れ」になりかねない。
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
                しかし、日本には世界が羨む独自の観戦文化、質の高いコンテンツ、地域に根差した熱狂的なコミュニティという「無形資産」がある。この資産に最先端のビジネスモデルとテクノロジーを掛け合わせれば、飛躍的な成長を遂げられる。そのための「実験室」であり「作戦司令室」が、今、必要だ。
            </p>
        </div>

      </div>
    </section>
  );
}
