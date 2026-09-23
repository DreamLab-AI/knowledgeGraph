
Axelar is a decentralised cross-chain communication network that enables general message passing and token transfers between heterogeneous blockchains via a proof-of-stake overlay network and a permissionless gateway smart contract model. It provides a Universal Message Passing (UMP) primitive that allows any contract on any connected chain to call any contract on any other connected chain as a single composable operation.

- ### Content
  - Axelar was founded in 2020 by Sergey Gorbunov and Georgios Vlachos, both from the cryptography and distributed systems research community. The mainnet launched in early 2022. The project raised significant venture funding and grew its connected chain count from around 20 at launch to over 50 by 2023, covering all major EVM chains, Cosmos ecosystem chains, and several non-EVM networks including Sui and Aptos.

  - The technical architecture comprises three layers: the Axelar network (a Cosmos SDK-based PoS chain), gateway smart contracts deployed on each connected chain, and a relayer layer. When a cross-chain call is initiated, gateway contracts on the source chain emit events; Axelar validators observe these events, achieve BFT consensus, and produce a threshold-signed approval that the destination gateway contract verifies before executing the target call. The AXL token is used for staking and gas payment.

  - In the application ecosystem, Axelar's Squid Router provides cross-chain DEX aggregation, and its GMP API is integrated by major DeFi protocols for liquidity unification and cross-chain governance. The Interchain Token Service (ITS), launched in 2023, extends native token functionality to multiple chains simultaneously without wrapped token fragmentation.

  - Through 2024–2025, Axelar has focused on programmable interoperability — allowing chains to define custom routing and fee logic — and on institutional-grade features including compliance-aware message routing. Competition from Chainlink CCIP and LayerZero has intensified, driving innovation in decentralisation, latency, and developer tooling. The network processed hundreds of millions of dollars in monthly cross-chain volume by mid-2024.

