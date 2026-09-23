
A trust model is a formal description of which entities are trusted, for what, and on what basis within a security or identity system. It defines the roots of trust, the relationships through which trust is delegated or transitively established, and the assumptions an adversary cannot violate. Trust models range from centralised certificate hierarchies to decentralised webs of trust and zero-trust architectures, and they directly shape how authentication and authorisation are designed.

- A trust model describes which entities are trusted, for what, and on what basis. It fixes [[Trust Anchor]] roots and delegation rules, implementing [[Trust Establishment]] to support [[Authentication]] and [[Authorisation]]; contrast the [[Web of Trust]] with centralised hierarchies.
- ### Overview
- Every security system rests on assumptions about who can be believed; the trust model makes those assumptions explicit so they can be reasoned about and defended.
- It specifies roots of trust and the relationships through which trust propagates, whether by certificate hierarchy, peer endorsement or continuous verification.
- The choice of trust model determines how authentication, authorisation and revocation are designed, and what an adversary must compromise to break the system.
- ### Mechanisms
- Roots and anchors: the entities trusted without further proof.
- Delegation and transitivity: how trust extends beyond the roots.
- Verification: proofs checked against the model's assumptions.
- Revocation: withdrawing trust when assumptions fail.
- ### Applications
- Public-key infrastructures and certificate hierarchies.
- Decentralised identity and web-of-trust systems.
- Zero-trust architectures that verify continuously.
- ### Provenance

