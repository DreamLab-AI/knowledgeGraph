public:: true

# erc-20
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:845516ec99f3fcde192ba507bb82cc802ebdf343f5aa5a3f4bb314e21467aace",
  "@type": "Page",
  "vc:slug": "erc-20",
  "title": "erc-20",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:erc-20",
  "@type": "Class",
  "label": "ERC-20",
  "definition": "ERC-20 is the Ethereum Request for Comments token standard that defines a mandatory six-function interface — totalSupply, balanceOf, transfer, transferFrom, approve, and allowance — plus optional name, symbol, and decimals metadata, enabling any conformant fungible token to interoperate seamlessly with wallets, decentralised exchanges, and smart-contract protocols without bespoke integration. Proposed by Fabian Vogelsteller and Vitalik Buterin in November 2015 and formalised as Ethereum Improvement Proposal 20 (EIP-20), it became the foundational primitive of the DeFi ecosystem and the predominant format for utility tokens, governance tokens, stablecoins, and wrapped assets. The standard defines a delegated-transfer pattern via approve and transferFrom that allows smart contracts to spend tokens on a holder's behalf, and it underpins the liquidity infrastructure of all major decentralised exchanges, lending protocols, and yield-aggregators on EVM-compatible networks.",
  "domain": "blockchain",
  "maturity": "mature",
  "subClassOf": [
    {"@id": "urn:ngm:class:token-standard", "label": "Token Standard"}
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:fungible-token", "label": "Fungible Token"},
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:ethereum-virtual-machine", "label": "Ethereum Virtual Machine"},
      {"@id": "urn:ngm:class:solidity", "label": "Solidity"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:decentralised-finance", "label": "Decentralised Finance"},
      {"@id": "urn:ngm:class:decentralised-exchange", "label": "Decentralised Exchange"},
      {"@id": "urn:ngm:class:stablecoin", "label": "Stablecoin"},
      {"@id": "urn:ngm:class:liquidity-pool", "label": "Liquidity Pool"},
      {"@id": "urn:ngm:class:governance-token", "label": "Governance Token"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:ethereum-improvement-proposal", "label": "Ethereum Improvement Proposal"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:ethereum", "label": "Ethereum"},
      {"@id": "urn:ngm:class:evm-compatible-network", "label": "EVM-Compatible Network"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:token-composability", "label": "Token Composability"},
      {"@id": "urn:ngm:class:automated-market-maker", "label": "Automated Market Maker"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:ethereum-foundation", "label": "Ethereum Foundation"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:erc-721", "label": "ERC-721"},
      {"@id": "urn:ngm:class:erc-1155", "label": "ERC-1155"},
      {"@id": "urn:ngm:class:erc-777", "label": "ERC-777"},
      {"@id": "urn:ngm:class:spl-token", "label": "SPL Token"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:erc-2612", "label": "ERC-2612"},
      {"@id": "urn:ngm:class:wrapped-token", "label": "Wrapped Token"},
      {"@id": "urn:ngm:class:token-approval", "label": "Token Approval"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:on-chain-governance", "label": "On-Chain Governance"},
      {"@id": "urn:ngm:class:tokenisation", "label": "Tokenisation"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:eip-20", "label": "EIP-20"}
  ],
  "quality": 0.72,
  "qualityScore": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - ERC-20 is the [[Ethereum]] Request for Comments standard that specifies the mandatory six-function interface — totalSupply, balanceOf, transfer, transferFrom, approve, and allowance — enabling any conformant [[Fungible Token]] to interoperate with wallets, [[Decentralised Exchange]] platforms, and [[Smart Contract]] protocols without bespoke integration. Originally proposed by Fabian Vogelsteller and Vitalik Buterin in November 2015 as [[Ethereum Improvement Proposal]] 20 (EIP-20), it formalised the behaviour of fungible [[Token Standard]] contracts on the [[Ethereum Virtual Machine]], becoming the essential primitive of the [[Decentralised Finance]] ecosystem and the dominant format for [[Stablecoin]], utility tokens, and [[Governance Token]] contracts.

- ### Overview
  - ERC-20 solved a critical interoperability problem in the early Ethereum ecosystem: before its adoption, every token contract was idiosyncratic, requiring wallets and exchanges to write custom integration code for each asset. By mandating a minimal common interface, ERC-20 made tokens composable by default — any protocol that understands the standard can interact with any compliant token without advance knowledge of its internals.
  - The standard was community-driven, emerging from the Ethereum GitHub repository before the formal EIP process existed. Its simplicity — six mandatory functions and three optional metadata fields — proved to be a design strength, lowering the barrier to deployment and enabling rapid ecosystem growth through the 2017 ICO boom and the 2020–2021 DeFi expansion.
  - ERC-20 is now considered a mature, stable standard. All major EVM-compatible networks — including [[Polygon]], [[BNB Chain]], [[Avalanche]], and [[Arbitrum]] — natively support ERC-20 contracts, meaning the same token code can be deployed across chains with minimal modification.

- ### Key Components
  - #### Mandatory Functions
    - **totalSupply()** — returns the total number of tokens in circulation, enabling protocols to calculate ratios, limits, and market metrics.
    - **balanceOf(address)** — queries the token balance held by a given address; the fundamental read operation for any wallet or protocol.
    - **transfer(address to, uint256 value)** — moves tokens directly from the caller's account to the recipient; the primary payment primitive.
    - **transferFrom(address from, address to, uint256 value)** — moves tokens on behalf of a third party; requires prior authorisation via approve; used by [[Decentralised Exchange]] routers and [[Automated Market Maker]] contracts.
    - **approve(address spender, uint256 value)** — grants a [[Smart Contract]] (spender) the right to withdraw up to a specified number of tokens from the caller's account; the foundation of the [[Token Approval]] mechanism.
    - **allowance(address owner, address spender)** — reads the remaining amount a spender is approved to withdraw on behalf of an owner; prevents over-spending.
  - #### Optional Metadata Functions
    - **name()** — human-readable token name (e.g. "USD Coin").
    - **symbol()** — short ticker symbol (e.g. "USDC"); universally adopted despite being optional.
    - **decimals()** — the number of decimal places used for display (typically 18 for ETH-pegged tokens, 6 for stablecoins like USDC and USDT).
  - #### Events
    - **Transfer(address indexed from, address indexed to, uint256 value)** — emitted on every token movement; enables off-chain indexers and block explorers to track token flows.
    - **Approval(address indexed owner, address indexed spender, uint256 value)** — emitted when an allowance is set or changed; critical for [[Token Approval]] auditing.

- ### Mechanisms
  - #### Delegated Transfer Pattern
    - The approve + transferFrom pattern allows [[Smart Contract]] protocols to act as spenders on behalf of users. A user first calls approve on the token contract granting the protocol a spending allowance; the protocol then calls transferFrom when it needs to pull funds. This is the core mechanism underlying [[Decentralised Exchange]] swaps, [[Automated Market Maker]] deposit flows, lending protocol repayments, and yield-aggregator strategies.
  - #### Approval Vulnerability
    - A known race condition exists when changing a non-zero allowance to a different non-zero value. An attacker monitoring the [[Mempool]] can front-run the approval change, spending the old allowance before the new transaction confirms and then spending the new allowance too. The standard mitigation is to set allowance to zero before setting a new value, or to use the increaseAllowance / decreaseAllowance extension functions introduced by OpenZeppelin. [[ERC-2612]] (permit) eliminates the on-chain approval transaction entirely by using EIP-712 off-chain signatures, reducing gas costs and removing the race condition.
  - #### EVM Execution
    - ERC-20 contracts compile to [[Ethereum Virtual Machine]] bytecode and are deployed at a unique contract address. State (balances, allowances) is stored in the EVM's persistent key-value storage. Function calls are encoded as [[ABI]] calldata and dispatched by the EVM's function selector mechanism. This architecture means ERC-20 tokens are fully composable with any other [[Smart Contract]] on the same network.

- ### Applications and Use Cases
  - #### Stablecoins
    - The majority of major stablecoins — including USDC (Circle), USDT (Tether), and DAI (MakerDAO) — are implemented as ERC-20 tokens. Their ERC-20 compliance means they are immediately usable across the entire [[Decentralised Finance]] stack: [[Decentralised Exchange]] pools, lending protocols such as Aave and Compound, and yield-aggregators such as Yearn Finance.
  - #### Governance Tokens
    - [[Governance Token]] contracts for major protocols — UNI (Uniswap), COMP (Compound), AAVE (Aave), CRV (Curve) — are ERC-20 tokens. Token holders exercise [[On-Chain Governance]] voting rights in proportion to their balances, with the totalSupply function providing the denominator for quorum calculations.
  - #### Liquidity Provider Tokens
    - [[Automated Market Maker]] protocols such as Uniswap v2 and Curve issue ERC-20 LP tokens representing a depositor's proportional share of a [[Liquidity Pool]]. These LP tokens can themselves be staked, borrowed against, or deposited into yield-optimiser vaults, demonstrating the composability enabled by a common standard.
  - #### Wrapped Assets
    - [[Wrapped Token]] contracts like WBTC (Wrapped Bitcoin) and WETH (Wrapped Ether) represent foreign or native assets as ERC-20 tokens, making them compatible with DeFi protocols that expect the standard interface. WETH in particular is ubiquitous because native ETH does not implement ERC-20 (it predates the standard).
  - #### Utility and Access Tokens
    - ERC-20 tokens are used as access credentials, protocol fee discounts, platform currencies, and incentive rewards across web3 applications. The [[Tokenisation]] of real-world assets (RWA) — including tokenised US Treasuries and tokenised money-market funds — increasingly uses the ERC-20 interface on regulated or permissioned EVM chains.
  - #### Cross-Chain Bridges
    - [[EVM-Compatible Network]] bridges lock ERC-20 tokens on the source chain and mint synthetic representations on the destination chain, also as ERC-20 tokens. This mechanism underpins the liquidity interconnection between Ethereum mainnet and Layer 2 networks such as [[Arbitrum]], Optimism, and [[Polygon]].

- ### Design Rationale and Limitations
  - #### Intentional Minimalism
    - The ERC-20 designers chose the smallest possible mandatory interface, deferring richer behaviour (hooks, batch transfers, permit-style approvals) to extension standards. This decision maximised initial adoption by keeping implementation effort low, but it also meant that later usage patterns — particularly DeFi composability at scale — exposed limitations that required retrofitting via [[ERC-2612]], [[ERC-777]], and [[ERC-4626]].
  - #### Lack of Receive Notification
    - ERC-20's transfer function does not notify the recipient contract. If tokens are sent to a [[Smart Contract]] address that does not actively monitor incoming transfers, those tokens are irrecoverably lost. This contrasts with [[ERC-777]], which introduced recipient hook callbacks, and with ETH's native value-transfer mechanism, which triggers the recipient's fallback or receive function. The loss-of-tokens-on-contract-transfer problem has cost users material value.
  - #### Integer Arithmetic and Precision
    - ERC-20 token amounts are represented as unsigned 256-bit integers (uint256). The decimals() field is purely a display convention; arithmetic in [[Smart Contract]] code always operates on raw integer amounts. Protocols must carefully manage decimal scaling to avoid rounding errors, particularly when tokens with different decimals() values interact in AMM pricing curves or lending collateral calculations.
  - #### Infinite Approvals
    - A common UX pattern is to approve a protocol for type(uint256).max (effectively infinite tokens) to avoid repeated approval transactions. While convenient, this creates risk: if the approved protocol is exploited or upgrades maliciously, the attacker can drain any token balance held by the approving address. [[Token Approval]] management tools (Revoke.cash, Etherscan token approvals) emerged specifically to help users audit and revoke dangerous allowances.
  - #### No Native Pause or Compliance Controls
    - The base standard has no pause, freeze, or blacklist mechanisms. Regulated stablecoin issuers (Circle for USDC, Tether for USDT) add these as non-standard extensions, creating divergence between the base ERC-20 interface and the actual behaviour of high-value token contracts. This has implications for [[Decentralised Finance]] composability and regulatory compliance.

- ### Security Considerations
  - #### Reentrancy via External Calls
    - Standard ERC-20 transfers do not make external calls, but tokens with non-standard hooks (e.g. [[ERC-777]] callbacks or fee-on-transfer mechanics) introduce reentrancy vectors. Protocols that assume ERC-20 semantics but interact with hook-bearing tokens can be exploited. The Uniswap v2 design explicitly guards against fee-on-transfer tokens through balance-delta accounting rather than trusting the transfer return value.
  - #### Front-Running and MEV
    - The [[Mempool]] visibility of pending approve transactions enables Maximal Extractable Value (MEV) bots to front-run allowance changes. This is a systemic property of EVM transparent mempools. [[ERC-2612]] permit signatures are propagated privately to the target contract, bypassing the mempool approval step and eliminating this vector.
  - #### Token Contract Upgrade Risks
    - ERC-20 contracts are typically deployed as immutable bytecode. However, proxy patterns (ERC-1967 transparent proxy, UUPS) allow the implementation to be upgraded by a privileged owner. Centralised upgrade keys represent a trust assumption: if the upgrade key is compromised, the token's logic — including transfer restrictions or minting capabilities — can be replaced. Users of upgradeable ERC-20 tokens depend on governance processes or timelocks to limit this risk.
  - #### Phishing via Token Name/Symbol
    - Because any address can deploy a contract with any name() and symbol() return values, malicious actors routinely deploy tokens impersonating legitimate assets. Wallets and explorers must rely on curated token lists (e.g. Uniswap Token Lists, CoinGecko) rather than on-chain metadata alone to distinguish legitimate tokens from impostors.

- ### Ecosystem and Tooling
  - **OpenZeppelin Contracts** — the de-facto standard Solidity library for ERC-20 implementation; provides audited base contracts with SafeERC20 wrappers that handle non-standard return values.
  - **Hardhat / Foundry** — primary development and testing frameworks for ERC-20 contract development; support forking mainnet state to test token interactions against live DeFi protocols.
  - **Ethers.js / Viem / Web3.js** — JavaScript/TypeScript libraries that provide typed ERC-20 contract ABIs for front-end integration, auto-detecting the standard interface via ABI encoding.
  - **The Graph Protocol** — indexes Transfer and Approval events from ERC-20 contracts into queryable GraphQL subgraphs, powering analytics dashboards and protocol front-ends.
  - **Block Explorers (Etherscan, Blockscout)** — automatically detect ERC-20 compliance and display token-specific UIs (holder counts, transfer history, approval tracking) for any contract implementing the interface.
  - **Token Lists** — off-chain JSON registries (Uniswap Token List standard) that map contract addresses to curated metadata, solving the token identity problem created by name/symbol spoofing.

- ### Relationships
  - hasPart:: [[Fungible Token]]
  - hasPart:: [[Smart Contract]]
  - requires:: [[Ethereum Virtual Machine]]
  - requires:: [[Solidity]]
  - enables:: [[Decentralised Finance]]
  - enables:: [[Decentralised Exchange]]
  - enables:: [[Stablecoin]]
  - enables:: [[Liquidity Pool]]
  - enables:: [[Governance Token]]
  - implements:: [[Ethereum Improvement Proposal]]
  - uses:: [[Ethereum]]
  - uses:: [[EVM-Compatible Network]]
  - supports:: [[Token Composability]]
  - supports:: [[Automated Market Maker]]
  - standardizedBy:: [[Ethereum Foundation]]
  - contrastsWith:: [[ERC-721]]
  - contrastsWith:: [[ERC-1155]]
  - contrastsWith:: [[ERC-777]]
  - contrastsWith:: [[SPL Token]]
  - relatedTo:: [[ERC-2612]]
  - relatedTo:: [[Wrapped Token]]
  - relatedTo:: [[Token Approval]]
  - bridges-to:: [[On-Chain Governance]]
  - bridges-to:: [[Tokenisation]]

- ### Standards and Context
  - ERC-20 originated as an informal Ethereum GitHub issue (#20) in November 2015, before the EIP process was formalised. It was later absorbed into the EIP registry as EIP-20, making the two identifiers synonymous. The standard is maintained informally by the Ethereum community through the [[Ethereum Foundation]] and the EIPs repository on GitHub.
  - Several extension and successor standards address limitations of the base ERC-20 specification:
    - **[[ERC-777]]** — introduced token hooks (tokensReceived / tokensToSend callbacks on recipient/sender contracts), operator-based transfers, and eliminated the double-spend approval problem, but suffered adoption friction due to reentrancy risks discovered in practice.
    - **[[ERC-2612]]** (permit) — adds an off-chain signature-based approval mechanism using EIP-712 typed structured data, eliminating approval transaction gas costs and the front-running vulnerability. Widely adopted by USDC, DAI, and Uniswap v2 LP tokens.
    - **[[ERC-4626]]** — a tokenised vault standard built on top of ERC-20, standardising the interface for yield-bearing token vaults; adopted by Aave v3, Compound v3, and most major yield protocols.
    - **[[ERC-1155]]** — a multi-token standard that supports both fungible (ERC-20-like) and non-fungible (ERC-721-like) tokens in a single contract, enabling batch transfers and reduced gas costs for gaming and NFT marketplace use cases.
  - ERC-20 compliance is enforced at the social/convention layer, not by the [[Ethereum Virtual Machine]] itself. The EVM will execute any bytecode; it is the ecosystem tooling — wallets, block explorers, DEX aggregators — that treats the presence of the standard ABI as a compliance signal.
  - Regulatory developments (MiCA in the EU, SEC guidance in the USA) increasingly reference ERC-20 tokens as the primary technical form of crypto-assets subject to classification as securities or e-money tokens, bringing the standard into the scope of financial regulation.

- ### Provenance
  - sources:: EIP-20 specification (eips.ethereum.org), OpenZeppelin ERC20 implementation, Ethereum Yellow Paper
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
