public:: true

# Keras
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:965e8fb1c620d16bb7079a8617c0998dfc2fc91c09f61748e9aadde28db612ee",
  "@type": "Page",
  "vc:slug": "keras",
  "title": "Keras",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:deep-learning",
      "vc:label": "Deep Learning"
    },
    {
      "@id": "urn:visionflow:linked:machine-learning",
      "vc:label": "Machine Learning"
    },
    {
      "@id": "urn:visionflow:linked:deep-learning-framework",
      "vc:label": "Deep Learning Framework"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Keras"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:keras",
  "@type": "Class",
  "label": "Keras",
  "definition": "Keras is an open-source high-level neural network API written in Python, designed for fast experimentation. It runs on top of backends such as TensorFlow and is integrated as TensorFlow's official high-level interface.",
  "domain": "machine-learning",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:deep-learning-framework",
      "label": "Deep Learning Framework"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:keras:f6cc6ef87745",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:965e8fb1c620d16bb7079a8617c0998dfc2fc91c09f61748e9aadde28db612ee"
  },
  "vc:resolutions": [
    {
      "raw": "[[Deep Learning]]",
      "resolved": "urn:visionflow:linked:deep-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Machine Learning Discipline]]",
      "resolved": "urn:visionflow:linked:machine-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Deep Learning Framework]]",
      "resolved": "urn:visionflow:linked:deep-learning-framework",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Keras is an open-source high-level neural network API written in Python, designed for fast experimentation. It runs on top of backends such as TensorFlow and is integrated as TensorFlow's official high-level interface.

- ### Semantic Classification
  - owl-class:: machine-learning:Keras
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Deep Learning Framework]]
  - bridges-to:: [[Machine Learning Discipline]]
  - enables:: [[Deep Learning]]

- ### Content
  - Keras provides a user-friendly API for defining, training and evaluating neural networks using composable layers, models and training loops. Originally a standalone library supporting multiple backends, it became the official high-level interface of TensorFlow and later regained multi-backend support.
  - Its design emphasises readability and rapid prototyping, hiding lower-level tensor operations behind concise model definitions. Keras is widely used in education and research as an accessible entry point to deep learning.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
