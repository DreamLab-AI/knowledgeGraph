id:: secure-multi-party-computation-ontology

- ### OntologyBlock
  id:: Secure Multi-Party Computation
  - ontology:: true
  - public-access:: true
  - term-id:: DT-0419
  - source-domain:: bc
  - owl:class:: bc:SecureMultiPartyComputation
  - preferred-term:: Secure Multi-Party Computation
  - status:: deprecated
  - definition:: Secure Multi-Party Computation is a cryptographic protocol enabling multiple parties to jointly compute functions over their combined private inputs without revealing individual inputs to other participants or trusted third parties, ensuring that only the final output is disclosed while intermediate computations remain confidential. This technique provides privacy guarantees through mathematical protocols where each party holds secret input x_i, parties execute cryptographic protocol computing function f(x_1, x_2, ..., x_n), and only the result is revealed while intermediate values remain hidden, with security models including semi-honest (honest-but-curious) adversaries following protocol but attempting to infer extra information, and malicious adversaries arbitrarily deviating from protocol requiring verification mechanisms. Implementation techniques span secret sharing methods where values are split into shares distributed across parties enabling computation through share manipulation (Shamir secret sharing for n parties with threshold t, replicated secret sharing for 3-party protocols), garbled circuits where one party creates encrypted circuit and another evaluates it without learning inputs or intermediate values (suitable for 2-party boolean circuits), and oblivious transfer primitives enabling receiver to obtain one of sender's inputs without sender knowing which was chosen or receiver learning others. ML applications include privacy-preserving model evaluation where parties jointly evaluate ML models without exposing proprietary models or sensitive test data, federated learning with secure aggregation preventing server from seeing individual participant updates even during aggregation, and private benchmarking enabling companies to compare ML model performance without revealing architectures or proprietary data. The 2024-2025 period demonstrated MPC feasibility for production systems though computational overheads remained significant (10-1000x slowdown), with successful deployments in financial consortia jointly training fraud detection models, healthcare collaborations enabling multi-institutional research without data sharing, and private set intersection protocols identifying common elements without revealing non-overlapping data.

### DEPRECATED
### DEPRECATED
**This entity has been merged into [[Secure Multi Party Computation]]**
**Status**: deprecated
**Merge Date**: 2025-11-23
**Reason**: Duplicate entity consolidation

### Relationships
- is-subclass-of:: [[Blockchain]]
