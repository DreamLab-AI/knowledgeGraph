public:: true

# Over Collateralisation

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:over-collateralisation", "@type":"Page", "title":"Over Collateralisation", "vc:slug":"over-collateralisation", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:over-collateralisation",
  "@type":"Class",
  "label":"Over Collateralisation",
  "definition":"Over-collateralisation is a risk-management practice in which the value of assets pledged as collateral exceeds the value of the obligation they secure. In decentralised finance it is the standard requirement for permissionless lending and for backing stablecoins, where borrowers must deposit more value than they draw to absorb price volatility. The surplus margin protects lenders and protocols against default by ensuring that collateral can be liquidated for at least the amount owed even when prices move adversely.",
  "domain":"blockchain",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:decentralised-finance","label":"Decentralised Finance"}],
  "relations":{
    "requires":[{"@id":"urn:ngm:class:price-oracle","label":"Price Oracle"},{"@id":"urn:ngm:class:smart-contract","label":"Smart Contract"}],
    "enables":[{"@id":"urn:ngm:class:lending-protocol","label":"Lending Protocol"},{"@id":"urn:ngm:class:stablecoin","label":"Stablecoin"},{"@id":"urn:ngm:class:liquidation-mechanism","label":"Liquidation Mechanism"}],
    "partOf":[{"@id":"urn:ngm:class:risk-management","label":"Risk Management"}],
    "uses":[{"@id":"urn:ngm:class:oracle","label":"Oracle"}],
    "supports":[{"@id":"urn:ngm:class:yield-farming","label":"Yield Farming"},{"@id":"urn:ngm:class:decentralised-exchange","label":"Decentralised Exchange"}],
    "dependsOn":[{"@id":"urn:ngm:class:price-oracle","label":"Price Oracle"}],
    "relatedTo":[{"@id":"urn:ngm:class:aave","label":"Aave"},{"@id":"urn:ngm:class:interest-rate","label":"Interest Rate"},{"@id":"urn:ngm:class:liquidity","label":"Liquidity"}],
    "implements":[{"@id":"urn:ngm:class:risk-management","label":"Risk Management"}],
    "contrastsWith":[{"@id":"urn:ngm:class:interest-rate","label":"Interest Rate"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- [[Over Collateralisation]] is the practice of pledging collateral worth more than the obligation it secures, central to [[Decentralised Finance]].
	- It is the standard mechanism for permissionless borrowing and for backing crypto-collateralised [[Stablecoin]] designs.
	- The surplus margin protects [[Lending Protocol]] participants against adverse price moves and default.
- ### Overview
	- In trustless on-chain systems there is no credit scoring or legal recourse, so protocols compensate by demanding excess collateral.
	- A borrower deposits assets and may draw a fraction of their value, leaving a buffer that absorbs volatility before the position becomes unsafe.
	- The required ratio, often expressed as a loan-to-value or collateralisation ratio, is enforced automatically by smart contracts and updated against external price feeds.
	- If collateral value falls toward the debt, the position is liquidated to recover funds, preserving solvency for the wider system.
- ### Key aspects
	- Collateral buffer: pledged value deliberately exceeds borrowed value to cushion price swings.
	- Collateralisation ratio: a parameter defining how much can be borrowed against deposited assets.
	- Liquidation threshold: the point at which a falling position is sold to protect the protocol.
	- Oracle dependence: accurate, timely price data is essential to evaluate positions correctly.
	- Capital inefficiency: locking surplus value is the cost of trustless, permissionless credit.
- ### Mechanisms
	- Smart contracts continuously evaluate each position's health using oracle-supplied prices.
	- When a position breaches its threshold, a liquidation mechanism auctions or seizes collateral to repay debt.
	- Risk parameters are governed and tuned to balance capital efficiency against systemic safety.
- ### Applications
	- Backing decentralised [[Stablecoin]] systems with crypto collateral.
	- Enabling permissionless borrowing in a [[Lending Protocol]] such as [[Aave]].
	- Supporting leveraged strategies, [[Yield Farming]], and trading on a [[Decentralised Exchange]].
	- Providing a trustless alternative to credit-based lending in [[Risk Management]].
- ### Relationships
	- subClassOf:: [[Decentralised Finance]]
	- requires:: [[Price Oracle]]
	- requires:: [[Smart Contract]]
	- enables:: [[Lending Protocol]]
	- enables:: [[Stablecoin]]
	- enables:: [[Liquidation Mechanism]]
	- partOf:: [[Risk Management]]
	- uses:: [[Oracle]]
	- supports:: [[Yield Farming]]
	- supports:: [[Decentralised Exchange]]
	- dependsOn:: [[Price Oracle]]
	- relatedTo:: [[Aave]]
	- relatedTo:: [[Interest Rate]]
	- relatedTo:: [[Liquidity]]
	- implements:: [[Risk Management]]
	- contrastsWith:: [[Interest Rate]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
