
A one-way function is a function that is easy to compute on any input but computationally infeasible to invert, meaning that recovering the input from a typical output is practically impossible with available resources. One-way functions are a foundational primitive of modern cryptography, underpinning hashing, password storage, and the trapdoor constructions used in public-key schemes. Their existence is conjectured rather than proven, and it is closely tied to open questions in computational complexity.

- A one-way function is easy to evaluate forwards but computationally infeasible to invert, a property at the heart of [[Cryptography]].
- It is the primitive behind a [[Cryptographic Hash Function]], password storage, and the trapdoor constructions of [[Public-Key Cryptography]].
- Its core security guarantee is [[Preimage Resistance]]: given an output, no efficient method recovers a matching input.
- ### Overview
- One-way functions formalise the asymmetry that makes cryptography possible, where the legitimate direction is cheap and the adversarial direction is prohibitively expensive.
- Their existence is conjectured but unproven, and it would imply that certain hard problems remain intractable, linking cryptography to open questions in computational complexity.
- Candidate constructions draw on number-theoretic problems such as factoring and discrete logarithms, and on the diffusion properties of hash functions.
- A trapdoor variant adds secret information that makes inversion easy for an authorised party, which is what distinguishes public-key encryption from plain hashing.
- ### Mechanisms
- Forward ease — efficient computation of the output for any input.
- Inversion hardness — no feasible algorithm to recover inputs from outputs.
- Preimage and collision resistance — strengthened properties for cryptographic hashes.
- Trapdoor extension — optional secret enabling authorised inversion.
- Complexity grounding — security tied to conjectured intractable problems.
- ### Applications
- Hashing passwords so stored values cannot be reversed to plaintext.
- Building digital signatures and public-key encryption.
- Securing blockchain proof-of-work and commitment schemes.
- Deriving keys and pseudorandom values from secrets.
- ### Provenance

