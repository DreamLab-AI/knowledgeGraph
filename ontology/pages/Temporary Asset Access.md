public:: true

# Temporary Asset Access
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0fb217dd19d5e6e1440c22a0e3578a7706f8a4889a4dbd21d2f55a73dd79bdb5",
  "@type": "Page",
  "vc:slug": "temporary-asset-access",
  "title": "Temporary Asset Access",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:digital-asset-management",
      "vc:label": "Digital Asset Management"
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
      "vc:value": "MV-10080"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Temporary Asset Access"
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
  "@id": "urn:ngm:class:temporary-asset-access",
  "@type": "Class",
  "label": "Temporary Asset Access",
  "definition": "A mechanism enabling time-limited usage rights to digital assets in the metaverse without transferring ownership, implemented through smart contracts that separate user roles from owner roles with automatic expiration.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-content-and-assets",
      "label": "Content and Assets"
    }
  ],
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  },
  "relations": {
    "bridgesTo": [
      {"@id": "urn:ngm:class:digital-asset-management", "label": "Digital Asset Management"}
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:nft-standard",
        "label": "NFT Standard"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:nft-renting",
        "label": "NFT Renting"
      },
      {
        "@id": "urn:ngm:class:digital-asset-lending",
        "label": "Digital Asset Lending"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:nft",
        "label": "NFT"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:nft-marketplace",
        "label": "NFT Marketplace"
      }
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:temporary-asset-access:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:0fb217dd19d5e6e1440c22a0e3578a7706f8a4889a4dbd21d2f55a73dd79bdb5"
  },
  "vc:resolutions": [
    {
      "raw": "[[Digital Asset Management]]",
      "resolved": "urn:visionflow:owl:class:digital-asset-management",
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
  - A mechanism enabling time-limited usage rights to digital assets in the metaverse without transferring ownership, implemented through smart contracts that separate user roles from owner roles with automatic expiration.

- ### Semantic Classification
  - owl-class:: spatial-computing:TemporaryAssetAccess
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Digital Asset Management]]
  - Implements [[NFT Renting]]
  - Implements [[Digital Asset Lending]]
  - Requires [[Smart Contract]]
  - Requires [[NFT Standard]]
  - Uses [[NFT]]
  - Related to [[NFT Marketplace]]

- ### Content

  - ## Overview
  - NFT rental markets allow owners to grant temporary usage rights to another party for a specified period under predetermined terms. Smart contracts on blockchain platforms autonomously execute and manage these rental agreements, enabling passive income for owners while providing affordable access for renters.
  - ## Technical Details
  - ### ERC-4907 Standard
		- Creates distinct "user role" separate from "owner role"
		- Enables temporary transfer of usage rights while maintaining ownership
		- Includes automatic expiration of access rights
		- Ideal for subscription or rental models
  - ### Rental Platforms
		- **reNFT**: In-game assets, virtual land, event tickets, digital clothing
		- **Double Protocol**: Cross-chain NFT rentals for Decentraland and The Sandbox
		- **LandVault**: Virtual land rental for commercial purposes
		- **Decentraland**: Native virtual landlord feature for property rentals
  - ### Use Cases
		- Virtual land rental for events or pop-up shops
		- In-game asset borrowing for specific quests
		- Digital fashion rental for virtual meetings
		- Art exhibition temporary access
  - ## Applications
  - Virtual real estate rental in metaverse platforms
  - Gaming asset lending for competitive play
  - Short-term access to premium digital collectibles
  - Event space leasing in virtual worlds
  - Advertising space rental on virtual billboards

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
