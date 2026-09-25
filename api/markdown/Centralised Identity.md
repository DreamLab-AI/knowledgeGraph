Centralised identity is a digital identity model in which a single authority — such as a government, enterprise, or platform identity provider — issues, stores, and controls users' identity credentials and authenticates them on behalf of relying parties. Users authenticate against the central provider, which holds the authoritative record of their attributes and mediates access to connected services. The model is operationally simple and widely deployed, but concentrates control, data, and risk in one party, creating single points of failure, surveillance potential, and vendor lock-in that decentralised and self-sovereign identity approaches are designed to counter.

### Overview

- Centralised identity is the dominant model on the consumer and enterprise web, exemplified by corporate directories, government identity systems, and social login from large platforms.
- A single authority maintains the authoritative account record and mediates every authentication, simplifying administration and account recovery.
- The model underpins federated arrangements where a central provider vouches for a user across many relying parties, reducing credential sprawl.
- Its concentration of control is also its principal weakness: breaches, outages, censorship, and surveillance all scale with the centrality of the provider.

### Key aspects

#### Provider control

- The [[Identity Provider]] owns the credential lifecycle — issuance, rotation, suspension, and revocation — and holds the canonical attribute store.

#### Authentication flow

- Users prove identity to the central provider, which then issues tokens or assertions consumed by relying parties via [[OAuth]]/OIDC or SAML.

#### Single sign-on

- One authentication grants access to many connected services, the chief usability advantage of the centralised model.

#### Trust concentration

- All relying parties extend trust to one authority, making it both a convenience and a single point of failure.

### Mechanisms

#### Directory and account store

- A central directory (e.g. an enterprise IdP or platform account system) holds identities, groups, and entitlements feeding [[Access Control]].

#### Token issuance

- On successful [[Authentication]] the provider mints signed assertions that relying parties validate without contacting the user store directly.

#### Federation

- Trust agreements let the central provider extend [[Federated Identity]] across organisational boundaries.

### Applications

- **Enterprise SSO** — corporate identity providers grant employees one credential across internal and SaaS applications.
- **Social login** — large platforms act as central providers for third-party sites via OAuth/OIDC.
- **Government digital identity** — national identity schemes centrally issue and verify citizen credentials for public services.
- **Consumer platform accounts** — a single platform account governs access to its ecosystem of services.
- **Comparison baseline** — centralised identity is the reference point against which [[Verifiable Credentials]] and decentralised models articulate their privacy and resilience benefits.

### Provenance

