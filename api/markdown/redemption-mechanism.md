- ### Definition
  - A redemption mechanism is the process by which a token holder can exchange a stablecoin or wrapped asset back into the underlying reserve asset it represents, such as fiat currency or collateral. It is the structural counterpart of minting and is central to maintaining a stablecoin's peg: credible redeemability allows arbitrageurs to profit from deviations between market price and par value, pulling the price back to the peg. Redemption mechanisms vary from direct par redemption with the issuer to on-chain burn-and-release contracts.
  - Core related concepts: [[Stablecoin]], [[Burning]], [[Collateral]], [[Peg]], [[Minting]].

- ### Overview
  - Redemption is the mechanism that ties a token's market value to its backing. For fiat-collateralised stablecoins, an authorised participant returns tokens to the issuer and receives the equivalent fiat, with the tokens burned. For crypto-collateralised or wrapped assets, an on-chain contract burns the wrapped token and releases the locked underlying. The credibility, speed, and cost of redemption determine how tightly the peg holds under stress.

- ### Mechanisms
  - Burn-and-release: redeeming tokens are burned and the corresponding reserve is released or transferred, keeping circulating supply matched to backing.
  - Arbitrage incentive: if the token trades below par, redeemers profit by buying cheap and redeeming at par, which removes supply and lifts the price toward the peg.
  - Access tiers: some issuers restrict direct redemption to vetted institutional participants, relying on secondary-market liquidity for retail holders.
  - Proof of reserves: transparent attestation of backing assets underpins confidence that redemptions will be honoured at par.

- ### Applications
  - Fiat-backed stablecoins such as USDC and Tether, which support par redemption for authorised participants.
  - Wrapped assets where redemption releases the bridged or custodied underlying token.
  - Crypto-collateralised stablecoins where redemption interacts with collateral vaults and liquidation logic.
  - DeFi protocols that rely on credible redemption to keep pegged assets usable as settlement media.

- ### Relationships
  - subClassOf:: [[Stablecoin]]
  - partOf:: [[Stablecoin]]
  - hasPart:: [[Burning]]
  - hasPart:: [[Proof of Reserve]]
  - requires:: [[Collateral]]
  - requires:: [[Reserve]]
  - enables:: [[Peg]]
  - enables:: [[Arbitrage]]
  - contrastsWith:: [[Minting]]
  - uses:: [[Smart Contract]]
  - supports:: [[USDC]]
  - supports:: [[Tether]]
  - relatedTo:: [[Decentralized Finance]]
  - relatedTo:: [[Liquidity Pool]]
  - relatedTo:: [[Algorithmic Stablecoin]]
  - dependsOn:: [[Proof of Reserve]]

- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15