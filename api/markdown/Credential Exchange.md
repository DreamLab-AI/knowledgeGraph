
Credential exchange is the protocol-governed flow by which verifiable credentials are issued to, held by and presented from a digital identity wallet to relying parties. It defines how issuers offer credentials, how holders store and selectively disclose them, and how verifiers request and validate proofs. It is a foundational interaction pattern of decentralised and self-sovereign identity systems.

- Credential exchange is the set of protocols and message flows that move [[Verifiable Credentials]] between issuers, holders and verifiers. It governs how a credential is offered and accepted, how a [[Digital Wallet]] stores it, and how a holder later presents proofs to a relying party.
- It underpins [[Self Sovereign Identity]] by letting individuals control which attributes they reveal, using [[Selective Disclosure]] and [[Decentralised Identifier]] mechanisms rather than centralised account federation.
- ### Overview
- The exchange has three roles: issuers who attest claims, holders who store credentials, and verifiers who request and check presentations.
- Issuance flows deliver a signed credential to the holder's wallet, anchored to the issuer's [[DID Document]].
- Presentation flows, often following a [[Presentation Exchange]] request, let the holder assemble and prove a subset of claims to a verifier.
- A [[Trust Framework]] establishes which issuers and schemas a verifier should accept, providing the governance layer above the cryptographic protocol.
- ### Mechanisms
- Credential offer and acceptance: issuer proposes, holder consents and receives the credential.
- Storage: the wallet retains credentials and associated keys under holder control.
- Proof request: verifier specifies required attributes and acceptable issuers.
- Selective disclosure: holder reveals only the requested attributes, optionally via [[Zero Knowledge Proof]] for predicates.
- Verification: verifier validates signatures, status and trust before granting access.
- ### Applications
- Digital identity wallets for travel, finance and government services.
- Privacy-preserving age and eligibility checks via selective disclosure.
- Cross-organisation [[Authentication]] without centralised identity providers.
- Reusable, portable credentials across relying parties.
- ### Provenance

