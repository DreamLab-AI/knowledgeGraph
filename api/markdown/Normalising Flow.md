public:: true

# Normalising Flow
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:745ddc90819e39c2f986c40990044d9709fdabce59edd451e0d6c3357ac036cf",
  "@type": "Page",
  "vc:slug": "normalising-flow",
  "title": "Normalising Flow",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:probabilistic-model",
      "vc:label": "Probabilistic Model"
    },
    {
      "@id": "urn:visionflow:linked:generative-model",
      "vc:label": "Generative Model"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Normalising Flow"
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
  "@id": "urn:ngm:class:normalising-flow",
  "@type": "Class",
  "label": "Normalising Flow",
  "definition": "A normalising flow is a generative model that transforms a simple base probability distribution into a complex one through a sequence of invertible mappings, allowing exact likelihood computation.",
  "domain": "machine-learning",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:generative-model",
      "label": "Generative Model"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:probabilistic-model",
        "label": "Probabilistic Model"
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
  "@id": "urn:visionflow:annotation:link-resolutions:normalising-flow:d53fec1a692e",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:745ddc90819e39c2f986c40990044d9709fdabce59edd451e0d6c3357ac036cf"
  },
  "vc:resolutions": [
    {
      "raw": "[[Probabilistic Model]]",
      "resolved": "urn:visionflow:linked:probabilistic-model",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Generative Model]]",
      "resolved": "urn:visionflow:linked:generative-model",
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
  - A normalising flow is a generative model that transforms a simple base probability distribution into a complex one through a sequence of invertible mappings, allowing exact likelihood computation.

- ### Semantic Classification
  - owl-class:: machine-learning:NormalisingFlow
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Generative Model]]
  - bridges-to:: [[Generative Model]]
  - requires:: [[Probabilistic Model]]

- ### Content
  - A normalising flow applies a chain of invertible and differentiable transformations to samples from a base distribution such as a standard normal. Because each transformation is invertible, the change of variables formula gives the exact density of generated samples.
  - This exact likelihood property distinguishes flows from generative adversarial networks and variational autoencoders. Architectures such as RealNVP and Glow design transformations whose Jacobian determinant is efficient to compute.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
