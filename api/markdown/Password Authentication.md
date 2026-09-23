
Password authentication is a knowledge-based method of verifying a user's identity by checking a secret string they supply against a stored credential. The stored credential is typically a salted cryptographic hash rather than the plaintext password, so that the secret is never recovered even if the store is compromised. As a single-factor mechanism it is widely deployed but vulnerable to guessing, reuse, phishing, and credential-stuffing attacks, motivating stronger or supplementary methods.

- ### Overview
  - A user registers a password, which the system transforms into a salted, slow cryptographic hash for storage.
  - At login, the supplied password is hashed with the same parameters and compared to the stored digest.
  - On success the system establishes an authenticated session via [[Session Management]].
  - Because it relies on a memorised secret, security depends heavily on password strength, storage hygiene, and rate limiting.
- ### Mechanisms
  - Password hashing with adaptive functions such as bcrypt, scrypt, Argon2, or PBKDF2.
  - Per-user random salts to defeat precomputed (rainbow table) attacks.
  - Work-factor tuning to slow brute-force guessing.
  - Rate limiting, lockouts, and breach-list checks to resist [[credential]]-stuffing.
- ### Key aspects
  - Knowledge factor: something the user knows, distinct from possession or inherence factors.
  - Storage: never store plaintext; store only salted, peppered hashes.
  - Attack surface: phishing, reuse, weak passwords, and database leaks.
  - Usability: balance memorability against entropy, often aided by password managers.
- ### Applications
  - Primary login for web, mobile, and desktop applications.
  - First factor combined with a token or biometric in [[Multi-Factor Authentication]].
  - Credential basis for federated [[Single Sign-On]] flows.
  - Underpins [[Access Control]] decisions once identity is established.
- ### Provenance

