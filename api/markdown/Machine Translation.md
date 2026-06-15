public:: true

# Machine Translation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cee607f39706c74c9af614cff81bbb3831a05c69c7ce2b6af5bfc7f685f8fc7a",
  "@type": "Page",
  "vc:slug": "machine-translation",
  "title": "Machine Translation",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:chain-of-thought",
      "vc:label": "Chain of Thought"
    },
    {
      "@id": "urn:visionflow:linked:sequence-to-sequence-model",
      "vc:label": "Sequence-to-Sequence Model"
    },
    {
      "@id": "urn:visionflow:owl:class:anthropic-claude",
      "vc:label": "Anthropic Claude"
    },
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence",
      "vc:label": "ArtificialIntelligenceDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:diagrams-as-code",
      "vc:label": "Diagrams as Code"
    },
    {
      "@id": "urn:visionflow:owl:class:gemini",
      "vc:label": "Gemini"
    },
    {
      "@id": "urn:visionflow:owl:class:google",
      "vc:label": "Google"
    },
    {
      "@id": "urn:visionflow:owl:class:large-language-models",
      "vc:label": "Large Language Models"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse-ontology",
      "vc:label": "Metaverse Ontology"
    },
    {
      "@id": "urn:visionflow:owl:class:natural-language-processing",
      "vc:label": "Natural Language Processing"
    },
    {
      "@id": "urn:visionflow:owl:class:prompt-engineering",
      "vc:label": "Prompt Engineering"
    },
    {
      "@id": "urn:visionflow:owl:class:transformer",
      "vc:label": "Transformer"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0367"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Machine Translation"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:machine-translation",
  "@type": "Class",
  "label": "Machine Translation",
  "definition": "Machine Translation is the automated translation of text or speech from one natural language to another using neural network models, particularly transformer-based sequence-to-sequence architectures. Modern neural MT systems achieve near-human quality through pre-training on massive multilingual corpora, cross-lingual transfer learning, and attention mechanisms that model long-range linguistic dependencies.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": {
    "@id": "urn:ngm:class:natural-language-processing",
    "label": "Natural Language Processing"
  },
  "quality": 0.65,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:neural-machine-translation",
      "label": "Neural Machine Translation"
    },
    {
      "@id": "urn:ngm:class:automated-translation",
      "label": "Automated Translation"
    },
    {
      "@id": "urn:ngm:class:computational-translation",
      "label": "Computational Translation"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:natural-language-processing",
        "label": "Natural Language Processing"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:encoder-decoder-architecture",
        "label": "Encoder Decoder Architecture"
      },
      {
        "@id": "urn:ngm:class:attention-mechanism",
        "label": "Attention Mechanism"
      },
      {
        "@id": "urn:ngm:class:beam-search-decoding",
        "label": "Beam Search Decoding"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:language-modeling",
        "label": "Language Modeling"
      },
      {
        "@id": "urn:ngm:class:training-data",
        "label": "Training Data"
      },
      {
        "@id": "urn:ngm:class:parallel-corpus",
        "label": "Multilingual Corpus"
      },
      {
        "@id": "urn:ngm:class:tokenisation",
        "label": "Tokenisation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:transformer",
        "label": "Transformer"
      },
      {
        "@id": "urn:ngm:class:large-language-models",
        "label": "Large Language Models"
      },
      {
        "@id": "urn:ngm:class:transfer-learning",
        "label": "Cross-Lingual Transfer Learning"
      },
      {
        "@id": "urn:ngm:class:byte-pair-encoding",
        "label": "Byte Pair Encoding"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:localisation",
        "label": "Document Localisation"
      },
      {
        "@id": "urn:ngm:class:real-time-interpretation",
        "label": "Real-Time Interpretation"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:parallel-corpus",
        "label": "Parallel Corpora"
      },
      {
        "@id": "urn:ngm:class:word-embeddings",
        "label": "Word Embeddings"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:sequence-to-sequence-model",
        "label": "Sequence-to-Sequence Model"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:translation",
        "label": "Human Translation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:language-translation",
        "label": "Language Translation"
      },
      {
        "@id": "urn:ngm:class:transfer-learning",
        "label": "Transfer Learning"
      },
      {
        "@id": "urn:ngm:class:speech-recognition",
        "label": "Speech Recognition"
      },
      {
        "@id": "urn:ngm:class:bleu-score",
        "label": "BLEU Score"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:metaverse-interoperability",
        "label": "Metaverse Interoperability"
      },
      {
        "@id": "urn:ngm:class:protocol-translation",
        "label": "Protocol Translation"
      }
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:machine-translation:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:cee607f39706c74c9af614cff81bbb3831a05c69c7ce2b6af5bfc7f685f8fc7a"
  },
  "vc:resolutions": [
    {
      "raw": "[[Chain of Thought]]",
      "resolved": "urn:visionflow:linked:chain-of-thought",
      "kind": "StubLink"
    },
    {
      "raw": "[[Sequence-to-Sequence Model]]",
      "resolved": "urn:visionflow:linked:sequence-to-sequence-model",
      "kind": "StubLink"
    },
    {
      "raw": "[[Constitutional AI Language Model Family]]",
      "resolved": "urn:visionflow:owl:class:anthropic-claude",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ArtificialIntelligenceDomain]]",
      "resolved": "urn:visionflow:owl:class:artificial-intelligence",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Diagrams as Code]]",
      "resolved": "urn:visionflow:owl:class:diagrams-as-code",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Gemini Multimodal Language Model]]",
      "resolved": "urn:visionflow:owl:class:gemini",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Google AI Technology Corporation]]",
      "resolved": "urn:visionflow:owl:class:google",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Large Language Models]]",
      "resolved": "urn:visionflow:owl:class:large-language-models",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Metaverse Ontology]]",
      "resolved": "urn:visionflow:owl:class:metaverse-ontology",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Natural Language Processing]]",
      "resolved": "urn:visionflow:owl:class:natural-language-processing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Prompt Engineering]]",
      "resolved": "urn:visionflow:owl:class:prompt-engineering",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Transformer]]",
      "resolved": "urn:visionflow:owl:class:transformer",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Machine Translation is the automated translation of text or speech from one natural language to another using neural network models, particularly transformer-based sequence-to-sequence architectures. Modern neural machine translation systems (Google Translate, DeepL, NLLB) achieve near-human translation quality through pre-training on massive multilingual corpora, attention mechanisms, and cross-lingual transfer learning.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:MachineTranslation
  - owl-role:: Concept
  - belongs-to-domain:: [[ArtificialIntelligenceDomain]]

- ### Relationships
  - Uses [[Attention Mechanism]]
  - Uses [[Encoder Decoder Architecture]]
  - Requires [[Language Modeling]]
  - Requires [[Training Data]]
  - Related To [[Language Translation]]
  - Related To [[Transfer Learning]]

- ### Content
  - Machine Translation is the automated translation of text or speech from one natural language to another using neural network models, particularly transformer-based sequence-to-sequence architectures. Modern neural machine translation systems (Google Translate, DeepL, NLLB) achieve near-human translation quality through pre-training on massive multilingual corpora, attention mechanisms, and cross-lingual transfer learning.

						- ### Machine-Machine Translation
							- Converting data and protocols between different platforms.

  - #### Language Tasks:
		- Both models handle translation and grammar correction competently.

  - ### ChatGPT (and whatever Siri becomes) is coming to watches
		- **Description**: A concept of smartwatches integrated with AI for interactive and adaptive communication.
		- **Features**:
			- Voice and text-based interaction with AI
			- Integration with various apps and services
			- Notifications, reminders, and AI-driven suggestions
			- Continuous updates and learning capabilities
		- **AI Aspect**: Incorporates a conversational AI model for real-time communication and assistance.
		- [Translation earbuds |Translator | language translation device – Mymanu®](https://mymanu.com/) -

  - ## Samsung Galaxy S24 Series Local AI Inferencing Features
		- Live Translate for real-time voice and text translations directly within the phone app, functioning without the need for an internet connection.
		- Chat Assist in Samsung Keyboard for real-time translation in 13 languages, enabling on-device translation for messages.
		- Android Auto's capability to summarize messages and suggest relevant replies, powered by on-device AI, for safer driving experiences.
		- Note Assist for generating AI-powered summaries of notes taken within Samsung Notes, improving organization and retrieval of information.
		- Transcript Assist uses on-device AI for transcribing and summarizing voice recordings, identifying different speakers and translating content.
		- Edit Suggestion feature that uses on-device AI to suggest photo edits, enhancing the photography experience without the need for server processing.
		- Generative Edit for intelligently filling in parts of an image background, providing users with AI-powered content creation tools.

		- ##### 1️⃣ Support Vector Machines (SVM)
		- **Description**: Uses hyperplanes for classification.
		- **Explain**: Think of drawing lines to separate different types of objects.
		- **Paper**: [A comprehensive survey on support vector machine classification](https://www.sciencedirect.com/science/article/pii/S0925231220307153?)

						- ### Machine-Machine Translation
							- Converting data and protocols between different platforms.

  - #### Language Tasks:
		- Both models handle translation and grammar correction competently.

  - ### ChatGPT (and whatever Siri becomes) is coming to watches
		- **Description**: A concept of smartwatches integrated with AI for interactive and adaptive communication.
		- **Features**:
			- Voice and text-based interaction with AI
			- Integration with various apps and services
			- Notifications, reminders, and AI-driven suggestions
			- Continuous updates and learning capabilities
		- **AI Aspect**: Incorporates a conversational AI model for real-time communication and assistance.
		- [Translation earbuds |Translator | language translation device – Mymanu®](https://mymanu.com/) -

  - ## Samsung Galaxy S24 Series Local AI Inferencing Features
		- Live Translate for real-time voice and text translations directly within the phone app, functioning without the need for an internet connection.
		- Chat Assist in Samsung Keyboard for real-time translation in 13 languages, enabling on-device translation for messages.
		- Android Auto's capability to summarize messages and suggest relevant replies, powered by on-device AI, for safer driving experiences.
		- Note Assist for generating AI-powered summaries of notes taken within Samsung Notes, improving organization and retrieval of information.
		- Transcript Assist uses on-device AI for transcribing and summarizing voice recordings, identifying different speakers and translating content.
		- Edit Suggestion feature that uses on-device AI to suggest photo edits, enhancing the photography experience without the need for server processing.
		- Generative Edit for intelligently filling in parts of an image background, providing users with AI-powered content creation tools.

		- ##### 1️⃣ Support Vector Machines (SVM)
		- **Description**: Uses hyperplanes for classification.
		- **Explain**: Think of drawing lines to separate different types of objects.
		- **Paper**: [A comprehensive survey on support vector machine classification](https://www.sciencedirect.com/science/article/pii/S0925231220307153?)

						- ### Machine-Machine Translation
							- Converting data and protocols between different platforms.

						- ### PKI Infrastructure
							- Integrating public key infrastructure for secure communication and transactions.
								- Configuring privacy settings, accessibility options, and other preferences.
								- Utilizing the PrivacySetting entity from the ontology.
								- Example Linked-JSON snippet:
									    "@type": [
									      "narrativegoldmine:Class",
									      "Linked-JSON:Class",
									      {
									        "@value": "Represents an agent's privacy preferences within the metaverse."
									      }
      A --> D(Adaptable Governance)

      B --> E(Standardized Protocols)
      B --> F(Ontologies)
      B --> G(Translation Mechanisms)

      C --> H(Self-Sovereign Identity)
      C --> I(Privacy-Preserving Technologies)
      C --> J(User-Centric Governance)

      D --> K(AI-Driven Governance Models)
      D --> L(Adapts to Changing Needs)
      D --> M(User Preference Driven)

      N[Metaverse Instances]
      N --> O(Omniverse Digital Twin)
      N --> P(Roblox Event)
      N --> Q(Unreal-based MMORPG)
      N --> R(Global Business Conference)
      N --> S(Feminist Global Advocacy and Support)

      T[Scene Agents]
      T --> U(AI Governance)
      T --> V(Reputation Management)
      T --> W(Environmental Conditions)
      T --> X(Virtual Economy)

      Y[Transfer Agents]
      Y --> Z(Machine-Machine Translation)
      Y --> AA(Value Translation)
      Y --> AB(Digital Object Variations)
      Y --> AC(Safeguarding)
      Y --> AD(Law Enforcement Handshake)
      Y --> AE(PKI Infrastructure)

      AF[Onboarding Agents]
      AF --> AG(Preference Setup)
      AF --> AH(Living Contract Formation)

      AI[Jurisdictional/Legal Agents]
      AI --> AJ(Monitoring Network Activity)
      AI --> AK(Providing Transparency)
      AI --> AL(Enforcing Legal Standards)

      AM[Interfaces and Interactions]
      AM --> AN(Inter-Instance Communication)
      AM --> AO(Value Exchange)
      participant AIAgent
      participant Nostr
      participant Bitcoin
      participant Lightning
      participant RGB
      participant NosDAV
      participant GitHub
      participant Logseq
      participant SolidLite
      participant LinkedJSON
      participant Omniverse
      participant USD

      User->>+Logseq: Define agent tasks and rewards
      Logseq->>+GitHub: Store agent configurations
      GitHub->>+AIAgent: Trigger agent update
      AIAgent->>+Nostr: Subscribe to relevant events
      Nostr->>+AIAgent: Deliver relevant events
      AIAgent->>+Logseq: Retrieve task configurations
      Logseq->>+AIAgent: Provide task configurations
      AIAgent->>+NosDAV: Retrieve required data
      NosDAV->>+AIAgent: Provide requested data
      AIAgent->>+RGB: Request single-use seal
      RGB->>+AIAgent: Provide single-use seal
      Nostr->>+User: Deliver interaction confirmation
  ```

		- ##### 1️⃣ Support Vector Machines (SVM)
		- **Description**: Uses hyperplanes for classification.
		- **Explain**: Think of drawing lines to separate different types of objects.
		- **Paper**: [A comprehensive survey on support vector machine classification](https://www.sciencedirect.com/science/article/pii/S0925231220307153?)

						- ### Machine-Machine Translation
							- Converting data and protocols between different platforms.

						- ### PKI Infrastructure
								- Utilizing the PrivacySetting entity from the ontology.
								- Example Linked-JSON snippet:

      T[Scene Agents]
      T --> U(AI Governance)
      T --> V(Reputation Management)
      T --> W(Environmental Conditions)
      T --> X(Virtual Economy)

      Y[Transfer Agents]
      Y --> Z(Machine-Machine Translation)
      Y --> AA(Value Translation)
      Y --> AB(Digital Object Variations)
      Y --> AC(Safeguarding)
      Y --> AD(Law Enforcement Handshake)
      Y --> AE(PKI Infrastructure)

      AF[Onboarding Agents]
      AF --> AG(Preference Setup)
      AF --> AH(Living Contract Formation)

      AI[Jurisdictional/Legal Agents]
      AI --> AJ(Monitoring Network Activity)
      AI --> AK(Providing Transparency)
      AI --> AL(Enforcing Legal Standards)

      AM[Interfaces and Interactions]
      AM --> AN(Inter-Instance Communication)

		- ##### 1️⃣ Support Vector Machines (SVM)
		- **Description**: Uses hyperplanes for classification.
		- **Explain**: Think of drawing lines to separate different types of objects.
		- **Paper**: [A comprehensive survey on support vector machine classification](https://www.sciencedirect.com/science/article/pii/S0925231220307153?)

  - ### Evaluation
		- [SeamlessM4T by Facebook Research](https://github.com/facebookresearch/seamless_communication#seamlessm4t)
		- *An innovative project aimed at enhancing multilingual translation, showcasing efforts to bridge language barriers and improve communication globally.*

  - ## Billionaires are monetising users
  - Advertising is a "Rube Goldberg Machine" that has twisted incentives and is no longer fully scrutable.
		- [The Agentic Web and Original Sin – Stratechery by Ben Thompson](https://stratechery.com/2025/the-agentic-web-and-original-sin/)
		- [You Think You Know How Misinformation Spreads? Welcome to the Hellhole of Programmatic Advertising | WIRED](https://www.wired.com/story/death-of-truth-misinformation-advertising/)

  - ## Billionaires are monetising users
  - Advertising is a "Rube Goldberg Machine" that has twisted incentives and is no longer fully scrutable.
		- [The Agentic Web and Original Sin – Stratechery by Ben Thompson](https://stratechery.com/2025/the-agentic-web-and-original-sin/)
		- [You Think You Know How Misinformation Spreads? Welcome to the Hellhole of Programmatic Advertising | WIRED](https://www.wired.com/story/death-of-truth-misinformation-advertising/)

  - ### Methodology
  - In this experiment I used a combination of Claude 3 Opus, ChatGPT4, and Google Gemini Advanced 1.5.
  - [[Google AI Technology Corporation]] [[Gemini Multimodal Language Model]] 1.5 did the heavy lifting here but Claude 3 Opus did the final pass and expanded the text, which I then adapted.
  - I uploaded the public pages of this knowledge graph, which represent a decent proportion of my thinking into the million token context of Gemini.
  - This was how I started the conversation with Gemini. The full text is available on request but it is non-deterministic and quite messy, representing the way I interact with these conversational systems more than a systematic approach.
		- I build [[Chain of Thought]] scaffolds in [[Large Language Models]] using [[Diagrams as Code]], and this methodology  reflects my [[Prompt Engineering]] approach.
			- Current large language models benefit greatly from being asked to create diagrams as code, in a guided manner.
			- These complex code structures can convey meaning and linkages, creating knowledge graphs which implicitly contain their own logical checks.
			- Human comprehension is radically increased during the co-creations.
			- The code can be used to rapidly bootstrap another LLM, bringing the different power and potential of another model into an already advanced conversation.
		- Systemising this is planned work for later in the research arc.
		- ```text 
		  I would like to set this discussion diagrammatically in a wider context and scope. 
		  Let's decide that this ontology that we've been working on represents one notional domain of a wider connected digital society, 
		  with it's emergent human/AI social constructs, preferences, compliances, audiences, jurisdictions, opt in rule sets etc. 
		  Here's a way to start that conversation with you.

		  - Make a diagram for the metaverse mycelium
		  	- onboarding agents at the interactive edge assist human actors in setting up their preferences, tolerances, 
		      limit choices (for instance but not limited to enforcing proximity of their avatar to others as a safeguarding feature). 
		      These interactions would be cryptographically verified between human and AI actors, with a single use seal based 
		      global commitment capability. The decisions at this onboarding stage would start to inform a living contract of sorts, 
		      which might (but would likely not) have consequence in law. This should be part of the T&C of the system.
		  	- Scene agents with a global view of a metaverse / space instance. These would handle access, governance, 
		      in group cryptography, warnings, reputation management, real time language translation, enforcement and recording 
		      and later auditable destruction of any and all interactions within it's scope.
		  	- Such scene AI agents should constantly make available an up-to-date scene ontology (like the one we have been working on) 
		      in machine and human readable Linked-JSON, reflecting the settings negotiated with the user base of the space. This knowledge 
		      graph and ontology feeds out to transfer agents
		  	- Transfer agents occupy the interstices between worlds and handle machine-machine translation, protocol translation, 
		      ingress, routing, egress, web2 and messenger interfaces, agentic routing (user agents can be given access to shopping web etc), 
		      reputation transfer and adaptation, token, digital object transfer and variations, and money swaps. 
		      These mycelial connective agents also communicate through pass through and translation with jurisdictional legal and enforcement 
		      agents and human on the edge, passing public linked-json schema and appropriate minimal metadata.
		  	- This Human and machine readable Linked-JSON automatic arbitration between end points, automatically translates at best 
		      effort between adjacent metaverse / space instances, each of which is providing a clear and automated obtological window into it's 
		      own world, choices, and user styles.
		  	- Jurisdictional / Legal agents on the edge (provide continuous access to non private human readable transfer agent Linked-JSON) 

		  This is an example of my thinking, can you see what I am trying to do here? 
		  Give me a detailed diagram as code mermaid which shows a representation of the ontology we have been working on, 
		  interfacing with the mycelial network of agents, value, other automated ontological representations of spaces 
		  (use an industrial co-working space, a feminist support group metaverse, fortnite, and roblox as examples). 
		  Add in the edge interfaces as we have discussed. I don't mind a large and detailed diagram but it should not be too 
		  crowded so choose an appropriate rendering platform and style and iterate until you are happy with the result we have engineered.  
		  	- first summarise back and explain your thinking. 
		      Try to identify shortfalls, extensions, expansions, important additional features, and justifications. 
		      Work methodically and step by step explaining the rationale, then make the diagram code.
		  ```
  - This was the final prompt to [[Constitutional AI Language Model Family]] 3 Opus, which merged in the previously developed [[Metaverse Ontology]] was lightly shaped into the output below.
		- ```text
		  this is the Linked-JSON ontology we made for the instance that is now called Omniverse digital twin. 
		  Use the detail therein to expand the leaf with this example, but in our new diagrammatic notation. 
		  You can also do this job using a totally new and more appropriate approach if that is advantageous
		  ```

  - ## Luma Dream Machine?
  - Luma Dream Machine is a browser-based AI video generator [developed by Luma Labs](https://www.creativebloq.com/ai/luma-dream-machine-makes-ai-video-open-to-all), a San Francisco-based startup. It allows users to generate short videos (around 5 seconds) by simply entering a text or image prompt.
		- **Free to Use**: Luma Dream Machine is free to try, with no waiting list or subscription required. Users get 30 free video generations per month.
		- **High-Quality Output**: The AI produces impressively clean and detailed videos, adhering to prompts accurately and generating relatively coherent motion.
		- **Fast Generation**: Videos are generated in around 2 minutes after entering the prompt.
		- **Consistent Subjects**: Characters and subjects appear consistent throughout the video, capable of expressing emotion better than many previous AI video models.

  - ## Billionaires are monetising users
  - Advertising is a "Rube Goldberg Machine" that has twisted incentives and is no longer fully scrutable.
		- [The Agentic Web and Original Sin – Stratechery by Ben Thompson](https://stratechery.com/2025/the-agentic-web-and-original-sin/)
		- [You Think You Know How Misinformation Spreads? Welcome to the Hellhole of Programmatic Advertising | WIRED](https://www.wired.com/story/death-of-truth-misinformation-advertising/)

  - ### Methodology
  - In this experiment I used a combination of Claude 3 Opus, ChatGPT4, and Google Gemini Advanced 1.5.
  - [[Google AI Technology Corporation]] [[Gemini Multimodal Language Model]] 1.5 did the heavy lifting here but Claude 3 Opus did the final pass and expanded the text, which I then adapted.
  - I uploaded the public pages of this knowledge graph, which represent a decent proportion of my thinking into the million token context of Gemini.
  - This was how I started the conversation with Gemini. The full text is available on request but it is non-deterministic and quite messy, representing the way I interact with these conversational systems more than a systematic approach.
		- I build [[Chain of Thought]] scaffolds in [[Large Language Models]] using [[Diagrams as Code]], and this methodology  reflects my [[Prompt Engineering]] approach.
			- Current large language models benefit greatly from being asked to create diagrams as code, in a guided manner.
			- These complex code structures can convey meaning and linkages, creating knowledge graphs which implicitly contain their own logical checks.
			- Human comprehension is radically increased during the co-creations.
			- The code can be used to rapidly bootstrap another LLM, bringing the different power and potential of another model into an already advanced conversation.
		- Systemising this is planned work for later in the research arc.
		- ```text 
		  I would like to set this discussion diagrammatically in a wider context and scope. 
		  Let's decide that this ontology that we've been working on represents one notional domain of a wider connected digital society, 
		  with it's emergent human/AI social constructs, preferences, compliances, audiences, jurisdictions, opt in rule sets etc. 
		  Here's a way to start that conversation with you.

		  - Make a diagram for the metaverse mycelium
		  	- onboarding agents at the interactive edge assist human actors in setting up their preferences, tolerances, 
		      limit choices (for instance but not limited to enforcing proximity of their avatar to others as a safeguarding feature). 
		      These interactions would be cryptographically verified between human and AI actors, with a single use seal based 
		      global commitment capability. The decisions at this onboarding stage would start to inform a living contract of sorts, 
		      which might (but would likely not) have consequence in law. This should be part of the T&C of the system.
		  	- Scene agents with a global view of a metaverse / space instance. These would handle access, governance, 
		      in group cryptography, warnings, reputation management, real time language translation, enforcement and recording 
		      and later auditable destruction of any and all interactions within it's scope.
		  	- Such scene AI agents should constantly make available an up-to-date scene ontology (like the one we have been working on) 
		      in machine and human readable Linked-JSON, reflecting the settings negotiated with the user base of the space. This knowledge 
		      graph and ontology feeds out to transfer agents
		  	- Transfer agents occupy the interstices between worlds and handle machine-machine translation, protocol translation, 
		      ingress, routing, egress, web2 and messenger interfaces, agentic routing (user agents can be given access to shopping web etc), 
		      reputation transfer and adaptation, token, digital object transfer and variations, and money swaps. 
		      These mycelial connective agents also communicate through pass through and translation with jurisdictional legal and enforcement 
		      agents and human on the edge, passing public linked-json schema and appropriate minimal metadata.
		  	- This Human and machine readable Linked-JSON automatic arbitration between end points, automatically translates at best 
		      effort between adjacent metaverse / space instances, each of which is providing a clear and automated obtological window into it's 
		      own world, choices, and user styles.
		  	- Jurisdictional / Legal agents on the edge (provide continuous access to non private human readable transfer agent Linked-JSON) 

		  This is an example of my thinking, can you see what I am trying to do here? 
		  Give me a detailed diagram as code mermaid which shows a representation of the ontology we have been working on, 
		  interfacing with the mycelial network of agents, value, other automated ontological representations of spaces 
		  (use an industrial co-working space, a feminist support group metaverse, fortnite, and roblox as examples). 
		  Add in the edge interfaces as we have discussed. I don't mind a large and detailed diagram but it should not be too 
		  crowded so choose an appropriate rendering platform and style and iterate until you are happy with the result we have engineered.  
		  	- first summarise back and explain your thinking. 
		      Try to identify shortfalls, extensions, expansions, important additional features, and justifications. 
		      Work methodically and step by step explaining the rationale, then make the diagram code.
		  ```
  - This was the final prompt to [[Constitutional AI Language Model Family]] 3 Opus, which merged in the previously developed [[Metaverse Ontology]] was lightly shaped into the output below.
		- ```text
		  this is the Linked-JSON ontology we made for the instance that is now called Omniverse digital twin. 
		  Use the detail therein to expand the leaf with this example, but in our new diagrammatic notation. 
		  You can also do this job using a totally new and more appropriate approach if that is advantageous
		  ```

  - ## Luma Dream Machine?
  - Luma Dream Machine is a browser-based AI video generator [developed by Luma Labs](https://www.creativebloq.com/ai/luma-dream-machine-makes-ai-video-open-to-all), a San Francisco-based startup. It allows users to generate short videos (around 5 seconds) by simply entering a text or image prompt.
		- **Free to Use**: Luma Dream Machine is free to try, with no waiting list or subscription required. Users get 30 free video generations per month.
		- **High-Quality Output**: The AI produces impressively clean and detailed videos, adhering to prompts accurately and generating relatively coherent motion.
		- **Fast Generation**: Videos are generated in around 2 minutes after entering the prompt.
		- **Consistent Subjects**: Characters and subjects appear consistent throughout the video, capable of expressing emotion better than many previous AI video models.

  ## Core Characteristics

  - **Neural Translation**: End-to-end neural sequence-to-sequence models
  - **Multi-Lingual Support**: Translation across 100+ language pairs
  - **Context-Aware**: Sentence and document-level context consideration
  - **Low-Resource Languages**: Transfer learning for under-resourced languages
  - **Domain Adaptation**: Specialisation for medical, legal, technical domains

  ## Relationships

  - **Subclass**: Natural Language Processing
  - **Related**: Transformer, Sequence-to-Sequence Models, Attention Mechanism
  - **Models**: Transformer, mBART, NLLB, M2M-100
  - **Applications**: Document Translation, Real-Time Interpretation, Localisation

  ## Key Literature

  1. Vaswani, A., et al. (2017). "Attention is all you need." *NeurIPS*, 5998-6008.

  2. Bahdanau, D., Cho, K., & Bengio, Y. (2015). "Neural machine translation by jointly learning to align and translate." *ICLR*.

  3. NLLB Team (2022). "No language left behind: Scaling human-centered machine translation." *arXiv:2207.04672*.

  ## See Also

  - [[Natural Language Processing]]
  - [[Transformer]]
  - [[Sequence-to-Sequence Model]]

  ## Metadata

  - **Domain**: Machine Translation, NLP
  - **Maturity**: Production deployment
  - ### Original Content
		- ```
  # Machine Translation

		  **Term ID**: AI-0367
		  **Category**: Domain Applications → NLP Applications
		  **Status**: Stable
		  **Last Updated**: 2025-10-27

		  ## Definition

		  Machine Translation is the automated translation of text or speech from one natural language to another using neural network models, particularly transformer-based sequence-to-sequence architectures. Modern neural machine translation systems (Google Translate, DeepL, NLLB) achieve near-human translation quality through pre-training on massive multilingual corpora, attention mechanisms, and cross-lingual transfer learning.

		  ## Core Characteristics

		  - **Neural Translation**: End-to-end neural sequence-to-sequence models
		  - **Multi-Lingual Support**: Translation across 100+ language pairs
		  - **Context-Aware**: Sentence and document-level context consideration
		  - **Low-Resource Languages**: Transfer learning for under-resourced languages
		  - **Domain Adaptation**: Specialisation for medical, legal, technical domains

		  ## Relationships

		  - **Subclass**: Natural Language Processing
		  - **Related**: Transformer, Sequence-to-Sequence Models, Attention Mechanism
		  - **Models**: Transformer, mBART, NLLB, M2M-100
		  - **Applications**: Document Translation, Real-Time Interpretation, Localisation

		  ## Key Literature

		  1. Vaswani, A., et al. (2017). "Attention is all you need." *NeurIPS*, 5998-6008.

		  2. Bahdanau, D., Cho, K., & Bengio, Y. (2015). "Neural machine translation by jointly learning to align and translate." *ICLR*.

		  3. NLLB Team (2022). "No language left behind: Scaling human-centered machine translation." *arXiv:2207.04672*.

		  ## See Also

		  - [[Natural Language Processing]]
		  - [[Transformer]]
		  - [[Sequence-to-Sequence Model]]

		  ## Metadata

		  - **Domain**: Machine Translation, NLP
		  - **Maturity**: Production deployment

		  ```

  ## Core Characteristics

  - **Neural Translation**: End-to-end neural sequence-to-sequence models
  - **Multi-Lingual Support**: Translation across 100+ language pairs
  - **Context-Aware**: Sentence and document-level context consideration
  - **Low-Resource Languages**: Transfer learning for under-resourced languages
  - **Domain Adaptation**: Specialisation for medical, legal, technical domains

  ## Relationships

  - **Subclass**: Natural Language Processing
  - **Related**: Transformer, Sequence-to-Sequence Models, Attention Mechanism
  - **Models**: Transformer, mBART, NLLB, M2M-100
  - **Applications**: Document Translation, Real-Time Interpretation, Localisation

  ## Key Literature

  1. Vaswani, A., et al. (2017). "Attention is all you need." *NeurIPS*, 5998-6008.

  2. Bahdanau, D., Cho, K., & Bengio, Y. (2015). "Neural machine translation by jointly learning to align and translate." *ICLR*.

  3. NLLB Team (2022). "No language left behind: Scaling human-centered machine translation." *arXiv:2207.04672*.

  ## See Also

  - [[Natural Language Processing]]
  - [[Transformer]]
  - [[Sequence-to-Sequence Model]]

  #### Current Landscape
  - Industry adoption and implementations
  - MT is widely integrated across sectors including technology, healthcare, legal, and customer service, facilitating multilingual communication and content localisation.
  - Leading platforms include Google Translate, DeepL, Microsoft Translator, and Meta’s NLLB, which support over 100 languages with varying degrees of accuracy.
  - Adaptive MT systems increasingly incorporate user feedback and domain-specific glossaries to enhance translation quality.
  - Notable organisations and platforms
  - Google, Meta, DeepL, and Microsoft are dominant players advancing MT capabilities.
  - Emerging startups and research labs continue to explore ontology-driven and context-aware MT enhancements.
  - UK and North England examples where relevant
  - The UK hosts several AI and NLP research centres contributing to MT advancements, such as the Alan Turing Institute in London and the University of Sheffield’s NLP group in South Yorkshire.
  - Sheffield’s NLP research includes work on domain adaptation and low-resource language translation, relevant to regional dialects and minority languages within the UK.
  - Industry collaborations in Manchester and Leeds focus on applying MT to healthcare and legal translation services, addressing local needs for multilingual communication.
  - Technical capabilities and limitations
  - Transformer-based MT models excel at capturing long-range dependencies and producing fluent translations.
  - Challenges remain in handling low-resource languages, idiomatic and culturally nuanced expressions, and specialised jargon.
  - Real-time speech translation has improved but still struggles with noisy environments and dialectal variation.
  - Ontology integration offers promise for improving semantic accuracy and contextual adaptation but is not yet mainstream.
  - Standards and frameworks
  - MT development aligns with standards such as ISO 24617 for semantic annotation and interoperability.
  - Open-source frameworks like OpenNMT and MarianNMT facilitate research and deployment.
  - Industry standards increasingly emphasise ethical AI use, data privacy, and transparency in MT systems.

  #### Academic Context
  - Brief contextual overview
  - Machine Translation (MT) is the automated conversion of text or speech from one natural language to another using computational models designed to approximate human translation quality.
  - The field has progressed from early rule-based and statistical methods to predominantly neural network-driven approaches, with transformer architectures now the state of the art due to their superior handling of context and fluency.
  - Key developments and current state
  - Modern MT systems, such as Google Translate, DeepL, Meta’s NLLB, and Microsoft Translator, employ large-scale pre-training on extensive multilingual corpora, attention mechanisms, and cross-lingual transfer learning.
  - These systems achieve near-human translation quality for many high-resource language pairs but continue to face challenges with low-resource languages, idiomatic expressions, and domain-specific terminology.
  - Adaptive machine translation, which learns from human corrections to improve over time, is an emerging enhancement to traditional neural MT.
  - Academic foundations
  - MT is grounded in computational linguistics, natural language processing (NLP), and machine learning.
  - Seminal contributions include sequence-to-sequence models (Sutskever et al., 2014, DOI: 10.5555/2969033.2969173) and the transformer architecture (Vaswani et al., 2017, DOI: 10.48550/arXiv.1706.03762), which introduced self-attention mechanisms enabling better context modelling.
  - Ontologies have been proposed as a semantic framework to improve MT by providing structured knowledge representations that help disambiguate meanings and adapt translations contextually[1].

  #### UK Context
  - British contributions and implementations
  - The Alan Turing Institute leads UK-wide AI research, including MT and NLP projects focusing on ethical AI and language diversity.
  - Universities such as Sheffield, Edinburgh, and Cambridge contribute foundational research in neural MT and domain adaptation.
  - UK government initiatives support AI innovation hubs that include MT development for public sector applications.
  - North England innovation hubs
  - Sheffield NLP group is notable for research on low-resource languages and domain-specific MT.
  - Manchester and Leeds host AI clusters working on healthcare translation solutions, leveraging MT for multilingual patient communication.
  - Regional collaborations often focus on integrating MT with ontology-driven semantic frameworks to improve accuracy in specialised domains.
  - Regional case studies
  - Pilot projects in NHS trusts in North England use MT to assist communication with non-English-speaking patients, improving healthcare delivery.
  - Legal firms in Manchester employ MT tools enhanced with domain-specific glossaries to streamline multilingual contract review.

  #### Future Directions
  - Emerging trends and developments
  - Greater integration of ontologies and knowledge graphs to enhance semantic precision and contextual adaptation.
  - Expansion of adaptive MT systems that incorporate real-time human feedback.
  - Advances in document-level and multimodal MT, including speech-to-text and video translation.
  - Increased focus on ethical AI, transparency, and bias reduction in MT outputs.
  - Growing support for low-resource and endangered languages to promote linguistic diversity.
  - Anticipated challenges
  - Balancing translation quality with computational efficiency for real-time applications.
  - Addressing cultural nuances and idiomatic expressions that resist straightforward translation.
  - Ensuring data privacy and compliance with regulations such as GDPR in training and deployment.
  - Mitigating biases embedded in training data to avoid perpetuating stereotypes.
  - Research priorities
  - Developing robust ontology frameworks tailored for MT semantic enhancement.
  - Improving cross-lingual transfer learning for underrepresented languages.
  - Creating standardised benchmarks for evaluating MT quality beyond BLEU scores, including human-centric metrics.
  - Exploring human-in-the-loop MT workflows to combine machine efficiency with human expertise.

  #### Research & Literature
  - Key academic papers and sources
  - Sutskever, I., Vinyals, O., & Le, Q. V. (2014). Sequence to Sequence Learning with Neural Networks. *Advances in Neural Information Processing Systems*, 27. DOI: 10.5555/2969033.2969173
  - Vaswani, A., Shazeer, N., Parmar, N., et al. (2017). Attention Is All You Need. *Advances in Neural Information Processing Systems*, 30. DOI: 10.48550/arXiv.1706.03762
  - Plata, J. et al. (2025). Ontology-Driven Enhancements in Statistical Machine Translation. *International Journal of Computer Applications*, 186(64), 5-12. DOI: 10.5120/ijca2025924438[1]
  - Fareedi, S. et al. (2025). Ontology-driven NLP for Clinical Dialogue Systems. *Frontiers in Digital Health*, 3:1668385. DOI: 10.3389/fdgth.2025.1668385[5]
  - ACL Anthology (2025). Proceedings of the Machine Translation Summit 2025. Available at: https://aclanthology.org/events/mtsummit-2025/[8]
  - Ongoing research directions
  - Integration of ontologies to improve semantic understanding and disambiguation in MT.
  - Enhancing low-resource language translation via transfer learning and multilingual pre-training.
  - Document-level and discourse-aware MT to maintain coherence across longer texts.
  - Adaptive MT systems that learn continuously from human feedback.
  - Ethical considerations including bias mitigation and transparency in MT outputs.

  #### References
  1. Plata, J., et al. (2025). Ontology-Driven Enhancements in Statistical Machine Translation. *International Journal of Computer Applications*, 186(64), 5-12. DOI: 10.5120/ijca2025924438  
  2. Sutskever, I., Vinyals, O., & Le, Q. V. (2014). Sequence to Sequence Learning with Neural Networks. *Advances in Neural Information Processing Systems*, 27. DOI: 10.5555/2969033.2969173  
  3. Vaswani, A., Shazeer, N., Parmar, N., et al. (2017). Attention Is All You Need. *Advances in Neural Information Processing Systems*, 30. DOI: 10.48550/arXiv.1706.03762  
  4. Fareedi, S., et al. (2025). Ontology-driven NLP for Clinical Dialogue Systems. *Frontiers in Digital Health*, 3:1668385. DOI: 10.3389/fdgth.2025.1668385  
  5. ACL Anthology (2025). Proceedings of the Machine Translation Summit 2025. Available at: https://aclanthology.org/events/mtsummit-2025/

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
