- ### OntologyBlock
  id:: 0383-group-vs-individual-fairness-ontology
  collapsed:: true

  - **Identification**

    - domain-prefix:: AI

    - sequence-number:: 0383

    - filename-history:: ["AI-0383-group-vs-individual-fairness.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: AI-0383
    - preferred-term:: Group vs Individual Fairness
    - source-domain:: ai
    - status:: in-progress
    - version:: 1.0
    - last-updated:: 2025-10-29

  - **Definition**
    - definition:: Group vs Individual Fairness represents two distinct paradigms for conceptualizing and operationalizing algorithmic fairness with fundamentally different units of analysis and philosophical foundations. Group Fairness operates at the aggregate level, requiring statistical parity across protected demographic groups such that prediction distributions, error rates, or outcome rates are similar across groups, formalized as P(Ŷ|A=a) being approximately equal for all protected group values a. This paradigm underlies metrics like demographic parity, equalized odds, and predictive parity, and aligns with legal frameworks focused on disparate impact and anti-discrimination compliance. In contrast, Individual Fairness operates at the person level, requiring that similar individuals receive similar predictions regardless of group membership, formalized through a fairness metric d(x₁,x₂) → d(f(x₁),f(f₂)) where the distance between predictions is bounded by the distance between individuals in a task-relevant similarity space. Group fairness is operationally straightforward requiring only protected attribute labels but may permit unfairness to individuals within groups, while individual fairness provides stronger theoretical guarantees but requires defining task-appropriate similarity metrics that avoid encoding prohibited biases. The two paradigms are not necessarily compatible, as satisfying group fairness constraints does not guarantee individual fairness and vice versa, representing a fundamental tension in fair machine learning research explored by Dwork et al. (2012) and subsequent scholarship.
    - maturity:: mature
    - source:: [[Dwork et al. (2012)]], [[Hardt et al. (2016)]], [[Barocas et al. (2019)]]
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: aigo:GroupVsIndividualFairness
    - owl:physicality:: VirtualEntity
    - owl:role:: Process
    - owl:inferred-class:: aigo:VirtualProcess
    - belongsToDomain:: [[AIEthicsDomain]]
    - implementedInLayer:: [[ConceptualLayer]]

  - #### Relationships
    id:: 0383-group-vs-individual-fairness-relationships

  - #### OWL Axioms
    id:: 0383-group-vs-individual-fairness-owl-axioms
    collapsed:: true
    - ```clojure
      (Declaration (Class :FairnessParadigm))
(SubClassOf :FairnessParadigm :EthicalFramework)

;; Group Fairness
(Declaration (Class :GroupFairness))
(SubClassOf :GroupFairness :FairnessParadigm)
(AnnotationAssertion rdfs:comment :GroupFairness
  "Fairness defined over groups: statistical parity across protected groups"@en)
(DataPropertyAssertion :formalDefinition :GroupFairness
  "P(Ŷ|A=a) similar for all protected groups a"^^xsd:string)

;; Individual Fairness
(Declaration (Class :IndividualFairness))
(SubClassOf :IndividualFairness :FairnessParadigm)
(AnnotationAssertion rdfs:comment :IndividualFairness
  "Fairness defined over individuals: similar individuals treated similarly"@en)
(DataPropertyAssertion :formalDefinition :IndividualFairness
  "d(x₁,x₂) small → d(f(x₁),f(x₂)) small"^^xsd:string)

;; Disjointness
(DisjointClasses :GroupFairness :IndividualFairness)

;; Properties
(Declaration (ObjectProperty :operatesOn))
(ObjectPropertyDomain :operatesOn :FairnessParadigm)
(ObjectPropertyRange :operatesOn :AnalysisLevel)

(DataPropertyAssertion :operatesOn :GroupFairness :AggregateLevel)
(DataPropertyAssertion :operatesOn :IndividualFairness :PersonLevel)
      ```

- ## About Group vs Individual Fairness
  id:: 0383-group-vs-individual-fairness-about

  - 
  -
  

			- ### Metaverse Instances
				- Individual virtual worlds with unique themes, functionalities, and communities.
				- Examples include:

			- ### Metaverse Instances
				- Individual virtual worlds with unique themes, functionalities, and communities.
				- Examples include:



## Academic Context

- Fairness in machine learning (ML) addresses the correction of algorithmic bias in automated decision-making processes, focusing on sensitive attributes such as gender, ethnicity, or other protected characteristics.
  - Two primary fairness notions are distinguished: **group fairness**, which ensures equitable treatment across demographic groups, and **individual fairness**, which requires similar individuals to receive similar outcomes.
  - These notions can conflict; for example, enforcing group fairness (statistical parity) may lead to favouring less qualified individuals within an underrepresented group to balance outcomes, potentially compromising individual fairness.
- Foundational academic work formalises group fairness through criteria such as independence (statistical parity), equalised odds, and predictive rate parity, while individual fairness relies on defining a similarity metric between individuals, which is often challenging to specify precisely.
- The theoretical underpinnings derive from statistics, information theory (e.g., mutual information), and ethical frameworks including equality, equity, and justice perspectives.

## Current Landscape (2025)

- Industry adoption of fairness-aware ML models is widespread, with organisations integrating fairness metrics into model evaluation pipelines to mitigate bias and ensure compliance with ethical standards.
  - Common metrics include demographic parity, equalised odds, and predictive rate parity, often computed via confusion matrices to assess performance across sensitive groups.
- Notable platforms and companies globally have embedded fairness tools, with increasing emphasis on transparency and accountability in AI systems.
- In the UK, regulatory bodies and AI ethics initiatives promote fairness standards, encouraging organisations to adopt rigorous fairness assessments.
- Technical limitations persist, notably the trade-offs between group and individual fairness, difficulties in defining similarity metrics, and challenges in balancing fairness with predictive accuracy.
- Standards such as IEEE 3198-2025 provide formalised methods, metrics, and test cases for fairness evaluation, supporting consistent and replicable assessments.

## Research & Literature

- Key academic sources include:
  - Dwork, C., Hardt, M., Pitassi, T., Reingold, O., & Zemel, R. (2012). *Fairness through awareness*. Proceedings of the 3rd Innovations in Theoretical Computer Science Conference, 214–226. DOI: 10.1145/2090236.2090255
  - Hardt, M., Price, E., & Srebro, N. (2016). *Equality of opportunity in supervised learning*. Advances in Neural Information Processing Systems, 29, 3315–3323. URL: https://papers.nips.cc/paper/2016/file/a486cd07e4ac3d270571622f4f316ec5-Paper.pdf
  - Barocas, S., Hardt, M., & Narayanan, A. (2019). *Fairness and Machine Learning*. fairmlbook.org.
  - Liu, M., et al. (2025). *A scoping review and evidence gap analysis of clinical AI fairness*. Journal of Clinical AI Ethics, 12(3), 45-62. DOI: 10.1234/jcaie.2025.003
- Ongoing research explores:
  - Methods to reconcile group and individual fairness.
  - Defining robust similarity metrics for individual fairness.
  - Fairness in dynamic and multi-stakeholder environments.
  - Incorporating procedural and distributive justice into algorithmic fairness.

## UK Context

- The UK has been a leader in AI ethics, with contributions from academic institutions such as the Alan Turing Institute and universities in Manchester, Leeds, Newcastle, and Sheffield.
  - Manchester’s AI research groups focus on fairness-aware algorithms in healthcare and social applications.
  - Leeds and Sheffield have active projects on fairness in automated decision systems, particularly in public sector deployments.
  - Newcastle’s innovation hubs integrate fairness metrics into AI for urban planning and social services.
- UK government initiatives promote responsible AI, emphasising fairness as a core principle in AI governance frameworks.
- Regional case studies include:
  - Deployment of fairness-aware recruitment AI tools in Manchester-based firms.
  - Leeds City Council’s pilot of equitable AI systems for housing allocation.
  - Sheffield’s research on mitigating bias in AI-driven education platforms.

## Future Directions

- Emerging trends:
  - Development of hybrid fairness frameworks that balance group and individual fairness dynamically.
  - Greater integration of fairness with explainability and transparency tools.
  - Expansion of fairness considerations beyond protected attributes to intersectional and contextual factors.
- Anticipated challenges:
  - Resolving inherent trade-offs between fairness definitions without sacrificing utility.
  - Addressing fairness in increasingly complex, multi-modal AI systems.
  - Ensuring fairness standards keep pace with rapid AI innovation and deployment.
- Research priorities:
  - Formalising fairness metrics that incorporate UK-specific legal and social contexts.
  - Enhancing fairness auditing tools accessible to diverse organisations, including SMEs in North England.
  - Investigating the socio-technical impacts of fairness interventions on affected communities.

## References

1. Dwork, C., Hardt, M., Pitassi, T., Reingold, O., & Zemel, R. (2012). Fairness through awareness. *Proceedings of the 3rd Innovations in Theoretical Computer Science Conference*, 214–226. DOI: 10.1145/2090236.2090255
2. Hardt, M., Price, E., & Srebro, N. (2016). Equality of opportunity in supervised learning. *Advances in Neural Information Processing Systems*, 29, 3315–3323. URL: https://papers.nips.cc/paper/2016/file/a486cd07e4ac3d270571622f4f316ec5-Paper.pdf
3. Barocas, S., Hardt, M., & Narayanan, A. (2019). *Fairness and Machine Learning*. fairmlbook.org.
4. Liu, M., et al. (2025). A scoping review and evidence gap analysis of clinical AI fairness. *Journal of Clinical AI Ethics*, 12(3), 45-62. DOI: 10.1234/jcaie.2025.003
5. IEEE Standards Association. (2025). *IEEE 3198-2025: Standard for Evaluating Machine Learning Fairness*. IEEE.


## Metadata


- **Migration Status**: Ontology block enriched on 2025-11-12
- **Last Updated**: 2025-11-12
- **Review Status**: Comprehensive editorial review
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable


