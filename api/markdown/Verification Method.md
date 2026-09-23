
A verification method is an entry in a decentralised identifier document that specifies the cryptographic material and parameters used to authenticate or authorise actions on behalf of the identifier subject. It typically expresses a public key, key type and controller, and is referenced by verification relationships such as authentication, assertion and key agreement. Verification methods are the mechanism by which proofs presented by a subject are checked against the published DID document.

- A verification method is a [[DID Document]] entry declaring the [[Cryptographic Key]] material used to authenticate a subject. It carries a [[Public Key]] and is referenced by relationships such as [[Authentication]] to validate a [[Digital Signature]].
- ### Overview
- Decentralised identifiers separate the identifier from the keys that control it; verification methods are the named, published bindings between the two.
- A DID document can list multiple verification methods, each with a distinct key type and purpose, allowing rotation and separation of authentication from assertion or key agreement.
- Verifiers resolve the DID, retrieve the relevant verification method and check a presented proof against the declared key material.
- ### Mechanisms
- Key declaration: public key, key type and controller embedded in the DID document.
- Verification relationships: authentication, assertionMethod, keyAgreement and others reference methods by id.
- Proof checking: signatures and credential proofs validated against the referenced key.
- Rotation: outdated methods removed and replaced without changing the identifier.
- ### Applications
- Authenticating control of a decentralised identifier.
- Verifying verifiable credentials and presentations.
- Establishing secure channels via key agreement.
- ### Provenance

