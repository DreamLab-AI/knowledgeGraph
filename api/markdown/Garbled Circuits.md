
Garbled Circuits is a cryptographic technique, introduced by Yao in 1986, that enables two-party secure computation by encoding a Boolean circuit such that one party (the garbler) produces an encrypted representation of the circuit and the other party (the evaluator) can compute the output without learning the garbler's private inputs. Each gate of the circuit is replaced by a garbled truth table consisting of four ciphertexts, and the evaluator decrypts exactly one row per gate using wire labels obtained through [[Oblivious Transfer]]. Modern optimisations — including Free XOR, Half Gates, and Three Halves — reduce the communication and computation overhead to practical levels. Garbled circuits are foundational to general-purpose [[Multi-Party Computation]] and form the basis of many practical secure function evaluation protocols.

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

- ### Provenance

