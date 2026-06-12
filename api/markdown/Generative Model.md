public:: true
alias:: GenerativeModel

# Generative Model
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d39bd703cf035304bea4e9428b76e043409e77d3f3b468138ff3fc484695eded",
  "@type": "Page",
  "vc:slug": "generative-model",
  "title": "Generative Model",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence",
      "vc:label": "Artificial Intelligence"
    },
    {
      "@id": "urn:visionflow:owl:class:machine-learning",
      "vc:label": "Machine Learning"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0840"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Generative Model"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:generative-model",
  "@type": "Class",
  "label": "Generative Model",
  "definition": "A class of machine learning models that learn the underlying probability distribution of training data and can sample novel instances from that distribution. Architectures include generative adversarial networks, variational autoencoders, diffusion models, normalising flows, and autoregressive transformers, covering domains such as text, image, audio, and code generation.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-model-architecture",
      "label": "AI Model Architecture"
    },
    {
      "@id": "urn:ngm:class:machine-learning-discipline",
      "label": "Machine Learning"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:generative-adversarial-network", "label": "Generative Adversarial Network"},
      {"@id": "urn:ngm:class:autoencoder", "label": "Autoencoder"},
      {"@id": "urn:ngm:class:diffusion-model", "label": "Diffusion Model"},
      {"@id": "urn:ngm:class:latent-diffusion", "label": "Latent Diffusion"},
      {"@id": "urn:ngm:class:large-language-models", "label": "Large Language Models"},
      {"@id": "urn:ngm:class:deep-generative-model", "label": "Deep Generative Model"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:text-generation", "label": "Text Generation"},
      {"@id": "urn:ngm:class:image-generation", "label": "Image Generation"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:deep-learning", "label": "Deep Learning"},
      {"@id": "urn:ngm:class:transformer", "label": "Transformer"}
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:generative-model:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:d39bd703cf035304bea4e9428b76e043409e77d3f3b468138ff3fc484695eded"
  },
  "vc:resolutions": [
    {
      "raw": "[[Artificial Intelligence]]",
      "resolved": "urn:visionflow:owl:class:artificial-intelligence",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Machine Learning Discipline]]",
      "resolved": "urn:visionflow:owl:class:machine-learning",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Machine learning models that can generate new data samples by learning the underlying distribution of training data, including architectures like GANs, VAEs, diffusion models, and transformers.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:GenerativeModel
  - owl-role:: Concept
  - belongs-to-domain:: [[Artificial Intelligence]]

- ### Relationships
  - is-subclass-of:: [[Machine Learning Discipline]]

- ### Content
  Generative Model — content pending enrichment.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
