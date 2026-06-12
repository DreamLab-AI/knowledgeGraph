public:: true

# Argo Blockchain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:251195a51c3578d2228d52f13e07c6f097fdbb0c6f40bb6251eb3077bb898e39",
  "@type": "Page",
  "vc:slug": "argo-blockchain",
  "title": "Argo Blockchain",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:bitcoin-mining",
      "vc:label": "Bitcoin Mining"
    },
    {
      "@id": "urn:visionflow:linked:bitcoin",
      "vc:label": "Bitcoin"
    },
    {
      "@id": "urn:visionflow:linked:cryptocurrency",
      "vc:label": "Cryptocurrency"
    },
    {
      "@id": "urn:visionflow:linked:sustainability-domain",
      "vc:label": "Sustainability Domain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Argo Blockchain"
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
  "@id": "urn:ngm:class:argo-blockchain",
  "@type": "Class",
  "label": "Argo Blockchain",
  "definition": "Argo Blockchain is a publicly listed cryptocurrency mining company that operates data centres performing the hashing that secures proof-of-work networks, chiefly Bitcoin.",
  "domain": "metaverse",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-mining",
      "label": "Bitcoin Mining"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-mining",
        "label": "Bitcoin Mining"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol",
        "label": "Bitcoin"
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
  "@id": "urn:visionflow:annotation:link-resolutions:argo-blockchain:d1c20fcdf71e",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:251195a51c3578d2228d52f13e07c6f097fdbb0c6f40bb6251eb3077bb898e39"
  },
  "vc:resolutions": [
    {
      "raw": "[[Bitcoin Mining]]",
      "resolved": "urn:visionflow:linked:bitcoin-mining",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Bitcoin Proof-of-Work Protocol]]",
      "resolved": "urn:visionflow:linked:bitcoin",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cryptocurrency]]",
      "resolved": "urn:visionflow:linked:cryptocurrency",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Sustainability Domain]]",
      "resolved": "urn:visionflow:linked:sustainability-domain",
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
  - Argo Blockchain is a publicly listed cryptocurrency mining company that operates data centres performing the hashing that secures proof-of-work networks, chiefly Bitcoin.

- ### Semantic Classification
  - owl-class:: metaverse:ArgoBlockchain
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Bitcoin Mining]]
  - bridges-to:: [[Cryptocurrency]], [[Sustainability Domain]]
  - requires:: [[Bitcoin Mining]]
  - enables:: [[Bitcoin Proof-of-Work Protocol]]

- ### Content
  - Argo Blockchain runs mining facilities housing specialised hardware that competes to validate blocks and earn rewards, with profitability tied to coin price, network difficulty and energy cost. It has emphasised access to lower-carbon electricity.
  - As a listed miner it is exposed to the volatility and energy debates surrounding proof-of-work, linking it to wider sustainability concerns about cryptocurrency.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
