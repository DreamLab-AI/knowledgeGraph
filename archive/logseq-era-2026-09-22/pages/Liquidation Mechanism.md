public:: true

# Liquidation Mechanism

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:liquidation-mechanism", "@type":"Page", "title":"Liquidation Mechanism", "vc:slug":"liquidation-mechanism", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:liquidation-mechanism",
  "@type":"Class",
  "label":"Liquidation Mechanism",
  "definition":"A liquidation mechanism is the automated process by which a decentralised finance protocol seizes and sells a borrower's collateral once the value of that collateral falls below a defined threshold relative to the outstanding debt. It protects lenders and the protocol from undercollateralised positions by ensuring debt is repaid before collateral becomes insufficient. Liquidations are typically triggered by oracle price updates and executed by liquidators who are incentivised with a discount or bonus on the seized assets.",
  "domain":"blockchain",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:decentralised-finance","label":"Decentralised Finance"}],
  "relations":{
    "requires":[{"@id":"urn:ngm:class:price-oracle","label":"Price Oracle"},{"@id":"urn:ngm:class:over-collateralisation","label":"Over Collateralisation"},{"@id":"urn:ngm:class:smart-contract","label":"Smart Contract"}],
    "enables":[{"@id":"urn:ngm:class:lending-protocol","label":"Lending Protocol"},{"@id":"urn:ngm:class:risk-management","label":"Risk Management"}],
    "uses":[{"@id":"urn:ngm:class:oracle","label":"Oracle"},{"@id":"urn:ngm:class:smart-contract","label":"Smart Contract"}],
    "partOf":[{"@id":"urn:ngm:class:lending-protocol","label":"Lending Protocol"}],
    "dependsOn":[{"@id":"urn:ngm:class:price-oracle","label":"Price Oracle"}],
    "supports":[{"@id":"urn:ngm:class:stablecoin","label":"Stablecoin"},{"@id":"urn:ngm:class:liquidity","label":"Liquidity"}],
    "implements":[{"@id":"urn:ngm:class:risk-management","label":"Risk Management"}],
    "relatedTo":[{"@id":"urn:ngm:class:aave","label":"Aave"},{"@id":"urn:ngm:class:decentralised-exchange","label":"Decentralised Exchange"},{"@id":"urn:ngm:class:interest-rate","label":"Interest Rate"}],
    "contrastsWith":[{"@id":"urn:ngm:class:over-collateralisation","label":"Over Collateralisation"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- A [[Liquidation Mechanism]] is the automated process a [[Decentralised Finance]] protocol uses to sell collateral when a position becomes unsafe.
	- It is triggered when collateral falls below a threshold relative to debt, often signalled by a [[Price Oracle]].
	- Liquidators repay the debt and seize discounted collateral, protecting the [[Lending Protocol]] from loss.
- ### Overview
	- On-chain lending relies on [[Over Collateralisation]] to absorb volatility, but buffers can be exhausted when prices fall sharply.
	- The liquidation mechanism is the safety valve that restores solvency by closing risky positions before they become undercollateralised.
	- It is implemented entirely in smart contracts, so enforcement is automatic, transparent, and permissionless.
	- Third-party liquidators monitor positions and compete to execute liquidations, earning an incentive that funds the service without protocol intervention.
- ### Key aspects
	- Health factor: a continuously computed measure of how close a position is to liquidation.
	- Liquidation threshold: the collateralisation ratio at which a position becomes eligible to be closed.
	- Liquidation bonus: the discount or premium that rewards liquidators for repaying debt.
	- Oracle trigger: price feeds determine when positions cross their thresholds.
	- Partial vs full liquidation: protocols may close part or all of a position to restore safety.
- ### Mechanisms
	- Smart contracts evaluate each position against oracle prices on every relevant interaction.
	- When a position is unhealthy, anyone may call the liquidation function, repaying debt and claiming collateral.
	- Incentive design balances rapid liquidation with minimising losses to borrowers and the protocol.
- ### Applications
	- Maintaining solvency in a [[Lending Protocol]] such as [[Aave]].
	- Backing crypto-collateralised [[Stablecoin]] systems by enforcing redemption guarantees.
	- Sourcing collateral for sale through a [[Decentralised Exchange]] during liquidations.
	- Forming a core component of on-chain [[Risk Management]].
- ### Relationships
	- subClassOf:: [[Decentralised Finance]]
	- requires:: [[Price Oracle]]
	- requires:: [[Over Collateralisation]]
	- requires:: [[Smart Contract]]
	- enables:: [[Lending Protocol]]
	- enables:: [[Risk Management]]
	- uses:: [[Oracle]]
	- uses:: [[Smart Contract]]
	- partOf:: [[Lending Protocol]]
	- dependsOn:: [[Price Oracle]]
	- supports:: [[Stablecoin]]
	- supports:: [[Liquidity]]
	- implements:: [[Risk Management]]
	- relatedTo:: [[Aave]]
	- relatedTo:: [[Decentralised Exchange]]
	- relatedTo:: [[Interest Rate]]
	- contrastsWith:: [[Over Collateralisation]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
