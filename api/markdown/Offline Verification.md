
Offline verification is the ability to cryptographically validate a credential or claim without requiring a live connection to the issuer or a central server. The verifier checks digital signatures against the issuer's public key and any revocation data already held, confirming authenticity and integrity locally. It is a defining property of decentralised identity, enabling trust in low-connectivity or privacy-sensitive settings.

- ### Content
  - Because the verifier checks the issuer's signature against a known public key, no callback to the issuer is needed, which improves privacy by avoiding issuer awareness of each verification. The main challenge is revocation: offline checks rely on cached status lists or cryptographic accumulators, trading immediacy of revocation information for connectivity independence.

