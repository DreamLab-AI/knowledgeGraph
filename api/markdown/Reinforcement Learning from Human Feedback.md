A technique for aligning language models with human preferences by training a reward model from human rankings of outputs and using reinforcement learning (typically PPO) to optimise the policy towards maximising predicted human preference. RLHF enables models to learn complex alignment objectives that are difficult to specify explicitly, forming a three-stage pipeline of supervised fine-tuning, reward model training, and RL optimisation.

### Semantic Classification

### Content

- A technique for aligning language models with human preferences by training a reward model from human rankings of outputs and using reinforcement learning (typically PPO) to optimise the policy towards maximising predicted human preference. RLHF enables models to learn complex alignment objectives difficult to specify explicitly.

  #### Key Characteristics

- Three-stage training pipeline
  - Learns from human preference comparisons
  - Uses reinforcement learning (PPO)
  - Aligns models with human values
  - Reduces harmful outputs
  - Improves instruction following

    ## Technical Details

    **Three-Stage Process**:

    **Stage 1: Supervised Fine-Tuning (SFT)**
    ```
    Collect demonstrations → Train on examples → SFT model
    ```

    **Stage 2: Reward Model Training**
    ```
    Generate outputs → Human rankings → Train reward model
    ```

    **Stage 3: RL Optimization**
    ```
    Generate outputs → Reward model scores → PPO updates → Aligned model
    ```

    **Reward Model**:

  - Trained to predict human preferences
  - Takes model output, returns scalar reward
  - Based on Bradley-Terry preference model
  - Uses pairwise comparisons

    **PPO (Proximal Policy Optimization)**:

  - Updates policy (language model)
  - Maximizes expected reward
  - Includes KL penalty to stay close to SFT model
  - Prevents reward hacking

    ## Usage in AI/ML

    "RLHF played a decisive role in directing model capabilities toward human objectives in InstructGPT and ChatGPT."

    Applications:

  - Instruction-following assistants (ChatGPT, Claude)
  - Reducing harmful/toxic outputs
  - Improving factual accuracy
  - Enhancing helpfulness
  - Task-specific alignment

    #### Academic Context
    RLHF played a decisive role in directing model capabilities toward human objectives, forming the foundation for aligned assistants like InstructGPT and ChatGPT. It addresses the challenge that what humans want is easier to demonstrate or rank than to specify formally.

    **Primary Source**: Ouyang et al., "Training language models to follow instructions with human feedback", arXiv:2203.02155 (2022)

    #### Related Concepts

- **Reward Model**: Component predicting human preference
  - **Proximal Policy Optimisation (PPO)**: RL algorithm used
  - **Direct Preference Optimisation (DPO)**: Alternative to RLHF
  - **Constitutional AI**: Related alignment approach
  - **Preference Learning**: Core learning paradigm

    ## RLHF Pipeline Details

    **Data Collection (Stage 1)**:

  - Human labelers write demonstrations
  - Covering diverse prompts and tasks
  - High-quality instruction-following examples

    **Preference Collection (Stage 2)**:

  - Sample multiple outputs per prompt
  - Humans rank outputs (best to worst)
  - Typically 4-9 outputs per prompt
  - Creates preference dataset

    **RL Training (Stage 3)**:
    ```
    Objective: max E[R(x,y)] - β·KL(π||π_SFT)

    Where:
    - R: Reward model
    - π: Current policy
    - π_SFT: SFT model (reference)
    - β: KL penalty coefficient
    ```

    ## Advantages

    **Alignment Quality**:

  - Captures nuanced human preferences
  - Handles complex alignment objectives
  - More flexible than rule-based approaches
  - Improves with scale

    **Practical Benefits**:

  - Significantly improves model usability
  - Reduces harmful outputs
  - Better instruction following
  - Enhanced truthfulness

    ## Challenges

    **Data Collection**:

  - Expensive human labeling
  - Requires many comparisons (10K-100K+)
  - Quality depends on labeler expertise
  - Potential biases in preferences

    **Training Complexity**:

  - Unstable RL training
  - Reward hacking risks
  - Hyperparameter sensitivity
  - Computational cost

    **Reward Model Limitations**:

  - May not capture all human values
  - Can be gamed/exploited
  - Limited by training data
  - Proxy for true preferences

    ## Best Practices

    **Data Quality**:

  - Diverse prompt coverage
  - Multiple independent rankings
  - Clear labeling guidelines
  - Quality control for labelers

    **Training Stability**:

  - Careful KL penalty tuning (β)
  - Monitor reward model predictions
  - Watch for reward hacking
  - Use multiple checkpoints

    **Evaluation**:

  - Human evaluation on held-out prompts
  - Automated metrics (helpfulness, harmfulness)
  - A/B testing with users
  - Long-term monitoring

    ## RLHF vs. Alternatives

    **RLHF**:

  - Most established approach
  - Proven effectiveness
  - Complex multi-stage pipeline
  - Requires significant compute

    **DPO (Direct Preference Optimization)**:

  - Simpler (no reward model or RL)
  - More stable training
  - Comparable performance
  - Gaining popularity

    **Constitutional AI**:

  - Uses AI feedback instead of human
  - More scalable
  - Complementary to RLHF

    ## Historical Development

  - 2017-2019: Early RLHF experiments
  - 2020: Scaling to larger models
  - 2022: InstructGPT demonstrates effectiveness
  - 2022: ChatGPT popularises RLHF
  - 2023+: Refinements and alternatives (DPO)
  - 2024+: Combination with other alignment methods

    ## Impact on Model Behaviour

    **InstructGPT Improvements**:

  - More truthful outputs
  - Reduced toxicity (25% reduction)
  - Better instruction following
  - Preferred by labelers (85% vs. GPT-3)
  - Improved alignment

    **Trade-offs**:

  - May reduce creativity slightly
  - Can be overly cautious
  - May refuse benign requests
  - Potential alignment tax on capabilities

    ## Reward Hacking Prevention

    **KL Penalty**:

  - Prevents drastic policy changes
  - Keeps model close to SFT baseline
  - Balances optimization vs. stability

    **Monitoring**:

  - Watch for unusual reward patterns
  - Check output quality manually
  - Validate on diverse prompts
  - Use held-out test set

    ## Significance

    RLHF represented a breakthrough in AI alignment, enabling language models to be steered toward human preferences at scale, transforming raw language models into helpful, harmless assistants aligned with user intent.

    ## OWL Functional Syntax

    ## UK English Notes

  - "Optimise" (not "optimize")
  - "Behaviour" (not "behavior")
  - "Labelers" (accepted variant, or "labellers")

    **Last Updated**: 2025-10-27
    **Verification Status**: Verified against InstructGPT paper (arXiv:2203.02155)

    ## Academic Context

- Reinforcement Learning from Human Feedback (RLHF) is a machine learning technique designed to align AI agents, particularly language models, with human preferences by training a reward model from human feedback and subsequently optimising policies via reinforcement learning algorithms such as Proximal Policy Optimization (PPO).
- This approach addresses the challenge of explicitly specifying complex alignment objectives by learning a reward function that reflects human judgements, typically derived from preference comparisons or rankings of model outputs.
- RLHF builds on classical reinforcement learning principles, where an agent iteratively improves its policy to maximise cumulative reward, but replaces hand-crafted reward functions with learned reward models trained on human data.
- The academic foundations of RLHF trace back to early frameworks like TAMER (Knox & Stone, 2009), which used explicit scalar human rewards, evolving towards preference-based feedback mechanisms that better capture nuanced human judgements.
- RLHF has become a cornerstone in advancing generative AI, enabling models to produce outputs that are more aligned with human values and less prone to generating harmful or nonsensical content.

  ## Current Landscape (2025)

- RLHF is widely adopted in industry for training large language models (LLMs) and other AI systems, underpinning popular conversational agents and content generation tools.
- Notable organisations include OpenAI, Anthropic, and DeepMind, which employ RLHF to refine model behaviour and safety.
- The technique is also applied beyond NLP, such as in computer vision for text-to-image generation and in robotics for behaviour shaping.
- In the UK, several AI research groups and companies integrate RLHF into their workflows, with a growing focus on ethical AI and human-centric design.
- North England hubs such as Manchester and Leeds host AI innovation centres that explore RLHF applications in healthcare, finance, and autonomous systems.
- For example, the University of Manchester’s AI research teams investigate RLHF to improve clinical decision support systems by incorporating expert feedback loops.
- Technical capabilities of RLHF include:
- Efficient learning from relatively small amounts of high-quality human feedback.
- Ability to capture complex, subjective preferences that are difficult to encode explicitly.
- Limitations remain:
- High cost and effort in collecting representative, unbiased human feedback.
- Potential for learned reward models to inherit human biases or inconsistencies.
- Challenges in scaling feedback collection and ensuring robustness against adversarial or noisy inputs.
- Standards and frameworks for RLHF are emerging, focusing on transparency in feedback collection, reproducibility of reward modelling, and ethical considerations in deployment.

  ## Research & Literature

- Key academic papers and sources include:
- Christiano, P. F., Leike, J., Brown, T., et al. (2017). *Deep reinforcement learning from human preferences*. Advances in Neural Information Processing Systems, 30.  
  DOI: 10.5555/3295222.3295349
- Knox, W. B., & Stone, P. (2009). *Interactively shaping agents via human reinforcement: The TAMER framework*. Proceedings of the Fifth International Conference on Knowledge Capture.  
  DOI: 10.1145/1597735.1597748
- Ibarz, J., Leike, J., Berner, C., et al. (2018). *Reward learning from human preferences and demonstrations in Atari*. Advances in Neural Information Processing Systems, 31.  
  URL: https://arxiv.org/abs/1811.06521
- Lambert, N. (2025). *RLHF Book*. Available at: https://rlhfbook.com
- Ongoing research directions focus on:
- Improving sample efficiency and robustness of reward models.
- Combining RLHF with other alignment techniques such as constitutional AI or scalable oversight.
- Addressing bias and fairness in human feedback data.
- Extending RLHF to multi-modal and interactive AI systems.

  ## UK Context

- The UK has made significant contributions to RLHF research and applications, with institutions like the Alan Turing Institute collaborating with universities and industry partners.
- North England innovation hubs such as Manchester, Leeds, Newcastle, and Sheffield are active in AI research that incorporates RLHF, particularly in sectors like healthcare AI, autonomous systems, and financial technology.
- For instance, Leeds AI Centre explores RLHF to enhance explainability and trustworthiness in AI-driven decision-making.
- Newcastle University investigates human-in-the-loop reinforcement learning for robotics and assistive technologies.
- Regional case studies highlight the integration of RLHF in NHS digital health projects, where human feedback from clinicians helps tailor AI diagnostic tools to real-world clinical preferences and constraints.

  ## Future Directions

- Emerging trends include:
- Integration of RLHF with large-scale human feedback platforms to democratise and diversify feedback sources.
- Development of hybrid models combining RLHF with unsupervised or self-supervised learning to reduce reliance on costly human annotations.
- Advances in interpretability and transparency of reward models to foster trust and regulatory compliance.
- Anticipated challenges:
- Scaling human feedback collection while maintaining quality and representativeness.
- Mitigating unintended biases and ensuring equitable AI behaviour across diverse populations.
- Balancing model optimisation with safety and ethical constraints.
- Research priorities emphasise:
- Robustness of RLHF-trained models in dynamic, real-world environments.
- Cross-disciplinary collaboration to refine feedback protocols and ethical frameworks.
- Exploration of RLHF in novel domains such as education, law, and creative industries.

  ## References

  1. Christiano, P. F., Leike, J., Brown, T., et al. (2017). Deep reinforcement learning from human preferences. *Advances in Neural Information Processing Systems*, 30. DOI: 10.5555/3295222.3295349  
  2. Knox, W. B., & Stone, P. (2009). Interactively shaping agents via human reinforcement: The TAMER framework. *Proceedings of the Fifth International Conference on Knowledge Capture*. DOI: 10.1145/1597735.1597748  
  3. Ibarz, J., Leike, J., Berner, C., et al. (2018). Reward learning from human preferences and demonstrations in Atari. *Advances in Neural Information Processing Systems*, 31. URL: https://arxiv.org/abs/1811.06521  
  4. Lambert, N. (2025). *RLHF Book*. Available at: https://rlhfbook.com

  ## Metadata

- **Last Updated**: 2025-11-11
- **Review Status**: Comprehensive editorial review
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable

### Provenance

## Merged from RLHF (needs reconciliation)
Reinforcement Learning from Human Feedback (RLHF) is a training methodology that aligns large language models and other AI systems with human preferences by first collecting human comparison judgements between model outputs, training a reward model on those judgements, and then optimising the language model policy against the reward model using reinforcement learning — typically Proximal Policy Optimisation with a KL-divergence penalty to prevent reward hacking. RLHF enables models to be steered towards outputs that human annotators prefer for helpfulness, harmlessness, and honesty, going beyond what is achievable with supervised fine-tuning on static demonstration data alone. The technique was popularised by OpenAI's InstructGPT work and underlies the alignment pipeline of models such as ChatGPT, Claude, and Gemini. Variants including Direct Preference Optimisation, Constitutional AI, and RLAIF (Reinforcement Learning from AI Feedback) extend or simplify the original three-stage pipeline.

### Overview

- RLHF addresses a fundamental limitation of [[Supervised Fine-Tuning]]: models trained on human-written demonstrations learn to imitate the statistical patterns of the training corpus but lack an explicit signal for which behaviours are genuinely preferable in novel or ambiguous situations.
- The technique gained widespread adoption following OpenAI's InstructGPT paper (2022), which demonstrated that an RLHF-aligned model scored higher on human preference evaluations than the much larger base GPT-3 model trained only on next-token prediction.
- Major production AI systems that use RLHF or close variants include ChatGPT, Claude (Anthropic), Gemini (Google DeepMind), Llama instruction-tuned variants, and Mistral instruct models.
- The core promise of RLHF is scalable alignment: as models grow in capability, human preference signals continue to provide a meaningful training gradient for steering behaviour even when the model's outputs exceed annotator expertise in narrow technical domains.

### Key Components

#### Stage 1 — Supervised Fine-Tuning (SFT)

- A pre-trained [[Large Language Model]] is fine-tuned on a curated set of human-written demonstrations of desired behaviour (instruction-response pairs).
- This stage establishes a baseline policy that generates coherent, on-topic responses.
- SFT alone is insufficient: the model mimics demonstration style but lacks generalised preference awareness.

#### Stage 2 — Reward Model Training

- Human annotators compare pairs of model outputs and express which they prefer (or rank multiple outputs).
- A separate [[Reward Model]] — itself a language model with a scalar prediction head — is trained on these preference pairs to predict human ratings.
- The reward model generalises from the annotated pairs to unseen outputs, providing a differentiable signal for RL.
- Quality of the reward model is critical: a weak or biased reward model produces a biased alignment signal.

#### Stage 3 — RL Optimisation

- The SFT policy is treated as the actor in a [[Policy Gradient]] RL loop.
- [[Proximal Policy Optimisation]] (PPO) updates the policy to maximise expected reward model scores over sampled outputs.
- A [[KL Divergence]] penalty between the current policy and the SFT reference policy prevents the model from drifting too far from coherent language generation (mitigating [[Reward Hacking]]).
- The resulting policy is the aligned model, combining fluency from SFT with preference-steering from RL.

### Reward Model Dynamics

- The reward model is trained on [[Preference Data]] — binary comparisons or rankings — rather than absolute quality scores, which are harder to elicit consistently from annotators.
- Bradley-Terry and Thurstone models are common statistical frameworks for extracting scalar scores from pairwise comparisons.
- Reward model generalisation is constrained by the distribution of the annotation data; inputs far from the training distribution can yield unreliable scores.
- [[Reward Hacking]] (also called specification gaming) occurs when the policy finds inputs that score highly on the reward model without corresponding to genuinely preferred outputs, exploiting distributional gaps.

### Variants and Extensions

#### Direct Preference Optimisation (DPO)

- [[Direct Preference Optimisation]] bypasses the explicit reward model entirely by reparameterising the RLHF objective directly in terms of the policy, allowing training on preference pairs without a separate RL loop.
- DPO simplifies the training pipeline and reduces hyperparameter sensitivity while achieving competitive alignment performance.

#### Constitutional AI (CAI)

- [[Constitutional AI]], developed by Anthropic, introduces a self-critique loop where the model revises its outputs against a set of written principles (a "constitution") before human preference data is collected, reducing reliance on costly safety-specific human annotation.
- CAI blends RLHF with a rule-based self-revision step, producing the RLAIF (Reinforcement Learning from AI Feedback) variant for harmlessness.

#### RLAIF

- [[RLAIF]] replaces human annotators with an AI model (often a stronger or same-family model) to generate preference labels at lower cost, scaling to larger datasets.
- Concerns exist about preference-label bias propagating from the AI judge into the trained model.

#### Iterative RLHF / Online RLHF

- Multiple rounds of [[Human Annotation]] collected on the current model's outputs (rather than a fixed static dataset) improve alignment stability and reduce distributional mismatch.

#### Group Relative Policy Optimisation (GRPO)

- An efficient alternative to PPO used in models such as DeepSeek-R1, averaging rewards within a group of sampled responses to estimate the baseline, reducing memory footprint.

### Applications and Use Cases

- **Conversational AI assistants** — ChatGPT, Claude, Gemini, Llama Chat all use RLHF or DPO to make responses helpful, inoffensive, and aligned with user intent.
- **Code generation models** — GitHub Copilot and similar tools use preference fine-tuning to steer code suggestions toward idiomatic, correct, and safe patterns.
- **Summarisation** — RLHF trains summarisation models to generate accurate, concise summaries preferred by humans over maximally faithful but verbose alternatives.
- **Content moderation** — Reward models trained on human moderation decisions can classify content at scale.
- **Reasoning models** — Process-reward models (PRMs) apply RLHF-style supervision to intermediate reasoning steps, rewarding correct chain-of-thought steps rather than only final answers (used in OpenAI o1 and similar models).
- **Robotics and embodied agents** — RLHF principles extend to [[Robotics]] settings where human evaluators rate robot action sequences, though sample efficiency constraints remain challenging.
- **Drug discovery and scientific domains** — Preference fine-tuning on expert evaluations steers generative models toward plausible, synthesisable molecular structures.

### Challenges and Limitations

- **Annotation cost and scalability** — High-quality human preference data is expensive and slow to collect; annotator disagreement introduces label noise.
- **Annotator bias** — Annotations reflect the demographics, values, and expertise of annotators, which may not represent diverse global preferences.
- **Reward hacking** — Policies can exploit reward model weaknesses, generating outputs that score highly but are not genuinely preferred by users.
- **Goodhart's Law** — "When a measure becomes a target, it ceases to be a good measure"; the reward model is an imperfect proxy for human values and will be exploited.
- **Overoptimisation** — Excessive RL steps can degrade language fluency as the policy moves too far from the SFT baseline.
- **Scalable oversight** — In domains where model outputs exceed human evaluator expertise, reliable preference judgements become difficult to obtain, motivating research into [[Scalable Oversight]] and debate-based methods.
- **Value alignment ambiguity** — Human preferences over complex ethical trade-offs are inconsistent and context-dependent, making a single scalar reward an oversimplification.

### Standards and Context

- RLHF does not yet have a formal standardisation body or specification; it is defined by a body of academic literature and industrial practice.
- Key papers establishing the methodology:
  - Christiano et al. (2017) — "Deep Reinforcement Learning from Human Preferences" (originally demonstrated on Atari and MuJoCo control tasks).
  - Stiennon et al. (2020) — "Learning to Summarise with Human Feedback" (OpenAI, applied to summarisation).
  - Ouyang et al. (2022) — "Training language models to follow instructions with human feedback" (InstructGPT / ChatGPT).
  - Bai et al. (2022) — "Training a Helpful and Harmless Assistant with Reinforcement Learning from Human Feedback" (Anthropic).
- Regulatory context: EU AI Act and related governance frameworks discuss human oversight and alignment mechanisms; RLHF is positioned as one technical measure supporting human-in-the-loop control.
- [[AI Governance]] and red-teaming practices increasingly treat RLHF-aligned models as a baseline safety floor, not a complete solution.
- The [[Alignment Research Center]] and [[Anthropic]] publish active safety-oriented RLHF research; [[OpenAI]] Alignment and [[DeepMind]] Safety teams similarly publish in this space.

### Provenance

