```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:16f6fcf5a94ca483b146ee9f5a6fc1d99f9b8e6e3a401d3a259b3aa800427ba7",
  "@type": "Page",
  "vc:slug": "creator-royalty-token",
  "title": "Creator Royalty Token",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:automated-royalty-distribution",
      "vc:label": "Automated Royalty Distribution"
    },
    {
      "@id": "urn:visionflow:linked:creator-compensation",
      "vc:label": "Creator Compensation"
    },
    {
      "@id": "urn:visionflow:linked:fan-investment",
      "vc:label": "Fan Investment"
    },
    {
      "@id": "urn:visionflow:linked:intellectual-property-system",
      "vc:label": "Intellectual Property System"
    },
    {
      "@id": "urn:visionflow:linked:ip-monetization",
      "vc:label": "IP Monetization"
    },
    {
      "@id": "urn:visionflow:linked:ip-rights-metadata",
      "vc:label": "IP Rights Metadata"
    },
    {
      "@id": "urn:visionflow:linked:iso-24165",
      "vc:label": "ISO 24165"
    },
    {
      "@id": "urn:visionflow:linked:oecd-creative-economy",
      "vc:label": "OECD Creative Economy"
    },
    {
      "@id": "urn:visionflow:linked:oma3-media-wg",
      "vc:label": "OMA3 Media WG"
    },
    {
      "@id": "urn:visionflow:linked:ownership-record",
      "vc:label": "Ownership Record"
    },
    {
      "@id": "urn:visionflow:linked:payment-gateway",
      "vc:label": "Payment Gateway"
    },
    {
      "@id": "urn:visionflow:linked:revenue-distribution-logic",
      "vc:label": "Revenue Distribution Logic"
    },
    {
      "@id": "urn:visionflow:linked:revenue-monitoring-service",
      "vc:label": "Revenue Monitoring Service"
    },
    {
      "@id": "urn:visionflow:linked:royalty-smart-contract",
      "vc:label": "Royalty Smart Contract"
    },
    {
      "@id": "urn:visionflow:linked:royalty-tracking-system",
      "vc:label": "Royalty Tracking System"
    },
    {
      "@id": "urn:visionflow:linked:smart-contract-layer",
      "vc:label": "SmartContractLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-agent-system",
      "vc:label": "AI Agent System"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "BlockchainDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-application",
      "vc:label": "CreativeMediaDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:creator-economy",
      "vc:label": "Creator Economy"
    },
    {
      "@id": "urn:visionflow:owl:class:data-layer",
      "vc:label": "DataLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-wallet",
      "vc:label": "Digital Wallet"
    },
    {
      "@id": "urn:visionflow:owl:class:nft-standard",
      "vc:label": "NFT Standard"
    },
    {
      "@id": "urn:visionflow:owl:class:revenue-sharing",
      "vc:label": "Revenue Sharing"
    },
    {
      "@id": "urn:visionflow:owl:class:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-economy",
      "vc:label": "Virtual Economy"
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
      "vc:value": "bc-20132"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Creator Royalty Token"
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
  "@id": "urn:ngm:class:creator-royalty-token",
  "@type": "Class",
  "label": "Creator Royalty Token",
  "definition": "Token granting its holder a share of ongoing from creative works, enabling automated royalty distribution and fractional ownership of intellectual property income streams.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-token-and-asset",
      "label": "Token and Asset"
    },
    {
      "@id": "urn:ngm:class:virtual-economy",
      "label": "Virtual Economy"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:ownership-record",
        "label": "Ownership Record"
      },
      {
        "@id": "urn:ngm:class:revenue-distribution",
        "label": "Revenue Distribution Logic"
      },
      {
        "@id": "urn:ngm:class:smart-royalty-contract",
        "label": "Royalty Smart Contract"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:digital-wallet",
        "label": "Digital Wallet"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:royalty-distribution",
        "label": "Automated Royalty Distribution"
      },
      {
        "@id": "urn:ngm:class:creator-compensation",
        "label": "Creator Compensation"
      },
      {
        "@id": "urn:ngm:class:revenue-sharing",
        "label": "Revenue Sharing"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:creator-economy",
        "label": "Creator Economy"
      },
      {
        "@id": "urn:ngm:class:virtual-economy",
        "label": "Virtual Economy"
      }
    ]
  },
  "quality": 0.5,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

- ### Definition
  - Token granting its holder a share of ongoing revenue from creative works, enabling automated royalty distribution and fractional ownership of intellectual property income streams.

- ### Semantic Classification
  - owl-class:: blockchain:CreatorRoyaltyToken
  - owl-role:: Object
  - owl-inferred:: mv:VirtualObject
  - belongs-to-domain:: [[BlockchainDomain]], [[VirtualEconomyDomain]], [[CreativeMediaDomain]]
  - implemented-in-layer:: [[SmartContractLayer]], [[DataLayer]]

- ### Relationships
  - has-part:: [[Royalty Smart Contract]], [[Revenue Distribution Logic]], [[Ownership Record]], [[IP Rights Metadata]]
  - is-part-of:: [[Virtual Economy]], [[Creator Economy]], [[Intellectual Property System]]
  - requires:: [[Blockchain]], [[Smart Contract]], [[Digital Wallet]], [[Royalty Tracking System]]
  - enables:: [[Automated Royalty Distribution]], [[Creator Compensation]], [[Revenue Sharing]], [[IP Monetization]], [[Fan Investment]]
  - depends-on:: [[NFT Standard]], [[Payment Gateway]], [[Revenue Monitoring Service]]

  - bridges-to:: [[AI Agent System]] (ai)
- ### Content

  Creator Royalty Tokens tokenise intellectual property income streams, enabling creators to receive upfront capital whilst granting token holders ongoing revenue participation. Each token represents a proportional claim to future royalties from creative works—musical compositions, written content, or artistic creations. Smart contracts automatically distribute revenue proportional to token holdings whenever sales or licensing payments occur.

  Token economics enable fractional ownership where fans purchase tokens to support creators whilst receiving financial participation. Creators conduct token offerings raising capital for production costs, marketing, or personal needs, establishing ongoing alignment between creator and community interests. Secondary markets enable token trading, establishing price discovery reflecting community valuation of creator output.

  Compared to traditional royalty assignments through intermediaries (record labels, publishers), blockchain-based royalty tokens eliminate intermediaries reducing fees, provide transparent payment tracking enabling creators to understand revenue sources, and enable global participation without geographical or institutional restrictions. Challenges include regulatory classification (securities classification may restrict distribution) and establishing verifiable revenue sources triggering distributions.

- ### Provenance
  - sources:: [[OMA3 Media WG]], [[ISO 24165]], [[OECD Creative Economy]]
  - migration-date:: 2026-04-26T00:00:00Z
