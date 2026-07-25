public:: true

# Next Token Prediction

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:next-token-prediction", "@type":"Page", "title":"Next Token Prediction", "vc:slug":"next-token-prediction", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:next-token-prediction",
  "@type":"Class",
  "label":"Next Token Prediction",
  "definition":"Next token prediction is the autoregressive language-modelling objective in which a model predicts the next token in a sequence given all preceding tokens. Trained by maximising the likelihood of each token conditioned on its left context, it requires no explicit labels and scales to vast text corpora. It is the core pre-training objective behind generative transformer language models such as the GPT family.",
  "domain":"machine-learning",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:pre-training","label":"Pre Training"}],
  "relations":{
    "hasPart":[{"@id":"urn:ngm:class:cross-entropy-loss","label":"Cross Entropy Loss"}],
    "relatedTo":[{"@id":"urn:ngm:class:language-model","label":"Language Model"},{"@id":"urn:ngm:class:representation-learning","label":"Representation Learning"},{"@id":"urn:ngm:class:loss-function","label":"Loss Function"}],
    "uses":[{"@id":"urn:ngm:class:transformer","label":"Transformer"},{"@id":"urn:ngm:class:self-supervised-learning","label":"Self Supervised Learning"}],
    "implements":[{"@id":"urn:ngm:class:autoregressive-model","label":"Autoregressive Model"}],
    "partOf":[{"@id":"urn:ngm:class:pre-training","label":"Pre Training"}],
    "enables":[{"@id":"urn:ngm:class:fine-tuning","label":"Fine Tuning"},{"@id":"urn:ngm:class:language-model","label":"Language Model"}],
    "dependsOn":[{"@id":"urn:ngm:class:transformer","label":"Transformer"}],
    "supports":[{"@id":"urn:ngm:class:gpt","label":"GPT"}],
    "requires":[{"@id":"urn:ngm:class:self-supervised-learning","label":"Self Supervised Learning"}],
    "contrastsWith":[{"@id":"urn:ngm:class:masked-language-modelling","label":"Masked Language Modelling"}],
    "bridgesTo":[{"@id":"urn:ngm:class:representation-learning","label":"Representation Learning"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- Next token prediction trains a model to estimate the probability of the next token given all preceding tokens, an [[Autoregressive Model]] objective that drives generative [[Language Model]] pre-training. As a [[Pre Training]] task it is a form of [[Self Supervised Learning]], since the next token in any text supplies its own target.
- It differs from [[Masked Language Modelling]] in that prediction is strictly left-to-right, which makes the resulting model naturally suited to text generation.
- ### Overview
- The model processes a sequence and, at each position, outputs a probability distribution over the vocabulary for the following token.
- Training minimises a [[Cross Entropy Loss]] between the predicted distribution and the true next token, a standard generative [[Loss Function]].
- Causal masking in the [[Transformer]] ensures each position attends only to earlier tokens, preserving the autoregressive factorisation.
- At inference, tokens are generated one at a time and fed back as context, enabling open-ended text generation.
- ### Mechanisms
- Causal attention: a triangular mask prevents positions from attending to future tokens.
- Teacher forcing: during training the true previous tokens are supplied as context.
- Likelihood maximisation: the objective maximises the joint probability factorised over positions.
- Sampling: at generation time, decoding strategies select tokens from the predicted distribution.
- ### Applications
- Pre-training generative [[GPT]]-style language models.
- Producing transferable representations later adapted via [[Fine Tuning]].
- Text completion, summarisation, dialogue and code generation.
- Serving as the foundation for instruction-tuned and aligned assistants.
- ### Relationships
- subClassOf:: [[Pre Training]]
- hasPart:: [[Cross Entropy Loss]]
- relatedTo:: [[Language Model]]
- relatedTo:: [[Representation Learning]]
- relatedTo:: [[Loss Function]]
- uses:: [[Transformer]]
- uses:: [[Self Supervised Learning]]
- implements:: [[Autoregressive Model]]
- partOf:: [[Pre Training]]
- enables:: [[Fine Tuning]]
- enables:: [[Language Model]]
- dependsOn:: [[Transformer]]
- supports:: [[GPT]]
- requires:: [[Self Supervised Learning]]
- contrastsWith:: [[Masked Language Modelling]]
- bridgesTo:: [[Representation Learning]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
