```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e2c0e0b56558c32c1583db0b39e32a72e2467187ec45bdb4571621bcba73eca9",
  "@type": "Page",
  "vc:slug": "loyalty-token",
  "title": "Loyalty Token",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:brand-engagement",
      "vc:label": "Brand Engagement"
    },
    {
      "@id": "urn:visionflow:linked:cryptographic-signature",
      "vc:label": "Cryptographic Signature"
    },
    {
      "@id": "urn:visionflow:linked:incentive-mechanism",
      "vc:label": "Incentive Mechanism"
    },
    {
      "@id": "urn:visionflow:linked:membership-program",
      "vc:label": "Membership Program"
    },
    {
      "@id": "urn:visionflow:linked:msf-use-cases",
      "vc:label": "MSF Use Cases"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:crypto-token",
      "vc:label": "Crypto Token"
    },
    {
      "@id": "urn:visionflow:owl:class:customer-rewards",
      "vc:label": "Customer Rewards"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-wallet",
      "vc:label": "Digital Wallet"
    },
    {
      "@id": "urn:visionflow:owl:class:middleware-layer",
      "vc:label": "MiddlewareLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:owl:class:token-standard",
      "vc:label": "Token Standard"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-asset",
      "vc:label": "Virtual Asset"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-economy",
      "vc:label": "VirtualEconomyDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-society",
      "vc:label": "VirtualSocietyDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20088"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Loyalty Token"
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
  "@id": "urn:ngm:class:loyalty-token",
  "@type": "Class",
  "label": "Loyalty Token",
  "definition": "A digital token granting repeat-use or membership rewards within a metaverse ecosystem, enabling customer engagement, brand loyalty programs, and tokenized incentive mechanisms.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    },
    {
      "@id": "urn:ngm:class:loyalty-programs",
      "label": "Loyalty Programs"
    }
  ],
  "relations": {
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
        "@id": "urn:ngm:class:incentive-mechanism",
        "label": "Incentive Mechanism"
      },
      {
        "@id": "urn:ngm:class:customer-rewards",
        "label": "Customer Rewards"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:crypto-token",
        "label": "Crypto Token"
      },
      {
        "@id": "urn:ngm:class:virtual-asset",
        "label": "Virtual Asset"
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

- ### Definition
  - A digital token granting repeat-use or membership rewards within a metaverse ecosystem, enabling customer engagement, brand loyalty programs, and tokenized incentive mechanisms.

- ### Semantic Classification
  - owl-class:: spatial-computing:LoyaltyToken
  - owl-role:: Object
  - owl-inferred:: spatial-computing:VirtualObject
  - belongs-to-domain:: [[VirtualEconomyDomain]], [[VirtualSocietyDomain]]
  - implemented-in-layer:: [[MiddlewareLayer]]

- ### Relationships
  - is-part-of:: [[Crypto Token]], [[Virtual Asset]]
  - requires:: [[Blockchain]], [[Smart Contract]], [[Digital Wallet]]
  - enables:: [[Customer Rewards]], [[Brand Engagement]], [[Membership Program]], [[Incentive Mechanism]]
  - depends-on:: [[Token Standard]], [[Cryptographic Signature]]

- ### Content
  Loyalty Token — content pending enrichment.

- ### Provenance
  - sources:: [[MSF Use Cases]]
  - migration-date:: 2026-04-26T00:00:00Z
