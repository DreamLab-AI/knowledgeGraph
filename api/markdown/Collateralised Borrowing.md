public:: true

# Collateralised Borrowing

```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:collateralised-borrowing", "@type": "Page", "title": "Collateralised Borrowing", "vc:slug": "collateralised-borrowing", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:collateralised-borrowing",
  "@type": "Class",
  "label": "Collateralised Borrowing",
  "definition": "Collateralised borrowing is a lending mechanism in which a borrower locks digital assets as collateral in a smart contract in order to draw a loan, typically in a different asset, without a credit check or intermediary. The collateral is held against default risk and may be liquidated automatically if its value falls below a protocol-defined threshold relative to the loan. It is a core primitive of decentralised finance protocols such as Aave and Compound.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:decentralised-finance",
      "label": "Decentralised Finance"
    }
  ],
  "relations": {
    "uses": [],
    "requires": [],
    "enables": [],
    "partOf": [
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.55,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-07-25T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
	- Collateralised borrowing is a lending mechanism in which a borrower locks digital assets as collateral in a smart contract in order to draw a loan, typically in a different asset, without a credit check or intermediary. The collateral is held against default risk and may be liquidated automatically if its value falls below a protocol-defined threshold relative to the loan. It is a core primitive of decentralised finance protocols such as Aave and Compound.
- ### Relationships
	- partOf:: [[Decentralised Finance]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
