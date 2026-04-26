iri:: http://narrativegoldmine.com/artificial-intelligence#IntersectionalFairness
uri:: urn:visionclaw:concept:artificial-intelligence:intersectional-fairness
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:artificial-intelligence:intersectional-fairness
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: artificial-intelligence
preferred-term:: Intersectional Fairness
content-hash:: sha256-12-e1ef29eee981
legacy-term-id:: AI-0384
status:: draft
maturity:: mature
quality-score:: 0.35
authority-score:: 0.95
version:: 2.0.0
created:: 2025-10-29T00:00:00Z
modified:: 2026-04-26T13:00:00Z
public:: true

- ### Definition
  - Intersectional Fairness is an approach to algorithmic fairness that accounts for overlapping and interacting protected attributes, recognizing that individuals with multiple marginalized identities may experience unique forms of discrimination not captured by analyzing single attributes in isolation. Rooted in intersectionality theory from critical race and feminist scholarship (Crenshaw 1989), this framework acknowledges that the experiences of, for example, Black women cannot be understood simply as the combination of being Black and being a woman, but involve distinct discriminatory patterns at the intersection of race and gender. In AI systems, intersectional fairness requires evaluating bias and fairness metrics across intersectional subgroups defined by specific combinations of protected attribute values, where the number of subgroups equals the product of attribute cardinalities (e.g., 2 genders × 4 race categories × 3 age brackets = 24 subgroups). This analysis often reveals intersectional disparities where subgroups experience worse outcomes than predicted by single-attribute analysis, particularly affecting individuals with multiple marginalized identities. Implementation challenges include exponential growth of subgroups with additional attributes, sample size limitations for rare intersectional groups, and computational complexity of enforcing fairness across all subgroups simultaneously. Intersectional fairness auditing is increasingly required by comprehensive AI governance frameworks and documented in research by Buolamwini and Gebru (2018) on gender-race bias in facial recognition.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:IntersectionalFairness
  - owl-role:: Process
  - owl-inferred:: ai:VirtualProcess
  - belongs-to-domain:: [[AIEthicsDomain]]
  - implemented-in-layer:: [[ConceptualLayer]]

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  Intersectional Fairness — content pending enrichment.

- ### Provenance
  - sources:: [[Crenshaw (1989)]], [[Buolamwini and Gebru (2018)]], [[IEEE P7003-2021]]
  - migration-date:: 2026-04-26T00:00:00Z
