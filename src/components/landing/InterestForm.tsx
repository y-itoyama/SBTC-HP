"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { generateMessageAction } from "@/app/actions";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(1, "お名前を入力してください。"),
  email: z.string().email("有効なメールアドレスを入力してください。"),
  background: z.string().min(20, "背景について詳しく教えてください。（20文字以上）"),
  interests: z.string().min(20, "ご興味について詳しく教えてください。（20文字以上）"),
});

type FormValues = z.infer<typeof formSchema>;

export default function InterestForm() {
  const [isPending, startTransition] = useTransition();
  const [generatedMessage, setGeneratedMessage] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      background: "",
      interests: "",
    },
  });

  function onSubmit(values: FormValues) {
    startTransition(async () => {
        const result = await generateMessageAction({
            background: values.background,
            interests: values.interests
        });

        if (result.success && result.data) {
            setGeneratedMessage(result.data.message);
        } else {
            toast({
                title: "エラー",
                description: result.error,
                variant: "destructive",
            });
        }
    });
  }

  return (
    <>
      <section id="interest-form" className="py-20 sm:py-32 bg-white/30 dark:bg-black/10">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto shadow-2xl">
            <CardHeader>
              <CardTitle className="font-headline text-3xl text-primary">SBTCへの参加に関心がありますか？</CardTitle>
              <CardDescription>
                以下のフォームにご記入ください。ご提供いただいた情報を基に、AIがあなたにパーソナライズされた参加メリットを生成します。
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>お名前</FormLabel>
                          <FormControl>
                            <Input placeholder="山田 太郎" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>メールアドレス</FormLabel>
                          <FormControl>
                            <Input placeholder="your.email@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="background"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>あなたの経歴・背景</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="例：IT企業で10年間、新規事業開発を担当。特にデータ分析とUXデザインに強みがあります。"
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="interests"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>SBTCで実現したいこと・興味</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="例：ファンエンゲージメントを高める新しいテクノロジーを開発したい。また、異業種の専門家とネットワークを築きたい。"
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isPending} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    {isPending ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            メッセージを生成中...
                        </>
                    ) : (
                        "パーソナライズされたメッセージを受け取る"
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Dialog open={!!generatedMessage} onOpenChange={() => setGeneratedMessage(null)}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle className="font-headline text-2xl text-primary">ご関心をお寄せいただき、ありがとうございます！</DialogTitle>
            <DialogDescription>
              ご入力いただいた情報に基づき、SBTCがあなた様にご提供できる価値をまとめました。
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 space-y-4 rounded-md border p-4 text-sm">
            {generatedMessage?.split('\n').map((line, index) => (
                <p key={index}>{line}</p>
            ))}
          </div>
          <div className="flex justify-end pt-4">
              <Button onClick={() => setGeneratedMessage(null)}>閉じる</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
