public:: true

# Tokenized Asset
```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:tokenized-asset", "@type": "Page", "title": "Tokenized Asset", "vc:slug": "tokenized-asset", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:tokenized-asset",
  "@type": "Class",
  "label": "Tokenized Asset",
  "definition": "A tokenized asset is a representation of ownership or economic rights in a real-world or digital asset recorded as a blockchain token. The token acts as a programmable, transferable claim whose issuance, transfer, and settlement are governed by smart contracts, enabling fractional ownership, faster settlement, and broader access. Underlying assets range from securities, real estate, and commodities to art and intellectual property.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:asset-tokenisation",
      "label": "Asset Tokenization"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:tokenization",
        "label": "Tokenization"
      },
      {
        "@id": "urn:ngm:class:digital-asset",
        "label": "Digital Asset"
      },
      {
        "@id": "urn:ngm:class:security-token",
        "label": "Security Token"
      },
      {
        "@id": "urn:ngm:class:stablecoin",
        "label": "Stablecoin"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:real-world-asset",
        "label": "Real-World Asset"
      },
      {
        "@id": "urn:ngm:class:non-fungible-token",
        "label": "Non-Fungible Token"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:fractional-ownership",
        "label": "Fractional Ownership"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:asset-tokenisation",
        "label": "Asset Tokenization"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:erc-20",
        "label": "ERC-20"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:fractional-ownership",
        "label": "Fractional Ownership"
      },
      {
        "@id": "urn:ngm:class:digital-asset",
        "label": "Digital Asset"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:erc-721",
        "label": "ERC-721"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:fungible-token",
        "label": "Fungible Token"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - [[Tokenized Asset]] is defined in relation to [[Asset Tokenisation]], [[Smart Contract]], [[Real-World Asset]], [[Fractional Ownership]], building on [[Asset Tokenisation]].
  - A tokenized asset is a representation of ownership or economic rights in a real-world or digital asset recorded as a blockchain token. The token acts as a programmable, transferable claim whose issuance, transfer, and settlement are governed by smart contracts, enabling fractional ownership, faster settlement, and broader access. Underlying assets range from securities, real estate, and commodities to art and intellectual property.

- ### Overview
  - Tokenizing an asset means binding a legal or economic claim on that asset to a token whose lifecycle is enforced by smart contracts. Fungible standards (such as ERC-20) suit divisible, interchangeable claims, while non-fungible standards (such as ERC-721) suit unique items, and hybrid standards address baskets and fractions.
  - The promise is to compress settlement times, enable round-the-clock trading, lower minimum investment through fractionalisation, and make ownership programmable. Realising this depends on legal enforceability, reliable custody of the underlying asset, and compliant identity and transfer controls.

- ### Key aspects
  - Smart-contract-governed issuance, transfer, and redemption of ownership claims.
  - Fractional ownership lowering investment minimums and improving liquidity.
  - Compliance overlays — identity, accreditation, and transfer restrictions — for regulated assets.

- ### Applications
  - Tokenized securities, funds, and money-market instruments for faster settlement.
  - Real-estate and commodity fractionalisation for broader investor access.
  - Tokenized intellectual property, art, and collectibles.

- ### Relationships
  - subClassOf:: [[Asset Tokenisation]]
  - relatedTo:: [[Tokenization]]
  - relatedTo:: [[Digital Asset]]
  - relatedTo:: [[Security Token]]
  - relatedTo:: [[Stablecoin]]
  - bridgesTo:: [[Real-World Asset]]
  - bridgesTo:: [[Non-Fungible Token]]
  - enables:: [[Fractional Ownership]]
  - partOf:: [[Asset Tokenisation]]
  - uses:: [[Smart Contract]]
  - uses:: [[ERC-20]]
  - dependsOn:: [[Smart Contract]]
  - dependsOn:: [[Blockchain]]
  - supports:: [[Fractional Ownership]]
  - supports:: [[Digital Asset]]
  - implements:: [[ERC-721]]
  - requires:: [[Blockchain]]
  - contrastsWith:: [[Fungible Token]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
