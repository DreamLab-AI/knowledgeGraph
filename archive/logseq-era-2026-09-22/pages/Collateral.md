public:: true

# Collateral

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:collateral", "@type":"Page", "title":"Collateral", "vc:slug":"collateral", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:collateral",
  "@type":"Class",
  "label":"Collateral",
  "definition":"Collateral is an asset pledged by a borrower to a lender as security for a loan or obligation, which the lender may seize or liquidate if the borrower defaults. In decentralised finance it typically takes the form of over-collateralised crypto assets locked in a smart contract, backing loans, synthetic assets, or stablecoin pegs. The collateral-to-debt ratio determines solvency and triggers liquidation when it falls below a protocol-defined threshold.",
  "domain":"finance",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:finance","label":"Finance"}],
  "relations":{},
  "sameAs":[],
  "quality":0.55,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-07-25T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- Collateral is an asset pledged by a borrower to a lender as security for a loan or obligation, which the lender may seize or liquidate if the borrower defaults. In decentralised finance it typically takes the form of over-collateralised crypto assets locked in a smart contract, backing loans, synthetic assets, or stablecoin pegs. The collateral-to-debt ratio determines solvency and triggers liquidation when it falls below a protocol-defined threshold.
- ### Relationships
	- subClassOf:: [[Finance]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
