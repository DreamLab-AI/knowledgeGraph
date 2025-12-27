- ### OntologyBlock
  id:: intersectional-fairness-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: DT-0384
	- source-domain:: ai
	- preferred-term:: Intersectional Fairness
	- status:: in
	- public-access:: true
	- definition:: Intersectional Fairness is an approach to algorithmic fairness that accounts for overlapping and interacting protected attributes, recognizing that individuals with multiple marginalized identities may experience unique forms of discrimination not captured by analyzing single attributes in isolation. Rooted in intersectionality theory from critical race and feminist scholarship (Crenshaw 1989), this framework acknowledges that the experiences of, for example, Black women cannot be understood simply as the combination of being Black and being a woman, but involve distinct discriminatory patterns at the intersection of race and gender. In AI systems, intersectional fairness requires evaluating bias and fairness metrics across intersectional subgroups defined by specific combinations of protected attribute values, where the number of subgroups equals the product of attribute cardinalities (e.g., 2 genders × 4 race categories × 3 age brackets = 24 subgroups). This analysis often reveals intersectional disparities where subgroups experience worse outcomes than predicted by single-attribute analysis, particularly affecting individuals with multiple marginalized identities. Implementation challenges include exponential growth of subgroups with additional attributes, sample size limitations for rare intersectional groups, and computational complexity of enforcing fairness across all subgroups simultaneously. Intersectional fairness auditing is increasingly required by comprehensive AI governance frameworks and documented in research by Buolamwini and Gebru (2018) on gender-race bias in facial recognition.
	- source:: [[Crenshaw (1989)]], [[Buolamwini and Gebru (2018)]], [[IEEE P7003-2021]]
	- maturity:: mature
	- owl:class:: ai:IntersectionalFairness
	- owl:physicality:: VirtualEntity
	- owl:role:: Process
	- owl:inferred-class:: ai:VirtualProcess
	- belongsToDomain:: [[AIEthicsDomain]]
	- implementedInLayer:: [[ConceptualLayer]]
	- #### Relationships
	  id:: intersectional-fairness-relationships
	  collapsed:: true
		- is-subclass-of:: [[AIFairness]]

## Intersectional Fairness

Intersectional Fairness refers to intersectional fairness is an approach to algorithmic fairness that accounts for overlapping and interacting protected attributes, recognising that individuals with multiple marginalized identities may experience unique forms of discrimination not captured by analysing single attributes in isolation. rooted in intersectionality theory from critical race and feminist scholarship (crenshaw 1989), this framework acknowledges that the experiences of, for example, black women cannot be understood simply as the combination of being black and being a woman, but involve distinct discriminatory patterns at the intersection of race and gender. in ai systems, intersectional fairness requires evaluating bias and fairness metrics across intersectional subgroups defined by specific combinations of protected attribute values, where the number of subgroups equals the product of attribute cardinalities (e.g., 2 genders × 4 race categories × 3 age brackets = 24 subgroups). this analysis often reveals intersectional disparities where subgroups experience worse outcomes than predicted by single-attribute analysis, particularly affecting individuals with multiple marginalized identities. implementation challenges include exponential growth of subgroups with additional attributes, sample size limitations for rare intersectional groups, and computational complexity of enforcing fairness across all subgroups simultaneously. intersectional fairness auditing is increasingly required by comprehensive ai governance frameworks and documented in research by buolamwini and gebru (2018) on gender-race bias in facial recognition.

- Industry adoption of intersectional fairness frameworks is growing, with organisations increasingly aware of the need to evaluate AI systems beyond single demographic categories.
  - Notable platforms incorporate intersectional metrics to detect and mitigate worst-case disparities, inspired by Rawlsian distributive justice principles, aiming to minimise the gap between the best- and worst-treated subgroups[2].
  - UK-based AI ethics initiatives and tech companies are embedding intersectional fairness into their governance and auditing processes, reflecting a broader commitment to social justice in AI deployment.
- Technical capabilities have advanced but remain limited by computational complexity and the challenge of defining relevant intersectional subgroups without falling into fairness gerrymandering.
- Standards and frameworks are evolving, with interdisciplinary collaboration emphasised to balance quantitative fairness metrics with socio-technical contextual understanding[4].

## Technical Details

- **Id**: 0384-intersectional-fairness-about
- **Collapsed**: true
- **Domain Prefix**: AI
- **Sequence Number**: 0384
- **Filename History**: ["AI-0384-intersectional-fairness.md"]
- **Public Access**: true
- **Source Domain**: ai
- **Status**: in-progress
- **Last Updated**: 2025-10-29
- **Maturity**: mature
- **Source**: [[Crenshaw (1989)]], [[Buolamwini and Gebru (2018)]], [[IEEE P7003-2021]]
- **Authority Score**: 0.95
- **Owl:Class**: ai:IntersectionalFairness
- **Owl:Physicality**: VirtualEntity
- **Owl:Role**: Process
- **Owl:Inferred Class**: ai:VirtualProcess
- **Belongstodomain**: [[AIEthicsDomain]]
- **Implementedinlayer**: [[ConceptualLayer]]

## Research & Literature

- Key academic papers:
  - Kearns et al. (2018). "Preventing Fairness Gerrymandering: Auditing and Learning for Subgroup Fairness." Proceedings of the 35th International Conference on Machine Learning. DOI: 10.5555/3327144.3327185
  - Foulds et al. (2025). "A Survey on Intersectional Fairness in Machine Learning: Notions, Mitigation, and Challenges." Montreal AI Ethics Institute. [Online]
  - Vethman et al. (2025). "Actionable Recommendations for an Intersectional Approach to AI Fairness." Proceedings of FAccT ’25, Athens, Greece.
  - Mohit Udas, I. (2024). "Actionable Recommendations for AI Fairness." DIVERSIFAIR Project.
  - Kearns et al. (2020). "An Intersectional Definition of Fairness." IEEE ICDE 2020. DOI: 10.1109/icde48307.2020.00203
- Ongoing research focuses on developing scalable algorithms that balance computational feasibility with ethical robustness, integrating stakeholder participation, and refining fairness metrics to better capture lived social realities.

## UK Context

- The UK has been a fertile ground for intersectional fairness research and practice, with universities such as the University of Manchester, University of Leeds, Newcastle University, and the University of Sheffield contributing to both theoretical and applied work.
  - Manchester’s AI ethics groups have collaborated with local councils to audit public sector AI systems for intersectional biases.
  - Leeds-based initiatives focus on community engagement to ensure AI fairness frameworks reflect diverse regional populations.
  - Newcastle and Sheffield have hosted workshops and interdisciplinary forums to bridge computer science, social sciences, and law in addressing intersectional fairness.
- UK policy frameworks increasingly recognise intersectionality in anti-discrimination law, influencing AI governance and ethical standards.

## Future Directions

- Emerging trends include:
  - Development of hybrid socio-technical frameworks that combine quantitative fairness metrics with qualitative stakeholder insights.
  - Enhanced participatory design approaches involving affected communities, particularly from marginalised intersectional groups.
  - Integration of intersectional fairness into regulatory compliance and AI certification processes.
- Anticipated challenges:
  - Balancing computational tractability with the ethical imperative to consider complex identity intersections.
  - Avoiding fairness gerrymandering while ensuring no subgroup is left behind.
  - Navigating the socio-political complexities of power, privilege, and representation in AI development teams and governance.
- Research priorities:
  - Creating transparent, interpretable fairness metrics that resonate with diverse stakeholders.
  - Expanding datasets to better represent intersectional identities without compromising privacy.
  - Investigating the long-term societal impacts of intersectionally fair AI systems.

## References

1. Foulds, J., et al. (2025). "A Survey on Intersectional Fairness in Machine Learning: Notions, Mitigation, and Challenges." Montreal AI Ethics Institute.
2. Fiddler AI Blog (2025). "Measuring Intersectional Fairness."
3. Vethman, R., et al. (2025). "Actionable Recommendations for an Intersectional Approach to AI Fairness." Proceedings of FAccT ’25, Athens, Greece.
4. Mohit Udas, I. (2024). "Actionable Recommendations for AI Fairness." DIVERSIFAIR Project.
5. Kearns, M., et al. (2020). "An Intersectional Definition of Fairness." IEEE International Conference on Data Engineering (ICDE), pp. 1918–1921. DOI: 10.1109/icde48307.2020.00203
6. Kearns, M., et al. (2018). "Preventing Fairness Gerrymandering: Auditing and Learning for Subgroup Fairness." Proceedings of the 35th International Conference on Machine Learning. DOI: 10.5555/3327144.3327185
*Intersectional fairness: because fairness isn’t one-size-fits-all, and neither are people.*

## Metadata

- **Migration Status**: Ontology block enriched on 2025-11-12
- **Last Updated**: 2025-11-12
- **Review Status**: Comprehensive editorial review
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable
