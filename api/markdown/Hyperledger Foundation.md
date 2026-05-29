public:: true

# hyperledger foundation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b2afffed2a0f04e077960bec406bb6bf2f5f0d7a7707585cb3f091b065358238",
  "@type": "Page",
  "vc:slug": "hyperledger-foundation",
  "title": "hyperledger foundation",
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
  "@id": "urn:ngm:class:hyperledger-foundation",
  "@type": "Class",
  "label": "Hyperledger Foundation",
  "definition": "The Hyperledger Foundation is an open-source collaborative initiative hosted by the Linux Foundation that develops and maintains enterprise-grade, permissioned distributed ledger frameworks and supporting toolkits. Its portfolio includes Hyperledger Fabric (a modular, pluggable DLT framework for enterprise supply-chain and financial applications), Hyperledger Besu (an Ethereum-compatible client for public and private networks), Hyperledger Aries (a toolkit for decentralised identity and verifiable credentials), and Hyperledger Cacti (an interoperability framework). The Foundation operates under an open-governance model with technical steering committees and a diverse membership spanning technology companies, financial institutions, and governments.",
  "domain": "blockchain",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-governance-and-regulation",
      "label": "Blockchain Governance and Regulation"
    }
  ],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:enterprise-blockchain", "label": "Enterprise Blockchain"},
      {"@id": "urn:ngm:class:permissioned-blockchain", "label": "Permissioned Blockchain"},
      {"@id": "urn:ngm:class:self-sovereign-identity", "label": "Self Sovereign Identity"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:supply-chain-blockchain", "label": "Supply Chain Blockchain"},
      {"@id": "urn:ngm:class:hyperledger-fabric", "label": "Hyperledger Fabric"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:distributed-ledger-technology", "label": "Distributed Ledger Technology"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


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
