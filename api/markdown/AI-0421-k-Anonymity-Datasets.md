- ### OntologyBlock
  id:: k-anonymity-in-datasets-ontology
  collapsed:: true

  - **Identification**
    - public-access:: true
    - ontology:: true
    - term-id:: AI-0421
    - preferred-term:: k-Anonymity in Datasets
    - source-domain:: ai
    - status:: in-progress
    - version:: 1.0
    - last-updated:: 2025-10-29

  - **Definition**
    - definition:: k-Anonymity in Datasets is a privacy-preserving property ensuring that each record in a dataset is indistinguishable from at least k-1 other records with respect to quasi-identifiers (attributes that could potentially identify individuals when combined, such as age, gender, zip code), preventing re-identification attacks by guaranteeing anonymity sets of at least size k. This technique achieves anonymization through generalization (replacing specific values with broader categories, such as exact age → age range [30-40], 5-digit zip code → 3-digit prefix) and suppression (removing or masking particularly identifying attribute values when generalization insufficient), producing equivalence classes where all records within a class share identical quasi-identifier values. The privacy guarantee states that for any record in the dataset, an adversary with knowledge of quasi-identifiers cannot distinguish the target individual from k-1 others, formalized as minimum group size ≥ k for all equivalence classes partitioned by quasi-identifiers. However, limitations include vulnerability to homogeneity attacks when sensitive attributes lack diversity within equivalence classes (all k individuals having same disease diagnosis still leaks information), background knowledge attacks leveraging external information to narrow anonymity sets, and composition attacks combining multiple published datasets to re-identify individuals despite each satisfying k-anonymity independently. Extensions addressing these limitations include l-diversity requiring each equivalence class to contain at least l distinct sensitive attribute values ensuring diversity beyond quasi-identifier indistinguishability, t-closeness requiring sensitive attribute distribution within each equivalence class to be close (within threshold t) to distribution in overall dataset preventing attribute disclosure through distribution differences, and δ-presence ensuring individuals' presence or absence in dataset cannot be determined with confidence exceeding δ. Implementation algorithms include Mondrian recursive partitioning of feature space creating balanced anonymization groups, Incognito bottom-up lattice traversal exploring generalization strategies, and μ-Argus specialized tool for statistical disclosure control in survey data, with typical parameter selections including k ≥ 5 minimum for meaningful privacy, k ≥ 10 recommended for sensitive data, l ≥ 2-3 for l-diversity, and t ≤ 0.2 for t-closeness applications.
    - maturity:: mature
    - source:: [[Sweeney (2002)]], [[Machanavajjhala et al. (2007)]], [[Li et al. (2007)]]
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: ai:KAnonymityInDatasets
    - owl:role:: Process
    - owl:inferred-class:: ai:VirtualProcess
    - belongsToDomain:: [[AIEthicsDomain]]
    - implementedInLayer:: [[ConceptualLayer]]

  - #### Relationships
    id:: k-anonymity-in-datasets-relationships

  - #### OWL Axioms
    id:: k-anonymity-in-datasets-owl-axioms
    collapsed:: true
    - ```clojure
      (Declaration (Class :KAnonymityInDatasets))
(AnnotationAssertion rdfs:label :KAnonymityInDatasets "k-Anonymity in Datasets"@en)
(SubClassOf :KAnonymityInDatasets :AIGovernancePrinciple)
      ```

- ## About k-Anonymity in Datasets
  id:: k-anonymity-in-datasets-about

  - 
  -
    - ### Use Cases
  - ### Healthcare Databases
  -
    **HIPAA Safe Harbor** de-identification:
    - Remove 18 identifier types
    - Can use k-anonymity for additional protection
  -
    **Example**:
    ```python
    # HIPAA + k-anonymity
    qi_cols = ['Age', 'ZIP', 'AdmissionDate']
    data_anonymised = mondrian(data_deidentified, qi_cols, k=5)
    ```
    -
  - ### Best Practices
    **1. QI Identification**:
    - Include all potentially identifying attributes
    - Consider combinations
  -
    **2. Parameter Selection**:
    - **k ≥ 5**: Minimum for meaningful privacy
    - **k ≥ 10**: Recommended for sensitive data
    - Consider l-diversity (l ≥ 2-3) and t-closeness (t ≤ 0.2)
  -
    **3. Utility Testing**:
    - Validate analytical queries pre/post anonymisation
    - Measure information loss
  -
    **4. Threat Modeling**:
    - Assess adversary knowledge
    - Simulate attacks
