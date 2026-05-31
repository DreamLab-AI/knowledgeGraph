public:: true

# Corda
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:712a925c6e26e411db7d009bf37dc01235b96e3ae632ba0b74b9d6320eeb3a2a",
  "@type": "Page",
  "vc:slug": "corda",
  "title": "Corda",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:distributed-ledger",
      "vc:label": "Distributed Ledger"
    },
    {
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:linked:privacy",
      "vc:label": "Privacy"
    },
    {
      "@id": "urn:visionflow:linked:permissioned-blockchain",
      "vc:label": "Permissioned Blockchain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Corda"
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
  "@id": "urn:ngm:class:corda",
  "@type": "Class",
  "label": "Corda",
  "definition": "A permissioned distributed ledger platform designed for regulated enterprises, where transactions are shared only between the parties involved rather than broadcast to all nodes.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:permissioned-blockchain",
      "label": "Permissioned Blockchain"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:distributed-ledger",
        "label": "Distributed Ledger"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
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
  "@id": "urn:visionflow:annotation:link-resolutions:corda:df799de81a51",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:712a925c6e26e411db7d009bf37dc01235b96e3ae632ba0b74b9d6320eeb3a2a"
  },
  "vc:resolutions": [
    {
      "raw": "[[Distributed Ledger]]",
      "resolved": "urn:visionflow:linked:distributed-ledger",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Privacy]]",
      "resolved": "urn:visionflow:linked:privacy",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Permissioned Blockchain]]",
      "resolved": "urn:visionflow:linked:permissioned-blockchain",
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
  - A permissioned distributed ledger platform designed for regulated enterprises, where transactions are shared only between the parties involved rather than broadcast to all nodes.

- ### Semantic Classification
  - owl-class:: blockchain:Corda
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Permissioned Blockchain]]
  - bridges-to:: [[Privacy]]
  - requires:: [[Distributed Ledger]]
  - enables:: [[Smart Contract]]

- ### Content
  - Corda records agreements between identified participants and shares transaction data on a need-to-know basis, so there is no global broadcast of every transaction. A notary service provides ordering and prevents double-spending of states.
  - Contracts in Corda are expressed as code that validates proposed state transitions, and the platform targets financial and inter-organisational use cases where confidentiality and known counterparties matter.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
