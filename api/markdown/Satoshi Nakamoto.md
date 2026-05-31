public:: true

# Satoshi Nakamoto
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ecf0a366b2104ae529627aad2ddd1660a7bdf5cb0c85378529ee6aeac9ff68bb",
  "@type": "Page",
  "vc:slug": "satoshi-nakamoto",
  "title": "Satoshi Nakamoto",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:bitcoin",
      "vc:label": "Bitcoin"
    },
    {
      "@id": "urn:visionflow:linked:proof-of-work",
      "vc:label": "Proof of Work"
    },
    {
      "@id": "urn:visionflow:linked:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:linked:cryptographic-domain",
      "vc:label": "Cryptographic Domain"
    },
    {
      "@id": "urn:visionflow:linked:distributed-systems-domain",
      "vc:label": "Distributed Systems Domain"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    },
    {
      "@id": "urn:visionflow:linked:bitcoin-white-paper-2008",
      "vc:label": "Bitcoin white paper (2008)"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Satoshi Nakamoto"
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
  "@id": "urn:ngm:class:satoshi-nakamoto",
  "@type": "Class",
  "label": "Satoshi Nakamoto",
  "definition": "Satoshi Nakamoto is the pseudonym used by the unidentified person or group who designed Bitcoin, authored its 2008 white paper and released the first reference implementation in 2009. Nakamoto introduced a practical solution to double-spending in a peer-to-peer electronic cash system through proof-of-work and a public, append-only ledger. The true identity behind the name remains unknown, and Nakamoto withdrew from public involvement in the project around 2010 to 2011.",
  "domain": "satoshi-nakamoto",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:owl-thing",
      "label": "owl:Thing"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:bitcoin",
        "label": "Bitcoin"
      },
      {
        "@id": "urn:ngm:class:proof-of-work",
        "label": "Proof of Work"
      },
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
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
  "@id": "urn:visionflow:annotation:link-resolutions:satoshi-nakamoto:f381072e8bd4",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ecf0a366b2104ae529627aad2ddd1660a7bdf5cb0c85378529ee6aeac9ff68bb"
  },
  "vc:resolutions": [
    {
      "raw": "[[Bitcoin]]",
      "resolved": "urn:visionflow:linked:bitcoin",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Proof of Work]]",
      "resolved": "urn:visionflow:linked:proof-of-work",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:linked:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cryptographic Domain]]",
      "resolved": "urn:visionflow:linked:cryptographic-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Distributed Systems Domain]]",
      "resolved": "urn:visionflow:linked:distributed-systems-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Bitcoin white paper (2008)]]",
      "resolved": "urn:visionflow:linked:bitcoin-white-paper-2008",
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
  - Satoshi Nakamoto is the pseudonym used by the unidentified person or group who designed Bitcoin, authored its 2008 white paper and released the first reference implementation in 2009. Nakamoto introduced a practical solution to double-spending in a peer-to-peer electronic cash system through proof-of-work and a public, append-only ledger. The true identity behind the name remains unknown, and Nakamoto withdrew from public involvement in the project around 2010 to 2011.

- ### Semantic Classification
  - owl-class:: blockchain:SatoshiNakamoto
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Cryptographic Domain]], [[Distributed Systems Domain]]
  - enables:: [[Bitcoin]], [[Proof of Work]], [[Blockchain]]

- ### Content
  - Under the Nakamoto pseudonym, the white paper titled Bitcoin: A Peer-to-Peer Electronic Cash System set out how a network of nodes could agree on a single transaction history without a trusted central party. The key contribution was combining proof-of-work, a timestamp server and the longest-chain rule into an incentive-compatible consensus mechanism that resists tampering.
  - Nakamoto mined the genesis block in January 2009 and corresponded with early developers and cryptographers by email and forum posts. The associated public keys are believed to control a large early holding of bitcoin that has never moved, which is frequently cited in discussions of the network's transparency and supply.
  - The identity of Nakamoto has been the subject of extensive speculation, with various individuals proposed or self-claimed, none conclusively verified. The deliberate anonymity is often framed as consistent with Bitcoin's design goal of removing reliance on trusted authorities, including its own creator.

- ### Provenance
  - sources:: [[Bitcoin white paper (2008)]]
  - migration-date:: 2026-05-29T00:00:00Z
