public:: true

# Validator
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0e2c61ade807ae5a776fa24b9c9e583ff2f8176d2ce9ab1130701d1d14997e71",
  "@type": "Page",
  "vc:slug": "validator",
  "title": "Validator",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:proof-of-stake",
      "vc:label": "Proof of Stake"
    },
    {
      "@id": "urn:visionflow:linked:consensus-mechanism",
      "vc:label": "Consensus Mechanism"
    },
    {
      "@id": "urn:visionflow:linked:block",
      "vc:label": "Block"
    },
    {
      "@id": "urn:visionflow:linked:consensus-protocol",
      "vc:label": "Consensus Protocol"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Validator"
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
  "@id": "urn:ngm:class:validator",
  "@type": "Class",
  "label": "Validator",
  "definition": "A network participant in a proof-of-stake system that proposes and attests to blocks, committing stake that can be slashed for misbehaviour.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:consensus-protocol",
      "label": "Consensus Protocol"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:proof-of-stake",
        "label": "Proof of Stake"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:consensus-mechanism",
        "label": "Consensus Mechanism"
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
  "@id": "urn:visionflow:annotation:link-resolutions:validator:f82af32160bc",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:0e2c61ade807ae5a776fa24b9c9e583ff2f8176d2ce9ab1130701d1d14997e71"
  },
  "vc:resolutions": [
    {
      "raw": "[[Proof of Stake]]",
      "resolved": "urn:visionflow:linked:proof-of-stake",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Consensus Mechanism]]",
      "resolved": "urn:visionflow:linked:consensus-mechanism",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Block]]",
      "resolved": "urn:visionflow:linked:block",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Consensus Protocol]]",
      "resolved": "urn:visionflow:linked:consensus-protocol",
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
  - A network participant in a proof-of-stake system that proposes and attests to blocks, committing stake that can be slashed for misbehaviour.

- ### Semantic Classification
  - owl-class:: blockchain:Validator
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Consensus Protocol]]
  - bridges-to:: [[Block]]
  - requires:: [[Proof of Stake]]
  - enables:: [[Consensus Mechanism]]

- ### Content
  - A validator locks up stake and is selected to produce or vote on blocks according to the consensus rules. Honest participation earns rewards, while provable misbehaviour such as double-signing can result in part of the stake being slashed.
  - Validators collectively reach agreement on the canonical chain by attesting to blocks they consider valid. Their economic stake aligns incentives so that attacking the chain becomes costly.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
