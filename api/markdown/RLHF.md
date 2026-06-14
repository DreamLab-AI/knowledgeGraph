public:: true

# rlhf
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:122e80280ffc3a656a4c99cf42bb4e9313ac28970ae8874db00ec3a88268f3de",
  "@type": "Page",
  "vc:slug": "rlhf",
  "title": "rlhf",
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
  "@id": "urn:ngm:class:rlhf",
  "@type": "Class",
  "label": "RLHF",
  "definition": "Reinforcement Learning from Human Feedback (RLHF) is a training methodology that aligns large language models and other AI systems with human preferences by first collecting human comparison judgements between model outputs, training a reward model on those judgements, and then optimising the language model policy against the reward model using reinforcement learning — typically Proximal Policy Optimisation with a KL-divergence penalty to prevent reward hacking. RLHF enables models to be steered towards outputs that human annotators prefer for helpfulness, harmlessness, and honesty, going beyond what is achievable with supervised fine-tuning on static demonstration data alone. The technique was popularised by OpenAI's InstructGPT work and underlies the alignment pipeline of models such as ChatGPT, Claude, and Gemini. Variants including Direct Preference Optimisation, Constitutional AI, and RLAIF (Reinforcement Learning from AI Feedback) extend or simplify the original three-stage pipeline.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-alignment",
      "label": "AI Alignment"
    }
  ],
  "sameAs": [
    {"@id": "urn:ngm:class:reinforcement-learning-from-human-feedback", "label": "Reinforcement Learning from Human Feedback"},
    {"@id": "urn:ngm:class:human-feedback-alignment", "label": "Human Feedback Alignment"}
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:reward-model", "label": "Reward Model"},
      {"@id": "urn:ngm:class:human-feedback", "label": "Human Feedback"},
      {"@id": "urn:ngm:class:reinforcement-learning", "label": "Reinforcement Learning"},
      {"@id": "urn:ngm:class:proximal-policy-optimisation", "label": "Proximal Policy Optimisation"},
      {"@id": "urn:ngm:class:supervised-fine-tuning", "label": "Supervised Fine-Tuning"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:ai-alignment", "label": "AI Alignment"},
      {"@id": "urn:ngm:class:instruction-following", "label": "Instruction Following"},
      {"@id": "urn:ngm:class:harmlessness", "label": "Harmlessness"},
      {"@id": "urn:ngm:class:ai-safety", "label": "AI Safety"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:large-language-model", "label": "Large Language Model"},
      {"@id": "urn:ngm:class:kl-divergence", "label": "KL Divergence"},
      {"@id": "urn:ngm:class:preference-data", "label": "Preference Data"},
      {"@id": "urn:ngm:class:human-annotation", "label": "Human Annotation"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:direct-preference-optimisation", "label": "Direct Preference Optimisation"},
      {"@id": "urn:ngm:class:supervised-fine-tuning", "label": "Supervised Fine-Tuning"},
      {"@id": "urn:ngm:class:rlaif", "label": "RLAIF"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:constitutional-ai-training-methodology", "label": "Constitutional AI"},
      {"@id": "urn:ngm:class:reward-hacking", "label": "Reward Hacking"},
      {"@id": "urn:ngm:class:policy-gradient", "label": "Policy Gradient"},
      {"@id": "urn:ngm:class:instruct-gpt", "label": "InstructGPT"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:model-alignment-pipeline", "label": "Model Alignment Pipeline"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:human-computer-interaction", "label": "Human-Computer Interaction"},
      {"@id": "urn:ngm:class:data-annotation", "label": "Data Annotation"},
      {"@id": "urn:ngm:class:crowdsourcing", "label": "Crowdsourcing"}
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
  - Reinforcement Learning from Human Feedback (RLHF) is a [[Machine Learning]] training methodology that aligns [[Large Language Model]]s and other [[AI]] systems with human values and preferences. It operates by collecting human comparison judgements between candidate model outputs, fitting a [[Reward Model]] on those judgements, and then optimising the base language model policy against the reward model via [[Reinforcement Learning]] — typically [[Proximal Policy Optimisation]] constrained by a [[KL Divergence]] penalty to prevent [[Reward Hacking]]. RLHF is the backbone of modern [[Instruction Following]] models and is central to the field of [[AI Alignment]].

- ### Overview
  - RLHF addresses a fundamental limitation of [[Supervised Fine-Tuning]]: models trained on human-written demonstrations learn to imitate the statistical patterns of the training corpus but lack an explicit signal for which behaviours are genuinely preferable in novel or ambiguous situations.
  - The technique gained widespread adoption following OpenAI's InstructGPT paper (2022), which demonstrated that an RLHF-aligned model scored higher on human preference evaluations than the much larger base GPT-3 model trained only on next-token prediction.
  - Major production AI systems that use RLHF or close variants include ChatGPT, Claude (Anthropic), Gemini (Google DeepMind), Llama instruction-tuned variants, and Mistral instruct models.
  - The core promise of RLHF is scalable alignment: as models grow in capability, human preference signals continue to provide a meaningful training gradient for steering behaviour even when the model's outputs exceed annotator expertise in narrow technical domains.

- ### Key Components
  - #### Stage 1 — Supervised Fine-Tuning (SFT)
    - A pre-trained [[Large Language Model]] is fine-tuned on a curated set of human-written demonstrations of desired behaviour (instruction-response pairs).
    - This stage establishes a baseline policy that generates coherent, on-topic responses.
    - SFT alone is insufficient: the model mimics demonstration style but lacks generalised preference awareness.
  - #### Stage 2 — Reward Model Training
    - Human annotators compare pairs of model outputs and express which they prefer (or rank multiple outputs).
    - A separate [[Reward Model]] — itself a language model with a scalar prediction head — is trained on these preference pairs to predict human ratings.
    - The reward model generalises from the annotated pairs to unseen outputs, providing a differentiable signal for RL.
    - Quality of the reward model is critical: a weak or biased reward model produces a biased alignment signal.
  - #### Stage 3 — RL Optimisation
    - The SFT policy is treated as the actor in a [[Policy Gradient]] RL loop.
    - [[Proximal Policy Optimisation]] (PPO) updates the policy to maximise expected reward model scores over sampled outputs.
    - A [[KL Divergence]] penalty between the current policy and the SFT reference policy prevents the model from drifting too far from coherent language generation (mitigating [[Reward Hacking]]).
    - The resulting policy is the aligned model, combining fluency from SFT with preference-steering from RL.

- ### Reward Model Dynamics
  - The reward model is trained on [[Preference Data]] — binary comparisons or rankings — rather than absolute quality scores, which are harder to elicit consistently from annotators.
  - Bradley-Terry and Thurstone models are common statistical frameworks for extracting scalar scores from pairwise comparisons.
  - Reward model generalisation is constrained by the distribution of the annotation data; inputs far from the training distribution can yield unreliable scores.
  - [[Reward Hacking]] (also called specification gaming) occurs when the policy finds inputs that score highly on the reward model without corresponding to genuinely preferred outputs, exploiting distributional gaps.

- ### Variants and Extensions
  - #### Direct Preference Optimisation (DPO)
    - [[Direct Preference Optimisation]] bypasses the explicit reward model entirely by reparameterising the RLHF objective directly in terms of the policy, allowing training on preference pairs without a separate RL loop.
    - DPO simplifies the training pipeline and reduces hyperparameter sensitivity while achieving competitive alignment performance.
  - #### Constitutional AI (CAI)
    - [[Constitutional AI Training Methodology]], developed by Anthropic, introduces a self-critique loop where the model revises its outputs against a set of written principles (a "constitution") before human preference data is collected, reducing reliance on costly safety-specific human annotation.
    - CAI blends RLHF with a rule-based self-revision step, producing the RLAIF (Reinforcement Learning from AI Feedback) variant for harmlessness.
  - #### RLAIF
    - [[RLAIF]] replaces human annotators with an AI model (often a stronger or same-family model) to generate preference labels at lower cost, scaling to larger datasets.
    - Concerns exist about preference-label bias propagating from the AI judge into the trained model.
  - #### Iterative RLHF / Online RLHF
    - Multiple rounds of [[Human Annotation]] collected on the current model's outputs (rather than a fixed static dataset) improve alignment stability and reduce distributional mismatch.
  - #### Group Relative Policy Optimisation (GRPO)
    - An efficient alternative to PPO used in models such as DeepSeek-R1, averaging rewards within a group of sampled responses to estimate the baseline, reducing memory footprint.

- ### Applications and Use Cases
  - **Conversational AI assistants** — ChatGPT, Claude, Gemini, Llama Chat all use RLHF or DPO to make responses helpful, inoffensive, and aligned with user intent.
  - **Code generation models** — GitHub Copilot and similar tools use preference fine-tuning to steer code suggestions toward idiomatic, correct, and safe patterns.
  - **Summarisation** — RLHF trains summarisation models to generate accurate, concise summaries preferred by humans over maximally faithful but verbose alternatives.
  - **Content moderation** — Reward models trained on human moderation decisions can classify content at scale.
  - **Reasoning models** — Process-reward models (PRMs) apply RLHF-style supervision to intermediate reasoning steps, rewarding correct chain-of-thought steps rather than only final answers (used in OpenAI o1 and similar models).
  - **Robotics and embodied agents** — RLHF principles extend to [[Robotics]] settings where human evaluators rate robot action sequences, though sample efficiency constraints remain challenging.
  - **Drug discovery and scientific domains** — Preference fine-tuning on expert evaluations steers generative models toward plausible, synthesisable molecular structures.

- ### Challenges and Limitations
  - **Annotation cost and scalability** — High-quality human preference data is expensive and slow to collect; annotator disagreement introduces label noise.
  - **Annotator bias** — Annotations reflect the demographics, values, and expertise of annotators, which may not represent diverse global preferences.
  - **Reward hacking** — Policies can exploit reward model weaknesses, generating outputs that score highly but are not genuinely preferred by users.
  - **Goodhart's Law** — "When a measure becomes a target, it ceases to be a good measure"; the reward model is an imperfect proxy for human values and will be exploited.
  - **Overoptimisation** — Excessive RL steps can degrade language fluency as the policy moves too far from the SFT baseline.
  - **Scalable oversight** — In domains where model outputs exceed human evaluator expertise, reliable preference judgements become difficult to obtain, motivating research into [[Scalable Oversight]] and debate-based methods.
  - **Value alignment ambiguity** — Human preferences over complex ethical trade-offs are inconsistent and context-dependent, making a single scalar reward an oversimplification.

- ### Relationships
  - requires:: [[Reward Model]]
  - requires:: [[Human Feedback]]
  - requires:: [[Reinforcement Learning]]
  - requires:: [[Proximal Policy Optimisation]]
  - requires:: [[Supervised Fine-Tuning]]
  - enables:: [[AI Alignment]]
  - enables:: [[Instruction Following]]
  - enables:: [[AI Safety]]
  - uses:: [[Large Language Model]]
  - uses:: [[KL Divergence]]
  - uses:: [[Preference Data]]
  - uses:: [[Human Annotation]]
  - contrastsWith:: [[Direct Preference Optimisation]]
  - contrastsWith:: [[RLAIF]]
  - relatedTo:: [[Constitutional AI Training Methodology]]
  - relatedTo:: [[Reward Hacking]]
  - relatedTo:: [[Policy Gradient]]
  - relatedTo:: [[InstructGPT]]
  - partOf:: [[Model Alignment Pipeline]]
  - bridges-to:: [[Human-Computer Interaction]]
  - bridges-to:: [[Data Annotation]]
  - bridges-to:: [[Crowdsourcing]]

- ### Standards and Context
  - RLHF does not yet have a formal standardisation body or specification; it is defined by a body of academic literature and industrial practice.
  - Key papers establishing the methodology:
    - Christiano et al. (2017) — "Deep Reinforcement Learning from Human Preferences" (originally demonstrated on Atari and MuJoCo control tasks).
    - Stiennon et al. (2020) — "Learning to Summarise with Human Feedback" (OpenAI, applied to summarisation).
    - Ouyang et al. (2022) — "Training language models to follow instructions with human feedback" (InstructGPT / ChatGPT).
    - Bai et al. (2022) — "Training a Helpful and Harmless Assistant with Reinforcement Learning from Human Feedback" (Anthropic).
  - Regulatory context: EU AI Act and related governance frameworks discuss human oversight and alignment mechanisms; RLHF is positioned as one technical measure supporting human-in-the-loop control.
  - [[AI Governance]] and red-teaming practices increasingly treat RLHF-aligned models as a baseline safety floor, not a complete solution.
  - The [[Alignment Research Center]] and [[Anthropic]] publish active safety-oriented RLHF research; [[OpenAI]] Alignment and [[DeepMind]] Safety teams similarly publish in this space.

- ### Provenance
  - sources:: Christiano et al. 2017; Stiennon et al. 2020; Ouyang et al. 2022 (InstructGPT); Bai et al. 2022 (Anthropic HH); Rafailov et al. 2023 (DPO)
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
