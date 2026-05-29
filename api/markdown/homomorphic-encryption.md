- ### Definition
  - Homomorphic encryption is a cryptographic scheme that allows arithmetic and logical operations to be performed directly on ciphertext, producing an encrypted result that decrypts to the same value as if the operations had been applied to the plaintext. Fully homomorphic encryption (FHE) supports arbitrary computation over encrypted data, enabling cloud services to process sensitive inputs without ever decrypting them. It sits at the intersection of cryptography and privacy-preserving technology, with practical schemes including BGV, BFV, CKKS, and TFHE.

- ### Semantic Classification
  - owl-class:: homomorphic-encryption:Homomorphic Encryption
  - owl-role:: Concept

- ### Relationships
  - enables [[Privacy Preserving Technology]]
  - enables [[Federated Learning]]
  - relatedTo [[Zero-Knowledge Proof]]
  - relatedTo [[Homomorphic Encryption for Machine Learning]]
  - contrastsWith [[Differential Privacy]]

- ### Content
  - Homomorphic encryption (HE) is one of the most powerful primitives in modern cryptography, permitting a third party — such as a cloud compute provider — to evaluate functions over encrypted data and return an encrypted result, with the data owner being the only party able to decrypt. The theoretical possibility was established by Craig Gentry in 2009 with the first FHE construction based on ideal lattices; subsequent work has yielded more practical schemes, including BGV and BFV for integer arithmetic, CKKS for approximate arithmetic on real numbers (suited to machine learning inference), and TFHE for fast bootstrapped binary gates.
  - In practice, HE carries a significant computational overhead compared to plaintext computation, often several orders of magnitude, but hardware acceleration and algorithmic improvements are closing the gap. Partial and levelled homomorphic schemes allow only a bounded number of operations and are more efficient, finding use in privacy-preserving analytics, secure genome processing, and encrypted neural network inference. The Microsoft SEAL and OpenFHE libraries are widely used open-source implementations.
  - Within the broader privacy-preserving technology landscape, homomorphic encryption is complementary to zero-knowledge proofs, which prove properties of data without revealing it, and to differential privacy, which injects statistical noise rather than encrypting. Federated learning often combines HE with secure aggregation to prevent the server from inspecting individual model updates. Standardisation efforts are coordinated through the HomomorphicEncryption.org consortium and the ISO/IEC JTC 1/SC 27 working groups on cryptographic techniques.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z