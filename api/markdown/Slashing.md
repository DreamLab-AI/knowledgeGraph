public:: true

# Slashing
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:84ef3300010a793c0315987840ce99ac990cb8ef5b8d6efeb3ed789fe7df14b3",
  "@type": "Page",
  "vc:slug": "slashing",
  "title": "Slashing",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:proof-of-stake",
      "vc:label": "Proof of Stake"
    },
    {
      "@id": "urn:visionflow:linked:validator",
      "vc:label": "Validator"
    },
    {
      "@id": "urn:visionflow:linked:consensus-mechanism",
      "vc:label": "Consensus Mechanism"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Slashing"
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
  "@id": "urn:ngm:class:slashing",
  "@type": "Class",
  "label": "Slashing",
  "definition": "A penalty mechanism in proof-of-stake blockchains that confiscates part or all of a validator's staked funds when it behaves improperly, such as by double-signing or being persistently unavailable. It deters misbehaviour.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:proof-of-stake",
      "label": "Proof of Stake"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:proof-of-stake",
        "label": "Proof of Stake"
      },
      {
        "@id": "urn:ngm:class:validator",
        "label": "Validator"
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
  "@id": "urn:visionflow:annotation:link-resolutions:slashing:31af10958c44",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:84ef3300010a793c0315987840ce99ac990cb8ef5b8d6efeb3ed789fe7df14b3"
  },
  "vc:resolutions": [
    {
      "raw": "[[Proof of Stake]]",
      "resolved": "urn:visionflow:linked:proof-of-stake",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Validator]]",
      "resolved": "urn:visionflow:linked:validator",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Consensus Mechanism]]",
      "resolved": "urn:visionflow:linked:consensus-mechanism",
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
  - A penalty mechanism in proof-of-stake blockchains that confiscates part or all of a validator's staked funds when it behaves improperly, such as by double-signing or being persistently unavailable. It deters misbehaviour.

- ### Semantic Classification
  - owl-class:: blockchain:Slashing
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Proof of Stake]]
  - bridges-to:: [[Proof of Stake]]
  - requires:: [[Proof of Stake]], [[Validator]]
  - enables:: [[Consensus Mechanism]]

- ### Content
  - Slashing is the destruction or removal of a portion of a validator's stake as a penalty for actions that threaten consensus, most notably equivocation such as signing two conflicting blocks, and in some networks prolonged downtime.
  - By putting staked capital at risk, slashing aligns validator incentives with honest participation. Networks define specific slashable offences and the size of penalties as part of their consensus rules.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
