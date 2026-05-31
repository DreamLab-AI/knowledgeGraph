public:: true

# USDC
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:79cd6843be580ccd1e98d85095e3280d9dfb8bbddc860326fea54cd83ca7998c",
  "@type": "Page",
  "vc:slug": "usdc",
  "title": "USDC",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:usd",
      "vc:label": "USD"
    },
    {
      "@id": "urn:visionflow:linked:custody-infrastructure",
      "vc:label": "Custody Infrastructure"
    },
    {
      "@id": "urn:visionflow:linked:usdt",
      "vc:label": "USDT"
    },
    {
      "@id": "urn:visionflow:linked:payment-system",
      "vc:label": "Payment System"
    },
    {
      "@id": "urn:visionflow:linked:stablecoin",
      "vc:label": "Stablecoin"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "USDC"
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
  "@id": "urn:ngm:class:usdc",
  "@type": "Class",
  "label": "USDC",
  "definition": "A fiat-backed stablecoin pegged to the United States dollar, issued against reserves of cash and short-term government securities and redeemable on a one-for-one basis.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:stablecoin",
      "label": "Stablecoin"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:usd",
        "label": "USD"
      },
      {
        "@id": "urn:ngm:class:custody-infrastructure",
        "label": "Custody Infrastructure"
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
  "@id": "urn:visionflow:annotation:link-resolutions:usdc:a34645ceb35b",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:79cd6843be580ccd1e98d85095e3280d9dfb8bbddc860326fea54cd83ca7998c"
  },
  "vc:resolutions": [
    {
      "raw": "[[USD]]",
      "resolved": "urn:visionflow:linked:usd",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Custody Infrastructure]]",
      "resolved": "urn:visionflow:linked:custody-infrastructure",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[USDT]]",
      "resolved": "urn:visionflow:linked:usdt",
      "kind": "StubLink"
    },
    {
      "raw": "[[Payment System]]",
      "resolved": "urn:visionflow:linked:payment-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Stablecoin]]",
      "resolved": "urn:visionflow:linked:stablecoin",
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
  - A fiat-backed stablecoin pegged to the United States dollar, issued against reserves of cash and short-term government securities and redeemable on a one-for-one basis.

- ### Semantic Classification
  - owl-class:: blockchain:USDC
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Stablecoin]]
  - bridges-to:: [[USDT]], [[Payment System]]
  - requires:: [[USD]], [[Custody Infrastructure]]

- ### Content
  - USDC is a stablecoin designed to hold a value of one US dollar. Each token in circulation is intended to be matched by reserves held off-chain, principally cash and short-dated government securities, with periodic attestations of those reserves published by the issuer.
  - On public ledgers USDC functions as a settlement and unit-of-account token, widely used as collateral in lending markets, as a quote asset on exchanges, and as a medium for transfers. Its peg depends on the reliability of the reserve backing and on the issuer's ability to honour redemptions for dollars.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
