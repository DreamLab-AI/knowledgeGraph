Password hashing is the practice of transforming user passwords into fixed-length irreversible digests before storage, so that a breach of the credential store does not directly reveal the underlying secrets. Secure schemes deliberately use slow, memory-hard functions combined with a unique per-user salt to defeat precomputation and brute-force attacks. Established algorithms such as Argon2, scrypt, bcrypt and PBKDF2 expose tunable cost parameters that can be raised as hardware improves. Password hashing is a specialised application of key derivation functions oriented towards verifying human-chosen secrets.

- [[Password Hashing]] converts a user's password into an irreversible digest for storage, so that compromise of the credential database does not expose the plaintext secrets.
- It is a specialised form of [[Key Derivation Function]] built on a [[Cryptographic Hash Function]] and depends on per-user randomness from [[Random Number Generation]].
- Secure schemes are deliberately slow and memory-hard to make brute-force and precomputation attacks costly, supporting [[Authentication]].

### Overview

- Storing passwords in plaintext or under fast general-purpose hashes is dangerous because attackers can mount dictionary, brute-force and rainbow-table attacks after a breach.
- Password hashing instead applies slow, parameterised functions whose cost can be tuned upward over time to track advances in attacker hardware.
- A unique random salt is concatenated with each password before hashing, ensuring identical passwords produce distinct digests and defeating precomputed tables.
- Verification re-derives the digest from a submitted password and compares it, never recovering or storing the original secret.

### Mechanisms

- Salting introduces per-user entropy so that precomputation cannot be amortised across accounts.
- Work factors, memory cost and parallelism parameters make each guess expensive, throttling offline attacks.
- Memory-hard designs such as Argon2 and scrypt resist acceleration on GPUs and custom hardware by demanding large working memory.
- PBKDF2 and bcrypt remain widely deployed, iterating a pseudorandom function many times to raise the cost per guess.

### Applications

- Protecting stored credentials in web and enterprise authentication systems.
- Underpinning login flows and authentication protocols against offline cracking.
- Deriving encryption keys from human-memorable passphrases for at-rest data protection.
- Hardening single-sign-on and identity platforms against credential-stuffing fallout.

### Provenance

