- ### Definition
  - A method of securely sharing cryptographic keys using the principles of quantum mechanics, such that any eavesdropping disturbs the transmission and can be detected. It provides key exchange whose security rests on physics rather than computational hardness.

- ### Semantic Classification
  - owl-class:: cryptography:QuantumKeyDistribution
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Quantum Computation Paradigm]]
  - bridges-to:: [[Cryptography]]
  - requires:: [[Quantum Computation Paradigm]]
  - enables:: [[Post-Quantum Cryptography]]

- ### Content
  - Quantum key distribution lets two parties produce a shared secret key by sending quantum states such as polarised photons. Because measuring an unknown quantum state disturbs it, an eavesdropper introduces detectable errors.
  - The BB84 protocol, proposed by Charles Bennett and Gilles Brassard in 1984, is the best-known scheme. The technique secures key exchange but still relies on classical channels for the remainder of communication.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z