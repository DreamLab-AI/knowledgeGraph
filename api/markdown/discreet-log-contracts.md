- ### Definition
  - A scheme for executing conditional Bitcoin payments based on signed outcomes from external oracles, where the contract logic stays off-chain and only the settled transaction is broadcast.

- ### Semantic Classification
  - owl-class:: blockchain:DiscreetLogContracts
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Smart Contract]]
  - bridges-to:: [[Bitcoin Script]]
  - requires:: [[Bitcoin Proof-of-Work Protocol]], [[Schnorr Signature]], [[Cryptographic Proof]]
  - enables:: [[Atomic Swap]]

- ### Content
  - Discreet Log Contracts (DLCs) allow two parties to enter a conditional Bitcoin contract whose payout depends on a future event attested by an oracle. The oracle signs the outcome, and the corresponding signature reveals the key needed to claim the agreed payout, keeping the contract indistinguishable from an ordinary transaction on-chain.
  - Because the contract terms and oracle remain off-chain, DLCs offer privacy and scalability advantages over fully on-chain contracts, and they are used for derivatives, prediction markets and other event-contingent settlements on Bitcoin.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z