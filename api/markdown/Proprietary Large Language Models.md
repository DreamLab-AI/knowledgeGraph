- ### OntologyBlock
  id:: proprietary-large-language-models-ontology
  collapsed:: true
	- ontology:: true
	- source-domain:: ai
	- term-id:: AI-8050
	- preferred-term:: Proprietary Large Language Models
	- status:: active
	- public-access:: true
	- definition:: Commercial large language models developed and operated by private companies where source code, training strategies, model weights, and architecture details are kept secret. Access is provided through chatbots, applications, or APIs. Major proprietary LLMs include OpenAI's GPT-4/5, Anthropic's Claude 4, and Google's Gemini 2.5, competing on reasoning capabilities, multimodal processing, and context window size.
	- maturity:: complete
	- owl:class:: ai:ProprietaryLargeLanguageModels
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept
	- belongsToDomain:: [[Artificial Intelligence]]

## Major Proprietary LLMs (2025)

### OpenAI GPT Family
- **GPT-5**: Flagship model with full reasoning capabilities
- **GPT-4.1/4.1 mini/nano**: Latest non-reasoning models
- **GPT-4o**: Multimodal model with text, image, audio
- **Pricing**: ~$3-12 per 1M tokens for GPT-4.1

### Anthropic Claude
- **Claude Sonnet 4.5**: Top AI coding model
- **Claude Opus 4.1**: Hybrid reasoning model
- **Claude 3.5 Haiku**: Fast, efficient model
- **Context**: 200K tokens (1M beta on Sonnet 4)
- **Focus**: Helpful, honest, harmless, enterprise-safe

### Google Gemini
- **Gemini 2.5 Pro/Flash**: Tiered pricing, strong multimodal
- **Gemini 1.5 Pro**: 1M token context window
- **Pricing**: $1.25-2.50/1M input, $10-15/1M output
- **Integration**: Google Docs, Workspace, Cloud

### xAI Grok
- **Grok-4/4 Heavy**: Multi-agent capabilities
- **Grok-3**: 93.3% AIME benchmark
- **Unique**: Real-time X/Twitter data access

- ## Closed source Large Language Models: and [[AI Companies]]
	- ![1712680210067.jpeg](../assets/1712680210067_1712686278817_0.jpeg)
	- [LinkedIn post from Peter Gostev](https://www.linkedin.com/posts/peter-gostev_we-are-seeing-some-clear-categories-emerge-activity-7183501457684365314-iihT?)
	-
	- ### OpenAI & ChatGPT
		- 🟢 ChatGPT mobile [app revenue suggests](https://techcrunch.com/2023/10/09/chatgpts-mobile-app-hit-record-4-58m-in-revenue-last-month-but-growth-is-slowing/) around 250,000 users of their pro service **globally**. That is much lower than I thought... Let's assume only one in ten paying users install the app. That's still 2.5M users, which is about 0.003% of the eligible population.
		- They have released a [Prompt engineering
		- OpenAI API](https://platform.openai.com/docs/guides/prompt-engineering) guide.
		- I have a [[Prompt Engineering]] section too.
		- The GPT "store" / app experience.
		- A note about GPTs. They really are quite powerful. Think of them as an app builder, containing an AI agent, in a box, with [bidirectional internet](https://medium.com/@michaelev3/connecting-custom-gpts-to-google-apis-726dc2cdb54d), and the ability to build code. (such as which is an excellent coding assistant [Grimoire](https://chat.openai.com/g/g-n7Rs0IK86-grimoire)). - 🟢 They are the most advantage you can get for $20 a month, if you have tasks that you repeat, and you're not a coder. **
		- Note they now want $25 if you want to keep your data out of their training set.**
			- {{{tweet https://twitter.com/ConsensusNLP/status/1724872225780625419}}}
		- This is called "Actions" and is only in the GPTs or via the API (or both)
		- 🟢 Microsoft integrates OpenAI right across their suites under the [[Microsoft CoPilot]] brand.
		  id:: 659a922a-e819-4baa-b323-c07b3cf85290
		- This is pure speculation, but it feels like Microsoft might eventually effectively take over, being more experienced, mature, and canny.
		- The novel structural reason for OpenAI existing the way it did (a non-profit with a "fuse" for runaway AI) has been broken.
		- Keep an eye out for the remaining canary in the coal mine which is OpenAI declaring [[Artificial Intelligence]], isolating Microsoft from that element of their models. They might pretend [[Artificial Superintelligence]] for commercial reasons.
	- ### Anthropic
		- Smaller, unsure how much smaller, it's a fork of people from OpenAI, but has radically exceeded earning expectations.
		- [[Constitutional AI]], like Asimov's laws of robotics
		- 🟢 [anthropics/sleeper-agents-paper: Contains random samples referenced in the paper "Sleeper Agents: Training Robustly Deceptive LLMs that Persist Through Safety Training". (github.com)](https://github.com/anthropics/sleeper-agents-paper)
		- {{twitter https://twitter.com/natfriedman/status/1777739863678386268/photo/1}}
	- ### Grok from Musk is pretty bad, but..
		- People haven't appreciated the strength of the business model Musk has
		- His is the only unified language and vision company in the world at this scale that can handle real world interactions.
	- ### Google Gemini
		- Incredible million token context and [[Multimodal]]
		- Not as capable as Claude3 but writes more human readable text than ChatGPT
		- [Gemini 1.5 and Google’s Nature – Stratechery by Ben Thompson](https://stratechery.com/2024/gemini-1-5-and-googles-nature/)
		- For me the interesting one is Nano, which is natively multimodal (4 bit 1-3B) and fits in a phone.
		- I think we'll look back at Nano as having signalled the future.
	- ### Salesforce
		- Slack. Don't discount Salesforce. Again, if you use slack, stick with this for now. **All** of the tools are coming to **all** of the platforms.
- # Actionable LLM advice:
	- Stick with the tools in the ecosystem you have already bought, until you need more. If your data is in Google use Google. If it's in Microsoft use Microsoft. If you use Runway / Mid journey then please do continue.
	- The edge isn't between vendors, it's a deep understanding of what problems you need it to solve, and the disposition of your data, or business technical edge.
	- Importance of unique business strategies over proprietary technology. [Harvard Business Review](https://hbr.org/2023/12/strategy-not-technology-is-the-key-to-winning-with-genai).
		- Necessity for firms to create value beyond technical features.
		- Focus on building strong brands and exceptional customer experiences.
		- Significance of strategic human resource management, including talent retention and skill development.
	- Sort your data management protocols out. Nobody wants to, but things are getting confusing. For me that's as simple as logseq and github.
		- Nearly 10,000 data points that reach well into active code and research. (graph).
	- The OpenAI kerfuffle last year has alerted companies to the fragility of single providers.
	- Consider how business critical the tooling is becoming over time for your business. Have a **NOW / NEXT / LATER** plan. Have and understand options but don't waste too much time exploring them, focus is king.
	- There are now many cloud middleware solutions that will handle the prompt realignment, load balancing, pricing etc across the whole [[Proprietary Large Language Models]] [[landscape]].
	- I think open source will win in the end because SO many people in the world will be forced and/or want not to use these few hyper centralised providers. **This is a contentious opinion**.
	- {{embed ((659fe0be-a52a-42ef-8f50-73695a802945))}}
	- https://www.reddit.com/r/StableDiffusion/comments/18tqyn4/midjourney_v60_vs_sdxl_exact_same_prompts_using/
	- If your business needs custom **models** then still do as much with off the shelf as you can. You need to be mindful of ethics and the law. This is non-trivial. The team here can help.
	- Regardless of the scale and technical proficiency of your team, these tools, especially the open source ones, can provide a rapid way to ask your customers **"is this what you mean?"**. People are bad at specifying, but good at instinctive validation. You can then go and manufacture a properly optimised and legally compliant toolchain.
- This is a [[presentation]] side, and the next slide is [[Proprietary Image Generation]]


### Relationships
- is-subclass-of:: [[Large language models]], [[Artificial Intelligence]]
- related-to:: [[NaturalLanguageProcessing]], [[AttentionMechanism]], [[Transformer Architecture]]
- includes:: [[GPT-4]], [[Claude]], [[Gemini]], [[Grok]]
- competes-with:: [[Open Source LLMs]], [[LLaMA]], [[Mistral]]
- enables:: [[Conversational AI]], [[Code Generation]], [[Content Creation]]

## Pricing Landscape (2025)

| Provider | Model | Input (1M tokens) | Output (1M tokens) |
|----------|-------|-------------------|-------------------|
| OpenAI | GPT-4.1 | $3-12 | $12-48 |
| OpenAI | GPT-4o mini | $0.15 | $0.60 |
| Anthropic | Claude 3.5 Sonnet | $3 | $15 |
| Google | Gemini 2.5 Pro | $1.25-2.50 | $10-15 |
| DeepSeek | R1 | $0.55 | $2.19 |

## Selection Guidelines

- **General conversational AI**: GPT-4o, ChatGPT
- **Enterprise with ethics focus**: Claude 4
- **Multimodal and Google integration**: Gemini 2.5
- **Coding and reasoning**: Claude Sonnet 4.5, GPT-5
- **Cost-sensitive**: Open-source alternatives (LLaMA, Mistral, DeepSeek)

## Metadata

- **Last Updated**: 2025-12-29
- **Review Status**: Enriched from research
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable
- **Sources**: [Promptitude](https://www.promptitude.io/post/ultimate-2025-ai-language-models-comparison-gpt5-gpt-4-claude-gemini-sonar-more), [Shakudo](https://www.shakudo.io/blog/top-9-large-language-models), [Vellum](https://www.vellum.ai/llm-leaderboard)