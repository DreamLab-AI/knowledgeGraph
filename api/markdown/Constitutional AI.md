An alignment training method, introduced by Anthropic in 2022, in which a language model is steered by an explicit written set of principles (a constitution) rather than solely by human preference labels: the model critiques and revises its own outputs against the principles during supervised learning, then a preference model trained on AI-generated comparisons (RLAIF) provides the reinforcement signal, yielding harmlessness that is transparent, auditable, and scalable with far less human labelling.

### Semantic Classification

### Content

## Definition

**Constitutional AI (CAI)** is an alignment technique introduced by Bai et al. at Anthropic in "Constitutional AI: Harmlessness from AI Feedback" (2022). Instead of teaching a model what counts as harmful purely from thousands of human preference judgements, CAI encodes the desired behaviour in an explicit, human-readable constitution — a list of principles drawing on sources such as the UN Declaration of Human Rights, platform trust-and-safety norms, and general precepts like "choose the response that is least likely to be harmful or deceptive". The constitution becomes the training signal.

Training proceeds in two phases. In the **supervised phase**, the model is prompted with adversarial inputs, generates a response, is asked to critique that response against a sampled constitutional principle, and then revises it; the model is fine-tuned on the revised outputs. In the **reinforcement phase** (RLAIF — reinforcement learning from AI feedback), the model generates pairs of responses, an AI evaluator judges which better satisfies the constitution, and a preference model trained on these AI-labelled comparisons supplies rewards in place of the human labellers used in [[Reinforcement Learning from Human Feedback]]. The result in the original work was a model that was both more harmless and less evasive than RLHF baselines — it explains refusals rather than stonewalling.

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

## Merged from Constitutional AI Training Methodology (needs reconciliation)
A method for training AI assistants to be harmless through self-improvement, using a set of principles or "constitution" to guide behaviour without human labels for harmful outputs. Constitutional AI combines supervised learning for self-critiques and revisions with Reinforcement Learning from AI Feedback (RLAIF), producing models that are helpful, harmless, and honest at scale.

### Semantic Classification

### Content

- A method for training AI assistants to be harmless through self-improvement, using a set of principles or "constitution" to guide behaviour without human labels for harmful outputs. Constitutional AI combines supervised learning for self-critiques and revisions with RL from AI Feedback (RLAIF).

### Anthropic

- Smaller, unsure how much smaller, it's a fork of people from OpenAI, but has radically exceeded earning expectations.
- [[Constitutional AI Training Methodology]], like Asimov's laws of robotics
- 🟢 [anthropics/sleeper-agents-paper: Contains random samples referenced in the paper "Sleeper Agents: Training Robustly Deceptive LLMs that Persist Through Safety Training". (github.com)](https://github.com/anthropics/sleeper-agents-paper)

<https://twitter.com/natfriedman/status/1777739863678386268/photo/1>

### Anthropic

- Smaller, unsure how much smaller, it's a fork of people from OpenAI, but has radically exceeded earning expectations.
- [[Constitutional AI Training Methodology]], like Asimov's laws of robotics
- 🟢 [anthropics/sleeper-agents-paper: Contains random samples referenced in the paper "Sleeper Agents: Training Robustly Deceptive LLMs that Persist Through Safety Training". (github.com)](https://github.com/anthropics/sleeper-agents-paper)

<https://twitter.com/natfriedman/status/1777739863678386268/photo/1>

#### Key Characteristics

- Uses constitutional principles for alignment
  - Self-critique and revision
  - RL from AI Feedback (RLAIF)
  - Reduces human labelling needs
  - Improves harmlessness
  - Scalable alignment approach

    ## Technical Details

    **Two-Stage Process**:

    **Stage 1: Supervised Learning**
    1. Generate initial response
    2. Self-critique against constitutional principles
    3. Revise response based on critique
    4. Repeat for multiple principles
    5. Fine-tune on revised responses

    **Stage 2: RL from AI Feedback (RLAIF)**
    1. Generate multiple responses per prompt
    2. AI model evaluates which is better using constitution
    3. Train preference model on AI judgments
    4. Use RL (PPO) to optimize policy

    ## Usage in AI/ML

    "Constitutional AI uses supervised learning for self-critiques and revisions, followed by RL from AI Feedback."

    #### Academic Context
    Constitutional AI demonstrates that models can be aligned through principled self-improvement using AI-generated feedback, reducing reliance on expensive human labelling whilst improving harmlessness.

    **Primary Source**: Bai et al., "Constitutional AI: Harmlessness from AI Feedback", arXiv:2212.08073 (2022)

    #### Related Concepts

- **RLHF**: Uses human feedback instead
  - **RLAIF**: AI feedback component
  - **Self-Critique**: Core technique
  - **Harmlessness**: Primary goal
  - **AI Alignment**: Broader objective

    ## UK English Notes

  - "Behaviour" (not "behavior")
  - "Labelling" (not "labeling")

    ## OWL Functional Syntax

    **Last Updated**: 2025-10-27
    **Verification Status**: Verified against Constitutional AI paper (arXiv:2212.08073)

    ## Academic Context

- Constitutional AI is a methodology designed to align AI systems with human values by embedding a formal set of ethical and behavioural principles—referred to as a "constitution"—directly into the AI's training process.
- This approach emerged from research at Anthropic, aiming to produce AI assistants that are helpful, harmless, and honest without relying extensively on human-labelled data for harmful outputs.
- The training involves a two-phase process: supervised learning where the AI critiques and revises its own outputs guided by constitutional principles, followed by reinforcement learning from AI feedback (RLAIF), which uses AI-generated preference models as reward signals.
- Academically, Constitutional AI builds on foundations in AI alignment, reinforcement learning, and ethical AI, contributing to more scalable and transparent control over AI behaviour.

  ## Current Landscape (2025)

- Constitutional AI has seen growing adoption in industry, particularly in AI safety and alignment research, with Anthropic's Claude model as a prominent example.
- Major technology companies and AI platforms increasingly integrate constitutional principles to improve AI safety and reduce harmful or biased outputs.
- The approach is valued for reducing dependence on costly human annotation by leveraging AI’s own capacity for self-critique and revision.
- Technical capabilities include improved transparency through chain-of-thought reasoning and better handling of harmful queries by explaining objections rather than evasive refusals.
- Limitations remain in fully capturing complex human values and avoiding subtle biases; ongoing refinement of constitutional principles and training methods is necessary.
- Standards and frameworks for ethical AI increasingly reference constitutional approaches as part of best practices for AI governance and compliance.

  ## Research & Literature

- Key academic paper:
- Bai, Y., et al. (2022). *Constitutional AI: Harmlessness from AI Feedback*. Anthropic Research. Available at arXiv:2205.10568.  
  This foundational work details the methodology of Constitutional AI, including supervised and reinforcement learning phases, and demonstrates its effectiveness in training harmless AI assistants.
- Ongoing research explores:
- Expanding constitutional principles to cover broader ethical domains.
- Enhancing AI self-critique mechanisms for nuanced decision-making.
- Integrating Constitutional AI with other alignment techniques for robustness.
- Investigating applications in high-stakes domains such as law, healthcare, and content moderation.

  ## UK Context

- The UK has shown active interest in AI alignment and ethical AI, with Constitutional AI principles influencing research and policy discussions.
- North England innovation hubs such as Manchester, Leeds, Newcastle, and Sheffield contribute through AI ethics research centres and AI startups focusing on safe and responsible AI deployment.
- For example, the University of Manchester’s AI ethics group explores alignment methods compatible with Constitutional AI frameworks.
- Leeds and Newcastle host AI innovation clusters where ethical AI practices, including constitutional approaches, are integrated into industry collaborations.
- Legal professionals in the UK, particularly in international arbitration, consider Constitutional AI frameworks promising for embedding procedural fairness, neutrality, and accountability into AI tools used in legal processes.

  ## Future Directions

- Emerging trends include:
- Broader adoption of Constitutional AI in regulated sectors requiring high trust, such as finance, healthcare, and legal services.
- Development of dynamic constitutions that adapt over time to evolving societal norms and legal standards.
- Combining Constitutional AI with explainability and interpretability techniques to enhance user trust and regulatory compliance.
- Anticipated challenges:
- Balancing flexibility and rigidity in constitutional principles to avoid overconstraining AI creativity or underregulating harmful behaviours.
- Addressing cultural and regional differences in ethical norms within constitutional frameworks.
- Ensuring transparency without compromising proprietary model details.
- Research priorities focus on:
- Refining AI self-supervision and feedback loops.
- Formalising constitutional principles into verifiable specifications.
- Cross-disciplinary collaboration between AI researchers, ethicists, and legal experts.

  ## References

  1. Bai, Y., et al. (2022). *Constitutional AI: Harmlessness from AI Feedback*. Anthropic Research. arXiv:2205.10568.  
  2. Wolters Kluwer Arbitration Blog. (2025). *What is Constitutional AI and Why Does it Matter for International Arbitration?* June 7, 2025.  
  3. ClickIT Tech. (2025). *What Is Constitutional AI and Why Does It Matter in 2025*.  
  4. GigaSpaces AI. (2025). *What Is Constitutional AI? How It Works & Benefits*.  
  5. GeeksforGeeks. (2025). *Constitutional AI*.  
  6. Constitutional.ai. (2023). *Tracking Anthropic's AI Revolution*.  

  (For brevity, URLs are omitted but available upon request.)

  ## Metadata

- **Last Updated**: 2025-11-11
- **Review Status**: Comprehensive editorial review
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable

### Provenance

