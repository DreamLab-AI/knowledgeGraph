public:: true

# Fedimint
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:fedimint",
  "@type": "Page",
  "vc:slug": "fedimint",
  "title": "Fedimint",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:fedimint",
  "@type": "Class",
  "label": "Fedimint",
  "definition": "Fedimint is an open-source protocol for federated, community-custodied Bitcoin Chaumian e-cash mints, in which a threshold of guardians collectively hold Bitcoin reserves and issue blinded bearer tokens redeemable for satoshis, providing privacy-preserving custody without requiring any single trusted party. The federation model distributes trust across a small, known set of guardians while the blind-signature scheme prevents guardians from linking redemptions to issuances.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [
    {"@id": "urn:ngm:class:ecash", "label": "Ecash"}
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:chaumian-ecash", "label": "Chaumian Ecash"},
      {"@id": "urn:ngm:class:bitcoin-lightning-network", "label": "Bitcoin Lightning Network"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:federated-system", "label": "Federated System"},
      {"@id": "urn:ngm:class:bitcoin-layer-2", "label": "Bitcoin Layer 2"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:bitcoin-custody", "label": "Bitcoin Custody"}
    ]
  },
  "quality": 0.85
}
```

- ### Definition
  - Fedimint is a protocol that combines [[Chaumian Ecash]] blind signatures with a Byzantine-fault-tolerant [[Federated System]] of guardians to provide community-scale, privacy-preserving Bitcoin custody. Users deposit Bitcoin and receive unforgeable, unlinkable e-cash tokens; redemption is possible via Lightning through an embedded gateway, making it a [[Bitcoin Layer 2]] solution optimised for trust-minimised community banks.

- ### Relationships
  - Fedimint builds directly on [[Chaumian Ecash]] — the cryptographic primitive invented by David Chaum in 1982 — applying it to Bitcoin as the reserve asset. The [[Bitcoin Lightning Network]] provides interoperability: Fedimint instances can send and receive via Lightning, connecting community mints to the broader Lightning economy. The federation model distributes [[Bitcoin Custody]] risk across guardians rather than concentrating it in a single operator, contrasting with traditional [[Bitcoin Layer 2]] custodial wallets.

- ### Content
  - Fedimint was conceived by Obi Nwosu and Eric Sirion around 2021 as a response to the custodial risk of exchange wallets and the technical barrier of self-custody for ordinary users. The protocol draws on David Chaum's 1982 paper "Blind Signatures for Untraceable Payments," which introduced the cryptographic mechanism allowing a signer to sign a message without seeing its content — enabling untraceable digital cash. Sirion published the Fedimint whitepaper in 2021 and the protocol entered public testnet in 2022.
  - The Fedimint architecture consists of: a set of guardians (typically 3-of-4 or 4-of-6 threshold) who collectively hold Bitcoin in a multi-signature on-chain address; a blind-signature mint where users submit blinded token requests and receive blind signatures redeemable for Bitcoin; and a Lightning gateway operated by one or more guardians enabling payment interoperability. Users experience instant, offline-capable transfers within the federation without any record of which user owns which tokens. Guardian consensus uses a modified Federated Byzantine Agreement protocol.
  - Fedimint matters because it targets a real gap: self-custody is too complex for mass adoption, but centralised custodians are single points of failure and surveillance. Community mints — operated by trusted local institutions (credit unions, churches, Bitcoin meetup organisers) — distribute trust to groups small enough that guardians are accountable to users but large enough that no single guardian can rug-pull. This federated trust model parallels how community banks historically operated, and Fedimint proponents argue it could bring financial services to underbanked populations where trust in distant institutions is low.
  - As of 2024–2025, Fedimint reached stable mainnet releases and saw community deployments primarily in Africa and Latin America. The Fedi application (built by Fedi Inc., the commercialisation company) simplifies guardian setup and user onboarding. Integration with the Lightning Network is mature; work on federated modules for stable assets and decentralised identity is ongoing. Privacy research has examined the limits of Chaumian unlinkability in practice. Fedimint is increasingly referenced in Bitcoin layer-2 discussions alongside the Lightning Network and Ark as complementary rather than competing protocols.
