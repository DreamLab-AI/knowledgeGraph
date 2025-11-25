id:: differential-privacy-ontology

- ### OntologyBlock
  id:: Differential Privacy
  - ontology:: true
  - public-access:: true
  - term-id:: DT-0416
  - preferred-term:: Differential Privacy
  - source-domain:: ai
  - status:: in
  - definition:: Differential Privacy is a mathematical framework providing provable privacy guarantees by adding carefully calibrated noise to data queries or model outputs, ensuring that the presence or absence of any single individual's data has negligible impact on analysis results. This technique provides formal privacy protection through the epsilon (ε) parameter quantifying privacy loss, where smaller ε values indicate stronger privacy guarantees (typically ε ≤ 1.0 for high-privacy scenarios), with differential privacy satisfied when for all datasets D1 and D2 differing by one record and all possible outputs S, P(M(D1) ∈ S) ≤ exp(ε) × P(M(D2) ∈ S). Implementation mechanisms include the Laplace mechanism adding noise proportional to query sensitivity for numeric queries, the Gaussian mechanism suitable for more complex settings with delta (δ) parameter allowing negligible probability of privacy breach, the exponential mechanism for non-numeric outputs selecting results proportional to their utility, and composition theorems tracking cumulative privacy loss across multiple queries (sequential composition where total ε_total = Σε_i, advanced composition providing tighter bounds). The 2024-2025 period witnessed differential privacy evolve from theoretical framework to practical requirement with the U.S. Census Bureau's 2020 Census deployment demonstrating feasibility at national scale, technology companies including Apple, Microsoft, and Meta deploying differential privacy for telemetry and usage analytics proving strong privacy need not preclude valuable aggregate insights, and academic consensus emerging around epsilon budgets with ε ≤ 1.0 for high-privacy scenarios. Applications span statistical databases enabling privacy-preserving aggregate statistics, machine learning protecting training data through differentially private stochastic gradient descent (DP-SGD), and federated learning scenarios adding noise to model updates before aggregation, though challenges include computational overhead of noise addition, utility degradation particularly for complex queries or small datasets, and privacy budget exhaustion requiring careful allocation across queries.

### Relationships
- is-subclass-of:: [[AIGovernance]]
