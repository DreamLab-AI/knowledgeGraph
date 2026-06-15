public:: true

# Gitcoin Passport
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:gitcoin-passport",
  "@type": "Page",
  "vc:slug": "gitcoin-passport",
  "title": "Gitcoin Passport",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:gitcoin-passport",
  "@type": "Class",
  "label": "Gitcoin Passport",
  "definition": "Gitcoin Passport is a decentralised identity aggregation and sybil-resistance protocol that collects verifiable credential stamps from diverse identity providers—including Web2 social platforms, biometric services, on-chain activity records, and professional attestation networks—into a composable trust score attesting to the humanness and uniqueness of a wallet address. The system is built on W3C Decentralised Identifier and Verifiable Credential standards, storing credentials on the Ceramic Network to maintain user sovereignty over personal data without centralised custody. Its primary use case is protecting quadratic funding rounds and other public-goods allocation mechanisms from sybil attacks, where a single actor creates many accounts to multiply their influence. The stamp-based, configurable-weight architecture allows applications to set their own scoring thresholds according to their specific risk tolerance, and the open API enables Gitcoin Passport to function as a composable trust primitive across the broader Web3 ecosystem.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:decentralized-identity-did",
      "label": "Decentralized Identity (DID)"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:gitcoin",
        "label": "Gitcoin"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:verifiable-credential-vc",
        "label": "Verifiable Credential (VC)"
      },
      {
        "@id": "urn:ngm:class:did-document",
        "label": "DID Document"
      },
      {
        "@id": "urn:ngm:class:trust-score-metric",
        "label": "Trust Score"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:ceramic-network",
        "label": "Ceramic Network"
      },
      {
        "@id": "urn:ngm:class:decentralized-identifier",
        "label": "Decentralized Identifier"
      },
      {
        "@id": "urn:ngm:class:digital-wallet",
        "label": "Digital Wallet"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:quadratic-funding",
        "label": "Quadratic Funding"
      },
      {
        "@id": "urn:ngm:class:knowledge-graph-publication-classifier-goods-funding",
        "label": "Public Goods Funding"
      },
      {
        "@id": "urn:ngm:class:decentralized-governance",
        "label": "Decentralized Governance"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      },
      {
        "@id": "urn:ngm:class:w3-c-did-specification",
        "label": "W3C DID Specification"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:sybil-resistance",
        "label": "Sybil Resistance"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:proof-of-humanity",
        "label": "Proof of Humanity"
      },
      {
        "@id": "urn:ngm:class:ens",
        "label": "ENS (Ethereum Name Service)"
      },
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:sybil-attack",
        "label": "Sybil Attack"
      },
      {
        "@id": "urn:ngm:class:centralised-identity",
        "label": "Centralised Identity"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:identity-verification",
        "label": "Identity Verification"
      },
      {
        "@id": "urn:ngm:class:self-sovereign-identity",
        "label": "Self Sovereign Identity"
      },
      {
        "@id": "urn:ngm:class:reputation-system",
        "label": "Reputation System"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:content-authenticity",
        "label": "AI Content Authenticity"
      },
      {
        "@id": "urn:ngm:class:federated-identity",
        "label": "Federated Identity"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:passport-protocol",
      "label": "Passport Protocol"
    }
  ],
  "quality": 0.73,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - Gitcoin Passport is a [[Decentralized Identity (DID)]]-based sybil-resistance and trust-aggregation protocol that collects verifiable credential stamps from heterogeneous identity providers, combining them into a composable [[Trust Score]] that attests to the uniqueness and humanness of an [[Ethereum]] wallet address. It is anchored to [[W3C DID Specification]] and [[Verifiable Credential (VC)]] standards, using the [[Ceramic Network]] for decentralised credential storage, and is deployed primarily to defend [[Quadratic Funding]] and [[Public Goods Funding]] mechanisms against coordinated [[Sybil Attack]] campaigns. The stamp-based, configurable-weight architecture makes it a general-purpose trust primitive reusable across [[Decentralized Governance]], airdrops, and access-gated Web3 applications.

- ### Overview
  - Gitcoin Passport emerged from the [[Gitcoin]] ecosystem's operational experience running public quadratic funding rounds that proved systematically vulnerable to sybil attacks. A sybil attack in this context occurs when one actor creates many pseudo-anonymous wallet addresses to multiply their effective voting weight, undermining the egalitarian assumptions of [[Quadratic Funding]].
  - The passport solves this by shifting identity evidence accumulation onto the individual participant. Rather than requiring any single, privacy-invasive identity check, it aggregates many weaker signals—social, biometric, financial, and on-chain—into a composite score. No single signal is required, but collectively they make impersonation economically and logistically prohibitive.
  - The system is deliberately non-custodial: [[Gitcoin]] stores no personal data. Credentials live on the [[Ceramic Network]] under user-controlled [[Decentralized Identifier]] keys, meaning the user can revoke or migrate credentials without vendor lock-in.
  - Passport scores are accessible via an open API, enabling other protocols to query a wallet's trust score without rebuilding identity infrastructure, positioning the passport as shared public infrastructure—a trust primitive for the Web3 stack.
  - The maturity level is "established": the protocol has been live through multiple major funding rounds, integrated by third-party protocols, and has undergone iterative stamp weighting revisions based on empirical sybil attack data.

- ### Key Components
  - **Stamps**
    - The atomic unit of the passport. Each stamp represents a verified claim from a specific identity provider.
    - Stamps are encoded as [[Verifiable Credential (VC)]] objects signed by the issuing provider.
    - Examples: [[ENS (Ethereum Name Service)]] ownership, GitHub account age, Google OAuth attestation, [[Proof of Humanity]] registration, [[BrightID]] verification, Coinbase account KYC, Lens Protocol profile.
    - Stamps are time-limited and must be periodically refreshed to prevent stale credential exploitation.
  - **Scoring Model**
    - Each stamp carries a configurable weight. The aggregate score is the sum of weights for all valid, non-expired stamps held by the wallet.
    - Applications set their own scoring threshold: a high-value airdrop may demand a score of 20+, while a lightweight community gate may accept 10+.
    - Weights are periodically recalibrated by the Gitcoin team based on observed sybil behaviour and stamp acquisition cost.
    - The scoring model is public and auditable, ensuring transparency in how trust is computed.
  - **DID Document and Ceramic Storage**
    - Each passport is anchored to a [[DID Document]] stored on the [[Ceramic Network]], a decentralised data stream protocol built on [[IPFS]] and [[Ethereum]].
    - This architecture ensures that credential data is not held by Gitcoin's servers—only the user's wallet key can update or delete their passport record.
    - The [[Decentralized Identifier]] format follows W3C DID Core specification, ensuring interoperability with any compatible identity layer.
  - **Scoring API and Scorer IDs**
    - Gitcoin exposes a REST API and scorer IDs that allow third-party applications to request a wallet's current score without accessing raw credential data.
    - Applications register a scorer and receive a score integer; the underlying stamps remain private to the user unless explicitly shared.
    - This design balances composability with the principle of minimal disclosure from [[Self-Sovereign Identity]].
  - **Model-Based Scoring (Stamp Model vs Model-Based)**
    - Beyond the simple additive stamp model, Gitcoin Passport has explored machine-learning-based scoring that uses on-chain behaviour patterns to estimate sybil probability, bridging toward [[AI Content Authenticity]] and algorithmic trust assessment.
    - The model-based approach draws on [[Reputation System]] research and could incorporate [[Zero-Knowledge Proof]] attestations to provide privacy-preserving proofs of score thresholds without revealing which stamps are held.

- ### Applications and Use Cases
  - **Quadratic Funding Protection**
    - The canonical use case: [[Quadratic Funding]] rounds on Gitcoin Grants require participants to hold a valid passport above a threshold score to prevent sybil amplification. This preserves the democratic weighting mechanism that makes quadratic funding effective for [[Public Goods Funding]].
  - **Token Airdrops**
    - Projects conducting [[Token Airdrop]] campaigns use Gitcoin Passport to gate eligibility, filtering out farming bots and ensuring tokens reach genuine community participants.
  - **Decentralised Governance**
    - [[Decentralized Governance]] platforms use passport scores to weight voting power or restrict proposal submission to verified humans, resisting plutocratic capture via multiple wallets.
  - **Access-Gated Communities and Tooling**
    - DeSoc (Decentralised Social) platforms, DAO tooling, and NFT gated communities embed passport checks to restrict access to verified human participants.
  - **Cross-Protocol Trust Layer**
    - As a shared trust primitive, Gitcoin Passport reduces duplicated identity infrastructure across the Web3 ecosystem. Any protocol can integrate a passport check without building bespoke [[Identity Verification]] systems.
  - **Anti-Spam and Anti-Bot Mechanisms**
    - Forums, comment systems, and open-contribution platforms in Web3 use passport scores to filter spam and bot-generated content, analogous to CAPTCHA in Web2.

- ### Mechanisms and Architecture
  - **Stamp Collection Flow**
    - User connects their [[Digital Wallet]] to the Gitcoin Passport app.
    - For each identity provider, the user completes the relevant OAuth, biometric, or on-chain verification flow.
    - The provider issues a signed [[Verifiable Credential (VC)]] to the user's [[DID Document]] on the [[Ceramic Network]].
    - The passport aggregates all valid stamps and computes the composite trust score.
  - **Sybil Resistance Properties**
    - The system implements [[Sybil Resistance]] through economic friction (acquiring multiple stamps across many accounts is costly in time and sometimes money), social friction (some stamps require genuine social presence), and biometric uniqueness constraints ([[Proof of Humanity]], [[BrightID]]).
    - The pluralistic stamp model avoids single points of failure: no one provider can be spoofed to achieve full score.
  - **Privacy Architecture**
    - Raw credential data is not visible to application integrators—only aggregate scores are exposed.
    - Future directions include [[Zero-Knowledge Proof]] based score attestations that allow a user to prove "my score exceeds threshold X" without revealing which stamps were collected or from which providers.
    - This aligns with [[Self-Sovereign Identity]] principles: the user controls disclosure.
  - **Interoperability**
    - By conforming to [[W3C DID Specification]] and [[Verifiable Credential (VC)]] standards, passport credentials are portable to any standards-compliant [[Federated Identity]] or identity aggregation layer.
    - The [[Ceramic Network]] storage layer is protocol-agnostic, enabling credential portability beyond Ethereum to other EVM-compatible and non-EVM chains.

- ### Relationships
  - partOf:: [[Gitcoin]]
  - hasPart:: [[Verifiable Credential (VC)]]
  - hasPart:: [[DID Document]]
  - hasPart:: [[Trust Score]]
  - requires:: [[Ceramic Network]]
  - requires:: [[Decentralized Identifier]]
  - requires:: [[Digital Wallet]]
  - enables:: [[Quadratic Funding]]
  - enables:: [[Public Goods Funding]]
  - enables:: [[Token Airdrop]]
  - enables:: [[Decentralized Governance]]
  - dependsOn:: [[Ethereum]]
  - dependsOn:: [[W3C DID Specification]]
  - implements:: [[Sybil Resistance]]
  - implements:: [[Identity Aggregation]]
  - uses:: [[Proof of Humanity]]
  - uses:: [[BrightID]]
  - uses:: [[ENS (Ethereum Name Service)]]
  - uses:: [[Zero-Knowledge Proof]]
  - contrastsWith:: [[Sybil Attack]]
  - contrastsWith:: [[Centralised Identity]]
  - relatedTo:: [[Identity Verification]]
  - relatedTo:: [[Self-Sovereign Identity]]
  - relatedTo:: [[Reputation System]]
  - bridges-to:: [[AI Content Authenticity]]
  - bridges-to:: [[Federated Identity]]

- ### Standards and Context
  - **W3C DID Core** — The [[W3C DID Specification]] defines the [[Decentralized Identifier]] format underpinning each passport. Gitcoin Passport uses the `did:pkh` method, anchoring identifiers to wallet addresses.
  - **W3C Verifiable Credentials Data Model** — Stamps are encoded as [[Verifiable Credential (VC)]] objects conforming to the W3C VC Data Model, enabling interoperability with any VC-aware system.
  - **Ceramic Network Protocol** — [[Ceramic Network]] provides the decentralised, user-controlled data stream layer where passport credentials are persisted. It uses IPFS content addressing and Ethereum anchoring for tamper-evidence.
  - **EIP-4361 (Sign-In With Ethereum)** — Wallet authentication in the passport onboarding flow leverages SIWE for standardised authentication without password managers or centralised OAuth.
  - **Gitcoin Grants Stack** — The passport is a core component of the Gitcoin Grants Stack, an open-source suite of smart contracts and tooling enabling communities to run their own quadratic funding rounds with sybil protection built in.
  - **Regulatory Context** — Gitcoin Passport operates in the tension between pseudonymous Web3 participation and emerging KYC/AML requirements in some jurisdictions. The pluralistic, privacy-preserving design attempts to meet sybil-resistance goals without mandating government ID, though some stamps (e.g. Coinbase KYC) import regulated identity verification.
  - **Comparison with Other Sybil-Resistance Approaches** — [[Proof of Humanity]] and [[BrightID]] are biometric-anchored alternatives that provide stronger uniqueness guarantees but at higher friction. Gitcoin Passport aggregates both as optional stamps, sitting above them as an application-layer trust protocol rather than competing at the identity primitives level.

- ### Limitations and Open Challenges
  - **Stamp Acquisition Friction** — Users in regions without access to specific Web2 platforms or biometric services face barriers that create geographic bias in who can achieve high passport scores.
  - **Score Gaming** — As stamp weights are public, determined sybil actors can identify the lowest-cost stamp combinations to reach thresholds. Periodic reweighting mitigates but cannot eliminate this.
  - **Privacy Trade-offs** — Aggregating signals from many identity providers creates a cross-platform pseudonym linkage that is a privacy risk, even if individual stamps are not directly disclosed to application integrators.
  - **Credential Staleness** — Time-limited stamps require periodic renewal, adding ongoing maintenance burden for users and risk of score degradation if stamps expire.
  - **Decentralisation Trade-offs** — While credentials are stored on [[Ceramic Network]], the scoring weights and stamp validity decisions remain centralised with the Gitcoin team, creating a governance dependency.

- ### Provenance
  - sources:: [[Gitcoin]], [[W3C DID Specification]], [[Ceramic Network]], [[Verifiable Credential (VC)]], [[Quadratic Funding]], [[Sybil Resistance]], [[Proof of Humanity]], [[BrightID]], [[Self-Sovereign Identity]]
  - updated:: 2026-06-13
