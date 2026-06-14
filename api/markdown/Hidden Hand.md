public:: true

# Hidden Hand
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:4a541a32d6e868268299ae31b6f366345e987ca3a37ede8b69df5febcfd21afc",
  "@type": "Page",
  "vc:slug": "hidden-hand",
  "title": "Hidden Hand",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:gauge-voting",
      "vc:label": "Gauge Voting"
    },
    {
      "@id": "urn:visionflow:linked:governance-token",
      "vc:label": "Governance Token"
    },
    {
      "@id": "urn:visionflow:linked:tokenomics",
      "vc:label": "Tokenomics"
    },
    {
      "@id": "urn:visionflow:linked:votium",
      "vc:label": "Votium"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Hidden Hand"
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
  "@id": "urn:ngm:class:hidden-hand",
  "@type": "Class",
  "label": "Hidden Hand",
  "definition": "Hidden Hand is a governance incentive marketplace operated by Redacted Cartel that lets protocols offer rewards to direct gauge votes across multiple DeFi systems. It generalises the bribery market model beyond a single protocol.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:gauge-voting",
      "label": "Gauge Voting"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:gauge-voting",
        "label": "Gauge Voting"
      },
      {
        "@id": "urn:ngm:class:governance-token",
        "label": "Governance Token"
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
  "@id": "urn:visionflow:annotation:link-resolutions:hidden-hand:4abbaf25a8b6",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:4a541a32d6e868268299ae31b6f366345e987ca3a37ede8b69df5febcfd21afc"
  },
  "vc:resolutions": [
    {
      "raw": "[[Gauge Voting]]",
      "resolved": "urn:visionflow:linked:gauge-voting",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Governance Token]]",
      "resolved": "urn:visionflow:linked:governance-token",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Tokenomics]]",
      "resolved": "urn:visionflow:linked:tokenomics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Votium]]",
      "resolved": "urn:visionflow:linked:votium",
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
  - Hidden Hand is a governance incentive marketplace operated by Redacted Cartel that lets protocols offer rewards to direct gauge votes across multiple DeFi systems. It generalises the bribery market model beyond a single protocol.

- ### Semantic Classification
  - owl-class:: defi:HiddenHand
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Gauge Voting]]
  - bridges-to:: [[Votium]]
  - requires:: [[Gauge Voting]], [[Governance Token]]
  - enables:: [[Tokenomics]]

- ### Content
  - Hidden Hand aggregates incentive offers from protocols seeking to influence gauge weight votes and routes them to eligible voters. It supports several underlying ecosystems, acting as a meta-marketplace for governance influence rather than serving one protocol.
  - By matching bidders who want emissions with voters who hold delegated power, Hidden Hand turns governance participation into a yield source. It sits alongside Votium as one of the principal venues for vote incentive auctions in DeFi.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
