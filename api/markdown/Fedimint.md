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
  "definition": "Fedimint is an open-source federated protocol for community-custodied Bitcoin Chaumian e-cash mints, in which a threshold of guardians collectively hold Bitcoin reserves and issue blinded bearer tokens redeemable for satoshis, providing privacy-preserving custody without requiring any single trusted party. The federation model distributes trust across a small, known set of guardians using Byzantine-fault-tolerant consensus, while the blind-signature scheme cryptographically prevents guardians from linking redemptions to issuances. Fedimint acts as a Bitcoin Layer 2 through embedded Lightning Network gateway integration, enabling community mints to interoperate with the broader Bitcoin payment ecosystem. It targets the gap between self-custody complexity and centralised custodial risk by enabling accountable, trust-minimised community banking at scale.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [
    {"@id": "urn:ngm:class:ecash", "label": "Ecash"}
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:chaumian-ecash", "label": "Chaumian Ecash"},
      {"@id": "urn:ngm:class:blind-signatures", "label": "Blind Signatures"},
      {"@id": "urn:ngm:class:threshold-cryptography", "label": "Threshold Cryptography"},
      {"@id": "urn:ngm:class:byzantine-fault-tolerance", "label": "Byzantine Fault Tolerance"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:bitcoin", "label": "Bitcoin"},
      {"@id": "urn:ngm:class:multisignature-cryptography", "label": "Multisignature Cryptography"},
      {"@id": "urn:ngm:class:federated-consensus", "label": "Federated Consensus"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:privacy-preserving-payments", "label": "Privacy-Preserving Payments"},
      {"@id": "urn:ngm:class:community-custody", "label": "Community Custody"},
      {"@id": "urn:ngm:class:financial-inclusion", "label": "Financial Inclusion"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:bitcoin-custody", "label": "Bitcoin Custody"},
      {"@id": "urn:ngm:class:lightning-network", "label": "Lightning Network"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:federated-system", "label": "Federated System"},
      {"@id": "urn:ngm:class:bitcoin-layer-2", "label": "Bitcoin Layer 2"},
      {"@id": "urn:ngm:class:decentralised-finance", "label": "Decentralised Finance"},
      {"@id": "urn:ngm:class:digital-cash", "label": "Digital Cash"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:self-custody", "label": "Self-Custody"},
      {"@id": "urn:ngm:class:centralised-exchange", "label": "Centralised Exchange"},
      {"@id": "urn:ngm:class:ark-protocol", "label": "Ark Protocol"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:decentralised-identity", "label": "Decentralised Identity"},
      {"@id": "urn:ngm:class:distributed-trust", "label": "Distributed Trust"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:federated-mint", "label": "Federated Mint"}
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - Fedimint is a [[Bitcoin]] Layer 2 protocol combining [[Chaumian Ecash]] blind signatures with a Byzantine-fault-tolerant [[Federated System]] of guardians to deliver community-scale, privacy-preserving Bitcoin custody. Users deposit Bitcoin into a multi-signature on-chain vault controlled by a threshold of guardians, receiving unlinkable e-cash tokens in return; redemption occurs either on-chain or via [[Lightning Network]] through an embedded gateway. The protocol distributes custodial trust across a small, socially accountable group rather than concentrating it in a single entity, bridging the gap between technical [[Self-Custody]] and risky centralised exchange custody. As an open-source project, Fedimint extends a modular architecture supporting additional federated services such as [[Decentralised Identity]], stable asset issuance, and cross-federation payments.

- ### Overview
  - Fedimint addresses a fundamental tension in Bitcoin adoption: [[Self-Custody]] via hardware wallets or seed phrases is secure but technically demanding for ordinary users, while centralised exchange custody introduces counterparty risk, surveillance, and single points of failure. Fedimint's answer is the federated community mint — a small group of guardians (typically 3-of-4 or 4-of-6) who collectively manage Bitcoin reserves on behalf of a community, with the cryptographic guarantee that no individual guardian can steal funds or identify user transactions.
  - The protocol was conceived by Obi Nwosu and Eric Sirion around 2021. Sirion published the Fedimint whitepaper in 2021, drawing on David Chaum's 1982 paper "Blind Signatures for Untraceable Payments." Public testnet launched in 2022 and stable mainnet releases followed in 2023–2024. The commercialisation vehicle Fedi Inc. produces the Fedi application, which simplifies guardian setup and user onboarding. Community deployments emerged in Africa, Latin America, and elsewhere, particularly in contexts where trust in distant financial institutions is low.
  - Fedimint is increasingly positioned as complementary to, rather than competitive with, the [[Lightning Network]] and [[Ark Protocol]]: Lightning handles direct, high-frequency channel payments; Ark provides non-interactive shared UTXOs; Fedimint provides community-custody with strong privacy and support for underbanked populations. Together they form a layered Bitcoin payment ecosystem.

- ### Key Components
  - **Guardians** — A fixed, known set of operators (often 3-of-4 or 4-of-6) who each hold a key share in a [[Multisignature Cryptography]] vault. Guardians run the federation server software, co-sign on-chain transactions, and participate in [[Byzantine Fault Tolerance]] consensus. Individual guardians cannot spend funds; a threshold must cooperate, making unilateral rug-pulls impossible.
  - **Blind Signatures** — The core cryptographic primitive inherited from [[Chaumian Ecash]]. When a user deposits Bitcoin, they submit a blinded token request; guardians sign it without seeing the token serial number. Upon unblinding, the token is valid and unlinkable to the issuance event. This provides unconditional transaction privacy within the federation.
  - **[[Threshold Cryptography]]** — Key generation and signing operations are distributed across guardians using threshold schemes (e.g., t-of-n FROST or BLS variants) so that no single guardian ever possesses a complete signing key. This underpins both on-chain vault security and e-cash issuance.
  - **[[Federated Consensus]]** — Guardians run a federated Byzantine agreement protocol (inspired by Stellar's FBA) to agree on the state of the mint: which tokens have been issued, which redeemed, and what the on-chain balance is. This is lighter-weight than proof-of-work or proof-of-stake and suited to small, known validator sets.
  - **Lightning Gateway** — One or more guardians operate [[Lightning Network]] nodes that accept off-chain payments on behalf of federation users and convert them to e-cash internally (and vice versa). This connects community mints to the global Bitcoin Lightning economy without exposing individual users' payment activity to the broader network.
  - **Modules** — Fedimint's architecture is modular; the base protocol handles Bitcoin-backed e-cash, but additional modules can provide federated stable assets, decentralised key-value storage, [[Decentralised Identity]] anchoring, and other services, all governed by guardian consensus.

- ### Mechanisms
  - **Deposit flow** — A user generates a blinded token (blinding their serial number with a random factor), sends the blinded value to guardians, and receives a threshold blind signature. The user deposits Bitcoin to the federation's on-chain multi-sig address referencing the token commitment. Once the deposit is confirmed, the user unblinds the signature to obtain a valid e-cash note.
  - **Transfer flow** — E-cash notes are bearer instruments: transfer is instant, offline-capable, and requires no guardian involvement. The recipient simply receives the note and, at their convenience, redeems or re-issues it to prevent double-spending detection.
  - **Redemption flow** — To withdraw Bitcoin, a user presents an unblinded e-cash note to guardians. Guardians verify the blind signature is valid and has not been redeemed previously (via a spent-note registry), then co-sign an on-chain transaction to the user's address or route a [[Lightning Network]] payment.
  - **Double-spend prevention** — Guardians maintain a distributed spent-token database. Because notes are blinded at issuance, guardians cannot determine who originally received a note, but they can confirm whether a specific serial number has been redeemed. Privacy is maintained even in this check.
  - **Guardian recovery** — If a guardian goes offline, the threshold (e.g., 3-of-4) can continue operating. Guardian key shares can be refreshed using [[Threshold Cryptography]] re-sharing protocols without moving on-chain funds.

- ### Applications / Use Cases
  - **Community banking in underbanked regions** — In areas with low smartphone penetration or distrust of formal banking (e.g. parts of sub-Saharan Africa, rural Latin America), local trusted institutions (churches, cooperatives, NGOs) can operate Fedimint guardians, offering community members Bitcoin-backed savings and payments without requiring users to manage seed phrases.
  - **Bitcoin circular economies** — Local merchants and consumers using Bitcoin daily can participate in a community mint for instant, private, zero-fee intra-federation transactions, with Lightning gateways used only for cross-federation settlement.
  - **Privacy-sensitive payments** — Users who need stronger privacy than on-chain or Lightning transactions provide (both leak timing and amount data) can use Fedimint's Chaumian unlinkability to conduct transactions invisible to guardians, chain analysts, and third parties.
  - **Custodial alternatives for exchanges and wallets** — Exchanges and wallet providers can integrate Fedimint to offer users custody within a federated model, reducing single-point-of-failure risk compared to centralised hot wallets and providing regulatory clarity compared to self-custody products.
  - **Stable asset mints** — With the stable asset module, federations can issue tokens pegged to fiat currencies backed by Bitcoin collateral or synthetic mechanisms, extending the financial inclusion use case to populations that prefer price-stable units of account.
  - **Cross-federation payments** — Ongoing protocol work enables atomic swaps between separate Fedimint federations via the Lightning Network, creating a network of community mints that retain individual governance while achieving global interoperability.

- ### Relationships
  - uses:: [[Chaumian Ecash]]
  - uses:: [[Blind Signatures]]
  - uses:: [[Threshold Cryptography]]
  - uses:: [[Byzantine Fault Tolerance]]
  - requires:: [[Bitcoin]]
  - requires:: [[Multisignature Cryptography]]
  - requires:: [[Federated Consensus]]
  - enables:: [[Privacy-Preserving Payments]]
  - enables:: [[Community Custody]]
  - enables:: [[Financial Inclusion]]
  - supports:: [[Bitcoin Custody]]
  - supports:: [[Lightning Network]]
  - relatedTo:: [[Federated System]]
  - relatedTo:: [[Bitcoin Layer 2]]
  - relatedTo:: [[Decentralised Finance]]
  - relatedTo:: [[Digital Cash]]
  - contrastsWith:: [[Self-Custody]]
  - contrastsWith:: [[Centralised Exchange]]
  - contrastsWith:: [[Ark Protocol]]
  - bridges-to:: [[Decentralised Identity]]
  - bridges-to:: [[Distributed Trust]]

- ### Standards & Context
  - **Chaumian blind signatures** — The foundational cryptographic primitive is described in David Chaum's 1982 paper "Blind Signatures for Untraceable Payments" (published in _Advances in Cryptology_, CRYPTO 1982). Fedimint implements RSA or Schnorr-based blind signature variants over Bitcoin-denominated notes.
  - **FROST threshold signatures** — Fedimint's guardian key management increasingly uses FROST (Flexible Round-Optimised Schnorr Threshold) signatures, a scheme standardised via the IRTF CFRG working group (RFC 9591, 2024), enabling efficient t-of-n signing compatible with Bitcoin's Taproot script path.
  - **Federated Byzantine Agreement** — Guardian consensus is inspired by Stellar's FBA model, which allows open, decentralised quorum configuration without global validator set coordination. This contrasts with classical [[Byzantine Fault Tolerance]] which assumes a fixed, known validator universe.
  - **Lightning Network interoperability** — Federation Lightning gateways interact with the broader network using standard BOLT (Basis of Lightning Technology) specifications, ensuring payment compatibility with any Lightning wallet or routing node.
  - **Regulatory positioning** — Fedimint federations occupy a novel regulatory space: they are not banks (no fiat deposits), not exchanges (no order books), and not self-custody solutions. Regulatory treatment varies by jurisdiction; the federated trust model may satisfy certain custodial compliance requirements in some frameworks. Legal analysis is ongoing as the protocol matures.
  - **Open-source governance** — The Fedimint core protocol is developed under the MIT licence at github.com/fedimint/fedimint. Fedi Inc. is the primary commercial contributor but the protocol is designed to be permissionlessly deployable by any community.

- ### Provenance
  - sources:: David Chaum (1982) "Blind Signatures for Untraceable Payments"; Fedimint whitepaper (Sirion, 2021); fedimint.org documentation; FROST RFC 9591 (IRTF CFRG, 2024); public mainnet deployment reports 2023–2025
  - updated:: 2026-06-13
