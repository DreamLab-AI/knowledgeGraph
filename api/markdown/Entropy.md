public:: true

# Entropy
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b9ad683889ff726d3abb25361cbc030c3841537f5fc4d1f71f40f205d4199edb",
  "@type": "Page",
  "vc:slug": "entropy",
  "title": "Entropy",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:random-number-generation",
      "vc:label": "Random Number Generation"
    },
    {
      "@id": "urn:visionflow:linked:cryptography",
      "vc:label": "Cryptography"
    },
    {
      "@id": "urn:visionflow:linked:information-theory",
      "vc:label": "Information Theory"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Entropy"
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
  "@id": "urn:ngm:class:entropy",
  "@type": "Class",
  "label": "Entropy",
  "definition": "A measure of disorder or uncertainty. In thermodynamics it quantifies the unavailable energy in a system, and in information theory it quantifies the average uncertainty or information content of a source.",
  "domain": "machine-learning",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:information-theory",
      "label": "Information Theory"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:random-number-generation",
        "label": "Random Number Generation"
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
  "@id": "urn:visionflow:annotation:link-resolutions:entropy:67671a2f53dd",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b9ad683889ff726d3abb25361cbc030c3841537f5fc4d1f71f40f205d4199edb"
  },
  "vc:resolutions": [
    {
      "raw": "[[Random Number Generation]]",
      "resolved": "urn:visionflow:linked:random-number-generation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cryptography]]",
      "resolved": "urn:visionflow:linked:cryptography",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Information Theory]]",
      "resolved": "urn:visionflow:linked:information-theory",
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
  - A measure of disorder or uncertainty. In thermodynamics it quantifies the unavailable energy in a system, and in information theory it quantifies the average uncertainty or information content of a source.

- ### Semantic Classification
  - owl-class:: information-theory:Entropy
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Information Theory]]
  - bridges-to:: [[Cryptography]]
  - enables:: [[Random Number Generation]]

- ### Content
  - In thermodynamics, entropy measures the degree of disorder in a physical system and tends to increase in isolated systems according to the second law. In information theory, introduced by Claude Shannon, entropy measures the average information produced by a random source.
  - The information-theoretic notion of entropy underpins data compression and cryptography, where high-entropy sources are needed to generate unpredictable keys and random numbers.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
