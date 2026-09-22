public:: true

# Revenue Sharing
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3ec492bf0500a7676e5fe26aa83e8c5fc4de98be9e982444f5dd36021161ece2",
  "@type": "Page",
  "vc:slug": "revenue-sharing",
  "title": "Revenue Sharing",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:creator-monetization",
      "vc:label": "Creator Monetization"
    },
    {
      "@id": "urn:visionflow:owl:class:creator-economy",
      "vc:label": "Creator Economy"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-10022"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Revenue Sharing"
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
  "@id": "urn:ngm:class:revenue-sharing",
  "@type": "Class",
  "label": "Revenue Sharing",
  "definition": "Blockchain-enabled distribution mechanisms that automatically allocate earnings between creators, platforms, and stakeholders through smart contracts, with NFT royalties providing perpetual income streams for digital asset creators in metaverse economies.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-content-and-assets",
      "label": "Content and Assets"
    },
    {
      "@id": "urn:ngm:class:creator-economy",
      "label": "Creator Economy"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:creator-monetization",
        "label": "Creator Monetization"
      }
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:revenue-sharing:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:3ec492bf0500a7676e5fe26aa83e8c5fc4de98be9e982444f5dd36021161ece2"
  },
  "vc:resolutions": [
    {
      "raw": "[[Creator Monetization]]",
      "resolved": "urn:visionflow:linked:creator-monetization",
      "kind": "StubLink"
    },
    {
      "raw": "[[Creator Economy]]",
      "resolved": "urn:visionflow:owl:class:creator-economy",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
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
  - Blockchain-enabled distribution mechanisms that automatically allocate earnings between creators, platforms, and stakeholders through smart contracts, with NFT royalties providing perpetual income streams for digital asset creators in metaverse economies.

- ### Semantic Classification
  - owl-class:: spatial-computing:RevenueSharing
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Creator Economy]]
  - enables:: [[Creator Monetization]]

- ### Content

  - #### Platform Models
		- The Sandbox 95% creator revenue share
		- VRChat Creator Economy with Tilia payouts
		- Somnium Space $CUBE token monetization
		- Omnichain protocols for component royalties
		- Direct-to-fan NFT sales
  - #### Market Context
		- Individual creators 46% of NFT market in 2024
		- Metaverse valued at $94.32B in 2024
		- Projected $5 trillion market by 2030
		- Blockchain 26.9% of metaverse technology layer
		- Web3-native minting and royalty tools

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
