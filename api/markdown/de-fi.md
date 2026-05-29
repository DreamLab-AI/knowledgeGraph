- ### Definition
  - DeFi (Decentralised Finance) is the ecosystem of open, permissionless financial protocols and applications deployed as Smart Contracts on public blockchains — primarily Ethereum — that replicate and extend traditional financial services (lending, borrowing, trading, yield generation, derivatives) without centralised intermediaries such as banks, brokers, or clearinghouses. Core DeFi primitives include Automated Market Makers (AMMs), over-collateralised lending protocols, algorithmic stablecoins, and yield aggregators, all coordinated through token-based incentive mechanisms and governed by Decentralised Autonomous Organisations (DAOs). DeFi protocols are composable: outputs of one protocol can be inputs to another, enabling complex financial strategies assembled from protocol lego blocks.

- ### Semantic Classification
  - owl-class:: de-fi:DeFi
  - owl-role:: Concept

- ### Relationships
  - requires [[Smart Contract]]
  - requires [[Blockchain]]
  - uses [[Liquidity Pool]]
  - uses [[Governance Token]]
  - relatedTo [[DAO Governance]]
  - relatedTo [[Token Economics]]

- ### Content
  - DeFi emerged principally on the Ethereum blockchain from 2018 onwards, enabled by the EVM's Turing-complete Smart Contract execution environment. The Automated Market Maker (AMM) model — pioneered by Uniswap using the constant product formula x*y=k for Liquidity Pools — replaced centralised order books with algorithmically managed token reserves, allowing permissionless token swapping without a matching engine or a counterparty. Liquidity Provision to AMMs became a yield-generating activity, attracting capital and giving rise to liquidity mining programmes that distribute Governance Tokens to incentivise early adoption.
  - Lending protocols such as Compound and Aave implement over-collateralised lending: borrowers lock collateral (e.g., ETH) worth more than their loan (e.g., stablecoins), with automated liquidation triggered if collateral value falls below a safety threshold. Interest rates are determined by utilisation curves encoded in the Smart Contract rather than by human loan officers. Flash loans — atomically borrowed and repaid within a single transaction — are a distinctly DeFi instrument exploiting blockchain atomicity, used for arbitrage, self-liquidation, and collateral swaps without upfront capital.
  - DeFi governance is typically on-chain via DAO structures: Governance Token holders submit and vote on protocol parameter changes (fee tiers, collateral ratios, new market listings), with successful proposals executed by time-locked governance contracts. Cross-Chain Governance extensions allow DeFi protocols deployed across multiple chains to coordinate protocol parameters. Key risks in DeFi include smart contract vulnerabilities (which have resulted in large-scale protocol exploits), oracle manipulation attacks, MEV (Maximal Extractable Value) by block producers, and regulatory uncertainty as regulators globally assess the application of financial services regulations to permissionless protocols.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z