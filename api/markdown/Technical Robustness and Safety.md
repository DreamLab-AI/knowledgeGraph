id:: technical-robustness-and-safety-ontology

- ### OntologyBlock
  id:: Technical Robustness and Safety
  - ontology:: true
  - public-access:: true
  - term-id:: DT-0410
  - preferred-term:: Technical Robustness and Safety
  - source-domain:: mv
  - owl:class:: mv:TechnicalRobustnessAndSafety
	- belongsToDomain:: [[DisruptiveTechDomain]]
  - status:: in
  - definition:: Technical Robustness and Safety is a trustworthiness dimension ensuring AI systems perform reliably under varied conditions, resist adversarial attacks, implement fallback mechanisms for graceful degradation, and maintain safety throughout their operational lifecycle. This dimension encompasses four core components: resilience to attack (protecting against adversarial examples designed to cause misclassification, data poisoning attempts to corrupt training data, model extraction attacks stealing intellectual property, and implementing comprehensive cybersecurity measures), fallback plan and safety mechanisms (providing fallback procedures when primary systems fail, enabling graceful degradation rather than catastrophic failure, implementing emergency stop capabilities for immediate deactivation, and establishing safe default behaviors), accuracy and reliability (meeting appropriate accuracy thresholds relative to deployment context, demonstrating reproducibility of results across trials, quantifying and communicating uncertainty in predictions, and handling distribution shift when deployment data differs from training data), and general safety (conducting comprehensive risk assessments identifying potential hazards, implementing proportionate safety controls, maintaining continuous safety monitoring detecting performance degradation or anomalies, and establishing incident response procedures). The EU AI Act Article 15 mandates high-risk systems achieve appropriate accuracy levels with quantitative performance metrics validated through independent testing, demonstrate robustness to perturbations and adversarial inputs, and implement cybersecurity protections against data poisoning, model evasion, and confidentiality attacks. The 2024-2025 period witnessed technical robustness transition from voluntary best practice to regulatory requirement, with red teaming emerging as the dominant safety evaluation methodology involving external experts simulating realistic attack scenarios to identify vulnerabilities before deployment, and regulatory enforcement creating existential compliance pressures with penalties reaching EUR 15 million or 3% of global annual turnover for violations.

### Relationships
- is-subclass-of:: [[AIGovernance]]
