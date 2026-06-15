- ### Definition
  - Centralised identity is a digital identity model in which a single [[Identity Provider]] issues, stores, and controls user credentials and performs [[Authentication]] on behalf of relying parties. It typically delivers [[Single Sign-On]] and [[Access Control]] through protocols such as [[OAuth]] and OpenID Connect. It is a long-established form of [[Identity Management]] and stands in deliberate contrast to [[Decentralised Identity]] and [[Self-Sovereign Identity]] models that return control to the user.

- ### Overview
  - Centralised identity is the dominant model on the consumer and enterprise web, exemplified by corporate directories, government identity systems, and social login from large platforms.
  - A single authority maintains the authoritative account record and mediates every authentication, simplifying administration and account recovery.
  - The model underpins federated arrangements where a central provider vouches for a user across many relying parties, reducing credential sprawl.
  - Its concentration of control is also its principal weakness: breaches, outages, censorship, and surveillance all scale with the centrality of the provider.

- ### Key aspects
  - #### Provider control
    - The [[Identity Provider]] owns the credential lifecycle — issuance, rotation, suspension, and revocation — and holds the canonical attribute store.
  - #### Authentication flow
    - Users prove identity to the central provider, which then issues tokens or assertions consumed by relying parties via [[OAuth]]/OIDC or SAML.
  - #### Single sign-on
    - One authentication grants access to many connected services, the chief usability advantage of the centralised model.
  - #### Trust concentration
    - All relying parties extend trust to one authority, making it both a convenience and a single point of failure.

- ### Mechanisms
  - #### Directory and account store
    - A central directory (e.g. an enterprise IdP or platform account system) holds identities, groups, and entitlements feeding [[Access Control]].
  - #### Token issuance
    - On successful [[Authentication]] the provider mints signed assertions that relying parties validate without contacting the user store directly.
  - #### Federation
    - Trust agreements let the central provider extend [[Federated Identity]] across organisational boundaries.

- ### Applications
  - **Enterprise SSO** — corporate identity providers grant employees one credential across internal and SaaS applications.
  - **Social login** — large platforms act as central providers for third-party sites via OAuth/OIDC.
  - **Government digital identity** — national identity schemes centrally issue and verify citizen credentials for public services.
  - **Consumer platform accounts** — a single platform account governs access to its ecosystem of services.
  - **Comparison baseline** — centralised identity is the reference point against which [[Verifiable Credentials]] and decentralised models articulate their privacy and resilience benefits.

- ### Relationships
  - hasPart:: [[Identity Provider]]
  - hasPart:: [[Authentication]]
  - uses:: [[Single Sign-On]]
  - uses:: [[OAuth]]
  - uses:: [[Access Control]]
  - enables:: [[Federated Identity]]
  - requires:: [[Identity Provider]]
  - contrastsWith:: [[Decentralised Identity]]
  - contrastsWith:: [[Self-Sovereign Identity]]
  - relatedTo:: [[Digital Identity]]
  - relatedTo:: [[Identity Management]]
  - supports:: [[Access Control]]
  - bridgesTo:: [[Verifiable Credentials]]
  - dependsOn:: [[Authentication]]

- ### Provenance
  - sources:: NIST SP 800-63 Digital Identity Guidelines; OpenID Connect Core specification; W3C Decentralized Identifiers (DID) context for contrast
  - updated:: 2026-06-15