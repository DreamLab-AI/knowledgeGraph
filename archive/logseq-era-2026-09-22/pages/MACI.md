public:: true

# MACI
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:807d06aa928b51a37b21ab5239373ece1db06e8aff8315ceac89fdfaf2add1ed",
  "@type": "Page",
  "vc:slug": "maci",
  "title": "MACI",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:zero-knowledge-proof",
      "vc:label": "Zero-Knowledge Proof"
    },
    {
      "@id": "urn:visionflow:linked:decentralized-autonomous-organization",
      "vc:label": "Decentralized Autonomous Organization"
    },
    {
      "@id": "urn:visionflow:linked:quadratic-voting",
      "vc:label": "Quadratic Voting"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "MACI"
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
  "@id": "urn:ngm:class:maci",
  "@type": "Class",
  "label": "MACI",
  "definition": "Minimal Anti-Collusion Infrastructure, a set of smart contracts and zero-knowledge techniques designed to reduce bribery and collusion in on-chain voting. It hides individual votes from coercers while allowing public verification of results.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:quadratic-voting",
      "label": "Quadratic Voting"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:decentralized-autonomous-organization",
        "label": "Decentralized Autonomous Organization"
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
  "@id": "urn:visionflow:annotation:link-resolutions:maci:c3c6337510e0",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:807d06aa928b51a37b21ab5239373ece1db06e8aff8315ceac89fdfaf2add1ed"
  },
  "vc:resolutions": [
    {
      "raw": "[[Zero-Knowledge Proof]]",
      "resolved": "urn:visionflow:linked:zero-knowledge-proof",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Decentralized Autonomous Organization]]",
      "resolved": "urn:visionflow:linked:decentralized-autonomous-organization",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Quadratic Voting]]",
      "resolved": "urn:visionflow:linked:quadratic-voting",
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
  - Minimal Anti-Collusion Infrastructure, a set of smart contracts and zero-knowledge techniques designed to reduce bribery and collusion in on-chain voting. It hides individual votes from coercers while allowing public verification of results.

- ### Semantic Classification
  - owl-class:: blockchain:MACI
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Quadratic Voting]]
  - bridges-to:: [[Quadratic Voting]]
  - requires:: [[Zero-Knowledge Proof]]
  - enables:: [[Decentralized Autonomous Organization]]

- ### Content
  - MACI was proposed within the Ethereum community to make collusion in voting difficult. It allows voters to change their keys and re-vote in ways that a briber cannot verify, so a promised vote cannot be proven to a coercer.
  - A trusted coordinator processes encrypted votes and produces a tally together with zero-knowledge proofs that the tally was computed correctly, which observers can verify without seeing individual votes.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
