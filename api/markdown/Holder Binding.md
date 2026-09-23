
Holder binding is the cryptographic mechanism that ties a verifiable credential to the legitimate holder's controlled key material, ensuring that only the entity to whom a credential was issued can present it. It prevents credential theft and replay by requiring the presenter to prove possession of a private key bound to the credential at presentation time. Common realisations include key binding in SD-JWT and proof-of-possession challenges during presentation exchange.

- ### Overview
  - In decentralised identity systems, a credential is issued to a subject but must later be presented by that subject without impersonation. Holder binding closes the gap between issuance and presentation by demanding cryptographic proof that the presenter controls a key the credential was bound to.
  - It is central to standards such as SD-JWT key binding and OpenID for Verifiable Presentations, where a holder signs a presentation challenge nonce to demonstrate possession.
- ### Mechanisms
  - Key binding: embedding a public key (cnf claim) in the credential, with the holder proving possession of the matching private key.
  - Proof of possession: a fresh signed challenge (nonce + audience) produced at presentation to prevent replay.
  - Biometric or device binding: anchoring the holder key in secure hardware or a wallet enclave.
- ### Applications
  - Wallet-based credential presentation for digital identity, age verification and qualification proofs.
  - Anti-fraud controls preventing stolen or shared credentials from being usable by non-holders.
  - Regulated KYC and access flows requiring assurance that the presenter is the rightful subject.
- ### Provenance

