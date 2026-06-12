public:: true

# Deep Learning Domain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:72bc4bd2e22678d0dd58a18814acda8ce0979e6b8227479a3fe028e42f3baf3a",
  "@type": "Page",
  "vc:slug": "deep-learning-domain",
  "title": "Deep Learning Domain",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:convolutional-neural-network",
      "vc:label": "Convolutional Neural Network"
    },
    {
      "@id": "urn:visionflow:linked:transformer",
      "vc:label": "Transformer"
    },
    {
      "@id": "urn:visionflow:linked:recurrent-neural-network",
      "vc:label": "Recurrent Neural Network"
    },
    {
      "@id": "urn:visionflow:linked:backpropagation",
      "vc:label": "Backpropagation"
    },
    {
      "@id": "urn:visionflow:linked:representation-learning",
      "vc:label": "Representation Learning"
    },
    {
      "@id": "urn:visionflow:linked:machine-learning-domain",
      "vc:label": "Machine Learning Domain"
    },
    {
      "@id": "urn:visionflow:linked:linear-algebra",
      "vc:label": "Linear Algebra"
    },
    {
      "@id": "urn:visionflow:linked:compute-layer",
      "vc:label": "Compute Layer"
    },
    {
      "@id": "urn:visionflow:linked:computer-vision-domain",
      "vc:label": "Computer Vision Domain"
    },
    {
      "@id": "urn:visionflow:linked:natural-language-processing-domain",
      "vc:label": "Natural Language Processing Domain"
    },
    {
      "@id": "urn:visionflow:linked:generative-modelling-domain",
      "vc:label": "Generative Modelling Domain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Deep Learning Domain"
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
  "@id": "urn:ngm:class:deep-learning-domain",
  "@type": "Class",
  "label": "Deep Learning Domain",
  "definition": "The Deep Learning Domain covers learning with multi-layer neural networks that build hierarchical representations from data. Its scope includes network architectures, training and optimisation at scale, and representation learning. It is a sub-area of the Machine Learning Domain that supplies the dominant methods for perception and language. The boundary excludes shallow models such as linear classifiers and decision trees, which remain in the broader Machine Learning Domain.",
  "domain": "deep-learning",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:machine-learning-discipline-domain",
      "label": "Machine Learning Domain"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:convolutional-neural-network",
        "label": "Convolutional Neural Network"
      },
      {
        "@id": "urn:ngm:class:transformer",
        "label": "Transformer"
      },
      {
        "@id": "urn:ngm:class:recurrent-neural-network",
        "label": "Recurrent Neural Network"
      },
      {
        "@id": "urn:ngm:class:backpropagation",
        "label": "Backpropagation"
      },
      {
        "@id": "urn:ngm:class:representation-learning",
        "label": "Representation Learning"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:machine-learning-discipline-domain",
        "label": "Machine Learning Domain"
      },
      {
        "@id": "urn:ngm:class:linear-algebra",
        "label": "Linear Algebra"
      },
      {
        "@id": "urn:ngm:class:compute-layer",
        "label": "Compute Layer"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:computer-vision-domain",
        "label": "Computer Vision Domain"
      },
      {
        "@id": "urn:ngm:class:natural-language-processing-domain",
        "label": "Natural Language Processing Domain"
      },
      {
        "@id": "urn:ngm:class:generative-modelling-domain",
        "label": "Generative Modelling Domain"
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
  "@id": "urn:visionflow:annotation:link-resolutions:deep-learning-domain:a61ced2399fe",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:72bc4bd2e22678d0dd58a18814acda8ce0979e6b8227479a3fe028e42f3baf3a"
  },
  "vc:resolutions": [
    {
      "raw": "[[Convolutional Neural Network]]",
      "resolved": "urn:visionflow:linked:convolutional-neural-network",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Transformer]]",
      "resolved": "urn:visionflow:linked:transformer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Recurrent Neural Network]]",
      "resolved": "urn:visionflow:linked:recurrent-neural-network",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Backpropagation]]",
      "resolved": "urn:visionflow:linked:backpropagation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Representation Learning]]",
      "resolved": "urn:visionflow:linked:representation-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Machine Learning Domain]]",
      "resolved": "urn:visionflow:linked:machine-learning-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Linear Algebra]]",
      "resolved": "urn:visionflow:linked:linear-algebra",
      "kind": "StubLink"
    },
    {
      "raw": "[[Compute Layer]]",
      "resolved": "urn:visionflow:linked:compute-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Computer Vision Domain]]",
      "resolved": "urn:visionflow:linked:computer-vision-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Natural Language Processing Domain]]",
      "resolved": "urn:visionflow:linked:natural-language-processing-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Generative Modelling Domain]]",
      "resolved": "urn:visionflow:linked:generative-modelling-domain",
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
  - The Deep Learning Domain covers learning with multi-layer neural networks that build hierarchical representations from data. Its scope includes network architectures, training and optimisation at scale, and representation learning. It is a sub-area of the Machine Learning Domain that supplies the dominant methods for perception and language. The boundary excludes shallow models such as linear classifiers and decision trees, which remain in the broader Machine Learning Domain.

- ### Semantic Classification
  - owl-class:: dl:DeepLearningDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[Machine Learning Domain]]
  - bridges-to:: [[Computer Vision Domain]], [[Natural Language Processing Domain]], [[Generative Modelling Domain]]
  - has-part:: [[Convolutional Neural Network]], [[Transformer]], [[Recurrent Neural Network]], [[Backpropagation]], [[Representation Learning]]
  - requires:: [[Machine Learning Domain]], [[Linear Algebra]], [[Compute Layer]]
  - enables:: [[Computer Vision Domain]], [[Natural Language Processing Domain]], [[Generative Modelling Domain]]

- ### Content
  - The Deep Learning Domain studies neural networks composed of many layers, which learn successively more abstract features from raw input. Its scope covers the principal architectures, the optimisation methods that train them and the theory of representation learning. The boundary distinguishes deep, layered models from the shallow estimators of the wider machine learning field.
  - Member concepts include the Convolutional Neural Network for spatial data, the Transformer for sequence and attention-based modelling, the Recurrent Neural Network for temporal data, Backpropagation as the training algorithm and Representation Learning as the unifying principle. These depend on machine learning practice, linear algebra for tensor computation and the Compute Layer for accelerated training.
  - The domain bridges to and enables the Computer Vision and Natural Language Processing Domains, which it equips with their dominant methods, and the Generative Modelling Domain, whose neural generators it parameterises. Its scaling behaviour ties it closely to the Infrastructure Domain.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
