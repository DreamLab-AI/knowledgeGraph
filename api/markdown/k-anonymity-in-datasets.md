- ### Definition
  - k-Anonymity in Datasets is a privacy-preserving property ensuring that each record in a dataset is indistinguishable from at least k-1 other records with respect to quasi-identifiers (attributes that could potentially identify individuals when combined, such as age, gender, zip code), preventing re-identification attacks by guaranteeing anonymity sets of at least size k. This technique achieves anonymization through generalization (replacing specific values with broader categories, such as exact age → age range [30-40], 5-digit zip code → 3-digit prefix) and suppression (removing or masking particularly identifying attribute values when generalization insufficient), producing equivalence classes where all records within a class share identical quasi-identifier values. The privacy guarantee states that for any record in the dataset, an adversary with knowledge of quasi-identifiers cannot distinguish the target individual from k-1 others, formalized as minimum group size ≥ k for all equivalence classes partitioned by quasi-identifiers. However, limitations include vulnerability to homogeneity attacks when sensitive attributes lack diversity within equivalence classes (all k individuals having same disease diagnosis still leaks information), background knowledge attacks leveraging external information to narrow anonymity sets, and composition attacks combining multiple published datasets to re-identify individuals despite each satisfying k-anonymity independently. Extensions addressing these limitations include l-diversity requiring each equivalence class to contain at least l distinct sensitive attribute values ensuring diversity beyond quasi-identifier indistinguishability, t-closeness requiring sensitive attribute distribution within each equivalence class to be close (within threshold t) to distribution in overall dataset preventing attribute disclosure through distribution differences, and δ-presence ensuring individuals' presence or absence in dataset cannot be determined with confidence exceeding δ. Implementation algorithms include Mondrian recursive partitioning of feature space creating balanced anonymization groups, Incognito bottom-up lattice traversal exploring generalization strategies, and μ-Argus specialized tool for statistical disclosure control in survey data, with typical parameter selections including k ≥ 5 minimum for meaningful privacy, k ≥ 10 recommended for sensitive data, l ≥ 2-3 for l-diversity, and t ≤ 0.2 for t-closeness applications.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:KAnonymityInDatasets
  - owl-role:: Process
  - owl-inferred:: ai:VirtualProcess
  - belongs-to-domain:: [[AIEthicsDomain]]
  - implemented-in-layer:: [[ConceptualLayer]]

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  k-Anonymity in Datasets — content pending enrichment.

- ### Provenance
  - sources:: [[Sweeney (2002)]], [[Machanavajjhala et al. (2007)]], [[Li et al. (2007)]]
  - migration-date:: 2026-04-26T00:00:00Z