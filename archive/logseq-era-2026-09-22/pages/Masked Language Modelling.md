public:: true

# Masked Language Modelling

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:masked-language-modelling", "@type":"Page", "title":"Masked Language Modelling", "vc:slug":"masked-language-modelling", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:masked-language-modelling",
  "@type":"Class",
  "label":"Masked Language Modelling",
  "definition":"Masked language modelling is a self-supervised pre-training objective in which random tokens of an input sequence are hidden and the model learns to predict them from the surrounding bidirectional context. By conditioning on both left and right context, it produces deep contextual representations of language. It is the objective popularised by BERT and underpins many encoder-based transformer models.",
  "domain":"machine-learning",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:pre-training","label":"Pre Training"}],
  "relations":{
    "hasPart":[{"@id":"urn:ngm:class:cross-entropy-loss","label":"Cross Entropy Loss"}],
    "uses":[{"@id":"urn:ngm:class:transformer","label":"Transformer"},{"@id":"urn:ngm:class:self-supervised-learning","label":"Self Supervised Learning"}],
    "partOf":[{"@id":"urn:ngm:class:pre-training","label":"Pre Training"}],
    "implements":[{"@id":"urn:ngm:class:self-supervised-learning","label":"Self Supervised Learning"}],
    "enables":[{"@id":"urn:ngm:class:representation-learning","label":"Representation Learning"},{"@id":"urn:ngm:class:fine-tuning","label":"Fine Tuning"}],
    "dependsOn":[{"@id":"urn:ngm:class:transformer","label":"Transformer"}],
    "supports":[{"@id":"urn:ngm:class:bert","label":"BERT"}],
    "requires":[{"@id":"urn:ngm:class:contextual-embedding","label":"Contextual Embedding"}],
    "contrastsWith":[{"@id":"urn:ngm:class:next-token-prediction","label":"Next Token Prediction"},{"@id":"urn:ngm:class:autoregressive-model","label":"Autoregressive Model"}],
    "bridgesTo":[{"@id":"urn:ngm:class:language-model","label":"Language Model"}],
    "relatedTo":[{"@id":"urn:ngm:class:word-embedding","label":"Word Embedding"},{"@id":"urn:ngm:class:representation-learning","label":"Representation Learning"},{"@id":"urn:ngm:class:loss-function","label":"Loss Function"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- Masked language modelling hides a random subset of input tokens and trains a model to reconstruct them from the full surrounding context. As a [[Pre Training]] objective it is a canonical form of [[Self Supervised Learning]], requiring no human labels because the masked tokens supply their own targets.
- Because prediction is conditioned on both preceding and following tokens, it yields bidirectional [[Contextual Embedding]] representations, contrasting with the left-to-right framing of [[Next Token Prediction]].
- ### Definition continued
- It is most associated with [[BERT]] and related encoder [[Transformer]] models, which fine-tune the pre-trained representations for downstream tasks.
- ### Overview
- During pre-training, a fixed proportion of tokens are replaced with a mask symbol, a random token, or left unchanged, and the model predicts the original token at masked positions.
- The training signal is a [[Cross Entropy Loss]] over the vocabulary at each masked position, a standard [[Loss Function]] for classification over discrete tokens.
- Bidirectional attention lets each masked position attend to the entire sequence, producing rich [[Representation Learning]] suited to understanding tasks.
- The resulting encoder is then adapted via [[Fine Tuning]] to tasks such as classification, extraction and retrieval.
- ### Mechanisms
- Masking strategy: random selection of token positions to corrupt, with a mix of mask, random and unchanged substitutions.
- Bidirectional encoding: transformer self-attention integrates context from both directions.
- Objective: maximise the likelihood of the original tokens at masked positions.
- Transfer: the pre-trained encoder is reused as a feature extractor or fine-tuned end to end.
- ### Applications
- Pre-training encoder language models for natural-language understanding.
- Producing contextual sentence and token embeddings for downstream tasks.
- Initialising models later adapted via [[Fine Tuning]].
- Powering retrieval, classification and sequence-labelling systems.
- ### Relationships
- subClassOf:: [[Pre Training]]
- hasPart:: [[Cross Entropy Loss]]
- uses:: [[Transformer]]
- uses:: [[Self Supervised Learning]]
- partOf:: [[Pre Training]]
- implements:: [[Self Supervised Learning]]
- enables:: [[Representation Learning]]
- enables:: [[Fine Tuning]]
- dependsOn:: [[Transformer]]
- supports:: [[BERT]]
- requires:: [[Contextual Embedding]]
- contrastsWith:: [[Next Token Prediction]]
- contrastsWith:: [[Autoregressive Model]]
- bridgesTo:: [[Language Model]]
- relatedTo:: [[Word Embedding]]
- relatedTo:: [[Representation Learning]]
- relatedTo:: [[Loss Function]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
