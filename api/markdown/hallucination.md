- ### Definition
  - Hallucination in [[Artificial Intelligence]] is the generation of fluent, confident output by a [[Generative Model]] that is factually incorrect, unsupported by its input context, or entirely fabricated. The term borrows from psychology — where hallucination denotes perception without external stimulus — to describe a structural failure in models that predict likely text rather than verify truth. Hallucination is a critical concern for [[AI Safety]], [[AI Alignment]], and the responsible deployment of [[Large Language Model]] systems in high-stakes domains such as medicine, law, and science.

- ### Overview
  - Hallucination emerges from the core optimisation objective of autoregressive [[Neural Network]] architectures: maximising the probability of the next token given prior context. Because the model has no explicit mechanism for distinguishing remembered facts from plausible-sounding inventions, it can generate output that is stylistically fluent yet semantically false.
  - The phenomenon was documented in early neural machine translation systems and became prominent with the rise of large-scale [[Large Language Model]] architectures such as GPT-3, PaLM, and their successors. It affects [[Vision-Language Model]] systems as well, where models may describe image content that does not exist.
  - Hallucination is now a primary research area within [[AI Safety Research]], [[Model Evaluation]], and [[Responsible AI]] communities, influencing regulatory discourse, benchmark development, and system design.
  - Why it matters:
    - Erodes user trust and limits adoption of [[Conversational AI]] in mission-critical settings.
    - Creates downstream [[Misinformation]] risks when model outputs are not verified before publication.
    - Complicates [[AI Governance]] frameworks that require auditable, traceable factual claims.
    - Drives investment in [[Retrieval-Augmented Generation]] and [[Tool-Augmented Reasoning]] as architectural mitigations.

- ### Taxonomy of Hallucination Types
  - **Intrinsic hallucination** — output that directly contradicts information present in the input context (e.g. a summarisation model inverting stated dates).
  - **Extrinsic hallucination** — output that cannot be verified against or contradicted by the input context; the model adds information not derivable from the source.
  - **Factual hallucination** — assertions that conflict with world knowledge (invented citations, non-existent persons, false historical events).
  - **Reasoning hallucination** — logically invalid inferences drawn within a [[Chain-of-Thought Prompting]] trace even when premises are correct.
  - **Multimodal hallucination** — erroneous description of visual content in [[Vision-Language Model]] or [[Image Captioning]] systems.
  - **Attribution hallucination** — fabrication of sources, authors, or organisations to lend spurious credibility to a claim.

- ### Mechanisms and Root Causes
  - **Distributional mismatch** — training data distributions do not uniformly cover all factual claims; rare or long-tail facts are poorly memorised, causing the model to extrapolate plausibly rather than recall accurately.
  - **Sycophancy** — models trained with [[Reinforcement Learning from Human Feedback]] may learn to produce confidently stated answers that align with perceived user expectations rather than ground truth.
  - **Context window limitations** — long documents exceed the [[Attention Mechanism]] effective range, causing models to conflate or lose track of source material.
  - **Knowledge cutoff** — models have a fixed [[Training Data]] cutoff; queries about events after this date elicit confabulation.
  - **Overconfident decoding** — greedy or beam-search decoding selects high-probability token sequences that bypass less-probable but factually correct paths.
  - **Memorisation vs. generalisation tension** — the same capacity that enables generalisation prevents exhaustive memorisation of every fact, creating gaps that hallucination fills.

- ### Mitigations and Countermeasures
  - **[[Retrieval-Augmented Generation]] (RAG)** — augments generation with retrieved documents from a verified corpus, grounding assertions in external evidence.
  - **[[Tool-Augmented Reasoning]]** — equips the model with external tools (calculators, search APIs, code interpreters) that bypass reliance on parametric memory.
  - **[[Chain-of-Thought Prompting]]** — eliciting step-by-step reasoning can reduce some categories of reasoning hallucination by externalising the inference chain for verification.
  - **[[Factual Grounding]] and citation enforcement** — prompting strategies or fine-tuning that require explicit attribution to source passages.
  - **[[Output Verification]]** — post-hoc fact-checking pipelines using dedicated classifiers or cross-model verification.
  - **[[Uncertainty Quantification]]** — calibrating model confidence so that uncertain outputs are flagged rather than stated assertively; closely related to [[Calibration]].
  - **Fine-tuning and RLHF adjustments** — targeted [[Reinforcement Learning from Human Feedback]] with annotators penalising confabulation.
  - **[[Constitutional AI]]** — principle-based self-critique during generation, encouraging the model to revise outputs that violate factuality principles.
  - **Decoding strategies** — sampling with temperature control, top-p / nucleus sampling, and contrastive decoding can reduce overconfident hallucination.

- ### Evaluation and Benchmarks
  - Hallucination is measured by specialised benchmarks including:
    - **TruthfulQA** — tests whether models generate truthful answers to questions designed to elicit common misconceptions.
    - **HaluEval** — a large-scale dataset of hallucinated and non-hallucinated samples for training detectors.
    - **FActScore** — decomposes long-form generation into atomic claims and verifies each against a knowledge base.
    - **SummEval / QAGS** — evaluate faithfulness in summarisation.
  - [[Model Evaluation]] pipelines increasingly incorporate hallucination-specific metrics alongside perplexity and downstream task accuracy.
  - Human evaluation remains the gold standard but is expensive; automated [[AI Judges]] (using a capable model to evaluate another) are an emerging alternative, themselves susceptible to hallucination.

- ### Applications and Use Cases
  - **Healthcare** — hallucinated drug dosages, contraindications, or diagnostic criteria in clinical decision support represent direct patient safety risks. Mitigation via [[Retrieval-Augmented Generation]] from curated medical databases.
  - **Legal** — fabricated case citations (as documented in published court failures involving AI-assisted legal research) undermine professional obligations.
  - **Scientific research** — auto-generated literature reviews may cite non-existent papers; [[AI Safety Research]] communities flag this as an obstacle to AI-assisted science.
  - **Journalism and fact-checking** — hallucination detection tools are being integrated into newsroom workflows to audit AI-generated copy before publication.
  - **Customer service** — enterprise [[Conversational AI]] deployments use RAG and knowledge-base grounding to reduce product misinformation.
  - **Education** — tutoring systems must avoid teaching incorrect facts; [[Factual Grounding]] strategies are a prerequisite for educational LLM deployment.
  - **Code generation** — hallucinated API calls, non-existent library functions, or subtly wrong logic in AI-generated code (e.g. [[GitHub Copilot]]-class tools) create security and correctness risks.

- ### Relationships
  - contrastsWith:: [[Factual Grounding]], [[Calibration]], [[Truthfulness]]
  - dependsOn:: [[Large Language Model]], [[Neural Network]], [[Autoregressive Generation]]
  - uses:: [[Retrieval-Augmented Generation]], [[Tool-Augmented Reasoning]], [[Chain-of-Thought Prompting]]
  - requires:: [[Output Verification]], [[Human Oversight]]
  - enables:: [[Misinformation]], [[AI Safety Research]]
  - relatedTo:: [[AI Risk]], [[AI Alignment]], [[Prompt Engineering]], [[Conversational AI]], [[Model Evaluation]], [[Uncertainty Quantification]]
  - bridges-to:: [[Information Integrity]], [[AI Governance]], [[Trust and Safety]]
  - subClassOf:: [[AI Risk]]

- ### Standards and Governance Context
  - The NIST AI Risk Management Framework (AI RMF 1.0) identifies hallucination under the broader category of AI trustworthiness and reliability risks, encouraging organisations to measure and mitigate confabulation in deployed systems.
  - The EU AI Act classifies applications where hallucination could cause harm (medical, legal, critical infrastructure) as high-risk, requiring conformity assessment and human oversight.
  - [[ISO/IEC 42001]] (AI Management Systems) and related standards increasingly reference factual accuracy and output verification as operational requirements.
  - The Partnership on AI, MLCommons, and Frontier Model Forum have all issued guidance positioning hallucination mitigation as a key responsible deployment criterion.
  - [[AI Governance]] discourse distinguishes between hallucination as a technical property (to be measured and mitigated) and as a legal/ethical liability (requiring disclosure, audit trails, and redress mechanisms).

- ### Semantic Classification
  - owl-class:: ai-safety:Hallucination
  - owl-role:: Class
  - sameAs:: [[Confabulation]], [[Model Confabulation]]

- ### Provenance
  - sources:: TruthfulQA (Lin et al. 2022), HaluEval (Li et al. 2023), FActScore (Min et al. 2023), NIST AI RMF 1.0 (2023), EU AI Act (2024)
  - updated:: 2026-06-13
  - migration-date:: 2026-05-29T00:00:00Z