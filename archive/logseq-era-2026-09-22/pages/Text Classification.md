public:: true

# Text Classification

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:text-classification", "@type":"Page", "title":"Text Classification", "vc:slug":"text-classification", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:text-classification",
  "@type":"Class",
  "label":"Text Classification",
  "definition":"Text classification is the supervised natural-language-processing task of assigning one or more predefined categorical labels to a span of text such as a document, sentence, or query. It maps variable-length text inputs to a fixed label space using learned representations and a decision function. Common formulations include binary, multi-class, and multi-label classification over topics, sentiment, intent, or content policy categories.",
  "domain":"artificial-intelligence",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:natural-language-processing","label":"Natural Language Processing"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:natural-language-processing","label":"Natural Language Processing"}],
    "hasPart":[{"@id":"urn:ngm:class:tokenization","label":"Tokenisation"},{"@id":"urn:ngm:class:feature-engineering","label":"Feature Engineering"}],
    "requires":[{"@id":"urn:ngm:class:supervised-learning","label":"Supervised Learning"},{"@id":"urn:ngm:class:model-training","label":"Model Training"}],
    "uses":[{"@id":"urn:ngm:class:transformer-architecture","label":"Transformer Architecture"},{"@id":"urn:ngm:class:neural-network","label":"Neural Network"}],
    "enables":[{"@id":"urn:ngm:class:sentiment-analysis","label":"Sentiment Analysis"},{"@id":"urn:ngm:class:content-moderation","label":"Content Moderation"}],
    "implements":[{"@id":"urn:ngm:class:classification","label":"Classification"}],
    "contrastsWith":[{"@id":"urn:ngm:class:named-entity-recognition","label":"Named Entity Recognition"}],
    "relatedTo":[{"@id":"urn:ngm:class:information-retrieval","label":"Information Retrieval"},{"@id":"urn:ngm:class:large-language-model","label":"Large Language Model"},{"@id":"urn:ngm:class:deep-learning","label":"Deep Learning"}],
    "supports":[{"@id":"urn:ngm:class:foundation-model","label":"Foundation Model"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- Text classification assigns categorical labels to text using [[Supervised Learning]] over learned representations. It is a foundational task within [[Natural Language Processing]], typically realised with a [[Neural Network]] or [[Transformer Architecture]] feeding a [[Classification]] head.
- ### Overview
- The task reduces unstructured language to discrete decisions, letting downstream systems route, filter, rank, or summarise text at scale.
- Inputs range from short queries to long documents; outputs span a fixed label set that may be binary (spam vs not-spam), multi-class (topic categories), or multi-label (multiple simultaneous tags).
- Historically dominated by bag-of-words features with linear classifiers, the field shifted to dense embeddings and then to fine-tuned pretrained language models that capture context and word order.
- ### Mechanisms
- Preprocessing and [[Tokenisation]] convert raw characters into discrete units the model can consume.
- [[Feature Engineering]] or learned embeddings produce a vector representation of the text.
- A trained decision function maps the representation to label probabilities, optimised against labelled examples during [[Model Training]].
- Threshold selection and calibration turn probabilities into final label assignments, especially for multi-label settings.
- ### Applications
- Spam and abuse filtering, topic tagging, and routing of support tickets.
- [[Sentiment Analysis]] of reviews and social posts.
- [[Content Moderation]] pipelines that flag policy-violating text.
- Intent detection in conversational interfaces and search query understanding.
- ### Relationships
- partOf:: [[Natural Language Processing]]
- hasPart:: [[Tokenisation]]
- hasPart:: [[Feature Engineering]]
- requires:: [[Supervised Learning]]
- requires:: [[Model Training]]
- uses:: [[Transformer Architecture]]
- uses:: [[Neural Network]]
- enables:: [[Sentiment Analysis]]
- enables:: [[Content Moderation]]
- implements:: [[Classification]]
- contrastsWith:: [[Named Entity Recognition]]
- relatedTo:: [[Information Retrieval]]
- relatedTo:: [[Large Language Model]]
- relatedTo:: [[Deep Learning]]
- supports:: [[Foundation Model]]
- ### Provenance
- updated:: 2026-06-15
