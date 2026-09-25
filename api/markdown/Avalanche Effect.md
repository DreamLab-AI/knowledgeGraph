The avalanche effect is a desirable property of cryptographic primitives whereby a tiny change in the input, such as flipping a single bit, produces an extensive, unpredictable change in the output, ideally altering about half of the output bits. In hash functions and ciphers it is the practical expression of diffusion, ensuring that outputs reveal no exploitable correlation with their inputs. A strong avalanche effect is essential for collision and preimage resistance and for resisting differential cryptanalysis.

### Overview

- The avalanche effect formalises the intuition that a good cryptographic transformation should scramble its input so thoroughly that outputs appear independent even for near-identical inputs. Flipping one input bit should, on average, flip half of the output bits, and which bits flip should be unpredictable. The strict avalanche criterion sharpens this: each output bit should change with probability one half whenever any single input bit is flipped. This behaviour is the observable consequence of diffusion in substitution-permutation networks and the compression rounds of hash functions. Without it, attackers could exploit correlations between inputs and outputs to mount differential attacks, find collisions, or invert the function, which is why the property is measured and tuned during primitive design.

### Mechanisms

- A single-bit input change flips roughly half the output bits.
- Strict avalanche criterion: each output bit flips with probability one half per input-bit change.
- Realised through diffusion across multiple rounds of mixing.
- Underpins collision resistance and resistance to differential cryptanalysis.
- Measured empirically as part of hash and cipher design.

### Applications

- Hash functions such as SHA-256 underpinning integrity checks.
- Block ciphers achieving diffusion across rounds.
- Blockchain proof and Merkle-tree integrity guarantees.
- Digital signatures and message authentication codes.

### Provenance

