
Natural Language Generation (NLG) is the subfield of natural language processing concerned with producing coherent, contextually appropriate human-readable text from structured data, internal representations, or prompts. It encompasses content determination, sentence planning, and surface realisation, and is today dominated by neural language models that generate text token by token. NLG is the productive counterpart to natural language understanding within end-to-end conversational and generative systems.

- [[Natural Language Generation]] produces fluent human-readable text from data or prompts, forming the generative half of [[Natural Language Processing]]. Modern NLG is driven by the [[Large Language Model]] and the [[Transformer]] architecture, and it underpins [[Text Generation]] and [[Content Creation]].
- ### Overview
- Classical NLG pipelines were modular: a content-determination stage decided what to say, a sentence planner organised it, and a surface realiser produced grammatical text. These stages were largely rule-based or template-driven.
- The neural era collapsed the pipeline into end-to-end sequence generation. Autoregressive models predict each next token conditioned on prior context, learning grammar, style, and world knowledge implicitly from large corpora.
- NLG now spans short structured outputs, such as data-to-text reports, through open-ended long-form generation in assistants and creative tools.
- ### Mechanisms
- Autoregressive decoding: the model emits one token at a time, conditioning on all previously generated tokens.
- Sampling strategies: temperature, top-k, and nucleus sampling trade off fluency against diversity.
- Conditioning: prompts, retrieved context, or structured inputs steer the output, linking to [[Prompt Engineering]].
- Evaluation: automatic metrics and human judgement assess fluency, faithfulness, and relevance.
- ### Applications
- Conversational assistants and the [[Chatbot]] and [[Dialogue System]] families.
- Automated report and summary writing in [[Content Creation]] workflows.
- Output generation for [[Machine Translation]] and code synthesis.
- Creative writing, marketing copy, and data-to-text reporting.
- ### Provenance

