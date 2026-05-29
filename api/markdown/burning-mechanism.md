- ### Definition
  A Burning Mechanism is an economic design pattern in tokenised blockchain systems whereby tokens are permanently removed from circulating supply by sending them to an unspendable address (a null or black-hole address) or by protocol-enforced destruction, permanently contracting the total token supply. Token burning is deployed as a deflationary monetary policy tool to counteract inflationary issuance, to create token scarcity as a value-accrual mechanism, to implement fee markets (as in Ethereum's EIP-1559 base fee burn), and to regulate supply in algorithmic stablecoins and tokenomics models. The economic effect depends critically on the rate and predictability of burning relative to issuance.

- ### Semantic Classification
  - owl-class:: blockchain:BurningMechanism
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[TokenEconomicsDomain]]
  - implemented-in-layer:: [[EconomicLayer]]

- ### Relationships
  - is-subclass-of:: [[Blockchain Entity]], [[Economic Mechanism]]
  - requires:: [[Blockchain Transaction]], [[Smart Contract]]
  - enables:: [[Deflationary Token]], [[Inflation Control]], [[Tokenomics]]
  - dependsOn:: [[EIP-1559]], [[Token Economics]]
  - hasPart:: [[Base Fee]]
  - relatedTo:: [[Fee Market]], [[Market Capitalization]], [[Blockchain Economics]], [[Virtual Economy]]
  - contrastsWith:: [[Block Reward]], [[Inflationary Token]]
  - partOf:: [[Tokenomics Governance]]

- ### Content
  Token burning was popularised in blockchain ecosystems as a mechanism for creating programmatic scarcity and demonstrating committed value destruction. The earliest prominent implementations appeared in the Bitcoin ecosystem (Counterparty's XCP token used proof-of-burn for issuance) and in exchange token models (Binance's BNB quarterly burns). The mechanism gained its most prominent institutional form through Ethereum's EIP-1559 (London hard fork, August 2021), which made base fee burning a core protocol feature rather than an optional tokenomics strategy.

  In the EIP-1559 model, every transaction burns an algorithmically determined base fee proportional to network congestion. During periods of high demand — such as NFT minting events or DeFi protocol launches — burn rates can exceed new ETH issuance from staking rewards, making ETH net-deflationary on a daily basis. This "ultrasound money" narrative positioned Ethereum's monetary policy as more conservative than Bitcoin's fixed supply schedule in demand-driven scenarios, despite Ethereum having no hard supply cap.

  Beyond fee burning, protocols implement burns for diverse purposes: buy-and-burn programs use protocol revenue to purchase tokens on open markets and destroy them, directly linking protocol usage to token value accrual; algorithmic stablecoin mechanisms burn the reserve token when minting the stable asset (and vice versa) to maintain peg; NFT platforms burn tokens to unlock features or create provable scarcity in digital collectible series; and governance token programmes burn tokens proportional to voting activity as a sybil-resistance mechanism.

  The economic critique of burning mechanisms centres on the assumption that destroying supply directly creates value. Burn mechanisms only accrue value to token holders if the burned tokens represent a genuine claim on future cash flows or utility — otherwise the scarcity narrative is reflexive rather than fundamental. In virtual economies and metaverse contexts, burning mechanisms serve as sinks to prevent unchecked inflation of in-game currencies, where failure to balance burn rates against earning rates leads to hyperinflationary collapse of the virtual economy.

  <!-- Merged from Burning Mechanism.md: Blockchain, Tokenomics -->

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z