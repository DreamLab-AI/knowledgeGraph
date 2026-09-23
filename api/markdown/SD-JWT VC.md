
A verifiable credential format that uses Selective Disclosure JSON Web Tokens, allowing a holder to reveal only chosen claims to a verifier. It combines the JWT structure with salted hashes that support selective disclosure.

- ### Semantic Classification

- ### Content
  - SD-JWT VC builds on the Selective Disclosure JWT mechanism, where individual claims are hashed with salts so that a holder can present a subset of claims while the verifier can still check the issuer signature.
  - The format is used in digital identity wallets and credential ecosystems where minimising disclosure of personal data is a goal, and it is being standardised within the IETF and related credential frameworks.

- ### Provenance

