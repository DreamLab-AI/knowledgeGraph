public:: true

# Score Matching
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:627104fe9f0fbdff61fef9f75e64a4b8ef63b7d3adae2f1a9ccd55640e6a3f38",
  "@type": "Page",
  "vc:slug": "score-matching",
  "title": "Score Matching",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:probability-theory",
      "vc:label": "Probability Theory"
    },
    {
      "@id": "urn:visionflow:linked:statistics",
      "vc:label": "Statistics"
    },
    {
      "@id": "urn:visionflow:linked:diffusion-model",
      "vc:label": "Diffusion Model"
    },
    {
      "@id": "urn:visionflow:linked:generative-model",
      "vc:label": "Generative Model"
    },
    {
      "@id": "urn:visionflow:linked:machine-learning",
      "vc:label": "Machine Learning"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Score Matching"
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
  "@id": "urn:ngm:class:score-matching",
  "@type": "Class",
  "label": "Score Matching",
  "definition": "Score matching is a method for fitting probability models by matching the gradient of the log-density, the score, of the model to that of the data, avoiding the intractable normalising constant. It underpins score-based generative models and diffusion models.",
  "domain": "machine-learning",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:machine-learning-discipline",
      "label": "Machine Learning"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:probability-theory",
        "label": "Probability Theory"
      },
      {
        "@id": "urn:ngm:class:statistics",
        "label": "Statistics"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:diffusion-model",
        "label": "Diffusion Model"
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
  "@id": "urn:visionflow:annotation:link-resolutions:score-matching:8467f6af1496",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:627104fe9f0fbdff61fef9f75e64a4b8ef63b7d3adae2f1a9ccd55640e6a3f38"
  },
  "vc:resolutions": [
    {
      "raw": "[[Probability Theory]]",
      "resolved": "urn:visionflow:linked:probability-theory",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Statistics]]",
      "resolved": "urn:visionflow:linked:statistics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Diffusion Model]]",
      "resolved": "urn:visionflow:linked:diffusion-model",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Generative Model]]",
      "resolved": "urn:visionflow:linked:generative-model",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Machine Learning Discipline]]",
      "resolved": "urn:visionflow:linked:machine-learning",
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
  - Score matching is a method for fitting probability models by matching the gradient of the log-density, the score, of the model to that of the data, avoiding the intractable normalising constant. It underpins score-based generative models and diffusion models.

- ### Semantic Classification
  - owl-class:: machine-learning:ScoreMatching
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Machine Learning Discipline]]
  - bridges-to:: [[Generative Model]]
  - requires:: [[Probability Theory]], [[Statistics]]
  - enables:: [[Diffusion Model]]

- ### Content
  - Score matching estimates an unnormalised probability model by minimising the difference between the model's score function, the gradient of the log-density, and that of the data distribution. Because the score does not depend on the partition function, the method sidesteps computing an intractable normalising constant.
  - Denoising score matching and related estimators connect the idea to learning the score of noise-perturbed data, which is the basis of score-based generative models and diffusion models. These approaches generate samples by following estimated scores through a reverse noising process.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
