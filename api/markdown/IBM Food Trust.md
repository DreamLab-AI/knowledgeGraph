public:: true

# IBM Food Trust
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:72d4c86ee380ebd6b8f9dd87f39c049dd9714c07825834a0d1ed793d1171e107",
  "@type": "Page",
  "vc:slug": "ibm-food-trust",
  "title": "IBM Food Trust",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:hyperledger-fabric",
      "vc:label": "Hyperledger Fabric"
    },
    {
      "@id": "urn:visionflow:linked:food-safety",
      "vc:label": "Food Safety"
    },
    {
      "@id": "urn:visionflow:linked:distributed-ledger",
      "vc:label": "Distributed Ledger"
    },
    {
      "@id": "urn:visionflow:linked:supply-chain",
      "vc:label": "Supply Chain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "IBM Food Trust"
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
  "@id": "urn:ngm:class:ibm-food-trust",
  "@type": "Class",
  "label": "IBM Food Trust",
  "definition": "IBM Food Trust is a blockchain-based platform for sharing food supply chain data among participants to support traceability and provenance.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:supply-chain",
      "label": "Supply Chain"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:hyperledger-fabric",
        "label": "Hyperledger Fabric"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:food-safety",
        "label": "Food Safety"
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
  "@id": "urn:visionflow:annotation:link-resolutions:ibm-food-trust:8fc91dc9b7a7",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:72d4c86ee380ebd6b8f9dd87f39c049dd9714c07825834a0d1ed793d1171e107"
  },
  "vc:resolutions": [
    {
      "raw": "[[Hyperledger Fabric]]",
      "resolved": "urn:visionflow:linked:hyperledger-fabric",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Food Safety]]",
      "resolved": "urn:visionflow:linked:food-safety",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Distributed Ledger]]",
      "resolved": "urn:visionflow:linked:distributed-ledger",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Supply Chain]]",
      "resolved": "urn:visionflow:linked:supply-chain",
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
  - IBM Food Trust is a blockchain-based platform for sharing food supply chain data among participants to support traceability and provenance.

- ### Semantic Classification
  - owl-class:: blockchain:IBMFoodTrust
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Supply Chain]]
  - bridges-to:: [[Distributed Ledger]]
  - requires:: [[Hyperledger Fabric]]
  - enables:: [[Food Safety]]

- ### Content
  - IBM Food Trust records and shares supply chain events on a permissioned distributed ledger, allowing participants to trace the movement of food products.
  - The platform is built on Hyperledger Fabric and is used by retailers and suppliers to improve traceability and respond to food safety incidents.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
