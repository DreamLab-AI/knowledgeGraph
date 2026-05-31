public:: true

# Curve Wars
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:6c5e6b7f43599a31fce3ccbe4a4f557132c3e4b9419c427c4b8a67eb6b3239bc",
  "@type": "Page",
  "vc:slug": "curve-wars",
  "title": "Curve Wars",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:vote-escrow-model",
      "vc:label": "Vote-Escrow Model"
    },
    {
      "@id": "urn:visionflow:linked:convex-finance",
      "vc:label": "Convex Finance"
    },
    {
      "@id": "urn:visionflow:linked:liquidity-pool",
      "vc:label": "Liquidity Pool"
    },
    {
      "@id": "urn:visionflow:linked:liquidity-provision",
      "vc:label": "Liquidity Provision"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Curve Wars"
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
  "@id": "urn:ngm:class:curve-wars",
  "@type": "Class",
  "label": "Curve Wars",
  "definition": "The competition among protocols to accumulate vote-escrowed governance power in the Curve exchange in order to direct token emissions toward their own liquidity pools.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:liquidity-provision",
      "label": "Liquidity Provision"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:vote-escrow-model",
        "label": "Vote-Escrow Model"
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
  "@id": "urn:visionflow:annotation:link-resolutions:curve-wars:f04f15390615",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:6c5e6b7f43599a31fce3ccbe4a4f557132c3e4b9419c427c4b8a67eb6b3239bc"
  },
  "vc:resolutions": [
    {
      "raw": "[[Vote-Escrow Model]]",
      "resolved": "urn:visionflow:linked:vote-escrow-model",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Convex Finance]]",
      "resolved": "urn:visionflow:linked:convex-finance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Liquidity Pool]]",
      "resolved": "urn:visionflow:linked:liquidity-pool",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Liquidity Provision]]",
      "resolved": "urn:visionflow:linked:liquidity-provision",
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
  - The competition among protocols to accumulate vote-escrowed governance power in the Curve exchange in order to direct token emissions toward their own liquidity pools.

- ### Semantic Classification
  - owl-class:: blockchain:CurveWars
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Liquidity Provision]]
  - bridges-to:: [[Convex Finance]], [[Liquidity Pool]]
  - requires:: [[Vote-Escrow Model]]

- ### Content
  - The Curve Wars describes the contest among protocols to gain influence over how Curve's reward emissions are distributed across its liquidity pools. Voting power in Curve is obtained by locking its governance token under a vote-escrow model, with longer locks granting greater weight.
  - Because emissions directed to a pool attract liquidity, protocols sought to accumulate locked voting power to favour pools holding their own assets, often through intermediaries such as Convex Finance that aggregate locked positions. The episode illustrated how vote-escrow governance can create secondary markets for influence over token incentives.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
