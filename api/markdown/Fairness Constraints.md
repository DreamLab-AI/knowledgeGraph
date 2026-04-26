iri:: http://narrativegoldmine.com/artificial-intelligence#FairnessConstraints
uri:: urn:visionclaw:concept:artificial-intelligence:fairness-constraints
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:artificial-intelligence:fairness-constraints
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: artificial-intelligence
preferred-term:: Fairness Constraints
content-hash:: sha256-12-d67263649c82
legacy-term-id:: AI-0382
status:: draft
maturity:: mature
quality-score:: 0.35
authority-score:: 0.95
version:: 2.0.0
created:: 2025-10-29T00:00:00Z
modified:: 2026-04-26T13:00:00Z
public:: true

- ### Definition
  - Fairness Constraints are mathematical formalizations of equitable treatment in AI systems, expressed as conditions that predictions must satisfy relative to protected attributes. These constraints are categorized into three fundamental types based on independence criteria: Independence (demographic parity) requires predictions to be independent of protected attributes (Ŷ ⊥ A), meaning P(Ŷ|A=0) = P(Ŷ|A=1); Separation (equalized odds) requires predictions to be independent of protected attributes conditional on true labels (Ŷ ⊥ A | Y), ensuring equal true positive and false positive rates across groups; and Sufficiency (predictive parity) requires true labels to be independent of protected attributes conditional on predictions (Y ⊥ A | Ŷ), ensuring equal precision and calibration across groups. These constraints formalize fairness concepts like demographic parity, equalized odds, equal opportunity (separation for positive class only), and calibration into optimization problems during model training. However, impossibility theorems (Chouldechova 2017, Kleinberg et al. 2017) prove that when base rates differ between groups, certain combinations of fairness constraints cannot be simultaneously satisfied, necessitating context-dependent tradeoffs. Implementation typically involves constrained optimization with Lagrange multipliers, where accuracy loss is balanced against fairness violations through tunable regularization parameters, as formalized in foundational research by Hardt et al. (2016) and Barocas et al. (2019).

- ### Semantic Classification
  - owl-class:: artificial-intelligence:FairnessConstraints
  - owl-role:: Process
  - owl-inferred:: ai:VirtualProcess
  - belongs-to-domain:: [[AIEthicsDomain]]
  - implemented-in-layer:: [[ConceptualLayer]]

- ### Relationships
  - <!-- No relationships defined -->
  - bridges-to:: [[Digital Twin]], [[Blockchain]]

- ### Content
  Fairness Constraints — content pending enrichment.

- ### Provenance
  - sources:: [[Hardt et al. (2016)]], [[Barocas et al. (2019)]], [[Chouldechova (2017)]]
  - migration-date:: 2026-04-26T00:00:00Z
