public:: true

# Dutch Auction

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:dutch-auction", "@type":"Page", "title":"Dutch Auction", "vc:slug":"dutch-auction", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:dutch-auction",
  "@type":"Class",
  "label":"Dutch Auction",
  "definition":"A Dutch auction is a descending-price auction mechanism in which the offered price starts high and falls over time until a bidder accepts, with the first acceptance determining the clearing price. In blockchain and token markets it is implemented in smart contracts to distribute tokens or NFTs, set initial offering prices, and liquidate collateral, with the falling-price schedule encoded on-chain. Variants include single-item and multi-unit uniform-price formats used for fairer price discovery.",
  "domain":"blockchain",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:auction-mechanism","label":"Auction Mechanism"}],
  "relations":{
    "uses":[{"@id":"urn:ngm:class:smart-contract","label":"Smart Contract"}],
    "hasPart":[{"@id":"urn:ngm:class:price-discovery","label":"Price Discovery"}],
    "partOf":[{"@id":"urn:ngm:class:auction-mechanism","label":"Auction Mechanism"}],
    "enables":[{"@id":"urn:ngm:class:price-discovery","label":"Price Discovery"}],
    "implements":[{"@id":"urn:ngm:class:auction-mechanism","label":"Auction Mechanism"}],
    "supports":[{"@id":"urn:ngm:class:initial-coin-offering","label":"Initial Coin Offering"},{"@id":"urn:ngm:class:nft-marketplace","label":"NFT Marketplace"}],
    "requires":[{"@id":"urn:ngm:class:smart-contract","label":"Smart Contract"}],
    "relatedTo":[{"@id":"urn:ngm:class:decentralized-exchange","label":"Decentralized Exchange"},{"@id":"urn:ngm:class:price-discovery","label":"Price Discovery"},{"@id":"urn:ngm:class:nft-marketplace","label":"NFT Marketplace"}],
    "bridgesTo":[{"@id":"urn:ngm:class:decentralized-finance","label":"Decentralized Finance"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- A [[Dutch Auction]] is a descending-price [[Auction Mechanism]]: the price starts high and falls until a bidder accepts, fixing the clearing price. On-chain it is realised in a [[Smart Contract]] that encodes the falling-price schedule.
- It is widely used for token distribution, [[NFT Marketplace]] sales and collateral liquidation in [[Decentralized Finance]].
- ### Overview
- Named after the flower auctions of the Netherlands, the Dutch format inverts the familiar ascending English auction. Demand is revealed by the moment of acceptance rather than by competing higher bids.
- In token markets, Dutch auctions aim for fairer [[Price Discovery]] by letting the market set the price through the decline curve, reducing the advantage of gas-priority sniping seen in fixed-price sales.
- Multi-unit variants clear all winners at a single uniform price, which improves perceived fairness and is common in liquidity-bootstrapping and offering designs.
- ### Mechanisms
- Price schedule: a deterministic decay function lowers the offer over blocks or time.
- Acceptance: the first qualifying bid (or batch) executes the trade in the smart contract.
- Uniform clearing: multi-unit auctions settle all fills at the last accepted price.
- Liquidation: lending protocols auction seized collateral with a descending price to find buyers quickly.
- ### Applications
- Initial token offerings and fair launches seeking transparent price discovery.
- NFT drops that avoid gas wars by letting price fall to demand.
- Collateral liquidation engines in lending markets.
- Treasury and DAO asset sales requiring auditable on-chain pricing.
- ### Relationships
- uses:: [[Smart Contract]]
- hasPart:: [[Price Discovery]]
- partOf:: [[Auction Mechanism]]
- enables:: [[Price Discovery]]
- implements:: [[Auction Mechanism]]
- supports:: [[Initial Coin Offering]]
- supports:: [[NFT Marketplace]]
- requires:: [[Smart Contract]]
- relatedTo:: [[Decentralized Exchange]]
- relatedTo:: [[Price Discovery]]
- relatedTo:: [[NFT Marketplace]]
- bridgesTo:: [[Decentralized Finance]]
- ### Provenance
- updated:: 2026-06-15
