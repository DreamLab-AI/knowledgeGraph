- ### Definition
  - Foundation Models are large-scale machine learning models pretrained on broad data at scale using self-supervised objectives (next-token prediction, masked token prediction, contrastive image-text alignment, denoising diffusion) and adaptable to a wide spectrum of downstream tasks through fine-tuning, instruction tuning, in-context learning, prompting, retrieval augmentation, or lightweight parameter-efficient adaptation (LoRA, QLoRA, adapter layers, prefix tuning), a category and terminological frame formally introduced by the Stanford Center for Research on Foundation Models (CRFM) in August 2021 through the 212-page multi-author position paper "On the Opportunities and Risks of Foundation Models" (Bommasani, Hudson, Adeli, Altman, Arora, von Arx, Bernstein, Bohg, Bosselut, Brunskill, Brynjolfsson, Buch, Card, Castellon, Chatterji, Chen, Creel, Davis, Demszky, Donahue, Doumbouya, Durmus, Ermon, Etchemendy, Ethayarajh, Fei-Fei, Finn, Gale, Gillespie, Goel, Goodman, Grossman, Guha, Hashimoto, Henderson, Hewitt, Ho, Hong, Hsu, Huang, Icard, Jain, Jurafsky, Kalluri, Karamcheti, Keeling, Khani, Khattab, Koh, Krass, Krishna, Kuditipudi, Kumar, Ladhak, Lee, Lee, Leskovec, Levent, Li, Li, Liang, Liang, Manning, Mirchandani, Mitchell, Munyikwa, Nair, Narayan, Narayanan, Newman, Nie, Niebles, Nilforoshan, Nyarko, Ogut, Orr, Papadimitriou, Park, Piech, Portelance, Potts, Raghunathan, Reich, Ren, Rong, Roohani, Ruiz, Ryan, Ré, Sadigh, Sagawa, Santhanam, Shih, Srinivasan, Tamkin, Taori, Thomas, Tramèr, Wang, Wang, Wu, Wu, Wu, Xie, Yasunaga, You, Zaharia, Zhang, Zhang, Zhang, Zhang, Zheng, Zhou, Liang), defined as "any model trained on broad data (generally using self-supervision at scale) that can be adapted to a wide range of downstream tasks", a re-labelling of what had previously been termed "large pretrained language models" (Devlin BERT 2018, Radford GPT 2018) or "transfer-learnable backbones" (He ResNet 2015, Dosovitskiy ViT 2020) that deliberately foregrounded the dual properties of emergence (capabilities arising at scale that are absent in smaller variants) and homogenisation (a single backbone underpinning thousands of downstream applications), now encompassing language foundation models (the GPT lineage GPT-3 / GPT-3.5 / GPT-4 / GPT-4o / GPT-4.5 / GPT-5 from OpenAI, the Claude family Claude 1 / 2 / 3 Opus-Sonnet-Haiku / 3.5 Sonnet / 3.7 Sonnet / Claude 4 / Claude Opus 4 / Claude Sonnet 4.5 / Claude Opus 4.7 from Anthropic, the Gemini family Gemini 1.0 Ultra-Pro-Nano / Gemini 1.5 Pro-Flash / Gemini 2.0 Pro / Gemini 2.5 Pro from Google DeepMind, the Llama family Llama 1 / Llama 2 / Llama 3 / Llama 3.1 405B / Llama 3.3 70B / Llama 4 from Meta, the Mistral family Mistral 7B / Mixtral 8x7B / 8x22B / Mistral Large 2 / Mistral Medium 3 / Codestral / Pixtral from Mistral AI, the DeepSeek family DeepSeek-V2 / V3 / R1 / R1-Zero from DeepSeek, the Qwen family Qwen 2 / 2.5 / 2.5-VL / Qwen 3 from Alibaba, and the smaller dense Gemma / Phi-4 / Granite / Yi / Falcon families), vision foundation models (CLIP and OpenCLIP contrastive image-text models, DINOv2 self-supervised vision transformers from Meta, SAM / SAM 2 / SAM 2.1 segment-anything models from Meta, Sapiens human-centric vision foundation model, EVA and EVA-CLIP scaled visual backbones, ViT-22B from Google), multimodal foundation models (GPT-4o omnimodal text+image+audio+video, Claude Sonnet/Opus vision-enabled, Gemini 2.5 Pro natively multimodal, Pixtral 12B from Mistral, Qwen 2.5-VL, Idefics, LLaVA, Florence-2), video foundation models (Sora and Sora-2 from OpenAI, Veo 2 and Veo 3 from Google DeepMind, Pika 2.0 and Pika 2.2 from Pika Labs, Kling 1.6 and Kling 2.0 from Kuaishou, Wan 2.1 from Alibaba, HunyuanVideo from Tencent, Mochi 1 from Genmo, Open-Sora open replication), audio foundation models (Whisper-large-v3 and Whisper-v3-turbo from OpenAI for ASR/STT, Voicebox and AudioBox from Meta, Suno and Udio for music generation, MusicGen and AudioGen from Meta, Stable Audio 2.0, ElevenLabs proprietary), code foundation models (Codex original 2021, Code Llama 7B/13B/34B/70B, DeepSeek-Coder V2 and V3, StarCoder 2, Qwen 2.5-Coder 32B, Granite Code 34B, the Claude Code CLI-integrated coding agent), action and robotics foundation models (RT-2 vision-language-action from Google DeepMind, π0 from Physical Intelligence, GR00T from NVIDIA, Helix from Figure AI, Octo, OpenVLA), biology and life-sciences foundation models (AlphaFold 2 and AlphaFold 3 protein structure prediction from DeepMind/Isomorphic Labs, ESM-2 and ESM-3 protein language models from Meta/EvolutionaryScale, RoseTTAFold from Baker Lab, Evo and Evo-2 DNA language models from Arc Institute, BioBERT, PubMedBERT, Med-PaLM 2, NVIDIA BioNeMo collection), tabular foundation models (TabPFN-v2 in-context tabular classifier from Prior Labs / University of Freiburg), and time-series foundation models (TimeFM 200M from Google, Moirai universal foundation forecaster from Salesforce, Chronos T5-based from Amazon, Lag-Llama, Tiny Time Mixers from IBM), trained according to scaling laws (Kaplan 2020 power-law L(N,D,C) = (Nc/N)^αN + (Dc/D)^αD relating loss to parameter count and dataset size, Chinchilla Hoffmann 2022 compute-optimal allocation N ≈ D establishing the ~20-token-per-parameter rule revising prior compute allocations, DeepSeek-V3 empirical 7B-optimal token ratio refinement, Mixture-of-Experts scaling Switch Transformer / Mixtral 8x7B-8x22B / DeepSeek-V3-MLA with 671B total / 37B active parameters, Tülu 3 post-training scaling and SmolLM curriculum scaling), trained via a multi-stage pipeline of (1) self-supervised pretraining on web-scale corpora (Common Crawl, RedPajama, FineWeb, Dolma, The Pile, refined and deduplicated to 10-30 trillion tokens), (2) supervised instruction tuning (SFT) on curated instruction-response pairs (FLAN, Alpaca, OpenAssistant, Tülu 3 SFT mixture), (3) preference optimisation (PO) via Reinforcement Learning from Human Feedback (RLHF, InstructGPT/Ouyang 2022), Direct Preference Optimisation (DPO, Rafailov 2023), Kahneman-Tversky Optimisation (KTO, Ethayarajh 2024), Identity Preference Optimisation (IPO, Azar 2023), Odds-Ratio Preference Optimisation (ORPO, Hong 2024), and Group Relative Policy Optimisation (GRPO, used by DeepSeek-R1), (4) constitutional AI and Reinforcement Learning from AI Feedback (RLAIF, Bai/Anthropic 2022) substituting human raters with AI critics, and (5) increasingly via synthetic data training (Phi-4 textbook-quality synthetic curriculum from Microsoft, DeepSeek-V3 distillation from R1 reasoning traces, OpenAI o1/o3 reasoning trace synthesis), debated under an open-weights versus closed-weights axis (Llama / Mistral / DeepSeek / Qwen released under permissive though often non-OSI-compliant licences such as the Llama 3 Community License versus closed-API access to GPT / Claude / Gemini), coordinated industrially through the Frontier Model Forum (founded July 2023 by Anthropic, Google, Microsoft, OpenAI, expanded to include Amazon and Meta), governed by emerging regulatory frameworks (the European Union AI Act General-Purpose AI provisions Articles 51-55 with the systemic-risk threshold set at training compute ≥10^25 FLOP, the GPAI Code of Practice signed by major frontier labs in July 2025, the UK AI Safety Institute / AI Security Institute pre-deployment evaluation MOUs with Anthropic / OpenAI / Google DeepMind, the United States AISI within NIST, the South Korean AI Framework Act entering force January 2026, and Singapore's MAS AI governance framework), strategically central to the United Kingdom via UK AISI frontier-model evaluations at the Whitehall and Cambridge sites, the ARIA Safeguarded AI programme led by David "davidad" Dalrymple, the Alan Turing Institute's Foundation Models programme, research at Imperial College London / UCL / Cambridge / Edinburgh / Oxford / Manchester / Leeds / Sheffield / Newcastle, and UK industry leaders including Wayve (foundation model for autonomous driving raising $1.05B in 2024), Synthesia (avatar foundation models, $2.1B valuation), Stability AI (open generative models), Mistral with London office, and Cohere (Toronto-London bilingual foundation models), and explicitly contrasted with narrow task-specific models (single-purpose image classifiers, sentiment analysers, churn predictors), classical expert systems and symbolic AI (CYC, MYCIN, Prolog rule bases), and pre-2017 NLP pipelines (separate POS taggers / parsers / NER / coreference / sentiment cascades) which Foundation Models supersede by unifying broad capability under a single adaptable backbone.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:FoundationModels
  - owl-role:: GeneralPurposeModelCategory
  - owl-inferred:: ai:LargeScalePretrainedModel, ai:TransferLearningBackbone, ai:GeneralPurposeAI, ai:FrontierModel, ai:AdaptableModel
  - belongs-to-domain:: [[AI-GroundedDomain]], [[MachineLearningDomain]], [[DeepLearningDomain]], [[FrontierAIDomain]], [[ComputationAndIntelligenceDomain]]
  - implemented-in-layer:: [[ModelArchitectureLayer]], [[AlgorithmLayer]], [[ApplicationLayer]], [[PlatformLayer]], [[InfrastructureLayer]]

- ### Relationships
  - is-subclass-of:: [[Machine Learning]], [[Deep Learning]], [[General-Purpose AI]], [[Pretrained Model]], [[Self-Supervised Learning]], [[Transfer Learning]]
  - has-part:: [[Pretraining Stage]], [[Instruction Tuning]], [[Preference Optimisation]], [[Tokeniser]], [[Embedding Layer]], [[Attention Mechanism]], [[Transformer Block]], [[Mixture of Experts]], [[Output Head]], [[Safety Classifier]], [[System Prompt]]
  - requires:: [[Massive Training Corpus]], [[Large-Scale Distributed Training]], [[GPU Compute]], [[NVIDIA H100]], [[NVIDIA H200]], [[NVIDIA B200]], [[Training Data Curation]], [[Data Deduplication]], [[Tokenisation]], [[Mixed Precision Training]]
  - enables:: [[In-Context Learning]], [[Few-Shot Learning]], [[Zero-Shot Learning]], [[Chain of Thought Reasoning]], [[Code Generation]], [[Mathematical Reasoning]], [[Multimodal Understanding]], [[Agentic Workflows]], [[Retrieval-Augmented Generation]], [[Synthetic Data Generation]], [[Tool Use]]
  - implements:: [[Transformer Architecture]], [[Self Attention]], [[Rotary Position Embeddings]], [[FlashAttention]], [[Grouped Query Attention]], [[Mixture of Experts Routing]], [[Multi-Head Latent Attention]], [[Layer Normalisation]], [[RMSNorm]], [[SwiGLU]]
  - depends-on:: [[Scaling Laws]], [[Chinchilla Scaling]], [[Kaplan Scaling Laws]], [[Self-Supervised Learning]], [[Backpropagation]], [[Adam Optimiser]], [[AdamW Optimiser]], [[Stochastic Gradient Descent]], [[Tensor Parallelism]], [[Pipeline Parallelism]]
  - supports:: [[Conversational AI]], [[Coding Assistants]], [[Search and Retrieval]], [[Drug Discovery]], [[Protein Structure Prediction]], [[Autonomous Driving]], [[Robotics]], [[Scientific Discovery]], [[Creative Tools]], [[Education and AI]], [[Healthcare AI]]
  - uses:: [[Next-Token Prediction]], [[Masked Language Modelling]], [[Contrastive Learning]], [[Denoising Diffusion]], [[RLHF]], [[Direct Preference Optimization]], [[Constitutional AI]], [[Synthetic Data Training]], [[Distillation]], [[LoRA]], [[Quantisation]]
  - contrasts-with:: [[Narrow Task-Specific Models]], [[Expert Systems]], [[Symbolic AI]], [[Pre-2017 NLP Pipelines]], [[Hand-Crafted Feature Engineering]], [[Rule-Based Systems]]
  - related-to:: [[Large Language Models]], [[Generative AI]], [[Frontier Model]], [[Multimodal AI]], [[Emergent Abilities]], [[Homogenisation]], [[Frontier Model Forum]], [[Stanford CRFM]], [[Anthropic]], [[OpenAI]], [[Google DeepMind]], [[Meta AI]], [[Mistral]], [[DeepSeek]], [[Alibaba Qwen]], [[xAI]], [[Cohere]], [[Wayve]], [[Synthesia]]
  - standardized-by:: [[MMLU Benchmark]], [[MMLU-Pro]], [[GPQA Diamond]], [[HumanEval]], [[SWE-Bench]], [[LMSYS Chatbot Arena]], [[HELM]], [[BIG-Bench]], [[AGI-Eval]], [[Frontier Model Forum Voluntary Commitments]], [[GPAI Code of Practice]]
  - regulated-by:: [[EU AI Act]], [[GPAI Article 51]], [[GPAI Article 52]], [[GPAI Article 53]], [[GPAI Article 55]], [[UK AI Safety Institute]], [[US AI Safety Institute]], [[Korea AI Framework Act 2026]], [[Bletchley Park Declaration]], [[Seoul AI Summit]], [[Hiroshima AI Process]]

- ### Content

  ## Compositional Relationships (Components)
  SubClassOf(ai:FoundationModels
    ObjectSomeValuesFrom(ai:hasPart ai:PretrainingStage))
  SubClassOf(ai:FoundationModels
    ObjectSomeValuesFrom(ai:hasPart ai:InstructionTuning))
  SubClassOf(ai:FoundationModels
    ObjectSomeValuesFrom(ai:hasPart ai:PreferenceOptimisation))
  SubClassOf(ai:FoundationModels
    ObjectSomeValuesFrom(ai:hasPart ai:Tokeniser))
  SubClassOf(ai:FoundationModels
    ObjectSomeValuesFrom(ai:hasPart ai:EmbeddingLayer))
  SubClassOf(ai:FoundationModels
    ObjectSomeValuesFrom(ai:hasPart ai:AttentionMechanism))
  SubClassOf(ai:FoundationModels
    ObjectSomeValuesFrom(ai:hasPart ai:TransformerBlock))
  SubClassOf(ai:FoundationModels
    ObjectSomeValuesFrom(ai:hasPart ai:SafetyClassifier))

  ## Dependency Relationships
  SubClassOf(ai:FoundationModels
    ObjectSomeValuesFrom(ai:requires ai:MassiveTrainingCorpus))
  SubClassOf(ai:FoundationModels
    ObjectSomeValuesFrom(ai:requires ai:LargeScaleDistributedTraining))
  SubClassOf(ai:FoundationModels
    ObjectSomeValuesFrom(ai:requires ai:GPUCompute))
  SubClassOf(ai:FoundationModels
    ObjectSomeValuesFrom(ai:requires ai:TrainingDataCuration))
  SubClassOf(ai:FoundationModels
    ObjectSomeValuesFrom(ai:requires ai:Tokenisation))
  SubClassOf(ai:FoundationModels
    ObjectSomeValuesFrom(ai:dependsOn ai:ScalingLaws))
  SubClassOf(ai:FoundationModels
    ObjectSomeValuesFrom(ai:dependsOn ai:ChinchillaScaling))
  SubClassOf(ai:FoundationModels
    ObjectSomeValuesFrom(ai:dependsOn ai:SelfSupervisedLearning))
  SubClassOf(ai:FoundationModels
    ObjectSomeValuesFrom(ai:dependsOn ai:Backpropagation))
  SubClassOf(ai:FoundationModels
    ObjectSomeValuesFrom(ai:dependsOn ai:TensorParallelism))

  ## Capability Relationships
  SubClassOf(ai:FoundationModels
    ObjectSomeValuesFrom(ai:enables ai:InContextLearning))
  SubClassOf(ai:FoundationModels
    ObjectSomeValuesFrom(ai:enables ai:FewShotLearning))
  SubClassOf(ai:FoundationModels
    ObjectSomeValuesFrom(ai:enables ai:ZeroShotLearning))
  SubClassOf(ai:FoundationModels
    ObjectSomeValuesFrom(ai:enables ai:ChainOfThoughtReasoning))
  SubClassOf(ai:FoundationModels
    ObjectSomeValuesFrom(ai:enables ai:CodeGeneration))
  SubClassOf(ai:FoundationModels
    ObjectSomeValuesFrom(ai:enables ai:MultimodalUnderstanding))
  SubClassOf(ai:FoundationModels
    ObjectSomeValuesFrom(ai:enables ai:AgenticWorkflows))
  SubClassOf(ai:FoundationModels
    ObjectSomeValuesFrom(ai:enables ai:RetrievalAugmentedGeneration))
  SubClassOf(ai:FoundationModels
    ObjectSomeValuesFrom(ai:supports ai:ConversationalAI))
  SubClassOf(ai:FoundationModels
    ObjectSomeValuesFrom(ai:supports ai:DrugDiscovery))
  SubClassOf(ai:FoundationModels
    ObjectSomeValuesFrom(ai:supports ai:AutonomousDriving))
  SubClassOf(ai:FoundationModels
    ObjectSomeValuesFrom(ai:supports ai:ScientificDiscovery))

  ## Implementation Relationships
  SubClassOf(ai:FoundationModels
    ObjectSomeValuesFrom(ai:implements ai:TransformerArchitecture))
  SubClassOf(ai:FoundationModels
    ObjectSomeValuesFrom(ai:implements ai:SelfAttention))
  SubClassOf(ai:FoundationModels
    ObjectSomeValuesFrom(ai:implements ai:RotaryPositionEmbeddings))
  SubClassOf(ai:FoundationModels
    ObjectSomeValuesFrom(ai:implements ai:FlashAttention))
  SubClassOf(ai:FoundationModels
    ObjectSomeValuesFrom(ai:implements ai:GroupedQueryAttention))
  SubClassOf(ai:FoundationModels
    ObjectSomeValuesFrom(ai:implements ai:MixtureOfExpertsRouting))
  SubClassOf(ai:FoundationModels
    ObjectSomeValuesFrom(ai:uses ai:NextTokenPrediction))
  SubClassOf(ai:FoundationModels
    ObjectSomeValuesFrom(ai:uses ai:MaskedLanguageModelling))
  SubClassOf(ai:FoundationModels
    ObjectSomeValuesFrom(ai:uses ai:ContrastiveLearning))
  SubClassOf(ai:FoundationModels
    ObjectSomeValuesFrom(ai:uses ai:DenoisingDiffusion))
  SubClassOf(ai:FoundationModels
    ObjectSomeValuesFrom(ai:uses ai:RLHF))
  SubClassOf(ai:FoundationModels
    ObjectSomeValuesFrom(ai:uses ai:DPO))
  SubClassOf(ai:FoundationModels
    ObjectSomeValuesFrom(ai:uses ai:ConstitutionalAI))
  SubClassOf(ai:FoundationModels
    ObjectSomeValuesFrom(ai:uses ai:SyntheticDataTraining))

  ## Reduction Relationships
  SubClassOf(ai:FoundationModels
    ObjectSomeValuesFrom(ai:reduces ai:TaskSpecificDataRequirements))
  SubClassOf(ai:FoundationModels
    ObjectSomeValuesFrom(ai:reduces ai:FeatureEngineeringEffort))
  SubClassOf(ai:FoundationModels
    ObjectSomeValuesFrom(ai:reduces ai:DownstreamModelDevelopmentCost))
  SubClassOf(ai:FoundationModels
    ObjectSomeValuesFrom(ai:reduces ai:TimeToProductionAI))
  SubClassOf(ai:FoundationModels
    ObjectSomeValuesFrom(ai:reduces ai:DomainExpertiseBarrier))

  ## Association Relationships
  SubClassOf(ai:FoundationModels
    ObjectSomeValuesFrom(ai:relatedTo ai:LargeLanguageModels))
  SubClassOf(ai:FoundationModels
    ObjectSomeValuesFrom(ai:relatedTo ai:GenerativeAI))
  SubClassOf(ai:FoundationModels
    ObjectSomeValuesFrom(ai:relatedTo ai:FrontierModel))
  SubClassOf(ai:FoundationModels
    ObjectSomeValuesFrom(ai:relatedTo ai:EmergentAbilities))
  SubClassOf(ai:FoundationModels
    ObjectSomeValuesFrom(ai:relatedTo ai:Homogenisation))
  SubClassOf(ai:FoundationModels
    ObjectSomeValuesFrom(ai:contrastsWith ai:NarrowTaskSpecificModels))
  SubClassOf(ai:FoundationModels
    ObjectSomeValuesFrom(ai:contrastsWith ai:ExpertSystems))
  SubClassOf(ai:FoundationModels
    ObjectSomeValuesFrom(ai:contrastsWith ai:SymbolicAI))
  SubClassOf(ai:FoundationModels
    ObjectSomeValuesFrom(ai:contrastsWith ai:Pre2017NLPPipelines))

  ## Data Properties (Characteristics)
  DataPropertyAssertion(ai:hasIdentifier ai:FoundationModels "AI-1101"^^xsd:string)
  DataPropertyAssertion(ai:authorityScore ai:FoundationModels "0.87"^^xsd:decimal)
  DataPropertyAssertion(ai:termCoinedYear ai:FoundationModels "2021"^^xsd:integer)
  DataPropertyAssertion(ai:termCoinedDate ai:FoundationModels "2021-08-16"^^xsd:date)
  DataPropertyAssertion(ai:euAISystemicRiskThresholdFLOP ai:FoundationModels "1e25"^^xsd:double)
  DataPropertyAssertion(ai:chinchillaTokensPerParameter ai:FoundationModels "20"^^xsd:integer)
  DataPropertyAssertion(ai:largestOpenWeightsParameterCount ai:FoundationModels "671000000000"^^xsd:integer)
  DataPropertyAssertion(ai:cumulativeTrainingComputeFLOP2025 ai:FoundationModels "1e27"^^xsd:double)

  ## Property Constraints
  SubClassOf(ai:FoundationModels
    DataMinCardinality(1 ai:hasParameterCount xsd:integer))
  SubClassOf(ai:FoundationModels
    DataMinCardinality(1 ai:hasTrainingTokens xsd:integer))
  SubClassOf(ai:FoundationModels
    DataSomeValuesFrom(ai:isOpenWeights xsd:boolean))
  SubClassOf(ai:FoundationModels
    DataSomeValuesFrom(ai:hasModality xsd:string))

  ## Annotations
  AnnotationAssertion(rdfs:label ai:FoundationModels "Foundation Models"@en)
  AnnotationAssertion(rdfs:comment ai:FoundationModels "Large-scale machine learning models pretrained on broad data at scale using self-supervised objectives and adaptable to a wide range of downstream tasks via fine-tuning, instruction tuning, in-context learning, prompting, or parameter-efficient adaptation. Term introduced by Stanford CRFM in August 2021 (Bommasani et al. 'On the Opportunities and Risks of Foundation Models') foregrounding emergence and homogenisation. Spans language (GPT, Claude, Gemini, Llama, Mistral, DeepSeek, Qwen), vision (CLIP, DINOv2, SAM/SAM 2, Sapiens), multimodal (GPT-4o, Claude Sonnet/Opus, Gemini 2.5, Pixtral, Qwen 2.5-VL), video (Sora, Veo, Pika, Kling, Wan, HunyuanVideo), audio (Whisper, Voicebox, Suno, Udio), code (Codex, Code-Llama, DeepSeek-Coder, Claude Code), action/robotics (RT-2, π0, GR00T, Helix), biology (AlphaFold, ESM, RoseTTAFold, Evo), tabular (TabPFN), and time-series (TimeFM, Moirai, Chronos). Trained via Kaplan/Chinchilla/MoE scaling laws using next-token/masked/contrastive/diffusion self-supervision plus SFT and RLHF/DPO/KTO/IPO/ORPO/GRPO preference optimisation, constitutional AI, and synthetic data. Coordinated through the Frontier Model Forum and governed under EU AI Act GPAI Articles 51-55, UK AISI / US AISI evaluations, the GPAI Code of Practice, and the Korea AI Framework Act."@en)
  AnnotationAssertion(dcterms:identifier ai:FoundationModels "AI-1101"^^xsd:string)
  AnnotationAssertion(dcterms:subject ai:FoundationModels "Machine Learning, Deep Learning, Large Language Models, Multimodal AI, General-Purpose AI, Frontier AI, Scaling Laws, AI Governance"@en)
  )

  ## Property Characteristics
  AsymmetricObjectProperty(ai:requires)
  AsymmetricObjectProperty(ai:enables)
  AsymmetricObjectProperty(ai:implements)
  AsymmetricObjectProperty(ai:reduces)
  TransitiveObjectProperty(ai:dependsOn)
  FunctionalDataProperty(ai:termCoinedYear)
  FunctionalDataProperty(ai:chinchillaTokensPerParameter)

  - ## About Foundation Models
  - **Foundation Models** name a category of large-scale, self-supervised, pretrained machine-learning models that function as broadly capable substrates from which specialised behaviour is induced through adaptation. The terminological move was deliberate: prior labels — "large pretrained language model", "transfer learnable backbone", "general-purpose model", "frontier model" — each described some facet of the phenomenon but none captured the structural shift that BERT (2018), GPT-3 (2020), CLIP (2021), and AlphaFold 2 (2021) collectively forced. The Stanford Center for Research on Foundation Models (CRFM), founded by Percy Liang within Stanford HAI in 2021, advanced the term in the August 2021 position paper "On the Opportunities and Risks of Foundation Models" precisely to make visible two coupled properties whose joint analysis was previously inhibited by a fragmented vocabulary:
  - **Emergence**: capabilities, behaviours, and qualitative regimes that arise at scale and are absent — or vanishing — at smaller scales. Chain-of-thought reasoning emerging around 60B parameters (Wei et al. 2022), in-context learning emerging in GPT-3 175B (Brown et al. 2020), arithmetic generalisation, code synthesis, theory-of-mind probes, and tool use have each demonstrated phase-transition-like onset with respect to compute, parameters, or training tokens.
  - **Homogenisation**: a single backbone underpinning thousands of downstream applications. Where pre-2017 NLP relied on bespoke pipelines (separate part-of-speech taggers, dependency parsers, named-entity recognisers, coreference resolvers, sentiment classifiers, retrieval rankers), foundation models collapse this stack into a single adaptable backbone. The same property creates new systemic risks: defects, biases, vulnerabilities, and shifts in a single foundation model propagate across all dependent applications simultaneously.
  - The category is intentionally broader than "large language model". Foundation Models include vision backbones (CLIP, DINOv2, SAM), multimodal models (GPT-4o, Gemini 2.5, Pixtral), video generators (Sora, Veo, Kling), audio models (Whisper, Suno), code models (Codex, DeepSeek-Coder, Claude Code), robotics policies (RT-2, π0, GR00T), biological models (AlphaFold 3, ESM-3, Evo-2), tabular forecasters (TabPFN-v2), and time-series models (TimeFM, Moirai, Chronos). The unifying property is *not* modality but *adaptability under scale*: a single artefact that, after broad self-supervised pretraining, is competitive with or superior to specialised models across a wide and a priori unbounded task set when adapted via fine-tuning, prompting, retrieval, or lightweight adapter layers.
  - **Why the term matters**: by 2026 the term has been entrenched not only in academic discourse but in regulation. The European Union AI Act adopted the related term "General-Purpose AI" (GPAI) and built its tiered governance regime explicitly around it; the UK AI Safety Institute / AI Security Institute uses "frontier model" and "general-purpose model" interchangeably with "foundation model"; the OECD and the G7 Hiroshima AI Process likewise normalised the category. The choice of a category-level rather than instance-level governance object is itself a consequence of homogenisation: regulating each downstream application independently is intractable when a single backbone underpins millions of deployments.

  - ### Historical Lineage: How the Category Crystallised
  - Foundation Models did not arrive as a discontinuity but as the cumulative consolidation of seven enabling moves that, in retrospect, form a coherent arc:
  - **1. Self-supervised pretraining at scale**: Word2Vec (Mikolov 2013) and GloVe (Pennington 2014) showed that distributional self-supervision yields transferable representations. ELMo (Peters 2018) deepened this with contextual embeddings. BERT (Devlin 2018) introduced masked language modelling on the Transformer (Vaswani 2017) and demonstrated that a single pretrained backbone fine-tuned with minimal task-specific data could exceed specialised state-of-the-art across the entire GLUE benchmark.
  - **2. Decoder-only autoregressive scaling**: GPT (Radford 2018), GPT-2 (Radford 2019), and decisively GPT-3 (Brown 2020, 175B parameters, 300B tokens) demonstrated that a decoder-only Transformer trained on next-token prediction develops in-context learning — the ability to perform new tasks from a handful of demonstrations in the prompt without any parameter update — at sufficient scale. GPT-3 was the proximate empirical trigger for the "foundation models" terminology.
  - **3. Contrastive multimodal pretraining**: CLIP (Radford 2021) and ALIGN (Jia 2021) showed that contrastive image-text pretraining on 400M-1B image-text pairs yields visual backbones with strong zero-shot transfer to ImageNet, retrieval, and downstream vision tasks, breaking the prior assumption that supervised ImageNet pretraining was the canonical vision backbone recipe.
  - **4. Scaling laws as quantitative predictors**: Kaplan et al. 2020 ("Scaling Laws for Neural Language Models") established that test loss falls as a smooth power law in parameters, dataset size, and compute, with predictable exponents. This converted scaling from an empirical accident into a planning instrument. Hoffmann et al. 2022 ("Training Compute-Optimal Large Language Models" / Chinchilla) corrected Kaplan's allocation, showing that compute-optimal models have parameters and tokens scaled in roughly equal proportion (≈20 tokens per parameter for natural-language pretraining), invalidating prior over-parameterised baselines and reshaping training economics.
  - **5. Alignment via human feedback**: InstructGPT (Ouyang 2022) operationalised RLHF — supervised fine-tuning on demonstrations followed by reward-model training and PPO optimisation against the reward — as a practical recipe for transforming raw pretrained completions into helpful, instruction-following assistants. ChatGPT (November 2022) deployed this at consumer scale, making the foundation model paradigm tangible to the wider public and triggering the post-2022 acceleration of investment, regulation, and competitive dynamics.
  - **6. Open-weights releases as a parallel branch**: Llama (Meta, February 2023, weights inadvertently leaked then formally re-released as Llama 2 in July 2023 under a community licence), Mistral 7B (September 2023, Apache 2.0), Falcon 180B (TII Abu Dhabi 2023), DeepSeek (2023-2025), and Qwen (Alibaba 2023-2025) established a parallel open-weights ecosystem competitive with closed-API frontier models across many benchmarks, complicating regulatory categorisation and creating downstream-fine-tuning markets.
  - **7. Scientific foundation models**: AlphaFold 2 (Jumper 2021) demonstrated that a domain-specific foundation model could solve a 50-year-old grand challenge (single-chain protein structure prediction to near-experimental accuracy), generalising the foundation-model recipe beyond language and vision into biology. AlphaFold 3 (Abramson 2024), ESM-2/ESM-3, RoseTTAFold-AA, and Evo-2 extended this to complexes, antibodies, and DNA sequence modelling, validating "foundation model" as a cross-domain category rather than a language-modelling parochialism.

  - ### Core Mathematical Framework: Scaling Laws and Loss Decomposition
  - Foundation Model training economics are governed by *scaling laws* — empirical relationships connecting test loss to model size, dataset size, and training compute that hold across many orders of magnitude.
  - **Kaplan Scaling Laws** (Kaplan et al. 2020): For Transformer language models the cross-entropy test loss L satisfies, to high accuracy across 8 orders of magnitude in compute:
  - L(N, D, C) ≈ (Nc/N)^αN + (Dc/D)^αD
  - where N is the non-embedding parameter count, D the training tokens, C the compute in FLOP, and (αN ≈ 0.076, αD ≈ 0.095, Nc ≈ 8.8×10^13, Dc ≈ 5.4×10^13) are empirically fitted exponents and reference scales. The critical implication is that loss is roughly equally limited by parameters and data, and that *learning rate, batch size, and other hyperparameters matter weakly* compared to N and D.
  - **Chinchilla Compute-Optimal Allocation** (Hoffmann et al. 2022): For a fixed compute budget C ≈ 6ND FLOP (the standard estimate per forward-backward pass), the optimal allocation minimising L(N,D) given C has the property that N* and D* scale roughly equally — D ≈ 20×N tokens per parameter — revising Kaplan's earlier conclusion that parameters should grow faster than data. Under this revision, GPT-3 (175B parameters, 300B tokens, ≈1.7 tokens/parameter) was substantially over-parameterised; Chinchilla itself (70B parameters, 1.4T tokens, ≈20 tokens/parameter) at one quarter the compute of Gopher (280B parameters) outperformed Gopher across MMLU, BIG-Bench, and the LAMBADA benchmark.
  - **DeepSeek-V3 Refinement** (DeepSeek-AI 2024): For Mixture-of-Experts foundation models with 7-billion-active-parameter slices, empirical compute-optimal ratios shift to roughly D ≈ 30-40 tokens per *active* parameter under the DeepSeek-V3 MLA + MoE architecture (671B total / 37B active), reflecting the larger effective capacity per FLOP of MoE compared to dense Transformers.
  - **Mixture-of-Experts Scaling**: Switch Transformer (Fedus 2021), GShard (Lepikhin 2020), Mixtral 8x7B and 8x22B (Mistral 2023-2024), and DeepSeek-V3 demonstrated that sparse Mixture-of-Experts layers — routing each token to k=1 or k=2 of E expert FFNs — yield favourable scaling: total parameters grow with E while compute per token scales only with k, decoupling capacity from FLOP. Under MoE the effective scaling exponent in compute is improved by a factor of approximately k/E, enabling 671B-parameter models trained at 37B-active-parameter compute cost (DeepSeek-V3).
  - **Post-training Scaling** (Tülu 3, Llama 3, DeepSeek-R1): A parallel scaling story has emerged for post-training. The Tülu 3 release (Allen AI, 2024) systematically scaled SFT and DPO mixtures across 939K-task, 264K-preference, and 84K-RL configurations, showing that post-training quality scales with both dataset size and *recipe diversity* (mixing many task families) in ways analogous to pretraining. DeepSeek-R1 (January 2025) demonstrated that pure-RL post-training using GRPO (Group Relative Policy Optimisation) without SFT can elicit chain-of-thought reasoning from sufficiently large base models, marking a regime shift in alignment recipes.
  - **Synthetic-Data Scaling** (Phi-4, DeepSeek-V3): Microsoft Phi-4 (14B, December 2024) demonstrated that carefully curated textbook-style *synthetic* pretraining data can substitute for and outperform unfiltered web data on reasoning benchmarks at fixed parameter count. DeepSeek-V3 distilled long chain-of-thought traces from R1 into its base model. The implication is that the data axis of scaling is itself open to engineering: the quality and curriculum of data may matter more than raw token count once the basic Chinchilla allocation is satisfied.

  - ### Components and Architecture
  - A contemporary Foundation Model is not a single artefact but a *system* comprising tightly coupled pretraining, post-training, evaluation, serving, and safety components. We enumerate the canonical architecture layer-by-layer.
  - **Tokeniser layer**: Byte-Pair Encoding (BPE), WordPiece, or SentencePiece tokenisers map raw bytes / Unicode / images / audio frames into a discrete vocabulary of 32K-256K tokens (GPT-4 cl100k_base ≈100K, Llama 3 ≈128K, DeepSeek-V3 ≈129K, Qwen 2.5 ≈152K). Recent multilingual emphasis has driven vocabulary growth to reduce Asian-language tokenisation overhead. Multimodal models add image patch tokenisers (ViT 14×14 / 16×16 patches), audio frame tokenisers (Whisper 80-mel log-spectrograms, EnCodec / SoundStream neural codecs producing discrete acoustic tokens), and video tokenisers (Sora's "spacetime patches", Cosmos Tokenizer).
  - **Embedding layer**: Token-to-vector lookup tables of dimension d_model (typically 4096 for 7B-class dense models, 8192 for 70B, 12288 for GPT-3 175B-class). Embedding matrices alone consume 1-5% of parameter count and 5-15% of training memory.
  - **Positional encoding**: Rotary Position Embeddings (RoPE, Su 2021) have displaced absolute and learned positional embeddings in nearly all post-2023 frontier models, enabling length extrapolation via base-frequency scaling (YaRN, NTK-aware scaling). ALiBi (Press 2021) and Longformer / BigBird sliding-window approaches remain in specialised long-context configurations.
  - **Transformer block**: The repeating computational unit. Pre-normalisation (RMSNorm replacing LayerNorm in most post-2022 models) wraps two sub-layers: multi-head self-attention and a feed-forward network (FFN). The attention sub-layer increasingly uses **Grouped Query Attention** (GQA, Ainslie 2023) sharing key/value projections across query heads (Llama 3 uses 8 KV heads per 64 query heads at 70B scale) or **Multi-Head Latent Attention** (MLA, DeepSeek-V2/V3) which compresses KV cache by an order of magnitude. The FFN uses **SwiGLU** activation (Shazeer 2020) in nearly all frontier models, replacing the original ReLU/GELU.
  - **Mixture-of-Experts layer (sparse models)**: In MoE variants the FFN is replaced by a routing network selecting k=1 or k=2 of E expert FFNs. Mixtral 8x7B uses E=8, k=2; Mixtral 8x22B uses the same routing topology at 22B-expert scale; DeepSeek-V3 uses E=256 routed experts plus 1 shared expert with k=8 routed plus 1 shared per token, achieving 671B total parameters with 37B active per token; Grok-1 used E=8, k=2 with 86B active out of 314B.
  - **Attention compute kernel**: **FlashAttention** (Dao 2022) and FlashAttention-2 (Dao 2023) / FlashAttention-3 (Shah 2024) reorder attention computation to maximise GPU SRAM utilisation, delivering 2-7x speedups and enabling sequences of 32K-1M tokens that were intractable under the naive O(N²) implementation. **PagedAttention** (vLLM, Kwon 2023) and **continuous batching** dominate serving-time efficiency.
  - **Output head**: Final unembedding (typically tied to the input embedding) projects d_model back to vocabulary logits. Speculative decoding (Leviathan 2023, Chen 2023) and medusa heads (Cai 2024) accelerate inference by 2-4x via draft-and-verify schemes.
  - **Long-context machinery**: Frontier models reach 200K-2M token contexts via combinations of RoPE base-frequency interpolation, ring attention (Liu 2023), tree attention, and external memory architectures. Gemini 1.5 Pro / 2.5 Pro publish 1M-2M token contexts; Claude 3.5/3.7 ship 200K natively; GPT-4 Turbo / 4o ship 128K-200K.
  - **Safety classifier layer**: Frontier deployments wrap the base model in input and output classifiers (Llama Guard 3, Anthropic constitutional classifiers, OpenAI moderation API) plus system-prompt and tool-use scaffolding. The "safety stack" is increasingly a foundation-model artefact in its own right, with its own scaling and evaluation regime.
  - **Serving infrastructure**: Production inference relies on TensorRT-LLM (NVIDIA), vLLM (UC Berkeley), SGLang, llama.cpp / MLC (open-weights edge), and proprietary stacks (Anthropic's internal, OpenAI's internal, Google's Pathways). Quantisation (INT8, FP8, INT4, 1.58-bit BitNet) and pruning compress models 2-10x for deployment.

  - ### Categories and Major Families
  - Foundation Models partition by training modality, training objective, and architectural family. We enumerate the major categories with their representative members as of 2025-2026.

    #### 1. Language Foundation Models
    Decoder-only autoregressive Transformers trained on next-token prediction over trillions of tokens of web text, code, and curated corpora.
    - **GPT family (OpenAI)**: GPT-1 (2018, 117M), GPT-2 (2019, 1.5B), GPT-3 (2020, 175B), GPT-3.5 / ChatGPT (Nov 2022), GPT-4 (March 2023, undisclosed parameter count estimated 1.7T-MoE), GPT-4o (May 2024, omnimodal), GPT-4.5 (preview Feb 2025), the o1 / o3 / o3-mini / o4 reasoning series (Sep 2024 onward), and GPT-5 (2025). Closed-API, accessed via api.openai.com.
    - **Claude family (Anthropic)**: Claude 1 (2023), Claude 2, Claude 3 Opus/Sonnet/Haiku (March 2024), Claude 3.5 Sonnet (Jun 2024), Claude 3.7 Sonnet (Feb 2025), Claude 4 (May 2025), Claude Opus 4 / Sonnet 4.5 / Opus 4.7 (2025-2026). Distinctive features: Constitutional AI alignment, Artifacts, computer-use API, the Claude Code coding agent.
    - **Gemini family (Google DeepMind)**: Gemini 1.0 Ultra/Pro/Nano (Dec 2023), Gemini 1.5 Pro/Flash with 1M-2M token context (Feb-May 2024), Gemini 2.0 Pro / Flash (Dec 2024), Gemini 2.5 Pro (March 2025), natively multimodal from inception (text + image + audio + video).
    - **Llama family (Meta)**: Llama 1 (Feb 2023, 7B-65B), Llama 2 (Jul 2023, 7B-70B), Llama 3 (Apr 2024, 8B/70B), Llama 3.1 405B (Jul 2024, largest open-weights dense model at release), Llama 3.3 70B (Dec 2024), Llama 4 (2025). Released under the Llama Community License — permissive but non-OSI-compliant (acceptable use clauses, the >700M-MAU clause).
    - **Mistral family (Mistral AI, Paris/London)**: Mistral 7B (Sep 2023, Apache 2.0), Mixtral 8x7B (Dec 2023) and 8x22B (Apr 2024) MoE, Mistral Large 2 (Jul 2024), Mistral Medium 3 (2025), Codestral, Pixtral 12B multimodal.
    - **DeepSeek family (DeepSeek AI, Hangzhou)**: DeepSeek LLM, DeepSeek-V2 (May 2024) introducing MLA, DeepSeek-V3 (Dec 2024, 671B total / 37B active MoE), DeepSeek-R1 and R1-Zero (Jan 2025, GRPO-trained pure-RL reasoning), released under permissive licences and triggering the January 2025 market reaction around training-cost claims.
    - **Qwen family (Alibaba, Hangzhou)**: Qwen 2 (Jun 2024), Qwen 2.5 (Sep 2024, 0.5B-72B), Qwen 2.5-Coder 32B, Qwen 2.5-VL multimodal, Qwen 3 (2025), released under Tongyi Qianwen Licence.
    - **Smaller open dense models**: Gemma 2 (Google), Phi-3 / Phi-3.5 / Phi-4 (Microsoft), Granite 3 (IBM), Yi 1.5 (01.AI), Falcon 2 / 3 (TII), Stable LM (Stability AI), SmolLM 2 (Hugging Face).

    #### 2. Vision Foundation Models
    - **CLIP and OpenCLIP**: Radford et al. 2021, contrastive image-text pretraining, ViT-B/16 to ViT-G/14. Reference architecture for the multimodal era; OpenCLIP-LAION-2B retrained on the public LAION-2B-en dataset matches closed CLIP.
    - **DINOv2 (Meta)**: Self-supervised vision Transformer (Oquab 2023) producing universal visual features without text or label supervision. Used as the de-facto visual backbone in many open multimodal stacks.
    - **SAM and SAM 2 (Meta)**: Segment Anything Model (Apr 2023) and SAM 2 (Jul 2024) introducing video segmentation, the largest publicly released image-segmentation dataset (SA-1B, 1.1B masks) and a promptable image/video segmentation backbone deployed across medical imaging, robotics, satellite analysis, and content production.
    - **Sapiens (Meta)**: Human-centric vision foundation model (2024) for pose, parsing, normal, and depth estimation pretrained on 300M human-centric images.
    - **ViT-22B (Google)**: 22-billion-parameter Vision Transformer (Dehghani 2023) demonstrating language-model-style scaling in vision.

    #### 3. Multimodal Foundation Models
    - **GPT-4o (OpenAI, May 2024)**: Native omnimodal — text, image, audio, video — with sub-300ms voice latency.
    - **Claude 3 / 3.5 / 3.7 / 4 Sonnet/Opus (Anthropic)**: Vision-enabled multimodal with strong document and chart understanding.
    - **Gemini 2.5 Pro (Google DeepMind)**: Natively multimodal across text, image, audio, video; 1-2M token context windows.
    - **Pixtral 12B (Mistral, Sep 2024)**: Multimodal Mistral with native image encoder.
    - **Qwen 2.5-VL (Alibaba)**: Strong open-weights multimodal model competitive with closed-API leaders.
    - **LLaVA family, Idefics, Florence-2, InternVL, MiniCPM-V**: Open research multimodal stacks.

    #### 4. Video Foundation Models
    - **Sora and Sora-2 (OpenAI)**: Diffusion Transformer (DiT) video generation, up to 1080p and 20-second clips at Sora-2.
    - **Veo 2 and Veo 3 (Google DeepMind)**: 1080p / 4K-capable text-to-video with realistic motion and physics.
    - **Pika 2.0 and Pika 2.2 (Pika Labs)**: Consumer-grade text-to-video with strong stylistic control.
    - **Kling 1.6 and 2.0 (Kuaishou)**: Chinese text-to-video reaching photoreal motion at minute-scale durations.
    - **Wan 2.1 (Alibaba)**: Open-weights 14B-parameter video foundation model with state-of-the-art motion fidelity.
    - **HunyuanVideo (Tencent, Dec 2024)**: 13B-parameter open-weights video model.
    - **Mochi 1 (Genmo)**: Open Apache-2.0 video diffusion model.

    #### 5. Audio Foundation Models
    - **Whisper-large-v3 / v3-turbo (OpenAI)**: Multilingual ASR/STT pretrained on 680K-5M hours of audio, the de-facto open-source speech-to-text foundation model.
    - **Voicebox and AudioBox (Meta)**: Generative speech and audio foundation models.
    - **Suno v4 and Udio v1.5**: Consumer music generation with vocals; central to the 2024-2025 music-industry copyright disputes (the RIAA lawsuit filed June 2024 names both).
    - **MusicGen / AudioGen (Meta)**, **Stable Audio 2.0 (Stability AI)**: Open-weights audio generation.
    - **ElevenLabs (London-headquartered)**: Closed-API speech synthesis foundation model leading commercial voice cloning and dubbing.

    #### 6. Code Foundation Models
    - **Codex / GPT-4 Code Interpreter (OpenAI 2021/2023)**: Original code foundation model powering GitHub Copilot.
    - **Code Llama (Meta)**: 7B / 13B / 34B / 70B code-specialised Llama variants.
    - **DeepSeek-Coder V2 and V3 (DeepSeek)**: Open-weights code models competitive with GPT-4 on HumanEval and SWE-Bench.
    - **StarCoder 2 (BigCode)**: 15B open-weights code model under OpenRAIL-M licence.
    - **Qwen 2.5-Coder 32B (Alibaba)**: Open-weights code model surpassing GPT-4 on multiple benchmarks at release.
    - **Granite Code 34B (IBM)**: Enterprise code foundation model under Apache 2.0.
    - **Claude Code (Anthropic, Feb 2025)**: CLI-integrated coding agent built on Claude Sonnet/Opus with first-class file-editing, shell, and tool-use loops.

    #### 7. Action and Robotics Foundation Models
    - **RT-2 (Google DeepMind, 2023)**: Vision-Language-Action (VLA) foundation model fine-tuned from PaLI on robot trajectories.
    - **π0 / Pi-Zero (Physical Intelligence, San Francisco)**: General robot foundation model with cross-embodiment training.
    - **GR00T N1 (NVIDIA, Jan 2025)**: Humanoid robot foundation model.
    - **Helix (Figure AI, Feb 2025)**: VLA foundation model for the Figure 02 humanoid.
    - **Octo, OpenVLA, RDT-1B**: Open-source VLA baselines.

    #### 8. Biology and Life-Sciences Foundation Models
    - **AlphaFold 2 (Jumper 2021)**: Solved single-chain protein structure prediction; Nobel Prize in Chemistry 2024 (Hassabis, Jumper, Baker shared).
    - **AlphaFold 3 (Abramson, May 2024)**: Joint structure prediction of complexes including ligands, ions, and nucleic acids.
    - **ESM-2 and ESM-3 (Meta / EvolutionaryScale)**: Protein language models up to 98B parameters; ESM-3 demonstrates programmable protein design.
    - **RoseTTAFold and RoseTTAFold-AA (Baker Lab, Washington)**: Competing protein and complex foundation models.
    - **Evo and Evo-2 (Arc Institute, 2024-2025)**: 7B and 40B DNA language models trained on 9.3T-15T nucleotide tokens covering all domains of life.
    - **Med-PaLM 2 (Google)**, **BioGPT, BioBERT, PubMedBERT**: Biomedical language models for clinical text.

    #### 9. Tabular Foundation Models
    - **TabPFN-v2 (Prior Labs / Freiburg, 2024)**: In-context Bayesian neural network for tabular classification trained on millions of synthetic Structural Causal Models, achieving state-of-the-art on small-tabular benchmarks without per-dataset fine-tuning.

    #### 10. Time-Series Foundation Models
    - **TimeFM 200M (Google, 2024)**: Decoder-only foundation forecaster pretrained on 100B time-series points.
    - **Moirai (Salesforce, 2024)**: Masked-encoder universal forecaster trained on the LOTSA archive.
    - **Chronos (Amazon, 2024)**: T5-based time-series foundation model treating values as tokenised quantiles.
    - **Lag-Llama, Tiny Time Mixers (IBM)**: Smaller open alternatives.

  - ### Training Pipelines and Recipes
  - The contemporary Foundation Model training pipeline is a multi-stage process. The exact stage composition varies by lab but the canonical recipe as of 2025-2026 comprises:
  - **Stage 1 — Self-Supervised Pretraining**: 1-30 trillion tokens of web text, code, scientific literature, and curated corpora processed through Common Crawl filtering pipelines (CCNet, FineWeb-Edu, DCLM, Dolma 2). Objective is next-token prediction for decoder-only LMs, masked LM for encoders (BERT line), contrastive image-text alignment for CLIP-style models, and denoising diffusion for image/video/audio. Compute typically 10^23 - 10^26 FLOP. For reference: GPT-3 ≈ 3.14×10^23 FLOP; GPT-4 estimated 2×10^25 FLOP; Gemini Ultra ≈ 5×10^25 FLOP; Llama 3.1 405B ≈ 3.8×10^25 FLOP; the EU AI Act systemic-risk threshold sits at 10^25 FLOP.
  - **Stage 2 — Supervised Fine-Tuning (SFT)**: 10K-1M curated instruction-response pairs covering many task families. Key datasets: FLAN (Wei 2021, 1.8K tasks), Alpaca and Vicuna distillations from GPT-4, OpenAssistant Conversations OASST1/OASST2, Dolly 15K, ShareGPT, Tülu 3 SFT mixture (939K examples spanning chat, code, math, reasoning).
  - **Stage 3 — Preference Optimisation**: Replaces or augments SFT-only alignment with feedback-driven optimisation. Major variants:
    - **RLHF** (Christiano 2017, Ouyang 2022 InstructGPT): Reward model trained on pairwise human preferences, policy optimised against reward by PPO. Foundational recipe but high engineering and reward-hacking risk.
    - **DPO — Direct Preference Optimisation** (Rafailov 2023): Closed-form solution avoiding explicit reward modelling; the dominant practical alignment recipe for open-weights models in 2024-2025.
    - **KTO — Kahneman-Tversky Optimisation** (Ethayarajh 2024): Loss inspired by prospect theory; needs only thumbs-up / thumbs-down rather than pairwise preferences.
    - **IPO — Identity Preference Optimisation** (Azar 2023): Avoids overfitting to preferences by regularising toward the reference policy.
    - **ORPO — Odds-Ratio Preference Optimisation** (Hong 2024): Combines SFT and preference optimisation in a single stage, eliminating the need for a separate reference model.
    - **GRPO — Group Relative Policy Optimisation** (used by DeepSeek-R1 January 2025): Estimates advantages by sampling groups of responses and comparing intra-group, avoiding the need for a value model.
  - **Stage 4 — Constitutional AI and RLAIF**: Anthropic's Constitutional AI (Bai 2022) replaces human raters with an AI critic guided by an explicit constitution (a list of principles), iteratively critiquing and revising responses. RLAIF (Lee 2023) shows that AI feedback can match human feedback for many alignment tasks at much lower cost.
  - **Stage 5 — Synthetic-Data Training**: Phi-4 (Microsoft 2024) trained 14B parameters on curated synthetic "textbook-style" data; DeepSeek-V3 distilled long chain-of-thought reasoning traces from DeepSeek-R1 into the base model; OpenAI o1 / o3 use reasoning-trace synthesis. The empirical lesson: synthetic data quality often dominates quantity once basic Chinchilla allocation is satisfied.
  - **Stage 6 — Tool, Agent, and Safety Tuning**: Final fine-tuning for tool use (function calling, retrieval, code execution), multi-step agent behaviour, refusal calibration, jailbreak resistance, and red-team-discovered failure modes.

  - ### Use Cases: Major Application Domains
  - The category's economic significance derives from breadth — a single foundation-model backbone underwrites applications spanning every information-intensive sector. We enumerate the dominant deployment domains as of 2026.
  - **Conversational assistants and consumer AI**: ChatGPT (700M-1B weekly active users by 2026), Claude.ai, Gemini, Copilot, Grok, DeepSeek chat, Le Chat (Mistral), and Qwen Chat. Consumer subscriptions ($20-$200/month) plus advertising-supported free tiers form a multi-tens-of-billions ARR market. Microsoft Copilot integration across Office 365 / Windows / Bing alone exceeds $5B annualised by 2025.
  - **Coding and software engineering**: GitHub Copilot (Microsoft, >2M paid seats, $400M+ ARR), Cursor IDE (Anysphere, $200M+ ARR by 2025), Windsurf (formerly Codeium), Claude Code (Anthropic, CLI agentic coding), Aider, Continue.dev, Tabnine, Sourcegraph Cody. SWE-Bench Verified scores have risen from ~5% (Devin May 2024 debut) to >65% (Claude Sonnet 4.5, GPT-5, DeepSeek-R1) by late 2025, validating autonomous-software-engineering agents.
  - **Search and retrieval-augmented generation**: Perplexity AI ($500M ARR by 2025), OpenAI ChatGPT Search, Google AI Overviews, You.com, Brave AI, Andi. RAG over enterprise document stores (Glean, Microsoft Copilot for Microsoft 365, Notion AI, Coda AI) is a >$10B enterprise category by 2026.
  - **Drug discovery and life sciences**: Isomorphic Labs (DeepMind spin-out, Eli Lilly and Novartis partnerships valued at $3B+), Insilico Medicine, Exscientia (acquired by Recursion 2024), Recursion Pharmaceuticals, BenevolentAI, Atomwise. AlphaFold 3 democratised structure prediction for complexes; ESM-3 enabled programmable protein design (the EvolutionaryScale "esmGFP" novel fluorescent protein, 2024).
  - **Autonomous driving**: Wayve AV2.0 (UK, end-to-end driving foundation model), Waymo (foundation-model-augmented motion prediction), Tesla FSD v12-v14 (end-to-end neural networks superseding hand-coded planning), Comma.ai, Xpeng XNGP, NIO NAD. The shift from modular pipelines to end-to-end foundation-model-style driving is one of the defining transitions of 2024-2026.
  - **Embodied AI and robotics**: Figure (Helix VLA powering Figure 02 humanoid), Agility Robotics (Digit), 1X (NEO), Apptronik, Sanctuary AI, Tesla Optimus, Unitree H1 / G1, Boston Dynamics Atlas (electric). Foundation-model-driven manipulation policies (π0, RT-2, OpenVLA, GR00T) enable cross-task, cross-embodiment generalisation that was inaccessible to per-task imitation learning.
  - **Healthcare and clinical AI**: Med-PaLM 2, OpenEvidence, Hippocratic AI, Abridge (ambient clinical documentation, $250M ARR by 2025), Nuance DAX Copilot. Foundation models for radiology (Mayo Clinic + Google partnership), pathology (Paige.AI, PathAI), and ophthalmology (Moorfields-DeepMind partnership) are progressing through regulatory clearance.
  - **Creative tools and content production**: Midjourney v6 / v7 (subscription-driven >$300M ARR), Adobe Firefly integrated into Creative Cloud, Runway Gen-3 / Gen-4 video, Pika, Sora, Luma Dream Machine, ElevenLabs voice cloning, Suno / Udio music. The creative-AI vertical has driven the most visible cultural debates around copyright (the New York Times v. OpenAI case, the RIAA v. Suno/Udio case, the Getty v. Stability AI suit).
  - **Customer service and contact centres**: Sierra (Bret Taylor, $4B+ valuation 2024), Decagon, Parloa, Cresta, PolyAI (London). Voice-agent foundation models handle 30-50% of Tier-1 customer interactions in early adopters by 2026.
  - **Education and tutoring**: Khanmigo (Khan Academy + OpenAI), Duolingo Max, Synthesia avatar-led training, Carnegie Learning. Personalised tutoring with foundation models is the focus of Hewlett Foundation and Gates Foundation grant programmes.
  - **Scientific computing and weather**: GraphCast / GenCast (DeepMind), Aurora (Microsoft), Pangu-Weather (Huawei), AIFS (ECMWF) operational since 2024. AI weather foundation models match or exceed traditional numerical weather prediction at a fraction of compute cost.
  - **Finance, legal, and compliance**: Harvey AI (legal, $3B valuation 2024), Hebbia, Robin AI (London), Casetext (acquired by Thomson Reuters $650M), AlphaSense, Kensho, BloombergGPT, FinGPT.

  - ### Open versus Closed Weights: The Licensing Frontier
  - The Foundation Model ecosystem is bifurcated by access regime:
  - **Open-weights models** publish trained parameters under permissive but non-uniform licences. Llama 3 / 3.1 / 3.3 / 4 ship under the **Llama Community License** — permissive in practice but explicitly *not* OSI-compliant due to acceptable-use clauses prohibiting some uses and a clause requiring Meta consent for products with >700M monthly active users. Mistral 7B and Mixtral 8x7B / 8x22B ship under **Apache 2.0** (true OSI). DeepSeek models ship under a custom permissive licence comparable to Apache 2.0. Qwen ships under the **Tongyi Qianwen Licence** (permissive with acceptable-use restrictions). The Open Source Initiative published its "Open Source AI Definition" v1.0 in October 2024 attempting to codify what "open" should mean (weights, training code, *and* training data are required), but the major model providers have largely declined to release training data, leaving most "open-weights" models technically non-compliant.
  - **Closed-API models** are accessed only via inference API: GPT-4 / 4o / 4.5 / o1 / o3 / GPT-5 (OpenAI), Claude 3 / 3.5 / 3.7 / 4 / 4.7 (Anthropic), Gemini 1.5 / 2.0 / 2.5 (Google DeepMind). Frontier capabilities remain disproportionately concentrated in closed providers, though the gap has narrowed substantially through 2024-2025 with DeepSeek-V3 / R1, Llama 3.1 405B, Qwen 2.5 72B, and Mistral Large 2 approaching closed leaders on MMLU-Pro, GPQA, SWE-Bench, and Arena Elo.
  - **Hugging Face Hub** functions as the central distribution and discovery platform for open-weights models — over 1.5M model repositories by 2026, of which 50K+ are foundation models or fine-tuned variants. The hub also hosts standard evaluation leaderboards (Open LLM Leaderboard, MTEB for embeddings, Big Code Models Leaderboard) and the de-facto fine-tuning toolchain (Transformers, Diffusers, PEFT, TRL).
  - **The strategic significance** of open weights is threefold: (1) downstream fine-tuners and on-premise deployers can run frontier-comparable models without API dependency or data egress; (2) safety, interpretability, and red-team research has direct access to model internals — critical for the UK AISI / US AISI / METR pre-deployment evaluation ecosystem; (3) regulatory categorisation under the EU AI Act differs (the GPAI obligations apply differently to open-weights "modifiable" models versus closed-API "deployed" models, per Article 53(2)).

  - ### Governance and Coordination
  - **Frontier Model Forum (FMF, July 2023)**: Anthropic, Google, Microsoft, and OpenAI announced a coordination body for frontier-model safety, evaluation standards, and policy engagement. Expanded to include Amazon and Meta. Funded an AI Safety Fund (>$10M committed) supporting independent third-party evaluation.
  - **EU AI Act GPAI Provisions (Articles 51-55, in force August 2025 for new models, August 2026 enforcement for existing)**:
    - **Article 51** sets the systemic-risk threshold: a GPAI is presumed to pose systemic risk if its training compute exceeds **10^25 FLOP** (or by Commission designation).
    - **Article 52** imposes baseline transparency and copyright obligations on all GPAI: technical documentation, training data summary, downstream-deployer documentation, EU copyright-policy disclosure.
    - **Article 53** sets technical documentation requirements; open-weights models with weights and architecture publicly available receive partial exemption.
    - **Article 55** imposes additional obligations on systemic-risk GPAI: model evaluation, adversarial testing, serious-incident reporting, cybersecurity protection, and a documented risk-management process.
  - **GPAI Code of Practice (signed July 2025)** by Anthropic, Google, Microsoft, OpenAI, Meta, Mistral, xAI, and others, codifies the practical compliance pathway for Articles 53 and 55.
  - **UK AISI MOUs**: Pre-deployment access agreements with Anthropic, OpenAI, and Google DeepMind grant the UK AI Safety Institute (renamed AI Security Institute Feb 2025) early access to frontier models for capability and dual-use evaluation prior to public release. Equivalent agreements exist with the US AISI inside NIST.
  - **South Korea AI Framework Act** enters force January 2026 establishing GPAI obligations modelled on the EU regime.
  - **Bletchley Park Declaration (Nov 2023)**, **Seoul Frontier AI Safety Commitments (May 2024)**, and **Hiroshima AI Process (G7, 2023)** provide the multilateral governance scaffolding under which national obligations sit.

  - ### Benchmarks and Evaluation
  - Foundation Model evaluation has matured into a multi-dimensional ecosystem reflecting the breadth of the category. We enumerate the dominant evaluation suites and their epistemic role.
  - **General language understanding**: **MMLU** (Hendrycks 2020, 57-subject multiple-choice) was the canonical 2020-2024 benchmark; saturation at the top (Claude 3.5 / GPT-4o ≈88-90%) prompted **MMLU-Pro** (2024) tightening with 10-option questions and higher-difficulty filtering, restoring headroom and discriminating frontier models. **BIG-Bench** and **BIG-Bench Hard (BBH)** provide 200+ diverse tasks. **HELM** (Stanford CRFM) frames evaluation as multi-metric (accuracy, robustness, fairness, bias, efficiency, toxicity).
  - **Reasoning and graduate-level science**: **GPQA Diamond** (Rein 2023, 198 hardest of 448 graduate-level science questions) is the dominant 2024-2026 reasoning benchmark — frontier reasoning models passed human-expert performance (≈65%) in late 2024 (o1, Claude 3.5 Sonnet, Gemini 2.0 Pro). **MATH** (Hendrycks 2021) competition mathematics, **AIME 2024/2025** (American Invitational Mathematics Examination, 15 problems), **USAMO** (USA Math Olympiad), **FrontierMath** (Epoch AI 2024, the highest-difficulty math benchmark currently far from saturation).
  - **Coding and software engineering**: **HumanEval** (Chen 2021) is now saturated (>95% pass@1 for frontier models). **MBPP**, **APPS**, **LiveCodeBench** (competition-style), **SWE-Bench** and **SWE-Bench Verified** (real GitHub issues requiring multi-file patches) are the discriminating benchmarks of 2024-2026. **Aider polyglot** evaluates multi-language editing capability.
  - **Long-context and retrieval**: **Needle-in-a-Haystack** (Greg Kamradt 2023), **RULER**, **InfiniteBench**, **LongBench**, **HELMET** evaluate context-window utilisation beyond raw length claims. Effective context (where retrieval remains accurate) typically lags advertised context by 2-10x for many models.
  - **Multimodal**: **MMMU** (Multimodal Massive Multitask Understanding), **MMMU-Pro**, **MathVista**, **ChartQA**, **DocVQA**, **RealWorldQA** (introduced by xAI Grok-1.5V).
  - **Agent and tool use**: **GAIA** (Mialon 2023 Meta-Microsoft real-world questions requiring tool use), **WebArena**, **OSWorld** (computer-use benchmark), **AgentBench**, **SWE-Lancer** (OpenAI 2025, real freelance software-engineering tasks with monetary value).
  - **Holistic and adversarial**: **LMSYS Chatbot Arena** (UC Berkeley, pairwise blind crowdsourced preference Elo) is the de-facto public preference benchmark; **Arena-Hard-Auto** generates hard adversarial prompts. **MT-Bench**, **AlpacaEval 2.0** measure instruction following.
  - **Safety and dual-use**: **HarmBench**, **JailbreakBench**, **WMDP** (Weapons of Mass Destruction Proxy, NeurIPS 2024), **Cybench** (cyber CTF), **BBQ** (bias benchmark for QA), **TruthfulQA**.
  - **Vision and segmentation**: **ImageNet** remains a sanity check; **COCO**, **LVIS**, **SA-1B**, **ADE20K** for segmentation; **COCO-Captions**, **VQA-v2** for vision-language.
  - **Biology**: **CASP15 / CASP16** (Critical Assessment of Structure Prediction) is the canonical protein structure benchmark; AlphaFold 2 dominated CASP14 (2020), AlphaFold 3 leads CASP16 (2024) on complexes.
  - **Time series**: **Monash Time Series Forecasting Repository**, **GIFT-Eval**, **LOTSA** (Salesforce, used to train Moirai).
  - The **headline tension** in evaluation is **benchmark contamination** (training corpora include test sets via web scraping) and **gameability** (post-hoc fine-tuning on benchmark distributions). 2025-2026 best practice favours private held-out test sets (SWE-Bench Verified maintained by OpenAI / METR / Anthropic), live competition benchmarks (LiveCodeBench, AIME annual refresh), and adversarial / dynamic benchmarks (Arena-Hard-Auto).

  - ### Risks, Limitations, and Critique Reception
  - The Stanford CRFM 2021 paper was not received uncritically; the terminology itself drew pushback. We enumerate the salient critique strands and the empirical risks that have crystallised since 2021.
  - **Terminological critique**: At launch some researchers (notably Jitendra Malik at Berkeley and others) argued that the term "foundation models" was premature, normative-laden, and risked entrenching corporate narrative — that calling these models "foundations" implied a settled status they had not earned. The term nevertheless stuck because it usefully named a structural shift (emergence + homogenisation) that prior labels did not.
  - **Hallucination and confabulation**: Foundation Models routinely generate plausible-sounding but factually false content; the rate of factual error remains 10-30% on many open-domain knowledge tasks despite improvements. Retrieval augmentation, citation-grounded generation, and reasoning-trace verification reduce but do not eliminate this failure mode.
  - **Systemic risk via homogenisation**: A defect, bias, or vulnerability in a widely-adopted foundation model propagates to all downstream applications. The Bommasani 2021 paper made this argument explicit; subsequent incidents (prompt-injection vulnerabilities across all major models, GPT-4o-mini and Llama 3.3 jailbreak chains, Grok system-prompt incidents, OpenAI sycophancy-tuning rollback in April 2025) have repeatedly validated it.
  - **Bias, fairness, and representational harm**: Models inherit biases from web-scale training data — racial, gender, religious, linguistic, ideological. Mitigation via fine-tuning is partial; the EU AI Act and the UK ICO require ongoing fairness assessment for high-risk deployments.
  - **Copyright and training-data legitimacy**: The largest open question in 2024-2026 — the New York Times v. OpenAI / Microsoft suit, the Getty Images v. Stability AI suit (UK High Court ruled in November 2024 against Getty on jurisdictional grounds but allowed substantive trademark claims to proceed), the RIAA v. Suno / Udio suits, the music-industry-vs-Anthropic suit, the multiple authors' guild suits — will determine whether unlicensed training-data use survives at scale. The EU AI Act mandates training-data summaries; the UK's text-and-data mining exception remains contested.
  - **Concentration of capability**: Frontier capability is concentrated among ≈10 organisations globally. This concentration raises questions of accountability, antitrust (the FTC investigation into OpenAI-Microsoft, the CMA Phase 1 review into Microsoft-Inflection in 2024), and democratic legitimacy.
  - **Cyber, biosecurity, and chemical dual-use**: As capabilities scale, foundation models lower barriers to cyber-offence (CTF-solving, vulnerability discovery, autonomous exploitation), biological misuse (uplift on dual-use pathogen research per the RAND Corporation 2023 and AISI 2024 evaluations), and chemical synthesis. UK AISI and US AISI run dedicated dual-use evaluation programmes.
  - **Energy and water footprint**: Frontier training campaigns now exceed 50,000-100,000 MWh per campaign (Llama 3.1 405B ≈ 51K MWh, GPT-4 estimated ≈100K MWh, frontier 2026 campaigns 200-500K MWh). Water consumption at hyperscaler datacentres (Microsoft 4.7 billion litres 2022, Google 4.3 billion litres 2022) draws growing scrutiny.
  - **Job displacement and labour-market effects**: Anthropic, OpenAI, and the IMF have all published 2024-2025 analyses estimating 20-40% of work tasks exposed to foundation-model automation, with disproportionate effect on knowledge-economy roles previously considered safe. Distributional consequences remain a central policy and political question.
  - **Persuasion, manipulation, and electoral integrity**: 2024 was the largest electoral year in history; foundation models were used at scale in election-targeted content generation. The full extent of impact remains contested but the 2025-2026 regulatory tightening on watermarking and synthetic-content labelling (the EU AI Act, the UK Online Safety Act, the US Executive Orders 14110 and 14179) reflects governmental concern.

  - ### Academic Context
  - The category and its governance literature crystallised through a small number of pivotal contributions:
  - **Bommasani et al. 2021** ("On the Opportunities and Risks of Foundation Models", arXiv:2108.07258): The 212-page Stanford CRFM position paper that introduced the term and the dual emergence/homogenisation analytic frame.
  - **Vaswani et al. 2017** ("Attention Is All You Need", NeurIPS 2017): Introduced the Transformer, the universal backbone of nearly all contemporary Foundation Models.
  - **Devlin et al. 2018** ("BERT", arXiv:1810.04805): Established self-supervised masked LM pretraining + task-specific fine-tuning as a general recipe.
  - **Brown et al. 2020** ("Language Models are Few-Shot Learners", NeurIPS 2020, GPT-3 paper): Demonstrated in-context learning at scale.
  - **Kaplan et al. 2020** ("Scaling Laws for Neural Language Models", arXiv:2001.08361): Empirical scaling laws.
  - **Hoffmann et al. 2022** ("Training Compute-Optimal Large Language Models" / Chinchilla, arXiv:2203.15556): Revised compute-optimal allocation establishing the ≈20 tokens/parameter rule.
  - **Wei et al. 2022** ("Emergent Abilities of Large Language Models", TMLR 2022): Documented phase-transition emergence; Schaeffer et al. 2023 ("Are Emergent Abilities of Large Language Models a Mirage?") subsequently argued some emergent transitions are metric artefacts, but the qualitative finding survives for many capabilities.
  - **Ouyang et al. 2022** ("Training language models to follow instructions with human feedback" / InstructGPT, arXiv:2203.02155): RLHF as the canonical alignment recipe.
  - **Rafailov et al. 2023** ("Direct Preference Optimization", arXiv:2305.18290): DPO derivation.
  - **Bai et al. 2022** ("Constitutional AI", arXiv:2212.08073): Anthropic's RLAIF-via-constitution framework.
  - **Radford et al. 2021** ("Learning Transferable Visual Models From Natural Language Supervision" / CLIP, arXiv:2103.00020): Contrastive multimodal pretraining.
  - **Jumper et al. 2021** ("Highly accurate protein structure prediction with AlphaFold", Nature): Foundation model for biology, Nobel Prize 2024.
  - **DeepSeek-AI 2024-2025** ("DeepSeek-V3 Technical Report" arXiv:2412.19437 and "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning" arXiv:2501.12948): MoE-MLA architecture and pure-RL reasoning emergence.
  - **Liang et al. 2022-2024** ("Holistic Evaluation of Language Models" / HELM): The systematic evaluation framework from Stanford CRFM under which the foundation-model category is benchmarked.

  - ### Current Landscape (2026)
  - As of May 2026 the Foundation Model landscape exhibits four salient dynamics:
  - **Frontier closing rate**: Open-weights frontier models (DeepSeek-V3/R1, Llama 4, Qwen 3, Mistral Medium 3) are within 1-3 percentage points of closed leaders on MMLU-Pro, GPQA Diamond, and SWE-Bench Verified. The closed-vs-open gap is now measured in months rather than years for many capabilities; for reasoning, DeepSeek-R1's January 2025 release closed the gap to o1 within weeks of o1's general availability.
  - **Reasoning regime**: The o1 / o3 / o3-mini / Claude 3.7 Sonnet (Extended Thinking) / DeepSeek-R1 / Gemini 2.5 Pro Deep Think class of reasoning models has bifurcated the category — these models trade additional inference-time compute (thousands of "thinking tokens") for substantial gains on competition mathematics (AIME, USAMO), competitive programming (LiveCodeBench, Codeforces), and scientific reasoning (GPQA Diamond). Inference-time scaling laws (test-time compute scaling) emerged in 2024-2025 as a complementary axis to training-time scaling.
  - **Multimodal default**: New frontier releases are multimodal by default. Single-modality models persist in specialised domains (Whisper for ASR, AlphaFold 3 for proteins) but the generalist consumer category is now native-multimodal.
  - **Inference economics**: Frontier inference pricing has fallen by 10-100x from GPT-4 launch pricing (March 2023, $30/$60 per million input/output tokens) to mid-2025 ($1.50/$10 for Claude 4.7 Sonnet, $1.25/$10 for GPT-5, $0.27/$1.10 for DeepSeek-V3 API). This price collapse has driven the agent-economy buildout: long-horizon agentic workflows that were uneconomic in 2023 are routine in 2026.
  - **Industrial structure**: NVIDIA remains the dominant compute supplier (H100 / H200 / B200 / GB200). Hyperscaler-aligned consortia (Microsoft-OpenAI, Google-DeepMind, Amazon-Anthropic, Meta in-house, Alibaba in-house) plus standalone labs (Mistral, DeepSeek, xAI, Cohere) form the frontier-builder set. The number of organisations training systemic-risk-threshold (≥10^25 FLOP) models grew from ≈5 in 2023 to ≈25 in 2026.
  - **Energy and siting**: Frontier training clusters now exceed 100 MW continuous draw (xAI Colossus Memphis, Microsoft Mt Pleasant Wisconsin, Anthropic-AWS Project Rainier Indiana, Meta Louisiana megasite). Power constraints have replaced GPU availability as the binding scaling constraint for several frontier programmes through 2026-2028.
  - **Capital intensity and the "AGI capex supercycle"**: Total announced 2024-2028 AI infrastructure capex from Microsoft, Google, Amazon, Meta, and Oracle exceeds $1 trillion; the OpenAI-Oracle-SoftBank "Stargate" project announced January 2025 commits up to $500B over four years for US data-centre build-out. Whether this capex earns acceptable returns is the open commercial question of the cycle.
  - **DeepSeek-V3 / R1 cost shock (January 2025)**: DeepSeek-V3's reported $5.6M training cost (only the final training run, excluding R&D, prior experiments, and synthetic-data generation) triggered a one-day $1T equity market drawdown on 27 January 2025, hitting NVIDIA particularly hard (-17%, the largest single-day market-cap loss in US equity history at that point). Subsequent analysis (SemiAnalysis, Stratechery, the IFI report) clarified the "real" all-in cost was substantially higher, but the episode established that frontier reasoning capability was reproducible at fractional cost and with open-weights distribution.
  - **Synthetic-data feedback loop**: As frontier model output proliferates online, the next generation of training corpora increasingly contains AI-generated text — raising the spectre of "model collapse" (Shumailov et al. 2024, Nature) if unmitigated. Current practice favours aggressive synthetic-content filtering during pretraining-data curation, plus deliberate high-quality synthetic data generation (Phi-4, DeepSeek distillation) for known-good signals.
  - **Vertical-specific foundation models**: 2025-2026 sees rapid emergence of vertical foundation models: BloombergGPT (finance), Med-PaLM 2 / Med-Gemini (healthcare), Sec-PaLM (cybersecurity), AlphaProof (mathematics), Cosmos (NVIDIA, physical AI / robotics simulation), MatterGen (materials science). Many incumbents will deploy a *hybrid* of general-purpose plus vertical-fine-tuned models rather than a single monolithic backbone.

  - ### UK Context: Academic Leadership, Industrial Strategy, and AISI Evaluations
  - The United Kingdom occupies a structurally distinctive position in the Foundation Model landscape: home to one of the two leading frontier labs (Google DeepMind, London), the UK AI Safety Institute / AI Security Institute (the most operationally mature national pre-deployment evaluation body in 2024-2026), the ARIA Safeguarded AI programme, and a deep university research base feeding both DeepMind and a constellation of UK-headquartered foundation-model startups.

    #### UK AISI / AI Security Institute (Whitehall and Cambridge)
    - Established November 2023 at the Bletchley Park AI Safety Summit. Renamed "AI Security Institute" February 2025, retaining the AISI acronym.
    - Operates pre-deployment evaluation MOUs with **Anthropic, OpenAI, and Google DeepMind** under which frontier models are made available for capability and dual-use risk evaluation prior to public release.
    - Published evaluation methodologies for autonomy (long-horizon agentic capability), cyber-offence (CTF and CVE-discovery proficiency), biological and chemical risk uplift, and safeguards robustness (jailbreak resistance).
    - Headed by Ian Hogarth as Chair through 2024-2025; technical leadership including ex-DeepMind and ex-Anthropic safety researchers.
    - Budget approximately £100M over 2024-2026, growing under the UK AI Opportunities Action Plan (Matt Clifford, January 2025).

    #### ARIA Safeguarded AI Programme
    - The Advanced Research and Invention Agency's flagship AI safety programme, led by **David "davidad" Dalrymple**.
    - Funded at approximately £59M over 4 years; aims to develop quantitative safety guarantees for AI systems via formal verification, world-model methods, and "guaranteed safe AI" tooling.
    - Distinct from AISI in that ARIA's remit is *technical research and tool development* rather than model evaluation.

    #### Alan Turing Institute and University Research
    - **Alan Turing Institute (London)**: Foundation Models programme spanning safety, evaluation, multilingual modelling, and scientific applications. National convening role for UK foundation-model research.
    - **University of Cambridge**: Department of Computer Science and Technology, Cambridge AI; CSAP; the Cambridge Machine Learning Group (Carl Rasmussen, José Miguel Hernández-Lobato, Adrian Weller) feeds substantial talent into DeepMind, Anthropic-London, and Mistral.
    - **University of Oxford**: AIMS CDT, Future of Humanity Institute (closed April 2024), the Oxford Internet Institute, the Department of Computer Science (Michael Wooldridge, Yarin Gal), Yarin Gal's Oxford Applied and Theoretical Machine Learning Group conducts uncertainty and evaluation research feeding the AISI.
    - **Imperial College London**: I-X Centre for AI, Foundation Models programme spanning healthcare AI, robotics, and finance.
    - **University College London (UCL)**: UCL DARK reinforcement-learning group, UCL Centre for AI, the UCL-DeepMind partnership.
    - **University of Edinburgh**: Edinburgh AI, the Bayes Centre, the ELLIS Unit Edinburgh, NLP research group (Mirella Lapata) supplying foundation-model evaluation methodologies.
    - **University of Manchester**: AI@Manchester, ManLLM evaluation initiative, Manchester-DeepMind seminar series.
    - **University of Leeds, Sheffield, Newcastle**: Northern AI Alliance — collaborative foundation-model evaluation, healthcare AI, and industrial-AI workstreams. Sheffield NLP retains long-standing strength in language technology; Newcastle leads UK industrial-IoT foundation-model deployment research.

    #### UK Foundation-Model Industry
    - **Google DeepMind (London King's Cross)**: The UK's flagship frontier lab; Gemini 1.0 / 1.5 / 2.0 / 2.5 trained largely on UK and US infrastructure. AlphaFold 2 and 3 produced from London (Nobel Prize 2024 to Hassabis and Jumper). Approximately 2,500-3,000 staff in London.
    - **Wayve (London)**: UK foundation model for end-to-end autonomous driving (AV2.0); raised $1.05B Series C in May 2024 (SoftBank, NVIDIA, Microsoft), the largest European AI raise to that point.
    - **Synthesia (London)**: Avatar foundation models for enterprise video generation; $2.1B valuation following $90M Series D in January 2024, expanded with EXPRESS-1 avatar model series.
    - **Stability AI (London)**: Open-weights generative foundation models (Stable Diffusion 3, Stable Audio, Stable Video). Restructured 2024 under new CEO Prem Akkaraju.
    - **ElevenLabs (London-headquartered, incorporated US)**: Voice and audio foundation models; Series C $80M January 2024 led by Andreessen Horowitz.
    - **Mistral AI**: Paris-headquartered but with London engineering presence; Series A €105M June 2023, Series B €385M December 2023, Series C €600M June 2024.
    - **Cohere**: Toronto-headquartered with significant London engineering operation, particularly enterprise-focused multilingual foundation models (Command R+).
    - **PolyAI (London)**: Voice foundation models for enterprise contact centres; $40M Series C 2023.
    - **Faculty AI (London)**: UK-government-aligned applied-AI consultancy with foundation-model deployment focus; significant work for the NHS and the UK MOD.

    #### Strategic and Regulatory Posture
    - The **UK AI Opportunities Action Plan** (Matt Clifford, January 2025) committed to a 20x scaling of UK sovereign compute via AI Growth Zones (Culham first), a UK AI Research Resource (Isambard-AI at Bristol, Dawn at Cambridge), and expanded AISI funding.
    - The UK declined to sign the EU AI Act-equivalent regime; the **UK AI Bill** (announced King's Speech July 2024) targets only frontier-model safety duties rather than the EU's horizontal risk-tier approach.
    - **Ofcom, ICO, and CMA** are the empowered AI regulators under the UK's sector-led pro-innovation regulatory framework.
    - **British AI Safety Summit lineage**: Bletchley Park (November 2023) — chaired by Rishi Sunak — produced the Bletchley Declaration with 28 signatory states including the United States, China, the EU, and the UK; Seoul (May 2024) co-hosted by the Republic of Korea produced the Frontier AI Safety Commitments signed by 16 major labs. Paris (February 2025) shifted the framing toward "AI Action" rather than safety alone. India hosts the next summit (2026).
    - **Isambard-AI (Bristol) and Dawn (Cambridge)**: The two flagship UK AI Research Resource (AIRR) systems. Isambard-AI Phase 1 reached operational status in 2024 with 5,448 NVIDIA GH200 Grace-Hopper Superchips at the University of Bristol; Phase 2 (Q3 2025) doubles capacity. Dawn at Cambridge couples Intel Ponte Vecchio GPUs with the Cambridge Service for Data Driven Discovery (CSD3). Both are open to UK academic and SME foundation-model research.
    - **AI Growth Zones**: The first AIGZ at the Culham Science Centre (Oxfordshire, co-located with UKAEA and the Joint European Torus) was announced January 2025 with fast-track planning for data-centre construction. Additional zones planned for Scotland, Wales, North-East England, and the Tees Valley.
    - **NHS and public-sector deployment**: The NHS AI Lab (within NHS England) and the NHS Federated Data Platform create distinctive UK demand for healthcare-grade foundation-model deployments; partnerships with Palantir (FDP), Microsoft, Google DeepMind (Streams discontinued, but Moorfields collaboration continues), and homegrown vendors are active.

  - ### Future Directions (2026-2030)
  - Several axes plausibly shape the next four years:
  - **Inference-time scaling**: Test-time compute (chain-of-thought length, search, verification) scaling laws — empirically robust through 2024-2025 for o1 / o3 / R1 / Claude 3.7 Extended Thinking — are likely to continue, with frontier reasoning models routinely consuming 10K-1M thinking tokens per query by 2028. Expect dedicated reasoning APIs to dominate high-value enterprise inference.
  - **Agentic foundation models**: Single-call assistants give way to long-horizon agents executing thousands of tool calls over hours-to-days. Claude Code (Anthropic Feb 2025), OpenAI Operator and Deep Research, Google Mariner, and Manus AI are the 2025 vanguard. By 2028-2030 expect agentic workflows handling 60-80% of enterprise knowledge-work tasks (legal review, software engineering, scientific literature synthesis, financial analysis).
  - **Robotics foundation models**: π0 / GR00T / Helix and successors will push toward generalist humanoid robotics — RT-2-class VLA models trained on internet-scale image-text plus increasing quantities of teleoperation and synthetic-trajectory data. Embodied AI is the most likely source of an "AI ChatGPT moment" outside language by 2028.
  - **Scientific foundation models**: AlphaFold 3 / ESM-3 / Evo-2 generalise to chemistry (Boltz, RoseTTAFold-AA), materials (GNoME, MatterGen), weather (GenCast, AIFS, Aurora), and fluid dynamics. Foundation models will be the default substrate for new scientific computing toolchains.
  - **Compute and energy constraints**: Frontier training compute approaches the 10^27 FLOP class by 2027-2028; cluster scale exceeds 1M H100-equivalent GPUs (xAI Colossus 2, hyperscaler megasites). Energy availability — not silicon — becomes the binding constraint, driving siting near nuclear (Three Mile Island restart for Microsoft 2028 target, Amazon-Talen Susquehanna), gas, and modular-reactor (Oklo, X-Energy) sites.
  - **Regulation and evaluation maturity**: EU AI Act GPAI obligations enter steady-state enforcement; UK AISI and US AISI pre-deployment evaluation matures into a global de facto standard. The systemic-risk threshold may be revised (downward via Commission designation, upward by industry advocacy) but the regulatory category itself is structurally entrenched.
  - **Open-weights consolidation**: Expect 2-3 dominant open-weights "platforms" by 2028 (currently Llama, DeepSeek, Qwen) with strong network effects in downstream tooling (fine-tuning recipes, evaluation suites, quantisation, serving). Marginal open releases below a quality threshold will lose distribution.
  - **Misuse and dual-use evolution**: As capabilities expand into autonomy, cyber, biology, and chemistry, evaluation and safeguards research will absorb growing fractions of frontier-lab compute (estimated 5-10% by 2027). Watermarking, content provenance (C2PA), and content-authenticity infrastructure will become regulatory requirements in jurisdictions with deepfake-electoral concerns.
  - **AGI / transformative-AI debate**: The 2024-2025 period saw frontier labs (Anthropic CEO Dario Amodei "Machines of Loving Grace" October 2024, OpenAI "Five Levels of AGI" framework, DeepMind safety roadmap, Sam Altman "Intelligence Age" essay) publish increasingly explicit timelines pointing to "powerful AI" / "AGI" within 2026-2030. Whether or not these calls prove accurate, they have shaped investment patterns, regulatory urgency, and the structure of national AI strategies (US Stargate, UK AISI expansion, EU AI Act systemic-risk tier).
  - **Capability evaluations as a regulated activity**: The UK AISI, US AISI, METR (Model Evaluation and Threat Research), Apollo Research, RAND, and Anthropic's internal evaluations form a nascent third-party evaluation ecosystem. Expect formalisation under the GPAI Code of Practice and EU AI Act systemic-risk obligations, possibly toward an "FDA for AI" institutional model in the 2027-2030 horizon.
  - **Geopolitical AI competition**: US export controls (October 2022, October 2023, December 2024, January 2025 AI Diffusion Rule) restricting advanced GPU exports to the PRC and "Tier 3" countries continue to shape the global compute landscape. DeepSeek-V3 / R1's strong performance under these constraints challenged the assumption that compute access alone determines frontier capability; expect continued tightening (and contestation) of export controls through 2026-2030. China's "AI Plus" initiative (2024) targets domestic foundation-model leadership.
  - **Personalisation and on-device foundation models**: Apple Intelligence (iOS 18.1 launch October 2024 with Apple Foundation Models 3B on-device + Private Cloud Compute), Microsoft Phi-4 on-device, Google Gemini Nano on Pixel and Samsung Galaxy. By 2028-2030 most consumer devices will ship with embedded foundation-model inference; the personal context corpus (calendar, email, messages, files) becomes a key competitive moat for device-platform owners.

  - ### Notable Deployment Milestones (2017-2026)
  - **2017 Jun** — "Attention Is All You Need" published (Transformer architecture).
  - **2018 Jun** — GPT (OpenAI) introduces decoder-only autoregressive pretraining.
  - **2018 Oct** — BERT (Google) introduces masked-LM pretraining.
  - **2020 May** — GPT-3 (OpenAI) at 175B parameters demonstrates in-context learning.
  - **2020 Jan** — Kaplan scaling laws published.
  - **2021 Feb** — CLIP (OpenAI) demonstrates contrastive image-text pretraining.
  - **2021 Jul** — AlphaFold 2 paper in Nature.
  - **2021 Aug 16** — Stanford CRFM publishes "On the Opportunities and Risks of Foundation Models" coining the term.
  - **2022 Mar** — Chinchilla paper revises compute-optimal allocation to ≈20 tokens/parameter.
  - **2022 Mar** — InstructGPT (RLHF) paper.
  - **2022 Nov 30** — ChatGPT public launch.
  - **2023 Mar** — GPT-4 release.
  - **2023 Feb / Jul** — Llama / Llama 2 release.
  - **2023 Jul** — Frontier Model Forum founded.
  - **2023 Sep** — Mistral 7B release.
  - **2023 Nov** — Claude 2.1, Bletchley Park AI Safety Summit, UK AISI established.
  - **2024 Feb** — Gemini 1.5 Pro (1M context), Sora preview, Llama 3 announcement.
  - **2024 Apr** — Mixtral 8x22B, Llama 3.
  - **2024 May** — GPT-4o, AlphaFold 3, Seoul AI Safety Summit, Wayve $1.05B Series C.
  - **2024 Jul** — Llama 3.1 405B, SAM 2.
  - **2024 Sep** — o1-preview reasoning model debut.
  - **2024 Oct** — Nobel Prize in Chemistry to Hassabis, Jumper, Baker for AlphaFold.
  - **2024 Dec** — DeepSeek-V3, Gemini 2.0, EU AI Act enters force.
  - **2025 Jan** — DeepSeek-R1, US AI Diffusion Rule, Stargate Project, UK AI Opportunities Action Plan.
  - **2025 Feb** — Claude 3.7 Sonnet, Grok 3, Paris AI Action Summit.
  - **2025 May** — Claude 4 launch.
  - **2025 Jul** — GPAI Code of Practice signing.
  - **2025 Aug** — EU AI Act GPAI obligations enter force for new models.
  - **2026 Jan** — South Korea AI Framework Act enters force.

  - ### Glossary of Adjacent Concepts
  - Foundation Models occupy a conceptual neighbourhood shared with several related categories. Disambiguation matters because regulatory, technical, and commercial obligations attach differently to each.
  - **General-Purpose AI (GPAI)** — the EU AI Act's chosen term, broadly synonymous with Foundation Models. Article 3(63): "an AI model … that displays significant generality and is capable of competently performing a wide range of distinct tasks."
  - **Frontier Model** — model at or beyond the current capability frontier; usage by FMF, AISI, US Executive Order 14110. Definitionally moving: today's frontier is tomorrow's baseline.
  - **Large Language Model (LLM)** — subset of Foundation Models specialised to text; preserves utility despite "foundation models" superseding it as a category term.
  - **Frontier Reasoning Model** — sub-category emerging 2024-2025 (o1, Claude 3.7 Extended Thinking, DeepSeek-R1, Gemini 2.5 Deep Think) that trades inference compute for reasoning quality.
  - **Pretrained Model** — older, narrower term emphasising the pretraining-then-adapt workflow; subset of Foundation Models with fewer scale or emergence connotations.
  - **Transfer-Learning Backbone** — pre-2021 NLP/CV terminology, displaced by "foundation model" because it under-specified the emergence and homogenisation dimensions.
  - **Base Model** — the pretrained-only checkpoint before SFT, instruction-tuning, or alignment. Many open-weights distributions ship paired "base" and "instruct" variants.
  - **Instruct Model / Chat Model** — the post-SFT-and-alignment variant intended for end-user deployment.
  - **Reasoning Model** — explicitly tuned for chain-of-thought / extended-thinking workloads (o-series, R-series, Claude Extended Thinking).
  - **Multimodal Model** — accepts and/or produces more than one modality (text, image, audio, video).
  - **Generative AI** — output-side framing that overlaps Foundation Models but predates it; includes pre-foundation-era generative systems (GANs, VAEs, diffusion before scale).

  - ### Research and Literature
  - **Foundational works**:
  - 1. Bommasani, R., Hudson, D.A., Adeli, E., Altman, R., Arora, S., von Arx, S., Bernstein, M.S., Bohg, J., ... Liang, P. (2021). *On the Opportunities and Risks of Foundation Models*. Stanford CRFM Report. arXiv:2108.07258.
  - 2. Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A.N., Kaiser, L., & Polosukhin, I. (2017). *Attention Is All You Need*. NeurIPS 2017. arXiv:1706.03762.
  - 3. Devlin, J., Chang, M.-W., Lee, K., & Toutanova, K. (2018). *BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding*. arXiv:1810.04805.
  - 4. Brown, T.B., Mann, B., Ryder, N., Subbiah, M., Kaplan, J., Dhariwal, P., et al. (2020). *Language Models are Few-Shot Learners* (GPT-3). NeurIPS 2020. arXiv:2005.14165.
  - 5. Radford, A., Kim, J.W., Hallacy, C., Ramesh, A., Goh, G., Agarwal, S., Sastry, G., Askell, A., Mishkin, P., Clark, J., Krueger, G., & Sutskever, I. (2021). *Learning Transferable Visual Models From Natural Language Supervision* (CLIP). ICML 2021. arXiv:2103.00020.

  - **Scaling laws and training economics**:
  - 6. Kaplan, J., McCandlish, S., Henighan, T., Brown, T.B., Chess, B., Child, R., Gray, S., Radford, A., Wu, J., & Amodei, D. (2020). *Scaling Laws for Neural Language Models*. arXiv:2001.08361.
  - 7. Hoffmann, J., Borgeaud, S., Mensch, A., Buchatskaya, E., Cai, T., Rutherford, E., et al. (2022). *Training Compute-Optimal Large Language Models* (Chinchilla). arXiv:2203.15556.
  - 8. Wei, J., Tay, Y., Bommasani, R., Raffel, C., Zoph, B., Borgeaud, S., et al. (2022). *Emergent Abilities of Large Language Models*. TMLR 2022. arXiv:2206.07682.
  - 9. Fedus, W., Zoph, B., & Shazeer, N. (2022). *Switch Transformer: Scaling to Trillion Parameter Models with Simple and Efficient Sparsity*. JMLR 2022. arXiv:2101.03961.

  - **Alignment and preference optimisation**:
  - 10. Ouyang, L., Wu, J., Jiang, X., Almeida, D., Wainwright, C.L., Mishkin, P., et al. (2022). *Training language models to follow instructions with human feedback* (InstructGPT). NeurIPS 2022. arXiv:2203.02155.
  - 11. Bai, Y., Kadavath, S., Kundu, S., Askell, A., Kernion, J., Jones, A., et al. (2022). *Constitutional AI: Harmlessness from AI Feedback*. arXiv:2212.08073.
  - 12. Rafailov, R., Sharma, A., Mitchell, E., Ermon, S., Manning, C.D., & Finn, C. (2023). *Direct Preference Optimization: Your Language Model is Secretly a Reward Model* (DPO). NeurIPS 2023. arXiv:2305.18290.
  - 13. Ethayarajh, K., Xu, W., Muennighoff, N., Jurafsky, D., & Kiela, D. (2024). *KTO: Model Alignment as Prospect Theoretic Optimization*. arXiv:2402.01306.
  - 14. Hong, J., Lee, N., & Thorne, J. (2024). *ORPO: Monolithic Preference Optimization without Reference Model*. arXiv:2403.07691.

  - **Model families and technical reports**:
  - 15. OpenAI (2023). *GPT-4 Technical Report*. arXiv:2303.08774.
  - 16. Anthropic (2024). *Claude 3 Model Card*. Anthropic. https://www.anthropic.com/news/claude-3-family.
  - 17. Gemini Team Google (2023). *Gemini: A Family of Highly Capable Multimodal Models*. arXiv:2312.11805.
  - 18. Touvron, H., et al. (2023). *Llama 2: Open Foundation and Fine-Tuned Chat Models*. arXiv:2307.09288.
  - 19. Meta AI (2024). *The Llama 3 Herd of Models*. arXiv:2407.21783.
  - 20. DeepSeek-AI (2024). *DeepSeek-V3 Technical Report*. arXiv:2412.19437.
  - 21. DeepSeek-AI (2025). *DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning*. arXiv:2501.12948.
  - 22. Jiang, A.Q., et al. (2024). *Mixtral of Experts*. arXiv:2401.04088.

  - **Scientific foundation models**:
  - 23. Jumper, J., Evans, R., Pritzel, A., Green, T., Figurnov, M., Ronneberger, O., et al. (2021). *Highly accurate protein structure prediction with AlphaFold*. Nature 596, 583-589.
  - 24. Abramson, J., et al. (2024). *Accurate structure prediction of biomolecular interactions with AlphaFold 3*. Nature 630, 493-500.
  - 25. Lin, Z., et al. (2023). *Evolutionary-scale prediction of atomic-level protein structure* (ESM-2). Science 379, 1123-1130.
  - 26. Nguyen, E., Poli, M., Faizi, M., Thomas, A., Birch-Sykes, C., Wornow, M., et al. (2024). *Evo: DNA Language Modeling at the Scale of Whole Genomes*. Arc Institute / Stanford preprint.

  - **Vision, video, and multimodal foundation models**:
  - 27. Kirillov, A., et al. (2023). *Segment Anything*. ICCV 2023. arXiv:2304.02643.
  - 28. Ravi, N., et al. (2024). *SAM 2: Segment Anything in Images and Videos*. arXiv:2408.00714.

  - **Evaluation and governance**:
  - 29. Liang, P., Bommasani, R., Lee, T., Tsipras, D., Soylu, D., Yasunaga, M., et al. (2022-2024). *Holistic Evaluation of Language Models* (HELM). TMLR.
  - 30. European Commission (2024). *Regulation (EU) 2024/1689 of the European Parliament and of the Council laying down harmonised rules on artificial intelligence (AI Act)*. Articles 51-55 (General-Purpose AI Models).

  - ## Metadata
    - **Last Updated**: 2026-05-16
    - **Domain validation**: Frontmatter `domain::` corrected from `infrastructure` to `artificial-intelligence`; `iri`, `uri`, `same-as`, `owl-class` updated to the `artificial-intelligence` namespace; legacy-term-id AI-1101 assigned.
    - **Review Status**: Comprehensive editorial review; cross-referenced against the Stanford CRFM 2021 paper, the EU AI Act Regulation (EU) 2024/1689, the UK AI Opportunities Action Plan (Jan 2025), and the Frontier Model Forum founding documentation.
    - **Verification**: Model release dates and benchmark scores cross-referenced against vendor technical reports and the LMSYS Chatbot Arena leaderboard as of May 2026. UK industry funding figures verified against Crunchbase and the FT Tech.
    - **Regional Context**: UK Foundation Model ecosystem documented across Whitehall (AISI), London (DeepMind, Wayve, Synthesia, Stability AI, ElevenLabs, Mistral London office, Cohere London), Cambridge (Cambridge AI, Dawn cluster), Oxford (OATML), Edinburgh (ELLIS Unit), Manchester / Leeds / Sheffield / Newcastle (Northern AI Alliance), Bristol (Isambard-AI), and Culham (first AI Growth Zone).
    - **Production-Ready**: Complete OWL formal semantics, scaling-law mathematics, comprehensive training-pipeline coverage, governance regime documentation (EU AI Act, GPAI Code of Practice, UK AISI MOUs, Korea Framework Act), and current-landscape commentary calibrated to May 2026.
    - **Authority Score**: 0.87 (foundational regulatory category, multi-trillion-dollar industrial significance, active research community, robust academic-to-industrial translation pipeline through Stanford CRFM, UK AISI, and the Frontier Model Forum).

- ### Provenance
  - sources:: [[Bommasani et al. 2021 On the Opportunities and Risks of Foundation Models]], [[Vaswani et al. 2017 Attention Is All You Need]], [[Devlin et al. 2018 BERT]], [[Brown et al. 2020 GPT-3 Language Models are Few-Shot Learners]], [[Radford et al. 2021 CLIP Learning Transferable Visual Models From Natural Language Supervision]], [[Kaplan et al. 2020 Scaling Laws for Neural Language Models]], [[Hoffmann et al. 2022 Chinchilla Training Compute-Optimal Large Language Models]], [[Wei et al. 2022 Emergent Abilities of Large Language Models]], [[Fedus et al. 2022 Switch Transformer]], [[Ouyang et al. 2022 InstructGPT Training Language Models with Human Feedback]], [[Bai et al. 2022 Constitutional AI]], [[Rafailov et al. 2023 Direct Preference Optimization]], [[Ethayarajh et al. 2024 KTO Kahneman-Tversky Optimization]], [[Hong et al. 2024 ORPO Monolithic Preference Optimization]], [[OpenAI 2023 GPT-4 Technical Report]], [[Anthropic 2024 Claude 3 Model Card]], [[Gemini Team Google 2023 Gemini Technical Report]], [[Meta AI 2024 Llama 3 Herd of Models]], [[DeepSeek-AI 2024 DeepSeek-V3 Technical Report]], [[DeepSeek-AI 2025 DeepSeek-R1 Reasoning via Reinforcement Learning]], [[Jiang et al. 2024 Mixtral of Experts]], [[Jumper et al. 2021 AlphaFold Nature]], [[Abramson et al. 2024 AlphaFold 3 Nature]], [[Kirillov et al. 2023 Segment Anything SAM]], [[Ravi et al. 2024 SAM 2 Segment Anything in Images and Videos]], [[Liang et al. HELM Holistic Evaluation of Language Models]], [[European Commission 2024 EU AI Act Regulation 2024-1689]], [[Frontier Model Forum 2023 Founding Statement]], [[UK AI Opportunities Action Plan 2025 Matt Clifford]]
  - migration-date:: 2026-04-26T00:00:00Z
  - enrichment-date:: 2026-05-16T18:24:00Z
  - domain-corrected:: infrastructure -> artificial-intelligence