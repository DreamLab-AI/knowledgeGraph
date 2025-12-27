id:: federated-learning-ontology

- ### OntologyBlock
  id:: Federated Learning
  - ontology:: true
  - public-access:: true
  - term-id:: DT-0417
  - source-domain:: ai
  - owl:class:: ai:FederatedLearning
  - preferred-term:: Federated Learning
  - status:: deprecated
  - definition:: Federated Learning is a distributed machine learning paradigm enabling collaborative model training across multiple decentralized data sources without centralizing sensitive data, preserving privacy by keeping raw data at source locations while sharing only model updates or gradients. This approach implements iterative training cycles where a central coordinator initializes a global model, selected clients download the model and train locally on private data, clients compute model updates (gradients or weights) based on local training, updates are transmitted to coordinator (optionally with differential privacy noise or secure aggregation), coordinator aggregates updates using methods like federated averaging (FedAvg) computing weighted average based on dataset sizes, and the updated global model is distributed for the next training round. The framework addresses key challenges including statistical heterogeneity where clients have non-IID (non-independent and identically distributed) data requiring techniques like personalized federated learning and federated multi-task learning, systems heterogeneity involving varying computational capabilities and network conditions necessitating asynchronous aggregation and client selection strategies, communication efficiency achieved through compression techniques like gradient quantization and sparsification reducing bandwidth requirements, and privacy protection enhanced through secure multi-party computation for secure aggregation preventing coordinator from seeing individual updates, differential privacy mechanisms adding calibrated noise to updates, and homomorphic encryption enabling encrypted model update aggregation. The 2024-2025 period witnessed federated learning transition from academic research to production infrastructure with healthcare consortia training diagnostic models across hospitals while maintaining patient privacy, financial institutions collaborating on fraud detection without sharing transaction data, and major implementations including Google's Federated Analytics and TensorFlow Federated becoming de facto standards while Apple deployed federated learning across device ecosystems for keyboard suggestions and photo identification, though challenges remained including convergence difficulties with non-IID data, vulnerability to poisoning attacks from malicious participants, and substantial communication overhead despite optimization techniques.

### Relationships
- is-subclass-of:: [[MachineLearning]]

### DEPRECATED
### DEPRECATED
**This entity has been merged into [[FederatedLearning]]**
**Status**: deprecated
**Merge Date**: 2025-11-23
**Reason**: Duplicate entity consolidation
