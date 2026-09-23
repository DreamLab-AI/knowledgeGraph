
A trust registry is an authoritative, queryable record that lists which issuers, verifiers, and credential types are recognised as trustworthy within a given governance framework. It allows a relying party to programmatically determine whether a presented verifiable credential comes from an accredited source and remains valid. Trust registries underpin scalable decentralised identity ecosystems by providing the machine-readable basis for trust decisions.

- ### Overview
	- In a decentralised identity system, a verifier receiving a verifiable credential must answer two questions: is the signature valid, and is the issuer actually authorised to make this claim? Cryptography answers the first; the trust registry answers the second.
	- A trust registry publishes, in a standard interoperable format, which decentralised identifiers are authorised to issue or verify particular credential schemas, often with accreditation chains back to a root governance authority. Relying parties query it at verification time and may cache results.
	- Trust registries generalise the role historically played by a [[Certificate Authority]] in public-key infrastructure, but operate over decentralised identifiers and credential types rather than only X.509 certificates, and they encode governance rules explicitly.
- ### Key aspects
	- Lists authorised issuers and verifiers keyed by decentralised identifier and credential type.
	- Encodes accreditation chains rooted in a [[Trust Anchor]] and a governing authority.
	- Exposes a standard query and resolution interface for automated trust decisions.
	- Supports status, revocation, and authorisation scoping so trust can be narrowed or withdrawn.
	- Interoperates across ecosystems through shared registry protocols and governance documents.
- ### Applications
	- National and sectoral digital identity wallets verifying that a credential issuer is government-accredited.
	- Supply-chain and professional-qualification ecosystems confirming issuer legitimacy.
	- Cross-border verification where a relying party trusts a registry rather than each individual issuer.
	- Bridging legacy [[Certificate Authority]] trust into [[Self-Sovereign Identity]] deployments.
- ### Provenance

