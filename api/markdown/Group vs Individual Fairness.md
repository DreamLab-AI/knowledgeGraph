iri:: http://narrativegoldmine.com/artificial-intelligence#GroupVsIndividualFairness
uri:: urn:visionclaw:concept:artificial-intelligence:group-vs-individual-fairness
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:artificial-intelligence:group-vs-individual-fairness
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: artificial-intelligence
preferred-term:: Group vs Individual Fairness
content-hash:: sha256-12-a5ccb8cd620c
legacy-term-id:: AI-0383
status:: draft
maturity:: mature
quality-score:: 0.35
authority-score:: 0.95
version:: 2.0.0
created:: 2025-10-29T00:00:00Z
modified:: 2026-04-26T13:00:00Z
public:: true

- ### Definition
  - Group vs Individual Fairness represents two distinct paradigms for conceptualizing and operationalizing algorithmic fairness with fundamentally different units of analysis and philosophical foundations. Group Fairness operates at the aggregate level, requiring statistical parity across protected demographic groups such that prediction distributions, error rates, or outcome rates are similar across groups, formalized as P(Ŷ|A=a) being approximately equal for all protected group values a. This paradigm underlies metrics like demographic parity, equalized odds, and predictive parity, and aligns with legal frameworks focused on disparate impact and anti-discrimination compliance. In contrast, Individual Fairness operates at the person level, requiring that similar individuals receive similar predictions regardless of group membership, formalized through a fairness metric d(x₁,x₂) → d(f(x₁),f(f₂)) where the distance between predictions is bounded by the distance between individuals in a task-relevant similarity space. Group fairness is operationally straightforward requiring only protected attribute labels but may permit unfairness to individuals within groups, while individual fairness provides stronger theoretical guarantees but requires defining task-appropriate similarity metrics that avoid encoding prohibited biases. The two paradigms are not necessarily compatible, as satisfying group fairness constraints does not guarantee individual fairness and vice versa, representing a fundamental tension in fair machine learning research explored by Dwork et al. (2012) and subsequent scholarship.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:GroupVsIndividualFairness
  - owl-role:: Process
  - owl-inferred:: ai:VirtualProcess
  - belongs-to-domain:: [[AIEthicsDomain]]
  - implemented-in-layer:: [[ConceptualLayer]]

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  Group vs Individual Fairness — content pending enrichment.

- ### Provenance
  - sources:: [[Dwork et al. (2012)]], [[Hardt et al. (2016)]], [[Barocas et al. (2019)]]
  - migration-date:: 2026-04-26T00:00:00Z
