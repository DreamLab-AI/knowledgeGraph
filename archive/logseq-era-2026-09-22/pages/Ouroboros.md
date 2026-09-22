public:: true

# Ouroboros
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3a22095a6a2d86bcb4e22745fc4d6948531d6d09a665afc33173db7355c0ebb0",
  "@type": "Page",
  "vc:slug": "ouroboros",
  "title": "Ouroboros",
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
      "@id": "urn:visionflow:linked:cardano",
      "vc:label": "Cardano"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Ouroboros"
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
  "@id": "urn:ngm:class:ouroboros",
  "@type": "Class",
  "label": "Ouroboros",
  "definition": "A family of provably secure proof-of-stake consensus protocols that divide time into epochs and slots and select block producers in proportion to stake.",
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
  "@id": "urn:visionflow:annotation:link-resolutions:ouroboros:93dbf6365e4f",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:3a22095a6a2d86bcb4e22745fc4d6948531d6d09a665afc33173db7355c0ebb0"
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
      "raw": "[[Cardano]]",
      "resolved": "urn:visionflow:linked:cardano",
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
  - A family of provably secure proof-of-stake consensus protocols that divide time into epochs and slots and select block producers in proportion to stake.

- ### Semantic Classification
  - owl-class:: blockchain:Ouroboros
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Proof of Stake]]
  - bridges-to:: [[Cardano]]
  - requires:: [[Proof of Stake]]
  - enables:: [[Consensus Mechanism]]

- ### Content
  - Ouroboros structures time into epochs subdivided into slots, with a leader chosen for each slot using a stake-weighted random selection. The protocol comes with formal security proofs relating its safety to assumptions about honest stake.
  - It is the consensus protocol used by Cardano and has been extended through several versions to improve decentralisation and resistance to adversaries. Randomness for leader election is derived in a verifiable way to limit manipulation.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
