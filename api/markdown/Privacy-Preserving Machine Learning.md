
Privacy-preserving machine learning is the set of techniques that train, evaluate, and serve machine-learning models while limiting exposure of sensitive training data and model internals. It combines cryptographic protocols, statistical guarantees, and distributed training architectures to bound what an adversary can learn about individual records. The goal is to retain predictive utility while satisfying confidentiality, regulatory, and trust constraints.

- Privacy-preserving machine learning protects sensitive data throughout the [[Machine Learning]] lifecycle using [[Cryptography]], [[Differential Privacy]], and distributed training such as [[Federated Learning]]. It is a specialisation of [[Privacy-Enhancing Technologies]] applied to model training and inference.
- ### Overview
- Standard machine learning concentrates raw data and exposes models to membership-inference and reconstruction attacks; privacy-preserving variants limit this exposure by design.
- The field spans formal guarantees (differential privacy), cryptographic computation over encrypted data, hardware isolation, and architectural decentralisation.
- Practitioners trade off utility, computational cost, and privacy budget, choosing techniques to match a threat model and regulatory regime.
- ### Mechanisms
- [[Differential Privacy]] injects calibrated noise so that any single record has bounded influence on outputs.
- [[Federated Learning]] keeps data on-device and aggregates only model updates across participants.
- [[Homomorphic Encryption]] allows computation directly on ciphertext, while a [[Trusted Execution Environment]] isolates computation in attested hardware.
- Secure aggregation combines client updates so the server never sees any individual contribution in the clear.
- ### Applications
- Cross-institution medical and financial modelling without pooling raw records.
- On-device personalisation that supports [[Edge Computing]] and mobile keyboards.
- Regulated analytics that must demonstrate [[Data Privacy]] compliance.
- Collaborative model building among mutually distrustful organisations.
- ### Provenance

