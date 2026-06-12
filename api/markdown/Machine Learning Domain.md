public:: true

# Machine Learning Domain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e8df423216252b21bd4c5fa129a2adb6aa378a98bf8602a3099d221da6897e27",
  "@type": "Page",
  "vc:slug": "machine-learning-domain",
  "title": "Machine Learning Domain",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:neural-network",
      "vc:label": "Neural Network"
    },
    {
      "@id": "urn:visionflow:linked:supervised-learning",
      "vc:label": "Supervised Learning"
    },
    {
      "@id": "urn:visionflow:linked:unsupervised-learning",
      "vc:label": "Unsupervised Learning"
    },
    {
      "@id": "urn:visionflow:linked:reinforcement-learning",
      "vc:label": "Reinforcement Learning"
    },
    {
      "@id": "urn:visionflow:linked:feature-engineering",
      "vc:label": "Feature Engineering"
    },
    {
      "@id": "urn:visionflow:linked:linear-algebra",
      "vc:label": "Linear Algebra"
    },
    {
      "@id": "urn:visionflow:linked:probability-theory",
      "vc:label": "Probability Theory"
    },
    {
      "@id": "urn:visionflow:linked:compute-layer",
      "vc:label": "Compute Layer"
    },
    {
      "@id": "urn:visionflow:linked:predictive-modelling",
      "vc:label": "Predictive Modelling"
    },
    {
      "@id": "urn:visionflow:linked:pattern-recognition",
      "vc:label": "Pattern Recognition"
    },
    {
      "@id": "urn:visionflow:linked:generative-modelling-domain",
      "vc:label": "Generative Modelling Domain"
    },
    {
      "@id": "urn:visionflow:linked:deep-learning-domain",
      "vc:label": "Deep Learning Domain"
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
      "@id": "urn:visionflow:linked:artificial-intelligence-domain",
      "vc:label": "Artificial Intelligence Domain"
    },
    {
      "@id": "urn:visionflow:linked:iso-iec-22989-2022",
      "vc:label": "ISO/IEC 22989:2022"
    },
    {
      "@id": "urn:visionflow:linked:iso-iec-23053-2022",
      "vc:label": "ISO/IEC 23053:2022"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Machine Learning Domain"
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
  "@id": "urn:ngm:class:machine-learning-discipline-domain",
  "@type": "Class",
  "label": "Machine Learning Domain",
  "definition": "The Machine Learning Domain covers the study of algorithms that improve their performance on a task through exposure to data rather than explicit programming. Its scope spans supervised, unsupervised and reinforcement paradigms, together with the statistical and optimisation theory that underpins them. It sits as a principal sub-area of the Artificial Intelligence Domain and acts as the methodological core on which most contemporary AI capabilities are built. The boundary of the domain excludes purely symbolic reasoning systems, which are classified under the Knowledge Representation Domain.",
  "domain": "machine-learning",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:artificial-intelligence-domain",
      "label": "Artificial Intelligence Domain"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:neural-network",
        "label": "Neural Network"
      },
      {
        "@id": "urn:ngm:class:supervised-learning",
        "label": "Supervised Learning"
      },
      {
        "@id": "urn:ngm:class:unsupervised-learning",
        "label": "Unsupervised Learning"
      },
      {
        "@id": "urn:ngm:class:reinforcement-learning",
        "label": "Reinforcement Learning"
      },
      {
        "@id": "urn:ngm:class:feature-engineering",
        "label": "Feature Engineering"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:linear-algebra",
        "label": "Linear Algebra"
      },
      {
        "@id": "urn:ngm:class:probability-theory",
        "label": "Probability Theory"
      },
      {
        "@id": "urn:ngm:class:compute-layer",
        "label": "Compute Layer"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:predictive-modelling",
        "label": "Predictive Modelling"
      },
      {
        "@id": "urn:ngm:class:pattern-recognition",
        "label": "Pattern Recognition"
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
  "@id": "urn:visionflow:annotation:link-resolutions:machine-learning-domain:8d114a8796fd",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e8df423216252b21bd4c5fa129a2adb6aa378a98bf8602a3099d221da6897e27"
  },
  "vc:resolutions": [
    {
      "raw": "[[Neural Network]]",
      "resolved": "urn:visionflow:linked:neural-network",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Supervised Learning]]",
      "resolved": "urn:visionflow:linked:supervised-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Unsupervised Learning]]",
      "resolved": "urn:visionflow:linked:unsupervised-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Reinforcement Learning]]",
      "resolved": "urn:visionflow:linked:reinforcement-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Feature Engineering]]",
      "resolved": "urn:visionflow:linked:feature-engineering",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Linear Algebra]]",
      "resolved": "urn:visionflow:linked:linear-algebra",
      "kind": "StubLink"
    },
    {
      "raw": "[[Probability Theory]]",
      "resolved": "urn:visionflow:linked:probability-theory",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Compute Layer]]",
      "resolved": "urn:visionflow:linked:compute-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Predictive Modelling]]",
      "resolved": "urn:visionflow:linked:predictive-modelling",
      "kind": "StubLink"
    },
    {
      "raw": "[[Pattern Recognition]]",
      "resolved": "urn:visionflow:linked:pattern-recognition",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Generative Modelling Domain]]",
      "resolved": "urn:visionflow:linked:generative-modelling-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[Deep Learning Domain]]",
      "resolved": "urn:visionflow:linked:deep-learning-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[Computer Vision Domain]]",
      "resolved": "urn:visionflow:linked:computer-vision-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[Natural Language Processing Domain]]",
      "resolved": "urn:visionflow:linked:natural-language-processing-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[Artificial Intelligence Domain]]",
      "resolved": "urn:visionflow:linked:artificial-intelligence-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ISO/IEC 22989:2022]]",
      "resolved": "urn:visionflow:linked:iso-iec-22989-2022",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO/IEC 23053:2022]]",
      "resolved": "urn:visionflow:linked:iso-iec-23053-2022",
      "kind": "StubLink"
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
  - The Machine Learning Domain covers the study of algorithms that improve their performance on a task through exposure to data rather than explicit programming. Its scope spans supervised, unsupervised and reinforcement paradigms, together with the statistical and optimisation theory that underpins them. It sits as a principal sub-area of the Artificial Intelligence Domain and acts as the methodological core on which most contemporary AI capabilities are built. The boundary of the domain excludes purely symbolic reasoning systems, which are classified under the Knowledge Representation Domain.

- ### Semantic Classification
  - owl-class:: ml:MachineLearningDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[Artificial Intelligence Domain]]
  - bridges-to:: [[Deep Learning Domain]], [[Computer Vision Domain]], [[Natural Language Processing Domain]]
  - has-part:: [[Neural Network]], [[Supervised Learning]], [[Unsupervised Learning]], [[Reinforcement Learning]], [[Feature Engineering]]
  - requires:: [[Linear Algebra]], [[Probability Theory]], [[Compute Layer]]
  - enables:: [[Predictive Modelling]], [[Pattern Recognition]], [[Generative Modelling Domain]]

- ### Content
  - The Machine Learning Domain defines the methods by which systems estimate functions from observed examples. Its scope encompasses model families such as linear models, tree ensembles and neural networks, and the learning regimes of supervised, unsupervised and reinforcement learning. The domain boundary is methodological rather than applied, so a vision classifier and a language model both draw on machine learning even though they belong to distinct application domains. Work on hand-authored rule systems falls outside this boundary and into knowledge representation.
  - Member concepts cluster around the learning paradigm and the model class. Supervised Learning, Unsupervised Learning and Reinforcement Learning organise the field by the kind of feedback available, while Neural Network and Feature Engineering describe the representational machinery. These clusters share a common dependency on optimisation, probability and large-scale computation, which is why the domain requires linear algebra, probability theory and the Compute Layer.
  - The domain bridges to several adjacent areas. Deep Learning narrows the focus to multi-layer neural architectures, while Computer Vision and Natural Language Processing apply machine learning methods to perceptual and linguistic data respectively. Through generative methods it connects to the Generative Modelling Domain, and through deployment concerns it draws on the Infrastructure Domain for serving and monitoring.

- ### Provenance
  - sources:: [[ISO/IEC 22989:2022]], [[ISO/IEC 23053:2022]]
  - migration-date:: 2026-05-29T00:00:00Z
