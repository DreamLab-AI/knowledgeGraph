
Slot filling is a natural language processing task in which a system extracts and populates predefined semantic fields (slots) from user utterances within a task-oriented dialogue context, enabling the system to gather the structured information required to fulfil a user request. It operates alongside intent classification to transform free-form text into actionable structured representations.

- ### Content
  - Slot filling as a formalised NLP task emerged from frame-based dialogue systems in the 1980s, where semantic frames defined the slots required for tasks such as flight booking (origin, destination, date, passenger class). Early systems used rule-based grammars and context-free parsing to fill slots. The ATIS (Air Travel Information System) benchmark corpus, introduced in the early 1990s, became the standard evaluation dataset for this paradigm, driving statistical approaches through the 2000s.

  - Modern slot filling systems treat the problem as a sequence labelling task, typically using BIO (Beginning-Inside-Outside) tagging schemes over tokenised utterances. Pre-trained language models such as BERT are fine-tuned jointly on intent detection and slot filling, producing state-of-the-art results on benchmarks including SNIPS, ATIS, and MultiWOZ. Joint modelling exploits the complementary signals between intent and slot labels, reducing error propagation in pipeline systems.

  - Slot filling is essential for voice assistants, customer service bots, and enterprise workflow automation where structured data must be extracted from conversational input. The extracted slot values populate database queries, API calls, or form submissions. In multi-turn settings, slot carry-over and slot correction across dialogue turns introduce additional complexity, requiring memory of prior utterances and robust handling of implicit references and anaphora.

  - In 2024-2025, slot filling is being transformed by large language models that can perform zero-shot or few-shot filling without task-specific training, using structured prompting or JSON-mode outputs. Challenges remain in low-resource languages, highly ambiguous slot types, and multi-intent utterances. Research is also extending slot filling to multimodal inputs and cross-lingual settings, driven by the globalisation of voice-enabled products.

