public:: true

# instruction following
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c3b09addf34a022dcffb6eee7565f252b4c9eae90d0d0e915aaf71b8a4e00672",
  "@type": "Page",
  "vc:slug": "instruction-following",
  "title": "instruction following",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:instruction-following",
  "@type": "Class",
  "label": "Instruction Following",
  "definition": "Instruction following is a language model capability enabling accurate parsing and faithful execution of explicit user or system directives specified in natural language, encompassing multi-step tasks, output format constraints, persona assignments, conditional branching, and constraint satisfaction. It is principally acquired through supervised instruction tuning on curated (instruction, response) datasets and further refined via reinforcement learning from human feedback (RLHF) or direct preference optimisation (DPO). Instruction following is evaluated by the degree to which a model correctly fulfils all stated requirements simultaneously without omitting or violating any constraint, and is a prerequisite for reliable agentic behaviour where a model must decompose and execute multi-step plans expressed as natural language specifications. Failure modes include instruction forgetting in long contexts, sycophantic overriding, and specification gaming.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:directive-compliance",
      "label": "Directive Compliance"
    },
    {
      "@id": "urn:ngm:class:instruction-adherence",
      "label": "Instruction Adherence"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:instruction-tuning",
        "label": "Instruction Tuning"
      },
      {
        "@id": "urn:ngm:class:rlhf",
        "label": "RLHF"
      },
      {
        "@id": "urn:ngm:class:large-language-model",
        "label": "Large Language Model"
      },
      {
        "@id": "urn:ngm:class:supervised-fine-tuning",
        "label": "Supervised Fine Tuning"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:tool-use",
        "label": "Tool Use"
      },
      {
        "@id": "urn:ngm:class:agentic-ai",
        "label": "Agentic AI"
      },
      {
        "@id": "urn:ngm:class:function-calling",
        "label": "Function Calling"
      },
      {
        "@id": "urn:ngm:class:multi-agent-systems",
        "label": "Multi-Agent Systems"
      },
      {
        "@id": "urn:ngm:class:planning",
        "label": "Autonomous Planning"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:natural-language-understanding",
        "label": "Natural Language Understanding"
      },
      {
        "@id": "urn:ngm:class:context-window",
        "label": "Context Window"
      },
      {
        "@id": "urn:ngm:class:attention-mechanism",
        "label": "Attention Mechanism"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:chain-of-thought-reasoning",
        "label": "Chain-of-Thought Reasoning"
      },
      {
        "@id": "urn:ngm:class:structured-output",
        "label": "Structured Output"
      },
      {
        "@id": "urn:ngm:class:system-prompt",
        "label": "System Prompt"
      },
      {
        "@id": "urn:ngm:class:direct-preference-optimisation",
        "label": "Direct Preference Optimisation"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:sycophancy",
        "label": "Sycophancy"
      },
      {
        "@id": "urn:ngm:class:specification-gaming",
        "label": "Specification Gaming"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:prompt-engineering",
        "label": "Prompt Engineering"
      },
      {
        "@id": "urn:ngm:class:alignment",
        "label": "Alignment"
      },
      {
        "@id": "urn:ngm:class:ifeval",
        "label": "IFEval"
      },
      {
        "@id": "urn:ngm:class:constitutional-ai-training-methodology",
        "label": "Constitutional AI"
      },
      {
        "@id": "urn:ngm:class:helpfulness",
        "label": "Helpfulness"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:human-computer-interaction",
        "label": "Human Computer Interaction"
      },
      {
        "@id": "urn:ngm:class:task-planning",
        "label": "Robotic Task Planning"
      }
    ]
  },
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - Instruction following is a [[Large Language Model]] capability enabling accurate parsing and faithful execution of explicit user or system directives specified in natural language, encompassing multi-step tasks, output format constraints, persona assignments, conditional branching, and constraint satisfaction. It is principally acquired through supervised [[Instruction Tuning]] on curated (instruction, response) datasets and further refined via [[RLHF]] or [[Direct Preference Optimisation]]. A model's instruction-following quality is measured by the simultaneous satisfaction of all stated requirements without omission or violation, and strong instruction following is a prerequisite for reliable [[Agentic AI]] where the model must decompose and execute long-horizon plans expressed as natural language specifications.

- ### Overview
  - Instruction following emerged as a measurable and trainable capability with the FLAN (Fine-tuned Language Net) and InstructGPT research programmes, both of which demonstrated that base [[Transformer]] models fine-tuned on diverse (instruction, completion) pairs substantially outperform identically-sized base models on held-out instruction benchmarks.
  - The capability matters because most practical deployments of [[Large Language Model]] systems involve structured directives: "write a JSON object with these keys", "translate the following passage into French", "call the weather API and summarise the result". Without reliable instruction following, model outputs are unpredictable and unsafe in production settings.
  - Instruction following sits at the intersection of [[Natural Language Understanding]], controllability, and [[Alignment]], making it a central concern for AI safety researchers as well as product engineers.
  - The maturity level is classified as **established**: instruction-following training is now a standard component in virtually every publicly deployed large model, and the benchmark ecosystem (IFEval, MT-Bench, AlpacaEval) has stabilised around reproducible evaluation protocols.

- ### Key Components
  - #### Training Techniques
    - **[[Instruction Tuning]]** — Supervised fine-tuning on collections of (instruction, ideal-response) pairs, e.g. FLAN, Alpaca, Dolly, OpenAssistant, or proprietary datasets. Teaches the model the format and intent of following directives.
    - **[[RLHF]]** (Reinforcement Learning from Human Feedback) — Human annotators rank multiple candidate responses; a reward model is trained on these rankings; the policy is fine-tuned via proximal policy optimisation (PPO) to maximise reward. Demonstrated in InstructGPT to produce responses rated as more helpful and honest than SFT-only.
    - **[[Direct Preference Optimisation]] (DPO)** — Bypasses the explicit reward model by directly fine-tuning on preference pairs using a reparametrised objective, reducing training complexity while achieving similar alignment quality to PPO-based RLHF.
    - **[[Constitutional AI]]** — Anthropic's approach of using a model to critique and revise its own outputs against a constitution of principles, reducing reliance on human labels for each constraint.
  - #### Core Mechanisms
    - **[[System Prompt]]** — A preamble injected at the start of the context window specifying persistent instructions, persona, output format, and prohibited topics. Instruction following requires consistently honouring these throughout the conversation.
    - **[[Context Window]] management** — Long-context instruction following is harder than short-context; models must attend to constraints placed far from the generation point (the "lost in the middle" phenomenon).
    - **[[Attention Mechanism]]** — Transformer self-attention enables each output token to attend over all instruction tokens; the quality of this attention determines whether constraints are remembered.
    - **[[Structured Output]]** — JSON mode, XML schema adherence, or function-calling schemas that constrain generation to a formal syntax, making instruction adherence machine-verifiable.
    - **[[Chain-of-Thought Reasoning]]** — Explicit intermediate reasoning steps improve constraint satisfaction on multi-step instructions by decomposing the task before committing to output tokens.

- ### Failure Modes
  - **Instruction forgetting** — A constraint stated early in a long prompt is omitted from the response. Exacerbated by [[Context Window]] limits and the "lost in the middle" attention degradation pattern.
  - **[[Sycophancy]]** — The model abandons a correct response when the user pushes back, prioritising perceived social approval over faithful instruction adherence. A key failure mode that RLHF training can inadvertently amplify.
  - **[[Specification Gaming]]** — Technically satisfying a measurable proxy metric while violating the intent of the instruction (e.g. producing exactly 100 words by padding with filler). Related to [[Reward Hacking]] in RL settings.
  - **Constraint conflict** — Instructions that are internally contradictory (e.g. "write in English but also in French") require the model to surface the conflict rather than silently violate one constraint.
  - **Over-refusal** — The model declines to follow a legitimate instruction by misclassifying it as harmful, reducing practical helpfulness.

- ### Evaluation & Benchmarks
  - **IFEval (Instruction Following Evaluation)** — Google's benchmark of verifiable constraints (exact word count, keyword inclusion, presence of a bullet list, language of response). Allows programmatic pass/fail scoring without human judges.
  - **MT-Bench** — Multi-turn conversation benchmark using [[Large Language Model]] judges (GPT-4) to score instruction adherence across diverse task categories including reasoning, coding, roleplay, and extraction.
  - **AlpacaEval** — Win-rate benchmark comparing model outputs to a reference model on the Alpaca instruction set.
  - **[[Prompt Engineering]] ablations** — Practitioners regularly evaluate how specific phrasing changes (chain-of-thought triggers, few-shot examples, explicit constraint repetition) affect adherence rates.

- ### Applications & Use Cases
  - **[[Function Calling]]** — LLM APIs expose structured function schemas; the model must select the correct function and populate its arguments accurately. Requires precise parsing of the API specification and faithful JSON generation.
  - **[[Agentic AI]] pipelines** — Autonomous agents receive high-level goals and must decompose them into ordered sub-tasks, each expressed as a follow-on instruction. Failures cascade in multi-step plans.
  - **[[Multi-Agent Systems]]** — When one agent delegates a sub-task to another (orchestrator-worker patterns), the worker's instruction following quality determines pipeline reliability. Studied in frameworks like AutoGen and CrewAI.
  - **[[Tool Use]]** — Models must follow tool invocation syntax exactly (name, arguments, type-correct values) to retrieve web search results, run code, or query databases.
  - **Document generation** — Enterprise use cases (contract drafting, report templating, structured data extraction) depend on the model honouring format, length, tone, and content constraints simultaneously.
  - **[[Robotic Task Planning]]** — Vision-language-action models must translate natural language commands ("pick up the blue block") into physical action sequences, bridging linguistic instruction following with embodied control (bridgesTo domain: [[Robotics]]).
  - **[[Human-Computer Interaction]]** — Instruction following is the mechanism by which conversational AI products honour user preferences for tone, language, brevity, and task scope.

- ### Relationships
  - requires:: [[Instruction Tuning]]
  - requires:: [[RLHF]]
  - requires:: [[Large Language Model]]
  - requires:: [[Supervised Fine-Tuning]]
  - enables:: [[Tool Use]]
  - enables:: [[Agentic AI]]
  - enables:: [[Function Calling]]
  - enables:: [[Multi-Agent Systems]]
  - enables:: [[Autonomous Planning]]
  - dependsOn:: [[Natural Language Understanding]]
  - dependsOn:: [[Context Window]]
  - dependsOn:: [[Attention Mechanism]]
  - uses:: [[Chain-of-Thought Reasoning]]
  - uses:: [[Structured Output]]
  - uses:: [[System Prompt]]
  - uses:: [[Direct Preference Optimisation]]
  - contrastsWith:: [[Sycophancy]]
  - contrastsWith:: [[Specification Gaming]]
  - contrastsWith:: [[Reward Hacking]]
  - relatedTo:: [[Prompt Engineering]]
  - relatedTo:: [[Alignment]]
  - relatedTo:: [[IFEval]]
  - relatedTo:: [[Constitutional AI]]
  - relatedTo:: [[Helpfulness]]
  - bridges-to:: [[Human-Computer Interaction]]
  - bridges-to:: [[Robotic Task Planning]]

- ### Standards & Context
  - **OpenAI Chat Completions API** — Formalised the `system` / `user` / `assistant` turn structure that defines how instructions are delivered to a model; widely replicated across providers (Anthropic Messages API, Google Gemini API).
  - **[[Function Calling]] schemas (JSON Schema)** — The structured specification language that models must parse and honour when generating tool calls; adherence is a verifiable form of instruction following.
  - **NIST AI Risk Management Framework** — Addresses controllability and predictability of model outputs, of which instruction following is a primary enabler.
  - **EU AI Act (2024)** — High-risk AI system requirements for auditability and traceability are partly addressed by instruction-following reliability (systems must do what operators specify).
  - **BenchmarkHub / Hugging Face Open LLM Leaderboard** — Community-maintained evaluation infrastructure where instruction following benchmarks (IFEval, MT-Bench) are tracked across model releases.
  - Related concepts: [[Alignment]], [[AI Safety]], [[Controllability]], [[Helpfulness]].

- ### Provenance
  - sources:: InstructGPT (Ouyang et al., 2022); FLAN (Wei et al., 2022); IFEval (Zhou et al., 2023); DPO (Rafailov et al., 2023); Constitutional AI (Bai et al., 2022)
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
