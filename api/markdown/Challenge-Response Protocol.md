
A challenge-response protocol is an authentication protocol in which a verifier issues an unpredictable challenge and the claimant must return a response computed from a shared secret or private key, proving knowledge of the credential without transmitting it. Because each challenge is fresh, typically a random nonce, a valid response cannot be reused, defeating replay attacks. The pattern underpins many authentication mechanisms including CHAP, HMAC-based schemes, and public-key signature challenges.

- ### Overview
	- The verifier generates an unpredictable challenge; the claimant transforms it using a shared key or private key and returns the result.
	- The verifier recomputes or verifies the expected response and grants access only on a match.
	- Because the secret never traverses the channel and the challenge changes each time, eavesdroppers cannot replay captured exchanges.
- ### Mechanisms
	- Symmetric variants use a keyed hash or MAC over the challenge (e.g. CHAP, HMAC challenges).
	- Asymmetric variants ask the claimant to sign the challenge with a private key, verified against a public key ([[Digital Signature]]).
	- A nonce, timestamp, or counter guarantees challenge freshness and supports [[Mutual Authentication]] when both parties challenge each other.
- ### Applications
	- Network access authentication (CHAP, EAP).
	- Smart-card, FIDO, and hardware-token verification.
	- Underlying step in [[Passwordless Authentication]] flows.
- ### Provenance

