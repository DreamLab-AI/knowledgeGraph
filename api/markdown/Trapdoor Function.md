
A trapdoor function is a one-way function that is easy to compute in the forward direction but computationally infeasible to invert, except for a party holding a secret piece of information called the trapdoor. This asymmetry between forward computation and inversion underpins public-key cryptography, where the public key enables encryption or verification and the private trapdoor enables decryption or signing. Candidate trapdoor functions rest on conjectured hard problems such as integer factorisation and the discrete logarithm.

- A [[Trapdoor Function]] is a one-way function that is easy to evaluate forward but infeasible to invert without a secret trapdoor.
- It is the foundational [[Cryptographic Primitive]] of [[Public-Key Cryptography]] and [[Asymmetric Encryption]].
- Its security rests on conjectured hard problems studied in [[Cryptography]].
- ### Overview
- A trapdoor function combines two properties: it is efficiently computable in the forward direction for everyone, yet inverting it is believed to be computationally infeasible unless one holds an additional secret. That secret, the trapdoor, makes inversion easy for its possessor, creating the asymmetry that public-key schemes exploit.
- The classic example is the function behind RSA, where multiplying two large primes is easy but recovering the factors from the product is hard; knowledge of the primes serves as the trapdoor. Other constructions rely on the difficulty of the discrete logarithm in finite groups or on elliptic curves.
- Trapdoor functions are distinct from plain one-way functions, which have no inversion shortcut at all, and from hash functions, which are deliberately not invertible by anyone. The trapdoor is precisely what lets a key holder reverse the operation, enabling decryption and signing.
- ### Mechanisms
- Forward direction: anyone can apply the function using the public key or public parameters.
- Hard inversion: without the trapdoor, reversing the function reduces to a presumed-intractable problem.
- Secret trapdoor: the private key encodes structure that makes inversion tractable.
- Hardness assumptions: security depends on problems such as integer factorisation and discrete logarithms remaining hard.
- Key generation: the trapdoor and its public counterpart are produced together during setup.
- ### Applications
- Underpinning [[RSA]] encryption and [[Digital Signature]] schemes.
- Realising [[Asymmetric Encryption]] and [[Encryption]] where public and private operations differ.
- Supporting [[Key Exchange]] protocols built on [[Elliptic Curve Cryptography]].
- Providing structure used in advanced protocols such as [[Zero-Knowledge Proof]] systems.
- ### Provenance

