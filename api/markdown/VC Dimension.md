
The Vapnik-Chervonenkis (VC) dimension is a measure of the capacity of a hypothesis class, defined as the size of the largest set of points that the class can shatter — classify correctly under every possible binary labelling. Introduced by Vapnik and Chervonenkis in 1971, it yields distribution-free generalisation bounds in statistical learning theory: a finite VC dimension guarantees that empirical risk converges uniformly to true risk as sample size grows, linking model complexity to the amount of data needed to learn reliably.

- ### Semantic Classification

- ### Content

  ## Definition

  The **Vapnik-Chervonenkis dimension** formalises the intuitive notion of a model family's expressive power. A hypothesis class H *shatters* a set of points if, for every one of the 2^n possible ways of labelling those n points with two classes, some hypothesis in H realises that labelling exactly. The VC dimension of H is the size of the largest point set it can shatter. Linear classifiers (with bias) in the plane have VC dimension 3: any three points in general position can be shattered, but no arrangement of four can — the XOR labelling defeats every line. More generally, linear classifiers in d dimensions have VC dimension d + 1.

  The measure earns its central place in [[Statistical Learning Theory]] through the fundamental theorem of PAC learning: a binary hypothesis class is learnable if and only if its VC dimension is finite, and the number of samples needed to guarantee generalisation scales linearly with it. The classical bound states that with probability at least 1 − δ, true risk exceeds empirical risk by at most a term of order √((d·log(n/d) + log(1/δ))/n) for VC dimension d and sample size n. This makes precise the connection between capacity and [[Overfitting]]: a class rich enough to shatter the training set can fit noise perfectly while learning nothing, the capacity-side expression of the [[Bias-Variance Tradeoff]]. The Sauer-Shelah lemma supplies the combinatorial engine, showing that a class of VC dimension d can realise only O(n^d) distinct labellings of n points — polynomial, not exponential, growth.

  VC theory also underpins structural risk minimisation, the principle behind support vector machines: choose from a nested sequence of hypothesis classes the one that best trades empirical fit against capacity. Its limits are equally instructive. Modern deep networks have enormous (roughly weight-count-scale) VC dimensions yet generalise well when trained on far fewer examples than the bounds require — a gap that motivated refined capacity measures (Rademacher complexity, margin and norm-based bounds, PAC-Bayes) and the ongoing study of implicit regularisation and benign overfitting.

  ## Technical Details

  - **Definition**: VCdim(H) = max{n : some set of n points is shattered by H}; infinite if arbitrarily large sets can be shattered.
  - **Worked examples**: intervals on the line, d = 2; axis-aligned rectangles in the plane, d = 4; linear halfspaces in ℝ^d, d + 1; sine-wave classifiers sign(sin(ωx)), infinite despite one parameter — capacity is not parameter count.
  - **Sauer-Shelah lemma**: the growth function satisfies Π_H(n) ≤ Σ_{i=0}^{d} C(n, i) = O(n^d) for finite VC dimension d.
  - **Successors**: Rademacher complexity gives data-dependent (often tighter) bounds; the Natarajan dimension (and its generalisation, the DS dimension) extends the theory to multiclass problems; fat-shattering dimension and Pollard's pseudo-dimension cover real-valued functions.

  ## Current Landscape

  - The core theory is stable and foundational: VC dimension is the cardinality of the largest point set a hypothesis class can shatter, and finiteness is equivalent to PAC-learnability, with linear classifiers in R^d having VC dimension d+1 (Wikipedia, *Vapnik–Chervonenkis dimension*; university course notes, 2025).
  - The classical VC bound is essentially inert for modern deep networks: fully-connected ReLU nets have VC dimension roughly on the order of their parameter count (Bartlett et al., 2017), so the bound exceeds 1 in the over-parameterised regime and **cannot explain why networks that fit random labels and true labels have the same VC dimension yet generalise differently** (CSE543 generalization lecture, autumn 2025).
  - Consequently, current research favours **scale-sensitive and data-dependent capacity measures** — fat-shattering dimension, Rademacher complexity, and margin/norm-based bounds — that need not grow with parameter count (Bartlett, Berkeley).
  - VC theory nonetheless remains an active analytical tool for structured architectures: a NeurIPS 2025 paper derives new VC-dimension bounds for deep **group-convolutional** neural networks (GCNNs), showing how architecture, not just equivariance, shapes generalisation.

  **Sources**:
  - https://en.wikipedia.org/wiki/Vapnik%E2%80%93Chervonenkis_dimension
  - https://openreview.net/forum?id=Y9nxhKcgAA
  - https://www.stat.berkeley.edu/~bartlett/talks/201711BAIR.pdf

