public:: true

# World Models
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9b7a4f8fe2d93b58ef2c12fd230bbc163f55ca95a64ccb5b94ea82930841c91d",
  "@type": "Page",
  "vc:slug": "world-models",
  "title": "World Models",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:neural-network",
      "vc:label": "Neural Network"
    },
    {
      "@id": "urn:visionflow:linked:reinforcement-learning",
      "vc:label": "Reinforcement Learning"
    },
    {
      "@id": "urn:visionflow:linked:planning",
      "vc:label": "Planning"
    },
    {
      "@id": "urn:visionflow:linked:generative-models",
      "vc:label": "Generative Models"
    },
    {
      "@id": "urn:visionflow:linked:world-model",
      "vc:label": "World Model"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "World Models"
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
  "@id": "urn:ngm:class:world-models",
  "@type": "Class",
  "label": "World Models",
  "definition": "World models are learned internal representations of an environment that predict how it evolves in response to actions. They let an agent plan and reason by simulating outcomes rather than acting directly in the world.",
  "domain": "machine-learning",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:world-model",
      "label": "World Model"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:neural-network",
        "label": "Neural Network"
      },
      {
        "@id": "urn:ngm:class:reinforcement-learning",
        "label": "Reinforcement Learning"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:planning",
        "label": "Planning"
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
  "@id": "urn:visionflow:annotation:link-resolutions:world-models:84b3d551d54d",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:9b7a4f8fe2d93b58ef2c12fd230bbc163f55ca95a64ccb5b94ea82930841c91d"
  },
  "vc:resolutions": [
    {
      "raw": "[[Neural Network]]",
      "resolved": "urn:visionflow:linked:neural-network",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Reinforcement Learning]]",
      "resolved": "urn:visionflow:linked:reinforcement-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Planning]]",
      "resolved": "urn:visionflow:linked:planning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Generative Models]]",
      "resolved": "urn:visionflow:linked:generative-models",
      "kind": "StubLink"
    },
    {
      "raw": "[[World Model]]",
      "resolved": "urn:visionflow:linked:world-model",
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
  - World models are learned internal representations of an environment that predict how it evolves in response to actions. They let an agent plan and reason by simulating outcomes rather than acting directly in the world.

- ### Semantic Classification
  - owl-class:: machine-learning:WorldModels
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[World Model]]
  - bridges-to:: [[Reinforcement Learning]], [[Generative Models]]
  - requires:: [[Neural Network]], [[Reinforcement Learning]]
  - enables:: [[Planning]]

- ### Content
  - World models learn a predictive model of an environment, typically encoding observations into a compact latent state and modelling how that state changes with actions. An agent can then train or plan inside the learned model, which can be more sample-efficient than learning from real interaction alone.
  - The approach is central to model-based reinforcement learning and is also studied as a route to general agents that simulate possible futures. Generative architectures are often used to render predicted observations from the latent state.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
