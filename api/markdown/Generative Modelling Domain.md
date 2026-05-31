public:: true

# Generative Modelling Domain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d5a9ec6cadb71568c102ff75e208cc95b15dc5d861bdf5e777d5cf5604ab2d2d",
  "@type": "Page",
  "vc:slug": "generative-modelling-domain",
  "title": "Generative Modelling Domain",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:variational-autoencoder",
      "vc:label": "Variational Autoencoder"
    },
    {
      "@id": "urn:visionflow:linked:generative-adversarial-network",
      "vc:label": "Generative Adversarial Network"
    },
    {
      "@id": "urn:visionflow:linked:diffusion-model",
      "vc:label": "Diffusion Model"
    },
    {
      "@id": "urn:visionflow:linked:autoregressive-model",
      "vc:label": "Autoregressive Model"
    },
    {
      "@id": "urn:visionflow:linked:normalising-flow",
      "vc:label": "Normalising Flow"
    },
    {
      "@id": "urn:visionflow:linked:machine-learning-domain",
      "vc:label": "Machine Learning Domain"
    },
    {
      "@id": "urn:visionflow:linked:probability-theory",
      "vc:label": "Probability Theory"
    },
    {
      "@id": "urn:visionflow:linked:information-theory",
      "vc:label": "Information Theory"
    },
    {
      "@id": "urn:visionflow:linked:data-synthesis",
      "vc:label": "Data Synthesis"
    },
    {
      "@id": "urn:visionflow:linked:density-estimation",
      "vc:label": "Density Estimation"
    },
    {
      "@id": "urn:visionflow:linked:generative-ai-domain",
      "vc:label": "Generative AI Domain"
    },
    {
      "@id": "urn:visionflow:linked:deep-learning-domain",
      "vc:label": "Deep Learning Domain"
    },
    {
      "@id": "urn:visionflow:linked:creative-ai-domain",
      "vc:label": "Creative AI Domain"
    },
    {
      "@id": "urn:visionflow:linked:artificial-intelligence-domain",
      "vc:label": "Artificial Intelligence Domain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Generative Modelling Domain"
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
  "@id": "urn:ngm:class:generative-modelling-domain",
  "@type": "Class",
  "label": "Generative Modelling Domain",
  "definition": "The Generative Modelling Domain covers statistical models that learn a data distribution and can sample new instances from it. Its scope includes latent variable models, autoregressive models, diffusion processes and adversarial training. It is a methodological sub-area of the Artificial Intelligence Domain situated within the Machine Learning Domain. The boundary is the modelling of distributions, distinguishing it from the applied Generative AI Domain that deploys such models in products.",
  "domain": "generative-modelling",
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
        "@id": "urn:ngm:class:variational-autoencoder",
        "label": "Variational Autoencoder"
      },
      {
        "@id": "urn:ngm:class:generative-adversarial-network",
        "label": "Generative Adversarial Network"
      },
      {
        "@id": "urn:ngm:class:diffusion-model",
        "label": "Diffusion Model"
      },
      {
        "@id": "urn:ngm:class:autoregressive-model",
        "label": "Autoregressive Model"
      },
      {
        "@id": "urn:ngm:class:normalising-flow",
        "label": "Normalising Flow"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:machine-learning-domain",
        "label": "Machine Learning Domain"
      },
      {
        "@id": "urn:ngm:class:probability-theory",
        "label": "Probability Theory"
      },
      {
        "@id": "urn:ngm:class:information-theory",
        "label": "Information Theory"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:data-synthesis",
        "label": "Data Synthesis"
      },
      {
        "@id": "urn:ngm:class:density-estimation",
        "label": "Density Estimation"
      },
      {
        "@id": "urn:ngm:class:generative-ai-domain",
        "label": "Generative AI Domain"
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
  "@id": "urn:visionflow:annotation:link-resolutions:generative-modelling-domain:e71b5a40aff3",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:d5a9ec6cadb71568c102ff75e208cc95b15dc5d861bdf5e777d5cf5604ab2d2d"
  },
  "vc:resolutions": [
    {
      "raw": "[[Variational Autoencoder]]",
      "resolved": "urn:visionflow:linked:variational-autoencoder",
      "kind": "StubLink"
    },
    {
      "raw": "[[Generative Adversarial Network]]",
      "resolved": "urn:visionflow:linked:generative-adversarial-network",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Diffusion Model]]",
      "resolved": "urn:visionflow:linked:diffusion-model",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Autoregressive Model]]",
      "resolved": "urn:visionflow:linked:autoregressive-model",
      "kind": "StubLink"
    },
    {
      "raw": "[[Normalising Flow]]",
      "resolved": "urn:visionflow:linked:normalising-flow",
      "kind": "StubLink"
    },
    {
      "raw": "[[Machine Learning Domain]]",
      "resolved": "urn:visionflow:linked:machine-learning-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Probability Theory]]",
      "resolved": "urn:visionflow:linked:probability-theory",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Information Theory]]",
      "resolved": "urn:visionflow:linked:information-theory",
      "kind": "StubLink"
    },
    {
      "raw": "[[Data Synthesis]]",
      "resolved": "urn:visionflow:linked:data-synthesis",
      "kind": "StubLink"
    },
    {
      "raw": "[[Density Estimation]]",
      "resolved": "urn:visionflow:linked:density-estimation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Generative AI Domain]]",
      "resolved": "urn:visionflow:linked:generative-ai-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[Deep Learning Domain]]",
      "resolved": "urn:visionflow:linked:deep-learning-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[Creative AI Domain]]",
      "resolved": "urn:visionflow:linked:creative-ai-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[Artificial Intelligence Domain]]",
      "resolved": "urn:visionflow:linked:artificial-intelligence-domain",
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
  - The Generative Modelling Domain covers statistical models that learn a data distribution and can sample new instances from it. Its scope includes latent variable models, autoregressive models, diffusion processes and adversarial training. It is a methodological sub-area of the Artificial Intelligence Domain situated within the Machine Learning Domain. The boundary is the modelling of distributions, distinguishing it from the applied Generative AI Domain that deploys such models in products.

- ### Semantic Classification
  - owl-class:: genmodel:GenerativeModellingDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[Artificial Intelligence Domain]]
  - bridges-to:: [[Generative AI Domain]], [[Deep Learning Domain]], [[Creative AI Domain]]
  - has-part:: [[Variational Autoencoder]], [[Generative Adversarial Network]], [[Diffusion Model]], [[Autoregressive Model]], [[Normalising Flow]]
  - requires:: [[Machine Learning Domain]], [[Probability Theory]], [[Information Theory]]
  - enables:: [[Data Synthesis]], [[Density Estimation]], [[Generative AI Domain]]

- ### Content
  - The Generative Modelling Domain studies how to represent and sample from probability distributions over complex data such as images, audio and text. Its scope covers the principal model families and the training objectives that fit them, including likelihood maximisation, variational bounds and adversarial games. The boundary is the formal modelling task; deploying a trained generator in an application is a matter for the Generative AI Domain.
  - Member concepts include the Variational Autoencoder, Generative Adversarial Network, Diffusion Model, Autoregressive Model and Normalising Flow, each offering a distinct trade-off between sample quality, likelihood tractability and training stability. These rest on machine learning practice, probability theory for the distributional view and information theory for objectives such as divergence minimisation.
  - The domain bridges to the Deep Learning Domain, which supplies the neural parameterisations, to the applied Generative AI Domain that productises these models, and to the Creative AI Domain where generation supports artistic work. It enables data synthesis, density estimation and anomaly detection.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
