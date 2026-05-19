- ### Definition
  - Trustless peer-to-peer cryptocurrency exchange mechanism across different blockchains using Hash Time-Locked Contracts (HTLCs) that guarantees atomic execution where the swap either completes fully or not at all, eliminating counterparty risk without requiring centralized intermediaries.

- ### Semantic Classification
  - owl-class:: blockchain:AtomicSwap
  - owl-role:: Concept
  - belongs-to-domain:: [[Blockchain]]

- ### Relationships
  - is-subclass-of:: [[Blockchain]]
  - enables:: [[Cross-Chain Interoperability]]
  - implements:: [[Hash Time-Locked Contract]]
  - bridges-to:: [[Virtual Economy]]

- ### Content

  ## Definition
  - Trustless peer-to-peer exchange of cryptocurrencies across different blockchains without intermediaries
  - Uses Hash Time-Locked Contracts (HTLCs) ensuring atomicity: swap completes fully or not at all
  - Enables decentralized cross-chain trading without centralized exchanges

  ## Core Components
  - **Hash Time-Locked Contract (HTLC)**: Smart contract with hash preimage and timeout
  - **Secret/Preimage**: Random value known only to initiator
  - **Hash Lock**: Cryptographic hash of secret used as condition
  - **Time Lock**: Expiration deadline for claim/refund

  ## Technical Characteristics
  - **Atomicity**: All-or-nothing execution guarantee
  - **Trustlessness**: No third-party custody of funds
  - **Cross-Chain**: Works between independent blockchains
  - **Non-Custodial**: Users maintain control until swap completion

  ## Protocol Flow
  1. **Initiation**: Alice creates HTLC on Chain A with hash(secret)
  2. **Response**: Bob creates HTLC on Chain B with same hash
  3. **Claim**: Alice reveals secret to claim Bob's funds on Chain B
  4. **Complete**: Bob uses revealed secret to claim Alice's funds on Chain A
  5. **Refund**: If timeout expires, both parties reclaim funds

  ## Implementation Methods
  - **On-Chain HTLCs**: Native smart contract support (Ethereum, etc.)
  - **Bitcoin Script**: Using OP_CHECKLOCKTIMEVERIFY and OP_CHECKSEQUENCEVERIFY
  - **Lightning Network**: Off-chain atomic swaps via payment channels
  - **Submarine Swaps**: On-chain to off-chain atomic swaps

  ## Use Cases
  - Decentralized cryptocurrency exchanges
  - Cross-chain arbitrage
  - Privacy-preserving trades
  - Interoperability between blockchain ecosystems

  ## Examples
  - [[Bitcoin]] <-> [[Litecoin]] atomic swaps
  - [[Ethereum]] <-> [[ERC-20 Token]] swaps
  - [[Lightning Network]] cross-chain swaps
  - [[Polkadot]] parachain swaps

  ## Relationships
  - implements:: [[Hash Time-Locked Contract]]
  - enables:: [[Cross-Chain Interoperability]]
  - uses:: [[Hash Function]]
  - alternative-to:: [[Cross-Chain Bridge]]
  - component-of:: [[Decentralized Exchange]]

  ## Security Properties
  - No counterparty risk after setup
  - No third-party custody
  - Cryptographic guarantee of atomicity
  - Time-based refund mechanism

  ## Advantages
  - Trustless cross-chain exchange
  - No exchange custody risk
  - Censorship-resistant
  - Privacy-preserving (no KYC)

  ## Limitations
  - Both parties must be online during swap
  - Requires blockchain support for scripting/smart contracts
  - Time lock duration trade-offs (security vs capital efficiency)
  - No price discovery mechanism
  - User experience complexity

  ## Performance Considerations
  - Multi-step confirmation process
  - Total time = 2x confirmation time (both chains)
  - Capital lockup during swap duration
  - Gas costs for smart contract execution

  ## Variants
  - **American Call Option**: Time-asymmetric atomic swaps
  - **Adaptor Signatures**: Scriptless atomic swaps using signatures
  - **Threshold Signatures**: Multi-party atomic swaps
  - **Cross-Chain AMMs**: Automated market makers for atomic swaps

  ## HTLC Parameters
  - **Hash Function**: SHA256, RIPEMD160
  - **Time Lock**: Typically 24-48 hours
  - **Confirmation Requirements**: Chain-specific finality
  - **Refund Buffer**: Time margin between chain A and B locks

  #### Related Concepts
  - [[Hash Time-Locked Contract]]
  - [[Cross-Chain Bridge]]
  - [[Decentralized Exchange]]
  - [[Payment Channel]]

  #blockchain #atomic-swap #interoperability #cross-chain

  ### Relationships
  - is-subclass-of:: [[Blockchain]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z