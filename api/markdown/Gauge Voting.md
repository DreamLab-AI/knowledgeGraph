public:: true

# Gauge Voting
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:825b14a4f3f321798b7e52992fbb7f125f111702bd8cd29e6d88e8016bc59fad",
  "@type": "Page",
  "vc:slug": "gauge-voting",
  "title": "Gauge Voting",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:curve-finance",
      "vc:label": "Curve Finance"
    },
    {
      "@id": "urn:visionflow:linked:votium",
      "vc:label": "Votium"
    },
    {
      "@id": "urn:visionflow:linked:hidden-hand",
      "vc:label": "Hidden Hand"
    },
    {
      "@id": "urn:visionflow:linked:tokenomics",
      "vc:label": "Tokenomics"
    },
    {
      "@id": "urn:visionflow:linked:governance-token",
      "vc:label": "Governance Token"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Gauge Voting"
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
  "@id": "urn:ngm:class:gauge-voting",
  "@type": "Class",
  "label": "Gauge Voting",
  "definition": "Gauge voting is a mechanism in protocols such as Curve where token holders allocate weights to liquidity pools, determining how reward emissions are distributed. Voting power is usually tied to time-locked governance tokens.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:governance-token",
      "label": "Governance Token"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:curve-finance",
        "label": "Curve Finance"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:votium",
        "label": "Votium"
      },
      {
        "@id": "urn:ngm:class:hidden-hand",
        "label": "Hidden Hand"
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
  "@id": "urn:visionflow:annotation:link-resolutions:gauge-voting:818f03f994fb",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:825b14a4f3f321798b7e52992fbb7f125f111702bd8cd29e6d88e8016bc59fad"
  },
  "vc:resolutions": [
    {
      "raw": "[[Curve Finance]]",
      "resolved": "urn:visionflow:linked:curve-finance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Votium]]",
      "resolved": "urn:visionflow:linked:votium",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Hidden Hand]]",
      "resolved": "urn:visionflow:linked:hidden-hand",
      "kind": "StubLink"
    },
    {
      "raw": "[[Tokenomics]]",
      "resolved": "urn:visionflow:linked:tokenomics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Governance Token]]",
      "resolved": "urn:visionflow:linked:governance-token",
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
  - Gauge voting is a mechanism in protocols such as Curve where token holders allocate weights to liquidity pools, determining how reward emissions are distributed. Voting power is usually tied to time-locked governance tokens.

- ### Semantic Classification
  - owl-class:: defi:GaugeVoting
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Governance Token]]
  - bridges-to:: [[Tokenomics]]
  - requires:: [[Curve Finance]]
  - enables:: [[Votium]], [[Hidden Hand]]

- ### Content
  - In gauge voting, each liquidity pool is represented by a gauge, and holders of vote-escrowed tokens distribute their voting weight across gauges. The resulting weights set the share of newly minted reward tokens that each pool receives over the following epoch.
  - Because emissions translate into yield for liquidity providers, control of gauge weights has direct economic value. This created secondary markets such as Votium and Hidden Hand where protocols pay voters to favour their pools.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
