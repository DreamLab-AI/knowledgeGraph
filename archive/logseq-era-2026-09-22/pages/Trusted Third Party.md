public:: true

# Trusted Third Party

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:trusted-third-party", "@type":"Page", "title":"Trusted Third Party", "vc:slug":"trusted-third-party", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:trusted-third-party",
  "@type":"Class",
  "label":"Trusted Third Party",
  "definition":"A trusted third party (TTP) is an intermediary that two or more parties rely upon to facilitate, witness, or settle an interaction without each party having to trust the other directly. Examples include certificate authorities, escrow agents, custodians, and clearing houses. Blockchain systems are largely motivated by the goal of minimising or eliminating trusted third parties, replacing institutional trust with cryptographic verification and decentralised consensus.",
  "domain":"blockchain",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:security","label":"Security"}],
  "relations":{
    "contrastsWith":[{"@id":"urn:ngm:class:self-custody","label":"Self-Custody"},{"@id":"urn:ngm:class:decentralized-exchange","label":"Decentralized Exchange"},{"@id":"urn:ngm:class:smart-contract","label":"Smart Contract"}],
    "requires":[{"@id":"urn:ngm:class:custody","label":"Custody"}],
    "uses":[{"@id":"urn:ngm:class:certificate-authority","label":"Certificate Authority"},{"@id":"urn:ngm:class:know-your-customer","label":"Know Your Customer"}],
    "enables":[{"@id":"urn:ngm:class:centralized-exchange","label":"Centralized Exchange"},{"@id":"urn:ngm:class:custodial-wallet","label":"Custodial Wallet"}],
    "supports":[{"@id":"urn:ngm:class:custody","label":"Custody"}],
    "relatedTo":[{"@id":"urn:ngm:class:oracle","label":"Oracle"},{"@id":"urn:ngm:class:multisig","label":"Multisig"},{"@id":"urn:ngm:class:centralized-exchange","label":"Centralized Exchange"}],
    "bridgesTo":[{"@id":"urn:ngm:class:smart-contract","label":"Smart Contract"}],
    "dependsOn":[{"@id":"urn:ngm:class:custody","label":"Custody"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- A [[Trusted Third Party]] is an intermediary relied upon to facilitate or settle an interaction so that the participants need not trust one another directly.
- Classic instances include the [[Certificate Authority]], escrow and [[Custody]] providers, and clearing houses.
- Decentralised designs such as the [[Smart Contract]], [[Decentralized Exchange]], and [[Self-Custody]] aim to minimise reliance on trusted third parties.
- ### Overview
- The trusted-third-party pattern resolves the problem of mutual distrust by delegating trust to a reputable intermediary that all parties accept.
- It is efficient and legally well understood but introduces a single point of failure, a censorship vector, and a target for attack or capture.
- Cryptographic and consensus mechanisms reframe this trade-off: blockchains substitute verifiable computation for institutional trust, while oracles and multisig arrangements distribute or constrain it.
- ### Key aspects
- Intermediation: the party sits between counterparties to witness, hold, or settle value or information.
- Single point of trust: correctness and availability depend on the intermediary's integrity.
- Accountability: legal and reputational mechanisms enforce honest behaviour.
- Trust minimisation: cryptography and decentralisation reduce the scope of required trust.
- ### Applications
- Public-key infrastructure and certificate issuance for secure communication.
- Escrow, custody, and settlement in finance and commerce.
- Centralised exchanges and custodial wallets holding user assets.
- Oracles bridging off-chain data into smart contracts under bounded trust.
- ### Relationships
- contrastsWith:: [[Self-Custody]]
- contrastsWith:: [[Decentralized Exchange]]
- contrastsWith:: [[Smart Contract]]
- requires:: [[Custody]]
- uses:: [[Certificate Authority]]
- uses:: [[Know Your Customer]]
- enables:: [[Centralized Exchange]]
- enables:: [[Custodial Wallet]]
- supports:: [[Custody]]
- relatedTo:: [[Oracle]]
- relatedTo:: [[Multisig]]
- relatedTo:: [[Centralized Exchange]]
- bridgesTo:: [[Smart Contract]]
- dependsOn:: [[Custody]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
