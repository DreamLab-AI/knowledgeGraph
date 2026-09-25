Belief propagation is a message-passing algorithm for performing inference on graphical models by iteratively exchanging local messages between nodes representing variables and the factors that relate them. On tree-structured graphs it computes exact marginal distributions; on graphs with cycles, loopy belief propagation provides an approximate inference scheme that often works well in practice. It is the basis of efficient decoding for modern error-correcting codes and of probabilistic reasoning over structured domains.

### Overview

- Each node sends a summary of its current belief to neighbours, who fold it into their own estimate.
- After convergence the product of incoming messages yields the marginal distribution at each variable.
- The algorithm is also called the sum-product algorithm when computing marginals and max-product for most-probable explanations.
- Loopy belief propagation runs the same updates on cyclic graphs, accepting approximation for tractability.

### Mechanisms

- Variable-to-factor messages collect beliefs from all other connected factors.
- Factor-to-variable messages marginalise the local factor over its other arguments.
- Scheduling and damping control convergence behaviour on cyclic structures.
- Normalisation keeps messages numerically stable across iterations.

### Applications

- Decoding low-density parity-check and turbo [[Error Correcting Code]] families near channel capacity.
- [[Probabilistic Inference]] over [[Probabilistic Model]] structures in vision and language.
- [[Probabilistic Reasoning]] in sensor fusion and constraint networks.
- Approximate marginal computation where exact [[Inference]] is intractable.

### Provenance

