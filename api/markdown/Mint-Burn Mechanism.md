public:: true

# Mint-Burn Mechanism
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:15587f7e7234236ffb95b33b4d26369db800d58dafd580ceb4c930edc37ae0ae",
  "@type": "Page",
  "vc:slug": "mint-burn-mechanism",
  "title": "Mint-Burn Mechanism",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:tokenomics", "vc:label": "Tokenomics"},
    {"@id": "urn:visionflow:linked:smart-contract", "vc:label": "Smart Contract"},
    {"@id": "urn:visionflow:linked:wrapped-token", "vc:label": "Wrapped Token"},
    {"@id": "urn:visionflow:linked:synthetic-asset", "vc:label": "Synthetic Asset"},
    {"@id": "urn:visionflow:linked:peg", "vc:label": "Peg"}
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {"@id": "did:nostr:ontology-mesh"},
  "prov:generatedAtTime": {"@value": "2026-08-06T00:00:00Z", "@type": "xsd:dateTime"}
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:mint-burn-mechanism",
  "@type": "Class",
  "label": "Mint-Burn Mechanism",
  "definition": "A token supply-management pattern in which new units are created (minted) when value enters a system and permanently destroyed (burned) when it leaves, keeping circulating supply in one-to-one correspondence with the assets, collateral, or claims backing it. Implemented as privileged mint and burn functions in a token's smart contract, the pattern underlies fiat-backed and algorithmic stablecoins, wrapped tokens that represent assets locked on another chain, synthetic assets minted against collateral, and cross-chain bridges that burn on the source chain and mint on the destination. Its integrity depends entirely on access control and honest accounting of the backing: compromised mint authority or unbacked minting is a recurring cause of catastrophic protocol failures.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": {"@id": "urn:ngm:class:tokenomics", "label": "Tokenomics"},
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:stable-coins", "label": "Stablecoins"},
      {"@id": "urn:ngm:class:synthetic-asset", "label": "Synthetic Asset"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:wrapped-token", "label": "Wrapped Token"},
      {"@id": "urn:ngm:class:peg", "label": "Peg"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:token-standard", "label": "Token Standard"},
      {"@id": "urn:ngm:class:token-bridge", "label": "Token Bridge"},
      {"@id": "urn:ngm:class:collateral", "label": "Collateral"}
    ]
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
  }
}
```

- ### Definition
  - "A token supply-management pattern in which new units are created (minted) when value enters a system and permanently destroyed (burned) when it leaves, keeping circulating supply in one-to-one correspondence with the assets, collateral, or claims backing it. Implemented as privileged mint and burn functions in a token's smart contract, the pattern underlies fiat-backed and algorithmic stablecoins, wrapped tokens that represent assets locked on another chain, synthetic assets minted against collateral, and cross-chain bridges that burn on the source chain and mint on the destination. Its integrity depends entirely on access control and honest accounting of the backing: compromised mint authority or unbacked minting is a recurring cause of catastrophic protocol failures."
  
- ### Semantic Classification
  - owl-class:: blockchain:MintBurnMechanism
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Tokenomics]]
  - part-of:: [[Stable Coins]]
  - uses:: [[Smart Contract]]
  - enables:: [[Wrapped Token]]

- ### Content

  ## Definition

  A **mint-burn mechanism** is the elastic-supply counterpart to a fixed-supply token. Where Bitcoin's issuance is hard-coded, tokens that represent something else — a dollar, an ounce of gold, an asset locked on another chain — must expand and contract their supply as backing flows in and out. Minting creates new units against a verified deposit; burning irreversibly destroys units (typically by sending them to an unspendable address or calling a `burn` function that decrements total supply) when the holder redeems the underlying. When the mechanism works, circulating supply is an exact on-chain ledger of off-chain or cross-chain claims.

  The pattern's canonical uses map directly onto this graph's referencing pages. Fiat-backed [[Stable Coins]] such as USDC mint when customers wire dollars to the issuer and burn on redemption, making supply an audit trail of reserves; algorithmic designs instead mint and burn against a volatile counterpart token to defend the [[Peg]] — the design whose reflexive failure mode was demonstrated at scale by Terra/UST's collapse in May 2022. A [[Wrapped Token]] like WBTC mints on Ethereum only when custodians attest that native BTC is locked, and burns when it is released. [[Synthetic Asset]] protocols mint tokens tracking equities or commodities against over-posted [[Collateral]], burning them to close positions. Lock-and-mint and burn-and-mint are likewise the two fundamental [[Token Bridge]] architectures for moving assets between chains.

  Everything therefore rests on who may call `mint`. The function is guarded by access control — an owner key, a multisig, a bridge validator set, or protocol logic — and that authority is the system's central point of failure. Bridge compromises such as Wormhole (2022, ~$320m) were precisely unauthorised mints: attackers forged the attestation that backing existed and the contract obligingly created unbacked supply. Sound implementations pair strict authorisation with transparent proof-of-reserve accounting so that anyone can verify supply equals backing.

  ## Technical Details

  - **Implementation**: ERC-20 extensions (for example OpenZeppelin's `ERC20Mintable`/`ERC20Burnable`) expose `mint(to, amount)` and `burn(amount)`; `Transfer` events from and to the zero address record issuance and destruction on-chain, and `totalSupply` tracks the net.
  - **Access-control patterns**: single-owner (custodial issuers), role-based (`MINTER_ROLE`), multisig or DAO-governed minting, and algorithmic minting triggered purely by contract logic (CDP-style vaults in MakerDAO).
  - **Burn beyond redemption**: the same primitive serves deflationary tokenomics — fee burning (Ethereum's EIP-1559 base fee), buy-back-and-burn programmes (BNB), and supply-adjustment auctions — where destruction is a value-accrual policy rather than a redemption record.
  - **Failure modes**: compromised mint keys, forged bridge attestations, oracle manipulation of collateral values, and reflexive death spirals in under-collateralised algorithmic designs.

- ### Provenance
  - sources::
  - migration-date:: 2026-08-06T00:00:00Z
