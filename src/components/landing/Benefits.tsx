import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, FlaskConical, Share2, Handshake, PiggyBank, Users, Globe } from "lucide-react";

const lockerRoomBenefits = [
  {
    icon: <BrainCircuit className="h-8 w-8 text-accent" />,
    title: "戦略の共有",
    description: "国内外の最新動向、成功・失敗事例を徹底的に共有・分析し、自社の戦略を磨き上げます。",
  },
  {
    icon: <FlaskConical className="h-8 w-8 text-accent" />,
    title: "仮説の検証",
    description: "会員同士が連携し、低コスト・短期間で実証実験（PoC）を組成・実行するマッチングを強力に推進します。",
  },
  {
    icon: <Share2 className="h-8 w-8 text-accent" />,
    title: "成果の分かち合い",
    description: "成功したビジネスモデルはコンソーシアム全体で共有し、新たな投資や人材を呼び込みます。",
  },
];

const concreteActions = [
    { icon: <Handshake className="h-6 w-6 text-primary" />, name: "事業提携" },
    { icon: <PiggyBank className="h-6 w-6 text-primary" />, name: "資金調達" },
    { icon: <Users className="h-6 w-6 text-primary" />, name: "人材獲得" },
    { icon: <Globe className="h-6 w-6 text-primary" />, name: "海外展開" },
];


export default function Benefits() {
  return (
    <section id="benefits" className="bg-white/30 dark:bg-black/10 py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">
            ここでしか得られない価値：「ロッカールーム」への招待
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            SBTCは、試合前のロッカールームのような熱気と緊張感が支配する場です。情報交換に留まらず、具体的なアクションを生み出し続けます。
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {lockerRoomBenefits.map((benefit) => (
            <Card key={benefit.title} className="border-accent/50 bg-transparent text-center shadow-lg">
              <CardHeader className="items-center">
                <div className="rounded-full bg-accent/10 p-4">
                    {benefit.icon}
                </div>
                <CardTitle className="mt-4">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-20">
            <Card className="p-8">
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-primary">具体的なアクションへ直結</h3>
                    <p className="mx-auto mt-2 max-w-lg text-muted-foreground">単なる情報交換ではない。具体的なビジネスチャンスに直結するアクションを生み出し続けます。</p>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4">
                    {concreteActions.map((action) => (
                        <div key={action.name} className="flex flex-col items-center gap-3">
                            {action.icon}
                            <span className="font-semibold">{action.name}</span>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
      </div>
    </section>
  );
}
