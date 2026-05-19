- ### Definition
  - **Parameter-Efficient Fine-Tuning (PEFT)** is a family of machine learning techniques enabling adaptation of large pre-trained neural networks — particularly [[Large Language Models]] and diffusion models — to downstream tasks by updating only a small fraction (0.01–10%) of total model parameters rather than performing full fine-tuning across all weights, achieving task-specific performance comparable to or exceeding full fine-tuning whilst reducing GPU memory requirements by 4–100× and training time by 2–20×.
  - The motivation is decisive: adapting a 175B-parameter GPT-3 model through full fine-tuning requires ~2.8 TB of GPU memory at fp32 (parameters + gradients + Adam optimiser states), placing task-specific adaptation entirely beyond academic labs, startups, and individuals; PEFT democratises this by exploiting the **intrinsic dimensionality hypothesis** — empirically demonstrated by Aghajanyan et al. (2020) — that fine-tuning objectives occupy low-dimensional submanifolds (d* = 200 for BERT-base, d* ≈ 1,000 for GPT-2) within the full parameter space.
  - The dominant PEFT approach, **LoRA** (Low-Rank Adaptation, Hu et al. 2021, ICLR 2022), constrains weight updates ΔW ∈ ℝᵐˣⁿ to low-rank products ΔW = BA (B ∈ ℝᵐˣʳ, A ∈ ℝʳˣⁿ, rank r ≪ min(m,n)) reducing trainable parameters from m×n to r×(m+n); since BA merges back into pre-trained weights at inference, LoRA introduces **zero additional inference latency** — the decisive advantage over serialbottleneck Adapter Tuning.
  - **DoRA** (Weight-Decomposition Low-Rank Adaptation, Liu et al. 2024, ICML 2024, NVIDIA) further decomposes pre-trained weight W = m ⊙ V/‖V‖_c into magnitude m and direction V, applying LoRA only to the directional component, matching full fine-tuning's two-phase update dynamics (magnitude changes dominate early; direction changes dominate late) to achieve 1–3% accuracy gains over vanilla LoRA at identical parameter count.
  - **QLoRA** (Dettmers et al. 2023, NeurIPS 2023) enables fine-tuning of 65B-parameter models on a single 48GB GPU by quantising the frozen base model to 4-bit NormalFloat (NF4), double-quantising quantisation constants, and using paged optimisers — producing Guanaco-65B competitive with ChatGPT after 24 hours single-GPU training.
  - The broader PEFT ecosystem encompasses: Adapter Tuning (Houlsby et al. 2019, bottleneck MLP layers), Prefix Tuning (Li and Liang 2021, learnable virtual KV token pairs), Prompt Tuning (Lester et al. 2021, soft input-layer tokens matching full fine-tuning at 11B+ params), IA³ (Liu et al. 2022, element-wise activation scaling at ~0.01% parameters), GaLore (Zhao et al. 2024, gradient projection enabling full-parameter pre-training at LoRA memory cost), LongLoRA (Chen et al. 2023, context extension to 100K tokens), VeRA (Kopiczko et al. 2023, shared random matrices with scalar scaling vectors), and LyCORIS (LoHa/LoKr Hadamard/Kronecker products for diffusion fine-tuning).
  - Ecosystem scale by 2025: Hugging Face PEFT library exceeds **25 million monthly downloads**; Model Hub hosts 500,000+ LoRA adapter files; Civitai marketplace contains 400,000+ community LoRA weights for Stable Diffusion; all major LLM providers (OpenAI, Anthropic, Google, Meta) expose PEFT-based fine-tuning in customer APIs.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:LoRADoRAEtc
  - owl-role:: ParameterEfficientFineTuning
  - owl-inferred:: ai:TransferLearning, ai:FineTuning, ai:ModelAdaptation, ai:LowRankApproximation
  - belongs-to-domain:: [[AI-GroundedDomain]], [[MachineLearningDomain]], [[NeuralNetworkOptimisationDomain]]
  - implemented-in-layer:: [[AlgorithmLayer]], [[FrameworkLayer]], [[ApplicationLayer]]

- ### Relationships
  - is-subclass-of:: [[Machine Learning]], [[Transfer Learning]], [[Fine Tuning]], [[Model Adaptation]], [[Neural Networks]]
  - has-part:: [[LoRA]], [[DoRA]], [[QLoRA]], [[LongLoRA]], [[VeRA]], [[GaLore]], [[Adapter Tuning]], [[Prefix Tuning]], [[Prompt Tuning]], [[IA3]], [[LyCORIS]], [[ReLoRA]], [[X-LoRA]]
  - requires:: [[Pre-trained Model]], [[Low-Rank Decomposition]], [[Transformer Architecture]], [[Gradient Descent]], [[Task-Specific Dataset]]
  - enables:: [[LLM Fine-Tuning]], [[Diffusion Model Customisation]], [[On-Device Training]], [[Domain Adaptation]], [[Multi Task Learning]], [[Memory-Efficient Training]]
  - implements:: [[Singular Value Decomposition]], [[Matrix Factorisation]], [[Knowledge Distillation]], [[Quantisation]], [[Attention Mechanism]]
  - depends-on:: [[Transformers]], [[Large Language Models]], [[PyTorch]], [[CUDA]], [[Hugging Face PEFT]]
  - supports:: [[Stable Diffusion]], [[Llama]], [[Anthropic Claude]], [[ChatGPT]], [[Computer Vision]], [[Natural Language Processing]]
  - uses:: [[Rank Decomposition]], [[Gradient Checkpointing]], [[Mixed Precision Training]], [[Parameter Sharing]], [[ComfyUI]]
  - contrasts-with:: [[Full Fine Tuning]], [[Feature Extraction]], [[Prompt Engineering]], [[In-Context Learning]], [[Retrieval Augmented Generation]]
  - related-to:: [[Agent Frameworks]], [[Agents]], [[AI Adoption]], [[Cognitive AI]], [[ComfyUI Workflows]]
  - standardized-by:: [[Hugging Face]], [[NVIDIA]], [[Microsoft Research]], [[Meta AI Research]]

- ### Content

  ## Compositional Relationships (Components)
	    SubClassOf(ai:LoRADoRAEtc
	      ObjectSomeValuesFrom(ai:hasPart ai:LoRA))
	    SubClassOf(ai:LoRADoRAEtc
	      ObjectSomeValuesFrom(ai:hasPart ai:DoRA))
	    SubClassOf(ai:LoRADoRAEtc
	      ObjectSomeValuesFrom(ai:hasPart ai:QLoRA))
	    SubClassOf(ai:LoRADoRAEtc
	      ObjectSomeValuesFrom(ai:hasPart ai:LongLoRA))
	    SubClassOf(ai:LoRADoRAEtc
	      ObjectSomeValuesFrom(ai:hasPart ai:VeRA))
	    SubClassOf(ai:LoRADoRAEtc
	      ObjectSomeValuesFrom(ai:hasPart ai:GaLore))
	    SubClassOf(ai:LoRADoRAEtc
	      ObjectSomeValuesFrom(ai:hasPart ai:AdapterTuning))
	    SubClassOf(ai:LoRADoRAEtc
	      ObjectSomeValuesFrom(ai:hasPart ai:PrefixTuning))
	    SubClassOf(ai:LoRADoRAEtc
	      ObjectSomeValuesFrom(ai:hasPart ai:PromptTuning))
	    SubClassOf(ai:LoRADoRAEtc
	      ObjectSomeValuesFrom(ai:hasPart ai:IA3))

	    ## Dependency Relationships
	    SubClassOf(ai:LoRADoRAEtc
	      ObjectSomeValuesFrom(ai:requires ai:PretrainedModel))
	    SubClassOf(ai:LoRADoRAEtc
	      ObjectSomeValuesFrom(ai:requires ai:LowRankDecomposition))
	    SubClassOf(ai:LoRADoRAEtc
	      ObjectSomeValuesFrom(ai:requires ai:TransformerArchitecture))
	    SubClassOf(ai:LoRADoRAEtc
	      ObjectSomeValuesFrom(ai:requires ai:GradientDescent))
	    SubClassOf(ai:LoRADoRAEtc
	      ObjectSomeValuesFrom(ai:requires ai:TaskSpecificDataset))
	    SubClassOf(ai:LoRADoRAEtc
	      ObjectSomeValuesFrom(ai:dependsOn ai:SingularValueDecomposition))
	    SubClassOf(ai:LoRADoRAEtc
	      ObjectSomeValuesFrom(ai:dependsOn ai:MatrixFactorisation))
	    SubClassOf(ai:LoRADoRAEtc
	      ObjectSomeValuesFrom(ai:dependsOn ai:AttentionMechanism))
	    SubClassOf(ai:LoRADoRAEtc
	      ObjectSomeValuesFrom(ai:dependsOn ai:MixedPrecisionTraining))
	    SubClassOf(ai:LoRADoRAEtc
	      ObjectSomeValuesFrom(ai:dependsOn ai:GradientCheckpointing))

	    ## Capability Relationships
	    SubClassOf(ai:LoRADoRAEtc
	      ObjectSomeValuesFrom(ai:enables ai:LLMFineTuning))
	    SubClassOf(ai:LoRADoRAEtc
	      ObjectSomeValuesFrom(ai:enables ai:DiffusionModelCustomisation))
	    SubClassOf(ai:LoRADoRAEtc
	      ObjectSomeValuesFrom(ai:enables ai:OnDeviceTraining))
	    SubClassOf(ai:LoRADoRAEtc
	      ObjectSomeValuesFrom(ai:enables ai:DomainAdaptation))
	    SubClassOf(ai:LoRADoRAEtc
	      ObjectSomeValuesFrom(ai:enables ai:MultiTaskLearning))
	    SubClassOf(ai:LoRADoRAEtc
	      ObjectSomeValuesFrom(ai:enables ai:MemoryEfficientTraining))
	    SubClassOf(ai:LoRADoRAEtc
	      ObjectSomeValuesFrom(ai:supports ai:StableDiffusionCustomisation))
	    SubClassOf(ai:LoRADoRAEtc
	      ObjectSomeValuesFrom(ai:supports ai:PersonalisedLanguageModel))
	    SubClassOf(ai:LoRADoRAEtc
	      ObjectSomeValuesFrom(ai:supports ai:EdgeDeployment))
	    SubClassOf(ai:LoRADoRAEtc
	      ObjectSomeValuesFrom(ai:supports ai:CommunityModelSharing))

	    ## Implementation Relationships
	    SubClassOf(ai:LoRADoRAEtc
	      ObjectSomeValuesFrom(ai:implements ai:RankDecompositionUpdate))
	    SubClassOf(ai:LoRADoRAEtc
	      ObjectSomeValuesFrom(ai:implements ai:WeightMagnitudeDirectionDecomposition))
	    SubClassOf(ai:LoRADoRAEtc
	      ObjectSomeValuesFrom(ai:implements ai:NF4Quantisation))
	    SubClassOf(ai:LoRADoRAEtc
	      ObjectSomeValuesFrom(ai:implements ai:GradientProjection))
	    SubClassOf(ai:LoRADoRAEtc
	      ObjectSomeValuesFrom(ai:implements ai:AdapterBottleneck))
	    SubClassOf(ai:LoRADoRAEtc
	      ObjectSomeValuesFrom(ai:implements ai:SoftPromptPrepending))
	    SubClassOf(ai:LoRADoRAEtc
	      ObjectSomeValuesFrom(ai:implements ai:ActivationScaling))
	    SubClassOf(ai:LoRADoRAEtc
	      ObjectSomeValuesFrom(ai:uses ai:HuggingFacePEFT))
	    SubClassOf(ai:LoRADoRAEtc
	      ObjectSomeValuesFrom(ai:uses ai:KohyaSSTrainer))
	    SubClassOf(ai:LoRADoRAEtc
	      ObjectSomeValuesFrom(ai:uses ai:BitsAndBytes))

	    ## Reduction Relationships
	    SubClassOf(ai:LoRADoRAEtc
	      ObjectSomeValuesFrom(ai:reduces ai:TrainableParameterCount))
	    SubClassOf(ai:LoRADoRAEtc
	      ObjectSomeValuesFrom(ai:reduces ai:GPUMemoryRequirement))
	    SubClassOf(ai:LoRADoRAEtc
	      ObjectSomeValuesFrom(ai:reduces ai:TrainingComputeCost))
	    SubClassOf(ai:LoRADoRAEtc
	      ObjectSomeValuesFrom(ai:reduces ai:StorageOverhead))
	    SubClassOf(ai:LoRADoRAEtc
	      ObjectSomeValuesFrom(ai:reduces ai:CatastrophicForgetting))
	    SubClassOf(ai:LoRADoRAEtc
	      ObjectSomeValuesFrom(ai:reduces ai:InferenceLatencyOverhead))

	    ## Annotations
	    AnnotationAssertion(rdfs:label ai:LoRADoRAEtc "LoRA DoRA etc (Parameter-Efficient Fine-Tuning)"@en)
	    AnnotationAssertion(rdfs:comment ai:LoRADoRAEtc "PEFT family adapting large pre-trained models by updating 0.01-10% of parameters; LoRA (rank decomposition), DoRA (magnitude-direction decomposition), QLoRA (4-bit base model), LongLoRA, VeRA, GaLore, Adapter Tuning, Prefix Tuning, Prompt Tuning, IA3, LyCORIS; unified in Hugging Face PEFT library 25M+ monthly downloads."@en)
	    AnnotationAssertion(dcterms:identifier ai:LoRADoRAEtc "AI-1042"^^xsd:string)
	    DataPropertyAssertion(ai:hasIdentifier ai:LoRADoRAEtc "AI-1042"^^xsd:string)
	    DataPropertyAssertion(ai:authorityScore ai:LoRADoRAEtc "0.87"^^xsd:decimal)
	    DataPropertyAssertion(ai:parameterReductionFactor ai:LoRADoRAEtc "100"^^xsd:integer)
	    DataPropertyAssertion(ai:memoryReductionFactor ai:LoRADoRAEtc "4"^^xsd:integer)
	    ```

  - ## About LoRA, DoRA, and the PEFT Ecosystem
  - **Parameter-Efficient Fine-Tuning (PEFT)** emerged from a central tension in modern deep learning: large pre-trained models contain vast general knowledge encoded across billions of weights, yet adapting them to specific downstream tasks through full fine-tuning requires gradient computation and optimiser state storage for every parameter — at 65B parameters with Adam this demands ~1TB of GPU memory, placing task-specific adaptation entirely beyond academic labs, startups, and individual practitioners working with consumer hardware.
  - PEFT addresses this by exploiting the **intrinsic dimensionality** of fine-tuning objectives:
    - Li et al. (2018) empirically demonstrated that objective landscapes can be optimised by random projection into d* dimensions far below total parameter count
    - Aghajanyan et al. (2020) applied this to fine-tuning: d* = 200 suffices for BERT-base downstream tasks; d* ≈ 1,000 for GPT-2 — meaning effective adaptation requires moving in a 200–1,000 dimensional submanifold of a 125M–1.5B parameter space
    - This justifies constraining weight updates to low-dimensional subspaces: rather than traversing the full O(mn) parameter manifold, fine-tuning can stay in an O(r(m+n)) subspace with r ≪ min(m,n)
  - The **ecosystem scale** by mid-2025 confirms PEFT's dominance:
    - Hugging Face PEFT library: 25M+ monthly downloads; 500,000+ LoRA adapter weights on Model Hub
    - Civitai: 400,000+ community LoRA/LyCORIS weights for Stable Diffusion — world's largest distributed fine-tuned model repository
    - All major commercial LLM APIs (OpenAI, Anthropic, Google, Mistral, Cohere) offer PEFT-based custom fine-tuning
    - Every major open-weight model release (Llama-3, Mistral, Gemma, Phi-3, Qwen, DeepSeek) ships LoRA-compatible architecture and community fine-tuning tutorials

  - ## Components and Architecture

  - ### LoRA: Low-Rank Adaptation
  - **LoRA** (Hu et al. 2021/2022, Microsoft Research, "LoRA: Low-Rank Adaptation of Large Language Models", ICLR 2022, arXiv:2106.09685) established the canonical PEFT approach for transformers.

	  #### Core Formulation

	  For weight matrix W₀ ∈ ℝᵐˣⁿ (query/key/value/output projections, FFN matrices):

	  - Freeze W₀; add parallel low-rank bypass: **h = W₀x + ΔWx = W₀x + BAx**
	  - B ∈ ℝᵐˣʳ initialised Gaussian; A ∈ ℝʳˣⁿ initialised zero (so ΔW = 0 at training start)
	  - Scale: ΔW weighted by α/r (α scalar hyperparameter, typically equal to r)
	  - Inference merge: **W = W₀ + αBA/r** — zero additional inference latency

	  #### Parameter Efficiency

	  - Full fine-tuning: m×n parameters per layer (e.g. 4096×4096 = 16.8M per LLaMA attention weight)
	  - LoRA r=8: r×(m+n) = 8×8192 = 65,536 parameters — 256× reduction
	  - LLaMA-7B example (r=8, all attention QKVo): ~8.4M trainable / 7B total = 0.12%; fits single 24GB RTX 4090

	  #### Rank Selection and Targeting

	  - r=1–4: single-task style/format adaptation; r=8–16: most NLP tasks; r=32–64: complex generation; r=128+ approaches full-rank
	  - Layer targeting: applying to q_proj + v_proj only (Hu et al. original); all attention + FFN gate/up/down (community best practice for LLMs) gives 5–12% better performance
	  - AdaLoRA (Zhang et al. 2023): SVD-parameterised ΔW = PΛQᵀ with learned singular value magnitudes; prunes low-importance singular triplets progressively; 1.2–2.5% gain over fixed-rank LoRA at same parameter budget

	  #### Empirical Results (Hu et al. 2022)

	  - GPT-3 LoRA fine-tuning on SuperGLUE: matched or exceeded full fine-tuning on MNLI (90.6%), SST-2, MRPC, CoLA, QNLI
	  - 3× less GPU memory; 25% faster training; adapter file ~8MB vs 350GB full model
	  - RoBERTa/DeBERTa/GPT-2 experiments across 5 NLP tasks all demonstrated parity or improvement

  - ### LoRA Variants and Extensions
  - **rsLoRA** (Kalajdzic et al. 2023): standard α/r scaling is suboptimal as r increases — gradient variance grows proportional to r, destabilising training at high ranks. **Proposal**: α/√r scaling maintains consistent signal magnitude. Enables effective use of ranks r=64–256 previously unstable; important when close approximation of full fine-tuning gradient is needed.
  - **LoRA+** (Hayou et al. 2024, ICML 2024): A and B play asymmetric roles — A projects input features into low-rank subspace (acts like an encoder); B projects back out (acts like decoder). Maximal Update Parameterisation (μP) analysis motivates **different learning rates**: η_B = λ × η_A, optimal λ = 2–16. Achieves 1.3–2× training efficiency improvement on LLaMA-7B and Mistral-7B benchmarks at no added parameter cost.
  - **AdaLoRA** (Zhang et al. 2023, Microsoft Research, ICLR 2023): Adaptive rank allocation. Parameterises ΔW = PΛQᵀ (SVD form); importance score s_i per singular triplet based on magnitude and sensitivity; budget scheduler prunes low-importance components. Outperforms fixed-rank LoRA by 1.2–2.5% on GLUE/NLG at identical parameter budgets; critical insight: early attention layers deserve higher rank than FFN in LLaMA.
  - **LoRA-FA** (Zhang et al. 2023): Frozen-A LoRA — freezes matrix A after random initialisation; only trains B. Reduces activation memory 1.4× (no A gradients stored); <0.5% performance degradation; viable for highly memory-constrained deployments including mobile fine-tuning and edge device adaptation.
  - **ReLoRA** (Lialin et al. 2023, UMass Lowell, NeurIPS 2023 Workshop): Enables high-rank cumulative training. Periodically merges trained LoRA (W ← W + BA), then reinitialises fresh adapters. Over T cycles accumulates effective rank-r×T update. ReLoRA pre-trains LLaMA-350M matching full-rank AdamW at 50% memory cost — extending PEFT to pre-training (not only fine-tuning).
  - **VeRA** (Kopiczko et al. 2023, ICLR 2024): Shares frozen random matrices globally — single A ∈ ℝʳˣⁿ and B ∈ ℝᵐˣʳ across all layers; only small per-layer scaling vectors d ∈ ℝʳ and b ∈ ℝᵐ trained. Reduces trainable parameters 10× vs LoRA (LLaMA-7B: 1.4M VeRA vs 14M LoRA at r=8). VeRA matches LoRA on commonsense reasoning benchmarks at identical parameter count, demonstrating shared random projections preserve task-relevant subspace structure.
  - **DyLoRA** (Valipour et al. 2022): Trains all ranks r ∈ {1,...,r_max} simultaneously by uniform rank sampling per step; post-hoc rank selection without retraining. Enables deployment of variable-rank adapters for different inference resource budgets from a single training run.
  - **X-LoRA** (Buehler 2024): Mixture-of-Experts LoRA. K independently fine-tuned LoRA adapters; learned gating network produces per-position convex combination weights; enables specialised expertise combination without full model duplication.
  - **Flora** (Han et al. 2024): Replaces learned A/B projections with Johnson-Lindenstrauss random projections — theory guarantees near-optimal distance preservation; further reduces parameters; combined with quantisation for extreme-memory edge deployment.

  - ### DoRA: Weight-Decomposition Low-Rank Adaptation
  - **DoRA** (Liu et al. 2024, "DoRA: Weight-Decomposition Low-Rank Adaptation", ICML 2024, NVIDIA Research, arXiv:2402.09353) — the key advance over vanilla LoRA.

	  #### Motivation: Fine-Tuning Dynamics Analysis

	  Liu et al. analysed weight change patterns during full fine-tuning across LLaMA/LLaVA models:
	  - **Phase 1 (early training)**: primarily **magnitude** changes (column norms ‖w‖₂ shift substantially); directional changes small
	  - **Phase 2 (later training)**: primarily **direction** changes (column orientations rotate); magnitude changes diminish
	  - Vanilla LoRA couples magnitude and direction via single product BA — its update trajectory diverges from this two-phase pattern, limiting performance
	  - DoRA separates these by explicit decomposition

	  #### Mathematical Formulation

	  Decompose weight: **W = m ⊙ V/‖V‖_c**
	  - m ∈ ℝ¹ˣᵏ: trainable magnitude vector (one scalar per output dimension/column)
	  - V ∈ ℝᵐˣⁿ: directional matrix normalised column-wise
	  - ⊙: element-wise multiplication broadcast over columns
	  - ‖·‖_c: column-wise L2 normalisation

	  Update: **ΔW = m ⊙ (V + ΔV)/‖V + ΔV‖_c − m₀ ⊙ V/‖V‖_c** where ΔV = BA (standard LoRA factor pair)

	  Magnitude m updates as unconstrained scalar; direction updates follow low-rank LoRA constraint — decoupled optimisation.

	  #### Empirical Results

	  - LLaMA-7B CommonsenseQA: 79.3% DoRA vs 77.6% LoRA (same parameter budget)
	  - LLaMA-7B MATH benchmark: +2.1% vs LoRA
	  - LLaVA-1.5 vision-language benchmarks (VQAv2, GQA, POPE, MMBench): DoRA consistently +1–3%
	  - Integrated into Hugging Face PEFT v0.9.0 (April 2024); recommended for complex generation tasks

  - ### QLoRA: Quantised Low-Rank Adaptation
  - **QLoRA** (Dettmers et al. 2023, University of Washington / HuggingFace, "QLoRA: Efficient Finetuning of Quantized LLMs", NeurIPS 2023, arXiv:2305.14314) — breakthrough enabling 65B model fine-tuning on single consumer GPU.

	  #### Three Technical Innovations

	  **1. NormalFloat 4-bit (NF4) Quantisation**
	  - Pre-trained weights follow approximately normal distribution N(0, σ²)
	  - Dettmers derived information-theoretically optimal 4-bit type: quantise to 16 equally-spaced quantiles of N(0,1)
	  - These codes align with actual weight distribution probability mass — vs INT4's uniform codes that waste capacity on improbable magnitudes
	  - Each 64-weight block independently normalised to [-1,1] absorbing scale variation before quantisation

	  **2. Double Quantisation**
	  - Quantisation constants (one 32-bit float per 64-weight block) are themselves quantised: 8-bit with second set of constants
	  - Saves 0.37 bits per parameter — on 65B model recovers ~3GB of GPU memory with negligible quality impact

	  **3. Paged Optimisers**
	  - NVIDIA unified memory used to transparently page Adam optimiser states (first/second moments) between GPU and CPU RAM
	  - Prevents OOM spikes during gradient checkpointing of long sequences without permanently allocating all states on GPU
	  - Compatible with PyTorch memory management; no code changes required beyond flag

	  #### Guanaco Results

	  - QLoRA fine-tunes LLaMA-65B on single 48GB A40 GPU (previously required 8×A100)
	  - Guanaco-65B: 99.3% of ChatGPT-3.5 performance on Vicuna benchmark (human preference eval)
	  - Training time: 24 hours single GPU vs weeks on multi-GPU full fine-tuning
	  - bitsandbytes library (Dettmers, MIT): transparent `load_in_4bit=True` flag in Hugging Face `from_pretrained()`

  - ### GaLore: Gradient Low-Rank Projection
  - **GaLore** (Zhao et al. 2024, "GaLore: Memory-Efficient LLM Training by Gradient Low-Rank Projection", ICML 2024, arXiv:2403.03507) — extends memory-efficient training to full-parameter updates and pre-training.

	  #### Core Algorithm

	  Unlike LoRA which restricts weights to a fixed low-rank subspace, GaLore allows full-parameter updates but projects gradients:

	  1. For gradient G ∈ ℝᵐˣⁿ, compute left singular vectors P ∈ ℝᵐˣʳ via SVD of G every T=200 steps
	  2. Accumulate only projected gradient PᵀG ∈ ℝʳˣⁿ in Adam's first/second moment states
	  3. Recover full-rank update: G_full = P(PᵀG) for weight step W ← W − η × G_full
	  4. Result: Adam moment memory reduced from O(mn) to O(rn) per layer — identical to LoRA's memory footprint

	  #### Key Advantages Over LoRA

	  - **Full weight updates**: every weight updated at each step (vs LoRA's fixed-subspace constraint), enabling better approximation of full fine-tuning
	  - **Pre-training applicable**: GaLore pre-trains LLaMA-7B on C4 matching full AdamW perplexity at 65.5% less memory
	  - **LLaMA-3B on single 24GB GPU**: regime previously impossible for pre-training — opens academic pre-training from scratch
	  - **Periodic SVD cost**: recomputing P every 200 steps adds ~3% training overhead (amortised) — acceptable for 65% memory saving

  - ### LongLoRA: Context Window Extension
  - **LongLoRA** (Chen et al. 2023, MIT, "LongLoRA: Efficient Fine-tuning of Long-Context Large Language Models", ICLR 2024, arXiv:2309.12307) — enables 100K-token context from 4K-pretrained LLMs via PEFT.

	  #### Problem

	  - Pre-training context: 2K–4K tokens for Llama-2; extending to 100K requires O(n²) = 10¹⁰ attention ops per layer — computationally infeasible for fine-tuning on standard hardware
	  - Position interpolation (Chen et al. 2023) extends RoPE encodings but requires attention pattern re-learning

	  #### Shifted Sparse Attention (S²-Attn)

	  During fine-tuning training only (not inference):
	  - Partition sequence into G groups of w = n/G tokens each; apply local attention within groups
	  - Cyclically shift groups by w/2 tokens to enable cross-boundary information flow
	  - Complexity: O(n × w) vs O(n²) — 100K-token context 100× faster than full attention
	  - At inference: full standard attention used (no accuracy-efficiency trade-off at deployment)

	  #### Results

	  - Fine-tunes LLaMA-2-7B from 4K to 100K context in 18 hours on 8×A100 GPUs (vs weeks for full fine-tuning of context extension)
	  - Achieves perplexity on long-document benchmarks within 5% of full attention fine-tuning whilst using 90% less memory during training
	  - Applications enabled: book-length QA (NarrativeQA, QuALITY benchmarks), repository-level code generation (RepoEval), long-document summarisation (arXiv/PubMed abstracts to full-paper scale)
	  - Combined with LoRA adapters on all weight matrices; total trainable parameters <1% of base model; merged adapter deployable without any inference-time attention modification
	  - **Subsequent work**: LonLoRA-2 (Chen et al. 2024) extends to 1M-token context on LLaMA-3 70B; YaRN (Peng et al. 2023) combines NTK-aware RoPE scaling with LoRA fine-tuning for more efficient context extension; LLaMA-3.1 (Meta 2024) includes 128K context natively, partially motivated by LongLoRA demonstrating feasibility

  - ### Adapter Tuning, Prefix Tuning, Prompt Tuning, and IA³
  - **Adapter Tuning** (Houlsby et al. 2019, Google Brain, ICML 2019): pre-LoRA standard — inserts bottleneck MLP layers between transformer sub-layers.
    - Architecture: down-projection W_down ∈ ℝᵈˣᵏ (d model dim, k bottleneck 8–256) → non-linearity → up-projection W_up ∈ ℝᵏˣᵈ with residual: h ← h + W_up(ReLU(W_down(h)))
    - Only ~0.5–8% parameters trained; near-full-fine-tuning performance on GLUE benchmarks
    - Main limitation: serial bottleneck adds ~1–2ms inference latency per layer — decisive disadvantage vs LoRA
    - AdapterHub (Pfeiffer et al. 2020) provides centralised 400+ pre-trained adapter repository for 50+ languages/tasks
    - AdapterFusion (Pfeiffer et al. 2021): attention over K task-specific adapter outputs enables non-destructive multi-task composition

  - **Prefix Tuning** (Li and Liang 2021, Stanford, ACL 2021): prepends learnable KV token pairs to every attention layer.
    - K′ = [P_K; K], V′ = [P_V; V] where P_K, P_V ∈ ℝˡˣᵈ (l=10–100 virtual tokens); no change to weight matrices
    - Attention over extended sequence allows per-layer task steering independently of input
    - Matches fine-tuning on XSUM summarisation, E2E/WebNLG table-to-text with 1,000× fewer params than GPT-2 full fine-tuning

  - **Prompt Tuning** (Lester et al. 2021, Google, EMNLP 2021): soft prompt tokens at input embedding layer only.
    - Simplest PEFT: x′ = [P; x] where P ∈ ℝˡˣᵈ; only input-layer prefix trained (no KV modifications)
    - Critical scaling finding: prompt tuning matches full fine-tuning at T5-XXL (11B parameters) — implying models large enough need only input steering for task adaptation
    - Below 11B: performance gap exists; above 11B: eliminated — motivates PEFT for largest models

  - **P-Tuning v2** (Liu et al. 2022, Tsinghua, ACL 2022): deep prompt — applies prompts to all transformer layers not only input.
    - Enables matching fine-tuning on NER and SRL at BERT-large (340M) scale where shallow prompt tuning fails
    - Bridges gap between prompt tuning (input-only) and prefix tuning (all KV layers) with unified framework

  - **IA³** (Liu et al. 2022, "Few-Shot Parameter-Efficient Fine-Tuning is Better and Cheaper than In-Context Learning", NeurIPS 2022): element-wise activation rescaling.
    - Rescales: K′ = l_K ⊙ K; V′ = l_V ⊙ V; h′_FFN = l_FF ⊙ γ(W₁h)
    - Vectors l_K, l_V ∈ ℝᵈ; l_FF ∈ ℝᵈ_FFN — three d-dimensional vectors per layer total
    - ~0.01% trainable parameters — 10× fewer than LoRA at r=4
    - Competitive with LoRA on T0 few-shot benchmarks; ideal for many-task serving (O(d) storage per task vs O(rd) LoRA)

  - ### LyCORIS and Diffusion Model PEFT
  - **LyCORIS** (LoRA beYond Conventional methods for Stable Diffusion, Ko et al. 2023, github.com/KohakuBlueleaf/LyCORIS) extends PEFT to diffusion fine-tuning with variants optimised for 2D convolutional and cross-attention layers.

	  #### LoHa (LoRA with Hadamard Product)
	  - Parameterises ΔW = (W₁ ⊗ W₂) ⊙ (W₃ ⊗ W₄) using four factor matrices
	  - Combines Hadamard and Kronecker products enabling rank-equivalent updates with fewer parameters
	  - Particularly effective for 2D convolutional kernels where spatial structure aids factorisation

	  #### LoKr (LoRA with Kronecker Product)
	  - ΔW = A ⊗ B where A ∈ ℝᵃˣᵃ, B ∈ ℝᵇˣᵇ, ab = mn
	  - Expresses full-matrix updates with (a²+b²) parameters vs mn for direct ΔW — dramatically more efficient for structured matrices
	  - Popular for SDXL cross-attention layers where weight matrices exhibit block structure

	  #### OFT and BOFT
	  - OFT (Orthogonal Fine-Tuning, Liu et al. 2023): orthogonal transformation matrices Q applied to weight rows; W′ = QW; Q trained constrained to rotation group SO(d)
	  - Preserves hyperspherical energy of pre-trained features whilst enabling directional adjustment
	  - BOFT: block-diagonal OFT applying independent orthogonal transforms per block — more expressive than full-matrix OFT at comparable parameter count

	  #### Diffusion Fine-Tuning Ecosystem

	  - **kohya_ss** scripts (github.com/kohya-tech/kohya_ss): standard community tool supporting all LyCORIS variants; integrates with Automatic1111 WebUI and [[ComfyUI]] for inference
	  - **DreamBooth-LoRA**: 20–50 training images; 10–30 minutes on A100; 50MB adapter; high-fidelity subject representation generalising across styles and prompts
	  - **Civitai** marketplace: 400,000+ LoRA/LyCORIS weights covering character likenesses, artistic styles, clothing, environments, objects — world's largest distributed fine-tuned model repository
	  - Style LoRAs: transfer ArtStation styles, anime aesthetics, photographic techniques to SDXL generation
	  - [[ComfyUI Workflows]] provides visual LoRA stack composition — multiple adapters applied simultaneously with per-adapter weight sliders

  - ### Hugging Face PEFT Library
  - The **Hugging Face PEFT library** (github.com/huggingface/peft, MIT, released February 2022) is the primary unifying interface for PEFT in Python and the de facto standard for production LLM fine-tuning globally.
  - **Methods implemented** (by May 2025): LoRA, DoRA, QLoRA (via bitsandbytes), AdaLoRA, IA³, Adapter Tuning, Prefix Tuning, Prompt Tuning, P-Tuning v2, LoftQ, OFT, BOFT, LoHa, LoKr, VB-LoRA, VeRA — comprehensive coverage of all major PEFT variants.
  - **API design**: `get_peft_model(model, LoraConfig(r=8, lora_alpha=16, target_modules=["q_proj","v_proj"]))` returns adapter-augmented model with frozen base and trainable LoRA parameters in one function call; compatible with any Hugging Face `PreTrainedModel`.
  - **Model Hub integration**: adapter weights (~10–50MB .safetensors) stored separately from base model weights (7–70GB); users download base once, apply multiple task adapters; monthly adapter downloads exceeded 200 million by late 2024.
  - **Training ecosystem**: `SFTTrainer` from trl library combines PEFT with instruction formatting; `DPOTrainer` and `PPOTrainer` support PEFT for preference alignment; 3-line fine-tuning workflows for open-weight models.
  - **Scale**: 25M+ monthly PEFT library downloads by late 2024 — most widely used model fine-tuning library globally, ahead of DeepSpeed (~7M/month) and Megatron-LM (~500K/month) for fine-tuning.

  - ## Mathematical Foundations and Practical Training

  - ### Core Mathematical Properties of LoRA

	  #### Subspace Geometry

	  LoRA's update ΔW = BA lives in a rank-r subspace of ℝᵐˣⁿ. The key mathematical question is whether this subspace contains the gradient directions relevant for task adaptation. Empirical evidence from Hu et al. (2022):
	  - SVD analysis of full fine-tuning ΔW matrices compared with LoRA-learned ΔW matrices across GPT-3 layers
	  - Cosine similarity between LoRA subspace and top-r singular vectors of full fine-tuning ΔW: 0.3–0.7 for r=4–64
	  - Higher similarity in attention layers (0.5–0.7) than FFN layers (0.2–0.4) — motivating attention-focused LoRA targeting
	  - Overlap increases with rank r, confirming LoRA discovers near-optimal subspace directions even with moderate rank

	  #### Initialisation Matters

	  - A initialised Gaussian (random projection into low-rank space); B initialised zero (so ΔW = BA = 0 at start)
	  - Alternative: LoftQ (Liu et al. 2023) initialises A/B via SVD of difference between original and quantised weights — reduces performance gap from quantisation; important for QLoRA-style workflows where base model precision matters
	  - Alternative: PiSSA (Meng et al. 2024) initialises LoRA matrices from top singular components of W₀ itself (not zero B) — faster convergence but requires SVD of original weights upfront

	  #### Rank and Parameterisation Budgets

	  Typical parameter budgets across model scales:
	  - 125M model (BERT-base): r=8 on all attention layers → ~0.3M trainable / 125M total = 0.24%
	  - 1.3B model: r=8 → ~1.5M trainable = 0.12%; r=16 → ~3M = 0.23%
	  - 7B model: r=8 attention-only → ~4.7M = 0.067%; r=8 all-linear → ~8.4M = 0.12%
	  - 70B model: r=8 all-linear → ~84M = 0.12%; equivalent to training BERT-base from scratch in memory footprint
	  - 405B model (Llama-3.1): r=8 → ~485M trainable = 0.12%; still fits on 2×A100 80GB with QLoRA

  - ### Training Recipe Best Practices (2025 Community Consensus)

	  #### Hyperparameter Guidance

	  From aggregated community experiments on Hugging Face, Civitai forums, and LLM fine-tuning leaderboard ablations:
	  - **Rank r**: start with r=8 for most tasks; increase to r=16–32 if validation loss plateau; decrease to r=4 for style/format-only adaptation
	  - **lora_alpha**: set equal to r (α=r gives unit scaling); some practitioners use α=2r for stronger adaptation signal
	  - **Target modules**: "q_proj,v_proj" (Hu et al. original); "q_proj,k_proj,v_proj,o_proj" (attention-complete); add "gate_proj,up_proj,down_proj" for full-layer adaptation
	  - **Dropout**: lora_dropout=0.05–0.1 for small datasets (<10K examples); 0 for large datasets (>100K)
	  - **Learning rate**: 1e-4 to 3e-4 for most LLM fine-tuning; lower (1e-5) for sensitive alignment tasks; linear warmup 3–5% of total steps

	  #### Dataset Size Guidelines

	  - Style/format adaptation: 500–2,000 examples; r=4 sufficient; 30–60 minutes on single A100
	  - Domain knowledge injection: 5,000–50,000 examples; r=8–16; 2–8 hours single A100
	  - Instruction following: 10,000–100,000 examples; r=8; 4–24 hours single A100
	  - Preference alignment (DPO): 5,000–20,000 preference pairs; r=8; 2–6 hours single A100
	  - Full capability uplift: 100,000–1,000,000 examples; r=16–32; multi-GPU required

	  #### Evaluation and Overfitting Signals

	  - Monitor train/validation loss divergence: overfitting onset typically visible at 1.5–3 epochs for small datasets
	  - Qualitative evaluation via held-out prompt set: critical for generative tasks where loss plateau ≠ quality plateau
	  - Perplexity on base model holdout: ensure LoRA fine-tuning doesn't significantly increase perplexity on non-task-domain text (catastrophic forgetting of general knowledge)
	  - Merge and evaluate: always evaluate the merged model (W + αBA/r) not the adapter alone to confirm merge correctness

  - ### PEFT Comparison Matrix

	  Systematic comparison across key dimensions (2025 consensus):

	  | Method | Parameters | Inference Overhead | Memory vs Full FT | Best For |
	  |--------|------------|-------------------|-------------------|----------|
	  | LoRA r=8 | ~0.12% | None (merge) | 8–15× less | NLP, code, chat |
	  | DoRA | ~0.14% | None (merge) | 8–15× less | Complex generation, vision-language |
	  | QLoRA | ~0.12% + 4-bit base | None (merge) | 25–60× less | Single-GPU large model |
	  | AdaLoRA | ~0.12% (adaptive) | None (merge) | 8–15× less | Mixed-difficulty tasks |
	  | IA³ | ~0.01% | None (merge) | 50–100× less | Few-shot, many tasks |
	  | Adapter | ~2–8% | +1–2ms/layer | 5–10× less | Multi-task NLP |
	  | Prefix Tuning | ~0.1% | Sequence extend | 3–5× less | Generation, summarisation |
	  | Prompt Tuning | ~0.01% | Sequence extend | 3–5× less | Large models (>10B) only |
	  | GaLore | 100% (full params) | None | 4–8× less | Pre-training, complex FT |
	  | VeRA | ~0.01% | None (merge) | 50–100× less | Parameter budget constrained |

  - ## Use Cases and Major Families
  - **Domain-specific LLM adaptation**: primary commercial use case across legal NLP (contract analysis, document extraction, jurisdiction-specific compliance), medical NLP (clinical notes summarisation, ICD-10/11 coding, radiology report generation), financial NLP (earnings call analysis, XBRL extraction, regulatory document parsing), code generation (language-specific idiom adaptation, repository API completion).
    - Medical NLP example: LoRA fine-tuning LLaMA-7B for medical summarisation — 100K PubMed abstracts, ~4 hours single A100, ~8MB adapter; performance competitive with GPT-3.5-turbo on clinical NLP benchmarks (ROUGE-1: 0.42 vs 0.44 GPT-3.5) whilst maintaining data residency on NHS/HIPAA-controlled infrastructure — no patient data egress
    - Legal NLP example: Contract analysis fine-tuning on 50K annotated contracts (CUAD dataset + proprietary augmentation); LoRA r=16 on Llama-3-8B; F1=0.87 on clause extraction vs 0.83 for in-context-learning GPT-4 at 10× cost; adapter deployable on-premise to meet UK Solicitor Regulation Authority data handling guidance
    - Code generation example: Repository-specific LoRA fine-tuning on internal codebase — 20K files, 8 hours single A100, r=32; reduces suggestion irrelevance (wrong API versions, incorrect function signatures) by 60% vs vanilla model; model size unchanged for IDE plugin deployment
    - Financial NLP example: QLoRA fine-tuning Llama-3-70B on XBRL-tagged SEC/FCA filings; runs on single 48GB A100; extracts financial figures with 94% accuracy vs 87% GPT-4 on Bloomberg regulatory corpus benchmark
    - Enterprise cost comparison: GPT-4 fine-tuning API pricing ~$25/M tokens input (fine-tuning), typically $2–8M for sufficient domain data; LoRA fine-tuning open-weight model on-premise $500–$5,000 GPU cost + $0 API fees perpetually — 3–4 orders of magnitude TCO difference over 3 years

  - **Instruction following and chat alignment**: LoRA-based instruction tuning triggered 2023 open-source LLM renaissance.
    - Alpaca (Stanford, 52K GPT-3.5 instructions, LLaMA-7B LoRA, training cost under $100): demonstrated competitive instruction following from cheap supervised fine-tuning
    - Vicuna (ShareGPT conversations, LLaMA fine-tuning): 90% ChatGPT performance per human preference evaluation — confirmed LoRA-tuned open models rival proprietary APIs
    - OpenHermes, WizardLM, Nous-Hermes, countless community models: all produced via LoRA-based instruction tuning on modest datasets

  - **RLHF and preference alignment**: LoRA-based DPO and PPO are standard by 2025.
    - DPO-LoRA (Direct Preference Optimisation with LoRA adapters): removes need for separate reward model; trains policy directly from preference pairs; trl library DPOTrainer supports PEFT models transparently
    - Safety alignment LoRAs: community-produced safety-focused adapters enabling open-weight model behavioural guardrails without full RLHF infrastructure

  - **Image diffusion customisation**: democratised representation of specific subjects, styles, concepts.
    - DreamBooth-LoRA: 20–50 training images, 10–30 minutes A100, 50MB adapter, subject recognition across arbitrary prompts and styles
    - Style LoRAs (ArtStation aesthetic, anime style, photographic lighting, architectural rendering): consistently transferable across SDXL model releases
    - Composition via [[ComfyUI]] LoRA nodes: multiple adapters with independent weight sliders; merge LoRAs pre-inference

  - **Multi-adapter composition and merging**: post-hoc combination of independently trained adapters without retraining.
    - Scalar addition: W = W_base + α₁ΔW₁ + α₂ΔW₂ (simple weighting — often works surprisingly well for capability combination within related domains; less effective across very different domains)
    - TIES merging (Yadav et al. 2023): (1) trim low-magnitude parameters (set bottom 20% magnitudes to zero); (2) elect sign via majority vote across merged adapters; (3) disjoint merge — only include parameters with winning sign. Reduces destructive interference significantly vs naive linear interpolation
    - DARE (Yu et al. 2023): randomly drops LoRA delta parameters before merging (drop probability p=0.7–0.9) with magnitude rescaling by 1/(1-p) — reduces interference while preserving expected update magnitude; can be composed with TIES
    - SLERP (spherical linear interpolation): interpolates between two adapter weight sets along the geodesic on the unit hypersphere rather than linear interpolation — produces smoother capability blending for style/tone adapters
    - mergekit (github.com/arcee-ai/mergekit): CLI tool implementing all major merge algorithms; GUI wrapper enables non-researchers to compose adapter capabilities visually; used by Mistral AI and community to produce merged model families (NeuralHermes, OpenHermes-2.5, etc.)

  - **Federated fine-tuning**: privacy-preserving adaptation.
    - FedLoRA: each client trains LoRA adapter on private local data; aggregation server receives only low-rank matrices — communication overhead 100–1000× lower than federated full fine-tuning
    - DP-LoRA (differential privacy): adds calibrated Gaussian noise to LoRA gradient updates providing (ε,δ)-differential privacy guarantees; mathematical privacy proof for GDPR/HIPAA compliance
    - Healthcare consortia use case: multiple hospitals co-train clinical NLP adapter without sharing patient data; final shared adapter inherits distributed medical knowledge

  - **Continual learning and multi-task serving**: LoRA enables modular capability extension.
    - New tasks receive new adapters trained against frozen base — catastrophic forgetting eliminated by design (base never modified)
    - O(r(m+n)) storage per task vs O(mn) for per-task full model — at r=8, 256× smaller per-task footprint enabling practical many-task libraries
    - Multi-LoRA serving: load base model once, hot-swap adapter per request — Hugging Face Endpoints supports per-request LoRA switching; adapter load latency <1ms vs model reload ~30 seconds; enables single A100 serving 100+ task variants simultaneously
    - LoRA composability: arithmetic combination of adapters from same base model (W_base + α₁ΔW₁ + α₂ΔW₂) often preserves both task capabilities simultaneously — demonstrated for code + medical knowledge, formal tone + domain terminology

  - **Safety fine-tuning and alignment via PEFT**:
    - Constitutional AI / RLHF without full model access: LoRA adapters can apply safety fine-tuning to open-weight models without touching base weights; safety adapters easily combined with capability adapters post-hoc
    - DPO-LoRA (Direct Preference Optimisation + LoRA): trains preference alignment using only ~100–5,000 preference pairs; trl library implementation enables 2-hour safety fine-tuning on consumer GPU
    - Unlearning via PEFT: targeted forgetting of harmful knowledge through gradient ascent on toxic examples with LoRA; experimental but promising for regulatory compliance (GDPR right to be forgotten applied to model knowledge)
    - Red-team adversarial robustness LoRA: fine-tuning models to resist jailbreaks whilst preserving capability — PEFT enables this without stability risks of full RLHF on large models

  - ## Academic Context
  - The PEFT field crystallised around several intellectual lineages flowing into Hu et al.'s LoRA.
  - **Transfer learning foundations**: Devlin et al. (2019) BERT demonstrated pre-trained representations are broadly reusable across NLP tasks with minimal task-specific tuning — establishing that the bottleneck is not representation quality but annotation cost and adaptation overhead. Radford et al. (2018/2019) GPT/GPT-2 showed language modelling pre-training enables zero-shot and few-shot task transfer — implying general knowledge is encoded in pre-trained weights and task adaptation is a search problem over a small parameter subspace. Howard and Ruder (2018) ULMFiT established discriminative fine-tuning (lower learning rates for earlier layers) and gradual unfreezing as practical recipes for avoiding catastrophic forgetting — conceptual precursors to PEFT's more principled approaches.
  - **Adapter literature**: Houlsby et al. (2019) first demonstrated that inserting small (~1% parameter) bottleneck modules between frozen transformer layers achieves near-full-fine-tuning performance — the existence proof that minimal parameter updates suffice. Bapna and Firat (2019) proposed simpler single-layer adapters for multilingual NMT, demonstrating cross-lingual transfer via adapter composition. Pfeiffer et al. (2020) AdapterHub institutionalised modular fine-tuning as a research discipline with the first large-scale pre-trained adapter repository, demonstrating that adapters are composable across tasks and languages without destructive interference.
  - **Intrinsic dimensionality**: Li et al. (2018) measured intrinsic dimensionality d* of neural network objective landscapes — the minimum-dimension random projection subspace within which SGD achieves 90% of full-parameter performance — finding d* ≪ total parameters. Aghajanyan et al. (2020/2021) applied this to pre-trained model fine-tuning specifically: d* = 200 for BERT-base (125M params), d* ≈ 1,000 for GPT-2 (1.5B params), d* ≈ 10,000 for GPT-3 (175B params) — with larger models having proportionally smaller d*/total_params ratios. This provided the key theoretical justification for LoRA: if effective fine-tuning requires moving in only 200–10,000 dimensions, then rank-8 LoRA (spanning O(8×hidden_dim) dimensions per layer summed across layers) provides a sufficient learned subspace far exceeding d*.
  - **LoRA synthesis and citation trajectory**: Hu et al. (2022) synthesised adapters + intrinsic dimensionality + zero-inference-overhead into a clean deployable method; exceeded 10,000 citations by 2024 and 25,000 by 2025, among the most cited AI papers of the 2020s. QLoRA exceeded 10,000 citations within 18 months — reflecting the community fine-tuning explosion. The combination of LoRA + QLoRA effectively democratised LLM fine-tuning: from requiring a corporate ML team with $1M+ GPU cluster to being achievable by a PhD student on a single $10K workstation.
  - **Post-LoRA theoretical analysis**: Zeng and Lee (2023) analysed LoRA's implicit nuclear norm regularisation — showing LoRA's low-rank constraint acts as a nuclear norm penalty on ΔW, favouring smooth low-rank updates, explaining why LoRA generalises well despite parameter efficiency. Hayou et al. (2024) used Maximal Update Parameterisation (μP) to characterise LoRA's feature learning dynamics: standard LoRA scaling puts A in the "lazy training" regime (features don't evolve); LoRA+ fixes this by assigning higher η_B enabling proper feature learning. Zhao et al. (2024) connected GaLore's gradient projection to Oja's online SVD algorithm — establishing GaLore as principled streaming principal component extraction rather than ad hoc compression.
  - **Benchmarking and evaluation community**: Open LLM Leaderboard (HuggingFace) tracks PEFT fine-tuned models alongside full fine-tuned and proprietary models on ARC, HellaSwag, MMLU, TruthfulQA, Winogrande, GSM8K — creating direct performance comparisons enabling community-driven quality control. AlpacaEval and MT-Bench provide automated instruction-following evaluation enabling rapid iteration on fine-tuning recipes without expensive human annotation.

  - ## Current Landscape (2026)
  - By early 2026, PEFT is the **default paradigm for LLM adaptation** — full fine-tuning of models >7B reserved for specialised pre-training use cases.
  - **Commercial integration**: AWS SageMaker JumpStart offers one-click LoRA fine-tuning for Llama-3, Mistral-7B, Phi-3; Google Vertex AI uses LoRA-based supervised tuning for Gemini 1.5 Flash; Azure AI Studio fine-tuning for Phi-3/Llama defaults to QLoRA; Hugging Face Endpoints supports per-request LoRA adapter switching for multi-task serving.
  - **2025-2026 emerging methods**:
    - **FLORA**: full-rank LoRA via Oja's online SVD — iteratively updating projection without periodic recomputation, enabling continuous rank adaptation
    - **MoRA**: high-rank updating using fewer parameters — square ΔW ∈ ℝʳˣʳ with input/output compression achieving higher-rank updates within LoRA budget; particularly effective for knowledge-intensive fine-tuning
    - **HydraLoRA**: asymmetric structure sharing matrix A across tasks — multiple B matrices per-task, shared A reduces storage whilst maintaining per-task directional specialisation
    - **LoRAM** (LoRA on Mobile): targeting ARM NPU INT4 for on-device personalisation; Apple CoreML LoRA research and ARM INT4 LoRA inference toolchain enabling smartphone fine-tuning
  - **Regulatory drivers**: EU AI Act (full application August 2026), UK AI Regulation Bill, US Executive Orders on AI privacy create demand for federated PEFT with differential privacy guarantees — particularly in healthcare, finance, and legal sectors.
  - **Open ecosystem maturation**: standardised adapter formats (safetensors + PEFT config.json) enable cross-library portability — any PEFT-trained adapter can be loaded by HuggingFace Transformers, llama.cpp (with GGUF LoRA extension), vLLM, and TGI without conversion; community merging tools (mergekit, mergekit-gui) make model capability composition accessible to non-researchers with GUI-driven TIES/DARE/SLERP merging workflows. The **LM Evaluation Harness** (EleutherAI) provides standardised evaluation of fine-tuned models across 70+ benchmarks, enabling objective quality comparison between fine-tuning recipes without bespoke evaluation infrastructure.
  - **Quantitative landscape metrics (2025)**: PEFT's footprint in the ML ecosystem by mid-2025: 500,000+ LoRA adapter weights on Hugging Face Hub (growing ~15,000/week); 400,000+ LoRA models on Civitai (growing ~5,000/week); PEFT library has 15,000+ GitHub stars and 25M+ monthly PyPI downloads; at least 5,000 academic papers citing LoRA as a methodological component in 2024 alone — PEFT has transitioned from a specialised technique to an assumed default methodology reported without detailed justification in ML papers, analogous to Adam optimiser adoption in 2016-2018.
  - **Competitive landscape (2026)**: The boundary between PEFT and full fine-tuning is blurring for very small models (1–3B parameters): at this scale, full fine-tuning is feasible on a single consumer GPU, and some practitioners prefer it for maximum expressiveness; however, LoRA's storage advantages (adapter files vs full model copies) remain decisive for deployment and distribution. For models ≥7B, PEFT is the unambiguous default. The competitive landscape among PEFT methods themselves is stabilising around LoRA (general purpose), DoRA (complex generation), QLoRA (single-GPU large model), and IA³ (extreme efficiency) as the four primary choices — with LyCORIS variants dominating diffusion model use cases specifically.

  - ## UK Context
  - **Imperial College London** (Computing Dept, Bayesian ML / medical AI groups): uncertainty-aware LoRA methods — Bayesian low-rank adaptation modelling ΔW posterior over task-relevant directions; collaborating with NHS Imperial College Healthcare Trust on radiology report generation; Hamlyn Centre for Robotic Surgery applies LoRA to surgical video understanding models.
  - **University of Edinburgh** (ILCC — Lapata/Lopez groups): cross-lingual adapter transfer and multilingual PEFT for low-resource languages building on AdapterHub; Ustun et al. (2022) multilingual adapter tuning for cross-lingual transfer; Edinburgh NLP group actively benchmarks PEFT methods for 50+ language NLP tasks.
  - **University of Cambridge** (Computer Lab / former Ghahramani group, now Google DeepMind Cambridge): Bayesian LoRA — modelling low-rank updates as structured priors over weight matrices; principled rank selection via marginal likelihood estimation; Cambridge Accelerate Programme funds PEFT applications in climate science and computational biology.
  - **UCL** (Centre for AI, Barber group): PEFT for continual learning and sequential task adaptation in embodied AI — DoRA variants for robot manipulation policies trained in simulation with real-world domain adaptation via LoRA.
  - **Alan Turing Institute** (London, national AI institute): PEFT working group examining public sector applications — HMRC document processing, NHS clinical NLP, DVLA record extraction — under UK Government AI adoption framework and ICO guidance; published guidance on PEFT for data-minimisation-by-design in government AI systems.
  - **Manchester ecosystem**: Textkernel (Randstad NV subsidiary, HR AI) deploys LoRA for multilingual CV parsing across 24 European job markets; Manchester Metropolitan University's MAIS group investigates adapter-based dialect-aware NLP.
  - **Leeds ecosystem**: Aire (credit risk AI) uses QLoRA on-premise for FCA regulatory document understanding — GDPR-compliant processing with zero cloud data egress; Connexin (Hull, IoT/AI) uses LoRA for customer service LLM adaptation meeting NCSC cloud security guidance.
  - **ARM Cambridge**: INT4 quantisation research for Cortex-A and Ethos NPU series; LoRA-merged weight deployment maps favourably to ARM NEON SIMD 4-bit dot-product operations; ExecuTorch integration supports LoRA weight merging for Cortex-A78AE automotive deployment.
  - **Sheffield NLP Group** (Prof Mark Stevenson group): long-standing specialisation in domain adaptation for medical/scientific text; early contributions to adapter fine-tuning for biomedical entity recognition (Sheffield NLP published on adapter tuning for clinical NLP predating LoRA); active in cross-domain PEFT evaluation for UK clinical NLP, including NHS Digital's National Language Intelligence Centre pilot for clinical coding automation.
  - **Newcastle / Northumbria AI ecosystem**: Newcastle University's School of Computing applies LoRA fine-tuning for industrial inspection NLP — defect report categorisation for manufacturing sector (Siemens UK collaboration); Northumbria's AI Research Centre investigates PEFT for geospatial and environmental monitoring data from satellite imagery, adapting vision-language foundation models to UK-specific land use classification via LoRA on SAR and multispectral imagery.
  - **Bristol** (University of Bristol, Visual Information Laboratory): applies LoRA/DoRA to video understanding models for UK broadcasting and media sector; BBC Research & Development collaboration on fine-tuning speech/language models for UK accents and dialects using adapter tuning, addressing the significant performance degradation of US-trained ASR models on Scottish, Welsh, Northern English and West Midlands speech patterns.
  - **UK AI Safety Institute** (AISI, est. 2023, now DSIT): conducts systematic evaluation of PEFT-based fine-tuning for safety risk — specifically whether LoRA fine-tuning can be used to remove safety guardrails from open-weight models (jailbreak LoRAs) and at what parameter count / training data size safety alignment is reversible. AISI published technical reports on fine-tuning risk in 2024 informing UK AI governance framework development under the proposed AI Regulation Bill. This work directly shapes licensing requirements for open-weight model releases in the UK.
  - **Scottish Enterprise and Highland/Islands clusters**: Scottish Government's Digital Economy strategy includes AI adoption funding for LoRA fine-tuning of Gaelic and Scots language NLP — adaptation of multilingual models (mBERT, mT5) for low-resource Scottish languages using Adapter Tuning and prefix tuning methods; University of the Highlands and Islands leads the GAELIC-NLP project adapting speech recognition and machine translation for Gaelic broadcasting (MG ALBA) using adapter-based transfer from Irish Gaelic resources.

  - ## Future Directions (2026–2030)
  - **Rank-adaptive and curvature-aware training**: AdaLoRA and GaLore represent early steps; next generation will use Hessian curvature information (Fisher information matrix diagonal, efficiently estimated via Hutch++ stochastic trace estimation) to continuously assign rank budget during training — layers with high loss curvature indicating task-relevant directions receive higher rank allocation; flat landscape layers compressed to r=1 or frozen entirely. This eliminates the r hyperparameter entirely and may yield 10–20% parameter savings vs AdaLoRA at equal task performance. Kronecker-factored approximate curvature (K-FAC) applied to LoRA factors offers a complementary approach — using the Kronecker product structure of A and B to approximate the Fisher information matrix for each adapter pair efficiently.
  - **On-device personalisation (2027 milestone)**: flagship smartphones in 2025 exceed 16GB RAM + ~40 TOPS NPU (Apple A18 Pro, Snapdragon 8 Gen 4). LoRA fine-tuning on-device becomes feasible for small models (1–3B parameters). Apple CoreML LoRA adaptation pipeline and ARM INT4 LoRA inference suggest personalised on-device LLMs — adapted to individual writing style, vocabulary, private contacts, preferences — with no server-side data transmission by 2027.
  - **Multimodal PEFT expansion**: vision-language models (LLaVA, Flamingo, Gemini variants) adopt LoRA/DoRA for cross-modal adapter layers connecting vision encoders to language decoders; audio-language PEFT (Whisper-LoRA for domain-specific ASR); video understanding temporal LoRA adapters; protein structure prediction LoRA for ESMFold/AlphaFold variants.
  - **Federated PEFT at scale**: EU AI Act enforcement (August 2026) and UK AI Regulation Bill will drive healthcare consortia, financial services groups, and legal firms to adopt FedLoRA with formal DP guarantees as the standard compliance mechanism for collective intelligence from private datasets.
  - **PEFT for reasoning and alignment (2025-2027)**: chain-of-thought LoRA — fine-tuning specifically on reasoning traces to distil thinking patterns from large reasoning models (o1-style, DeepSeek-R1) into smaller efficient models; reward-model LoRA enabling community-driven safety alignment of open-weight models.
  - **Theoretical unification**: connections between LoRA, NTK parameterisation, and MDL compression principles will yield principled design rules; PAC-Bayes bounds for LoRA generalisation as function of rank and training set size; information-theoretic optimal rank selection replacing empirical grid search.
  - **Hardware-software co-design**: next-generation accelerators (Groq LPU-2, Cerebras CS-3, ARM Ethos-U85) are exposing PEFT-aware execution modes — base model weights loaded once into high-bandwidth memory (HBM3e); adapter weight tensors (A, B matrices) cached in L2 SRAM enabling per-request sub-millisecond adapter switching; dedicated silicon for the W₀x and BAx path separation enabling simultaneous computation of both terms. AMD's ROCm ecosystem and NVIDIA's TensorRT-LLM both added LoRA-aware optimised kernels in 2024-2025, enabling multi-LoRA batch inference (serving requests for different adapters in the same batch without adapter reloading) — critical for multi-tenant PEFT serving at hyperscaler scale where thousands of adapters may be concurrently active.
  - **Cross-modal LoRA composition**: vision-language models (LLaVA, InternVL, Idefics3) use separate LoRA adapters for vision encoder and language model components — adapters can be independently trained then composed, enabling vision domain specialisation (medical imaging, satellite imagery, industrial inspection) to combine with language domain specialisation (medical terminology, regulatory language) without joint fine-tuning. This modular decomposition enables fine-grained capability construction for enterprise multimodal AI deployments.
  - **PEFT for protein and molecular biology (2026-2030)**: ESMFold and AlphaFold variant fine-tuning via LoRA for specific protein families (membrane proteins, intrinsically disordered regions, post-translational modification prediction); molecular property prediction fine-tuning of chemical foundation models (ChemBERTa, MolBERT) via adapters trained on proprietary wet-lab assay data without sharing training compounds; genomic sequence model adaptation (Nucleotide Transformer LoRA) for species-specific regulatory region prediction. These applications inherit all PEFT advantages — data residency, compute efficiency, adapter composability — with particular value in competitive biotechnology where training data is proprietary and cannot be shared with cloud providers.

  - ## Research and Literature
  - **Foundational LoRA/PEFT papers:**
    - Houlsby et al. (2019). "Parameter-Efficient Transfer Learning for NLP." ICML 2019. Google Brain.
    - Li and Liang (2021). "Prefix-Tuning: Optimizing Continuous Prompts for Generation." ACL 2021. Stanford.
    - Lester et al. (2021). "The Power of Scale for Parameter-Efficient Prompt Tuning." EMNLP 2021. Google.
    - Hu et al. (2022). "LoRA: Low-Rank Adaptation of Large Language Models." ICLR 2022. arXiv:2106.09685. Microsoft Research.
    - Liu et al. (2022). "Few-Shot Parameter-Efficient Fine-Tuning is Better and Cheaper than In-Context Learning." NeurIPS 2022. (IA³)
    - Zhang et al. (2023). "AdaLoRA: Adaptive Budget Allocation for Parameter-Efficient Fine-Tuning." ICLR 2023. Microsoft Research.
    - Dettmers et al. (2023). "QLoRA: Efficient Finetuning of Quantized LLMs." NeurIPS 2023. arXiv:2305.14314.
    - Chen et al. (2023). "LongLoRA: Efficient Fine-tuning of Long-Context Large Language Models." ICLR 2024. arXiv:2309.12307. MIT.
    - Kopiczko et al. (2023). "VeRA: Vector-Based Random Matrix Adaptation." ICLR 2024.
    - Lialin et al. (2023). "ReLoRA: High-Rank Training Through Low-Rank Updates." NeurIPS 2023 Workshop. UMass Lowell.
    - Liu et al. (2024). "DoRA: Weight-Decomposition Low-Rank Adaptation." ICML 2024. arXiv:2402.09353. NVIDIA Research.
    - Zhao et al. (2024). "GaLore: Memory-Efficient LLM Training by Gradient Low-Rank Projection." ICML 2024. arXiv:2403.03507.
    - Hayou et al. (2024). "LoRA+: Efficient Low-Rank Adaptation of Large Models." ICML 2024.
  - **Theoretical foundations:**
    - Li et al. (2018). "Measuring the Intrinsic Dimension of Objective Landscapes." ICLR 2018.
    - Aghajanyan et al. (2021). "Intrinsic Dimensionality Explains the Effectiveness of Language Model Fine-Tuning." ACL 2021. Facebook AI.
    - Devlin et al. (2019). "BERT: Pre-training of Deep Bidirectional Transformers." NAACL 2019. Google AI.
    - Brown et al. (2020). "Language Models are Few-Shot Learners." NeurIPS 2020. OpenAI.
  - **Ecosystem and implementation:**
    - Pfeiffer et al. (2020). "AdapterHub: A Framework for Adapting Transformers." EMNLP 2020. TU Darmstadt/Edinburgh.
    - Pfeiffer et al. (2021). "AdapterFusion: Non-Destructive Task Composition for Transfer Learning." EACL 2021.
    - Hugging Face PEFT Library. github.com/huggingface/peft. MIT Licence. v0.14+ (2025).
    - Dettmers et al. bitsandbytes library. github.com/TimDettmers/bitsandbytes. NF4/INT8.
    - kohya_ss. LoRA training for diffusion models. github.com/kohya-tech/kohya_ss.
    - NVIDIA Developer Blog. "Introducing DoRA." developer.nvidia.com/blog/introducing-dora. 2024.
    - Hugging Face Blog. "LoRA training scripts of the world, unite!" 2023.
  - **Merging and composition:**
    - Yadav et al. (2023). "TIES-Merging: Resolving Interference When Merging Models." NeurIPS 2023.
    - Yu et al. (2023). "DARE: Language Model Fine-Tuning via Merging." arXiv:2311.03099.
    - Wortsman et al. (2022). "Model Soups: averaging weights of fine-tuned models." ICML 2022.
  - **UK and European research:**
    - Ustun et al. (2022). "Multi-lingual Adapter Tuning." EMNLP 2022. Edinburgh/UvA.
    - Lauscher et al. (2020). "Limitations of Zero-Shot Multilingual Transfer." EMNLP 2020. Edinburgh.
  - **Benchmarks:**
    - Open LLM Leaderboard. huggingface.co/spaces/HuggingFaceH4/open_llm_leaderboard. HuggingFace 2024.
    - Vicuna Benchmark. lmsys.org/blog/2023-03-30-vicuna. LMSYS 2023.
    - GLUE/SuperGLUE. Wang et al. (2019/2022). Standard NLP evaluation.

  - ## Metadata
    - **Legacy Term ID**: AI-1042
    - **Domain correction**: `infrastructure` → `artificial-intelligence` (original stub misclassified; LoRA/PEFT is a core AI/ML algorithm family; IRI, URI, same-as, owl-class all updated accordingly)
    - **IRI**: `http://narrativegoldmine.com/artificial-intelligence#LoRADoRAEtc`
    - **URI**: `urn:visionclaw:concept:artificial-intelligence:lora-dora-etc`
    - **Version**: 2.0.0 → 2.1.0
    - **Enrichment model**: claude-sonnet-4-6
    - **Phase**: Phase 6 bulk run, 2026-05-17

- ### Provenance
  - sources::
    - Hu et al. (2022). "LoRA: Low-Rank Adaptation of Large Language Models." ICLR 2022. arXiv:2106.09685. Microsoft Research.
    - Dettmers et al. (2023). "QLoRA: Efficient Finetuning of Quantized LLMs." NeurIPS 2023. arXiv:2305.14314. University of Washington.
    - Liu et al. (2024). "DoRA: Weight-Decomposition Low-Rank Adaptation." ICML 2024. arXiv:2402.09353. NVIDIA Research.
    - Zhao et al. (2024). "GaLore: Memory-Efficient LLM Training by Gradient Low-Rank Projection." ICML 2024. arXiv:2403.03507.
    - Hayou et al. (2024). "LoRA+: Efficient Low-Rank Adaptation of Large Models." ICML 2024.
    - Houlsby et al. (2019). "Parameter-Efficient Transfer Learning for NLP." ICML 2019. Google Brain.
    - Li and Liang (2021). "Prefix-Tuning: Optimizing Continuous Prompts for Generation." ACL 2021. Stanford.
    - Lester et al. (2021). "The Power of Scale for Parameter-Efficient Prompt Tuning." EMNLP 2021. Google.
    - Liu et al. (2022). "Few-Shot Parameter-Efficient Fine-Tuning is Better and Cheaper than In-Context Learning." NeurIPS 2022. (IA³)
    - Zhang et al. (2023). "AdaLoRA: Adaptive Budget Allocation for Parameter-Efficient Fine-Tuning." ICLR 2023. Microsoft Research.
    - Chen et al. (2023). "LongLoRA: Efficient Fine-tuning of Long-Context Large Language Models." ICLR 2024. arXiv:2309.12307. MIT.
    - Kopiczko et al. (2023). "VeRA: Vector-Based Random Matrix Adaptation." ICLR 2024.
    - Lialin et al. (2023). "ReLoRA: High-Rank Training Through Low-Rank Updates." NeurIPS 2023 Workshop. UMass Lowell.
    - Aghajanyan et al. (2021). "Intrinsic Dimensionality Explains the Effectiveness of Language Model Fine-Tuning." ACL 2021. Facebook AI.
    - Li et al. (2018). "Measuring the Intrinsic Dimension of Objective Landscapes." ICLR 2018.
    - Pfeiffer et al. (2020). "AdapterHub: A Framework for Adapting Transformers." EMNLP 2020.
    - Pfeiffer et al. (2021). "AdapterFusion: Non-Destructive Task Composition for Transfer Learning." EACL 2021.
    - Ustun et al. (2022). "Multi-lingual Adapter Tuning for Cross-lingual Transfer." EMNLP 2022. Edinburgh/UvA.
    - Devlin et al. (2019). "BERT: Pre-training of Deep Bidirectional Transformers." NAACL 2019. Google AI.
    - Brown et al. (2020). "Language Models are Few-Shot Learners." NeurIPS 2020. OpenAI.
    - Hugging Face PEFT Library. github.com/huggingface/peft. v0.14+ 2025.
    - NVIDIA Developer Blog. "Introducing DoRA." developer.nvidia.com/blog. 2024.
    - kohya_ss documentation. github.com/kohya-tech/kohya_ss. 2024.
    - Civitai LoRA Marketplace. civitai.com. 400,000+ models. 2025.
    - Yadav et al. (2023). "TIES-Merging: Resolving Interference When Merging Models." NeurIPS 2023.
    - Yu et al. (2023). "DARE: Language Model Fine-Tuning via Merging." arXiv:2311.03099.
    - Wortsman et al. (2022). "Model Soups: averaging weights of fine-tuned models." ICML 2022.
  - migration-date:: 2026-04-26T00:00:00Z
  - domain-correction:: infrastructure -> artificial-intelligence (original stub domain misclassified; IRI, URI, same-as, owl-class all updated)
  - enrichment-date:: 2026-05-17T09:00:00Z
  - enrichment-model:: claude-sonnet-4-6