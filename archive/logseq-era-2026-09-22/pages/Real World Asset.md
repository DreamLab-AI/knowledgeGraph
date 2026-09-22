public:: true

# Real World Asset

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:real-world-asset", "@type":"Page", "title":"Real World Asset", "vc:slug":"real-world-asset", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:real-world-asset",
  "@type": "Class",
  "label": "Real World Asset",
  "definition": "A real-world asset (RWA) is a tangible or off-chain financial asset, such as real estate, commodities, invoices, bonds or equities, whose ownership or economic rights are represented on a blockchain as a token. Tokenisation links the on-chain representation to legal claims and custody arrangements in the physical or traditional financial world. RWAs bridge decentralised finance with regulated, conventional asset markets.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:digital-asset",
      "label": "Digital Asset"
    }
  ],
  "relations": {
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:de-fi",
        "label": "DeFi"
      },
      {
        "@id": "urn:ngm:class:asset-management",
        "label": "Asset Management"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:stablecoin",
        "label": "Stablecoin"
      },
      {
        "@id": "urn:ngm:class:cryptocurrency",
        "label": "Cryptocurrency"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:tokenization",
        "label": "Tokenization"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:asset-tokenisation",
        "label": "Asset Tokenization"
      },
      {
        "@id": "urn:ngm:class:real-world-asset-tokenisation",
        "label": "Real World Asset Tokenization"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:fractional-ownership",
        "label": "Fractional Ownership"
      },
      {
        "@id": "urn:ngm:class:liquidity-pool",
        "label": "Liquidity Pool"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:custody",
        "label": "Custody"
      },
      {
        "@id": "urn:ngm:class:identity-verification",
        "label": "Identity Verification"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:settlement",
        "label": "Settlement"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:cryptocurrency",
        "label": "Cryptocurrency"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:securitization",
        "label": "Securitization"
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
	- A [[Real World Asset]] is a tangible or off-chain financial asset represented on-chain as a token whose value derives from legal claims in the physical or traditional financial world.
	- It is a specialised [[Digital Asset]] created through [[Tokenization]] and governed by [[Smart Contract]] logic.
	- RWAs bridge [[DeFi]] with regulated markets and enable [[Fractional Ownership]].
- ### Overview
	- Real-world assets include property, government and corporate bonds, private credit, commodities such as gold, carbon credits and trade-finance receivables.
	- Tokenisation issues blockchain tokens that legally or economically reference the underlying asset, typically backed by an off-chain custodian, special-purpose vehicle or registered trustee.
	- The on-chain token can then trade, settle and be used as collateral within decentralised protocols while the legal claim is enforced through conventional contracts.
	- RWAs are a leading institutional use case for blockchain because they extend liquidity, transparency and programmability to traditionally illiquid markets.
- ### Key aspects
	- Legal wrapper: the contractual structure binding the token to the underlying asset and jurisdictional rights.
	- Custody and attestation: trusted parties or oracles attesting that the off-chain asset exists and is held.
	- Compliance: identity verification and transfer restrictions to meet securities regulation.
	- Valuation and oracles: price feeds linking on-chain value to off-chain markets.
- ### Applications
	- Tokenised treasury bills and money-market funds.
	- On-chain real estate and fractional property investment.
	- Private credit and invoice financing.
	- Collateral for decentralised lending protocols.
- ### Relationships
	- bridgesTo:: [[DeFi]]
	- bridgesTo:: [[Asset Management]]
	- relatedTo:: [[Stablecoin]]
	- relatedTo:: [[Cryptocurrency]]
	- uses:: [[Tokenization]]
	- uses:: [[Smart Contract]]
	- implements:: [[Asset Tokenisation]]
	- implements:: [[Real World Asset Tokenization]]
	- enables:: [[Fractional Ownership]]
	- enables:: [[Liquidity Pool]]
	- requires:: [[Custody]]
	- requires:: [[Identity Verification]]
	- dependsOn:: [[Settlement]]
	- contrastsWith:: [[Cryptocurrency]]
	- supports:: [[Securitization]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
