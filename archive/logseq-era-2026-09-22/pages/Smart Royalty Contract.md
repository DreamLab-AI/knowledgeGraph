public:: true

# Smart Royalty Contract
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:1388aff77d19dda377b21fe101df243f94bd5915c50274c1d8b0a48b924e91bb",
  "@type": "Page",
  "vc:slug": "smart-royalty-contract",
  "title": "Smart Royalty Contract",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:automated-payment-enforcement",
      "vc:label": "Automated Payment Enforcement"
    },
    {
      "@id": "urn:visionflow:linked:eip-2981",
      "vc:label": "EIP-2981"
    },
    {
      "@id": "urn:visionflow:linked:enforcement-module",
      "vc:label": "Enforcement Module"
    },
    {
      "@id": "urn:visionflow:linked:event-emitter",
      "vc:label": "Event Emitter"
    },
    {
      "@id": "urn:visionflow:linked:metadata-storage",
      "vc:label": "Metadata Storage"
    },
    {
      "@id": "urn:visionflow:linked:multi-recipient-distribution",
      "vc:label": "Multi-Recipient Distribution"
    },
    {
      "@id": "urn:visionflow:linked:nft-standard-implementation",
      "vc:label": "NFT Standard Implementation"
    },
    {
      "@id": "urn:visionflow:linked:oracle-service",
      "vc:label": "Oracle Service"
    },
    {
      "@id": "urn:visionflow:linked:payment-splitter",
      "vc:label": "Payment Splitter"
    },
    {
      "@id": "urn:visionflow:linked:perpetual-creator-royalties",
      "vc:label": "Perpetual Creator Royalties"
    },
    {
      "@id": "urn:visionflow:linked:royalty-logic",
      "vc:label": "Royalty Logic"
    },
    {
      "@id": "urn:visionflow:linked:royalty-registry",
      "vc:label": "Royalty Registry"
    },
    {
      "@id": "urn:visionflow:linked:royalty-verification",
      "vc:label": "Royalty Verification"
    },
    {
      "@id": "urn:visionflow:linked:wallet-infrastructure",
      "vc:label": "Wallet Infrastructure"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain-network",
      "vc:label": "Blockchain Network"
    },
    {
      "@id": "urn:visionflow:owl:class:gas-fee-market",
      "vc:label": "Gas Fee Market"
    },
    {
      "@id": "urn:visionflow:owl:class:middleware-layer",
      "vc:label": "MiddlewareLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:payment-token",
      "vc:label": "Payment Token"
    },
    {
      "@id": "urn:visionflow:owl:class:smart-contract-platform",
      "vc:label": "Smart Contract Platform"
    },
    {
      "@id": "urn:visionflow:owl:class:token-standard",
      "vc:label": "Token Standard"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-economy",
      "vc:label": "VirtualEconomyDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20272"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Smart Royalty Contract"
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
  "@id": "urn:ngm:class:smart-royalty-contract",
  "@type": "Class",
  "label": "Smart Royalty Contract",
  "definition": "A programmable blockchain contract that automatically enforces royalty payment terms, calculates compensation amounts, and triggers distributions to creators and rights holders upon qualifying transactions in NFT and digital asset ecosystems.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-governance-and-safety",
      "label": "Governance and Safety"
    },
    {
      "@id": "urn:ngm:class:royalty-mechanism",
      "label": "Royalty Mechanism"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:event-emission",
        "label": "Event Emitter"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:oracle-service",
        "label": "Oracle Service"
      },
      {
        "@id": "urn:ngm:class:payment-token",
        "label": "Payment Token"
      },
      {
        "@id": "urn:ngm:class:smart-contract-platform",
        "label": "Smart Contract Platform"
      },
      {
        "@id": "urn:ngm:class:token-standard",
        "label": "Token Standard"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:creator-royalties",
        "label": "Perpetual Creator Royalties"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:nft-standard",
        "label": "NFT Standard Implementation"
      }
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:smart-royalty-contract:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:1388aff77d19dda377b21fe101df243f94bd5915c50274c1d8b0a48b924e91bb"
  },
  "vc:resolutions": [
    {
      "raw": "[[Automated Payment Enforcement]]",
      "resolved": "urn:visionflow:linked:automated-payment-enforcement",
      "kind": "StubLink"
    },
    {
      "raw": "[[EIP-2981]]",
      "resolved": "urn:visionflow:linked:eip-2981",
      "kind": "StubLink"
    },
    {
      "raw": "[[Enforcement Module]]",
      "resolved": "urn:visionflow:linked:enforcement-module",
      "kind": "StubLink"
    },
    {
      "raw": "[[Event Emitter]]",
      "resolved": "urn:visionflow:linked:event-emitter",
      "kind": "StubLink"
    },
    {
      "raw": "[[Metadata Storage]]",
      "resolved": "urn:visionflow:linked:metadata-storage",
      "kind": "StubLink"
    },
    {
      "raw": "[[Multi-Recipient Distribution]]",
      "resolved": "urn:visionflow:linked:multi-recipient-distribution",
      "kind": "StubLink"
    },
    {
      "raw": "[[NFT Standard Implementation]]",
      "resolved": "urn:visionflow:linked:nft-standard-implementation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Oracle Service]]",
      "resolved": "urn:visionflow:linked:oracle-service",
      "kind": "StubLink"
    },
    {
      "raw": "[[Payment Splitter]]",
      "resolved": "urn:visionflow:linked:payment-splitter",
      "kind": "StubLink"
    },
    {
      "raw": "[[Perpetual Creator Royalties]]",
      "resolved": "urn:visionflow:linked:perpetual-creator-royalties",
      "kind": "StubLink"
    },
    {
      "raw": "[[Royalty Logic]]",
      "resolved": "urn:visionflow:linked:royalty-logic",
      "kind": "StubLink"
    },
    {
      "raw": "[[Royalty Registry]]",
      "resolved": "urn:visionflow:linked:royalty-registry",
      "kind": "StubLink"
    },
    {
      "raw": "[[Royalty Verification]]",
      "resolved": "urn:visionflow:linked:royalty-verification",
      "kind": "StubLink"
    },
    {
      "raw": "[[Wallet Infrastructure]]",
      "resolved": "urn:visionflow:linked:wallet-infrastructure",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain Network]]",
      "resolved": "urn:visionflow:owl:class:blockchain-network",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Gas Fee Market]]",
      "resolved": "urn:visionflow:owl:class:gas-fee-market",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[MiddlewareLayer]]",
      "resolved": "urn:visionflow:owl:class:middleware-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Payment Token]]",
      "resolved": "urn:visionflow:owl:class:payment-token",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract Platform]]",
      "resolved": "urn:visionflow:owl:class:smart-contract-platform",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Token Standard]]",
      "resolved": "urn:visionflow:owl:class:token-standard",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[VirtualEconomyDomain]]",
      "resolved": "urn:visionflow:owl:class:virtual-economy",
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
  - A programmable blockchain contract that automatically enforces royalty payment terms, calculates compensation amounts, and triggers distributions to creators and rights holders upon qualifying transactions in NFT and digital asset ecosystems.

- ### Semantic Classification
  - owl-class:: spatial-computing:SmartRoyaltyContract
  - owl-role:: Object
  - owl-inferred:: spatial-computing:VirtualObject
  - belongs-to-domain:: [[VirtualEconomyDomain]]
  - implemented-in-layer:: [[MiddlewareLayer]]

- ### Relationships
  - has-part:: [[Royalty Logic]], [[Payment Splitter]], [[Royalty Registry]], [[Enforcement Module]], [[Event Emitter]]
  - is-part-of:: [[NFT Standard Implementation]]
  - requires:: [[Smart Contract Platform]], [[Token Standard]], [[Payment Token]], [[Oracle Service]]
  - enables:: [[Perpetual Creator Royalties]], [[Automated Payment Enforcement]], [[Multi-Recipient Distribution]], [[Royalty Verification]]
  - depends-on:: [[Blockchain Network]], [[Gas Fee Market]], [[Wallet Infrastructure]], [[Metadata Storage]]

- ### Content
  Smart Royalty Contract — content pending enrichment.

- ### Provenance
  - sources:: [[EIP-2981]]
  - migration-date:: 2026-04-26T00:00:00Z
