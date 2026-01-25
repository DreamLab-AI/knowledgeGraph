- ### OntologyBlock
  id:: 0427-pseudonymisation-ontology
  collapsed:: true

  - **Identification**
    - public-access:: true
    - ontology:: true
    - term-id:: AI-0427
    - preferred-term:: 0427 Pseudonymisation
    - source-domain:: ai
    - status:: in-progress
    - version:: 1.0
    - last-updated:: 2025-10-29

  - **Definition**
    - definition:: Pseudonymisation is a data protection technique defined in GDPR Article 4(5) as processing personal data such that it can no longer be attributed to a specific data subject without additional information, which is kept separately under technical and organizational measures preventing re-identification. This approach replaces direct identifiers (names, email addresses, national identification numbers) with pseudonyms (aliases, tokens, or encrypted identifiers) while maintaining data utility for analysis, creating reversible anonymization that reduces but does not eliminate re-identification risk unlike full anonymization which irreversibly severs links between data and individuals. Implementation techniques include cryptographic hashing applying one-way hash functions (SHA-256, HMAC) with secret keys converting identifiers to fixed-length pseudonyms deterministically enabling consistent linkage across datasets while preventing reverse lookup without keys, tokenization replacing sensitive identifiers with randomly generated tokens stored in secure mapping tables enabling authorized re-identification when necessary, encryption-based pseudonymisation using symmetric or asymmetric encryption with keys managed separately from pseudonymized data, and deterministic or format-preserving techniques maintaining data structure (preserving ZIP code format, date formats) for compatibility with legacy systems. GDPR recognition appears across multiple articles including Article 4(5) defining the technique, Article 25 recommending pseudonymisation as privacy-by-design measure, Article 32 listing it as appropriate security measure, and Recital 28 noting pseudonymisation reduces risks to data subjects allowing data controllers to meet protection obligations while permitting useful data processing. Benefits include reduced re-identification risk as pseudonymized data presents higher barriers to linking records with real identities, regulatory flexibility with GDPR treating pseudonymized data more favorably than identifiable personal data for certain processing activities, data utility preservation enabling meaningful analytics, reporting, and machine learning on protected datasets while maintaining referential integrity, and breach impact mitigation as stolen pseudonymized data has limited value without corresponding key material or mapping tables. Applications in AI systems span training data protection pseudonymizing subjects in training datasets preventing model memorization of real identities, cross-organizational collaboration enabling data sharing for collaborative ML without exposing participant identities, longitudinal analysis tracking individuals across time periods for behavior modeling while protecting identity, and audit trail privacy maintaining activity logs for security monitoring without storing plaintext user identifiers, though limitations include remaining personal data status under GDPR as pseudonymized data still constitutes personal data subject to regulatory requirements, linkability vulnerabilities where deterministic pseudonymisation enables tracking across contexts potentially revealing behavioral patterns, key management complexity requiring secure storage and access controls for re-identification keys, and potential re-identification through auxiliary information attacks combining pseudonymized data with external datasets to unm ask identities.
    - maturity:: mature
    - source:: [[GDPR Article 4(5)]], [[GDPR Article 25]], [[GDPR Article 32]]
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: ai:Pseudonymisation
    - owl:role:: Process
    - owl:inferred-class:: ai:VirtualProcess
    - belongsToDomain:: [[AIEthicsDomain]]
    - implementedInLayer:: [[ConceptualLayer]]

  - #### Relationships
    id:: 0427-pseudonymisation-relationships

  - #### OWL Axioms
    id:: 0427-pseudonymisation-owl-axioms
    collapsed:: true
    - ```clojure
      (Declaration (Class :Pseudonymisation))
(SubClassOf :Pseudonymisation :PrivacyPreservingTechnique)

;; Core Relationships
(SubClassOf :Pseudonymisation
  (ObjectSomeValuesFrom :replaces :DirectIdentifiers))
(SubClassOf :Pseudonymisation
  (ObjectSomeValuesFrom :generates :Pseudonyms))
(SubClassOf :Pseudonymisation
  (ObjectSomeValuesFrom :maintains :DataUtility))
(SubClassOf :Pseudonymisation
  (ObjectSomeValuesFrom :protects :IndirectIdentification))
(SubClassOf :Pseudonymisation
  (ObjectSomeValuesFrom :enables :Reversibility))
(SubClassOf :Pseudonymisation
  (ObjectSomeValuesFrom :separates :IdentifyingInformation))
(SubClassOf :Pseudonymisation
  (ObjectSomeValuesFrom :applies :CryptographicTransformation))
(SubClassOf :Pseudonymisation
  (ObjectSomeValuesFrom :preserves :DataRelationships))

;; Pseudonymisation Techniques
(SubClassOf :Pseudonymisation
  (ObjectSomeValuesFrom :employs
    (ObjectUnionOf :CryptographicHashing
                   :Tokenisation
                   :EncryptionBased
                   :RandomIdentifiers
                   :DeterministicMapping)))

;; Security Properties
(SubClassOf :Pseudonymisation
  (ObjectSomeValuesFrom :provides
    (ObjectIntersectionOf :LinkabilityResistance
                         :ReversibilityControl
                         :KeyManagement
                         :AuditTrail)))

;; Data Properties
(SubClassOf :Pseudonymisation
  (DataHasValue :hashAlgorithm xsd:string))
(SubClassOf :Pseudonymisation
  (DataHasValue :keyLength xsd:integer))
(SubClassOf :Pseudonymisation
  (DataHasValue :reversible xsd:boolean))
(SubClassOf :Pseudonymisation
  (DataHasValue :linkabilityRisk
    (DatatypeRestriction xsd:float (MinInclusive "0.0") (MaxInclusive "1.0"))))

;; GDPR Recognition
(SubClassOf :Pseudonymisation
  (ObjectSomeValuesFrom :recognisedBy
    (ObjectUnionOf :GDPR_Article4_5 ;; Definition
                   :GDPR_Article25 ;; Privacy by design
                   :GDPR_Article32 ;; Security measure
                   :GDPR_Recital28 ;; Reduced risks)))

;; Application Domains
(SubClassOf :Pseudonymisation
  (ObjectSomeValuesFrom :appliesTo
    (ObjectUnionOf :UserIdentifiers
                   :MedicalRecords
                   :TransactionData
                   :BehaviouralData
                   :BiometricTemplates)))

;; ML-Specific Uses
(SubClassOf :Pseudonymisation
  (ObjectSomeValuesFrom :supports
    (ObjectUnionOf :ModelTraining
                   :DataLinkage
                   :CrossDatasetAnalysis
                   :AuditableProcessing)))
      ```

- ## About 0427 Pseudonymisation
  id:: 0427-pseudonymisation-about

  - 
  -
  
