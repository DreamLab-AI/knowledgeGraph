- ### Definition
  - Causal language modelling (CLM) is a self-supervised pre-training objective that trains a [[Transformer Architecture|decoder-only transformer]] to predict each token in a sequence given only the tokens preceding it, thereby factorising the joint probability of text as an autoregressive product of conditional distributions: P(x₁, x₂, …, xₙ) = ∏ᵢ P(xᵢ | x₁, …, xᵢ₋₁). The adjective "causal" derives directly from the [[Causal Attention]] mask — a lower-triangular binary matrix applied to the [[Attention Mechanism]] within each [[Self Attention|self-attention layer]] — which enforces a strict left-to-right information flow and prevents any token from attending to future positions, respecting the causal structure of temporal data generation. This constraint distinguishes CLM sharply from [[Masked Language Modelling]] (used in [[BERT]] and other encoder-only models), where the model receives bidirectional context and must reconstruct deliberately corrupted tokens. The CLM objective does not require any human-labelled data: the training signal is derived entirely from the statistical regularity of raw text corpora, making it a canonical instance of [[Self-Supervised Learning]]. Training proceeds via teacher forcing — all next-token predictions are computed in a single forward pass over the full sequence using the masked [[Multi-Head Attention]] computation — and the model is optimised by minimising the average cross-entropy loss (equivalently, minimising [[Perplexity]]) over every position simultaneously. This parallelism makes CLM far more compute-efficient during training than recurrent alternatives such as [[Recurrent Neural Network|RNNs]] or [[Long Short-Term Memory|LSTMs]], which must process tokens sequentially. The resulting [[Large Language Models]] — including [[GPT]], [[LLaMA]], Mistral, Falcon, Gemini, and the Claude family — are [[Foundation Models]] that, once pre-trained on internet-scale corpora, can be adapted to virtually any downstream task through [[Instruction Tuning]], [[Fine Tuning]], [[Reinforcement Learning from Human Feedback]], or [[In-Context Learning]]. The open-ended, generative nature of causal language models, unconstrained by any fixed output length or target vocabulary, makes them the substrate for [[Chain-of-Thought Prompting]], [[Code Generation]], and extended reasoning systems that produce coherent multi-step outputs token by token. By 2026, the CLM objective on decoder-only transformer architectures has become the unquestioned industrial standard for frontier AI systems across code, science, mathematics, and multimodal reasoning.

- ### Semantic Classification
  - owl-class:: ai:CausalLanguageModelling
  - owl-role:: ExecutableProtocol | LearningParadigm
  - owl-inferred:: ai:PreTrainingObjective, ai:SelfSupervisedObjective, ai:AutoregressiveMethod
  - belongs-to-domain:: [[AI-GroundedDomain]], [[ComputationAndIntelligenceDomain]]
  - implemented-in-layer:: [[AlgorithmicLayer]], [[DataLayer]]

- ### Relationships
  - is-subclass-of:: [[Self-Supervised Learning]], [[Language Modelling]], [[Large Language Model Training]], [[Pre-Training]]
  - has-part:: [[Causal Attention]], [[Autoregressive Decoding]], [[Teacher Forcing]], [[Cross-Entropy Loss]], [[Perplexity]]
  - requires:: [[Attention Mechanism]], [[Transformer Architecture]], [[Tokenization]], [[Positional Encoding]], [[Training Data]], [[GPU Compute]]
  - enables:: [[Large Language Models]], [[GPT]], [[LLaMA]], [[Foundation Models]], [[Chain-of-Thought Prompting]], [[Code Generation]], [[In-Context Learning]], [[Text Generation]], [[Reasoning]]
  - implements:: [[Multi-Head Attention]], [[Backpropagation]], [[Gradient Descent]], [[Autoregressive Factorisation]]
  - depends-on:: [[Attention Mechanism]], [[Self Attention]], [[Feed Forward Network]], [[Layer Normalisation]], [[Embedding]]
  - supports:: [[Instruction Tuning]], [[Reinforcement Learning from Human Feedback]], [[Fine Tuning]], [[Prompt Engineering]], [[Zero-Shot Learning]], [[Few-Shot Learning]]
  - uses:: [[Causal Attention]], [[Attention Mechanism]], [[Softmax Function]], [[Byte Pair Encoding]]
  - contrasts-with:: [[Masked Language Modelling]], [[BERT]], [[Encoder-Decoder Architecture]], [[Diffusion Language Model]], [[State Space Model]]
  - related-to:: [[In-Context Learning]], [[Instruction Tuning]], [[Speculative Decoding]], [[Fill-in-the-Middle]], [[Mixture of Experts]], [[Retrieval-Augmented Generation]]
  - standardized-by:: [[Vaswani et al. 2017]], [[Radford et al. 2018]]

- ### Content
  ## Compositional Relationships (Components)
      SubClassOf(ai:CausalLanguageModelling
        ObjectSomeValuesFrom(ai:hasPart ai:CausalAttention))
      SubClassOf(ai:CausalLanguageModelling
        ObjectSomeValuesFrom(ai:hasPart ai:CrossEntropyLoss))
      SubClassOf(ai:CausalLanguageModelling
        ObjectSomeValuesFrom(ai:hasPart ai:TeacherForcing))
      SubClassOf(ai:CausalLanguageModelling
        ObjectSomeValuesFrom(ai:hasPart ai:AutoregressiveDecoding))
      SubClassOf(ai:CausalLanguageModelling
        ObjectSomeValuesFrom(ai:hasPart ai:Perplexity))
      SubClassOf(ai:CausalLanguageModelling
        ObjectSomeValuesFrom(ai:hasPart ai:NextTokenPrediction))

  ## Dependency Relationships
      SubClassOf(ai:CausalLanguageModelling
        ObjectSomeValuesFrom(ai:requires ai:TransformerArchitecture))
      SubClassOf(ai:CausalLanguageModelling
        ObjectSomeValuesFrom(ai:requires ai:AttentionMechanism))
      SubClassOf(ai:CausalLanguageModelling
        ObjectSomeValuesFrom(ai:requires ai:Tokenization))
      SubClassOf(ai:CausalLanguageModelling
        ObjectSomeValuesFrom(ai:requires ai:PositionalEncoding))
      SubClassOf(ai:CausalLanguageModelling
        ObjectSomeValuesFrom(ai:requires ai:TrainingData))
      SubClassOf(ai:CausalLanguageModelling
        ObjectSomeValuesFrom(ai:requires ai:GPUCompute))
      SubClassOf(ai:CausalLanguageModelling
        ObjectSomeValuesFrom(ai:dependsOn ai:SelfAttention))
      SubClassOf(ai:CausalLanguageModelling
        ObjectSomeValuesFrom(ai:dependsOn ai:LayerNormalisation))

  ## Capability Relationships
      SubClassOf(ai:CausalLanguageModelling
        ObjectSomeValuesFrom(ai:enables ai:LargeLanguageModels))
      SubClassOf(ai:CausalLanguageModelling
        ObjectSomeValuesFrom(ai:enables ai:ChainOfThoughtPrompting))
      SubClassOf(ai:CausalLanguageModelling
        ObjectSomeValuesFrom(ai:enables ai:CodeGeneration))
      SubClassOf(ai:CausalLanguageModelling
        ObjectSomeValuesFrom(ai:enables ai:InContextLearning))
      SubClassOf(ai:CausalLanguageModelling
        ObjectSomeValuesFrom(ai:enables ai:TextGeneration))
      SubClassOf(ai:CausalLanguageModelling
        ObjectSomeValuesFrom(ai:enables ai:Reasoning))
      SubClassOf(ai:CausalLanguageModelling
        ObjectSomeValuesFrom(ai:supports ai:InstructionTuning))
      SubClassOf(ai:CausalLanguageModelling
        ObjectSomeValuesFrom(ai:supports ai:ReinforcementLearningFromHumanFeedback))

  ## Implementation Relationships
      SubClassOf(ai:CausalLanguageModelling
        ObjectSomeValuesFrom(ai:implements ai:MultiHeadAttention))
      SubClassOf(ai:CausalLanguageModelling
        ObjectSomeValuesFrom(ai:implements ai:Backpropagation))
      SubClassOf(ai:CausalLanguageModelling
        ObjectSomeValuesFrom(ai:implements ai:GradientDescent))
      SubClassOf(ai:CausalLanguageModelling
        ObjectSomeValuesFrom(ai:implements ai:AutoregressiveFactorisation))

  ## Reduction Relationships
      SubClassOf(ai:CausalLanguageModelling
        ObjectSomeValuesFrom(ai:reducesTo ai:SelfSupervisedLearning))
      SubClassOf(ai:CausalLanguageModelling
        ObjectSomeValuesFrom(ai:reducesTo ai:LanguageModelling))
      SubClassOf(ai:CausalLanguageModelling
        ObjectSomeValuesFrom(ai:reducesTo ai:NextTokenPrediction))
      SubClassOf(ai:CausalLanguageModelling
        ObjectSomeValuesFrom(ai:reducesTo ai:AutoregressiveDecoding))
      SubClassOf(ai:CausalLanguageModelling
        ObjectSomeValuesFrom(ai:contrastsWith ai:MaskedLanguageModelling))
      SubClassOf(ai:CausalLanguageModelling
        ObjectSomeValuesFrom(ai:contrastsWith ai:DiffusionLanguageModel))
      SubClassOf(ai:CausalLanguageModelling
        ObjectSomeValuesFrom(ai:implements ai:FillInTheMiddle))
      SubClassOf(ai:CausalLanguageModelling
        ObjectSomeValuesFrom(ai:supports ai:FewShotLearning))
      SubClassOf(ai:CausalLanguageModelling
        ObjectSomeValuesFrom(ai:supports ai:ZeroShotLearning))
      SubClassOf(ai:CausalLanguageModelling
        ObjectSomeValuesFrom(ai:enables ai:SpeculativeDecoding))
      SubClassOf(ai:CausalLanguageModelling
        ObjectSomeValuesFrom(ai:enables ai:MultimodalLearning))
      SubClassOf(ai:CausalLanguageModelling
        ObjectSomeValuesFrom(ai:requires ai:BytePairEncoding))

  ## About

  Language modelling as a statistical task has roots in the 1940s information-theoretic work of Claude Shannon, who quantified the redundancy of English and estimated its entropy per character. The task of assigning probabilities to sequences of words was formalised with n-gram models and smoothing techniques throughout the 1980s and 1990s, with large n-gram language models becoming standard components in speech recognition and machine translation pipelines. The shift to neural language models began with Yoshua Bengio and colleagues (2003), who trained a feedforward neural network to map fixed-width context windows of token embeddings to a probability distribution over the next word, demonstrating that distributed representations could generalise far better than n-gram back-off methods on out-of-vocabulary contexts.

  The introduction of the [[Transformer Architecture]] by Vaswani et al. (2017) — the "Attention Is All You Need" paper — removed the context-window limitation entirely. By using [[Self Attention|self-attention]] rather than convolutions or recurrence, transformers could in principle attend to all prior tokens simultaneously. The causal variant applies a triangular mask so that token i attends only to tokens 0 through i, preserving the autoregressive property while retaining fully parallel training via teacher forcing. OpenAI's GPT-1 (Radford et al., 2018) was the first large demonstration that a decoder-only transformer pre-trained with the causal language modelling objective on a large text corpus could be fine-tuned to achieve competitive performance across diverse NLP benchmarks with minimal task-specific modifications. GPT-2 (2019) and GPT-3 (2020) showed that scaling the same architecture and objective — without fundamental changes — produced emergent capabilities including few-shot learning, in-context arithmetic, and rudimentary code generation, establishing the scaling law paradigm (Kaplan et al., 2020).

  Today, causal language modelling is the dominant pre-training objective for every major frontier model family: OpenAI's GPT-4o and o3 series, Google DeepMind's Gemini family, Meta's LLaMA 3, Anthropic's Claude series, Mistral AI's Mistral and Mixtral, and xAI's Grok — all use decoder-only transformers trained on the next-token prediction objective, subsequently aligned via instruction tuning and reinforcement learning from human feedback.

  The significance of CLM as a pre-training objective lies in its remarkable simplicity relative to the richness of the representations it produces. By casting language modelling as a straightforward next-token prediction task — essentially asking the model to compress the statistical patterns of human-generated text into its parameters — CLM implicitly forces the model to learn grammar, world knowledge, reasoning patterns, stylistic conventions, and social norms as intermediate representations needed to predict the next word well. This connection between compression (minimising perplexity) and general intelligence is sometimes called the "compression-intelligence equivalence" and is theoretically grounded in [[Information Theory]]: a model that can accurately predict the next token in any text must have learned a representation of the world that generated that text. This idea motivates the view that scaling CLM training — more parameters, more data, more compute — systematically improves general intelligence, a hypothesis validated empirically by the scaling law literature and operationally by the trajectory of frontier models from GPT-3 in 2020 to GPT-4o and Claude 3.7 in 2025–2026.

  An important conceptual distinction that CLM crystallises is between pre-training and post-training alignment. The CLM objective alone produces a model that predicts text continuations without any preference for being helpful, harmless, or honest — it will continue harmful prompts, reproduce biases in training data, and generate plausible-sounding falsehoods. [[Instruction Tuning]] (supervised fine-tuning on curated instruction-response pairs) and [[Reinforcement Learning from Human Feedback]] are post-training procedures layered on top of the CLM-pre-trained checkpoint to align the model's generative behaviour with human values and task requirements. Critically, the quality of post-training alignment scales with the quality of the underlying CLM pre-trained model: a better-pre-trained model is easier to align and achieves better aligned performance from the same quantity of human feedback data. This "pre-training first" pipeline is now standard across the industry and is likely to remain so as long as CLM produces the best general-purpose representations.

  ## Components / Architecture

  The core architectural element that realises causal language modelling is the **causal attention mask** — a lower-triangular matrix of ones and negative-infinity values added to the raw attention logits before softmax, ensuring that position i receives zero attention weight from any position j > i. Within this masked attention framework, the model comprises:

  - **Token Embedding Layer**: maps discrete tokens (from a vocabulary of ~50,000 to ~128,000 tokens, produced by [[Byte Pair Encoding]] or SentencePiece) to dense vectors of dimension d_model.
  - **Positional Encoding / Positional Embedding**: injects sequence order information. Modern models use Rotary Positional Embeddings (RoPE) or ALiBi rather than the sinusoidal encodings of the original transformer, enabling extrapolation to context lengths far beyond those seen during training.
  - **Stacked Decoder Blocks**: each block contains (a) a causally masked [[Multi-Head Attention]] sublayer, (b) a position-wise [[Feed Forward Network]] with GeLU or SwiGLU activation, and (c) [[Layer Normalisation]] (pre-norm in modern variants). Blocks number from 12 (GPT-2 small) to 96+ (GPT-4 class).
  - **Language Model Head**: a linear projection followed by softmax producing a probability distribution over the vocabulary for the next-token prediction at each position.
  - **Training objective**: average cross-entropy loss L = −(1/N) ∑ᵢ log P(xᵢ | x₁,…,xᵢ₋₁; θ), equivalent to minimising perplexity exp(L).

  Modern efficiency innovations include:
  - **Flash Attention (v1-v4)**: IO-aware tiling that fuses the attention softmax into a single GPU kernel, reducing memory bandwidth usage from O(n²) to O(n) reads/writes. Flash Attention 4 (2026) achieves approximately 1,605 TFLOPs/s on NVIDIA H100/B200 GPUs.
  - **Grouped Query Attention (GQA)**: shares key-value heads across groups of query heads, drastically reducing KV-cache memory while retaining quality.
  - **Sliding Window / Sparse Attention**: limits attention to a local window while maintaining global context through hierarchical mechanisms.
  - **Speculative Decoding**: uses a small draft model to propose token continuations that a larger verifier model accepts or rejects, achieving 2–4× inference speedup without quality loss.
  - **Fill-in-the-Middle (FIM)**: a data augmentation technique that rearranges training documents into prefix-suffix-middle format, extending the decoder-only model's capability to infilling tasks without architectural changes (Bavarian et al., 2022). Widely used for code completion.

  ## Use Cases / Major Families

  **Open-Ended Text Generation**: The most natural application — given a prompt, the model generates continuation token by token until an end-of-sequence token or length limit. Quality and coherence scale with model size and pre-training data volume.

  **Code Generation and Completion**: Models including GitHub Copilot (powered by OpenAI Codex), DeepSeek-Coder, and Meta's Code Llama are CLM-trained decoder-only transformers specialised on code corpora. The fill-in-the-middle extension supports inline completion in IDEs.

  **Chain-of-Thought Reasoning**: By prompting the model to generate explicit intermediate reasoning steps before a final answer, CLM's sequential generation property is leveraged to improve multi-step problem solving in mathematics, science, and logic. Extended thinking modes in Claude 3.7/3.5 and OpenAI o3 use separate reasoning token budgets.

  **Instruction Following and Dialogue**: [[Instruction Tuning]] on curated instruction–response datasets (e.g., FLAN, OpenHermes, SlimOrca) adapts the CLM-pretrained model to follow user directives. Combined with [[Reinforcement Learning from Human Feedback]], this produces aligned assistants (InstructGPT, Claude, Gemini Pro).

  **Multimodal Extension**: Vision-language models such as LLaVA, Flamingo, and GPT-4V extend CLM by prepending visual token sequences produced by a vision encoder into the causal sequence, allowing the model to reason over images using the same next-token prediction objective.

  **Scientific and Mathematical Domains**: Models pre-trained or fine-tuned on scientific literature (e.g., Galactica, OpenScholar) use CLM to generate hypotheses, summarise papers, and assist with mathematical proof steps.

  ## Academic Context

  The theoretical foundations of causal language modelling span information theory, computational linguistics, and deep learning theory. Key milestones:

  - **Shannon (1948)**: Established entropy as the theoretical limit of compressible information in sequences, framing language modelling as entropy estimation.
  - **Jelinek et al. (1977)**: Trigram n-gram language models for speech recognition, introducing the Kneser-Ney smoothing family.
  - **Bengio et al. (2003)**: "A Neural Probabilistic Language Model" — first neural approach, demonstrating word embeddings and distributed representations.
  - **Mikolov et al. (2010)**: Recurrent neural network language models outperforming n-gram baselines at scale.
  - **Vaswani et al. (2017)**: "Attention Is All You Need" — transformer architecture enabling fully parallelised CLM training.
  - **Radford et al. (2018)**: GPT-1 — first large-scale demonstration of transfer learning from CLM pre-training.
  - **Radford et al. (2019)**: GPT-2 — scale-alone emergent zero-shot capabilities.
  - **Brown et al. (2020)**: GPT-3 — 175B parameter few-shot learning via in-context prompting.
  - **Kaplan et al. (2020)**: Scaling laws for neural language models (OpenAI) — empirical power-law relationships between model size, data, compute, and loss.
  - **Hoffmann et al. (2022)**: Chinchilla — optimal compute allocation requires data volume scaling proportionally to model size.
  - **Chung et al. (2022)**: FLAN-T5 and instruction fine-tuning at scale.
  - **Bavarian et al. (2022)**: Fill-in-the-Middle training for code CLM.
  - **Ouyang et al. (2022)**: InstructGPT — combining CLM pre-training with RLHF.
  - **Touvron et al. (2023, 2024)**: LLaMA 1, 2, and 3 — open-weight CLM models matching closed proprietary capabilities.
  - **Dai et al. (2024)**: Future Token Prediction — per-token adaptive masking extending the causal objective.

  Research centres driving this field include OpenAI, Anthropic, Google DeepMind (London), Meta AI Research (FAIR), Mistral AI (Paris), and academic groups at MIT, Stanford, UCL, Edinburgh, Cambridge, and ETH Zurich.

  ## Current Landscape (2026)

  As of mid-2026, causal language modelling on decoder-only transformer architectures is the universal pre-training substrate for frontier AI. All leading closed and open-weight models — GPT-4o and o3 (OpenAI), Gemini 2.0 Ultra (Google DeepMind), Claude 3.7 Sonnet and Opus (Anthropic), LLaMA 3.3 70B and 3.1 405B (Meta), Mistral Large 2 and Mixtral 8x22B, Qwen 3 235B (Alibaba), and DeepSeek-V3/R2 — all use the CLM objective with decoder-only architectures.

  Key 2025–2026 developments:

  - **Extended context windows**: Production models routinely support 128K–1M+ token context using RoPE with extended base frequencies and sliding window attention, eliminating the practical context constraint that once limited CLM applications.
  - **Hybrid objectives**: Fill-in-the-Middle (FIM) is now standard in code models. Diffusion language models (LLaDA, MDLM, Block Causal Diffusion) are emerging alternatives challenging pure autoregression on certain generation tasks, though no hybrid has displaced CLM at frontier scale.
  - **State Space Model alternatives**: Mamba (Gu & Dao, 2023) and its successors offer linear-time sequence modelling with selective state spaces, achieving comparable perplexity with O(n) rather than O(n²) attention compute. Hybrid Mamba-Transformer architectures (Jamba, Zamba, Falcon-Mamba) combine SSM efficiency with transformer expressivity in 2025 production deployments.
  - **Speculative decoding at scale**: LongSpec (2025) and SpecAttn (2026) achieve 3–4× throughput gains on long-context CLM inference, making 100K+ token generations economically viable in production.
  - **Post-training alignment**: Generative RLHF-V (2025) and DPO variants continue to refine how CLM-pretrained models are aligned without degrading pre-trained capability.
  - **Multimodal CLM**: Unified autoregressive models (e.g., GPT-4o, Gemini 2.0 with native audio/image/video tokenisation) extend the CLM objective to interleaved multimodal token streams.

  ## UK Context

  The United Kingdom has been a substantial contributor to the research foundations and commercial deployment of causal language modelling:

  - **Google DeepMind (London)**: Co-invented the [[Transformer Architecture]] (Vaswani et al., 2017 team included Google Brain researchers many of whom joined DeepMind). DeepMind's Gemini family, developed primarily in London with collaborators in Mountain View, uses CLM pre-training at frontier scale.
  - **University College London (UCL)**: The Gatsby Computational Neuroscience Unit and the Centre for Artificial Intelligence have contributed to the theoretical underpinnings of attention-based models and probabilistic language modelling. Yee Whye Teh's group at Oxford and collaborators have advanced Bayesian perspectives on language models.
  - **University of Edinburgh**: The Edinburgh Natural Language Processing group (including Rico Sennrich, who developed Byte Pair Encoding — the tokenisation algorithm universally used in CLM models) has made foundational contributions to neural machine translation and language model evaluation.
  - **University of Cambridge**: The Language Technology Lab and the Natural Language and Information Processing group contribute to discourse modelling, coreference, and evaluating CLM systematic biases.
  - **Stability AI (founded in London)**: Distributed open-weight models and contributed to democratising CLM-based generation.
  - **Aleph Alpha (German, with UK partnerships)**: European sovereign AI initiative using CLM-based models for GDPR-compliant enterprise deployments.
  - **NHS and UK public sector**: NHS England and the NHSX AI Lab have piloted CLM-based models for clinical note summarisation, discharge letter generation, and patient communication, with MHRA guidance shaping deployment practices.
  - **Northern England industrial context**: Manchester's growing AI cluster (including Peak AI, Cogni) deploys instruction-tuned CLM models for retail analytics and customer service. Sheffield NLP group (Mark Stevenson, Carolina Scarton) contributes to CLM evaluation and computational social science applications. Leeds data science initiatives use CLM models in legal document analysis.

  ## Future Directions (2026–2030)

  - **Scaling beyond current frontiers**: Parameter counts exceeding 1 trillion with more efficient sparse activation (MoE) at each forward pass; training data approaching 100+ trillion tokens from synthetic and multimodal sources.
  - **Continual and online learning**: Moving from static CLM pre-training checkpoints to models that update their weights continuously from new token streams without catastrophic forgetting.
  - **Test-time compute scaling**: Extended reasoning modes (o3-style) demonstrate that allocating more tokens to internal chain-of-thought at inference time can substitute for larger model scale; this changes the optimal CLM pre-training strategy.
  - **Formal verification**: Research into whether CLM objectives can produce models with verifiable correctness guarantees on mathematical or code generation tasks, bridging the gap with symbolic AI.
  - **Data curation and synthetic augmentation**: As high-quality human text approaches exhaustion, synthetic data generated by existing CLM models (self-play, constitutional AI methods) becomes the dominant training signal.
  - **Efficiency at the objective level**: Alternatives to next-token cross-entropy — including multi-token prediction targets (Gloeckle et al., 2024), byte-level and character-level CLM, and hierarchical autoregressive models — are likely to supplement or replace standard CLM in specialised settings.
  - **Multimodal unification**: A single CLM-trained model handling text, images, video, audio, protein sequences, and code without modality-specific encoders remains a near-term research goal.
  - **Regulatory compliance**: The EU AI Act (effective 2026) and proposed UK AI legislation will require transparency in CLM training data provenance, bias auditing, and capability disclosure for frontier model deployments.

  ## Benchmark Datasets and Evaluation

  Causal language models are evaluated on a broad suite of benchmarks that probe different aspects of the knowledge and reasoning capabilities acquired through the CLM objective:

  **Perplexity benchmarks** measure how well the model assigns probability to held-out text:
  - *WikiText-103* (Merity et al., 2016): 100M-word Wikipedia corpus; GPT-2 XL achieved 18.3 PPL; modern models achieve sub-10.
  - *Penn Treebank*: Classic benchmark; now largely saturated by large models.
  - *LAMBADA* (Paperno et al., 2016): Focuses on the final word of passages requiring long-range context understanding; tests the model's ability to maintain coherence across hundreds of tokens.
  - *The Pile* (Gao et al., 2020): A diverse 825GB corpus from 22 sources used both for training and evaluation of domain-specific perplexity.

  **Reasoning and knowledge benchmarks**:
  - *MMLU* (Massive Multitask Language Understanding, Hendrycks et al., 2021): 57-subject academic knowledge benchmark spanning mathematics, law, medicine, and the humanities. GPT-4 achieves ~87% accuracy; Claude 3 Opus achieves ~86%.
  - *HellaSwag* (Zellers et al., 2019): Commonsense natural language inference; frontier models are saturated at ~95%+.
  - *ARC-Challenge* (Clark et al., 2018): Grade-school science questions; requires multi-hop reasoning.
  - *BIG-Bench Hard* (Suzgun et al., 2022): 23 challenging tasks from BIG-Bench where chain-of-thought is necessary.
  - *MATH* (Hendrycks et al., 2021): Competition mathematics; GPT-4 achieves ~42% without tools; o3 achieves ~90%+.
  - *HumanEval* (Chen et al., 2021): Python programming tasks from docstring to code; GPT-4 achieves ~67%; Codestral-22B achieves ~77%.
  - *GPQA Diamond* (Rein et al., 2023): PhD-level science questions where human experts achieve ~69%; frontier models exceed that.

  **Long-context benchmarks**:
  - *SCROLLS* (Shaham et al., 2022): Long-document summarisation and question-answering requiring retention of information over thousands of tokens.
  - *RULER* (Hsieh et al., 2024): Evaluates effective context utilisation at lengths from 4K to 128K tokens.
  - *Needle-in-a-Haystack*: Synthetic retrieval tasks hiding a fact in a 100K-token document; modern models achieve near-perfect recall.

  **Instruction following and alignment benchmarks**:
  - *MT-Bench* (Zheng et al., 2023): Multi-turn dialogue evaluation by GPT-4 as judge; industry standard for comparing instruction-tuned models.
  - *Chatbot Arena / LMSYS*: Human preference voting between anonymised model pairs; produces Elo rankings of deployed models.
  - *IFEval* (Zhou et al., 2023): Instruction following evaluation with verifiable constraints.

  ## Formal Algorithm and Training Protocol

  The complete CLM pre-training algorithm for a decoder-only transformer can be stated precisely:

  **Inputs**: Dataset D of documents d₁, …, dₖ; vocabulary V of size |V|; hyperparameters (layers L, heads H, model dimension d, FFN dimension d_ff, sequence length T, batch size B, learning rate η, weight decay λ).

  **Tokenisation**: Each document d is tokenised into a sequence of token ids t₁, t₂, …, tₙ ∈ {1, …, |V|} using a byte-pair encoding vocabulary.

  **Sequence construction**: Documents are concatenated with [EOS] separators and chunked into fixed-length sequences of T tokens: (x₁, …, x_T). The input to the model at step k is (x₁, …, x_{T-1}) and the target is (x₂, …, x_T) — a one-position shift.

  **Forward pass**: For input tokens (x₁, …, x_{T-1}):
  1. Embed: hᵢ⁰ = E[xᵢ] + pos(i) where E is the token embedding matrix and pos(i) is the positional encoding.
  2. For each layer l = 1, …, L:
     a. Masked multi-head self-attention: hᵢˡ = hᵢˡ⁻¹ + MHA(hˡ⁻¹, mask)
     b. Feed-forward: hᵢˡ = hᵢˡ + FFN(LayerNorm(hᵢˡ))
  3. Language model head: logits = W_lm · LayerNorm(h_T^L), producing a distribution over |V| tokens.

  **Loss**: L(θ) = −(1/(T−1)) ∑_{i=1}^{T-1} log P(xᵢ₊₁ | x₁,…,xᵢ; θ)

  **Backward pass**: Gradients ∂L/∂θ are computed via [[Backpropagation]] through all L layers simultaneously (parallelism enabled by teacher forcing + causal mask).

  **Optimiser**: AdamW (Loshchilov & Hutter, 2019) with β₁ = 0.9, β₂ = 0.95, ε = 10⁻⁸, weight decay λ = 0.1; cosine learning rate schedule with linear warmup. Gradient clipping at 1.0 prevents gradient explosion.

  **Scaling considerations**: For models with N parameters trained on D tokens, the optimal loss (Chinchilla scaling law) is minimised when D ≈ 20·N. At the frontier, models with N = 70B parameters are trained on D ≈ 1.4T tokens; N = 400B models on D ≈ 8T+ tokens.

  **Distributed training**: Modern CLM pre-training uses a combination of [[Distributed Training]] strategies: (1) data parallelism — identical model replicas across GPUs receiving different data shards; (2) tensor parallelism — splitting attention heads and FFN matrices across GPUs within a single layer; (3) pipeline parallelism — assigning different layers to different GPUs with microbatch interleaving; (4) ZeRO optimisation (DeepSpeed) — sharding optimiser states, gradients, and parameters across data-parallel ranks.

  ## Key Terminology

  **Autoregressive model**: A model that generates outputs sequentially, conditioning each new output on all previously generated outputs. CLM is the paradigmatic autoregressive model for text.

  **Teacher forcing**: The training procedure in which the true previous tokens (rather than the model's own predictions) are fed as input at each position. This enables full parallelism during training by processing the entire sequence in a single forward pass.

  **Perplexity**: The standard evaluation metric for language models, defined as exp(H), where H is the average cross-entropy loss per token. Lower perplexity indicates a better language model. A perplexity of k means the model is on average as uncertain as if choosing uniformly from k equally probable tokens.

  **Causal attention mask**: The lower-triangular binary matrix (with −∞ for masked positions and 0 for allowed positions) added to attention logits before softmax, enforcing that each token can only attend to itself and prior tokens, realising the autoregressive factorisation.

  **Temperature**: A scaling factor applied to logits before the final softmax during inference: lower temperature makes the distribution more peaked (more deterministic), higher temperature makes it more diffuse (more diverse/random). Temperature = 0 reduces to greedy decoding.

  **KV cache**: The key-value pair cache maintained during autoregressive inference, storing the computed key and value projections for all previously generated tokens to avoid redundant computation. KV-cache size grows linearly with generated length and is a primary memory bottleneck for long-context CLM inference.

  **Next-token prediction**: The elementary operation at the heart of CLM: given all tokens so far, output a probability distribution over the vocabulary for the next token. At inference time, one token is sampled (or selected greedily) from this distribution and appended to the sequence.

  **Decoder-only transformer**: A transformer architecture that uses only the decoder stack (no encoder) with a causal attention mask, enabling autoregressive generation. Distinguished from encoder-only (BERT-style) and encoder-decoder (T5, BART-style) architectures.

  **Instruction tuning**: Supervised fine-tuning on datasets of (instruction, desired-response) pairs, adapting a CLM-pre-trained model to follow human directives across tasks without task-specific architectural changes.

  **Fill-in-the-Middle (FIM)**: A training data augmentation that rearranges documents as (prefix, suffix, middle) triples, training the decoder to generate the middle section given surrounding context. Extends CLM capability to infilling tasks without architectural modification.

  **Speculative decoding**: An inference acceleration technique using a small draft model to propose multiple candidate continuations that the main CLM model then verifies in a single forward pass, achieving throughput gains of 2–4× on standard hardware.

  ## Comparison with Alternative Objectives

  Causal language modelling is not the only possible self-supervised objective for training powerful language representations. Understanding its relationship to alternatives clarifies why it has achieved dominance:

  **Masked Language Modelling (MLM)** — used by [[BERT]], RoBERTa, ALBERT, and DeBERTa — randomly masks 15% of tokens and trains the model to predict them using bidirectional context (past and future). MLM excels at learning rich contextual representations for discriminative tasks (classification, named entity recognition, extractive question answering) and was dominant for NLP fine-tuning benchmarks from 2018 to 2021. However, MLM has two key limitations relative to CLM: (1) it cannot be used for open-ended generation because the model sees future tokens during training; (2) the masked token prediction objective is not aligned with generation and requires separate fine-tuning for generative tasks. CLM, by contrast, supports both generation and fine-tuning in a unified framework — the same model that was pre-trained with CLM can generate text, answer questions in a generative format, and solve tasks with [[In-Context Learning]] without any modification to the output head.

  **Sequence-to-Sequence (Seq2Seq) objectives** — used by T5, BART, mBART, and the original encoder-decoder transformer — train an encoder-decoder model where the encoder processes the full input with bidirectional attention and the decoder generates the output autoregressively with cross-attention to encoder representations. Seq2Seq models excel at tasks with well-defined input-output mappings (translation, summarisation, structured prediction) but require task-specific fine-tuning and do not naturally support [[In-Context Learning]]. The encoder's bidirectional view of the input can be advantageous for comprehension tasks. However, maintaining separate encoder and decoder stacks doubles parameter count for equivalent generation capability compared to decoder-only CLM models, and the requirement for a specified input-output boundary makes open-ended dialogue and reasoning more awkward.

  **Prefix Language Modelling** — used by UniLM, ERNIE 3.0, and some T5 variants — allows the model to apply bidirectional attention over a "prefix" portion of the input and causal attention over the "suffix" (output) portion. This combines the strong comprehension of bidirectional attention with the generation capability of CLM but requires specifying the prefix-suffix boundary during training and inference, limiting flexibility.

  **Diffusion Language Models** (LLaDA, MDLM, Block Causal Diffusion, 2025) represent the most credible emerging alternative to CLM. Unlike CLM's left-to-right sequential generation, diffusion models generate text by iteratively denoising a fully masked sequence, allowing non-autoregressive or semi-autoregressive generation. GuideLabsAI's block causal diffusion model (2025) combines causal temporal structure with diffusion-style within-block generation, and LLaDA (Nie et al., 2025) demonstrated that a masked diffusion LM trained from scratch could match state-of-the-art CLM models on several benchmarks. However, as of mid-2026, no diffusion language model has matched frontier CLM models at comparable scale and compute, and the industry consensus remains that CLM is the most compute-efficient path to general language capabilities.

  **State Space Models (SSMs)** — Mamba (Gu & Dao, 2023), Mamba-2, RWKV, RetNet — offer recurrent formulations with O(n) inference complexity compared to O(n²) for full attention. SSMs can be trained in parallel using convolutional formulations but generate tokens sequentially with a fixed-size recurrent state. Hybrid architectures (Jamba, Zamba) interleave SSM and attention layers, preserving CLM as the training objective while improving inference efficiency. No pure SSM has matched transformer CLM models at frontier scale as of 2026.

  The persistence of CLM as the dominant objective is partly structural: the next-token prediction task is maximally flexible (any text can be tokenised and trained on), computationally efficient (full parallelism during training), and naturally aligned with generation. The simplicity of the objective also enables straightforward scaling — adding more parameters, data, and compute reliably improves the single cross-entropy metric, providing clear training signal without the multi-task balancing issues of multi-objective pre-training.

  ## Theoretical Properties and Limitations

  **Expressiveness**: Decoder-only transformers trained with CLM are universal function approximators for sequence distributions, in the sense that with sufficient capacity and data, they can approximate any conditional distribution P(xₜ | x₁,…,xₜ₋₁) to arbitrary precision. This theoretical expressiveness is what enables the empirical observation that CLM models acquire a surprisingly broad range of capabilities as scale increases.

  **Exposure bias**: During CLM training, each token position is conditioned on the true preceding tokens (teacher forcing). At inference time, the model is conditioned on its own generated tokens. This discrepancy — known as exposure bias — can cause error accumulation: a single wrong prediction shifts the model into an out-of-distribution state, potentially leading to further errors. Exposure bias is less problematic for short generations but can degrade quality for very long sequences. Scheduled sampling (Bengio et al., 2015) and beam search inference mitigate this, but the fundamental train-test mismatch persists.

  **Hallucination**: Because CLM models are trained to produce plausible-sounding text rather than verified factual text, they are prone to generating confident-sounding false statements — a phenomenon called "hallucination". Hallucination arises because the training signal (next-token perplexity) does not distinguish between true and false claims; both "The Eiffel Tower is in Paris" and "The Eiffel Tower is in Berlin" produce similarly structured text that the model can learn to continue fluently. Post-training alignment ([[Reinforcement Learning from Human Feedback]]) and retrieval augmentation ([[Retrieval-Augmented Generation]]) partially mitigate hallucination but do not eliminate it. Addressing hallucination reliably is one of the central open problems in CLM research as of 2026.

  **Length generalisation**: CLM models trained on sequences of length T often fail to generalise to sequences much longer than T, even if the architecture theoretically supports arbitrary lengths. This occurs because the positional encoding distribution shifts out-of-distribution for positions beyond T. Rotary Positional Embeddings (RoPE) with extended base frequencies (used in LLaMA 3, Gemini, and Claude families) partially address this, enabling generalisation to contexts 4–8× longer than training sequences without fine-tuning.

  **Memorisation vs. generalisation**: Large CLM models partially memorise their training data, reproducing verbatim text from the training corpus when prompted with its prefix. This raises privacy, copyright, and data contamination concerns. Research on extracting memorised training examples (Carlini et al., 2021, 2022) has shown that larger models memorise more, and that memorisation scales with model size and the frequency of specific sequences in the training data. Differential privacy training is an active area of research for CLM models intended for deployment in sensitive domains.

  **Calibration**: CLM models produce probability distributions over the next token, but these distributions are often miscalibrated: the model's stated confidence does not reliably match its empirical accuracy. For factual questions, models that express high confidence are frequently wrong, and this miscalibration worsens with scale in some domains. [[Uncertainty Quantification]] and calibration for CLM models — using temperature scaling, Platt scaling, or conformal prediction post-processing — is an active research area.

  **Positional bias**: CLM models exhibit recency bias — they tend to attend more to tokens near the end of a long context than to tokens in the middle — and primacy bias — they tend to anchor on information presented early in a conversation. These biases arise from the training data distribution and the attention pattern statistics. The "lost-in-the-middle" phenomenon (Liu et al., 2023) documents that CLM performance on multi-document question-answering degrades significantly when the relevant passage is placed in the middle of a long context rather than at the beginning or end, even for models with sufficient nominal context window capacity.

  ## Scaling Laws for Causal Language Models

  The empirical relationship between scale (parameters N, training tokens D, compute C = 6ND for dense models) and CLM loss L has been studied extensively, yielding the famous scaling laws:

  **Kaplan et al. (2020)** — the original OpenAI scaling laws — found power-law relationships: L ∝ N^{−0.076} and L ∝ D^{−0.095} individually, and L ∝ C^{−0.050} for compute-optimal training. These laws suggested that increasing model size was the primary driver of loss reduction for a fixed compute budget, leading to the strategy of training very large models on relatively few tokens.

  **Hoffmann et al. (2022)** — the Chinchilla paper from DeepMind — corrected this view with a more careful analysis that held compute budget fixed while varying N and D jointly. They found the optimal compute allocation requires D ≈ 20·N (tokens should scale proportionally to parameters), not the 1:1 ratio implied by earlier results. The Chinchilla model (70B parameters, 1.4T tokens) significantly outperformed Gopher (280B parameters, 300B tokens) trained with the same compute, validating the revised scaling law. This insight shifted the industry toward training smaller models on more data — leading to LLaMA 2 (70B parameters, 2T tokens) and Mistral (7B parameters, trained on far more than Chinchilla-optimal data).

  **Post-Chinchilla developments (2023–2026)**: The Chinchilla laws assume compute is the binding constraint, but for open-weight models intended for widespread deployment, inference cost matters more. Training a 7B model on 10T tokens (well beyond Chinchilla-optimal) produces a model that achieves Chinchilla-optimal performance at 70B but can be deployed at 7B inference cost — a major practical advantage. LLaMA 3.1 8B was trained on 15T tokens for precisely this reason. This "over-training" relative to Chinchilla for inference efficiency has become standard for open-weight models in 2025–2026.

  **Emergent capabilities and phase transitions**: Certain capabilities appear to emerge discontinuously at specific parameter scales — they are absent in smaller models and appear suddenly in larger ones. Wei et al. (2022) documented this for arithmetic, chain-of-thought reasoning, and in-context learning, finding that performance jumps from near-random to near-perfect over a narrow parameter range (typically 62B–175B parameters for the capabilities they studied). The interpretation of emergence remains debated: some argue it reflects genuine phase transitions in the learned representations; others argue it is an artifact of non-linear evaluation metrics that obscure gradual capability accumulation.

  **Data quality vs. quantity**: The FineWeb and DCLM datasets (2024) demonstrated that data quality filtering — removing low-quality web pages, deduplicating, applying quality classifiers — is as important as raw token volume. A model trained on 1T carefully filtered tokens can outperform a model trained on 5T unfiltered tokens. This finding has shifted attention from token counting to data curation pipelines as a key differentiator among frontier CLM models.

  ## Multimodal Extensions of Causal Language Modelling

  The CLM objective extends naturally to multimodal settings by treating non-text modalities as additional token streams that can be interleaved with text:

  **Vision-language models**: Image tokens are produced by a vision encoder (typically a Vision Transformer, ViT) and inserted into the text token sequence before the CLM decoder processes them. Models like LLaVA, MiniGPT-4, and Flamingo extend CLM to visual question answering, image captioning, and visual reasoning by prepending image patch embeddings to the text sequence. The CLM model then treats image tokens as context and generates text responses autoregressively. GPT-4V (2023) and Claude 3's vision capabilities (2024) demonstrated that the CLM objective on interleaved image-text data produces surprisingly strong multimodal reasoning without special architectural changes.

  **Audio language models**: Audio waveforms are encoded into discrete tokens using neural codecs (EnCodec, DAC, Moshi) and fed to a CLM decoder. Models like AudioLM, SoundStorm, and Moshi (2024) use CLM to generate audio conditioned on text prompts or audio context. Whisper's encoder-decoder architecture for speech recognition is related but uses the encoder-decoder variant rather than pure CLM.

  **Code and structured output**: Code generation is a specialised instance of CLM where the token distribution is concentrated on programming language syntax. Models fine-tuned on code (Codex, Code Llama, DeepSeek-Coder, Qwen-Coder) apply the CLM objective to code corpora with special handling for file structure, function boundaries, and docstring-to-code completion. The fill-in-the-middle extension is particularly valuable for code because IDE-based completion scenarios involve generating code within an existing file context (prefix and suffix both known).

  **Protein sequence and scientific modalities**: ESM-2 (Meta AI, 2022) applies CLM to protein amino acid sequences, treating proteins as a language and achieving state-of-the-art structure prediction when combined with an AlphaFold2-style structure head. RNA language models (RNA-FM, CodonBERT) extend the same approach to RNA sequences and codon sequences. The universality of the CLM objective — requiring only that the domain be expressible as a discrete token sequence — makes it applicable to virtually any structured biological or chemical data.

  ## Governance, Safety, and Ethical Considerations

  The widespread deployment of CLM-based systems has raised significant governance and safety concerns that are directly related to the CLM objective and its limitations:

  **Training data governance**: CLM models trained on large web scrapes incorporate biases, stereotypes, harmful content, and copyrighted material present in the training data. The EU AI Act (2024, effective 2026) requires disclosure of training data sources for foundation models deployed in the EU, and UK AI legislation under development has similar provisions. Training data auditing, deduplication, and quality filtering have become core components of responsible CLM development.

  **Copyright and intellectual property**: CLM models can reproduce verbatim passages from training corpora when prompted with the beginning of those passages, raising copyright infringement concerns. The New York Times vs. OpenAI lawsuit (filed 2023, ongoing 2026) and similar cases in multiple jurisdictions are establishing the legal landscape for what constitutes permissible use of copyrighted material in CLM pre-training. Watermarking techniques (Kirchenbauer et al., 2023) embed statistical signatures in CLM-generated text that can be detected algorithmically, providing a tool for attributing generated content to specific models.

  **Dual-use and misuse risk**: CLM's ability to generate fluent, persuasive text at scale creates risks of misuse for disinformation, phishing, automated fraud, and undermining epistemic ecosystems. The US Executive Order on AI Safety (October 2023) and the UK's AI Safety Institute (AISI, established November 2023) have prioritised evaluating frontier CLM models for dangerous capabilities including CBRN (chemical, biological, radiological, nuclear) uplift, cyberoffense capability, and persuasion. Red-teaming, dangerous capability evaluations, and structured access policies for frontier models are now standard industry practice.

  **Environmental footprint**: Training frontier CLM models requires enormous compute: GPT-4 training was estimated to consume ~50 GWh of electricity, equivalent to roughly 5,000 average UK households' annual consumption. Inference at scale adds further energy costs. The carbon footprint of CLM model training and deployment is an active area of measurement and mitigation, with efficiency improvements (quantisation, distillation, speculative decoding) helping to reduce per-inference energy cost.

  ## Inference-Time Techniques and Production Deployment

  Once a CLM model has been pre-trained and aligned, production deployment requires a suite of inference-time techniques to achieve acceptable latency, throughput, and quality:

  **Sampling strategies**: At inference time, a token is drawn from the CLM's output distribution at each step. Simple greedy decoding (always selecting the highest-probability token) produces repetitive, formulaic outputs. More nuanced strategies include: (a) top-k sampling — restricting the distribution to the k most probable tokens before sampling; (b) nucleus (top-p) sampling (Holtzman et al., 2020) — dynamically selecting the smallest set of tokens whose cumulative probability exceeds p (typically 0.9–0.95), adapting the candidate set to the distribution's entropy; (c) temperature scaling — dividing logits by a temperature T before softmax, controlling the sharpness-diversity tradeoff; (d) min-p sampling — filtering tokens with probability below a threshold fraction of the mode probability; (e) beam search — maintaining multiple candidate sequences and selecting the one with highest log-probability, used particularly for translation and structured generation.

  **KV cache management**: During autoregressive generation, the key-value activations from all previous positions must be stored and reused at each step to avoid redundant computation. For a model with L layers, H heads, head dimension d_h, and current sequence length n, the KV cache occupies 2 × L × H × d_h × n × bytes_per_element bytes — growing linearly with sequence length. For a 70B parameter model with 128K context and float16, this is approximately 32 GB of GPU memory, comparable to the model weights themselves. KV cache eviction strategies (H2O, StreamingLLM) and quantisation (KV cache in int4 or int8) reduce memory requirements at modest quality cost.

  **Quantisation**: Model weights and activations can be stored and computed in lower-precision formats (bfloat16 → int8 → int4 → int2) to reduce memory and improve throughput. GPTQ (Frantar et al., 2022) and AWQ (Lin et al., 2023) apply post-training weight-only quantisation that preserves most of the CLM model's quality at 4-bit precision. Activation-aware quantisation and mixed-precision strategies (some layers in int4, others in float16) further optimise the quality-efficiency tradeoff. A 70B model in 4-bit quantisation requires approximately 35 GB VRAM, fitting on two 40GB A100 GPUs, enabling local deployment.

  **Continuous batching**: In production serving systems (vLLM, TGI, TensorRT-LLM), continuous batching allows multiple generation requests to share a single GPU forward pass by packaging variable-length sequences into a batch with appropriate masking. This improves GPU utilisation from ~20% (request-by-request) to ~80%+, dramatically reducing per-token inference cost. The PagedAttention algorithm (Kwon et al., 2023) virtualises the KV cache in pages analogously to OS virtual memory, enabling efficient sharing across requests and reducing memory fragmentation.

  **Distillation**: Large CLM models can be distilled into smaller student models that mimic the teacher's output distribution (knowledge distillation, Hinton et al., 2015) or its internal activations (feature distillation). LLM distillation produces models that are 3–10× smaller with 80–90% of the performance on most benchmarks. DistilGPT-2, Gemma-2B (distilled from Gemma 7B), and many Qwen/Phi models use CLM distillation to produce efficient models suitable for edge deployment on mobile devices and laptops.

  ## Relationship to Adjacent AI Paradigms

  Causal language modelling does not exist in isolation — it intersects with and enables several adjacent AI research paradigms:

  **[[Reinforcement Learning]] from natural language feedback**: The RLHF pipeline — pre-train with CLM, supervised fine-tune on demonstrations, train a reward model on preference pairs, optimise policy with PPO or DPO — has become the standard path from raw CLM capability to deployable assistant behaviour. The CLM pre-training step is foundational: it provides the policy's initial language capability and world knowledge that RLHF then shapes. [[Reinforcement Learning from Human Feedback]] has itself evolved into a rich research area involving Constitutional AI (Anthropic), RLAIF (using AI feedback rather than human feedback), Direct Preference Optimisation (DPO), and Kahneman-Tversky Optimisation (KTO).

  **[[Retrieval-Augmented Generation]] (RAG)**: CLM models have fixed knowledge frozen at pre-training cutoff. RAG extends CLM by retrieving relevant documents from an external knowledge base and prepending them to the context before generation. The CLM model then conditions on both retrieved context and the user's query. RAG improves factual accuracy, enables up-to-date information access, and reduces hallucination on knowledge-intensive tasks. The interaction between retrieval and CLM generation is bidirectional in advanced systems: the CLM generates retrieval queries, evaluates retrieved results, and iterates. RAG has become standard for enterprise CLM deployments where proprietary knowledge integration is required.

  **[[AI Agent|AI agents]] and tool use**: CLM models can be equipped with the ability to call external tools — calculators, code interpreters, web search engines, databases, APIs — by generating structured tool-call tokens that trigger external function execution. The tool outputs are then fed back into the CLM context, allowing multi-step reasoning that interleaves natural language generation with external computation. This agent paradigm, pioneered by systems like ReAct (Yao et al., 2023), Toolformer (Schick et al., 2023), and commercialised in ChatGPT Plugins and Claude's tool use, extends CLM beyond pure language tasks to open-world problem-solving. In 2025–2026, multi-agent systems where multiple CLM-based agents collaborate on complex tasks — with specialised agents for research, coding, verification, and planning — are becoming the frontier of AI system design.

  **[[Prompt Engineering]] and [[In-Context Learning]]**: The CLM's ability to generate text conditioned on an arbitrary prefix enables in-context learning — the remarkable phenomenon where a model learns to perform a task from a small number of examples included in the prompt, without any gradient update. Prompt engineering — the craft of designing inputs that elicit desired outputs — has become a significant applied discipline, with techniques including few-shot prompting, chain-of-thought prompting, structured prompt templates, system messages, and role assignment. The theoretical explanation for in-context learning remains an active research area, with hypotheses ranging from Bayesian inference over implicit task representations to gradient descent in the forward pass via attention.

  ## Research & Literature

  1. Shannon, C. E. (1948). A Mathematical Theory of Communication. *Bell System Technical Journal*, 27(3), 379–423. https://doi.org/10.1002/j.1538-7305.1948.tb01338.x
  2. Bengio, Y., Ducharme, R., Vincent, P., & Jauvin, C. (2003). A Neural Probabilistic Language Model. *Journal of Machine Learning Research*, 3, 1137–1155. https://www.jmlr.org/papers/v3/bengio03a.html
  3. Mikolov, T., Karafiát, M., Burget, L., Černocký, J., & Khudanpur, S. (2010). Recurrent Neural Network Based Language Model. *INTERSPEECH 2010*, 1045–1048.
  4. Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., Kaiser, L., & Polosukhin, I. (2017). Attention Is All You Need. *Advances in Neural Information Processing Systems*, 30. https://arxiv.org/abs/1706.03762
  5. Radford, A., Narasimhan, K., Salimans, T., & Sutskever, I. (2018). Improving Language Understanding by Generative Pre-Training (GPT-1). OpenAI Blog. https://openai.com/research/language-unsupervised
  6. Radford, A., Wu, J., Child, R., Luan, D., Amodei, D., & Sutskever, I. (2019). Language Models are Unsupervised Multitask Learners (GPT-2). OpenAI Blog. https://openai.com/research/better-language-models
  7. Brown, T., et al. (2020). Language Models are Few-Shot Learners (GPT-3). *NeurIPS 2020*. https://arxiv.org/abs/2005.14165
  8. Kaplan, J., McCandlish, S., Henighan, T., Brown, T. B., Chess, B., Child, R., Gray, S., Radford, A., Wu, J., & Amodei, D. (2020). Scaling Laws for Neural Language Models. arXiv:2001.08361. https://arxiv.org/abs/2001.08361
  9. Sennrich, R., Haddow, B., & Birch, A. (2016). Neural Machine Translation of Rare Words with Subword Units (Byte Pair Encoding). *ACL 2016*. https://arxiv.org/abs/1508.07909
  10. Hoffmann, J., Borgeaud, S., Mensch, A., et al. (2022). Training Compute-Optimal Large Language Models (Chinchilla). *NeurIPS 2022*. https://arxiv.org/abs/2203.15556
  11. Bavarian, M., Jun, H., Tezak, N., et al. (2022). Efficient Training of Language Models to Fill in the Middle. arXiv:2207.14255. https://arxiv.org/abs/2207.14255
  12. Ouyang, L., Wu, J., Jiang, X., et al. (2022). Training Language Models to Follow Instructions with Human Feedback (InstructGPT). *NeurIPS 2022*. https://arxiv.org/abs/2203.02155
  13. Chung, H. W., Hou, L., Longpre, S., et al. (2022). Scaling Instruction-Finetuned Language Models (FLAN). arXiv:2210.11416. https://arxiv.org/abs/2210.11416
  14. Touvron, H., Lavril, T., Izacard, G., et al. (2023). LLaMA: Open and Efficient Foundation Language Models. arXiv:2302.13971. https://arxiv.org/abs/2302.13971
  15. Dao, T., Fu, D. Y., Ermon, S., Rudra, A., & Ré, C. (2022). FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness. *NeurIPS 2022*. https://arxiv.org/abs/2205.14135
  16. Ainslie, J., Lee-Thorp, J., de Jong, M., Zemlyanskiy, Y., Lebrón, F., & Sanghai, S. (2023). GQA: Training Generalised Multi-Query Transformer Models from Multi-Head Checkpoints. arXiv:2305.13245. https://arxiv.org/abs/2305.13245
  17. Gu, A. & Dao, T. (2023). Mamba: Linear-Time Sequence Modelling with Selective State Spaces. arXiv:2312.00752. https://arxiv.org/abs/2312.00752
  18. Gloeckle, F., Idrissi, B. Y., Rozière, B., Lopez-Paz, D., & Synnaeve, G. (2024). Better and Faster Large Language Models via Multi-Token Prediction. arXiv:2404.19737. https://arxiv.org/abs/2404.19737
  19. Touvron, H., et al. (2024). LLaMA 3: Llama Models. Meta AI Blog. https://ai.meta.com/blog/meta-llama-3/
  20. Nie, S., et al. (2025). LLaDA: Large Language Diffusion with mAsking. arXiv:2502.09992. https://arxiv.org/abs/2502.09992
  21. LongSpec Team (2025). LongSpec: Long-Context Lossless Speculative Decoding with Efficient Drafting and Verification. arXiv:2502.17421. https://arxiv.org/abs/2502.17421
  22. GuideLabsAI (2025). Block Causal Diffusion Language Models. GuideLabsAI Blog. https://www.guidelabs.ai/post/block-causal-diffusion-language-model/
  23. Dao, T., et al. (2026). FlashAttention-4: Achieving near-theoretical peak performance on Hopper and Blackwell GPUs. https://tridao.me/blog/2026/flash4/
  24. Lambert, N. (2024). Instruction Fine-Tuning. *RLHF and Post-Training Book*. https://rlhfbook.com/c/04-instruction-tuning
  25. Dai, J., et al. (2024). Future Token Prediction — Causal Language Modelling with Per-Token Adaptive Masking. arXiv:2410.18160. https://arxiv.org/abs/2410.18160
  26. Chowdhery, A., Narang, S., Devlin, J., et al. (2022). PaLM: Scaling Language Modelling with Pathways. arXiv:2204.02311. https://arxiv.org/abs/2204.02311
  27. Wei, J., et al. (2022). Emergent Abilities of Large Language Models. *Transactions on Machine Learning Research*. https://arxiv.org/abs/2206.07682
  28. Su, J., et al. (2023). RoFormer: Enhanced Transformer with Rotary Position Embedding. *Neurocomputing*, 568. https://arxiv.org/abs/2104.09864

- ### Provenance
  - sources:: https://arxiv.org/abs/1706.03762, https://arxiv.org/abs/2005.14165, https://arxiv.org/abs/2001.08361, https://arxiv.org/abs/2207.14255, https://arxiv.org/abs/2502.17421, https://arxiv.org/abs/2410.18160, https://arxiv.org/abs/2312.00752, https://rlhfbook.com/c/04-instruction-tuning, https://www.guidelabs.ai/post/block-causal-diffusion-language-model/
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm