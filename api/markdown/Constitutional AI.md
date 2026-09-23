
An alignment training method, introduced by Anthropic in 2022, in which a language model is steered by an explicit written set of principles (a constitution) rather than solely by human preference labels: the model critiques and revises its own outputs against the principles during supervised learning, then a preference model trained on AI-generated comparisons (RLAIF) provides the reinforcement signal, yielding harmlessness that is transparent, auditable, and scalable with far less human labelling.

- ### Semantic Classification

- ### Content

  ## Definition

  **Constitutional AI (CAI)** is an alignment technique introduced by Bai et al. at Anthropic in "Constitutional AI: Harmlessness from AI Feedback" (2022). Instead of teaching a model what counts as harmful purely from thousands of human preference judgements, CAI encodes the desired behaviour in an explicit, human-readable constitution — a list of principles drawing on sources such as the UN Declaration of Human Rights, platform trust-and-safety norms, and general precepts like "choose the response that is least likely to be harmful or deceptive". The constitution becomes the training signal.

  Training proceeds in two phases. In the **supervised phase**, the model is prompted with adversarial inputs, generates a response, is asked to critique that response against a sampled constitutional principle, and then revises it; the model is fine-tuned on the revised outputs. In the **reinforcement phase** (RLAIF — reinforcement learning from AI feedback), the model generates pairs of responses, an AI evaluator judges which better satisfies the constitution, and a preference model trained on these AI-labelled comparisons supplies rewards in place of the human labellers used in [[RLHF]]. The result in the original work was a model that was both more harmless and less evasive than RLHF baselines — it explains refusals rather than stonewalling.

  CAI matters for [[AI Safety Research]] on two fronts. Practically, it decouples harmlessness training from expensive, psychologically taxing human labelling of harmful content, and it scales oversight: one document governs millions of judgements. Normatively, it makes the values steering a model inspectable and contestable — the constitution can be published, criticised, and amended, which opaque preference datasets cannot. Anthropic's later "Collective Constitutional AI" experiment (2023) drafted principles from public input, exploring democratic legitimacy for model values.

  ## Current Landscape

  - **A rewritten constitution, published in full**: on 21–22 January 2026 Anthropic published a new ~80-page constitution for Claude under a Creative Commons CC0 1.0 licence, shifting from a list of standalone principles to a reason-based document that explains *why* behaviours are desired; it establishes a four-tier priority order (broadly safe → broadly ethical → compliant with Anthropic's guidelines → genuinely helpful) and holds final authority over all other training guidance.
  - **Constitutional Classifiers**: the constitution idea extended to inference-time safeguards — classifiers trained on constitution-guided synthetic data (paper, 31 January 2025) reduced jailbreak success on Claude from 86% to 4.4%, surviving 3,000+ hours of red teaming without a universal jailbreak; a next-generation cascade (January 2026) cut the harmless-query refusal rate to 0.05% at ~1% additional compute.
  - **RLAIF generalisation**: AI-feedback preference training is now a standard tool across labs, usually blended with human feedback rather than replacing it, because AI judges are cheap, fast, and consistent but inherit their own biases.
  - **Open replication**: open-source ecosystems have reproduced the recipe (constitution-guided self-critique plus DPO/RLAIF) on open-weight models, and self-critique pipelines derived from CAI are widely used for [[Instruction Following]] refinement.
  - **Open problems**: principle conflicts within a constitution, sensitivity to phrasing, whether models genuinely internalise principles or pattern-match them, and who has standing to write the constitution — analysts expect other frontier labs to face pressure to publish comparable governance documents, particularly given EU AI Act transparency expectations.
  - **Relation to red teaming**: [[Red Teaming]] supplies the adversarial prompts that drive the critique-revision loop, making the two practices complementary halves of a safety training pipeline.

  **Sources**:
  - https://www.anthropic.com/news/claude-new-constitution
  - https://www.anthropic.com/research/constitutional-classifiers
  - https://www.anthropic.com/research/next-generation-constitutional-classifiers
  - https://bisi.org.uk/reports/claudes-new-constitution-ai-alignment-ethics-and-the-future-of-model-governance

