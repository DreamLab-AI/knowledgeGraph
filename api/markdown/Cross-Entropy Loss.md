public:: true

# Cross-Entropy Loss
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cross-entropy-loss",
  "@type": "Page",
  "vc:slug": "cross-entropy-loss",
  "title": "Cross-Entropy Loss",
  "vc:public": true,
  "vc:outboundWikilinks": [],
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
      {"@id": "urn:ngm:class:gradient-descent", "label": "Gradient Descent"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:language-modeling", "label": "Language Modeling"},
      {"@id": "urn:ngm:class:supervised-learning", "label": "Supervised Learning"},
      {"@id": "urn:ngm:class:model-training", "label": "Model Training"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:transformer", "label": "Transformer"},
      {"@id": "urn:ngm:class:large-language-models", "label": "Large Language Models"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Cross-entropy loss is the negative log-likelihood objective that quantifies how well a model's predicted probability distribution matches true labels, enabling [[Supervised Learning]] via [[Backpropagation]] and [[Gradient Descent]].

- ### Relationships
  - Cross-entropy loss is computed forward through a model and its gradient flows back via [[Backpropagation]] to update parameters through [[Gradient Descent]] or its variants. It is the canonical objective for [[Language Modeling]] tasks—each auto-regressive step in [[Transformer]] architectures minimises the cross-entropy of the next token prediction, making it the foundational training signal for [[Large Language Models]]. It enables general [[Supervised Learning]] for classification, and its minimisation constitutes the core of [[Model Training]] across vision, NLP, and multi-modal domains.

- ### Content
  - Cross-entropy originates in Claude Shannon's 1948 information theory, where entropy quantifies the average bits required to encode a source, and cross-entropy H(p,q) measures the average bits needed to encode events from distribution p using a code optimised for q. The connection to machine learning was made explicit through the maximum likelihood estimation framework: for discrete outputs, minimising cross-entropy is identical to maximising the log-likelihood of the data under the model, placing it on firm probabilistic foundations.

  - For a classification task with C classes, the cross-entropy loss for a single example is -∑ᵢ yᵢ log(p̂ᵢ), where yᵢ is the one-hot true label and p̂ᵢ is the model's softmax-normalised predicted probability for class i. In the binary case this reduces to the binary cross-entropy or log-loss. For language modelling, the loss becomes the negative log-probability of the next token under the model's vocabulary distribution, averaged over sequence positions. The perplexity metric commonly reported for language models is exp(cross-entropy loss), giving a human-interpretable units of effective vocabulary size.

  - Cross-entropy loss is computationally attractive because its gradient with respect to the pre-softmax logits has a particularly clean form: the gradient is simply (p̂ - y), the difference between predicted and true probabilities. This eliminates the derivative of the softmax in the backward pass, making gradient computation efficient and numerically stable. The logarithm in the loss also prevents gradient saturation in early training when predicted probabilities are far from the target.

  - By 2024–2025 cross-entropy loss remains the dominant training objective for large language models, though refinements proliferate: label smoothing reduces overconfidence by softening one-hot targets; token-weighted loss addresses training data imbalance; DPO (Direct Preference Optimisation) reformulates preference learning as a modified cross-entropy; and multi-task learning combines cross-entropy terms from different output heads. Numerical stability in FP16/BF16 mixed-precision training requires careful implementation (log-sum-exp tricks) to prevent NaN gradients.