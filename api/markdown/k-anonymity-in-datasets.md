- ### Definition
  k-Anonymity is a dataset privacy property that guarantees each record is indistinguishable from at least k-1 other records with respect to quasi-identifier attributes—fields such as age, gender, and postal code that can be combined to re-identify individuals. Anonymization is achieved through generalisation (replacing specific values with broader categories) and suppression (removing highly identifying records), producing equivalence classes where all members share identical quasi-identifier values.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:KAnonymityInDatasets
  - owl-role:: Process
  - owl-inferred:: ai:VirtualProcess
  - belongs-to-domain:: [[AIEthicsDomain]]
  - implemented-in-layer:: [[ConceptualLayer]]

- ### Relationships
  - requires:: [[Data Anonymization Pipeline]], [[Data Governance]]
  - enables:: [[Privacy Preserving Data Sharing]], [[GDPR Compliance]]
  - relatedTo:: [[Differential Privacy]], [[Synthetic Data]], [[Privacy Preserving Analytics]], [[Data Protection]], [[Privacy Mechanism]]
  - contrastsWith:: [[Homomorphic Encryption]], [[Federated Learning]]
  - uses:: [[Synthetic Data Generation]]

- ### Content
  k-Anonymity, formalised by Latanya Sweeney in 2002, addresses the observation that even de-identified datasets can be re-linked to individuals when quasi-identifiers are cross-referenced with external sources. The formal guarantee is that for any combination of quasi-identifier values present in the published dataset, there must exist at least k records sharing those values, preventing an adversary from narrowing a target's record below a group of size k.

  The two primary anonymization operations are generalisation—replacing exact attribute values with less specific categories (e.g., exact birth year becomes a five-year range)—and suppression—removing records or attribute values that cannot be generalised without excessive information loss. The resulting equivalence classes partition the dataset such that within each partition all quasi-identifier attribute combinations are identical, though sensitive attributes (e.g., medical diagnosis) may still vary.

  k-Anonymity has well-documented limitations. The homogeneity attack exploits equivalence classes where all k records share the same sensitive attribute value, yielding the value with certainty despite the quasi-identifier ambiguity. The background knowledge attack leverages auxiliary information (e.g., knowing a target does not have a specific disease) to eliminate candidates within the equivalence class. These vulnerabilities motivated extensions: l-diversity requires at least l distinct sensitive attribute values per class; t-closeness additionally requires that the within-class distribution of sensitive values closely matches the global distribution.

  In practice, k-Anonymity remains a baseline requirement for public health data releases, census microdata, and survey anonymization pipelines under frameworks such as GDPR and HIPAA. Implementation algorithms include Mondrian (recursive multidimensional partitioning), Incognito (bottom-up lattice traversal of generalisation hierarchies), and OLA (optimal lattice anonymization). Recommended parameter values typically start at k ≥ 5 for general-purpose releases and k ≥ 10 or higher for sensitive health or financial datasets.

- ### Provenance
  - sources:: [[Sweeney (2002)]], [[Machanavajjhala et al. (2007)]], [[Li et al. (2007)]]
  - migration-date:: 2026-04-26T00:00:00Z