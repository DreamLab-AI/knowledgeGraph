Secure aggregation is a cryptographic protocol that computes the sum of inputs held by many parties without revealing any individual input to the aggregator or other participants. It is most prominent in federated learning, where a server combines model updates from clients while learning only the aggregate. Typical constructions use pairwise masking, secret sharing, or additively homomorphic encryption, with dropout-resilient designs so the protocol completes even when some clients disconnect.

- Secure aggregation computes a global sum over private client inputs so the aggregator learns only the total, never individual contributions. It is a specialised form of [[Secure Multi-Party Computation]] central to privacy-preserving [[Federated Learning]].
- Constructions combine [[Oblivious Transfer]], [[Homomorphic Encryption]], or masking with secret sharing to cancel per-client noise once values are summed.

### Overview

- In federated learning many clients train locally and send model updates to a central server. Naively, those updates can leak training data through inversion attacks. Secure aggregation prevents this by ensuring the server sees only the aggregate of all updates.
- A common approach has clients add pairwise masks that cancel out across the sum. Secret-shared mask seeds let the protocol recover from clients that drop out mid-round without exposing remaining clients' values.
- Secure aggregation is frequently combined with differential privacy to bound information leakage from the aggregate itself, giving complementary protection.

### Mechanisms

- Pairwise masking: clients agree on shared random masks that sum to zero across all participants.
- Secret sharing: mask seeds are shared so dropped clients' masks can be reconstructed and removed.
- Additively homomorphic encryption: an alternative where the server sums ciphertexts and decrypts only the total.
- Dropout resilience: thresholds ensure aggregation completes despite partial participation.

### Applications

- Federated learning across mobile devices and hospitals where raw data cannot leave the source.
- Privacy-preserving analytics and telemetry collection.
- Cross-silo machine learning between institutions with regulatory constraints.
- Combining with differential privacy for formal privacy guarantees on the aggregate.

### Provenance

