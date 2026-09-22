public:: true

# Self-Liquidation

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:self-liquidation", "@type":"Page", "title":"Self-Liquidation", "vc:slug":"self-liquidation", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:self-liquidation",
  "@type":"Class",
  "label":"Self-Liquidation",
  "definition":"Self-liquidation is a DeFi technique in which a borrower proactively closes their own under-collateralised or at-risk lending position — often using a flash loan to repay debt and withdraw collateral atomically — rather than waiting for a third-party liquidator to seize it at a penalty. It lets borrowers capture the collateral value that would otherwise be lost to liquidation fees. It is used on lending protocols such as Aave where liquidation penalties make self-initiated closure economically preferable.",
  "domain":"blockchain",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:flash-loan","label":"Flash Loan"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:flash-loan","label":"Flash Loan"}]
  },
  "sameAs":[],
  "quality":0.6,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-07-25T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- Self-liquidation is a DeFi technique in which a borrower proactively closes their own under-collateralised or at-risk lending position — often using a flash loan to repay debt and withdraw collateral atomically — rather than waiting for a third-party liquidator to seize it at a penalty. It lets borrowers capture the collateral value that would otherwise be lost to liquidation fees. It is used on lending protocols such as Aave where liquidation penalties make self-initiated closure economically preferable.
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
