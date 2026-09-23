
Blockchain Identity is an approach to digital identity in which identifiers, credentials and attestations are anchored to a distributed ledger rather than a single central authority. It gives users cryptographic control over their identity through key pairs, enables verifiable claims that any party can check against on-chain or anchored data, and underpins self-sovereign identity models. By decentralising the registry of identifiers, it reduces reliance on intermediaries and supports portable, tamper-evident identity across services.

- ### Overview
	- Conventional identity systems store identity records in centralised databases controlled by a provider, which creates honeypots for attackers and forces users to trust intermediaries.
	- Blockchain Identity inverts this: the ledger holds only resolvable pointers and cryptographic proofs, while the actual credential data is held by the holder in a wallet.
	- An identifier is typically a [[Decentralized Identifier]] (DID) whose method describes how it is created, resolved and updated against a ledger or anchoring layer.
	- Issuers sign [[Verifiable Credentials]] that holders present to verifiers; the verifier checks signatures against the issuer's published keys without contacting the issuer.
	- This separation of issuance, holding and verification is the defining architectural pattern of the approach.
- ### Key aspects
	- Cryptographic control: identity is bound to private keys the user holds, not to an account a provider can revoke unilaterally.
	- Anchoring: identifiers and key states are anchored to a ledger so updates and revocations are auditable and tamper-evident.
	- Selective disclosure: [[Zero-Knowledge Proof]] techniques let holders prove attributes (e.g. age over 18) without revealing underlying data, strengthening [[Privacy]].
	- Interoperability: standardised DID and credential formats allow identities to move across services and ecosystems.
	- Recovery and key rotation: methods exist for rotating compromised keys and recovering control, a recognised usability challenge.
- ### Applications
	- Passwordless [[Authentication]] and [[Single Sign-On]] where a wallet replaces username/password flows.
	- Know-your-customer and reusable onboarding where verified credentials are presented once and reused.
	- Access control for decentralised applications, where on-chain identity gates permissions via [[Smart Contract]] logic.
	- Supply-chain and academic credentialing, where tamper-evident attestations follow goods or graduates.
	- Cross-border identity aligned with frameworks such as eIDAS-style trust services.
- ### Provenance

