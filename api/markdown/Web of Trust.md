
A web of trust is a decentralised trust model in which participants vouch for the authenticity of one another's public keys by signing them, building confidence through chains of peer endorsements rather than a central authority. Trust is transitive and weighted: a key gains credibility as more trusted parties attest to it. Originating with PGP, the model contrasts with the hierarchical certificate-authority approach of public-key infrastructure.

- ### Overview
  - Trust accumulates transitively as more trusted parties attest to a key.
  - There is no single point of failure or central authority to compromise.
  - PGP popularised the model for email and file signing.
  - Concepts re-emerge in decentralised identity and verifiable credentials.
- ### Mechanisms
  - Each user maintains a keyring of others' public keys.
  - Signing another's key publishes an attestation of belief in its ownership.
  - Trust levels and chain length determine computed confidence.
  - Key servers and introducers help propagate signatures.
- ### Applications
  - Authenticating PGP/GPG public keys for secure messaging.
  - Bootstrapping trust in decentralised identity systems.
  - Reputation and endorsement networks.
- ### Provenance

