public:: true

# Secondary Market

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:secondary-market", "@type":"Page", "title":"Secondary Market", "vc:slug":"secondary-market", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:secondary-market",
  "@type":"Class",
  "label":"Secondary Market",
  "definition":"A secondary market is a venue in which existing financial assets are bought and sold among investors after their initial issuance, rather than purchased directly from the issuer. By allowing holders to exit positions and new buyers to enter, it provides liquidity, continuous price discovery, and a mechanism for valuing assets through ongoing trading. Secondary markets are essential to the functioning of capital markets because the ability to resell makes initial investment far more attractive.",
  "domain":"finance",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:finance","label":"Finance"}],
  "relations":{
    "enables":[{"@id":"urn:ngm:class:liquidity","label":"Liquidity"},{"@id":"urn:ngm:class:price-discovery","label":"Price Discovery"},{"@id":"urn:ngm:class:asset-trading","label":"Asset Trading"}],
    "supports":[{"@id":"urn:ngm:class:capital-allocation","label":"Capital Allocation"},{"@id":"urn:ngm:class:liquidity","label":"Liquidity"}],
    "uses":[{"@id":"urn:ngm:class:asset-trading","label":"Asset Trading"},{"@id":"urn:ngm:class:price-discovery","label":"Price Discovery"}],
    "requires":[{"@id":"urn:ngm:class:liquidity","label":"Liquidity"}],
    "hasPart":[{"@id":"urn:ngm:class:asset-trading","label":"Asset Trading"}],
    "relatedTo":[{"@id":"urn:ngm:class:decentralised-exchange","label":"Decentralised Exchange"},{"@id":"urn:ngm:class:interest-rate","label":"Interest Rate"},{"@id":"urn:ngm:class:capital-allocation","label":"Capital Allocation"}],
    "implements":[{"@id":"urn:ngm:class:price-discovery","label":"Price Discovery"}],
    "dependsOn":[{"@id":"urn:ngm:class:liquidity","label":"Liquidity"}],
    "contrastsWith":[{"@id":"urn:ngm:class:capital-allocation","label":"Capital Allocation"}],
    "bridgesTo":[{"@id":"urn:ngm:class:decentralised-exchange","label":"Decentralised Exchange"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- A [[Secondary Market]] is a venue where existing financial assets are traded among investors after their initial issuance.
	- It provides [[Liquidity]] and continuous [[Price Discovery]] by letting holders exit and new buyers enter.
	- Secondary markets underpin [[Finance]] because resale ability makes initial investment attractive.
- ### Overview
	- When an asset is first created it is sold in a primary market; thereafter it changes hands in the secondary market.
	- These markets give investors confidence that they can convert holdings back into cash, lowering the cost of capital for issuers.
	- Continuous trading aggregates information into prices, providing a real-time signal of an asset's value.
	- Secondary markets exist across asset classes, from equities and bonds to tokenised assets traded on decentralised venues.
- ### Key aspects
	- Liquidity provision: enabling holders to buy and sell with minimal friction.
	- Price discovery: aggregating supply and demand into observable prices.
	- Transferability: separating the act of investing from the act of exiting.
	- Market depth: the volume available at given prices, shaping execution quality.
	- Continuous valuation: ongoing trading marks positions to current market value.
- ### Mechanisms
	- Buyers and sellers submit orders that are matched on an exchange or marketplace.
	- Market makers and liquidity providers narrow spreads and absorb temporary imbalances.
	- Settlement transfers ownership and funds once a trade is agreed.
- ### Applications
	- Trading equities, bonds, and other instruments on exchanges.
	- Providing exit liquidity for early investors and issuers in [[Capital Allocation]].
	- Trading tokenised assets on a [[Decentralised Exchange]].
	- Supporting valuation and [[Asset Trading]] across the financial system.
- ### Relationships
	- subClassOf:: [[Finance]]
	- enables:: [[Liquidity]]
	- enables:: [[Price Discovery]]
	- enables:: [[Asset Trading]]
	- supports:: [[Capital Allocation]]
	- supports:: [[Liquidity]]
	- uses:: [[Asset Trading]]
	- uses:: [[Price Discovery]]
	- requires:: [[Liquidity]]
	- hasPart:: [[Asset Trading]]
	- relatedTo:: [[Decentralised Exchange]]
	- relatedTo:: [[Interest Rate]]
	- relatedTo:: [[Capital Allocation]]
	- implements:: [[Price Discovery]]
	- dependsOn:: [[Liquidity]]
	- contrastsWith:: [[Capital Allocation]]
	- bridgesTo:: [[Decentralised Exchange]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
