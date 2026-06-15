public:: true

# BrightID
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2b884387a5b29105e7756c74adc3f7f5dc023cbc84fe5d5d06804edc30944db2",
  "@type": "Page",
  "vc:slug": "bright-id",
  "title": "BrightID",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:sybil-resistance",
      "vc:label": "Sybil Resistance"
    },
    {
      "@id": "urn:visionflow:linked:reputation-system",
      "vc:label": "Reputation System"
    },
    {
      "@id": "urn:visionflow:linked:digital-identity",
      "vc:label": "Digital Identity"
    },
    {
      "@id": "urn:visionflow:linked:sybil-attack",
      "vc:label": "Sybil Attack"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "BrightID"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:bright-id",
  "@type": "Class",
  "label": "BrightID",
  "definition": "BrightID is a decentralised social identity network that establishes the uniqueness of human participants by analysing the topology of a peer-to-peer social connection graph, without collecting personally identifying information. Each user creates an account identified solely by a public key, then builds mutual verification links with trusted contacts; graph-analysis algorithms infer whether an account corresponds to a distinct human rather than a bot or duplicate. The system provides applications with a binary or graded uniqueness signal usable for Sybil-resistant resource allocation, quadratic voting, and universal basic income distribution without requiring biometric data or a central identity authority.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.72,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:digital-identity",
      "label": "Digital Identity"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:sybil-resistance",
        "label": "Sybil Resistance"
      },
      {
        "@id": "urn:ngm:class:quadratic-voting",
        "label": "Quadratic Voting"
      },
      {
        "@id": "urn:ngm:class:universal-basic-income",
        "label": "Universal Basic Income"
      },
      {
        "@id": "urn:ngm:class:decentralised-governance",
        "label": "Decentralised Governance"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:social-network-graph",
        "label": "Social Graph"
      },
      {
        "@id": "urn:ngm:class:peer-to-peer-network",
        "label": "Peer-to-Peer Network"
      },
      {
        "@id": "urn:ngm:class:public-key-cryptography",
        "label": "Public Key Cryptography"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:graph-analysis",
        "label": "Graph Analysis"
      },
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      },
      {
        "@id": "urn:ngm:class:decentralised-application",
        "label": "Decentralised Application"
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
        "@id": "urn:ngm:class:self-sovereign-identity",
        "label": "Self Sovereign Identity"
      },
      {
        "@id": "urn:ngm:class:proof-of-personhood",
        "label": "Proof of Personhood"
      },
      {
        "@id": "urn:ngm:class:web-of-trust",
        "label": "Web of Trust"
      },
      {
        "@id": "urn:ngm:class:decentralised-identifier",
        "label": "Decentralised Identifier"
      },
      {
        "@id": "urn:ngm:class:token-distribution",
        "label": "Token Distribution"
      },
      {
        "@id": "urn:ngm:class:airdrop",
        "label": "Airdrop"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:reputation-system",
        "label": "Reputation System"
      },
      {
        "@id": "urn:ngm:class:federated-learning",
        "label": "Federated Learning"
      },
      {
        "@id": "urn:ngm:class:privacy-preserving-computation",
        "label": "Privacy-Preserving Computation"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:bright-id-network",
      "label": "BrightID Network"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:bright-id:5932c86ff2e4",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2b884387a5b29105e7756c74adc3f7f5dc023cbc84fe5d5d06804edc30944db2"
  },
  "vc:resolutions": [
    {
      "raw": "[[Sybil Resistance]]",
      "resolved": "urn:visionflow:linked:sybil-resistance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Reputation System]]",
      "resolved": "urn:visionflow:linked:reputation-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Identity]]",
      "resolved": "urn:visionflow:linked:digital-identity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Sybil Attack]]",
      "resolved": "urn:visionflow:linked:sybil-attack",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - BrightID is a decentralised [[Proof of Personhood]] and [[Social Graph]]-based identity network that verifies the uniqueness of each human participant without collecting personally identifying information. Rather than relying on government documents or [[Biometric Identity]] scans, it analyses the structure of mutual social connections between accounts to distinguish genuine humans from bots or duplicate personas. Applications integrate via an open API to receive a uniqueness signal that gates access to resources, votes, or tokens — providing [[Sybil Resistance]] at scale. It represents an approach to [[Self-Sovereign Identity]] where the identity credential is derived entirely from social attestation and graph topology rather than a central authority.

- ### Overview
  - BrightID was created to solve the fundamental problem of [[Sybil Attack]]s in open, permissionless systems: when anyone can create unlimited accounts, mechanisms for fair resource distribution (airdrops, voting, UBI) are trivially gamed. The core insight is that real humans form genuine social networks with characteristic structural properties, while artificial accounts cluster differently. By having users mutually verify one another in verified connection parties (both online and in-person video calls), BrightID accumulates a weighted social graph whose topology encodes trust.
  - The system is non-custodial — accounts are [[Public Key Cryptography]] key pairs held by the user and never stored on a centralised server. The underlying network runs on a dedicated BrightID Node infrastructure using a Byzantine fault-tolerant protocol, and graph-analysis algorithms run across these distributed nodes to produce verification level scores without any single node seeing the complete picture.
  - Applications register as "apps" in the BrightID ecosystem and can query the verification status of a user's identifier. This is privacy-preserving: the app learns only whether the user is verified (and at what level), not who their connections are. This design underpins its use in [[Decentralised Governance]], [[Token Distribution]], and [[Universal Basic Income]] experiments.

- ### Key Mechanisms
  - **Social Graph Construction**
    - Users install the BrightID mobile app and receive a unique [[Decentralised Identifier]] (a public key).
    - They attend verified connection parties — small video calls or in-person meetings — where participants mutually confirm each other's humanity.
    - Each mutual confirmation creates a weighted edge in the underlying [[Social Graph]].
  - **Graph Analysis Algorithms**
    - BrightID uses algorithms such as Assa (Average Shortest-path Sybil Analysis), Aura, and SocialRecovery to assign trust levels.
    - Assa detects Sybil clusters by measuring graph diameter and connectivity patterns that diverge from genuine social networks.
    - Aura propagates vouching scores from a set of highly trusted seed accounts, similar to a [[Web of Trust]] model derived from PGP key signing.
    - Nodes run these algorithms independently; verification levels are computed across the distributed node set using a consensus protocol.
  - **Verification Levels**
    - BrightID issues tiered verification: Bronze (basic connection), Silver (meets Assa threshold), Gold (meets Aura threshold).
    - Applications choose which level to require based on their security needs.
    - Verification is revocable — if a user's connections are subsequently found to be Sybil-linked, their score can be downgraded.
  - **Privacy Architecture**
    - No real name, email, phone number, or biometric data is ever collected.
    - Each app sees only an app-specific pseudonymous identifier derived from the user's key, preventing cross-app tracking.
    - Connection data is stored on BrightID nodes in an encrypted, distributed fashion.
    - Optional [[Zero-Knowledge Proof]] integrations allow apps to prove a claim (e.g. "user is unique") without revealing the underlying graph data.
  - **Node Infrastructure**
    - BrightID operates a network of community-run nodes.
    - Nodes communicate via a BFT protocol to reach consensus on the social graph state.
    - Any party can run a node; the network is permissionless at the node level while maintaining sybil-resistance at the user level.

- ### Applications and Use Cases
  - **[[Decentralised Governance]] and Voting**
    - [[Quadratic Voting]] schemes require exactly-one-human-one-account to prevent vote-buying amplification; BrightID uniqueness gates participation.
    - Platforms such as Gitcoin Grants use BrightID as one of several [[Sybil Resistance]] mechanisms to ensure matching funds are not captured by sock-puppet accounts.
  - **[[Token Distribution]] and Airdrops**
    - Projects distributing tokens via [[Airdrop]] to community members use BrightID to enforce one-claim-per-human, preventing bots from draining distribution pools.
    - [[Universal Basic Income]] experiments (e.g. the GoodDollar protocol and Circles UBI) rely on BrightID to verify that each claimant is a unique person.
  - **Anti-bot Gating for Decentralised Applications**
    - [[Decentralised Application]]s can require BrightID verification as a login prerequisite, reducing spam and abuse without password authentication.
    - DeFi protocols exploring fair participation (e.g. preventing whale concentration in DAO votes) gate participation with BrightID.
  - **[[Reputation System]] Bootstrapping**
    - Because BrightID proves uniqueness, it provides a foundation for reputation scores: each entity in the system is a confirmed human, so reputation cannot be multiplied by creating fake accounts.
    - Credentialing platforms use BrightID as a root-of-trust before issuing verifiable credentials for education, skills, or professional status.
  - **Cross-chain and Cross-platform Identity**
    - BrightID's open API allows any blockchain or web application to integrate; it is chain-agnostic and has been integrated with Ethereum, Gnosis Chain, and Near Protocol applications.

- ### Relationships
  - subClassOf:: [[Digital Identity]]
  - enables:: [[Sybil Resistance]]
  - enables:: [[Quadratic Voting]]
  - enables:: [[Universal Basic Income]]
  - enables:: [[Decentralised Governance]]
  - requires:: [[Social Graph]]
  - requires:: [[Peer-to-Peer Network]]
  - requires:: [[Public Key Cryptography]]
  - uses:: [[Graph Analysis]]
  - uses:: [[Zero-Knowledge Proof]]
  - uses:: [[Decentralised Application]]
  - contrastsWith:: [[Sybil Attack]]
  - contrastsWith:: [[Centralised Identity]]
  - contrastsWith:: [[Biometric Identity]]
  - relatedTo:: [[Self-Sovereign Identity]]
  - relatedTo:: [[Proof of Personhood]]
  - relatedTo:: [[Web of Trust]]
  - relatedTo:: [[Decentralised Identifier]]
  - relatedTo:: [[Token Distribution]]
  - relatedTo:: [[Airdrop]]
  - bridges-to:: [[Reputation System]]
  - bridges-to:: [[Federated Learning]]
  - bridges-to:: [[Privacy-Preserving Computation]]

- ### Comparison with Similar Systems
  - **vs [[Proof of Humanity]]**: Proof of Humanity requires video submission and on-chain challenge periods with token stakes; BrightID uses social graph topology and is fully off-chain for verification, making it lighter-weight but also less resistant to coordinated social fraud.
  - **vs [[Worldcoin]]**: Worldcoin uses an iris-scanning [[Biometric Identity]] device (the Orb) for uniqueness verification, offering higher assurance but requiring hardware access and collecting biometric data — a trade-off BrightID deliberately avoids.
  - **vs [[Web of Trust]] (PGP)**: PGP web of trust verifies key ownership, not personhood; BrightID specifically targets Sybil resistance for digital economy applications rather than cryptographic key authentication.
  - **vs [[Verifiable Credential]]s**: Verifiable Credentials are a container format for attestations; BrightID is a specific attestation (uniqueness) that can be packaged into a Verifiable Credential for interoperability with the [[W3C DID]] ecosystem.

- ### Standards and Context
  - BrightID interacts with the [[W3C DID]] (Decentralised Identifiers) specification as users hold DID-compatible key pairs.
  - The project is open-source and governed by a community DAO; its protocols are documented in open BrightID Improvement Proposals (BIPs).
  - It is aligned with the principles of the [[Self-Sovereign Identity]] movement, which emphasises user control and absence of centralised identity providers.
  - The broader field of [[Proof of Personhood]] is gaining regulatory and academic attention as a prerequisite for fair digital economies, positioning BrightID within an emerging governance standards conversation.
  - Connection to [[Decentralised Finance]] regulation: as regulators consider KYC/AML requirements for DeFi, privacy-preserving uniqueness proofs like BrightID represent an alternative compliance path that avoids full identity disclosure.

- ### Limitations and Criticisms
  - **Social collusion**: groups of real humans can agree to vouch for fake accounts, undermining graph-analysis assumptions. BrightID mitigates this with the Aura algorithm's seed-based propagation but cannot eliminate the risk entirely.
  - **Adoption bootstrap problem**: the system's security relies on density of genuine social connections; sparse graphs in new communities are easier to attack.
  - **Liveness and revocation latency**: updating verification status after a Sybil cluster is discovered can be slow if the cluster was deeply embedded in the graph.
  - **No biometric fallback**: the privacy-first design means there is no ground-truth check, unlike biometric systems, so the upper bound on Sybil resistance is lower.
  - **Mobile-only UX**: the primary interface is a mobile app, creating friction for users without smartphones and a barrier to wider adoption.

- ### Provenance
  - sources:: BrightID documentation (brightid.org), Gitcoin Passport integration docs, academic work on Sybil-resistant social graphs (Danezis & Mittal, SybilInfer), GoodDollar whitepaper, Circles UBI documentation
  - updated:: 2026-06-13
