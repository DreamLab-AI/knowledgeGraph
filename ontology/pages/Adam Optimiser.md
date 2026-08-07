public:: true
alias:: Adam Optimizer, Adaptive Moment Estimation, AdaM

# adam optimiser
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:107125ffbb1f2fa798fc80d3d0788eb03a95916a95d482dcc5f3771f94df9a83",
  "@type": "Page",
  "vc:slug": "adam-optimiser",
  "title": "adam optimiser",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:gradient-descent", "vc:label": "Gradient Descent"},
    {"@id": "urn:visionflow:linked:stochastic-gradient-descent", "vc:label": "Stochastic Gradient Descent"},
    {"@id": "urn:visionflow:linked:backpropagation", "vc:label": "Backpropagation"},
    {"@id": "urn:visionflow:linked:loss-function", "vc:label": "Loss Function"},
    {"@id": "urn:visionflow:linked:deep-learning", "vc:label": "Deep Learning"},
    {"@id": "urn:visionflow:linked:transformer-architecture", "vc:label": "Transformer Architecture"},
    {"@id": "urn:visionflow:linked:neural-network", "vc:label": "Neural Network"},
    {"@id": "urn:visionflow:linked:rmsprop", "vc:label": "RMSProp"},
    {"@id": "urn:visionflow:linked:adagrad", "vc:label": "Adagrad"},
    {"@id": "urn:visionflow:linked:adamw", "vc:label": "AdamW"},
    {"@id": "urn:visionflow:linked:adafactor", "vc:label": "AdaFactor"},
    {"@id": "urn:visionflow:linked:weight-decay", "vc:label": "Weight Decay"},
    {"@id": "urn:visionflow:linked:gradient-clipping", "vc:label": "Gradient Clipping"},
    {"@id": "urn:visionflow:linked:reinforcement-learning", "vc:label": "Reinforcement Learning"},
    {"@id": "urn:visionflow:linked:federated-learning", "vc:label": "Federated Learning"},
    {"@id": "urn:visionflow:linked:transfer-learning", "vc:label": "Transfer Learning"},
    {"@id": "urn:visionflow:linked:fine-tuning", "vc:label": "Fine-Tuning"},
    {"@id": "urn:visionflow:linked:model-training", "vc:label": "Model Training"},
    {"@id": "urn:visionflow:linked:hyperparameter-optimisation", "vc:label": "Hyperparameter Optimisation"},
    {"@id": "urn:visionflow:linked:learning-rate-schedule", "vc:label": "Learning Rate Schedule"},
    {"@id": "urn:visionflow:linked:adaptive-learning-rate", "vc:label": "Adaptive Learning Rate"},
    {"@id": "urn:visionflow:linked:exponential-moving-average", "vc:label": "Exponential Moving Average"},
    {"@id": "urn:visionflow:linked:large-language-model", "vc:label": "Large Language Model"},
    {"@id": "urn:visionflow:linked:diffusion-model", "vc:label": "Diffusion Model"},
    {"@id": "urn:visionflow:linked:natural-language-processing", "vc:label": "Natural Language Processing"},
    {"@id": "urn:visionflow:linked:vision-transformer", "vc:label": "Vision Transformer"},
    {"@id": "urn:visionflow:linked:vanishing-gradient-problem", "vc:label": "Vanishing Gradient Problem"},
    {"@id": "urn:visionflow:linked:batch-normalisation", "vc:label": "Batch Normalisation"},
    {"@id": "urn:visionflow:linked:automatic-differentiation", "vc:label": "Automatic Differentiation"},
    {"@id": "urn:visionflow:linked:optimisation-algorithm", "vc:label": "Optimisation Algorithm"},
    {"@id": "urn:visionflow:linked:machine-learning", "vc:label": "Machine Learning"},
    {"@id": "urn:visionflow:linked:sgd-with-momentum", "vc:label": "SGD with Momentum"},
    {"@id": "urn:visionflow:linked:lion-optimiser", "vc:label": "Lion Optimiser"},
    {"@id": "urn:visionflow:linked:distributed-training", "vc:label": "Distributed Training"},
    {"@id": "urn:visionflow:linked:gradient-accumulation", "vc:label": "Gradient Accumulation"},
    {"@id": "urn:visionflow:linked:muon-optimiser", "vc:label": "Muon Optimiser"},
    {"@id": "urn:visionflow:linked:recurrent-neural-network", "vc:label": "Recurrent Neural Network"},
    {"@id": "urn:visionflow:linked:generalisation", "vc:label": "Generalisation"},
    {"@id": "urn:visionflow:linked:regularisation", "vc:label": "Regularisation"},
    {"@id": "urn:visionflow:linked:numerical-stability", "vc:label": "Numerical Stability"},
    {"@id": "urn:visionflow:linked:mixed-precision-training", "vc:label": "Mixed Precision Training"},
    {"@id": "urn:visionflow:linked:policy-gradient-methods", "vc:label": "Policy Gradient Methods"},
    {"@id": "urn:visionflow:linked:convergence", "vc:label": "Convergence"},
    {"@id": "urn:visionflow:linked:amsgrad", "vc:label": "AMSGrad"}
  ],
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
  "@id": "urn:ngm:class:adam-optimiser",
  "@type": "Class",
  "label": "Adam Optimiser",
  "definition": "The Adam optimiser (Adaptive Moment Estimation) is a first-order gradient-based optimisation algorithm that computes per-parameter adaptive learning rates by maintaining exponentially decaying moving averages of past gradients (first moment) and past squared gradients (second moment), with bias correction applied in early iterations. It synthesises the momentum-tracking behaviour of gradient descent with momentum and the per-parameter scaling of RMSProp, making it robust to sparse gradients, non-stationary objectives, and high-dimensional parameter spaces. Introduced by Kingma and Ba (2014), Adam has become the de-facto default optimiser for training transformer-based large language models, diffusion models, and deep neural networks across most domains. Key variants including AdamW, Adan, and AdaFactor extend it with decoupled weight decay, Nesterov momentum, and memory-efficient factorisation respectively.",
  "domain": "artificial-intelligence",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:gradient-descent",
      "label": "Gradient Descent"
    },
    {
      "@id": "urn:ngm:class:optimisation-algorithm",
      "label": "Optimisation Algorithm"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:backpropagation", "label": "Backpropagation"},
      {"@id": "urn:ngm:class:loss-function", "label": "Loss Function"},
      {"@id": "urn:ngm:class:stochastic-gradient-descent", "label": "Stochastic Gradient Descent"},
      {"@id": "urn:ngm:class:automatic-differentiation", "label": "Automatic Differentiation"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:model-training", "label": "Model Training"},
      {"@id": "urn:ngm:class:deep-learning", "label": "Deep Learning"},
      {"@id": "urn:ngm:class:transfer-learning", "label": "Transfer Learning"},
      {"@id": "urn:ngm:class:fine-tuning", "label": "Fine Tuning"},
      {"@id": "urn:ngm:class:hyperparameter-optimisation", "label": "Hyperparameter Optimisation"},
      {"@id": "urn:ngm:class:convergence", "label": "Convergence"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:learning-rate-schedule", "label": "Learning Rate Schedule"},
      {"@id": "urn:ngm:class:exponential-moving-average", "label": "Exponential Moving Average"},
      {"@id": "urn:ngm:class:bias-correction", "label": "Bias Correction"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:adaptive-learning-rate", "label": "Adaptive Learning Rate"},
      {"@id": "urn:ngm:class:momentum-optimisation", "label": "Momentum Optimisation"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:stochastic-gradient-descent", "label": "Mini-Batch Gradient"},
      {"@id": "urn:ngm:class:gradient-clipping", "label": "Gradient Clipping"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:rmsprop", "label": "RMSProp"},
      {"@id": "urn:ngm:class:adagrad", "label": "Adagrad"},
      {"@id": "urn:ngm:class:sgd-with-momentum", "label": "SGD with Momentum"},
      {"@id": "urn:ngm:class:lion-optimiser", "label": "Lion Optimiser"},
      {"@id": "urn:ngm:class:muon-optimiser", "label": "Muon Optimiser"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:neural-network", "label": "Neural Network"},
      {"@id": "urn:ngm:class:transformer-architecture", "label": "Transformer Architecture"},
      {"@id": "urn:ngm:class:weight-decay", "label": "Weight Decay"},
      {"@id": "urn:ngm:class:large-language-model", "label": "Large Language Model"},
      {"@id": "urn:ngm:class:adamw", "label": "AdamW"},
      {"@id": "urn:ngm:class:adafactor", "label": "AdaFactor"},
      {"@id": "urn:ngm:class:amsgrad", "label": "AMSGrad"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:reinforcement-learning", "label": "Reinforcement Learning"},
      {"@id": "urn:ngm:class:federated-learning", "label": "Federated Learning"},
      {"@id": "urn:ngm:class:distributed-training", "label": "Distributed Training"}
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:adaptive-moment-estimation",
      "label": "Adaptive Moment Estimation"
    },
    {
      "@id": "urn:ngm:class:adam-optimiser",
      "label": "Adam Optimizer"
    }
  ],
  "quality": 0.91,
  "provenance": {
    "attributedTo": "did:nostr:enrichment-swarm",
    "generatedAt": "2026-06-20T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:adam-optimiser:20260620",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:107125ffbb1f2fa798fc80d3d0788eb03a95916a95d482dcc5f3771f94df9a83"
  },
  "vc:resolutions": [
    {"raw": "[[Gradient Descent]]", "resolved": "urn:visionflow:linked:gradient-descent", "kind": "ResolvedLink"},
    {"raw": "[[Stochastic Gradient Descent]]", "resolved": "urn:visionflow:linked:stochastic-gradient-descent", "kind": "ResolvedLink"},
    {"raw": "[[Backpropagation]]", "resolved": "urn:visionflow:linked:backpropagation", "kind": "ResolvedLink"},
    {"raw": "[[Loss Function]]", "resolved": "urn:visionflow:linked:loss-function", "kind": "ResolvedLink"},
    {"raw": "[[Deep Learning]]", "resolved": "urn:visionflow:linked:deep-learning", "kind": "ResolvedLink"},
    {"raw": "[[Transformer Architecture]]", "resolved": "urn:visionflow:linked:transformer-architecture", "kind": "ResolvedLink"},
    {"raw": "[[Neural Network]]", "resolved": "urn:visionflow:linked:neural-network", "kind": "ResolvedLink"},
    {"raw": "[[RMSProp]]", "resolved": "urn:visionflow:linked:rmsprop", "kind": "StubLink"},
    {"raw": "[[Adagrad]]", "resolved": "urn:visionflow:linked:adagrad", "kind": "StubLink"},
    {"raw": "[[AdamW]]", "resolved": "urn:visionflow:linked:adamw", "kind": "StubLink"},
    {"raw": "[[AdaFactor]]", "resolved": "urn:visionflow:linked:adafactor", "kind": "StubLink"},
    {"raw": "[[Weight Decay]]", "resolved": "urn:visionflow:linked:weight-decay", "kind": "StubLink"},
    {"raw": "[[Gradient Clipping]]", "resolved": "urn:visionflow:linked:gradient-clipping", "kind": "ResolvedLink"},
    {"raw": "[[Reinforcement Learning]]", "resolved": "urn:visionflow:linked:reinforcement-learning", "kind": "StubLink"},
    {"raw": "[[Federated Learning]]", "resolved": "urn:visionflow:linked:federated-learning", "kind": "StubLink"},
    {"raw": "[[Transfer Learning]]", "resolved": "urn:visionflow:linked:transfer-learning", "kind": "StubLink"},
    {"raw": "[[Fine-Tuning]]", "resolved": "urn:visionflow:linked:fine-tuning", "kind": "StubLink"},
    {"raw": "[[Model Training]]", "resolved": "urn:visionflow:linked:model-training", "kind": "StubLink"},
    {"raw": "[[Hyperparameter Optimisation]]", "resolved": "urn:visionflow:linked:hyperparameter-optimisation", "kind": "StubLink"},
    {"raw": "[[Learning Rate Schedule]]", "resolved": "urn:visionflow:linked:learning-rate-schedule", "kind": "StubLink"},
    {"raw": "[[Adaptive Learning Rate]]", "resolved": "urn:visionflow:linked:adaptive-learning-rate", "kind": "StubLink"},
    {"raw": "[[Exponential Moving Average]]", "resolved": "urn:visionflow:linked:exponential-moving-average", "kind": "StubLink"},
    {"raw": "[[Large Language Model]]", "resolved": "urn:visionflow:linked:large-language-model", "kind": "StubLink"},
    {"raw": "[[Diffusion Model]]", "resolved": "urn:visionflow:linked:diffusion-model", "kind": "StubLink"},
    {"raw": "[[Natural Language Processing]]", "resolved": "urn:visionflow:linked:natural-language-processing", "kind": "StubLink"},
    {"raw": "[[Vision Transformer]]", "resolved": "urn:visionflow:linked:vision-transformer", "kind": "ResolvedLink"},
    {"raw": "[[Vanishing Gradient Problem]]", "resolved": "urn:visionflow:linked:vanishing-gradient-problem", "kind": "ResolvedLink"},
    {"raw": "[[Batch Normalisation]]", "resolved": "urn:visionflow:linked:batch-normalisation", "kind": "StubLink"},
    {"raw": "[[Automatic Differentiation]]", "resolved": "urn:visionflow:linked:automatic-differentiation", "kind": "StubLink"},
    {"raw": "[[Optimisation Algorithm]]", "resolved": "urn:visionflow:linked:optimisation-algorithm", "kind": "StubLink"},
    {"raw": "[[Machine Learning]]", "resolved": "urn:visionflow:linked:machine-learning", "kind": "StubLink"},
    {"raw": "[[SGD with Momentum]]", "resolved": "urn:visionflow:linked:sgd-with-momentum", "kind": "StubLink"},
    {"raw": "[[Lion Optimiser]]", "resolved": "urn:visionflow:linked:lion-optimiser", "kind": "StubLink"},
    {"raw": "[[Distributed Training]]", "resolved": "urn:visionflow:linked:distributed-training", "kind": "StubLink"},
    {"raw": "[[Gradient Accumulation]]", "resolved": "urn:visionflow:linked:gradient-accumulation", "kind": "ResolvedLink"},
    {"raw": "[[Muon Optimiser]]", "resolved": "urn:visionflow:linked:muon-optimiser", "kind": "StubLink"},
    {"raw": "[[Recurrent Neural Network]]", "resolved": "urn:visionflow:linked:recurrent-neural-network", "kind": "StubLink"},
    {"raw": "[[Generalisation]]", "resolved": "urn:visionflow:linked:generalisation", "kind": "StubLink"},
    {"raw": "[[Regularisation]]", "resolved": "urn:visionflow:linked:regularisation", "kind": "StubLink"},
    {"raw": "[[Numerical Stability]]", "resolved": "urn:visionflow:linked:numerical-stability", "kind": "StubLink"},
    {"raw": "[[Mixed Precision Training]]", "resolved": "urn:visionflow:linked:mixed-precision-training", "kind": "StubLink"},
    {"raw": "[[Policy Gradient Methods]]", "resolved": "urn:visionflow:linked:policy-gradient-methods", "kind": "ResolvedLink"},
    {"raw": "[[Convergence]]", "resolved": "urn:visionflow:linked:convergence", "kind": "StubLink"},
    {"raw": "[[AMSGrad]]", "resolved": "urn:visionflow:linked:amsgrad", "kind": "StubLink"}
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:enrichment-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-06-20T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - The Adam optimiser (Adaptive Moment Estimation) is a first-order, stochastic gradient-based [[Optimisation Algorithm]] that computes per-parameter adaptive learning rates by maintaining two exponentially decaying moving averages: the first moment (mean of past [[Gradient Descent]] vectors, analogous to momentum) and the second moment (uncentred variance of past squared gradients, providing per-parameter scale information). Unlike its predecessors [[RMSProp]] and [[Adagrad]], Adam applies bias correction to both moment estimates during early training iterations, preventing the systematic underestimation that arises because both moments are initialised to zero. The combined effect yields an update rule whose effective step size is bounded by α·(1+ε)/(1−β₁) regardless of the gradient scale, giving Adam robustness to the sparse, noisy, and non-stationary gradient signals encountered in [[Deep Learning]] workloads. Introduced by Diederik Kingma and Jimmy Ba in their landmark 2014 paper (arXiv:1412.6980, presented at ICLR 2015), the algorithm rapidly supplanted per-parameter adaptive methods and SGD-with-momentum as the default choice for training models across [[Natural Language Processing]], computer vision, [[Reinforcement Learning]], and generative modelling. Its most significant deployed variant, [[AdamW]] (Loshchilov and Hutter, 2017), decouples L2 [[Weight Decay]] from the adaptive gradient update — correcting a subtle but impactful conflation in the original formulation — and has become the canonical optimiser for [[Large Language Model]] pre-training runs including GPT, LLaMA, Gemma, and Mistral. Further variants including [[AdaFactor]] (memory-efficient factored second moments), 8-bit Adam (quantised optimiser states via block-wise quantisation), and the recently proposed [[Muon Optimiser]] (gradient orthogonalisation via Newton-Schulz iteration, achieving ~2× compute efficiency over AdamW at LLM scale) extend Adam's design philosophy into increasingly constrained resource and scale regimes. Despite emerging competition, the Adam family underpins virtually all practitioner toolkits as of 2026, codified in [[Automatic Differentiation]] frameworks including PyTorch, JAX/Optax, and TensorFlow/Keras.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:AdamOptimiser
  - owl-role:: ExecutableProtocol | LearningParadigm
  - owl-inferred:: artificial-intelligence:AdaptiveGradientMethod, artificial-intelligence:FirstOrderOptimiser, artificial-intelligence:MomentumBasedOptimiser
  - belongs-to-domain:: [[Machine Learning]]
  - implemented-in-layer:: [[AlgorithmLayer]]

- ### Relationships
  - is-subclass-of:: [[Gradient Descent]], [[Optimisation Algorithm]]
  - has-part:: [[Exponential Moving Average]], [[Learning Rate Schedule]], [[Bias Correction]], [[Gradient Clipping]]
  - requires:: [[Backpropagation]], [[Loss Function]], [[Stochastic Gradient Descent]], [[Automatic Differentiation]]
  - enables:: [[Model Training]], [[Deep Learning]], [[Transfer Learning]], [[Fine-Tuning]], [[Hyperparameter Optimisation]], [[Convergence]], [[Mixed Precision Training]]
  - implements:: [[Adaptive Learning Rate]], [[Momentum Optimisation]], [[Regularisation]]
  - depends-on:: [[Neural Network]], [[Numerical Stability]], [[Gradient Accumulation]]
  - supports:: [[Large Language Model]], [[Vision Transformer]], [[Diffusion Model]], [[Recurrent Neural Network]], [[Natural Language Processing]]
  - uses:: [[Exponential Moving Average]], [[Stochastic Gradient Descent]], [[Gradient Clipping]]
  - contrasts-with:: [[RMSProp]], [[Adagrad]], [[SGD with Momentum]], [[Lion Optimiser]], [[Muon Optimiser]], [[AMSGrad]]
  - related-to:: [[AdamW]], [[AdaFactor]], [[AMSGrad]], [[Transformer Architecture]], [[Weight Decay]], [[Vanishing Gradient Problem]], [[Batch Normalisation]], [[Machine Learning]], [[Generalisation]]
  - bridges-to:: [[Reinforcement Learning]], [[Federated Learning]], [[Distributed Training]], [[Policy Gradient Methods]], [[Scientific Machine Learning]]
  - standardized-by:: [[PyTorch]], [[JAX]], [[TensorFlow]]
  - has-variant:: [[AdamW]], [[AdaFactor]], [[AMSGrad]], [[Lion Optimiser]], [[Muon Optimiser]]
  - precedes:: [[Muon Optimiser]], [[Lion Optimiser]]
  - applies-to:: [[Transformer Architecture]], [[Diffusion Model]], [[Recurrent Neural Network]], [[Vision Transformer]], [[Neural Network]], [[Large Language Model]]

- ### Content
  - ## Compositional Relationships (Components)
    ```
    SubClassOf(ai:AdamOptimiser
      ObjectSomeValuesFrom(ai:hasPart ai:FirstMomentEstimate))
    SubClassOf(ai:AdamOptimiser
      ObjectSomeValuesFrom(ai:hasPart ai:SecondMomentEstimate))
    SubClassOf(ai:AdamOptimiser
      ObjectSomeValuesFrom(ai:hasPart ai:BiasCorrection))
    SubClassOf(ai:AdamOptimiser
      ObjectSomeValuesFrom(ai:hasPart ai:LearningRateSchedule))
    SubClassOf(ai:AdamOptimiser
      ObjectSomeValuesFrom(ai:hasPart ai:ExponentialMovingAverage))
    SubClassOf(ai:AdamOptimiser
      ObjectSomeValuesFrom(ai:hasPart ai:GradientClipping))
    SubClassOf(ai:AdamOptimiser
      ObjectSomeValuesFrom(ai:hasPart ai:NumericalStabilityEpsilon))
    ```
  - ## Dependency Relationships
    ```
    SubClassOf(ai:AdamOptimiser
      ObjectSomeValuesFrom(ai:requires ai:Backpropagation))
    SubClassOf(ai:AdamOptimiser
      ObjectSomeValuesFrom(ai:requires ai:LossFunction))
    SubClassOf(ai:AdamOptimiser
      ObjectSomeValuesFrom(ai:requires ai:StochasticGradientDescent))
    SubClassOf(ai:AdamOptimiser
      ObjectSomeValuesFrom(ai:requires ai:AutomaticDifferentiation))
    SubClassOf(ai:AdamOptimiser
      ObjectSomeValuesFrom(ai:dependsOn ai:NeuralNetwork))
    SubClassOf(ai:AdamOptimiser
      ObjectSomeValuesFrom(ai:dependsOn ai:GradientAccumulation))
    SubClassOf(ai:AdamOptimiser
      ObjectSomeValuesFrom(ai:dependsOn ai:NumericalStability))
    ```
  - ## Capability Relationships
    ```
    SubClassOf(ai:AdamOptimiser
      ObjectSomeValuesFrom(ai:enables ai:ModelTraining))
    SubClassOf(ai:AdamOptimiser
      ObjectSomeValuesFrom(ai:enables ai:DeepLearning))
    SubClassOf(ai:AdamOptimiser
      ObjectSomeValuesFrom(ai:enables ai:TransferLearning))
    SubClassOf(ai:AdamOptimiser
      ObjectSomeValuesFrom(ai:enables ai:FineTuning))
    SubClassOf(ai:AdamOptimiser
      ObjectSomeValuesFrom(ai:enables ai:Convergence))
    SubClassOf(ai:AdamOptimiser
      ObjectSomeValuesFrom(ai:enables ai:MixedPrecisionTraining))
    SubClassOf(ai:AdamOptimiser
      ObjectSomeValuesFrom(ai:supports ai:LargeLanguageModel))
    SubClassOf(ai:AdamOptimiser
      ObjectSomeValuesFrom(ai:supports ai:DiffusionModel))
    SubClassOf(ai:AdamOptimiser
      ObjectSomeValuesFrom(ai:supports ai:VisionTransformer))
    ```
  - ## Implementation Relationships
    ```
    SubClassOf(ai:AdamOptimiser
      ObjectSomeValuesFrom(ai:implements ai:AdaptiveLearningRate))
    SubClassOf(ai:AdamOptimiser
      ObjectSomeValuesFrom(ai:implements ai:MomentumOptimisation))
    SubClassOf(ai:AdamOptimiser
      ObjectSomeValuesFrom(ai:implements ai:Regularisation))
    SubClassOf(ai:AdamOptimiser
      ObjectSomeValuesFrom(ai:isSubclassOf ai:GradientDescent))
    SubClassOf(ai:AdamOptimiser
      ObjectSomeValuesFrom(ai:isSubclassOf ai:OptimisationAlgorithm))
    ```
  - ## Reduction Relationships
    ```
    SubClassOf(ai:AdamOptimiser
      ObjectSomeValuesFrom(ai:reducesTo ai:StochasticGradientDescent))
    SubClassOf(ai:AdamOptimiser
      ObjectSomeValuesFrom(ai:reducesTo ai:RMSProp))
    SubClassOf(ai:AdamOptimiser
      ObjectSomeValuesFrom(ai:contrastsWith ai:Lion))
    SubClassOf(ai:AdamOptimiser
      ObjectSomeValuesFrom(ai:contrastsWith ai:MuonOptimiser))
    SubClassOf(ai:AdamOptimiser
      ObjectSomeValuesFrom(ai:bridgesTo ai:FederatedLearning))
    SubClassOf(ai:AdamOptimiser
      ObjectSomeValuesFrom(ai:bridgesTo ai:DistributedTraining))
    SubClassOf(ai:AdamOptimiser
      ObjectSomeValuesFrom(ai:hasVariant ai:AdamW))
    SubClassOf(ai:AdamOptimiser
      ObjectSomeValuesFrom(ai:hasVariant ai:AdaFactor))
    ```

  - ## About

    The Adam optimiser, short for Adaptive Moment Estimation, is a first-order stochastic optimisation algorithm proposed by Diederik Kingma and Jimmy Ba in their 2014 paper (arXiv:1412.6980, published at ICLR 2015). It occupies a critical position at the intersection of [[Stochastic Gradient Descent]] and per-parameter adaptive [[Learning Rate Schedule]] methods, inheriting momentum from the former and per-parameter adaptivity from the latter while adding a novel bias-correction mechanism absent from its immediate predecessors [[RMSProp]] and [[Adagrad]]. The result is an algorithm that requires minimal hyperparameter tuning across diverse problem domains, handles sparse and noisy gradients with aplomb, and converges reliably even on the highly non-convex [[Loss Function]] landscapes characteristic of modern [[Deep Learning]] architectures. Within a decade of its introduction, Adam and its variant [[AdamW]] became the de-facto standard training algorithm for virtually all significant [[Large Language Model]] systems — including BERT, GPT-series, T5, LLaMA, Gemma, and Mistral — as well as for diffusion generative models including Stable Diffusion, DALL·E, and Imagen. This near-universal adoption reflects not merely convenience but the genuine empirical superiority of Adam-family methods on the massively over-parameterised, sparsely-activated model architectures that characterise contemporary [[Machine Learning]] practice.

    To understand why Adam achieved such dominance, it is instructive to trace the optimisation landscape it resolved. Before Adam, practitioners faced a difficult choice between two inadequate paradigms. [[Stochastic Gradient Descent]] with momentum (SGD+M) required careful, problem-specific learning rate scheduling: too high a learning rate caused divergence; too low a rate caused prohibitively slow convergence; and the single global learning rate was manifestly inadequate for [[Neural Network]] architectures with heterogeneous gradient scales across layers. The alternative, adaptive gradient methods, avoided this global rate problem but introduced their own difficulties: [[Adagrad]] accumulated gradient magnitudes without forgetting, causing learning rates to collapse to near zero in long training runs; [[RMSProp]] added exponential forgetting via moving averages of squared gradients but lacked a principled treatment of the transient zero-initialisation bias. Adam resolved both issues simultaneously — the exponential moving averages of both gradient and squared gradient provide memory-bounded adaptivity, while the bias correction terms explicitly account for the fact that these averages begin at zero, delivering an algorithm that begins training with well-calibrated step sizes and maintains them throughout.

    From a mathematical standpoint, Adam maintains two running statistics per model parameter: the first moment estimate m_t, an exponentially weighted moving average of past gradients g_t with decay rate β₁ (default 0.9), and the second moment estimate v_t, an exponentially weighted moving average of g_t² with decay rate β₂ (default 0.999). Because both are initialised at zero, they are biased towards zero in early iterations; Adam corrects this by dividing by (1 − β₁^t) and (1 − β₂^t) respectively to obtain the bias-corrected estimates m̂_t and v̂_t. The parameter update then takes the form θ_{t+1} = θ_t − α · m̂_t / (√v̂_t + ε), where α is the global learning rate and ε (default 1e-8) provides [[Numerical Stability]] by preventing division by near-zero values. This formulation effectively implements a per-parameter preconditioned gradient step whose effective step size is bounded regardless of gradient magnitude, in contrast to plain SGD whose step size scales linearly with gradient norm. The algorithm runs in O(n) time and O(n) space per update step (where n is the number of parameters), and requires storing two additional vectors per parameter (the moment estimates), giving a 3× memory overhead relative to SGD — a cost that 8-bit Adam quantisation schemes reduce substantially by compressing moment vectors to 8-bit precision using block-wise dynamic quantisation.

    The practical impact of Adam's design on real-world training trajectories is substantial. In the training of BERT (Devlin et al., 2019, 110M and 340M parameters), AdamW with learning rate warm-up and linear decay produced stable convergence over 1 million steps across 3.3 billion words of text, a regime where SGD with any fixed learning rate would have been unusable. For GPT-3 (Brown et al., 2020, 175B parameters), AdamW with cosine annealing from peak learning rate 6×10⁻⁵ over 300 billion tokens achieved the language modelling performance that demonstrated emergent few-shot capabilities. LLaMA-3 (Meta, 2024, 8B–70B parameters) used AdamW with β₁=0.9, β₂=0.95, ε=1e-5, weight decay=0.1, and a cosine schedule with warm-up — a recipe that has become the empirical baseline for LLM training and is essentially identical to that used by Gemma (Google), Mistral, and Phi (Microsoft). The convergence curves of these systems are notably smooth compared to SGD, reflecting Adam's gradient smoothing properties, and the training of models at this scale would be practically infeasible without Adam's insensitivity to gradient scale variation.

    The relationship between Adam and generalisation has been debated since at least 2017. Several empirical studies on image classification benchmarks (notably CIFAR-10 and ImageNet) found that [[SGD with Momentum]] achieves lower test error than Adam despite Adam's faster training loss convergence, suggesting Adam converges to sharper minima in the loss landscape that generalise less well. Wilson et al. (2017) presented systematic evidence of this marginal value of momentum for small learning rate SGD, and Keskar et al. (2017) characterised the relationship between large-batch SGD (which behaves more Adam-like in its gradient noise) and flat versus sharp minima. The working hypothesis — that Adam's adaptive normalisation of gradient directions allows it to converge into narrower valleys with lower training loss but inferior generalisation — has not been definitively refuted but has been substantially recontextualised by the observation that for [[Transformer Architecture]] systems at LLM scale, no such gap exists: the over-parameterised setting ensures that any converged point in the loss landscape is in the vicinity of many other near-zero-loss solutions, and the basin of attraction is effectively wide regardless of the optimiser. Reddi et al. (2018) further identified a theoretical failure mode: the original Adam algorithm lacks a formal convergence guarantee in convex settings because the running average v_t can oscillate, preventing the effective learning rate from eventually going to zero. Their proposed fix, [[AMSGrad]], uses a running maximum v̂_t = max(v̂_{t-1}, v_t) to ensure the effective learning rate is monotonically non-increasing; however, AMSGrad's own convergence proof was subsequently found to have a flaw in hyperparameter handling, and in practice AMSGrad rarely outperforms Adam on modern large-scale tasks. The issue was later recontextualised: the convergence analysis of [[AdamW]] (Zhang et al., 2025) established formal ℓ₁-norm convergence rates of O(√d / K^{1/4}) for non-convex stochastic settings, providing the theoretical grounding the community had long sought.

    A less-discussed but practically significant aspect of Adam's design is its interaction with gradient clipping and batch size. [[Gradient Clipping]] — truncating gradient vectors to a maximum global norm before the Adam update — is a near-universal component of LLM training recipes, typically with a clip value of 1.0 or 0.5. Clipping interacts with Adam's normalisation in a non-trivial way: it prevents catastrophic updates when gradients spike (as can occur in [[Transformer Architecture]] models when attention entropy collapses to near-degenerate distributions), but it also partially undoes the per-parameter adaptivity by imposing a global norm constraint. The practical recipe of AdamW + cosine schedule + warm-up + gradient clipping is therefore a composite intervention whose individual components cannot be fully understood in isolation, and empirical recipes for new model architectures are typically derived from slight modifications of well-known templates rather than principled hyperparameter optimisation from scratch. This is one of the motivations for the µP (maximal update parametrisation) framework, which provides principled width and depth scaling of learning rates and momentum coefficients so that hyperparameters tuned on a small proxy model transfer faithfully to larger models, reducing the cost of the empirical recipe discovery process.

  - ## Algorithm and Mathematical Framework

    The Adam algorithm, expressed in pseudocode notation:

    - **Initialise**: θ₀ (parameters), m₀ = 0 (first moment), v₀ = 0 (second moment), t = 0
    - **At each step t**:
      - t ← t + 1
      - g_t ← ∇_θ f_t(θ_{t-1})  (stochastic gradient from mini-batch)
      - m_t ← β₁ · m_{t-1} + (1 − β₁) · g_t  (first moment update)
      - v_t ← β₂ · v_{t-1} + (1 − β₂) · g_t²  (second moment update, element-wise square)
      - m̂_t ← m_t / (1 − β₁^t)  (bias-corrected first moment)
      - v̂_t ← v_t / (1 − β₂^t)  (bias-corrected second moment)
      - θ_t ← θ_{t-1} − α · m̂_t / (√v̂_t + ε)  (parameter update)
    - **Default hyperparameters**: α = 0.001, β₁ = 0.9, β₂ = 0.999, ε = 1e-8

    The second moment estimate v_t functions as a per-parameter diagonal pre-conditioner: parameters whose gradients have historically had high variance (large v_t) receive smaller effective updates, while parameters with consistently small gradients receive proportionally larger updates. This implicit normalisation is why Adam handles heterogeneous gradient scales across different parts of a neural network — such as the dramatically different gradient magnitudes between embedding layers and feed-forward projection layers in [[Transformer Architecture]] models — far more gracefully than SGD.

    The ε hyperparameter deserves attention beyond its stated purpose of numerical stability. In practice, ε interacts with gradient scale: with standard 32-bit precision, ε = 1e-8 is generally safe, but in [[Mixed Precision Training]] (FP16/BF16), gradients can be so small that √v̂_t approaches ε, causing the adaptive term to collapse to a constant and reducing Adam to plain gradient descent for those parameters. Many practitioner recipes therefore raise ε to 1e-6 or even 1e-5 for mixed-precision runs, and this sensitivity has motivated the development of variants with more robust normalisation.

  - ## Components / Architecture

    - **First Moment Estimate (m_t)**: An [[Exponential Moving Average]] of past gradients. Controlled by β₁ (default 0.9), this term provides a momentum effect, smoothing gradient directions over recent history. Algebraically equivalent to a momentum term but with built-in bias correction. The first moment estimate is the primary source of Adam's ability to navigate flat loss surface regions where gradients are noisy but consistently directed.
    - **Second Moment Estimate (v_t)**: An [[Exponential Moving Average]] of past squared gradients (element-wise). Controlled by β₂ (default 0.999), this term estimates the per-parameter gradient variance. The long memory (β₂ = 0.999 decays to ~0.37 only after ~1000 steps) ensures that infrequently updated parameters, such as those associated with rare vocabulary tokens in [[Large Language Model]] embedding layers, accumulate sufficient gradient history before their adaptive rate stabilises.
    - **Bias Correction**: The division by (1 − β₁^t) and (1 − β₂^t) is the key design differentiator separating Adam from [[RMSProp]]. Early in training (small t), β^t ≈ β, so the divisors are close to (1 − β), amplifying the moment estimates back towards their true values. Without this correction, Adam would significantly underestimate gradient magnitude in the first few hundred steps, producing overly conservative updates that slow convergence.
    - **Adaptive Learning Rate Computation**: The ratio m̂_t / (√v̂_t + ε) computes a signal-to-noise ratio per parameter: when a parameter's gradients are consistent in direction but varying in magnitude, the result is a normalised update close to ±1 in signal-to-noise terms. This intrinsic normalisation is why Adam is far less sensitive to the global learning rate α than SGD, reducing the need for extensive learning rate sweeps.
    - **Global Learning Rate (α)**: Despite Adam's adaptive nature, the global α remains important, particularly for [[Fine-Tuning]] runs where setting α too high can destabilise pre-trained weights. Typical values: 1e-3 for training from scratch, 1e-4 to 5e-5 for fine-tuning, 3e-4 for LoRA/QLoRA parameter-efficient fine-tuning.
    - **Numerical Stability Epsilon (ε)**: Default 1e-8 for FP32; recommended 1e-6 to 1e-7 for FP16/BF16 mixed precision to prevent adaptive term collapse.

  - ## Variants and Major Families

    - **[[AdamW]] (Loshchilov and Hutter, 2017)**: Decouples [[Weight Decay]] from the gradient update by applying L2 regularisation directly to the parameters rather than to the gradient before the adaptive scaling step. In the original Adam formulation, adding L2 regularisation to the loss causes the regularisation signal to be divided by √v̂_t, making regularisation weaker for parameters with high gradient variance — precisely those that tend to overfit. AdamW corrects this by computing θ_t ← θ_{t-1} − α · (m̂_t / (√v̂_t + ε) + λθ_{t-1}), where λ is the weight decay coefficient applied directly to the parameter. This distinction matters significantly in practice: for BERT fine-tuning benchmarks, AdamW outperforms Adam with L2 regularisation across GLUE tasks, and all major LLM training recipes now specify AdamW exclusively.
    - **[[AdaFactor]] (Shazeer and Stern, 2018)**: Addresses Adam's 2× memory overhead by factorising the second moment matrix for matrix-valued parameters. Instead of storing a full vector v_t of size n×m, AdaFactor stores a rank-1 approximation using two vectors of size n and m, reducing memory from O(nm) to O(n+m) per layer. AdaFactor eliminates the first moment entirely (or uses a scaled form) and applies update clipping for stability. Google used AdaFactor to train T5 (11B parameters), PaLM (540B), and other large-scale models where full AdamW was memory-prohibitive.
    - **AMSGrad (Reddi et al., 2018)**: Addresses the theoretical non-convergence issue in original Adam by replacing v̂_t with v̄_t = max(v̄_{t-1}, v̂_t), ensuring the effective learning rate is monotonically non-increasing. In practice, [[AMSGrad]] rarely outperforms Adam on modern over-parameterised networks because the convergence failure mode identified by Reddi et al. does not occur in typical deep learning settings.
    - **8-bit Adam (Dettmers et al., 2021)**: Quantises the first and second moment vectors to 8-bit precision using block-wise dynamic quantisation (splitting the moment vectors into blocks of 256 elements, computing per-block scale factors, and quantising within each block). Achieves ~3.7× memory reduction for optimiser states with less than 0.1% accuracy degradation on most tasks. Widely used in memory-constrained [[Fine-Tuning]] scenarios (Hugging Face bitsandbytes integration), enabling AdamW fine-tuning of 13B+ parameter models on single 24 GB GPUs.
    - **Adam-mini (Zhang et al., 2024)**: Partitions the second moment into groups sharing a single learning rate, reducing moment storage by 45–70% compared to AdamW while maintaining competitive convergence. Demonstrated 49.6% memory reduction versus AdamW on LLaMA2-7B pre-training with matched validation perplexity.
    - **Adan (Xie et al., 2022)**: Incorporates Nesterov look-ahead into all three components of the moment estimates (gradient, gradient difference, and squared gradient difference), effectively computing a higher-order approximation of the curvature direction. Reported improvements over AdamW on [[Vision Transformer]] and [[Recurrent Neural Network]] training.
    - **Lion Optimiser (Chen et al., 2023)**: Uses only the sign of the momentum estimate (sign(β₁·m_{t-1} + (1−β₁)·g_t)) as the parameter update, drastically reducing memory to that of SGD (one moment vector). [[Lion Optimiser]] effectively implements a constrained optimisation step within an ℓ∞ norm ball, providing constant update magnitude per parameter. Claimed to match or exceed AdamW on several image classification and text generation benchmarks at lower memory cost, though subsequent evaluations showed mixed results depending on model scale.
    - **[[Muon Optimiser]] (Jordan et al., 2024)**: Orthogonalises gradient updates for matrix-valued parameters via a truncated Newton-Schulz iteration (5 steps), replacing Adam's element-wise adaptive scaling with a geometry-aware update that approximates the steepest descent direction in spectral norm. In NanoGPT speedrunning benchmarks, Muon achieved 35% faster training than AdamW; at 1.5B parameters it reached GPT-2 XL-equivalent perplexity approximately 25% faster. By February 2025, Muon had been shown to require only ~52% of the FLOPs of AdamW to achieve equivalent performance on a 16B parameter model trained on 5.7T tokens. Production adoption by Kimi-K2 (1T parameters) and GLM-5 (744B parameters) as of mid-2025 signals that Muon is a serious long-term challenger to AdamW, though it requires Adam-based fallback for embedding and classification head parameters (which are not matrix-valued in the sense required by Newton-Schulz).

  - ## Use Cases

    - **[[Large Language Model]] Pre-Training**: AdamW is the canonical choice for pre-training GPT-series, LLaMA (Meta), Gemma (Google), and Mistral models. Standard recipes specify β₁=0.9, β₂=0.95 (lower than the default 0.999, as the shorter effective memory window improves early-training dynamics), ε=1e-8, with cosine annealing [[Learning Rate Schedule]] from a peak α of 3e-4 or lower, preceded by 1000-4000 step linear warm-up. Weight decay λ is typically 0.1. The β₂=0.95 setting (rather than 0.999) is particularly important: at 0.999, the second moment requires approximately 1000 steps to accumulate meaningful gradient history, causing inefficient early-training dynamics for very large batch sizes. At 0.95, the effective memory window is ~20 steps, allowing the second moment to adapt quickly to the non-stationary gradient statistics of early training when the [[Loss Function]] landscape is rapidly evolving.
    - **[[Vision Transformer]] Training**: ViT-B/16 and larger vision models are trained with AdamW, typically with α=3e-3 to 1e-3, cosine annealing, and relatively high weight decay (0.05-0.3) to counteract the tendency of attention-based architectures to overfit on ImageNet-scale datasets. The Lion Optimiser has shown competitive results on some ViT benchmarks at lower memory cost. CLIP and other contrastive vision-language models use AdamW with large batches (up to 32K) and carefully tuned weight decay, benefiting from AdamW's stable behaviour under large-batch regimes where vanilla Adam can be less stable.
    - **[[Diffusion Model]] Training**: Stable Diffusion (Latent Diffusion), DALL·E, and Imagen all use AdamW with cosine annealing. The denoising score matching objective presents a relatively benign loss landscape for Adam-family methods, and the long training horizons (hundreds of thousands of steps on billions of image-text pairs) benefit from AdamW's stable convergence properties. EMA of model weights (not to be confused with the [[Exponential Moving Average]] of gradients within Adam) is typically applied separately to produce the final model checkpoint.
    - **[[Reinforcement Learning]] Policy Gradient**: PPO (Proximal Policy Optimisation), A3C, and SAC all use Adam to update actor and critic networks. The non-stationary, high-variance reward signals of [[Policy Gradient Methods]] particularly benefit from Adam's momentum smoothing, which effectively low-pass-filters the noisy policy gradient estimates before updating network weights. Standard α=3e-4 with [[Gradient Clipping]] to global norm 0.5 is the PPO default, with Adam's β₁ providing the temporal smoothing that prevents abrupt policy changes from cascading into instability.
    - **[[Fine-Tuning]] and Parameter-Efficient Fine-Tuning (PEFT)**: LoRA, QLoRA, and adapter-based methods pair AdamW with very low α (1e-4 to 5e-5) and gradient clipping. 8-bit AdamW (via bitsandbytes) enables QLoRA fine-tuning of 65B models on 4× A100 GPUs. Per the 2025 MLPerf Training benchmark, 8-bit optimisers achieve 78% memory reduction while retaining 98.2% of full-precision accuracy. The key practical consideration for PEFT is that only the adapter or LoRA parameters are updated, so the Adam moment vectors are only allocated for the small number of trainable parameters — reducing the effective memory overhead even without quantisation.
    - **[[Federated Learning]]**: Federated variants of Adam (FedAdam, FedProx with Adam) compensate for the non-i.i.d. data distribution across local clients by using server-side adaptive learning rates, with client updates aggregated as pseudo-gradients. Adam's robustness to gradient noise is especially valuable when local gradients differ substantially between clients due to data heterogeneity. In medical imaging federated learning (NHS-relevant setting), FedAdam consistently outperforms FedSGD on heterogeneous hospital datasets, where local training on highly unbalanced class distributions produces noisy gradients that benefit from adaptive normalisation.
    - **Scientific Machine Learning**: Physics-Informed Neural Networks (PINNs), neural ODEs, and neural operators use Adam as the default because the multi-objective physics + data loss terms create heterogeneous gradient scales across different physical constraints, which Adam's per-parameter adaptivity handles naturally without requiring manual loss balancing. Typical training runs use a two-phase schedule: Adam for initial convergence (first 10,000–50,000 steps) followed by L-BFGS for fine-grained convergence near a stationary point. The University of Leeds and Sheffield have active PINN research groups applying these schedules to fluid dynamics and structural mechanics problems respectively.
    - **[[Natural Language Processing]] Tasks**: Text classification, named-entity recognition, question answering, and summarisation fine-tuning all default to AdamW. The Hugging Face Transformers `TrainingArguments` API exposes AdamW with sensible defaults (α=5e-5, weight_decay=0.01), effectively standardising Adam-family use across a large fraction of NLP practitioners. The GLUE and SuperGLUE benchmarks were established using BERT fine-tuned with AdamW, making Adam-family methods the implicit baseline against which all NLP optimiser research is compared.
    - **[[Distributed Training]]**: When training across multiple GPUs or nodes, Adam's moment estimates are accumulated locally and require synchronisation via all-reduce operations (or are computed on aggregated gradients). The gradient compression schemes used in distributed training (PowerSGD, TopK sparsification) interact with Adam's second moment: sparse gradient updates can cause v_t to decay rapidly for infrequently communicated parameters, requiring special handling in compressed distributed Adam implementations. ZeRO (Zero Redundancy Optimizer) stages in DeepSpeed partition Adam's moment vectors across devices, enabling training of 100B+ models without per-device memory bottlenecks.

  - ## Limitations and Known Failure Modes

    Despite its dominance, Adam has well-documented failure modes and theoretical limitations that have motivated the development of variants and alternatives:

    - **Generalisation Gap on Image Classification**: On CIFAR-10, CIFAR-100, and ImageNet benchmarks with standard ResNet architectures, well-tuned SGD+Momentum consistently achieves 0.5–2% lower test error than Adam or AdamW. Wilson et al. (2017) provided systematic evidence for this, and the effect has been replicated across multiple architectures. The hypothesis is that Adam's per-parameter normalisation leads it to converge into sharper minima (narrower basins in the [[Loss Function]] landscape) that generalise less well. This limitation is specific to image classification with convolutional networks trained from scratch; it does not appear to hold for [[Transformer Architecture]] models or for fine-tuning pre-trained models.
    - **Non-Convergence in Convex Settings**: Reddi et al. (2018) provided a theoretical counter-example demonstrating that Adam can fail to converge even on simple convex problems when the optimal learning rate for different parameters differs by large factors. The root cause is that the second moment estimate v_t can cycle between large and small values, causing the effective learning rate to also cycle rather than decay to zero. This failure mode does not arise in typical deep learning practice (where the landscape is non-convex and convergence to a stationary point rather than a global minimum is the goal), but it motivated the creation of [[AMSGrad]].
    - **Memory Overhead**: Adam requires 2× the memory of SGD for optimiser states (two moment vectors per parameter, each the same size as the parameter vector). For a 7B parameter model in FP32, this amounts to 56 GB of optimiser state memory on top of the 28 GB for the parameters themselves — making naive Adam training of large models impossible without 8-bit quantisation, gradient checkpointing, or [[Gradient Accumulation]] across many micro-batches.
    - **Coupled L2 Regularisation in Original Formulation**: The original Adam algorithm absorbs L2 regularisation into the gradient before the adaptive scaling step, causing the effective regularisation strength to be divided by √v̂_t. This weakens [[Regularisation]] precisely for parameters with large gradient variance — those that tend to overfit most. [[AdamW]]'s decoupled formulation is now universally preferred for any setting where weight decay is used.
    - **Sensitivity to ε in Mixed Precision Training**: The ε parameter interacts critically with gradient scale in [[Mixed Precision Training]] (FP16/BF16). When gradients are small (as can happen with BF16 and certain loss scales), √v̂_t may approach ε, collapsing the adaptive normalisation and effectively converting Adam to plain gradient descent. Raising ε to 1e-6 or 1e-7 in mixed-precision settings is now standard practitioner advice, but this sensitivity is an ergonomic failure mode absent from algorithms designed with mixed precision in mind.
    - **Non-Stationarity of Effective Learning Rate**: Although Adam's effective per-parameter learning rate is bounded by α/(1−β₁), the actual per-parameter rate varies dynamically as gradient statistics evolve during training. This non-stationarity means that a learning rate schedule designed to control convergence at the global level (e.g., cosine annealing of α) does not translate straightforwardly into a per-parameter learning rate schedule, complicating analysis and making it harder to provide convergence guarantees with tight constants.

  - ## Academic Context

    The Adam optimiser sits within the research lineage of adaptive gradient methods pioneered by Duchi, Hazan, and Singer's [[Adagrad]] (2011), which introduced per-parameter learning rates based on the sum of squared gradients. Adagrad accumulated gradient magnitudes without forgetting, causing learning rates to collapse to near zero in long training runs — unsuitable for non-convex and long-horizon deep learning training. Zeiler's Adadelta (2012) and Hinton's [[RMSProp]] (2012, unpublished Coursera lecture) independently proposed using exponential moving averages of squared gradients to address the forgetting problem: RMSProp in particular is essentially Adam without the first moment or bias correction. Kingma and Ba's key contribution was synthesising [[RMSProp]]'s second-moment EMA with Polyak-Ruppert momentum into a single coherent update rule with bias correction, and providing a formal convergence analysis under the online convex optimisation framework of Zinkevich (2003). Their regret bound, proportional to √T where T is the number of steps, matched the best known results for adaptive methods at the time, though subsequent work (Reddi et al., 2018) identified a flaw in the bound's proof for non-convex settings.

    The historical context of Adam's development is also notable. Diederik Kingma developed Adam while at the University of Amsterdam and the Machine Learning Group at the Max Planck Institute; the paper was a collaboration with Jimmy Ba, then a PhD student at the University of Toronto (under Geoffrey Hinton, one of the pioneers of [[Backpropagation]] and [[Deep Learning]]). The paper was submitted to ICLR 2015 and received a combined 1,200+ citations within three years, rapidly becoming one of the most-cited papers in machine learning history with over 170,000 citations by 2026 — a testament to the practical impact of the algorithm on the entire field.

    The convergence theory of Adam has been an active research area with a somewhat turbulent history. Reddi et al. (2018) demonstrated that the original Adam can diverge in convex settings with a counter-example involving a specific three-step gradient sequence, proposing [[AMSGrad]] as a fix. However, AMSGrad's own proof was later found to have a flaw in hyperparameter handling (Chen et al., 2018), and AMSGrad does not outperform Adam in practice. More recent theoretical work has focused on characterising Adam's convergence under practically relevant assumptions: Défossez et al. (2022) proved convergence for Adam in non-convex settings under bounded gradient assumptions with a rate of O(log(T)/√T), and Zhang et al. (2025) established an O(√d/K^{1/4}) convergence rate for AdamW measured in ℓ₁ norm, providing the first rigorous bound that accounts for the dimensionality d of the parameter space and the interaction between adaptive learning rates and non-convex loss landscapes. The spectral clipping work (arXiv:2603.14315, 2026) demonstrates that enhancing LLM training with spectral norm gradient clipping integrated into the Adam update can improve sample efficiency, pointing to ongoing theoretical and practical refinements to the canonical algorithm.

    Empirical analysis of when and why Adam outperforms SGD has revealed that the advantage concentrates in two key settings. First, [[Natural Language Processing]] tasks with embedding layers that contain highly sparse gradients (most embedding rows receive zero gradient for any given batch): Adam's memory of historical gradient magnitudes prevents these embeddings from having their learning rates collapse despite rare updates, whereas SGD with any fixed rate either undertrains frequently-occurring tokens (low rate) or diverges on high-frequency ones (high rate). Second, [[Transformer Architecture]] models with attention mechanisms whose gradient magnitudes vary by orders of magnitude between heads, layers, and parameter types: Adam's per-parameter normalisation automatically calibrates the effective step size for each, whereas SGD requires careful layer-wise learning rate tuning or sophisticated learning rate schedules that Adam renders unnecessary. This understanding has been formalised by Zhang et al. (2020) in their analysis of why adaptive methods are particularly well-suited to attention models.

    Key research groups working on adaptive optimisation include: the original authors' groups (Kingma at OpenAI/Google, Ba at University of Toronto/Google DeepMind); the Hugging Face research team (AdamW adoption and recipe standardisation); Tim Dettmers (University of Washington, 8-bit Adam, QLoRA); the NanoGPT speedrunning community led by Keller Jordan, whose [[Muon Optimiser]] work (2024) has catalysed the most significant rethinking of the Adam paradigm since AdamW; Liu et al. at CMU (Sophia second-order optimiser); and the Cornell Optimisation wiki community, which maintains comprehensive comparative documentation of AdamW and related methods.

  - ## Current Landscape (2026)

    As of mid-2026, AdamW remains the dominant training optimiser for frontier AI systems, embedded as the default in PyTorch (`torch.optim.AdamW`), JAX/Optax (`optax.adamw`), TensorFlow/Keras (`tf.keras.optimizers.AdamW`), and the Hugging Face Transformers library. The MLPerf Training v4.0 benchmark suite mandates AdamW as the reference optimiser for BERT pre-training and ResNet-50 training, cementing its role as an industry reproducibility standard.

    The most significant development since 2024 is the emergence of [[Muon Optimiser]] as a serious challenger for large-scale matrix parameter optimisation. Production adoption at frontier AI labs — Kimi-K2 (1T parameters, Moonshot AI) and GLM-5 (744B parameters, Zhipu AI) — using Muon for transformer weight matrices while retaining AdamW for embeddings and biases marks the beginning of a hybrid optimiser paradigm. The PyTorch blog published an official Muon integration guide with DeepSpeed in early 2025, indicating mainstream framework support. However, Muon requires a separate Adam-family fallback for non-matrix parameters and careful per-parameter update scale calibration, creating implementation complexity that will likely limit broad adoption until cleaner abstractions emerge.

    Memory efficiency has become a central concern as model scales exceed 100B parameters. The bitsandbytes library's 8-bit Adam and AdamW implementations (Dettmers et al., 2021) are widely used for fine-tuning, achieving ~3.7× memory reduction. More aggressive approaches include Adam-mini (2024), which reduces moment memory by 45–70%, and Q-Adam-mini (2025), which achieves 8× GPU memory reduction versus full AdamW while retaining performance parity. SOAP (2024) attempts to combine AdaFactor's memory efficiency with Shampoo-style preconditioning, and GaLore (2024) projects gradients to a low-rank subspace before the Adam update, enabling full parameter fine-tuning of 7B models on consumer GPUs with 8 GB VRAM.

    The AdamS variant (2025, published at EMNLP), which uses momentum itself as a normaliser rather than squared gradients, claims to directly inherit AdamW's hyperparameters while offering improved convergence on GPT-2 and LLaMA2 up to 13B parameters, with strong theoretical guarantees. BDS-Adam (2025, Scientific Reports) integrates adaptive variance rectification with semi-adaptive gradient smoothing for improved stability on pathological loss landscapes. These variants indicate an ongoing research front targeting Adam's known failure modes rather than wholesale replacement.

    The generalisation gap between Adam and SGD documented in 2017-2018 has largely been recontextualised: it appears specific to small-scale convex-ish settings (CIFAR-scale image classification) rather than the massively over-parameterised transformer architectures that dominate practice. For LLM-scale models, no evidence exists that SGD achieves better final performance than AdamW, and the practical advantages of Adam (robustness, fast initial convergence, less hyperparameter sensitivity) are decisive.

  - ## UK Context

    The United Kingdom has contributed significantly to both the theoretical and applied development of adaptive optimisation. The Alan Turing Institute (headquartered in London, with university partners including Cambridge, Edinburgh, Oxford, UCL, and Warwick) hosts active research programmes in machine learning optimisation theory, with particular focus on convergence analysis for non-convex objectives and the intersection of optimisation with differential privacy. UCL's Machine Learning Group (home to researchers including Arthur Gretton and Marc Deisenroth) has published foundational work on kernel methods and variational inference that informs prior and posterior optimisation landscapes relevant to Bayesian approaches to Adam-family methods.

    The University of Edinburgh's School of Informatics houses the Edinburgh NLP group and the Probabilistic Modelling and Inference group, both of which produce work at the intersection of optimisation and language model training. The Edinburgh Data-Efficient NLP (DenLP) initiative has examined learning rate scheduling strategies for Adam across low-resource NLP settings, directly relevant to UK public sector AI deployments where training data is scarce. Imperial College London's Department of Computing maintains research threads in efficient deep learning training, including gradient compression and distributed optimisation that interact directly with Adam-family methods in federated and multi-device training scenarios relevant to NHS and defence applications.

    In Northern England, the University of Manchester's Department of Computer Science has published on neural network training dynamics and gradient flow in deep networks, with particular relevance to industrial IoT and smart manufacturing contexts in which edge-deployed models require efficient training on device. The University of Leeds has active research in scientific machine learning (PINNs and neural operators) where Adam is the default training algorithm for physics-constrained neural networks, with application to fluid dynamics modelling for advanced manufacturing in the Yorkshire region. The University of Sheffield's Machine Learning group has examined robust optimisation methods for safety-critical applications, including gradient clipping strategies relevant to the Adam update rule. Newcastle University's Digital Institute has explored federated Adam variants for distributed sensing applications in smart city and transport infrastructure contexts.

  - ## Standards and Industry Codification

    Adam is not governed by a formal standards body, but has been codified as a reproducible algorithm through multiple routes that have effectively standardised its implementation across the industry. The foundational specification is Kingma and Ba's arXiv paper (1412.6980), which provides pseudocode, default hyperparameters, and convergence analysis. The [[AdamW]] variant is specified in Loshchilov and Hutter's paper (arXiv:1711.05101) and is the variant implemented as the primary training algorithm in PyTorch (`torch.optim.AdamW`), JAX/Optax (`optax.adamw`), TensorFlow/Keras (`tf.keras.optimizers.AdamW`), and MXNet. The Hugging Face Transformers library's `TrainingArguments` class specifies AdamW as the default optimiser with `learning_rate=5e-5`, `weight_decay=0.0`, and `adam_epsilon=1e-8`, setting a de-facto standard for the NLP fine-tuning community.

    The MLPerf Training benchmark suite (maintained by MLCommons) mandates AdamW as the reference optimiser for its BERT pre-training benchmark, ResNet-50 training benchmark, and transformer machine translation benchmark, providing reproducibility-grade specifications of learning rate schedules, weight decay values, and hyperparameter defaults for each task. These benchmarks serve as the AI industry's closest analogue to a standards specification for training optimisers.

    Within the [[Large Language Model]] ecosystem, training recipes published as model cards or technical reports by Meta (LLaMA 1, 2, 3), Google (Gemma, PaLM, T5, Gemini), Mistral AI (Mistral 7B, Mixtral), and Microsoft (Phi series) uniformly specify AdamW with cosine learning rate schedules and linear warm-up, constituting a reproducibility standard for the LLM community. The use of β₂=0.95 (rather than the original 0.999) for LLM pre-training has emerged as a community consensus through empirical validation across multiple groups, though this has not been formally standardised in any document.

    The [[Machine Learning]] community treats Adam's default hyperparameters (β₁=0.9, β₂=0.999, ε=1e-8, α=1e-3) as near-universal starting points, with learning rate and weight decay being the primary tunable parameters in practice. The convergence of the community on these defaults — despite the lack of any formal standardisation — reflects the remarkable consistency of Adam's performance across domains.

  - ## Future Directions (2026-2030)

    The optimiser landscape is undergoing the most significant evolution since Adam's introduction in 2014. Several converging trends will shape the dominant training algorithms of 2026-2030:

    - **Geometry-Aware Methods Challenging Adam's Dominance**: The success of [[Muon Optimiser]] and its derivatives (Scion, Gluon, DION, MUD) signals a shift from element-wise diagonal preconditioning (Adam's approach) toward layer-wise geometry-aware updates that respect the spectral structure of weight matrices. By 2027-2028, it is plausible that frontier LLM training will use a hybrid approach with Muon-style orthogonalised updates for transformer weight matrices and Adam-style adaptive rates for embeddings, biases, and layer norms, with frameworks providing a unified API that selects the appropriate method per parameter group automatically. The MUD (MomentUm Decorrelation, arXiv:2603.17970, 2026) and Lions and Muons (arXiv:2506.04192, 2026) papers represent the cutting edge of this trajectory.
    - **Second-Order and Quasi-Second-Order Methods**: Sophia (Liu et al., 2024) uses a diagonal Hessian estimate to precondition Adam-style updates, reporting faster wall-clock convergence for language model training at the cost of additional per-step compute. SOAP (2024) combines Shampoo's matrix preconditioning with [[AdaFactor]]'s memory efficiency. As hardware accelerates Hessian-vector products (essential for curvature-aware methods), the cost premium of quasi-Newton methods will decrease, making them viable for large-scale training by 2028-2030. NOVAK (2026, arXiv:2601.07876) is a recent unified adaptive optimiser that attempts to bridge first-order and second-order methods within a single framework compatible with Adam's hyperparameter conventions.
    - **Quantised and Memory-Efficient Optimisers as Default**: The trajectory of 8-bit Adam, Adam-mini, and [[AdaFactor]] suggests that 4-bit optimiser state quantisation will become the default for fine-tuning by 2027, enabling full-parameter tuning of 70B+ models on single-node GPU clusters. The Q-Adam-mini (2025) approach of combining quantised moments with grouped learning rates points towards sub-linear memory optimisers as a practical standard. SMMF (Square-Matricized Momentum Factorization, 2024) represents another approach to memory reduction via factored momentum representations.
    - **Hyperparameter Transfer and Zero-Shot Configuration**: The µP (maximal update parametrisation) framework enables learning rate transfer across model scales, reducing the need for expensive hyperparameter sweeps. Combined with Adam's robustness to hyperparameter choice, µP+Adam configurations may enable near-zero-cost hyperparameter selection for new model architectures by 2028. The µP scaling exponents paper (arXiv:2407.05872, 2024) has begun mapping out how Adam's β₁, β₂, and ε should scale with model width and depth, providing principled guidance beyond the current empirical conventions.
    - **Optimisation for Non-Standard Training Objectives**: Reinforcement Learning from Human Feedback (RLHF) and Direct Preference Optimisation (DPO) training objectives present distinct gradient landscapes that challenge standard AdamW recipes. Research into objective-specific Adam variants — with tuned β₂, gradient clipping, and warm-up schedules for reward model and policy optimisation — will intensify as post-training becomes a larger fraction of total AI compute. Spectral gradient clipping (arXiv:2603.14315, 2026) has shown that replacing per-tensor global norm clipping with per-layer spectral norm clipping within the Adam update improves sample efficiency for LLM pre-training, suggesting that the canonical gradient clipping + Adam recipe will continue to evolve.
    - **Federated and Private Optimisation**: Differentially private training (DP-Adam, DP-SGD) with per-sample [[Gradient Clipping]] will become increasingly important as data regulation in the UK and EU under AI Act frameworks mandates privacy-preserving training for sensitive domains (healthcare, finance). The per-sample gradient norms required for DP clipping interact non-trivially with Adam's normalisation, and specialised DP-Adam variants that maintain utility under tight privacy budgets remain an open research problem. UK-specific regulation under the AI Regulation Act and NHS Data Trust frameworks will likely drive adoption of DP-Adam for clinical AI applications at scale.
    - **Asynchronous and Event-Driven Optimisation**: As inference-time compute (test-time adaptation, online fine-tuning) becomes standard practice, the batch-synchronous Adam paradigm will need to adapt to asynchronous gradient updates arriving from multiple inference contexts simultaneously. Asynchronous variants of Adam that update moment estimates from stale gradients without synchronisation barriers are an active research area, relevant to the always-online AI agents envisaged for the 2027-2030 period.

  - ## Research & Literature

    [1] Kingma, D. P. & Ba, J. (2015). Adam: A Method for Stochastic Optimization. International Conference on Learning Representations (ICLR 2015). arXiv:1412.6980.

    [2] Loshchilov, I. & Hutter, F. (2019). Decoupled Weight Decay Regularization. International Conference on Learning Representations (ICLR 2019). arXiv:1711.05101.

    [3] Reddi, S. J., Kale, S. & Kumar, S. (2018). On the Convergence of Adam and Beyond. International Conference on Learning Representations (ICLR 2018). openreview.net/pdf?id=ryQu7f-RZ.

    [4] Duchi, J., Hazan, E. & Singer, Y. (2011). Adaptive Subgradient Methods for Online Learning and Stochastic Optimization. Journal of Machine Learning Research, 12, 2121–2159.

    [5] Shazeer, N. & Stern, M. (2018). Adafactor: Adaptive Learning Rates with Sublinear Memory Cost. International Conference on Machine Learning (ICML 2018). arXiv:1804.04235.

    [6] Dettmers, T., Lewis, M., Belkada, Y. & Zettlemoyer, L. (2022). 8-bit Optimizers via Block-wise Quantization. International Conference on Learning Representations (ICLR 2022). arXiv:2110.02861.

    [7] Défossez, A., Bottou, L., Bach, F. & Usunier, N. (2022). A Simple Convergence Proof of Adam and Adagrad. Transactions on Machine Learning Research (TMLR). arXiv:2003.02395.

    [8] Jordan, K., Jin, Y., Kosson, A., et al. (2024). Muon: An Optimizer for Hidden Layers in Neural Networks. NanoGPT Speedrunning Competition; arXiv:2502.16982.

    [9] Chen, X., Liu, S., Sun, R. & Hong, M. (2019). On the Convergence of A Class of Adam-Type Algorithms for Non-Convex Optimization. International Conference on Learning Representations (ICLR 2019). arXiv:1808.02941.

    [10] Chen, X., Liang, C., Huang, D., et al. (2024). Symbolic Discovery of Optimization Algorithms (Lion). Neural Information Processing Systems (NeurIPS 2024). arXiv:2302.06675.

    [11] Xie, X., Wang, P., Zhu, Z., et al. (2022). Adan: Adaptive Nesterov Momentum Algorithm for Faster Optimizing Deep Models. arXiv:2208.06677.

    [12] Liu, H., Li, Z., Hall, D., Liang, P. & Ma, T. (2024). Sophia: A Scalable Stochastic Second-order Optimizer for Language Model Pre-training. International Conference on Learning Representations (ICLR 2024). arXiv:2305.14342.

    [13] Kwon, Y., Kim, J., Mahajan, D., et al. (2024). SOAP: Improving and Stabilizing Shampoo using Adam. arXiv:2409.11321.

    [14] Zhang, Y., Chen, C., Li, Z., et al. (2024). Adam-mini: Use Fewer Learning Rates to Gain More. arXiv:2406.16793.

    [15] Dettmers, T., Pagnoni, A., Holtzman, A. & Zettlemoyer, L. (2023). QLoRA: Efficient Finetuning of Quantized LLMs. Neural Information Processing Systems (NeurIPS 2023). arXiv:2305.14314.

    [16] Hu, E., Shen, Y., Wallis, P., et al. (2022). LoRA: Low-Rank Adaptation of Large Language Models. International Conference on Learning Representations (ICLR 2022). arXiv:2106.09685.

    [17] Zhao, R., et al. (2024). GaLore: Memory-Efficient LLM Training by Gradient Low-Rank Projection. International Conference on Machine Learning (ICML 2024). arXiv:2403.03507.

    [18] Zhuang, J., Tang, T., Ding, Y., Tatikonda, S., Dvornek, N., Papademetris, X. & Duncan, J. (2020). AdaBelief Optimizer: Adapting Stepsizes by the Belief in Observed Gradients. Neural Information Processing Systems (NeurIPS 2020). arXiv:2010.07468.

    [19] Zhang, J., Karimireddy, S. P., Veit, A., et al. (2020). Why Are Adaptive Methods Good for Attention Models? Neural Information Processing Systems (NeurIPS 2020). arXiv:1912.03253.

    [20] Keskar, N. S., Mudigere, D., Nocedal, J., Smelyanskiy, M. & Tang, P. T. P. (2017). On Large-Batch Training for Deep Learning: Generalization Gap and Sharp Minima. International Conference on Learning Representations (ICLR 2017). arXiv:1609.04836.

    [21] Wilson, A. C., Roelofs, R., Stern, M., Srebro, N. & Recht, B. (2017). The Marginal Value of Momentum for Small Learning Rate SGD. Neural Information Processing Systems (NeurIPS 2017). arXiv:1705.08292.

    [22] Zhang, B., Ghaisas, S., & Hou, S. (2025). On the O(√d / K^{1/4}) Convergence Rate of AdamW Measured by ℓ₁ Norm. arXiv:2505.11840.

    [23] Zhao, R., et al. (2024). Adapprox: Adaptive Approximation in Adam Optimization via Randomized Low-Rank Matrices. arXiv:2403.14958.

    [24] You, Y., Li, J., Reddi, S., et al. (2020). Large Batch Optimization for Deep Learning: Training BERT in 76 minutes. International Conference on Learning Representations (ICLR 2020). arXiv:1904.00962.

    [25] Huang, L., Qin, J., Zhou, Y., Zhu, F., Liu, L. & Shao, L. (2020). Normalization Techniques in Training DNNs: Methodology, Analysis and Application. IEEE Transactions on Pattern Analysis and Machine Intelligence. arXiv:2009.12836.

    [26] AdamS (2025). Momentum Itself Can Be A Normalizer for LLM Pretraining and Post-training. EMNLP 2025 Main. ACL Anthology: 2025.emnlp-main.543.

    [27] PyTorch. (2025). Using Muon Optimizer with DeepSpeed. PyTorch Blog. pytorch.org/blog/using-muon-optimizer-with-deepspeed/.

    [28] Dettmers, T. & Zettlemoyer, L. (2023). The Case for 4-bit Precision: k-bit Inference Scaling Laws. International Conference on Machine Learning (ICML 2023). arXiv:2212.09720.

- ### Provenance
  - sources:: Kingma & Ba (2014) arXiv:1412.6980; Loshchilov & Hutter (2017) arXiv:1711.05101; Reddi et al. (2018) ICLR openreview.net/pdf?id=ryQu7f-RZ; Dettmers et al. (2022) arXiv:2110.02861; Jordan et al. (2024) arXiv:2502.16982; Zhang et al. (2025) arXiv:2505.11840; AdamS EMNLP 2025 aclanthology.org/2025.emnlp-main.543/; PyTorch Muon blog pytorch.org/blog/using-muon-optimizer-with-deepspeed/; Shazeer & Stern (2018) arXiv:1804.04235; Chen et al. (2024) arXiv:2302.06675; Adam-mini arXiv:2406.16793
  - migration-date:: 2026-06-20T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm
