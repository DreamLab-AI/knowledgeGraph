public:: true
alias:: Cross Entropy Loss

# Cross-Entropy Loss
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cross-entropy-loss",
  "@type": "Page",
  "vc:slug": "cross-entropy-loss",
  "title": "Cross-Entropy Loss",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:owl:class:loss-function", "vc:label": "Loss Function"},
    {"@id": "urn:visionflow:owl:class:backpropagation", "vc:label": "Backpropagation"},
    {"@id": "urn:visionflow:owl:class:gradient-descent", "vc:label": "Gradient Descent"},
    {"@id": "urn:visionflow:owl:class:supervised-learning", "vc:label": "Supervised Learning"},
    {"@id": "urn:visionflow:owl:class:language-modeling", "vc:label": "Language Modeling"},
    {"@id": "urn:visionflow:owl:class:transformer", "vc:label": "Transformer"},
    {"@id": "urn:visionflow:owl:class:large-language-models", "vc:label": "Large Language Models"},
    {"@id": "urn:visionflow:owl:class:softmax-function", "vc:label": "Softmax Function"},
    {"@id": "urn:visionflow:owl:class:neural-network", "vc:label": "Neural Network"},
    {"@id": "urn:visionflow:owl:class:deep-learning", "vc:label": "Deep Learning"},
    {"@id": "urn:visionflow:owl:class:natural-language-processing", "vc:label": "Natural Language Processing"},
    {"@id": "urn:visionflow:owl:class:model-training", "vc:label": "Model Training"},
    {"@id": "urn:visionflow:owl:class:kl-divergence", "vc:label": "KL Divergence"},
    {"@id": "urn:visionflow:owl:class:information-theory", "vc:label": "Information Theory"},
    {"@id": "urn:visionflow:owl:class:activation-function", "vc:label": "Activation Function"},
    {"@id": "urn:visionflow:owl:class:stochastic-gradient-descent", "vc:label": "Stochastic Gradient Descent"},
    {"@id": "urn:visionflow:owl:class:label-smoothing", "vc:label": "Label Smoothing"},
    {"@id": "urn:visionflow:owl:class:focal-loss", "vc:label": "Focal Loss"},
    {"@id": "urn:visionflow:owl:class:direct-preference-optimisation", "vc:label": "Direct Preference Optimisation"},
    {"@id": "urn:visionflow:owl:class:reinforcement-learning-from-human-feedback", "vc:label": "Reinforcement Learning from Human Feedback"},
    {"@id": "urn:visionflow:owl:class:mean-squared-error", "vc:label": "Mean Squared Error"},
    {"@id": "urn:visionflow:owl:class:contrastive-loss", "vc:label": "Contrastive Loss"},
    {"@id": "urn:visionflow:owl:class:maximum-likelihood-estimation", "vc:label": "Maximum Likelihood Estimation"},
    {"@id": "urn:visionflow:owl:class:perplexity", "vc:label": "Perplexity"},
    {"@id": "urn:visionflow:owl:class:token-prediction", "vc:label": "Token Prediction"},
    {"@id": "urn:visionflow:owl:class:convolutional-neural-network", "vc:label": "Convolutional Neural Network"},
    {"@id": "urn:visionflow:owl:class:attention-mechanism", "vc:label": "Attention Mechanism"},
    {"@id": "urn:visionflow:owl:class:fine-tuning", "vc:label": "Fine-Tuning"}
  ],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:cross-entropy-loss",
  "@type": "Class",
  "label": "Cross-Entropy Loss",
  "definition": "Cross-entropy loss is a differentiable scalar objective function that measures the dissimilarity between a model's predicted probability distribution and the true label distribution, computed as the negative log-likelihood of the correct class under the model's output. It is the canonical training objective for classification tasks and language modelling, directly optimising the model to assign maximum probability mass to correct outputs. Minimising cross-entropy is equivalent to maximising the likelihood of the training data under the model's parameterised distribution.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:loss-function", "label": "Loss Function"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:backpropagation", "label": "Backpropagation"},
      {"@id": "urn:ngm:class:gradient-descent", "label": "Gradient Descent"},
      {"@id": "urn:ngm:class:softmax-function", "label": "Softmax Function"},
      {"@id": "urn:ngm:class:maximum-likelihood-estimation", "label": "Maximum Likelihood Estimation"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:language-modeling", "label": "Language Modeling"},
      {"@id": "urn:ngm:class:supervised-learning", "label": "Supervised Learning"},
      {"@id": "urn:ngm:class:model-training", "label": "Model Training"},
      {"@id": "urn:ngm:class:fine-tuning", "label": "Fine-Tuning"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:transformer", "label": "Transformer"},
      {"@id": "urn:ngm:class:large-language-models", "label": "Large Language Models"},
      {"@id": "urn:ngm:class:kl-divergence", "label": "KL Divergence"},
      {"@id": "urn:ngm:class:information-theory", "label": "Information Theory"},
      {"@id": "urn:ngm:class:perplexity", "label": "Perplexity"},
      {"@id": "urn:ngm:class:direct-preference-optimisation", "label": "Direct Preference Optimisation"},
      {"@id": "urn:ngm:class:reinforcement-learning-from-human-feedback", "label": "Reinforcement Learning from Human Feedback"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:mean-squared-error", "label": "Mean Squared Error"},
      {"@id": "urn:ngm:class:contrastive-loss", "label": "Contrastive Loss"},
      {"@id": "urn:ngm:class:focal-loss", "label": "Focal Loss"}
    ]
  },
  "quality": 0.90,
  "provenance": {
    "attributedTo": "did:nostr:enrichment-swarm",
    "generatedAt": "2026-06-21T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - [[Cross-Entropy Loss]] is the canonical differentiable scalar objective function of [[Deep Learning]] that quantifies the dissimilarity between a model's predicted probability distribution and the true label distribution by computing the negative log-likelihood of the correct output class under the model's [[Softmax Function]]-normalised predictions. Rooted in Claude Shannon's 1948 [[Information Theory]], cross-entropy H(p, q) measures the average number of bits required to encode events drawn from the true distribution p using a code optimised for the approximate distribution q: when the model's distribution q matches the data distribution p perfectly, cross-entropy equals the entropy H(p), and any deviation increases it. Minimising cross-entropy during [[Model Training]] is mathematically equivalent to [[Maximum Likelihood Estimation]] of the model parameters given the training data, and to minimising the [[KL Divergence]] between the empirical data distribution and the model distribution. For classification with C classes, the per-sample loss is -∑ᵢ yᵢ log(p̂ᵢ), where yᵢ is the one-hot ground-truth vector and p̂ᵢ is the model's predicted probability for class i. For [[Language Modeling]] in [[Transformer]] architectures, the loss is the negative log-probability of the next token drawn from the model's vocabulary distribution, averaged across sequence positions. [[Perplexity]] — the exponential of the average cross-entropy — is the standard evaluation metric for language models. The gradient of cross-entropy with respect to pre-softmax logits has the unusually clean form (p̂ − y), the difference between predicted and true distributions, enabling numerically stable [[Backpropagation]] through [[Stochastic Gradient Descent]] optimisers including Adam. Variants such as [[Label Smoothing]] soften one-hot targets to improve calibration; [[Focal Loss]] down-weights easy examples to address class imbalance; and [[Direct Preference Optimisation]] reformulates alignment preference learning as a modified binary cross-entropy objective over chosen and rejected response pairs. Cross-entropy loss underpins pre-training and [[Fine-Tuning]] of virtually every [[Large Language Models]], [[Convolutional Neural Network]], and multi-modal [[Neural Network]] in contemporary [[Natural Language Processing]], vision, and speech.

- ### Semantic Classification
  - owl-class:: ai:CrossEntropyLoss
  - owl-role:: MathematicalConcept
  - owl-inferred:: ai:ObjectiveFunction, ai:DifferentiableScalar, ai:ProbabilisticLoss
  - belongs-to-domain:: [[AI-GroundedDomain]]
  - implemented-in-layer:: [[AlgorithmLayer]]

- ### Relationships
  - is-subclass-of:: [[Loss Function]], [[Maximum Likelihood Estimation]]
  - has-part:: [[Softmax Function]], [[KL Divergence]], [[Negative Log-Likelihood]]
  - requires:: [[Backpropagation]], [[Gradient Descent]], [[Softmax Function]], [[Neural Network]]
  - enables:: [[Language Modeling]], [[Supervised Learning]], [[Model Training]], [[Fine-Tuning]], [[Deep Learning]]
  - implements:: [[Maximum Likelihood Estimation]], [[Information Theory]]
  - depends-on:: [[Backpropagation]], [[Stochastic Gradient Descent]], [[Activation Function]]
  - supports:: [[Transformer]], [[Large Language Models]], [[Convolutional Neural Network]], [[Natural Language Processing]]
  - uses:: [[Softmax Function]], [[Maximum Likelihood Estimation]], [[Backpropagation]], [[Gradient Descent]]
  - contrasts-with:: [[Mean Squared Error]], [[Focal Loss]], [[Contrastive Loss]], [[Hinge Loss]]
  - related-to:: [[KL Divergence]], [[Information Theory]], [[Perplexity]], [[Direct Preference Optimisation]], [[Reinforcement Learning from Human Feedback]], [[Label Smoothing]]
  - standardized-by:: [[IEEE]], [[NIST]]

- ### Content
  ## Compositional Relationships (Components)
  ```
  SubClassOf(ai:CrossEntropyLoss
    ObjectSomeValuesFrom(ai:hasPart ai:SoftmaxFunction))
  SubClassOf(ai:CrossEntropyLoss
    ObjectSomeValuesFrom(ai:hasPart ai:NegativeLogLikelihood))
  SubClassOf(ai:CrossEntropyLoss
    ObjectSomeValuesFrom(ai:hasPart ai:KLDivergence))
  SubClassOf(ai:CrossEntropyLoss
    ObjectSomeValuesFrom(ai:hasPart ai:ProbabilityDistribution))
  SubClassOf(ai:CrossEntropyLoss
    ObjectSomeValuesFrom(ai:hasPart ai:OneHotEncoding))
  SubClassOf(ai:CrossEntropyLoss
    ObjectSomeValuesFrom(ai:hasPart ai:LogSumExpNumericalStabilisation))
  SubClassOf(ai:CrossEntropyLoss
    ObjectSomeValuesFrom(ai:hasPart ai:GradientComputationHead))
  ```
  ## Dependency Relationships
  ```
  SubClassOf(ai:CrossEntropyLoss
    ObjectSomeValuesFrom(ai:requires ai:Backpropagation))
  SubClassOf(ai:CrossEntropyLoss
    ObjectSomeValuesFrom(ai:requires ai:GradientDescent))
  SubClassOf(ai:CrossEntropyLoss
    ObjectSomeValuesFrom(ai:requires ai:SoftmaxFunction))
  SubClassOf(ai:CrossEntropyLoss
    ObjectSomeValuesFrom(ai:dependsOn ai:NeuralNetwork))
  SubClassOf(ai:CrossEntropyLoss
    ObjectSomeValuesFrom(ai:dependsOn ai:ActivationFunction))
  SubClassOf(ai:CrossEntropyLoss
    ObjectSomeValuesFrom(ai:dependsOn ai:TrainingDataDistribution))
  SubClassOf(ai:CrossEntropyLoss
    ObjectSomeValuesFrom(ai:dependsOn ai:StochasticGradientDescent))
  ```
  ## Capability Relationships
  ```
  SubClassOf(ai:CrossEntropyLoss
    ObjectSomeValuesFrom(ai:enables ai:LanguageModeling))
  SubClassOf(ai:CrossEntropyLoss
    ObjectSomeValuesFrom(ai:enables ai:SupervisedLearning))
  SubClassOf(ai:CrossEntropyLoss
    ObjectSomeValuesFrom(ai:enables ai:ModelTraining))
  SubClassOf(ai:CrossEntropyLoss
    ObjectSomeValuesFrom(ai:enables ai:FineTuning))
  SubClassOf(ai:CrossEntropyLoss
    ObjectSomeValuesFrom(ai:enables ai:ModelCalibration))
  SubClassOf(ai:CrossEntropyLoss
    ObjectSomeValuesFrom(ai:enables ai:KnowledgeDistillation))
  SubClassOf(ai:CrossEntropyLoss
    ObjectSomeValuesFrom(ai:supports ai:Transformer))
  SubClassOf(ai:CrossEntropyLoss
    ObjectSomeValuesFrom(ai:supports ai:LargeLanguageModels))
  SubClassOf(ai:CrossEntropyLoss
    ObjectSomeValuesFrom(ai:supports ai:ConvolutionalNeuralNetwork))
  SubClassOf(ai:CrossEntropyLoss
    ObjectSomeValuesFrom(ai:supports ai:DirectPreferenceOptimisation))
  ```
  ## Implementation Relationships
  ```
  SubClassOf(ai:CrossEntropyLoss
    ObjectSomeValuesFrom(ai:implements ai:MaximumLikelihoodEstimation))
  SubClassOf(ai:CrossEntropyLoss
    ObjectSomeValuesFrom(ai:implements ai:InformationTheory))
  SubClassOf(ai:CrossEntropyLoss
    ObjectSomeValuesFrom(ai:implements ai:ProperScoringRule))
  SubClassOf(ai:CrossEntropyLoss
    ObjectSomeValuesFrom(ai:uses ai:SoftmaxFunction))
  SubClassOf(ai:CrossEntropyLoss
    ObjectSomeValuesFrom(ai:uses ai:Backpropagation))
  SubClassOf(ai:CrossEntropyLoss
    ObjectSomeValuesFrom(ai:uses ai:GradientDescent))
  SubClassOf(ai:CrossEntropyLoss
    ObjectSomeValuesFrom(ai:uses ai:LogSumExpTrick))
  ```
  ## Reduction Relationships
  ```
  SubClassOf(ai:CrossEntropyLoss
    ObjectSomeValuesFrom(ai:reducesTo ai:BinaryCrossEntropyLoss))
  SubClassOf(ai:CrossEntropyLoss
    ObjectSomeValuesFrom(ai:reducesTo ai:NegativeLogLikelihood))
  SubClassOf(ai:CrossEntropyLoss
    ObjectSomeValuesFrom(ai:reducesTo ai:KLDivergenceMinimisation))
  SubClassOf(ai:CrossEntropyLoss
    ObjectSomeValuesFrom(ai:reducesTo ai:LabelSmoothedCrossEntropy))
  SubClassOf(ai:CrossEntropyLoss
    ObjectSomeValuesFrom(ai:reducesTo ai:FocalLoss))
  ```

  ## About
  Cross-entropy loss occupies a foundational position in machine learning that is simultaneously mathematical, statistical, and algorithmic. Mathematically it derives from [[Information Theory]]: Shannon's entropy H(p) = -∑ p(x) log p(x) measures the irreducible uncertainty in a distribution p, while cross-entropy H(p, q) = -∑ p(x) log q(x) measures the additional bits required when encoding draws from p using a code designed for q. The gap H(p, q) - H(p) is the [[KL Divergence]] D_KL(p || q), which is non-negative and zero only when p = q. Minimising cross-entropy is therefore precisely minimising KL divergence to the true data distribution, providing a theoretically principled objective. Statistically, minimising cross-entropy over a dataset is identical to [[Maximum Likelihood Estimation]]: the log-likelihood of observations under the model is -N·H(p̂, p_data), so gradient ascent on log-likelihood equals gradient descent on cross-entropy. This duality links cross-entropy to frequentist statistics, Bayesian inference (where the log-likelihood is the data term in the posterior), and information-theoretic model selection (cross-entropy is the basis of AIC and BIC criteria).

  The algorithmic attractiveness of cross-entropy rests on two properties of its gradient. First, the gradient with respect to the pre-softmax logits zᵢ is simply (p̂ᵢ − yᵢ), the difference between predicted and one-hot true probability for class i. This eliminates the Jacobian of the [[Softmax Function]] from the [[Backpropagation]] chain, making the backward pass efficient and numerically stable. Second, the gradient scales with prediction error: when the model is confident and correct, the gradient is near zero; when it is confident and wrong, the gradient is large, providing a strong corrective signal. By contrast, the mean squared error (MSE) loss applied to probabilities suffers from gradient saturation when predictions are near zero or one, because the derivative of the sigmoid approaches zero in those regions. Cross-entropy's use of the logarithm avoids this saturation, making it far better conditioned for [[Deep Learning]] training than MSE for classification problems.

  The dominance of cross-entropy as a training objective should be understood in the context of competing objectives that were evaluated and largely superseded. In the early neural network era (1980s–1990s), mean squared error was the default loss even for classification tasks, because the connection between neural network outputs and probabilities was not yet canonical. The seminal contribution of Rumelhart, Hinton, and Williams (1986) used MSE with the chain rule of calculus ([[Backpropagation]]) to demonstrate that multi-layer networks could learn useful representations, but the choice of loss function was not yet theoretically grounded. It was the probabilistic interpretation of neural network outputs — viewing the softmax-normalised output as a categorical probability distribution — that established cross-entropy as the theoretically motivated choice. This interpretation, formalised in Bishop's 1995 "Neural Networks for Pattern Recognition" and made mainstream by Goodfellow, Bengio, and Courville's 2016 textbook, grounds cross-entropy loss in [[Maximum Likelihood Estimation]], connecting it to the entire Bayesian probabilistic modelling tradition.

  For language modelling specifically, cross-entropy plays a dual role: it is both the training objective and the primary evaluation metric (via [[Perplexity]]). In autoregressive [[Transformer]] language models, the training procedure is teacher-forced next-token prediction: at each position t in a sequence, the model receives the true preceding tokens w₁, ..., wₜ₋₁ as input and computes a probability distribution over the vocabulary V. The cross-entropy loss at position t is -log P(wₜ | w₁, ..., wₜ₋₁; θ), and the total sequence loss is the average over all positions. This formulation has a clean information-theoretic interpretation: the per-token cross-entropy is the number of bits required by the model to encode the next token, given the context; lower perplexity (exp(cross-entropy)) means the model is more concentrated on the correct next token, having effectively learned the statistical regularities of the language. Pre-training [[Large Language Models]] such as GPT-4, LLaMA 3, and Gemini 1.5 on cross-entropy over trillions of tokens produces emergent capabilities — in-context learning, chain-of-thought reasoning, instruction-following — that were not explicitly trained but arise from the statistical structure captured by the cross-entropy objective at scale.

  The connection between cross-entropy minimisation and the behaviour of attention mechanisms in [[Transformer]] architectures merits emphasis. In a transformer language model, each forward pass computes cross-entropy loss at every token position by comparing the model's predicted probability distribution (after softmax) with the one-hot target label. [[Backpropagation]] of this loss through the softmax and attention layers produces gradient signals that train the [[Attention Mechanism]] to weight informative context tokens more strongly, the feed-forward layers to store factual associations in their weight matrices, and the positional encoding to represent sequence order information. The cross-entropy loss is thus the sole training signal responsible for shaping every learned component of a [[Large Language Models]] during pre-training — the attention heads, the value projections, the MLP layers, and the output embedding matrix all receive gradient information exclusively through the cross-entropy gradient flow. This makes cross-entropy not merely a loss function but the architectural training signal that determines the emergent computational structure of modern [[Deep Learning]] systems.

  ## Formal Analysis
  For a C-class classification problem, given logit vector z ∈ ℝᶜ and one-hot label y:

  - Softmax: p̂ᵢ = exp(zᵢ) / ∑ⱼ exp(zⱼ)
  - Cross-entropy: L = -∑ᵢ yᵢ log(p̂ᵢ) = -log(p̂_y) (where y is the true class index)
  - Gradient: ∂L/∂zᵢ = p̂ᵢ - yᵢ
  - For language modelling over vocabulary V, at position t: Lₜ = -log(p̂(wₜ | w₁, ..., wₜ₋₁))
  - Per-sequence loss: L = -(1/T) ∑ₜ log p̂(wₜ | w<ₜ)
  - Perplexity: PPL = exp(L) — interpretable as effective branching factor

  Numerical stability requires the log-sum-exp trick: compute log p̂_y = z_y - log ∑ⱼ exp(zⱼ) by subtracting max(z) from all logits before exponentiation to prevent overflow. PyTorch's `F.cross_entropy` fuses softmax and log in a single numerically stable kernel operating on raw logits, avoiding the instability of applying `log(softmax(logits))` sequentially.

  ## Major Variants
  - **Binary Cross-Entropy (BCE)**: For binary classification, reduces to L = -[y log p̂ + (1 - y) log(1 - p̂)]. Used with sigmoid activation rather than softmax; common in multi-label classification where classes are independent.
  - **[[Label Smoothing]]**: Replaces one-hot targets yᵢ with smoothed targets ỹᵢ = (1 - ε)yᵢ + ε/C, where ε ∈ [0.1, 0.2] is the smoothing factor. Prevents overconfident predictions, improves calibration, and consistently improves downstream task performance. Used in the original [[Transformer]] paper (Vaswani et al., 2017), where ε = 0.1 improved BLEU by approximately 0.1 points. A 2025 study (arXiv 2402.03979) analyses label smoothing through the neural collapse lens, finding it prevents premature convergence to maximum-margin solutions.
  - **[[Focal Loss]]**: L_focal = -(1 - p̂_y)^γ log(p̂_y), where γ > 0 is the focusing parameter. Down-weights easy examples (high p̂_y) and up-weights hard examples, addressing class imbalance in object detection (Lin et al., 2017). A UK Cambridge study extended focal loss to medical image segmentation via the Unified Focal Loss, generalising both Dice and cross-entropy-based losses for class-imbalanced settings (Yeung et al., 2022).
  - **Token-Weighted Cross-Entropy**: Assigns differential weights to tokens during [[Language Modeling]] pre-training or fine-tuning. Instruction-following fine-tuning typically masks loss on the prompt tokens and computes loss only on the completion tokens. Data-quality weighting downweights tokens from lower-quality data sources.
  - **[[Direct Preference Optimisation]] (DPO)**: Reformulates RLHF preference alignment as a modified binary cross-entropy: L_DPO = -log σ(β [log(π_θ(y_w|x)/π_ref(y_w|x)) - log(π_θ(y_l|x)/π_ref(y_l|x))]), where y_w is the preferred response, y_l is the rejected response, and β controls the deviation from the reference policy. DPO optimises a cross-entropy objective over implicit reward differences without training a separate reward model.
  - **Calibrated Cross-Entropy / Temperature Scaling**: Post-hoc or in-training temperature parameter T scales logits before softmax: p̂ᵢ = exp(zᵢ/T) / ∑ⱼ exp(zⱼ/T). T > 1 softens predictions (useful for distillation), T < 1 sharpens them.

  ## Use Cases and Applications
  - **Language Model Pre-training**: Every autoregressive [[Large Language Models]] — GPT series, LLaMA, Mistral, Qwen — trains with next-token prediction cross-entropy as the sole pre-training objective. At scale, minimising cross-entropy on diverse text corpora produces emergent capabilities including reasoning, coding, and instruction-following. The Chinchilla scaling law paper established that cross-entropy loss on held-out text is the primary signal for determining compute-optimal training runs.
  - **Multi-class Classification ([[Convolutional Neural Network]], Vision Transformers)**: Image classification (ImageNet top-1 accuracy training, from AlexNet through ViT-22B), speech recognition (ASR token classification), sentiment analysis, and named entity recognition all use categorical cross-entropy as the training objective. The numerical gradient properties of cross-entropy — in particular the (p̂ − y) gradient formula — make it far more stable than MSE for high-dimensional probability outputs.
  - **Sequence-to-Sequence Tasks**: Machine translation, abstractive summarisation, and code generation use token-level cross-entropy averaged over output positions, with the teacher-forcing paradigm during training. Mixed teacher-forcing and scheduled sampling schedules are used to mitigate exposure bias — the distributional shift between training (where gold tokens are fed as context) and inference (where model-generated tokens are the context).
  - **[[Fine-Tuning]] for Instruction Following**: Supervised fine-tuning (SFT) of LLMs on curated instruction-response pairs uses cross-entropy on completion tokens to steer model behaviour toward desired response styles and formats. Prompt tokens are masked (weight = 0 in the loss) so the model only receives gradient signal on the response tokens, preventing the model from memorising input formats at the expense of generalising response quality.
  - **[[Reinforcement Learning from Human Feedback]]**: The SFT phase of RLHF training uses standard cross-entropy; the reward model training uses a pairwise cross-entropy ranking loss; DPO uses a modified binary cross-entropy to replace the RL policy optimisation phase entirely, making RLHF accessible without a separate reward model training and PPO optimisation loop.
  - **Cross-Encoder Reranking Training**: Relevance scoring models for [[Information Retrieval]] are trained with binary cross-entropy on positive and negative query-document pairs, or with listwise softmax cross-entropy over ranked passage candidates. The choice of cross-entropy variant (pointwise binary vs. pairwise vs. listwise) measurably affects ranking quality, with listwise objectives typically producing 1–2 NDCG points higher than pointwise on MS MARCO.
  - **Distillation and Model Compression**: [[Knowledge Distillation]] transfers the soft label distribution of a teacher model to a student via KL divergence — equivalent to cross-entropy between the teacher's temperature-softened probabilities and student predictions, combined with a standard cross-entropy term on hard labels. The student receives richer gradient information from the soft distribution (which encodes the teacher's uncertainty and similarity structure among classes) than from hard one-hot labels alone.
  - **Multi-modal Training**: Vision-language models (CLIP, LLaVA, GPT-4V) use cross-entropy variants adapted for joint image-text prediction: CLIP uses a symmetric contrastive cross-entropy (InfoNCE) loss over image-text pairs; generative VLMs extend the autoregressive cross-entropy loss to token sequences that include image patch embeddings interleaved with text tokens.
  - **Calibration and Uncertainty Quantification**: Cross-entropy loss, when minimised with appropriate regularisation (label smoothing, temperature scaling), produces well-calibrated models whose predicted probabilities accurately reflect empirical accuracy frequencies. Post-training calibration methods (Platt scaling, temperature scaling) directly adjust the cross-entropy landscape to correct overconfident or underconfident predictions.

  ## Relationship to Optimisation
  Cross-entropy loss is not merely a measurement device — it actively shapes the optimisation landscape that [[Gradient Descent]] and [[Stochastic Gradient Descent]] must navigate. The loss surface of cross-entropy combined with softmax is convex with respect to the logits when the model has no hidden layers, and while it is non-convex for deep networks, it exhibits benign properties in high-dimensional parameter spaces that make it amenable to first-order optimisation:

  - **Gradient magnitude**: The gradient ∂L/∂z = p̂ − y has infinity-norm bounded by 1, meaning no gradient clipping is required for the loss computation itself. This contrasts with MSE regression losses, which can produce arbitrarily large gradients.
  - **Implicit regularisation**: Stochastic gradient descent on cross-entropy implicitly regularises the model toward max-entropy predictions on uncertain examples, because the logarithm in the loss strongly penalises zero-probability predictions. This prevents the model from assigning zero probability to any class, which would cause infinite loss.
  - **Learning rate sensitivity**: Cross-entropy is sensitive to learning rate schedules because the log function compresses large probability differences. Adaptive optimisers (Adam, AdamW) are preferred over vanilla SGD for cross-entropy training because they adaptively scale the effective learning rate per-parameter, compensating for the non-uniform curvature of the loss landscape.
  - **Minima geometry**: Recent theoretical work (neural collapse literature, Papyan et al. 2020) shows that training a deep network with cross-entropy to convergence produces a highly structured solution where the penultimate-layer class representations collapse to the vertices of a simplex equiangular tight frame (ETF) — a maximally separated arrangement. This geometric structure is not explicitly enforced by the loss but emerges as the optimal solution of cross-entropy minimisation with weight decay.

  [[Backpropagation]] of cross-entropy gradients through transformer layers exhibits a particular numerical challenge at scale: when vocabulary sizes reach 100,000–200,000 tokens and batch sizes are large, computing the full softmax over the vocabulary requires materialising an O(batch_size × sequence_length × vocabulary_size) tensor in GPU memory, which at BF16 precision and batch=512, sequence=2048, vocabulary=128k would require over 64 GB — exceeding the memory of any single GPU. Chunked cross-entropy (computing the loss in vocabulary-dimension chunks), Flash-loss (fused CUDA softmax+log+indexing), and Liger Kernel (Triton-based) solve this by streaming the vocabulary dimension, reducing peak memory by 30–60% with no loss in numerical accuracy.

  ## Formal Analysis
  For a C-class classification problem, given logit vector z ∈ ℝ^C and one-hot label y:

  - **Softmax normalisation**: p̂ᵢ = exp(zᵢ) / ∑ⱼ exp(zⱼ), ensuring ∑ p̂ᵢ = 1, p̂ᵢ ∈ (0, 1)
  - **Cross-entropy loss**: L = -∑ᵢ yᵢ log p̂ᵢ = -log p̂_c (where c is the true class)
  - **Gradient**: ∂L/∂zᵢ = p̂ᵢ - yᵢ (simplification via chain rule cancelling softmax Jacobian)
  - **Hessian**: ∂²L/∂zᵢ∂zⱼ = p̂ᵢ(δᵢⱼ - p̂ⱼ), where δᵢⱼ is the Kronecker delta. The Hessian is positive semi-definite, confirming convexity in the logit space.

  For language modelling with vocabulary V at position t:

  - **Per-token loss**: Lₜ = -log p̂(wₜ | w₁, ..., wₜ₋₁; θ) = -log softmax(Wₑ hₜ)_{wₜ}
  - **Sequence loss**: L = (1/T) ∑ₜ Lₜ (uniform token weighting)
  - **Perplexity**: PPL = exp(L) = exp(-(1/T) ∑ₜ log p̂(wₜ | w<ₜ))
  - **Calibration**: A perfectly calibrated model satisfies E[y | p̂(y=1) = p] = p for all p ∈ [0, 1]; cross-entropy with [[Label Smoothing]] improves calibration by preventing overconfident predictions.

  The log-sum-exp stabilisation is critical in practice:

  log(∑ⱼ exp(zⱼ)) = max(z) + log(∑ⱼ exp(zⱼ - max(z)))

  Subtracting max(z) before exponentiation prevents numerical overflow without changing the result. PyTorch's F.cross_entropy and the Liger/Triton Flash-loss kernels implement this internally, but naive implementations (e.g., applying torch.log(torch.softmax(...)) separately) risk numerical errors especially in BF16 arithmetic.

  The connection to [[KL Divergence]] completes the formal picture:

  H(p, q) = H(p) + D_KL(p || q)

  Since H(p) is constant with respect to model parameters θ when the true data distribution p is fixed, minimising H(p, q) over θ is equivalent to minimising D_KL(p || q) — i.e., minimising the information-theoretic divergence between model and data distribution. This grounding makes cross-entropy the uniquely theoretically justified objective for density estimation from labelled data under the [[Maximum Likelihood Estimation]] framework.

  ## Academic Context
  The information-theoretic foundation was laid by Shannon (1948), "A Mathematical Theory of Communication," Bell System Technical Journal, which introduced entropy, mutual information, and channel capacity. The connection to maximum likelihood was formalised in the statistical learning literature; Vapnik's statistical learning theory and the PAC learning framework contextualised empirical risk minimisation (of which cross-entropy minimisation is an instance) within sample complexity bounds. Rumelhart, Hinton, and Williams (1986) "Learning representations by back-propagating errors" (Nature) established [[Backpropagation]] as the mechanism for computing cross-entropy gradients efficiently, triggering the modern deep learning era. LeCun et al. (1989) applied cross-entropy with [[Convolutional Neural Network]] architectures to handwritten digit recognition. The [[Transformer]] paper (Vaswani et al., 2017) canonicalised cross-entropy with [[Label Smoothing]] for sequence modelling. The GPT series (Radford et al., 2018–2019; Brown et al., 2020) demonstrated that scaling cross-entropy language model pre-training yields emergent few-shot capabilities. The Chinchilla paper (Hoffmann et al., 2022) established compute-optimal training laws in terms of cross-entropy loss as a function of model parameters and training tokens.

  The neural collapse phenomenon (Papyan, Han, Donoho, 2020) revealed that minimising cross-entropy with weight decay to convergence in sufficiently overparameterised networks produces a highly structured solution: within-class variability of the penultimate-layer representations collapses to zero (neural collapse), and the class mean embeddings converge to the vertices of a simplex ETF — the most spread-apart configuration possible in the embedding space. This result connects cross-entropy minimisation to optimal coding theory and has implications for understanding the geometry of fine-tuned representation spaces in [[Large Language Models]]. The 2025 paper "Cross Entropy versus Label Smoothing: A Neural Collapse Perspective" (Hong et al., arXiv 2402.03979) extends these results to label-smoothed objectives, showing that label smoothing prevents complete collapse and maintains a more generalisation-friendly representation geometry.

  The Direct Preference Optimisation (DPO) paper (Rafailov et al., 2023) was particularly important for extending cross-entropy to alignment: by deriving a closed-form connection between the optimal RLHF policy and a binary cross-entropy loss over preference pairs, DPO eliminated the need for separate reward model training and PPO optimisation while achieving comparable alignment results. The DPO loss has the form L_DPO = -log σ(β [log r_θ(y_w|x) - log r_θ(y_l|x)]), where r_θ(y|x) = π_θ(y|x)/π_ref(y|x) is the implicit reward ratio. This can be optimised with standard cross-entropy backpropagation through the policy network, making alignment accessible with the same training infrastructure as SFT.

  ## Training at Scale: Practical Considerations
  Cross-entropy loss presents several practical challenges at the scale of modern LLM pre-training that have driven significant engineering innovation:

  **Vocabulary size and memory**: Modern multilingual [[Large Language Models]] use vocabularies of 100,000–250,000 tokens. Computing the full softmax and cross-entropy loss over these vocabularies requires materialising an output logit tensor of shape (batch_size × sequence_length × vocabulary_size). At BF16 precision with batch_size=512, sequence_length=2048, vocabulary_size=128,000, this tensor alone requires approximately 67 GB — exceeding the memory of any single GPU. Chunked cross-entropy (computing the loss in vocabulary-dimension chunks of 4,096–8,192 tokens at a time and accumulating gradients) and fused log-softmax kernels (Liger Kernel, Triton-based) solve this with 30–60% memory reduction at negligible computational cost.

  **Data imbalance and token weighting**: In instruction fine-tuning, the prompt tokens (the instruction) are far more numerous than the completion tokens (the desired response), yet the training signal for instruction-following comes entirely from the completion. Standard cross-entropy averaging over all tokens dilutes the response-generation signal with noise from prompt tokens. Masking prompt token losses (setting their weight to 0) and computing cross-entropy only over completion tokens substantially improves instruction-following quality with no degradation on other tasks. For pre-training data mixtures, per-domain loss weighting (upweighting high-quality data sources like textbooks and Wikipedia relative to web-crawl data) improves data efficiency.

  **Mixed precision and numerical stability**: Transition from FP16 to BF16 mixed precision (now standard in all major training frameworks: PyTorch, JAX, DeepSpeed) significantly reduces cross-entropy numerical stability issues. FP16 has a maximum representable value of 65,504, causing softmax overflow for logit vectors with max values above approximately 11. BF16's wider dynamic range (exponent range equivalent to FP32) prevents this overflow. The log-sum-exp stabilisation trick (subtracting the maximum logit before exponentiation) provides an additional safeguard. Fused cross-entropy implementations that operate on raw logits without materialising the softmax probabilities avoid representational precision loss from the double-conversion (logit → prob → log-prob).

  **Gradient accumulation and large batch training**: Cross-entropy's well-behaved gradients (bounded infinity-norm ≤ 1) make it compatible with large-batch training via gradient accumulation without requiring per-step loss scaling. This contrasts with some generative objectives where gradient magnitudes vary significantly across batches, requiring adaptive loss scaling. The Adam/AdamW optimisers' adaptive learning rates compensate for the non-uniform curvature of the cross-entropy loss landscape, making them significantly more robust than vanilla [[Stochastic Gradient Descent]] for cross-entropy objectives.

  **Long-sequence challenges**: For long-context models with sequence lengths of 32k–128k tokens, the cross-entropy computation over the full sequence is dominated by the final linear projection (vocabulary head) rather than attention, since attention is O(L²) and vocabulary projection is O(L × V). Sequence parallelism (distributing the token dimension across GPUs) and tensor parallelism (distributing the vocabulary dimension across GPUs) are required for efficient long-sequence training.

  ## Current Landscape (2026)
  By mid-2026, cross-entropy loss remains the dominant training objective across virtually all [[Large Language Models]] and deep classification systems. Key developments:
  - **Alignment integration**: DPO and its variants (ORPO, SimPO, SLPO) reformulate preference learning as modified cross-entropy, eliminating separate reward model training for many alignment scenarios. FocalPO (2025) adapts focal loss principles to DPO, down-weighting preference pairs the model already ranks correctly to improve training efficiency.
  - **Efficient implementation at scale**: Chunked cross-entropy (computing loss one vocabulary-chunk at a time to reduce peak memory), Flash-loss (fused CUDA kernels for log-softmax), and Liger Kernel (Triton-based fused cross-entropy) reduce memory usage and training time for large vocabularies (100k–200k tokens) by 30–60%, critical for multilingual models.
  - **BF16 training stability**: The transition from FP16 to BF16 mixed-precision training (standard since 2023 in all major training frameworks) substantially reduces numerical stability issues with cross-entropy. BF16's wider dynamic range prevents the softmax overflow and cross-entropy underflow that plagued FP16 training on long sequences.
  - **Calibration research**: A 2025 study demonstrated that label smoothing is the most effective single intervention for calibrating [[Large Language Models]] without degrading task performance, with ε = 0.05–0.1 being optimal across instruction-following models.
  - **Perplexity as research signal**: Cross-entropy (via perplexity) remains the standard held-out validation metric for language model comparisons. The PALOMA benchmark (2024) standardises perplexity evaluation across diverse text domains to move beyond single-corpus perplexity scores.

  ## UK Context
  The UK has deep roots in the foundational theory underlying cross-entropy loss, spanning from wartime cryptanalysis through modern deep learning research. Alan Turing and colleagues at Bletchley Park during WWII used information-theoretic reasoning (Banburismus, log-weight-of-evidence Bayesian updates) that prefigured Shannon's formal [[Information Theory]], and Shannon himself was inspired by Turing's work during wartime visits. The information-theoretic foundations of cross-entropy thus have a partially British intellectual heritage.

  In contemporary research, UK academic groups contribute significantly to cross-entropy and related objectives:
  - The **University of Cambridge** (Department of Applied Mathematics and Theoretical Physics) produced the Unified Focal Loss paper (Yeung et al., 2022), generalising cross-entropy and Dice loss for class-imbalanced medical image segmentation, with computing resources from the Cambridge Service for Data Driven Discovery (CSD3).
  - **University College London** (Gatsby Computational Neuroscience Unit and the ML Group) has longstanding work on probabilistic modelling and Bayesian perspectives on cross-entropy objectives, including contributions to the theory of variational inference where cross-entropy appears as the reconstruction term in the evidence lower bound (ELBO).
  - **Imperial College London** (Machine Learning group) has published on calibration, uncertainty quantification, and label smoothing in the context of safety-critical classification systems — directly relevant to UK regulatory requirements for AI in healthcare under the UK AI Strategy.
  - **University of Edinburgh** (Institute for Language, Cognition and Computation, ILCC) has published extensively on cross-entropy objectives for neural machine translation and language model evaluation, with work on token-weighting strategies for low-resource language fine-tuning.
  - **Google DeepMind** (London, headquarters at King's Cross): The world's leading AI research laboratory uses cross-entropy objectives throughout the Gemini model family training pipelines. The Chinchilla scaling law paper (Hoffmann et al., 2022) from DeepMind is the canonical reference for compute-optimal cross-entropy language model training, demonstrating that model size and training tokens should scale in proportion for compute-optimal training. AlphaCode (2022) and AlphaCode 2 (2023) use cross-entropy for code generation pre-training, demonstrating that the same objective scales to specialised technical domains.
  - **Stability AI** (formerly London-headquartered): The company behind Stable Diffusion used cross-entropy and diffusion-based ELBO objectives for training generative models; their research into efficient cross-entropy computation for large-vocabulary text generation contributed to open-source training frameworks.
  - **UK Government AI context**: The UK AI Safety Institute (AISI, established 2023, operating from Whitehall) monitors [[Large Language Models]] capabilities using perplexity and cross-entropy-derived metrics as part of frontier model evaluation protocols under the Seoul AI Safety Summit commitments. Perplexity on domain-specific test sets (medical, legal, scientific) is used as a diagnostic metric for capability assessment. NHS AI Lab guidance on foundation model evaluation for clinical use (published 2024) cites perplexity as a primary benchmark signal, recommending evaluation on NHS clinical text corpora prior to deployment in clinical workflows.
  - **Northern England industrial context**: Leeds-based financial services companies (Lloyds Banking Group analytics division, HSBC technology centre) use cross-entropy-trained classifiers for fraud detection, credit risk assessment, and AML (anti-money laundering) transaction classification — applying categorical cross-entropy to structured tabular data classification at scale. Manchester's digital health technology sector (Babylon Health UK operations, AccuRx, DrDoctor) uses cross-entropy-based clinical NLP models for symptom classification, referral triage, and clinical note coding (ICD-10 diagnosis classification). Sheffield Hallam University and University of Sheffield have published joint work on cross-entropy objectives for satellite image classification in support of Northern England environmental monitoring and agriculture applications.

  ## Cross-Entropy Across Training Phases
  Modern LLM training proceeds through multiple phases, each using cross-entropy in a distinct way:

  **Phase 1: Pre-training (next-token cross-entropy on raw text corpora)**
  The model is trained on trillions of tokens from diverse text sources (web crawl, books, code, scientific papers) with a uniform cross-entropy loss averaged across all token positions. The learning rate schedule (linear warmup, cosine decay) and batch size (typically 0.5–4M tokens per batch) are chosen to maintain a consistent cross-entropy loss reduction trajectory. At the end of pre-training, the average cross-entropy on a diverse held-out set is the primary metric: for a 70B parameter model trained on 2 trillion tokens following Chinchilla-optimal ratios, typical pre-training cross-entropy is approximately 1.5–2.0 nats (perplexity 4–7 on general text).

  **Phase 2: Supervised Fine-tuning (SFT)**
  The pre-trained model is fine-tuned on curated instruction-response pairs with cross-entropy computed only on the response tokens (prompt tokens are masked). SFT data quality is more important than quantity: a few thousand high-quality instruction-response pairs often outperform hundreds of thousands of lower-quality examples. The training is typically run for 1–5 epochs at a learning rate 5–50× lower than pre-training, with cross-entropy on the validation SFT set as the stopping criterion. Overfitting to the SFT distribution (validation cross-entropy rising while training cross-entropy falls) indicates that the model is memorising response templates rather than learning generalised instruction-following.

  **Phase 3: Alignment (DPO / RLHF)**
  In RLHF, the SFT model is further fine-tuned using preference data (human judgements of which of two responses is better). The DPO formulation expresses this as a modified binary cross-entropy over the implicit reward difference between preferred and rejected responses, with a KL regularisation term that prevents the model from deviating too far from the SFT reference policy. DPO's cross-entropy objective is:

  L_DPO = -E[log σ(β log(π_θ(y_w|x)/π_ref(y_w|x)) - β log(π_θ(y_l|x)/π_ref(y_l|x)))]

  where π_θ is the model being trained, π_ref is the frozen SFT reference model, β is the KL penalty coefficient, y_w is the preferred response, and y_l is the rejected response. This reduces to optimising cross-entropy over implicit reward differences, with the [[Backpropagation]] identical to standard binary cross-entropy training.

  **Phase 4: Continued pre-training / domain adaptation**
  For specialised domains (medicine, law, code, mathematics), domain-specific continued pre-training on curated corpora using the standard next-token prediction cross-entropy objective improves performance on domain tasks while preserving general capabilities. The learning rate is typically lower than initial pre-training (to prevent catastrophic forgetting), and the domain data mixture is carefully balanced against general text to maintain breadth.

  ## Future Directions (2026–2030)
  - **Beyond next-token prediction**: Masked diffusion language models (MDLMs) optimise a different form of cross-entropy — the expected log-likelihood under a masking schedule — and may supplement or partially replace autoregressive cross-entropy for generation tasks where bidirectional conditioning is beneficial. The theoretical guarantees of the denoising score-matching framework provide a principled alternative to the next-token cross-entropy objective.
  - **Multi-token prediction loss**: Meta's paper "Better and Faster Large Language Models via Multi-Token Prediction" (Gloeckle et al., 2024) trains models to predict n next tokens simultaneously using n independent cross-entropy heads, improving code generation and reasoning with negligible additional compute. Predicting 4 next tokens simultaneously improves reasoning benchmark scores by 10–15% at the same FLOPs budget. This is increasingly adopted in LLM pre-training recipes for 2026.
  - **Distributional cross-entropy**: Rather than one-hot or label-smoothed targets, using full predicted distributions from retrieval systems or knowledge bases as soft targets enables richer supervision signals from external knowledge. Retrieval-augmented supervision (using the retrieved passage's language model probability distribution as a soft target for the generator) is an emerging direction.
  - **Cross-entropy for structured outputs**: Graph-level, tree-level, and hierarchical cross-entropy objectives for structured prediction tasks avoid the per-token decomposition that ignores structural dependencies. Autoregressive code generation with syntax-constrained decoding (enforcing syntactically valid token sequences) is a current application.
  - **Adaptive loss weighting**: Dynamic token-importance weighting (based on model uncertainty, data quality signals, or information density estimates) during pre-training improves sample efficiency, moving beyond uniform cross-entropy averaging across all positions. Tokens from higher-quality data sources or that carry more information (rare words, technical terms) receive higher loss weights.
  - **Neural collapse and loss geometry**: Research into the geometry of the cross-entropy loss surface under large-batch training, gradient noise, and model compression aims to understand why certain models converge to better generalisers. The connection between neural collapse geometry and downstream task performance is an active theoretical research direction.
  - **Efficient long-context cross-entropy**: As context lengths grow to 1M+ tokens, the cross-entropy computation over very long sequences requires new algorithmic approaches. Sparse cross-entropy (computing loss only on a random subsample of positions), importance-weighted cross-entropy (computing full loss on high-uncertainty positions and sparse loss elsewhere), and sequence parallelism techniques are all being developed.

  ## Cross-Entropy Loss in the Broader AI Ecosystem
  Cross-entropy loss connects to a wide range of adjacent concepts in the AI ecosystem:

  - In **variational autoencoders (VAEs)**, the ELBO objective contains a cross-entropy reconstruction term measuring how well the decoder reconstructs the input from the latent code, plus a KL divergence regularisation term on the latent distribution. Cross-entropy is therefore central to generative modelling beyond discriminative tasks.
  - In **[[Contrastive Learning]]** (SimCLR, MoCo, CLIP), the InfoNCE loss is a multi-class cross-entropy over a set of negative pairs in a batch, maximising the probability of identifying the correct positive pair among N−1 negatives. This applies cross-entropy directly to the unsupervised representation learning setting.
  - In **knowledge graph embedding** models (TransE, RotatE, ComplEx), the binary cross-entropy or softmax cross-entropy loss is applied to positive and negative entity-relation-entity triples to learn entity and relation embeddings. [[Knowledge Distillation]] of knowledge graph embeddings uses cross-entropy between teacher and student triple score distributions.
  - In **[[Reinforcement Learning from Human Feedback]]** and autonomous RL, the policy gradient theorem (REINFORCE) can be interpreted as a form of cross-entropy minimisation where the target distribution is the reward-weighted policy, connecting RL to the maximum likelihood framework.
  - In **Bayesian [[Deep Learning]]**, cross-entropy minimisation under a prior corresponds to maximum a posteriori (MAP) estimation; adding weight decay (L2 regularisation) to cross-entropy loss is equivalent to placing a Gaussian prior over model weights. This Bayesian interpretation provides a principled framework for regularisation and uncertainty quantification in deep classifiers.

  ## Implementation and Numerical Considerations
  Implementing cross-entropy loss correctly at the scale of modern deep learning requires attention to several numerical and computational details that are easy to overlook but critical for training stability and efficiency.

  **Numerically Stable Implementation**

  The naive implementation of cross-entropy — first computing softmax probabilities, then taking the log, then selecting the true class — is numerically unstable:
  ```
  # WRONG: numerically unstable
  probs = torch.softmax(logits, dim=-1)  # can overflow for large logits
  loss = -torch.log(probs[range(n), labels])  # catastrophic cancellation possible
  ```

  The correct approach uses the log-sum-exp formulation, implemented in PyTorch as `F.cross_entropy(logits, labels)` which internally computes:
  ```
  # CORRECT: numerically stable
  log_probs = logits - torch.logsumexp(logits, dim=-1, keepdim=True)  
  loss = -log_probs[range(n), labels]
  ```

  This avoids explicit softmax computation and directly computes log-probabilities via the log-sum-exp trick. The infinity-norm bounded gradient (||∂L/∂z||∞ ≤ 1) means gradient clipping is unnecessary for the loss itself, though it may still be applied to prevent gradient explosion from other sources.

  **Large Vocabulary Efficiency**

  For [[Large Language Models]] with vocabulary sizes of 100k–250k tokens, the output projection matrix Wᵥ ∈ ℝ^{d × V} and the subsequent loss computation represent a significant memory and compute bottleneck. Several approaches address this:

  - **Chunked cross-entropy**: Compute the loss in V-dimension chunks of 4k–8k tokens at a time, accumulating gradients across chunks. Reduces peak memory from O(B × L × V) to O(B × L × chunk_size).
  - **Linear cross-entropy (Flash-loss / Liger Kernel)**: Fused CUDA/Triton kernel that computes the linear projection, softmax, and cross-entropy loss in a single kernel pass, avoiding materialisation of the full logit tensor. The Liger Kernel (2024) achieves 30–60% memory reduction and 10–20% speedup on vocabulary-dominated training.
  - **Sequence parallelism**: Distributing the sequence dimension (B × L) across multiple GPUs, computing each GPU's shard of the cross-entropy loss independently and averaging across GPUs. Used for sequence lengths > 8k where single-GPU memory is insufficient.

  **Mixed Precision Training**

  BF16 mixed precision (now standard in all major training frameworks) provides the most robust numerical environment for cross-entropy training:
  - BF16 exponent range matches FP32, preventing the softmax overflow that was common with FP16 (max representable value ~65k)
  - Master weights maintained in FP32 for accurate gradient accumulation
  - Loss scaling (multiplying loss by a large constant, then dividing gradients by the same constant before the optimiser step) is still sometimes required with FP16 but rarely with BF16
  - The log-sum-exp computation benefits from FP32 accumulation even in BF16 training; fused kernels handle this automatically

  **[[Label Smoothing]] Implementation**

  Implementing label smoothing requires modifying the target distribution rather than the loss function:
  ```
  # Label-smoothed cross-entropy
  smooth_target = (1 - epsilon) * one_hot(labels) + epsilon / num_classes
  loss = -torch.sum(smooth_target * F.log_softmax(logits, dim=-1), dim=-1)
  ```

  PyTorch's `F.cross_entropy(logits, labels, label_smoothing=epsilon)` implements this directly. The smoothing constant epsilon = 0.1 is the standard choice; higher values (0.2+) improve calibration but may reduce peak accuracy on well-calibrated tasks.

  **Monitoring Cross-Entropy During Training**

  Key diagnostic signals during training:
  - **Training loss should decrease monotonically** (with noise from mini-batch variance). Non-monotonic behaviour or sudden spikes indicate learning rate issues, gradient explosion, or data corruption.
  - **Validation cross-entropy** should track training cross-entropy initially, then diverge (increasing validation, decreasing training) when overfitting begins. Early stopping at minimum validation cross-entropy is the standard regularisation strategy.
  - **Per-class or per-domain cross-entropy** reveals where the model is struggling. High cross-entropy on rare classes indicates class imbalance; high cross-entropy on specific domains indicates distribution shift.
  - **Gradient norm**: Despite the bounded gradient of cross-entropy itself, the overall gradient norm (across all parameters) can diverge if attention weights or layer norms produce large activations. Gradient clipping at norm threshold 1.0–5.0 is applied to the total gradient vector, not the loss gradient.

  ## Historical Development Timeline
  The history of cross-entropy loss as a machine learning objective spans eight decades, from information theory to modern [[Large Language Models]]:

  **1940s: Information-Theoretic Foundations**
  Shannon's 1948 paper "A Mathematical Theory of Communication" introduced entropy, channel capacity, mutual information, and the cross-entropy concept, establishing the formal mathematical framework within which cross-entropy loss is defined. Shannon's work built on Norbert Wiener's cybernetics (1948) and Alan Turing's wartime cryptanalysis, which used log-likelihood Bayesian updates (equivalent to cross-entropy gradient steps) for code-breaking.

  **1960s–1970s: Statistical Pattern Recognition**
  Logistic regression — a single-layer model with sigmoid activation and binary cross-entropy loss — was developed in the biostatistics and epidemiology literature (Cox, 1958; Walker and Duncan, 1967) for classification tasks with binary outcomes. Multinomial logistic regression (softmax + cross-entropy) was formalised by Luce's choice axiom (1959) and applied in psychometrics and econometrics. These models constitute the direct linear precursor to the output layers of modern deep classifiers.

  **1980s: Neural Networks and Backpropagation**
  Rumelhart, Hinton, and Williams (1986) published "Learning representations by back-propagating errors" in Nature, establishing [[Backpropagation]] as the efficient algorithm for computing cross-entropy (and other loss) gradients in multi-layer networks. Bridle (1990) formalised the connection between softmax, cross-entropy, and maximum entropy in "Probabilistic interpretation of feedforward classification network outputs, with relationships to statistical pattern recognition," making the probabilistic interpretation canonical. LeCun et al. (1989) applied cross-entropy with [[Convolutional Neural Network]] architectures to handwritten digit recognition on MNIST, demonstrating the applicability to real vision tasks.

  **1990s: Theoretical Consolidation**
  Vapnik's Statistical Learning Theory (1995) contextualised cross-entropy minimisation as empirical risk minimisation with the log-loss, providing PAC-learning guarantees. Bishop (1995) "Neural Networks for Pattern Recognition" provided the definitive textbook treatment connecting cross-entropy to MLE, the exponential family, and Bayesian inference. Hochreiter and Schmidhuber (1997) applied cross-entropy to train LSTMs for sequence modelling, demonstrating its applicability to temporal prediction tasks.

  **2000s: Large-Scale Classification and Deep Learning**
  The ImageNet challenge (Russakovsky et al., 2015, but data available from 2009) made large-scale categorical cross-entropy (1000 classes) the canonical deep learning benchmark. Hinton et al. (2006) showed that deep belief networks pre-trained with unsupervised contrastive divergence could be fine-tuned with cross-entropy on labelled data, initiating the deep learning era. Nair and Hinton (2010) introduced ReLU activation functions that avoided the vanishing gradient problem with sigmoid+MSE combinations, making deep cross-entropy networks more trainable.

  **2010s: Transformers and Attention**
  The [[Transformer]] architecture (Vaswani et al., 2017) adopted cross-entropy with [[Label Smoothing]] (ε=0.1) as its standard training objective for neural machine translation, and this choice has persisted across all subsequent transformer-based models. GPT (Radford et al., 2018), BERT (Devlin et al., 2019), and GPT-2 (Radford et al., 2019) applied cross-entropy at unprecedented scale (billions of parameters, hundreds of billions of training tokens), revealing emergent capabilities not present in smaller models. The Focal Loss paper (Lin et al., 2017) from Facebook AI Research extended cross-entropy to the class-imbalanced object detection setting, triggering widespread adoption of loss function modifications across computer vision.

  **2020s: LLM Era and Alignment**
  GPT-3 (Brown et al., 2020) trained with cross-entropy on 300B tokens demonstrated few-shot learning at scale, catalysing the LLM era. The Chinchilla scaling law (Hoffmann et al., 2022) characterised the compute-optimal relationship between model size, training tokens, and cross-entropy loss. InstructGPT (Ouyang et al., 2022) introduced RLHF as a method to align GPT-3-class models with human preferences, using cross-entropy for the SFT phase. DPO (Rafailov et al., 2023) reformulated alignment as binary cross-entropy over preference pairs, dramatically simplifying the RLHF training pipeline. By 2024–2026, every frontier LLM ([[Large Language Models]]) — GPT-4o, Gemini 1.5/2.0, Claude 3.x/4.x, LLaMA 3/4, Qwen 2.5 — is trained with cross-entropy as the primary objective across all training phases.

  ## Calibration and Uncertainty Quantification
  A well-calibrated classifier is one whose predicted probability accurately reflects empirical accuracy: if the model outputs P(y = c | x) = 0.8, then approximately 80% of examples where the model assigns probability 0.8 to class c should indeed be class c. Cross-entropy minimisation tends to produce overconfident models in practice — neural networks trained with standard cross-entropy on one-hot labels typically predict probabilities near 0 or 1 for all examples, while the true confidence should be intermediate for ambiguous cases.

  **Causes of miscalibration from cross-entropy training**:
  - **Maximum likelihood pressure**: The gradient (p̂ - y) pushes the model to maximise the probability of the correct class indefinitely, even after achieving near-perfect classification accuracy. The optimal response to the one-hot target is to assign probability 1.0 to the true class, which requires logits approaching ±∞.
  - **Batch normalisation and data augmentation**: These regularisation techniques reduce overconfidence during training but the calibration benefit varies by architecture and task.
  - **Distribution shift**: Models trained on the training distribution systematically miscalibrate when evaluated on out-of-distribution test data, even if they were well-calibrated in-distribution.

  **Calibration techniques compatible with cross-entropy**:
  - **[[Label Smoothing]]**: Replacing one-hot targets with ỹ = (1-ε)y + ε/C prevents the model from learning infinite logits for the correct class. A 2025 study (Lyu et al., arXiv 2508.00264) showed label smoothing with ε = 0.05–0.1 is the most effective calibration technique for [[Large Language Models]] without degrading task performance.
  - **Temperature scaling**: Post-hoc calibration by dividing logits by a learned temperature T > 1 before softmax, flattening the probability distribution. T is optimised to minimise the Expected Calibration Error (ECE) on a validation set.
  - **Dirichlet calibration**: Fitting a Dirichlet distribution to the model's softmax outputs to correct miscalibration patterns.
  - **Monte Carlo dropout**: Using dropout at test time to obtain a distribution of model outputs, averaging over multiple stochastic forward passes to obtain calibrated uncertainty estimates.

  **Calibration metrics**:
  - **ECE (Expected Calibration Error)**: Partition predictions into M probability bins; compute the weighted average of |accuracy - confidence| across bins. Lower ECE indicates better calibration.
  - **Reliability diagrams**: Plot empirical accuracy vs. predicted confidence in each bin; a perfectly calibrated model lies on the diagonal.
  - **Negative log-likelihood (NLL) / Cross-entropy on test set**: The cross-entropy loss on the held-out test set is itself a proper scoring rule for calibration: minimising test-set cross-entropy is equivalent to maximising calibration quality in the information-theoretic sense.

  The connection between cross-entropy loss and calibration is fundamental: cross-entropy is a proper scoring rule, meaning that the unique minimum of expected cross-entropy is achieved when the predicted distribution matches the true conditional distribution. However, because the true conditional distribution is unknown and is approximated by one-hot empirical labels, standard cross-entropy training on finite data produces overconfident predictions. [[Label Smoothing]] can be understood as correcting for this by using a smoother approximation to the true conditional distribution.

  ## Research and Literature
  1. Shannon, C.E. (1948). "A Mathematical Theory of Communication." Bell System Technical Journal 27(3): 379–423.
  2. Rumelhart, D.E., Hinton, G.E. and Williams, R.J. (1986). "Learning representations by back-propagating errors." Nature 323: 533–536.
  3. LeCun, Y. et al. (1989). "Backpropagation Applied to Handwritten Zip Code Recognition." Neural Computation 1(4): 541–551.
  4. Vapnik, V. (1995). The Nature of Statistical Learning Theory. Springer.
  5. Bishop, C.M. (1995). Neural Networks for Pattern Recognition. Oxford University Press.
  6. Goodfellow, I., Bengio, Y. and Courville, A. (2016). Deep Learning. MIT Press. Ch. 5 (MLE), Ch. 6 (cross-entropy).
  7. Vaswani, A. et al. (2017). "Attention Is All You Need." NeurIPS 2017.
  8. Lin, T.-Y. et al. (2017). "Focal Loss for Dense Object Detection." ICCV 2017.
  9. Müller, R. et al. (2019). "When Does Label Smoothing Help?" NeurIPS 2019.
  10. Radford, A. et al. (2018). "Improving Language Understanding by Generative Pre-Training." OpenAI Technical Report.
  11. Brown, T. et al. (2020). "Language Models are Few-Shot Learners." NeurIPS 2020.
  12. Rafailov, R. et al. (2023). "Direct Preference Optimization: Your Language Model is Secretly a Reward Model." NeurIPS 2023.
  13. Hoffmann, J. et al. (2022). "Training Compute-Optimal Large Language Models." arXiv:2203.15556 (Chinchilla).
  14. Touvron, H. et al. (2023). "LLaMA 2: Open Foundation and Fine-Tuned Chat Models." arXiv:2307.09288.
  15. Hinton, G., Vinyals, O. and Dean, J. (2015). "Distilling the Knowledge in a Neural Network." arXiv:1503.02531.
  16. Yeung, M. et al. (2022). "Unified Focal Loss: Generalising Dice and Cross-Entropy Losses for Class-Imbalanced Medical Image Segmentation." Computer Methods and Programs in Biomedicine 222.
  17. Guo, C. et al. (2017). "On Calibration of Modern Neural Networks." ICML 2017.
  18. Szegedy, C. et al. (2016). "Rethinking the Inception Architecture for Computer Vision." CVPR 2016. (label smoothing origin)
  19. Nguyen, T.T. and Salazar, J. (2019). "Transformers without Tears: Improving the Normalisation of Self-Attention." arXiv:1910.05895.
  20. Hong, J. et al. (2025). "Cross Entropy versus Label Smoothing: A Neural Collapse Perspective." arXiv:2402.03979.
  21. Chen, M. et al. (2025). "FocalPO: Enhancing Preference Optimising by Focusing on Correct Preference Rankings." arXiv:2501.06645.
  22. Gloeckle, F. et al. (2024). "Better and Faster Large Language Models via Multi-Token Prediction." arXiv:2404.19737.
  23. Lyu, C. et al. (2025). "Calibrated Language Models and How to Find Them with Label Smoothing." arXiv:2508.00264.
  24. Pham, N. et al. (2025). "Chronicals: High-Performance LLM Fine-Tuning with 3.51× Speedup." arXiv:2601.02609. (efficient cross-entropy kernels)
  25. Meng, Y. et al. (2024). "SimPO: Simple Preference Optimization with a Reference-Free Reward." arXiv:2405.14734.
  26. Ziegler, D.M. et al. (2019). "Fine-Tuning Language Models from Human Preferences." arXiv:1909.08593.
  27. Küchemann, S. et al. (2025). "PALOMA: The Pile Assuming Loss Over Many Alignments." NeurIPS 2024 (extended evaluation framework).

  ## Theoretical Properties and Limitations
  Cross-entropy minimisation has several theoretical properties worth noting in the context of modern [[Deep Learning]]:

  **Consistency**: Cross-entropy minimisation is a consistent estimator of the true conditional distribution P(y|x) in the sense that, given infinite data and a sufficiently expressive model class, the minimiser of expected cross-entropy is the true conditional distribution. This consistency property, shared with [[Maximum Likelihood Estimation]] generally, provides the theoretical justification for cross-entropy as the canonical training objective.

  **Excess risk bounds**: Under VC theory and PAC learning frameworks, the generalisation error of a model trained with cross-entropy (log-loss) on n i.i.d. samples can be bounded by O(sqrt(VC_dim / n)), the same rate as for other bounded losses. The log-loss is a Lipschitz function of the logits (gradient norm ≤ 1), ensuring that small perturbations to the model parameters produce bounded changes in the loss.

  **Exposure bias**: The teacher-forcing training regime (feeding true previous tokens as context at each decoding step) creates a train-test mismatch in language models: at inference time, the model must condition on its own (potentially erroneous) previous outputs, not ground-truth tokens. This exposure bias is a known limitation of the cross-entropy language modelling objective. Scheduled sampling, REINFORCE-based self-critical training, and minimum Bayes risk (MBR) decoding are approaches to mitigate this, though cross-entropy teacher-forcing remains standard because the bias is manageable in practice and the training efficiency advantage is significant.

  **Mode collapse tendency**: Cross-entropy minimisation with one-hot targets encourages the model to concentrate all probability mass on the correct class, potentially at the expense of capturing the full diversity of the data distribution. [[Label Smoothing]] is the primary mitigation, but the fundamental tension between cross-entropy maximisation of correct-class probability and density estimation of the full data distribution remains a theoretical issue. Generative models (VAEs, diffusion models) that must capture the full data distribution use different objectives (ELBO, score matching) rather than cross-entropy precisely because of this tension.

  **Gradient geometry and Adam sensitivity**: The cross-entropy loss landscape has non-uniform curvature: the Hessian of the softmax cross-entropy is p̂(1-p̂) for the true class and -p̂ᵢp̂ⱼ for off-diagonal elements, creating highly variable curvature depending on prediction confidence. Adaptive optimisers (Adam, AdamW) address this by maintaining per-parameter running estimates of gradient variance and scaling the effective learning rate accordingly, which is why they are strongly preferred over vanilla [[Stochastic Gradient Descent]] for cross-entropy classification objectives.

  ## Cross-Entropy and Model Evaluation
  Cross-entropy loss is the primary evaluation metric for language models in the form of [[Perplexity]], defined as PPL = exp(average cross-entropy per token). Perplexity has a compelling intuitive interpretation: it is the effective vocabulary size the model is "choosing between" at each position, given the context. A model with perplexity 10 is as uncertain as if it were sampling uniformly from 10 possible next tokens; a model with perplexity 2 is highly confident, essentially choosing between 2 alternatives on average. Perplexity comparisons are valid only when models use the same tokenisation: a model with a 32k-token vocabulary and 50k-token vocabulary cannot be directly compared on raw perplexity because the effective difficulty of the prediction task differs.

  Perplexity on a held-out test set is the standard comparison metric for language models in academic research: GPT-2 reported 35.76 perplexity on WikiText-103; GPT-3 reported 20.50; LLaMA-2-70B reported approximately 3.3 on Penn Treebank. These comparisons must be made with extreme caution due to tokenisation differences, context length differences (models with longer context can condition on more preceding tokens), and potential test set contamination (inclusion of test data in training corpus). The PALOMA benchmark (2024) standardises perplexity evaluation across 58 diverse text domains to provide more ecologically valid language model comparisons beyond single-corpus perplexity.

  For classification model evaluation, cross-entropy on a validation set is used as the primary optimisation signal for hyperparameter tuning (learning rate, batch size, regularisation strength). Cross-entropy decreasing on the validation set while accuracy plateaus indicates label smoothing is beneficial; validation cross-entropy increasing while training cross-entropy continues to decrease indicates overfitting. Early stopping based on validation cross-entropy is the most common regularisation technique for deep classification models.

  Bits-per-character (BPC) and bits-per-byte (BPB) are character- and byte-level analogues of perplexity that enable comparison across tokenisations: BPB = cross-entropy / log(2) per byte of input, enabling apples-to-apples comparison between byte-pair encoding (BPE) and character-level models on the same text.

  ## Connections to Other Loss Functions
  Cross-entropy loss is the central node in a network of related objectives, and understanding its relationships clarifies when each is appropriate:

  - **vs [[Mean Squared Error]]**: MSE is appropriate for regression (continuous real-valued targets) where the output is not a probability. MSE applied to probability outputs (treating the class indicator as a real number in [0, 1]) suffers gradient saturation at extreme predictions, making it far inferior to cross-entropy for classification. MSE is occasionally used for soft-target distillation when matching embedding vectors rather than probability distributions.
  - **vs Hinge Loss (SVM)**: Hinge loss max(0, 1 - y · f(x)) is a margin-based objective that explicitly enforces a separation between classes rather than fitting a probability model. SVMs trained with hinge loss have a maximum-margin property that cross-entropy models do not explicitly guarantee, but in practice deep networks trained with cross-entropy exhibit competitive or superior generalisation.
  - **vs [[Contrastive Loss]] / InfoNCE**: Contrastive losses (SimCLR, InfoNCE) are a form of cross-entropy applied to a matrix of similarity scores between positive and negative pairs in a mini-batch. InfoNCE can be written as a softmax cross-entropy over the positive pair scores normalised by the sum of all pair scores in the batch: L_NCE = -log(exp(s(q, d⁺)/τ) / ∑_j exp(s(q, d_j)/τ)). This connects embedding model training directly to the cross-entropy framework, making [[Contrastive Learning]] a special case of cross-entropy optimisation.
  - **vs [[Focal Loss]]**: Focal loss (1 - p̂_y)^γ · (-log p̂_y) multiplicatively down-weights easy examples that the model already classifies confidently, redirecting gradient signal to hard examples. Focal loss is a heuristic modification of cross-entropy for class-imbalanced problems; it retains cross-entropy's good gradient properties while shifting the effective training distribution.
  - **vs Dice Loss**: Used in medical image segmentation, Dice loss 1 - 2|P∩G|/(|P|+|G|) is not a cross-entropy variant — it optimises the overlap coefficient directly. The Unified Focal Loss (Yeung et al., 2022, Cambridge) generalises both, showing that Dice and cross-entropy are special cases of a broader asymmetric parameterised loss family that can be tuned for class imbalance without the sharp threshold of Dice loss.
  - **vs Reward Modelling Losses**: RLHF reward models are trained with a pairwise Bradley-Terry cross-entropy: L = -log(σ(r(q, y_w) - r(q, y_l))), where y_w is preferred and y_l is rejected. This reduces to cross-entropy over a Bernoulli preference observation, connecting reward modelling training to the core cross-entropy framework.

  ## Key Terminology
  - **Cross-entropy H(p, q)**: -∑ p(x) log q(x); the average bits needed to encode samples from true distribution p using a code for q.
  - **KL Divergence D_KL(p || q)**: H(p, q) − H(p); the additional bits from using q instead of p; always ≥ 0. Cross-entropy minimisation is KL minimisation when H(p) is fixed.
  - **Negative log-likelihood (NLL)**: The objective for maximum likelihood estimation of model parameters; equal to cross-entropy (up to a constant) for fixed data distribution.
  - **Softmax**: The normalising function that converts raw logits to a probability distribution; pairs naturally with cross-entropy to produce the clean gradient (p̂ − y).
  - **Perplexity (PPL)**: exp(cross-entropy loss); the effective vocabulary size the model is uncertain over at each step. PPL = 10 means the model is as uncertain as if choosing uniformly from 10 tokens.
  - **Label smoothing**: Replacement of one-hot targets with a soft distribution ỹ = (1 - ε)y + ε/C; improves calibration and generalisation; ε = 0.1 is standard.
  - **Focal loss**: (1 - p̂_y)^γ · cross-entropy; down-weights easy examples; primarily used for class-imbalanced object detection and segmentation. FocalPO adapts this principle to DPO alignment.
  - **DPO loss**: A binary cross-entropy reformulation of RLHF preference learning; eliminates the separate reward model by optimising the policy's log-probability ratio directly.
  - **Teacher forcing**: Training scheme where the true previous token (not the model's prediction) is fed as input at each decoding step; enables efficient cross-entropy computation on fixed teacher labels but introduces exposure bias.
  - **Log-sum-exp trick**: Numerical stabilisation for softmax computation: max(z) is subtracted from all logits before exponentiation to prevent overflow: log ∑ exp(zᵢ) = max(z) + log ∑ exp(zᵢ - max(z)).
  - **Bits-per-byte (BPB)**: cross-entropy / log(2) per input byte; tokenisation-independent language model quality metric enabling cross-vocabulary comparison.
  - **Neural collapse**: The phenomenon where, at the terminal phase of cross-entropy training, within-class variability collapses to zero and class means converge to an ETF geometry; connects cross-entropy minimisation to optimal coding theory.

  ## Cross-Entropy Loss: Quick Reference Summary
  For practitioners integrating cross-entropy loss into training pipelines, the following table summarises the key variant selection criteria:

  | Task Type | Recommended Variant | Key Parameters | Notes |
  |---|---|---|---|
  | Multi-class classification | Categorical cross-entropy | ε = 0.05–0.1 label smoothing | Use F.cross_entropy on raw logits |
  | Binary classification | Binary cross-entropy (BCE) | Standard; try pos_weight for imbalance | Use F.binary_cross_entropy_with_logits |
  | Language model pre-training | Next-token cross-entropy | Uniform token weight; chunked for large vocab | Mask padding tokens |
  | Instruction fine-tuning (SFT) | Masked cross-entropy | Weight=0 on prompt tokens, weight=1 on response | Prevents prompt memorisation |
  | Preference alignment (DPO) | DPO binary cross-entropy | β = 0.1–0.5 KL penalty | Reference model required |
  | Class imbalance (e.g., medical) | Focal loss or weighted CE | γ = 0.5–2.0 for focal; class_weight for weighted | Unified Focal Loss for segmentation |
  | Knowledge distillation | Soft-target cross-entropy | Temperature T = 2–5 for softening | Mix with hard-label CE: α*soft + (1-α)*hard |
  | Contrastive / embedding | InfoNCE (contrastive CE) | Temperature τ = 0.05–0.1 | N-1 in-batch negatives per positive |

  Key implementation checklist:
  - Always pass raw logits to loss functions, not pre-softmaxed probabilities
  - Verify numerical stability: use F.cross_entropy, not log(softmax(logits))
  - For large vocabularies: use chunked or fused (Liger Kernel) cross-entropy
  - Apply label smoothing (ε=0.1) by default for classification models
  - Monitor validation cross-entropy alongside training cross-entropy
  - Report perplexity (exp(CE)) for language model comparisons
  - For mixed-precision training: prefer BF16 over FP16 for better dynamic range
  - Gradient clipping (max norm 1.0) guards against non-loss sources of instability
  - For SFT: always mask prompt tokens to zero weight in the loss computation
  - Calibration: evaluate ECE alongside accuracy; apply temperature scaling post-training

  ## LinkResolutionAnnotations
  - [[Loss Function]] → urn:ngm:class:loss-function
  - [[Backpropagation]] → urn:ngm:class:backpropagation
  - [[Gradient Descent]] → urn:ngm:class:gradient-descent
  - [[Supervised Learning]] → urn:ngm:class:supervised-learning
  - [[Language Modeling]] → urn:ngm:class:language-modeling
  - [[Transformer]] → urn:ngm:class:transformer
  - [[Large Language Models]] → urn:ngm:class:large-language-models
  - [[Softmax Function]] → urn:ngm:class:softmax-function
  - [[Neural Network]] → urn:ngm:class:neural-network
  - [[Deep Learning]] → urn:ngm:class:deep-learning
  - [[Natural Language Processing]] → urn:ngm:class:natural-language-processing
  - [[Model Training]] → urn:ngm:class:model-training
  - [[KL Divergence]] → urn:ngm:class:kl-divergence
  - [[Information Theory]] → urn:ngm:class:information-theory
  - [[Activation Function]] → urn:ngm:class:activation-function
  - [[Stochastic Gradient Descent]] → urn:ngm:class:stochastic-gradient-descent
  - [[Label Smoothing]] → urn:ngm:class:label-smoothing
  - [[Focal Loss]] → urn:ngm:class:focal-loss
  - [[Direct Preference Optimisation]] → urn:ngm:class:direct-preference-optimisation
  - [[Reinforcement Learning from Human Feedback]] → urn:ngm:class:reinforcement-learning-from-human-feedback
  - [[Mean Squared Error]] → urn:ngm:class:mean-squared-error
  - [[Contrastive Loss]] → urn:ngm:class:contrastive-loss
  - [[Maximum Likelihood Estimation]] → urn:ngm:class:maximum-likelihood-estimation
  - [[Perplexity]] → urn:ngm:class:perplexity
  - [[Convolutional Neural Network]] → urn:ngm:class:convolutional-neural-network
  - [[Attention Mechanism]] → urn:ngm:class:attention-mechanism
  - [[Fine-Tuning]] → urn:ngm:class:fine-tuning
  - [[Contrastive Learning]] → urn:ngm:class:contrastive-learning
  - [[Knowledge Distillation]] → urn:ngm:class:knowledge-distillation

- ### Provenance
  - sources:: https://arxiv.org/abs/1901.10852, https://arxiv.org/pdf/2402.03979, https://arxiv.org/pdf/2501.06645, https://arxiv.org/abs/2203.15556, https://arxiv.org/abs/2307.09288, https://pmc.ncbi.nlm.nih.gov/articles/PMC8785124/, https://mbrenndoerfer.com/writing/cross-entropy-loss-language-models-information-theory, https://www.analyticsvidhya.com/blog/2025/04/cross-entropy-loss-in-language-model-evaluation/
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm
