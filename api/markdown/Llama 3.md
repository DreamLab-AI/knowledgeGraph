- ### OntologyBlock
  id:: llama-3-ontology
  collapsed:: true
	- ontology:: true
	- source-domain:: ai
	- term-id:: AI-8039
	- preferred-term:: Llama 3
	- definition:: Llama 3 is Meta's family of open-weight large language models released in April 2024, with Llama 3.1 (July 2024) introducing the 405B parameter variant - the world's largest openly available foundation model rivalling top closed-source AI in general knowledge, mathematics, tool use, and multilingual translation across 8 languages with 128K context window. Trained on over 15 trillion tokens using 16,000 H100 GPUs with a standard decoder-only Transformer architecture.
	- status:: active
	- maturity:: reviewed
	- public-access:: true
	- belongsToDomain:: [[Artificial Intelligence]]
	- owl:class:: ai:Llama3


### Relationships
- is-subclass-of:: [[Large Language Models]]
- developedBy:: [[Meta]]
- relatedTo:: [[Open Source]]
- competesWith:: [[GPT-4]]
- competesWith:: [[Claude]]
- competesWith:: [[Gemini]]
- succeededBy:: [[Llama 4]]
public:: true

- ## Llama 3 overview
	- Meta (formerly Facebook) has recently released LLaMA-3,  a series of foundational large language models (LLMs) that aim to advance AI research while remaining more accessible in terms of computational requirements.
	- ### Performance
		- LLaMA-3 models demonstrate competitive performance on various language modeling tasks, showcasing significant improvements over previous open weights models.
		- Integrated free across their social media platforms
		- Fast image generation, can be fine tunes for creatives.
		- [Introducing New AI Experiences Across Our Family of Apps and Devices | Meta (fb.com)](https://about.fb.com/news/2023/09/introducing-ai-powered-assistants-characters-and-creative-tools/)
		- [What’s up with Llama 3? Arena data analysis | LMSYS Org](https://lmsys.org/blog/2024-05-08-llama3/)
		- ![](https://lmsys.org/images/blog/llama3/topic_win_rate.png){:width 500}
		-
	- ### Efficiency
		- LLaMA-3 models are notably smaller than comparable LLMs. They were more efficient to train.
		- Sizes are currently:
			- 7B parameters, outperforming the previous 70B models on some metrics
			- 70B parameters, approaching or exceeding some closed source online models
			- 400B parameters (still in training), expected to outperform SOTA models
		- This efficiency allows them to run on less powerful hardware, broadening accessibility for researchers.
			- They can be fine tuned more easily.
	- ### Bias and Safety
		- Meta has taken active steps to assess and mitigate potential biases and harmful outputs. This is usually "undone" by the community at some stage for performance gains, raising important questions.
	- ### Open-Source Focus
		- Meta's release of the LLaMA-3 weights and code under a non-commercial license fosters transparency and encourages research collaboration.
	- ![1713640453190.jpeg](../assets/1713640453190_1713644111547_0.jpeg)
- ## Acceptable Use Policy
	- **Open Source Controversy**
		- Llama 3 is claimed to be open source but faces criticisms.
		- Licence restrictions may not meet the [[Open Source]] Initiative's definition.
		- Restrictions on free use, modification, and redistribution.
	- **Acceptable Use Policy (AUP)**
		- Applicable to Llama 2, but also underpins Llama 3 license.
		- Prohibits:
			- Law violations.
			- Infringement of third-party rights.
			- Misuse of sensitive information.
		- Emphasizes compliance across jurisdictions.
		- Lacks specifics on consequences for policy violations.
	- **Intellectual Property Rights**
		- Grants non-exclusive, worldwide, non-transferable, royalty-free license.
		- Users can utilize and modify Llama Materials under conditions.
		- Meta retains ownership of foundational technology and Llama Materials.
		- Licensees own derivative works but with commercial use restrictions.
	- **Legal Implications**
		- Termination of license if licensee sues Meta for IP infringement.
		- Mandatory indemnification of Meta against third-party claims related to user's use of Llama.
	- **License and AUP Dynamics**
		- Unilateral updates to AUP by Meta.
		- Compliance with extensive laws and regulations required.
		- Significant operational constraints implied.
		- Liability limitations and warranty disclaimers shift risk to users.
## Model Sizes and Versions
- **Llama 3** (April 2024): 8B and 70B parameters, 8K context
- **Llama 3.1** (July 2024): 8B, 70B, and 405B parameters, 128K context
- **Llama 3.3** (December 2024): 70B delivering 405B-level performance at lower cost

## Benchmark Performance
- MMLU (5-shot): 87.3% matching GPT-4-Turbo (86.5%), Claude 3 Opus (86.8%), Gemini 1.5 Pro (85.9%)
- Multilingual support: English, German, French, Italian, Portuguese, Hindi, Spanish, Thai

## Fine-Tunes of Merit
- [cognitivecomputations/dolphin-2.9-llama3-8b](https://huggingface.co/cognitivecomputations/dolphin-2.9-llama3-8b)

## Metadata

- **Last Updated**: 2025-12-29
- **Review Status**: Enriched with 2025 research context
- **Verification**: Technical documentation verified
- **Regional Context**: UK/North England where applicable