A Nonce (Number used ONCE) is an arbitrary value included in a cryptographic computation to prevent replay attacks or to satisfy a target condition. In proof-of-work blockchains, miners increment a 32-bit nonce in the block header repeatedly until the SHA-256 hash of the header falls below the current difficulty target, thereby expending computational work proportional to the difficulty. In communications protocols, nonces ensure that each session or message produces a unique ciphertext, preventing an attacker from replaying a previously captured message.

A Nonce (Number used ONCE) is an arbitrary value included in a cryptographic computation to prevent replay attacks or to satisfy a target condition. In proof-of-work blockchains, miners iterate the nonce in the block header until the resulting hash falls below the difficulty target. In communications protocols, nonces prevent ciphertext replay.

### Content

In Bitcoin's block header, the nonce occupies a 32-bit field that miners increment from 0 to 2^32−1 searching for a header hash (double SHA-256) that starts with a sufficient number of leading zero bits as determined by the current difficulty target. A Bitcoin block header is only 80 bytes and is hashed approximately 10^18 times per second by the combined mining network, exhausting the 32-bit nonce space in microseconds. When nonce space is exhausted, miners modify the extraNonce field in the coinbase transaction—which changes the Merkle root in the header—effectively extending the search space beyond 32 bits.

In symmetric encryption and authenticated encryption schemes (AES-GCM, ChaCha20-Poly1305), a nonce is a unique value—typically 96 or 128 bits—that must never be reused with the same key. Nonce reuse in GCM is catastrophic: an attacker who observes two ciphertexts encrypted under the same key-nonce pair can recover the authentication key and forge arbitrary messages. Protocols that risk nonce collision under random generation use deterministic nonce generation (e.g. counter-based) or nonce misuse-resistant modes such as AES-GCM-SIV.

In challenge-response authentication, a verifier issues a fresh random nonce to a claimant, who must sign or hash it to prove possession of a private credential. The nonce's freshness prevents an adversary from replaying a previously recorded valid response to a different challenge session.

### Current Landscape (2026)

- In April 2025 Gilchrist et al. (arXiv:2504.13737) published the first closed-form ECDSA private-key recovery from just two signatures under a known affine nonce relationship (k2 = a·k1 + b), generalising classic nonce-reuse and requiring no lattice reduction or brute force even when both signatures are over the same message.
- A 2025 large-scale study ("Oops... I Reused my Nonce", University of Liège) confirmed active exploitation of ECDSA nonce reuse across Bitcoin, Bitcoin Cash, Litecoin, Dogecoin and Dash, recovering 3,620 private keys through both within-chain and cross-chain reuse, with an estimated potential loss of up to 101M EUR.
- CVE-2024-23688 disclosed AES/GCM nonce reuse in Consensys Discovery (versions before 0.4.5), which reused one session nonce for every message and exposed peer session keys; the wider ecosystem continues to push nonce-misuse-resistant AEADs such as AES-GCM-SIV to remove the reuse footgun at the algorithm level.
- Ethereum account abstraction hardened its "semi-abstracted" two-dimensional nonce (192-bit key plus 64-bit sequence) from ERC-4337 into ERC-7902 (multidimensional nonce capability, March 2025) and the native EIP-8130 (October 2025), which manages nonce state in a precompile and adds a nonce-free mode relying on short-lived expiry plus a signature-invariant replay identifier.
- A June 2025 disclosure (reported via HackenProof) showed the ERC-4337 spec under-specifies nonce scoping, letting wallets that use a custom hash and a globally shared nonce accept a signed UserOperation replayed across different EntryPoints; the Ethereum Foundation marked it out of scope, pushing responsibility onto wallet developers.
- On the web tier, CSP nonces remain a live attack surface: 2025 tooling and research (Invicti, Intigriti) continue to flag static, predictable (timestamp/user-agent-derived) or reused nonces that let attackers bypass strict-dynamic CSP via injected inline scripts, reinforcing per-response cryptographically random generation with 'strict-dynamic'.
- The unifying "Nonce@Once" framing that emerged through 2025 treats ECDSA key recovery, CSP bypass and EMV pre-play attacks as one vulnerability class, with prevention converging on secure CSPRNG generation, strict per-use enforcement (including type-system-level one-time-use guarantees) and eliminating any affine or correlated structure between nonces.

### References

- 1. Gilchrist, R. et al. (2025). Recovering the ECDSA Private Key from Two Signatures Under a Known Affine Nonce Relationship (arXiv:2504.13737). https://arxiv.org/pdf/2504.13737
- 2. University of Liège (2025). Oops... I Did It Again. I Reused my Nonce: Large-Scale ECDSA Nonce Reuse Across Blockchains. https://orbi.uliege.be/bitstream/2268/339407/1/paper.pdf
- 3. OffSeq / NVD (2026). CVE-2024-23688: Reusing a Nonce, Key Pair in Encryption (Consensys Discovery < 0.4.5, AES/GCM). https://radar.offseq.com/threat/cve-2024-23688-cwe-323-reusing-a-nonce-key-pair-in-2d663c4a
- 4. Ethereum (2025). EIP-8130: Account Abstraction by Account Configuration (precompile-managed 2D nonce, nonce-free mode). https://eips.ethereum.org/EIPS/eip-8130
- 5. Prince, P. (2025). Breaking the Illusion of Nonce Safety in ERC-4337: A Real-World Replay Attack Vector. https://medium.com/@princep49036142/title-breaking-the-illusion-of-nonce-safety-in-erc-4337-a-real-world-replay-attack-vector-911bad15de20
- 6. Intigriti (2025). Content Security Policy (CSP) Bypasses: Advanced Exploitation Guide. https://www.intigriti.com/researchers/blog/hacking-tools/content-security-policy-csp-bypasses

### Provenance

