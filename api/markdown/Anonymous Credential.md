An anonymous credential is a cryptographic attestation that lets a holder prove possession of certified attributes to a verifier without revealing their identity or allowing their presentations to be linked. Built on techniques such as blind signatures and zero-knowledge proofs, it supports selective disclosure of individual attributes while keeping the rest private. Anonymous credentials are a core privacy-enhancing primitive for authentication and access control.

### Overview

- Issuers certify attributes to a holder; the holder later proves statements about those attributes to verifiers without exposing the underlying certificate.
- Constructions typically combine blind or randomisable signatures (such as CL, BBS, or BBS+ signatures) with [[Zero-Knowledge Proof]] techniques.
- Unlinkability ensures that multiple uses of the same credential cannot be correlated, and selective disclosure reveals only the attributes a context requires.
- Optional accountability features, such as revocation and conditional de-anonymisation, balance privacy against abuse prevention.

### Mechanisms

- Issuance: an issuer blind-signs the holder's attributes, producing a credential the issuer never sees in full.
- Presentation: the holder generates a zero-knowledge proof attesting to a predicate over the attributes.
- Selective disclosure: only chosen attributes (or derived predicates such as age over 18) are revealed.
- Revocation: accumulators or status lists let verifiers check that a credential is still valid without identifying the holder.

### Applications

- Privacy-preserving login and access control without trackable identifiers.
- Age or eligibility verification revealing only the necessary predicate.
- Self-sovereign and decentralised identity wallets issuing and presenting credentials.

### Provenance

