public:: true

# Votium
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:feea43a0255384610ceb105c83bea1acd41397f99135e1aa5d4f97ae743038f3",
  "@type": "Page",
  "vc:slug": "votium",
  "title": "Votium",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:gauge-voting",
      "vc:label": "Gauge Voting"
    },
    {
      "@id": "urn:visionflow:linked:convex-finance",
      "vc:label": "Convex Finance"
    },
    {
      "@id": "urn:visionflow:linked:tokenomics",
      "vc:label": "Tokenomics"
    },
    {
      "@id": "urn:visionflow:linked:curve-finance",
      "vc:label": "Curve Finance"
    },
    {
      "@id": "urn:visionflow:linked:hidden-hand",
      "vc:label": "Hidden Hand"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Votium"
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
  "@id": "urn:ngm:class:votium",
  "@type": "Class",
  "label": "Votium",
  "definition": "Votium is a marketplace on Ethereum where protocols pay holders of vote-escrowed CRV to direct Curve gauge emissions. It operates as a bribery market for governance influence.",
  "domain": "defi",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:hidden-hand",
      "label": "Hidden Hand"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:gauge-voting",
        "label": "Gauge Voting"
      },
      {
        "@id": "urn:ngm:class:convex-finance",
        "label": "Convex Finance"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:tokenomics",
        "label": "Tokenomics"
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
  "@id": "urn:visionflow:annotation:link-resolutions:votium:7fb6d0f4fabb",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:feea43a0255384610ceb105c83bea1acd41397f99135e1aa5d4f97ae743038f3"
  },
  "vc:resolutions": [
    {
      "raw": "[[Gauge Voting]]",
      "resolved": "urn:visionflow:linked:gauge-voting",
      "kind": "StubLink"
    },
    {
      "raw": "[[Convex Finance]]",
      "resolved": "urn:visionflow:linked:convex-finance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Tokenomics]]",
      "resolved": "urn:visionflow:linked:tokenomics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Curve Finance]]",
      "resolved": "urn:visionflow:linked:curve-finance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Hidden Hand]]",
      "resolved": "urn:visionflow:linked:hidden-hand",
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
  - Votium is a marketplace on Ethereum where protocols pay holders of vote-escrowed CRV to direct Curve gauge emissions. It operates as a bribery market for governance influence.

- ### Semantic Classification
  - owl-class:: defi:Votium
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Hidden Hand]]
  - bridges-to:: [[Curve Finance]]
  - requires:: [[Gauge Voting]], [[Convex Finance]]
  - enables:: [[Tokenomics]]

- ### Content
  - Votium lets projects deposit incentives that are distributed to voters who lock CRV or vlCVX and steer Curve gauge weights toward chosen liquidity pools. Voters claim the incentives in proportion to their delegated voting power, effectively renting governance influence for a defined period.
  - The platform formalised the practice of vote bribery in the Curve and Convex ecosystems, creating a recurring auction for emission direction. It became a reference example of how governance token rewards can be monetised by third parties.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
