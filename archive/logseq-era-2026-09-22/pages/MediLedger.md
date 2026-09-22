public:: true

# MediLedger
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:21971f3947477832dc1f0d764d46aa62a02944929bd920d938cad9b6d760327b",
  "@type": "Page",
  "vc:slug": "medi-ledger",
  "title": "MediLedger",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:permissioned-blockchain",
      "vc:label": "Permissioned Blockchain"
    },
    {
      "@id": "urn:visionflow:linked:gs-1",
      "vc:label": "GS1"
    },
    {
      "@id": "urn:visionflow:linked:provenance",
      "vc:label": "Provenance"
    },
    {
      "@id": "urn:visionflow:linked:distributed-ledger-technology",
      "vc:label": "Distributed Ledger Technology"
    },
    {
      "@id": "urn:visionflow:linked:supply-chain",
      "vc:label": "Supply Chain"
    },
    {
      "@id": "urn:visionflow:linked:pharmaceutical-supply-chain",
      "vc:label": "Pharmaceutical Supply Chain"
    },
    {
      "@id": "urn:visionflow:linked:https-www-mediledger-com",
      "vc:label": "https://www.mediledger.com/"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "MediLedger"
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
  "@id": "urn:ngm:class:medi-ledger",
  "@type": "Class",
  "label": "MediLedger",
  "definition": "A permissioned blockchain network for the pharmaceutical industry that records product provenance and verifies the legitimacy of drug transactions between trading partners. It was built to support compliance with United States drug supply chain security regulations.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:pharmaceutical-supply-chain",
      "label": "Pharmaceutical Supply Chain"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:permissioned-blockchain",
        "label": "Permissioned Blockchain"
      },
      {
        "@id": "urn:ngm:class:gs1",
        "label": "GS1"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:provenance",
        "label": "Provenance"
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
  "@id": "urn:visionflow:annotation:link-resolutions:medi-ledger:7574bef7448b",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:21971f3947477832dc1f0d764d46aa62a02944929bd920d938cad9b6d760327b"
  },
  "vc:resolutions": [
    {
      "raw": "[[Permissioned Blockchain]]",
      "resolved": "urn:visionflow:linked:permissioned-blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[GS1]]",
      "resolved": "urn:visionflow:linked:gs-1",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Provenance]]",
      "resolved": "urn:visionflow:linked:provenance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Distributed Ledger Technology]]",
      "resolved": "urn:visionflow:linked:distributed-ledger-technology",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Supply Chain]]",
      "resolved": "urn:visionflow:linked:supply-chain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Pharmaceutical Supply Chain]]",
      "resolved": "urn:visionflow:linked:pharmaceutical-supply-chain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://www.mediledger.com/]]",
      "resolved": "urn:visionflow:linked:https-www-mediledger-com",
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
  - A permissioned blockchain network for the pharmaceutical industry that records product provenance and verifies the legitimacy of drug transactions between trading partners. It was built to support compliance with United States drug supply chain security regulations.

- ### Semantic Classification
  - owl-class:: blockchain:MediLedger
  - owl-role:: NamedIndividual

- ### Relationships
  - is-subclass-of:: [[Pharmaceutical Supply Chain]]
  - bridges-to:: [[Distributed Ledger Technology]], [[Supply Chain]]
  - requires:: [[Permissioned Blockchain]], [[GS1]]
  - enables:: [[Provenance]]

- ### Content
  - MediLedger is an industry consortium network that lets pharmaceutical manufacturers, wholesalers and dispensers share a verifiable record of saleable returns and product identifiers. Partners check whether a given product identifier was issued by the stated manufacturer without exposing commercial data to competitors.
  - The network applies GS1 product identification standards on top of a permissioned ledger, so participants are known and access is controlled. Its primary goal is interoperable traceability that helps meet regulatory requirements for verifying prescription drug authenticity.

- ### Provenance
  - sources:: [[https://www.mediledger.com/]]
  - migration-date:: 2026-05-29T00:00:00Z
