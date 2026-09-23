
A Dutch auction is a descending-price auction mechanism in which the offered price starts high and falls over time until a bidder accepts, with the first acceptance determining the clearing price. In blockchain and token markets it is implemented in smart contracts to distribute tokens or NFTs, set initial offering prices, and liquidate collateral, with the falling-price schedule encoded on-chain. Variants include single-item and multi-unit uniform-price formats used for fairer price discovery.

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
- ### Provenance

