public:: true

# Metaverse Commerce

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:metaverse-commerce",
  "@type": "Page",
  "title": "Metaverse Commerce",
  "vc:slug": "metaverse-commerce",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:metaverse-commerce",
  "@type": "Class",
  "label": "Metaverse Commerce",
  "definition": "Metaverse commerce is the buying, selling and trading of goods, services and experiences within immersive virtual worlds and spatial environments. It spans virtual goods, wearables and real estate, branded experiences and the digital twins of physical products, often settled with virtual currencies or tokens. Metaverse commerce extends e-commerce into embodied, social and persistent 3D spaces where avatars browse, transact and own digital assets.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:metaverse",
      "label": "Metaverse"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:virtual-economy",
        "label": "Virtual Economy"
      },
      {
        "@id": "urn:ngm:class:virtual-currency",
        "label": "Virtual Currency"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:e-commerce",
        "label": "E-Commerce"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:metaverse",
        "label": "Metaverse"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:digital-asset",
        "label": "Digital Asset"
      },
      {
        "@id": "urn:ngm:class:nft",
        "label": "NFT"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:marketplace-integration",
        "label": "Marketplace Integration"
      },
      {
        "@id": "urn:ngm:class:avatar",
        "label": "Avatar"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:marketplace",
        "label": "Marketplace"
      },
      {
        "@id": "urn:ngm:class:virtual-world",
        "label": "Virtual World"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:creator-economy",
        "label": "Creator Economy"
      },
      {
        "@id": "urn:ngm:class:virtual-event",
        "label": "Virtual Event"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:digital-asset",
        "label": "Digital Asset"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:e-commerce",
        "label": "E-Commerce"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:marketplace",
        "label": "Marketplace"
      }
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - [[Metaverse Commerce]] extends [[E-Commerce]] into immersive worlds, transacting [[Digital Asset]] and [[NFT]] items via [[Marketplace Integration]] and the [[Virtual Economy]].
- ### Overview
  - Buying, selling and trading within immersive virtual worlds.
  - Covers virtual goods, real estate, branded experiences and digital twins.
  - Often settled with virtual currencies or blockchain tokens.
- ### Key aspects
  - Avatar-centric browsing and embodied shopping.
  - Ownership and provenance of digital assets.
  - Virtual currencies, tokens and in-world payments.
  - Interoperability of goods across platforms.
- ### Applications
  - Virtual goods, wearables and avatar customisation.
  - Virtual real estate and branded spaces.
  - Digital twins of physical products for try-before-buy.
  - Creator-led storefronts and live shopping events.
- ### Relationships
  - enables:: [[Virtual Economy]]
  - enables:: [[Virtual Currency]]
  - bridgesTo:: [[E-Commerce]]
  - partOf:: [[Metaverse]]
  - uses:: [[Digital Asset]]
  - uses:: [[NFT]]
  - requires:: [[Marketplace Integration]]
  - requires:: [[Avatar]]
  - supports:: [[Marketplace]]
  - supports:: [[Virtual World]]
  - relatedTo:: [[Creator Economy]]
  - relatedTo:: [[Virtual Event]]
  - dependsOn:: [[Digital Asset]]
  - contrastsWith:: [[E-Commerce]]
  - implements:: [[Marketplace]]
- ### Provenance
  - updated:: 2026-06-15
