'use server';

import { generatePersonalizedMessage } from "@/ai/flows/personalized-outreach";

export async function generateMessageAction(data: { background: string; interests: string; }) {
    try {
        const result = await generatePersonalizedMessage(data);
        return { success: true, data: result };
    } catch (error) {
        console.error("AI message generation failed:", error);
        return { success: false, error: "メッセージの生成に失敗しました。後でもう一度お試しください。" };
    }
}
