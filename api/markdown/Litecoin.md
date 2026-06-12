public:: true

# Litecoin
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3ba246d777e25966e24e5134132627df72cfbe4b196524e2ca8613b1aed2647d",
  "@type": "Page",
  "vc:slug": "litecoin",
  "title": "Litecoin",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:proof-of-work",
      "vc:label": "Proof of Work"
    },
    {
      "@id": "urn:visionflow:linked:scrypt",
      "vc:label": "Scrypt"
    },
    {
      "@id": "urn:visionflow:linked:digital-payments",
      "vc:label": "Digital Payments"
    },
    {
      "@id": "urn:visionflow:linked:bitcoin",
      "vc:label": "Bitcoin"
    },
    {
      "@id": "urn:visionflow:linked:bitcoin-lightning-network",
      "vc:label": "Bitcoin Lightning Network"
    },
    {
      "@id": "urn:visionflow:linked:blockchain-domain",
      "vc:label": "Blockchain Domain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Litecoin"
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
  "@id": "urn:ngm:class:litecoin",
  "@type": "Class",
  "label": "Litecoin",
  "definition": "Litecoin is a peer-to-peer cryptocurrency created in 2011 by Charlie Lee as an early fork of the Bitcoin codebase. It was designed for faster confirmation, using a target block time of around 2.5 minutes, and it uses the Scrypt hashing algorithm for proof-of-work in place of Bitcoin's SHA-256. It is often described as a lighter complement to Bitcoin and has served as a testing ground for protocol changes such as Segregated Witness.",
  "domain": "litecoin",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain-domain",
      "label": "Blockchain Domain"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:proof-of-work",
        "label": "Proof of Work"
      },
      {
        "@id": "urn:ngm:class:scrypt",
        "label": "Scrypt"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:digital-payments",
        "label": "Digital Payments"
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
  "@id": "urn:visionflow:annotation:link-resolutions:litecoin:6ce9fe4549f0",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:3ba246d777e25966e24e5134132627df72cfbe4b196524e2ca8613b1aed2647d"
  },
  "vc:resolutions": [
    {
      "raw": "[[Proof of Work]]",
      "resolved": "urn:visionflow:linked:proof-of-work",
      "kind": "StubLink"
    },
    {
      "raw": "[[Scrypt]]",
      "resolved": "urn:visionflow:linked:scrypt",
      "kind": "StubLink"
    },
    {
      "raw": "[[Digital Payments]]",
      "resolved": "urn:visionflow:linked:digital-payments",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Bitcoin Proof-of-Work Protocol]]",
      "resolved": "urn:visionflow:linked:bitcoin",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Bitcoin Lightning Network]]",
      "resolved": "urn:visionflow:linked:bitcoin-lightning-network",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Blockchain Domain]]",
      "resolved": "urn:visionflow:linked:blockchain-domain",
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
  - Litecoin is a peer-to-peer cryptocurrency created in 2011 by Charlie Lee as an early fork of the Bitcoin codebase. It was designed for faster confirmation, using a target block time of around 2.5 minutes, and it uses the Scrypt hashing algorithm for proof-of-work in place of Bitcoin's SHA-256. It is often described as a lighter complement to Bitcoin and has served as a testing ground for protocol changes such as Segregated Witness.

- ### Semantic Classification
  - owl-class:: blockchain:Litecoin
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Blockchain Domain]]
  - bridges-to:: [[Bitcoin Proof-of-Work Protocol]], [[Bitcoin Lightning Network]]
  - requires:: [[Proof of Work]], [[Scrypt]]
  - enables:: [[Digital Payments]]

- ### Content
  - Litecoin retains much of Bitcoin's architecture, including a fixed-supply schedule and proof-of-work consensus, while adjusting parameters to favour quicker transaction confirmation. Its use of Scrypt was intended to make mining more accessible on commodity hardware, although specialised mining equipment later emerged for it as well.
  - Because of its similarity to Bitcoin, Litecoin has frequently been used to trial upgrades before they are adopted on Bitcoin, notably Segregated Witness, which separates signature data from transaction data to improve capacity and fix transaction malleability.
  - Litecoin remains one of the longer-lived cryptocurrencies and is positioned primarily as a medium for payments rather than a platform for smart contracts. It is also compatible with layer-two scaling approaches such as the Lightning Network.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
