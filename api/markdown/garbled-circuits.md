- ### Definition
  - [[Garbled Circuits]] is a foundational [[Cryptographic Primitive]] enabling two-party secure function evaluation, invented by Andrew Yao, wherein a Boolean circuit is encrypted gate-by-gate so that the evaluator computes the output without learning any intermediate wire values.
  - The protocol depends critically on [[Oblivious Transfer]] to deliver input wire labels to the evaluator without revealing the garbler's input choice.
  - It is contrasted with [[Homomorphic Encryption]], which supports computation over encrypted data without the interactive two-party structure.

- ### Overview
  - Garbled circuits were the first general solution to the two-party secure computation problem ("Yao's millionaires' problem").
  - Practical performance has improved by multiple orders of magnitude through Free XOR (halving XOR gate cost), Half Gates (two rows per AND gate), and Three Halves (1.5 rows per AND gate) optimisations.
  - Modern frameworks — EMP-toolkit, SCALE-MAMBA, ABY — implement garbled circuits alongside secret sharing for hybrid [[Multi-Party Computation]].

- ### Key aspects
  - **Garbling scheme**: probabilistic encoding mapping each Boolean wire to two semantically secure labels.
  - **Gate garbling**: four ciphertexts per AND gate (or zero for XOR under Free XOR); evaluation decrypts exactly one.
  - **[[Oblivious Transfer]] extension**: reduces the cost of transferring input labels from O(n) public-key ops to O(n) symmetric-key ops.
  - **Circuit optimisation**: standardised circuit representation (Bristol Fashion) enables compiler-level gate minimisation.
  - **Composability**: garbled circuits can be composed with arithmetic secret sharing for mixed-protocol computation.

- ### Mechanisms
  - The garbler assigns two random labels (W₀, W₁) to each wire, encoding the 0 and 1 values.
  - For each gate, four ciphertexts are produced by double-encrypting the output label using the input wire labels as keys.
  - The evaluator, holding one label per input wire via [[Oblivious Transfer]], decrypts exactly one ciphertext per gate following the circuit topology.
  - Output labels are revealed to the evaluator by the garbler only after evaluation completes.

- ### Applications
  - Privacy-preserving biometric matching (fingerprint, iris) where templates stay encrypted.
  - [[Privacy-Preserving Machine Learning]] inference on sensitive client inputs without exposing model weights.
  - Secure auctions and tender submissions where bids remain private until the closing moment.
  - Financial benchmarking allowing banks to compute aggregate statistics without revealing individual positions.

- ### Relationships
  - uses:: [[Oblivious Transfer]], [[Cryptographic Protocol]], [[Cryptographic Commitment]]
  - implements:: [[Multi-Party Computation]], [[Privacy-Preserving Computation]]
  - hasPart:: [[Oblivious Transfer]], [[Cryptographic Primitive]]
  - enables:: [[Secure Data Sharing]], [[Privacy-Preserving Machine Learning]]
  - dependsOn:: [[Cryptographic Hash Function]], [[Cryptographic Key]]
  - contrastsWith:: [[Homomorphic Encryption]], [[Zero-Knowledge Proof]]
  - relatedTo:: [[Cryptographic Protocol]], [[Secure Aggregation]]
  - supports:: [[Privacy Preserving Analytics]]
  - bridgesTo:: [[Homomorphic Encryption for Machine Learning]]

- ### Provenance
  - updated:: 2026-06-15