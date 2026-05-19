public:: true

# Royalty Mechanism
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:773757e1e96f1f33a348a6fa0e6df7c51dfacb82b102ee3b56a0d971a7e1b9ad",
  "@type": "Page",
  "vc:slug": "royalty-mechanism",
  "title": "Royalty Mechanism",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:creator-compensation",
      "vc:label": "Creator Compensation"
    },
    {
      "@id": "urn:visionflow:linked:creator-wallet",
      "vc:label": "Creator Wallet"
    },
    {
      "@id": "urn:visionflow:linked:msf-use-cases",
      "vc:label": "MSF Use Cases"
    },
    {
      "@id": "urn:visionflow:linked:payment-distribution",
      "vc:label": "Payment Distribution"
    },
    {
      "@id": "urn:visionflow:linked:perpetual-revenue",
      "vc:label": "Perpetual Revenue"
    },
    {
      "@id": "urn:visionflow:linked:rights-enforcement",
      "vc:label": "Rights Enforcement"
    },
    {
      "@id": "urn:visionflow:linked:rights-registry",
      "vc:label": "Rights Registry"
    },
    {
      "@id": "urn:visionflow:linked:royalty-calculation",
      "vc:label": "Royalty Calculation"
    },
    {
      "@id": "urn:visionflow:linked:transaction-tracking",
      "vc:label": "Transaction Tracking"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain-infrastructure",
      "vc:label": "Blockchain Infrastructure"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-rights-management",
      "vc:label": "Digital Rights Management"
    },
    {
      "@id": "urn:visionflow:owl:class:marketplace-integration",
      "vc:label": "Marketplace Integration"
    },
    {
      "@id": "urn:visionflow:owl:class:middleware-layer",
      "vc:label": "MiddlewareLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:nft-standard",
      "vc:label": "NFT Standard"
    },
    {
      "@id": "urn:visionflow:owl:class:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-economy-domain",
      "vc:label": "VirtualEconomyDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20217"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Royalty Mechanism"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:royalty-mechanism",
  "@type": "Class",
  "label": "Royalty Mechanism",
  "definition": "Automated process ensuring creators receive compensation when their assets are resold or used in secondary markets.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-governance-and-safety",
      "label": "Governance and Safety"
    },
    {
      "@id": "urn:ngm:class:digital-rights-management",
      "label": "Digital Rights Management"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:payment-distribution",
        "label": "Payment Distribution"
      },
      {
        "@id": "urn:ngm:class:rights-registry",
        "label": "Rights Registry"
      },
      {
        "@id": "urn:ngm:class:royalty-calculation",
        "label": "Royalty Calculation"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:creator-wallet",
        "label": "Creator Wallet"
      },
      {
        "@id": "urn:ngm:class:blockchain-infrastructure",
        "label": "Blockchain Infrastructure"
      },
      {
        "@id": "urn:ngm:class:nft-standard",
        "label": "NFT Standard"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:creator-compensation",
        "label": "Creator Compensation"
      },
      {
        "@id": "urn:ngm:class:perpetual-revenue",
        "label": "Perpetual Revenue"
      },
      {
        "@id": "urn:ngm:class:rights-enforcement",
        "label": "Rights Enforcement"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:digital-rights-management",
        "label": "Digital Rights Management"
      }
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:royalty-mechanism:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:773757e1e96f1f33a348a6fa0e6df7c51dfacb82b102ee3b56a0d971a7e1b9ad"
  },
  "vc:resolutions": [
    {
      "raw": "[[Creator Compensation]]",
      "resolved": "urn:visionflow:linked:creator-compensation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Creator Wallet]]",
      "resolved": "urn:visionflow:linked:creator-wallet",
      "kind": "StubLink"
    },
    {
      "raw": "[[MSF Use Cases]]",
      "resolved": "urn:visionflow:linked:msf-use-cases",
      "kind": "StubLink"
    },
    {
      "raw": "[[Payment Distribution]]",
      "resolved": "urn:visionflow:linked:payment-distribution",
      "kind": "StubLink"
    },
    {
      "raw": "[[Perpetual Revenue]]",
      "resolved": "urn:visionflow:linked:perpetual-revenue",
      "kind": "StubLink"
    },
    {
      "raw": "[[Rights Enforcement]]",
      "resolved": "urn:visionflow:linked:rights-enforcement",
      "kind": "StubLink"
    },
    {
      "raw": "[[Rights Registry]]",
      "resolved": "urn:visionflow:linked:rights-registry",
      "kind": "StubLink"
    },
    {
      "raw": "[[Royalty Calculation]]",
      "resolved": "urn:visionflow:linked:royalty-calculation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Transaction Tracking]]",
      "resolved": "urn:visionflow:linked:transaction-tracking",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain Infrastructure]]",
      "resolved": "urn:visionflow:owl:class:blockchain-infrastructure",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Rights Management]]",
      "resolved": "urn:visionflow:owl:class:digital-rights-management",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Marketplace Integration]]",
      "resolved": "urn:visionflow:owl:class:marketplace-integration",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[MiddlewareLayer]]",
      "resolved": "urn:visionflow:owl:class:middleware-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[NFT Standard]]",
      "resolved": "urn:visionflow:owl:class:nft-standard",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:owl:class:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[VirtualEconomyDomain]]",
      "resolved": "urn:visionflow:owl:class:virtual-economy-domain",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Automated process ensuring creators receive compensation when their assets are resold or used in secondary markets.

- ### Semantic Classification
  - owl-class:: spatial-computing:RoyaltyMechanism
  - owl-role:: Process
  - owl-inferred:: spatial-computing:VirtualProcess
  - belongs-to-domain:: [[VirtualEconomyDomain]]
  - implemented-in-layer:: [[MiddlewareLayer]]

- ### Relationships
  - has-part:: [[Smart Contract]], [[Royalty Calculation]], [[Payment Distribution]], [[Rights Registry]]
  - is-part-of:: [[Digital Rights Management]]
  - requires:: [[NFT Standard]], [[Blockchain Infrastructure]], [[Creator Wallet]]
  - enables:: [[Creator Compensation]], [[Perpetual Revenue]], [[Rights Enforcement]]
  - depends-on:: [[Marketplace Integration]], [[Transaction Tracking]]

- ### Content
  Royalty Mechanism — content pending enrichment.

- ### Provenance
  - sources:: [[MSF Use Cases]]
  - migration-date:: 2026-04-26T00:00:00Z
