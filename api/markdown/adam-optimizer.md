- ### Definition
  - The Adam Optimizer (US English spelling of [[Adam Optimiser]]; Adaptive Moment Estimation) is a first-order stochastic [[Optimization Algorithm]] that computes per-parameter adaptive learning rates by maintaining exponentially decaying moving averages of past [[Gradient Descent]] vectors (first moment, providing momentum) and past squared gradients (second moment, providing per-parameter scale information). Bias correction is applied to both moment estimates in early iterations to counteract zero-initialisation effects. Introduced by Kingma and Ba (2014, arXiv:1412.6980), Adam synthesises the momentum approach of [[Stochastic Gradient Descent]] with the per-parameter adaptivity of [[RMSProp]] and [[Adagrad]], and has become the universal default optimiser for training [[Large Language Model]] systems, [[Diffusion Model]] generative architectures, and [[Deep Learning]] models across all major domains. Its primary deployed variant [[AdamW]] (Loshchilov and Hutter, 2017) decouples [[Weight Decay]] from the adaptive gradient update and is the canonical training algorithm for GPT, LLaMA, Gemma, and Mistral model families as of 2026. See [[Adam Optimiser]] for the full canonical entry; this page preserves the US English spelling as an alias for cross-linking compatibility.

- ### Semantic Classification
  - owl-class:: machine-learning:AdamOptimizer
  - owl-role:: ExecutableProtocol | LearningParadigm
  - owl-inferred:: machine-learning:AdaptiveGradientMethod, machine-learning:FirstOrderOptimiser, machine-learning:MomentumBasedOptimiser
  - belongs-to-domain:: [[Machine Learning]]
  - implemented-in-layer:: [[AlgorithmLayer]]

- ### Relationships
  - is-subclass-of:: [[Optimization Algorithm]], [[Gradient Descent]], [[Optimisation Algorithm]]
  - has-part:: [[Exponential Moving Average]], [[Learning Rate Schedule]], [[Gradient Clipping]], [[Bias Correction]], [[Numerical Stability]]
  - requires:: [[Backpropagation]], [[Loss Function]], [[Stochastic Gradient Descent]], [[Automatic Differentiation]]
  - enables:: [[Deep Learning]], [[Model Training]], [[Fine-Tuning]], [[Transfer Learning]], [[Convergence]], [[Mixed Precision Training]], [[Hyperparameter Optimisation]]
  - implements:: [[Adaptive Learning Rate]], [[Regularisation]], [[Numerical Stability]], [[Momentum Optimisation]]
  - depends-on:: [[Neural Network]], [[Gradient Clipping]], [[Gradient Accumulation]], [[Batch Normalisation]]
  - supports:: [[Large Language Model]], [[Transformer Architecture]], [[Diffusion Model]], [[Natural Language Processing]], [[Vision Transformer]], [[Recurrent Neural Network]]
  - uses:: [[Exponential Moving Average]], [[Stochastic Gradient Descent]], [[Gradient Clipping]], [[Loss Function]]
  - contrasts-with:: [[RMSProp]], [[Adagrad]], [[SGD with Momentum]], [[Lion Optimiser]], [[Muon Optimiser]], [[AMSGrad]]
  - related-to:: [[Adam Optimiser]], [[AdamW]], [[AdaFactor]], [[AMSGrad]], [[Weight Decay]], [[Gradient Clipping]], [[Learning Rate Schedule]], [[Vanishing Gradient Problem]], [[Machine Learning]], [[Generalisation]]
  - bridges-to:: [[Reinforcement Learning]], [[Federated Learning]], [[Distributed Training]], [[Policy Gradient Methods]]
  - has-variant:: [[AdamW]], [[AdaFactor]], [[AMSGrad]], [[Lion Optimiser]], [[Muon Optimiser]]
  - standardized-by:: [[PyTorch]], [[JAX]], [[TensorFlow]]
  - applies-to:: [[Transformer Architecture]], [[Diffusion Model]], [[Vision Transformer]], [[Recurrent Neural Network]]

- ### Content
  - ## Compositional Relationships (Components)
    ```
    SubClassOf(ai:AdamOptimizer
      ObjectSomeValuesFrom(ai:hasPart ai:FirstMomentEstimate))
    SubClassOf(ai:AdamOptimizer
      ObjectSomeValuesFrom(ai:hasPart ai:SecondMomentEstimate))
    SubClassOf(ai:AdamOptimizer
      ObjectSomeValuesFrom(ai:hasPart ai:BiasCorrection))
    SubClassOf(ai:AdamOptimizer
      ObjectSomeValuesFrom(ai:hasPart ai:LearningRateSchedule))
    SubClassOf(ai:AdamOptimizer
      ObjectSomeValuesFrom(ai:hasPart ai:ExponentialMovingAverage))
    SubClassOf(ai:AdamOptimizer
      ObjectSomeValuesFrom(ai:hasPart ai:NumericalStabilityEpsilon))
    ```
  - ## Dependency Relationships
    ```
    SubClassOf(ai:AdamOptimizer
      ObjectSomeValuesFrom(ai:requires ai:Backpropagation))
    SubClassOf(ai:AdamOptimizer
      ObjectSomeValuesFrom(ai:requires ai:LossFunction))
    SubClassOf(ai:AdamOptimizer
      ObjectSomeValuesFrom(ai:requires ai:StochasticGradientDescent))
    SubClassOf(ai:AdamOptimizer
      ObjectSomeValuesFrom(ai:dependsOn ai:NeuralNetwork))
    SubClassOf(ai:AdamOptimizer
      ObjectSomeValuesFrom(ai:dependsOn ai:GradientClipping))
    SubClassOf(ai:AdamOptimizer
      ObjectSomeValuesFrom(ai:dependsOn ai:NumericalStability))
    ```
  - ## Capability Relationships
    ```
    SubClassOf(ai:AdamOptimizer
      ObjectSomeValuesFrom(ai:enables ai:DeepLearning))
    SubClassOf(ai:AdamOptimizer
      ObjectSomeValuesFrom(ai:enables ai:ModelTraining))
    SubClassOf(ai:AdamOptimizer
      ObjectSomeValuesFrom(ai:enables ai:FineTuning))
    SubClassOf(ai:AdamOptimizer
      ObjectSomeValuesFrom(ai:enables ai:TransferLearning))
    SubClassOf(ai:AdamOptimizer
      ObjectSomeValuesFrom(ai:enables ai:Convergence))
    SubClassOf(ai:AdamOptimizer
      ObjectSomeValuesFrom(ai:supports ai:LargeLanguageModel))
    SubClassOf(ai:AdamOptimizer
      ObjectSomeValuesFrom(ai:supports ai:DiffusionModel))
    ```
  - ## Implementation Relationships
    ```
    SubClassOf(ai:AdamOptimizer
      ObjectSomeValuesFrom(ai:implements ai:AdaptiveLearningRate))
    SubClassOf(ai:AdamOptimizer
      ObjectSomeValuesFrom(ai:implements ai:Regularisation))
    SubClassOf(ai:AdamOptimizer
      ObjectSomeValuesFrom(ai:isSubclassOf ai:GradientDescent))
    SubClassOf(ai:AdamOptimizer
      ObjectSomeValuesFrom(ai:isSubclassOf ai:OptimizationAlgorithm))
    SubClassOf(ai:AdamOptimizer
      ObjectSomeValuesFrom(ai:sameAs ai:AdamOptimiser))
    ```
  - ## Reduction Relationships
    ```
    SubClassOf(ai:AdamOptimizer
      ObjectSomeValuesFrom(ai:reducesTo ai:StochasticGradientDescent))
    SubClassOf(ai:AdamOptimizer
      ObjectSomeValuesFrom(ai:reducesTo ai:RMSProp))
    SubClassOf(ai:AdamOptimizer
      ObjectSomeValuesFrom(ai:contrastsWith ai:LionOptimiser))
    SubClassOf(ai:AdamOptimizer
      ObjectSomeValuesFrom(ai:contrastsWith ai:MuonOptimiser))
    SubClassOf(ai:AdamOptimizer
      ObjectSomeValuesFrom(ai:bridgesTo ai:FederatedLearning))
    ```

  - ## About

    This page is the US English alias entry for the Adam Optimizer (canonical British English entry: [[Adam Optimiser]]). All wikilinks from US-spelling sources in the knowledge graph resolve here and are bridged to the canonical entry via the `sameAs` relation. The full ontological treatment — including mathematical framework, algorithmic pseudocode, variant taxonomy, use-case survey, UK context, and research literature — is contained in the [[Adam Optimiser]] page.

    The Adam Optimizer (Adaptive Moment Estimation) is a first-order, stochastic gradient-based [[Optimization Algorithm]] introduced by Diederik Kingma and Jimmy Ba in 2014 (arXiv:1412.6980, ICLR 2015). It computes per-parameter adaptive learning rates using two running statistics maintained per model parameter: m_t, the exponentially weighted moving average of past [[Gradient Descent]] vectors (first moment, decay rate β₁ = 0.9); and v_t, the exponentially weighted moving average of squared gradients (second moment, decay rate β₂ = 0.999). Both are bias-corrected to account for their zero initialisation. The parameter update θ_t ← θ_{t-1} − α · m̂_t / (√v̂_t + ε) implicitly normalises each gradient signal by its historical variance, making Adam robust to heterogeneous gradient scales across different parameter groups in [[Deep Learning]] architectures. This robustness is why Adam and its decoupled-weight-decay variant [[AdamW]] became the universal default training algorithm for the [[Large Language Model]] ecosystem, from BERT and GPT-series to LLaMA, Gemma, and Mistral.

    The Adam Optimizer sits at the junction of two historically distinct optimiser families. The momentum branch — tracing back to Polyak (1964) and Nesterov (1983) — provides directional smoothing that accelerates convergence through consistent gradient regions and dampens oscillation in ill-conditioned directions. The adaptive rate branch — formalised by [[Adagrad]] (Duchi et al., 2011) and refined by [[RMSProp]] (Hinton, 2012) — provides per-parameter learning rate scaling based on gradient history. Adam's key innovations are: (1) using exponential moving averages rather than cumulative sums (preventing learning rate collapse in [[Adagrad]]); (2) tracking both first and second moments simultaneously; and (3) applying bias correction to both moments. The combination yields an algorithm whose effective step size is bounded by α·(1+ε)/(1−β₁), independent of gradient magnitude — making it remarkably insensitive to the global learning rate α compared to SGD.

  - ## Key Algorithm

    The Adam update rule in compact form:

    - m_t = β₁·m_{t-1} + (1−β₁)·g_t (first moment)
    - v_t = β₂·v_{t-1} + (1−β₂)·g_t² (second moment, element-wise)
    - m̂_t = m_t / (1−β₁^t) (bias-corrected first moment)
    - v̂_t = v_t / (1−β₂^t) (bias-corrected second moment)
    - θ_t = θ_{t-1} − α · m̂_t / (√v̂_t + ε) (parameter update)
    - Default hyperparameters: α=1e-3, β₁=0.9, β₂=0.999, ε=1e-8

    The [[AdamW]] extension adds a direct weight decay term: θ_t = θ_{t-1} − α · (m̂_t / (√v̂_t + ε) + λ·θ_{t-1}), where λ is the weight decay coefficient (typically 0.01-0.1). This decoupling is critical for [[Regularisation]] semantics: in standard Adam with L2 loss regularisation, the weight decay signal is divided by √v̂_t, weakening regularisation for high-variance parameters. AdamW applies regularisation directly to parameters, preserving the intended regularisation strength uniformly.

    Memory requirements are 3× those of SGD (parameter vector, first moment, second moment). The 8-bit Adam variant (Dettmers et al., 2022) reduces this overhead via block-wise dynamic quantisation of moment vectors to 8-bit precision, achieving ~3.7× memory reduction with less than 0.1% accuracy loss. Adam-mini (Zhang et al., 2024) further reduces moment storage by 45–70% by grouping parameters sharing a single second-moment learning rate.

  - ## Variants Summary

    - **[[AdamW]]**: Decoupled weight decay (Loshchilov and Hutter, 2017). The canonical LLM training algorithm. Default in PyTorch, Hugging Face, JAX/Optax.
    - **[[AMSGrad]]**: Running maximum of v̂_t for convergence guarantee (Reddi et al., 2018). Rarely used in practice; convergence benefit not observed empirically on modern architectures.
    - **[[AdaFactor]]**: Factorised second moment for O(n+m) memory vs O(nm) (Shazeer and Stern, 2018). Used by Google for T5, PaLM (540B). No first moment; update clipping for stability.
    - **8-bit Adam**: Block-wise quantised moment vectors (Dettmers et al., 2022). Standard for memory-constrained [[Fine-Tuning]] via bitsandbytes.
    - **Adam-mini**: Grouped second moments per parameter partition (Zhang et al., 2024). 45–70% moment memory reduction with matched convergence.
    - **[[Lion Optimiser]]**: Sign-only momentum update (Chen et al., 2024). SGD-level memory with competitive performance on some vision/text tasks.
    - **[[Muon Optimiser]]**: Newton-Schulz gradient orthogonalisation for matrix parameters (Jordan et al., 2024). ~2× compute efficiency over AdamW at 16B scale. Adopted by Kimi-K2 (1T parameters) and GLM-5 (744B parameters) in 2025.
    - **AdamS** (2025): Momentum-as-normaliser formulation. EMNLP 2025. Direct AdamW hyperparameter inheritance with improved convergence guarantees.

  - ## Current Landscape (2026)

    AdamW is embedded as the default optimiser in all major deep learning frameworks as of 2026: PyTorch (`torch.optim.AdamW`), JAX/Optax (`optax.adamw`), TensorFlow/Keras (`tf.keras.optimizers.AdamW`), and the Hugging Face Transformers `TrainingArguments` API. The MLPerf Training v4.0 benchmark uses AdamW as the reference optimiser for BERT pre-training, establishing it as the reproducibility standard for the industry.

    The emergence of [[Muon Optimiser]] represents the first serious architectural challenge to Adam's dominance since its introduction. Muon's production adoption at Kimi-K2 (1T parameters, Moonshot AI) and GLM-5 (744B parameters, Zhipu AI) in 2025 demonstrates viability at frontier scale; its PyTorch/DeepSpeed integration guide (pytorch.org blog, 2025) signals mainstream framework support. However, Muon requires Adam-based fallback for embedding and bias parameters, creating a hybrid paradigm rather than a complete replacement.

    Memory-efficient variants are increasingly the default for [[Fine-Tuning]]: 8-bit AdamW via bitsandbytes achieves 78% memory reduction (per 2025 MLPerf Training benchmark) while retaining 98.2% of full-precision accuracy. Q-Adam-mini (2025) extends this to 8× GPU memory reduction versus full AdamW. GaLore (2024) projects gradients to a low-rank subspace before Adam update, enabling [[Mixed Precision Training]] of 7B parameter models on consumer 8 GB GPU hardware.

    The AdamS variant (EMNLP 2025) demonstrated that using momentum itself as a normaliser — rather than the squared gradient — can inherit AdamW's hyperparameters while offering improved convergence on GPT-2 and LLaMA2 up to 13B parameters, with formal convergence guarantees. Convergence theory for AdamW has also matured: Zhang et al. (2025) established O(√d/K^{1/4}) convergence rates in ℓ₁ norm for non-convex stochastic settings, providing long-sought theoretical grounding.

  - ## Research & Literature

    [1] Kingma, D. P. & Ba, J. (2015). Adam: A Method for Stochastic Optimization. ICLR 2015. arXiv:1412.6980.

    [2] Loshchilov, I. & Hutter, F. (2019). Decoupled Weight Decay Regularization. ICLR 2019. arXiv:1711.05101.

    [3] Reddi, S. J., Kale, S. & Kumar, S. (2018). On the Convergence of Adam and Beyond. ICLR 2018. openreview.net/pdf?id=ryQu7f-RZ.

    [4] Shazeer, N. & Stern, M. (2018). Adafactor: Adaptive Learning Rates with Sublinear Memory Cost. ICML 2018. arXiv:1804.04235.

    [5] Dettmers, T., Lewis, M., Belkada, Y. & Zettlemoyer, L. (2022). 8-bit Optimizers via Block-wise Quantization. ICLR 2022. arXiv:2110.02861.

    [6] Jordan, K., Jin, Y., Kosson, A., et al. (2024). Muon: An Optimizer for Hidden Layers in Neural Networks. arXiv:2502.16982. PyTorch Blog 2025: pytorch.org/blog/using-muon-optimizer-with-deepspeed/.

    [7] Chen, X., Liang, C., Huang, D., et al. (2024). Symbolic Discovery of Optimization Algorithms (Lion). NeurIPS 2024. arXiv:2302.06675.

    [8] Zhang, Y., Chen, C., Li, Z., et al. (2024). Adam-mini: Use Fewer Learning Rates to Gain More. arXiv:2406.16793.

    [9] Dettmers, T., Pagnoni, A., Holtzman, A. & Zettlemoyer, L. (2023). QLoRA: Efficient Finetuning of Quantized LLMs. NeurIPS 2023. arXiv:2305.14314.

    [10] Zhang, B., Ghaisas, S. & Hou, S. (2025). On the O(√d/K^{1/4}) Convergence Rate of AdamW Measured by ℓ₁ Norm. arXiv:2505.11840.

    [11] AdamS (2025). Momentum Itself Can Be A Normalizer for LLM Pretraining and Post-training. EMNLP 2025. aclanthology.org/2025.emnlp-main.543.

    [12] Zhao, R., et al. (2024). GaLore: Memory-Efficient LLM Training by Gradient Low-Rank Projection. ICML 2024. arXiv:2403.03507.

    [13] Liu, H., Li, Z., Hall, D., Liang, P. & Ma, T. (2024). Sophia: A Scalable Stochastic Second-order Optimizer for Language Model Pre-training. ICLR 2024. arXiv:2305.14342.

    [14] Kwon, Y., Kim, J., Mahajan, D., et al. (2024). SOAP: Improving and Stabilizing Shampoo using Adam. arXiv:2409.11321.

    [15] Xie, X., Wang, P., Zhu, Z., et al. (2022). Adan: Adaptive Nesterov Momentum Algorithm for Faster Optimizing Deep Models. arXiv:2208.06677.

    [16] Duchi, J., Hazan, E. & Singer, Y. (2011). Adaptive Subgradient Methods for Online Learning and Stochastic Optimization. JMLR 12, 2121–2159.

    [17] Défossez, A., Bottou, L., Bach, F. & Usunier, N. (2022). A Simple Convergence Proof of Adam and Adagrad. TMLR. arXiv:2003.02395.

    [18] Hu, E., Shen, Y., Wallis, P., et al. (2022). LoRA: Low-Rank Adaptation of Large Language Models. ICLR 2022. arXiv:2106.09685.

    [19] Keskar, N. S., Mudigere, D., Nocedal, J., Smelyanskiy, M. & Tang, P. T. P. (2017). On Large-Batch Training for Deep Learning: Generalization Gap and Sharp Minima. ICLR 2017. arXiv:1609.04836.

    [20] Wilson, A. C., Roelofs, R., Stern, M., Srebro, N. & Recht, B. (2017). The Marginal Value of Momentum for Small Learning Rate SGD. NeurIPS 2017. arXiv:1705.08292.

    [21] Zhang, J., Karimireddy, S. P., Veit, A., et al. (2020). Why Are Adaptive Methods Good for Attention Models? NeurIPS 2020. arXiv:1912.03253.

    [22] You, Y., Li, J., Reddi, S., et al. (2020). Large Batch Optimization for Deep Learning: Training BERT in 76 minutes. ICLR 2020. arXiv:1904.00962.

    [23] Zhuang, J., Tang, T., Ding, Y., et al. (2020). AdaBelief Optimizer: Adapting Stepsizes by the Belief in Observed Gradients. NeurIPS 2020. arXiv:2010.07468.

    [24] Chen, X., Liu, S., Sun, R. & Hong, M. (2019). On the Convergence of A Class of Adam-Type Algorithms for Non-Convex Optimization. ICLR 2019. arXiv:1808.02941.

    [25] Zhao, R., et al. (2024). Adapprox: Adaptive Approximation in Adam Optimization via Randomized Low-Rank Matrices. arXiv:2403.14958.

    [26] Dettmers, T. & Zettlemoyer, L. (2023). The Case for 4-bit Precision: k-bit Inference Scaling Laws. ICML 2023. arXiv:2212.09720.

- ### Provenance
  - sources:: Kingma & Ba (2014) arXiv:1412.6980; Loshchilov & Hutter (2017) arXiv:1711.05101; Reddi et al. (2018) ICLR openreview.net/pdf?id=ryQu7f-RZ; Dettmers et al. (2022) arXiv:2110.02861; Jordan et al. (2024) arXiv:2502.16982; Zhang et al. (2025) arXiv:2505.11840; AdamS EMNLP 2025 aclanthology.org/2025.emnlp-main.543/; PyTorch Muon blog pytorch.org/blog/using-muon-optimizer-with-deepspeed/
  - migration-date:: 2026-06-20T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm