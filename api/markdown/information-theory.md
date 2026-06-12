- ### Definition
  - Information Theory is the mathematical study of the quantification, storage and communication of information, founded by Claude Shannon in 1948. It introduces entropy as a measure of uncertainty in a random source and defines channel capacity, the maximum rate at which information can be transmitted reliably over a noisy channel. The theory underpins data compression, error-correcting codes and modern digital communication. It also connects to statistics, cryptography and machine learning through measures such as mutual information and Kullback-Leibler divergence.

- ### Semantic Classification
  - owl-class:: math:InformationTheory
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Machine Learning Discipline]], [[Statistics]]
  - has-part:: [[Entropy]], [[Mutual Information]], [[Channel Capacity]]
  - requires:: [[Probability Theory]]
  - enables:: [[Data Compression]], [[Error Correcting Code]], [[Cryptography]]

- ### Content
  - Information Theory addresses two central problems: how compactly a message source can be represented (source coding) and how reliably information can be sent across an imperfect channel (channel coding). Shannon's source coding theorem establishes that the entropy of a source sets a lower bound on the average number of bits needed to encode its symbols without loss.
  - The noisy channel coding theorem shows that, provided the transmission rate stays below the channel capacity, codes exist that make the error probability arbitrarily small. This result separated the design of compression and error correction and gave engineers concrete performance targets to approach with practical codes such as Reed-Solomon, turbo and LDPC codes.
  - Beyond communications, the framework supplies tools used throughout science and computing. Mutual information quantifies statistical dependence, relative entropy measures the cost of using a wrong probability model, and these quantities appear in feature selection, model evaluation and the analysis of learning algorithms.

- ### Provenance
  - sources:: [[Shannon 1948, A Mathematical Theory of Communication]]
  - migration-date:: 2026-05-29T00:00:00Z