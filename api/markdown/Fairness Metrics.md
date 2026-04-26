iri:: http://narrativegoldmine.com/artificial-intelligence#FairnessMetrics
uri:: urn:visionclaw:concept:artificial-intelligence:fairness-metrics
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:artificial-intelligence:fairness-metrics
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: artificial-intelligence
preferred-term:: Fairness Metrics
content-hash:: sha256-12-46948fd9af87
legacy-term-id:: AI-0377
status:: draft
maturity:: mature
quality-score:: 0.35
authority-score:: 0.95
version:: 2.0.0
created:: 2025-10-29T00:00:00Z
modified:: 2026-04-26T13:00:00Z
public:: true

- ### Definition
  - Fairness Metrics are quantitative measures and mathematical frameworks used to evaluate and ensure equitable treatment across different demographic groups in AI systems. These metrics provide objective, measurable criteria to assess whether an algorithmic system produces disparate impacts, maintains statistical parity, or achieves equalized odds across protected attributes such as race, gender, age, or disability status. Key fairness metrics include demographic parity (equal positive prediction rates across groups), equalized odds (equal true positive and false positive rates), equal opportunity (equal true positive rates), and predictive parity (equal precision across groups). The selection and application of fairness metrics depends on the specific context, stakeholder values, and regulatory requirements, as different metrics can conflict and no single metric satisfies all fairness criteria simultaneously. Implementation requires confusion matrix analysis, statistical testing, and careful consideration of base rate differences between groups, as formalized in IEEE P7003-2021 and NIST SP 1270 guidelines for algorithmic fairness assessment.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:FairnessMetrics
  - owl-role:: Process
  - owl-inferred:: ai:VirtualProcess
  - belongs-to-domain:: [[AIEthicsDomain]]
  - implemented-in-layer:: [[ConceptualLayer]]

- ### Relationships
  - <!-- No relationships defined -->
  - bridges-to:: [[Blockchain]] (domain: bc)

- ### Content
  Fairness Metrics — content pending enrichment.

- ### Provenance
  - sources:: [[IEEE P7003-2021]], [[ISO/IEC TR 24027]], [[NIST SP 1270]]
  - migration-date:: 2026-04-26T00:00:00Z
