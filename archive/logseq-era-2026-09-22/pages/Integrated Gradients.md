public:: true

# Integrated Gradients
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9977245bcca5af1a7833528982e8131d326e896bbfe84888698c8e5bf90f283f",
  "@type": "Page",
  "vc:slug": "integrated-gradients",
  "title": "Integrated Gradients",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:feature-attribution", "vc:label": "Feature Attribution"},
    {"@id": "urn:visionflow:linked:lime", "vc:label": "LIME"},
    {"@id": "urn:visionflow:linked:shap", "vc:label": "SHAP"},
    {"@id": "urn:visionflow:linked:explainable-ai", "vc:label": "Explainable AI"}
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {"@id": "did:nostr:ontology-mesh"},
  "prov:generatedAtTime": {"@value": "2026-08-06T00:00:00Z", "@type": "xsd:dateTime"}
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:integrated-gradients",
  "@type": "Class",
  "label": "Integrated Gradients",
  "definition": "A gradient-based feature attribution method for differentiable models, introduced by Sundararajan, Taly, and Yan (2017), that assigns each input feature a contribution equal to the path integral of the model's gradient along the straight line from a neutral baseline input to the actual input; it uniquely satisfies the axioms of sensitivity and implementation invariance among path methods, its attributions sum exactly to the difference between the model's output and the baseline output (completeness), and it requires only gradient access rather than model retraining or sampling.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:feature-attribution",
    "label": "Feature Attribution"
  },
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:explainable-ai", "label": "Explainable AI"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:gradient", "label": "Gradient"},
      {"@id": "urn:ngm:class:backpropagation", "label": "Backpropagation"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:interpretability", "label": "Interpretability"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:lime", "label": "LIME"},
      {"@id": "urn:ngm:class:shap", "label": "SHAP"}
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "ResearchAugment"
  }
}
```

- ### Definition
  - "A gradient-based feature attribution method for differentiable models, introduced by Sundararajan, Taly, and Yan (2017), that assigns each input feature a contribution equal to the path integral of the model's gradient along the straight line from a neutral baseline input to the actual input; it uniquely satisfies the axioms of sensitivity and implementation invariance among path methods, its attributions sum exactly to the difference between the model's output and the baseline output (completeness), and it requires only gradient access rather than model retraining or sampling."

- ### Semantic Classification
  - owl-class:: machine-learning:IntegratedGradients
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Feature Attribution]]
  - requires:: [[Gradient]], [[Backpropagation]]
  - contrasts-with:: [[LIME]], [[SHAP]]

- ### Content

  ## Definition

  **Integrated Gradients** (IG) is a [[Feature Attribution]] method that answers the question "how much did each input feature contribute to this prediction?" for any differentiable model. Given an input x and a baseline x′ (a black image, a zero embedding, an all-masked token sequence), IG attributes to feature i the quantity (xᵢ − x′ᵢ) × ∫₀¹ ∂F(x′ + α(x − x′))/∂xᵢ dα — the gradient of the model output with respect to that feature, accumulated along the straight-line path from baseline to input.

  The method's distinctive contribution, from the paper "Axiomatic Attribution for Deep Networks" (ICML 2017), is its axiomatic grounding. Plain gradients violate *sensitivity*: a feature that changes the prediction can receive zero attribution because the model has saturated at the input. Integrating gradients along the path repairs this, while *implementation invariance* guarantees that two networks computing the same function receive the same attributions. The *completeness* property — attributions sum to F(x) − F(x′) — provides a built-in sanity check and makes attribution magnitudes comparable across examples.

  IG contrasts with the perturbation-based family: [[LIME]] fits a local surrogate model on randomly perturbed samples and [[SHAP]] estimates Shapley values by averaging over feature coalitions. Those methods work on black-box models but are stochastic and expensive; IG is deterministic and needs only 20–300 gradient evaluations via [[Backpropagation]], making it practical for large vision and language models. Its main sensitivities are the choice of baseline — which materially changes attributions and has no universally correct answer — and the fact that faithful attribution of a model is not the same as a faithful explanation of the world.

  ## Technical Details

  - **Computation**: the integral is approximated by a Riemann sum or Gauss–Legendre quadrature over m interpolated inputs (typically m = 20–300); the completeness gap measures approximation error and dictates m.
  - **Baseline choice**: black/blurred images, zero or PAD-token embeddings, class-neutral inputs, or expectations over a baseline distribution (as in expected gradients, which bridges IG and SHAP); reporting the baseline is essential for reproducibility.
  - **Variants**: expected gradients (SHAP-style baseline averaging), guided IG (path steered away from saturated regions), IDGI and blur IG for images, layer and neuron IG for internal attributions, and sequence aggregation schemes for transformer token attribution.
  - **Tooling**: first-class implementations in Captum (PyTorch), TensorFlow's tf-explain lineage, and Alibi; widely used for model debugging, spurious-correlation detection, and regulatory explanation evidence.
  - **Known critiques**: attribution instability under adversarial input shifts, baseline dependence, and studies showing gradient-based saliency can fail sanity checks — best practice pairs IG with deletion/insertion faithfulness metrics rather than visual inspection alone.

  ## Current Landscape

  - The method originates in "Axiomatic Attribution for Deep Networks" (Sundararajan, Taly, Yan), arXiv:1703.01365, presented at ICML 2017; the definitive completeness result and the sensitivity / implementation-invariance axioms it is built on remain the reference framing for path-based attribution.
  - IG is a first-class algorithm in **Captum** (PyTorch), which implements the straight-line path integral with Riemann-sum or Gauss–Legendre approximation (default `n_steps=50`) and returns a convergence delta from the completeness property as a built-in approximation-error check.
  - Active research continues to refine the path and baseline: Integrated Decision Gradients (IDG, arXiv:2305.20052, 2023) concentrates integration on the "decision region" of the path and uses adaptive, non-uniform sampling to cut Riemann-sum error and better satisfy the sensitivity axiom, joining earlier variants such as Guided IG, Blur IG and expected gradients.
  - IG stays widely used for model debugging, spurious-correlation detection and regulatory explanation evidence, with the persistent caveats that baseline choice materially changes attributions and that faithful attribution of a model is not the same as a faithful explanation of the world.

  **Sources**:
  - https://arxiv.org/abs/1703.01365
  - https://captum.ai/api/integrated_gradients.html
  - https://arxiv.org/html/2305.20052v2
