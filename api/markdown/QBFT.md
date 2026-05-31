public:: true

# QBFT
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:501aee4ea03a497816a967670f9785cc43c58f55bbad9d07ea413c692a750469",
  "@type": "Page",
  "vc:slug": "qbft",
  "title": "QBFT",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:consensus-algorithm",
      "vc:label": "Consensus Algorithm"
    },
    {
      "@id": "urn:visionflow:linked:byzantine-fault-tolerance",
      "vc:label": "Byzantine Fault Tolerance"
    },
    {
      "@id": "urn:visionflow:linked:distributed-ledger-technology",
      "vc:label": "Distributed Ledger Technology"
    },
    {
      "@id": "urn:visionflow:linked:ethereum",
      "vc:label": "Ethereum"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "QBFT"
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
  "@id": "urn:ngm:class:qbft",
  "@type": "Class",
  "label": "QBFT",
  "definition": "QBFT is a Byzantine fault tolerant consensus algorithm used in enterprise Ethereum clients to provide immediate finality among a known set of validators. It tolerates a minority of faulty or malicious validators.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:byzantine-fault-tolerance",
      "label": "Byzantine Fault Tolerance"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:consensus-algorithm",
        "label": "Consensus Algorithm"
      },
      {
        "@id": "urn:ngm:class:byzantine-fault-tolerance",
        "label": "Byzantine Fault Tolerance"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:distributed-ledger-technology",
        "label": "Distributed Ledger Technology"
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
  "@id": "urn:visionflow:annotation:link-resolutions:qbft:ad1c58b25994",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:501aee4ea03a497816a967670f9785cc43c58f55bbad9d07ea413c692a750469"
  },
  "vc:resolutions": [
    {
      "raw": "[[Consensus Algorithm]]",
      "resolved": "urn:visionflow:linked:consensus-algorithm",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Byzantine Fault Tolerance]]",
      "resolved": "urn:visionflow:linked:byzantine-fault-tolerance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Distributed Ledger Technology]]",
      "resolved": "urn:visionflow:linked:distributed-ledger-technology",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Ethereum]]",
      "resolved": "urn:visionflow:linked:ethereum",
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
  - QBFT is a Byzantine fault tolerant consensus algorithm used in enterprise Ethereum clients to provide immediate finality among a known set of validators. It tolerates a minority of faulty or malicious validators.

- ### Semantic Classification
  - owl-class:: blockchain:QBFT
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Byzantine Fault Tolerance]]
  - bridges-to:: [[Ethereum]]
  - requires:: [[Consensus Algorithm]], [[Byzantine Fault Tolerance]]
  - enables:: [[Distributed Ledger Technology]]

- ### Content
  - QBFT, or Quorum Byzantine Fault Tolerance, is a proof-of-authority style consensus protocol for permissioned Ethereum networks in which a fixed set of validators propose and agree on blocks. It provides immediate finality and tolerates up to roughly one third of validators being faulty.
  - Implemented in clients such as Hyperledger Besu and GoQuorum, QBFT supports validator set changes through on-chain voting and is suited to consortium deployments. It trades the open participation of public proof-of-stake for predictable performance among known parties.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
