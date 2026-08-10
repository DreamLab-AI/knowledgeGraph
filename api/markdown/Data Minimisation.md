public:: true

# Data Minimisation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:269cac29188bac335fbadcdbece5a144d4e232ae929bdcec59144a30330237b8",
  "@type": "Page",
  "vc:slug": "data-minimisation",
  "title": "Data Minimisation",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:gdpr-article-25",
      "vc:label": "GDPR Article 25"
    },
    {
      "@id": "urn:visionflow:linked:gdpr-article-5-1-c",
      "vc:label": "GDPR Article 5(1)(c)"
    },
    {
      "@id": "urn:visionflow:linked:iso-29100",
      "vc:label": "ISO 29100"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-governance-and-ethics",
      "vc:label": "AIEthicsDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:conceptual-layer",
      "vc:label": "ConceptualLayer"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0426"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Data Minimisation"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:data-minimisation",
  "@type": "Class",
  "label": "Data Minimisation",
  "definition": "Data Minimisation is a privacy principle and GDPR requirement (Article 5(1)(c)) mandating that personal data collection and processing be limited to what is adequate, relevant, and necessary for specified purposes, reducing privacy risks by avoiding accumulation of excessive data that could be misused, breached, or enable function creep.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:privacy-and-data-governance",
    "label": "Privacy and Data Governance"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:privacy-by-design",
        "label": "Privacy By Design"
      },
      {
        "@id": "urn:ngm:class:gdpr-compliance",
        "label": "GDPR Compliance"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:purpose-limitation",
        "label": "Purpose Limitation"
      },
      {
        "@id": "urn:ngm:class:retention-policy",
        "label": "Data Retention Policy"
      },
      {
        "@id": "urn:ngm:class:feature-selection",
        "label": "Feature Selection"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:consent-management",
        "label": "Consent Management"
      },
      {
        "@id": "urn:ngm:class:data-classification",
        "label": "Data Classification"
      },
      {
        "@id": "urn:ngm:class:privacy-impact-assessment",
        "label": "Privacy Impact Assessment"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:federated-learning",
        "label": "Federated Learning"
      },
      {
        "@id": "urn:ngm:class:differential-privacy",
        "label": "Differential Privacy"
      },
      {
        "@id": "urn:ngm:class:knowledge-distillation",
        "label": "Model Distillation"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:lifecycle-management",
        "label": "Data Lifecycle Management"
      },
      {
        "@id": "urn:ngm:class:data-governance-framework",
        "label": "Data Governance Framework"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:iso-29100",
        "label": "ISO 29100"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:data-anonymization-pipeline",
        "label": "Data Anonymization Pipeline"
      },
      {
        "@id": "urn:ngm:class:dimensionality-reduction",
        "label": "Dimensionality Reduction"
      },
      {
        "@id": "urn:ngm:class:sampling",
        "label": "Statistical Sampling"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:data-protection",
        "label": "Data Protection"
      },
      {
        "@id": "urn:ngm:class:privacy-framework",
        "label": "Privacy Framework"
      },
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:gdpr",
        "label": "GDPR"
      },
      {
        "@id": "urn:ngm:class:ccpa",
        "label": "CCPA"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:personal-data-store",
        "label": "Personal Data Store"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:machine-learning-discipline-pipeline",
        "label": "Machine Learning Pipeline"
      },
      {
        "@id": "urn:ngm:class:secure-multi-party-computation",
        "label": "Secure Multi-Party Computation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:privacy-impact-assessment",
        "label": "Privacy Impact Assessment"
      },
      {
        "@id": "urn:ngm:class:right-to-erasure",
        "label": "Right to Erasure"
      },
      {
        "@id": "urn:ngm:class:data-subject-rights",
        "label": "Data Subject Rights"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:data-minimization",
      "label": "Data Minimization"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:data-minimisation:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:269cac29188bac335fbadcdbece5a144d4e232ae929bdcec59144a30330237b8"
  },
  "vc:resolutions": [
    {
      "raw": "[[GDPR Article 25]]",
      "resolved": "urn:visionflow:linked:gdpr-article-25",
      "kind": "StubLink"
    },
    {
      "raw": "[[GDPR Article 5(1)(c)]]",
      "resolved": "urn:visionflow:linked:gdpr-article-5-1-c",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO 29100]]",
      "resolved": "urn:visionflow:linked:iso-29100",
      "kind": "StubLink"
    },
    {
      "raw": "[[AIEthicsDomain]]",
      "resolved": "urn:visionflow:owl:class:ai-governance-and-ethics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ConceptualLayer]]",
      "resolved": "urn:visionflow:owl:class:conceptual-layer",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Data Minimisation is a privacy principle and GDPR requirement (Article 5(1)(c)) mandating that personal data collection and processing be limited to what is adequate, relevant, and necessary for specified purposes, reducing privacy risks by avoiding accumulation of excessive data that could be misused, breached, or enable function creep. This principle implements practical strategies including purpose-bound collection where data requirements are determined by explicitly defined processing purposes with only necessary attributes collected, feature selection applying machine learning techniques identifying minimal feature sets achieving acceptable model performance without extraneous predictors, dimensionality reduction using methods like principal component analysis or autoencoders compressing high-dimensional data while preserving essential information, data aggregation combining detailed records into summary statistics suitable for analysis without individual-level granularity, statistical sampling training models on representative subsets rather than entire populations when full datasets unnecessary, and retention limitation automatically deleting data when no longer needed for original purposes or legal obligations. Implementation in AI systems involves analyzing feature importance to identify and remove low-contribution attributes, applying regularization techniques (L1 lasso) that inherently perform feature selection by driving irrelevant coefficients to zero, using early stopping in training to prevent models from learning unnecessarily complex patterns requiring excessive data, and implementing privacy-preserving alternatives like federated learning avoiding data centralization or differential privacy enabling aggregate statistics without raw data collection. Benefits include reduced privacy risk with smaller attack surface for breaches or misuse, compliance demonstration satisfying GDPR data minimization requirements, storage savings from reduced data volumes particularly for large-scale AI applications, processing efficiency with smaller datasets enabling faster training and inference, and improved model generalization as minimization reduces overfitting risks from irrelevant features. Challenges include tension with AI performance where models often improve with more data across more dimensions creating direct conflict with minimization principle, difficulty predicting future uses as strictly minimized data may preclude valuable secondary analyses, and technical complexity of feature selection requiring domain expertise and careful validation that minimization doesn't eliminate critical predictive information, though techniques like model distillation and knowledge transfer enable training on comprehensive data then compressing to minimal representations for deployment.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:DataMinimisation
  - owl-role:: Process
  - owl-inferred:: ai:VirtualProcess
  - belongs-to-domain:: [[AIEthicsDomain]]
  - implemented-in-layer:: [[ConceptualLayer]]

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  0426 Data Minimisation — content pending enrichment.

- ### Current Landscape (2026)
  - Data minimisation has become the pivotal battleground for AI training: the EDPB's Opinion 28/2024 (adopted 17-18 December 2024) held that models trained on personal data cannot always be treated as anonymous, and required that training data be adequate, relevant and necessary — checking first whether synthetic or anonymised data could achieve the purpose.
  - National regulators have softened the operational reading for large models: the CNIL's two AI-and-GDPR recommendations (7 February 2025) confirmed that minimisation "does not prevent the use of large training datasets", provided data is selected and cleaned to strip unnecessary personal data, while the EDPS issued revised Generative AI orientations for EU institutions on 28 October 2025.
  - The EU's Digital Omnibus package, unveiled 19 November 2025, proposes the most consequential shift: a new Article 88c GDPR putting ML training on a legitimate-interests footing (with documented LIAs, right to object and minimisation safeguards), a relative/entity-specific redefinition of "personal data" in Article 4(1), an Article 41a pseudonymisation mechanism, and extension of the breach-notification deadline to 96 hours.
  - The EDPB and EDPS pushed back in Joint Opinion 2/2026 (adopted February 2026), recommending that the strict-necessity standard be retained for processing special-category data used in bias detection and correction for high-risk AI systems.
  - Enforcement continues to bite on the classic principle: the CJEU reinforced minimisation and purpose limitation in Schrems v Meta (C-446/21, judgment 4 October 2024), ruling that indefinite large-scale processing for behavioural advertising cannot be justified merely because some data was public; regulators such as Romania's ANSPDCP have levied fresh fines (15,000 euros against Continental Automotive, early 2026) for minimisation breaches.
  - Privacy-enhancing technologies are being positioned as the practical route to minimisation: the ICO maintains dedicated PETs guidance and, in a March 2026 report on agentic AI, urged privacy-by-design with narrow purposes to avoid "open-ended" access; the Israeli DPA published an English-language PETs technical guide in early 2026.
  - In the UK, the Data (Use and Access) Act 2025 and a 2026 DSIT call for evidence on "data regulation in the age of AI" are reopening how minimisation applies to data-intensive systems, with the frontier challenge being how to reconcile the principle with foundation-model scale, memorisation and re-identification risk, and emerging agentic architectures.

- ### References
  - 1. European Data Protection Board (2024). Opinion 28/2024 on certain data protection aspects related to the processing of personal data in the context of AI models. https://www.edpb.europa.eu/system/files/documents/2024-12/edpb_opinion_202428_ai-models_en.pdf
  - 2. CNIL (2025). AI and GDPR: CNIL publishes new recommendations to support responsible innovation. https://www.cnil.fr/en/ai-and-gdpr-cnil-publishes-new-recommendations-support-responsible-innovation
  - 3. Kennedys Law (2026). The 2025 European Commission EU Digital Omnibus package: the GDPR (Regulation (EU) 2016/679). https://www.kennedyslaw.com/en/thought-leadership/article/2026/the-2025-european-commission-eu-digital-omnibus-package-the-gdpr-regulation-eu-2016679/
  - 4. EDPB & EDPS (2026). Joint Opinion 2/2026 on the Proposal for a Digital Omnibus. https://www.edpb.europa.eu/system/files/documents/2026-02/edpb_edps_jointopinion_202602_digitalomnibus_en.pdf
  - 5. Simmons & Simmons (2026). Data Protection Update - March 2026 (ICO agentic AI report; Digital Omnibus). https://www.simmons-simmons.com/en/publications/cmmuqinm800kqtvk4ff8txlhv/data-protection-update-march-2026

- ### Provenance
  - sources:: [[GDPR Article 5(1)(c)]], [[GDPR Article 25]], [[ISO 29100]]
  - migration-date:: 2026-04-26T00:00:00Z
