// src/ai/flows/personalized-outreach.ts
'use server';

/**
 * @fileOverview A flow for generating personalized outreach messages to potential SBTC members.
 *
 * - generatePersonalizedMessage - A function that generates a personalized message based on the member's background and interests.
 * - PersonalizedOutreachInput - The input type for the generatePersonalizedMessage function.
 * - PersonalizedOutreachOutput - The return type for the generatePersonalizedMessage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedOutreachInputSchema = z.object({
  background: z.string().describe('The background of the potential member.'),
  interests: z.string().describe('The interests of the potential member.'),
});
export type PersonalizedOutreachInput = z.infer<typeof PersonalizedOutreachInputSchema>;

const PersonalizedOutreachOutputSchema = z.object({
  message: z.string().describe('The personalized outreach message.'),
});
export type PersonalizedOutreachOutput = z.infer<typeof PersonalizedOutreachOutputSchema>;

export async function generatePersonalizedMessage(
  input: PersonalizedOutreachInput
): Promise<PersonalizedOutreachOutput> {
  return personalizedOutreachFlow(input);
}

const personalizedOutreachPrompt = ai.definePrompt({
  name: 'personalizedOutreachPrompt',
  input: {schema: PersonalizedOutreachInputSchema},
  output: {schema: PersonalizedOutreachOutputSchema},
  prompt: `You are an AI assistant tasked with generating personalized outreach messages for potential members of the SportsBizTech Consortium (SBTC).

  The SBTC is a "co-creation platform" that aims to bring together large companies, startups, leagues, clubs, athletes, and universities/research institutions to create an ecosystem that can compete with the global sports business market.

  The goal of the outreach message is to highlight the benefits of joining SBTC based on the potential member's background and interests, so they can quickly understand the value proposition and be more inclined to join.

  Generate a personalized message based on the following information:

  Background: {{{background}}}
  Interests: {{{interests}}}

  The message should:
  - Be concise and engaging.
  - Highlight the specific benefits of joining SBTC for this individual.
  - Explain how their background and interests align with the SBTC's mission.
  - Encourage them to learn more and express interest in joining.
`,
});

const personalizedOutreachFlow = ai.defineFlow(
  {
    name: 'personalizedOutreachFlow',
    inputSchema: PersonalizedOutreachInputSchema,
    outputSchema: PersonalizedOutreachOutputSchema,
  },
  async input => {
    const {output} = await personalizedOutreachPrompt(input);
    return output!;
  }
);
