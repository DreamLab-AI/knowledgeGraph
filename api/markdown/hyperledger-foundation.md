- ### Definition
  - The Hyperledger Foundation is an open-source collaborative initiative hosted by the Linux Foundation that develops and maintains enterprise-grade, permissioned distributed ledger frameworks and supporting toolkits. Its portfolio includes Hyperledger Fabric (a modular, pluggable DLT framework for enterprise supply-chain and financial applications), Hyperledger Besu (an Ethereum-compatible client for public and private networks), Hyperledger Aries (a toolkit for decentralised identity and verifiable credentials), and Hyperledger Cacti (an interoperability framework). The Foundation operates under an open-governance model with technical steering committees and a diverse membership spanning technology companies, financial institutions, and governments.

- ### Semantic Classification
  - owl-class:: hyperledger-foundation:Hyperledger Foundation
  - owl-role:: Concept

- ### Relationships
  - enables [[Enterprise Blockchain]]
  - enables [[Permissioned Blockchain]]
  - enables [[Self Sovereign Identity]]
  - supports [[Supply Chain Blockchain]]
  - supports [[Hyperledger Fabric]]
  - relatedTo [[Distributed Ledger Technology]]

- ### Content
  Founded in December 2015 under the Linux Foundation, Hyperledger was established to provide a neutral, collaborative space for enterprise blockchain development separated from the cryptocurrency speculation associated with public chains. The project achieved immediate industry backing from IBM, Intel, Accenture, JPMorgan Chase, and many others.

  Hyperledger Fabric is the flagship framework: a modular Permissioned Blockchain where channels provide data segregation between network participants, Smart Contracts (called chaincode) execute in Docker containers, and pluggable ordering services (RAFT-based since Fabric 2.x) provide Byzantine fault-tolerant consensus without proof-of-work. Fabric's execute-order-validate transaction flow optimises throughput for Enterprise Blockchain deployments where all participants are identified and accountable. Applications include Supply Chain Blockchain provenance tracking, trade finance, and healthcare data exchange.

  Hyperledger Aries provides an interoperable stack for decentralised identity, implementing W3C Verifiable Credentials and DID specifications alongside the DIDComm messaging protocol, enabling Self Sovereign Identity wallets and credential exchange without a centralised identity provider. Hyperledger Besu is a full Ethereum client supporting both public Mainnet and private permissioned networks (using IBFT 2.0, QBFT, and Clique consensus mechanisms), bridging enterprise and public Ethereum ecosystems.

  The Foundation's Distributed Ledger Technology portfolio is complemented by tooling projects including Hyperledger Caliper (performance benchmarking), Hyperledger Explorer (blockchain data visualisation), and Hyperledger Bevel (Kubernetes-based deployment automation), providing a complete enterprise DLT engineering toolkit under open-source governance.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z