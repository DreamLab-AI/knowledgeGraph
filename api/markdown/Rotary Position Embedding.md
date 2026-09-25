Rotary Position Embedding (RoPE) is a method for injecting positional information into transformer attention by rotating the query and key vectors by an angle proportional to each token's absolute position, so that their dot product depends only on relative position. Because the rotation is applied multiplicatively in feature pairs rather than added to the embeddings, RoPE unifies absolute and relative positional encoding while preserving the inner-product structure that attention relies on. It is the dominant positional scheme in modern large language models such as Llama, and its frequency basis can be rescaled to extrapolate context windows far beyond the training length.

### Overview

- Transformers are permutation-invariant by default, so position must be encoded explicitly. Earlier schemes either added fixed sinusoidal signals or learned absolute position embeddings, both added to the token representations.
- RoPE instead rotates pairs of features in the query and key vectors. Because a rotation by the difference of two positions falls out of the inner product, the resulting attention score depends only on the relative offset between tokens, giving relative-position behaviour through an absolute-position construction.
- This property preserves the linear structure attention relies on, integrates cleanly with optimised kernels, and degrades gracefully when sequences exceed the training length. Frequency rescaling techniques such as position interpolation and NTK-aware scaling extend the usable context window.

### Mechanisms

- Pairwise rotation of feature dimensions by a position-dependent angle.
- A geometric series of rotation frequencies spanning short to long wavelengths.
- Relative-offset dependence emerging from the inner product of rotated vectors.
- Frequency-base rescaling for context-length [[Extrapolation]].

### Applications

- Positional encoding in modern decoder-only [[Large Language Models]].
- Long-context model variants with extended windows.
- Multimodal and code models that inherit transformer attention.
- Efficient attention kernels that fold rotation into the dot product.

### Provenance

