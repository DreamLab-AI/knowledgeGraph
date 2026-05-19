schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/artificial-intelligence#DataMinimisation
legacy_uri:: urn:visionclaw:concept:artificial-intelligence:data-minimisation
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
      "@id": "urn:visionflow:owl:class:aiethics-domain",
      "vc:label": "AIEthicsDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:conceptual-layer",
      "vc:label": "ConceptualLayer"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.95"
    },
    {
      "vc:key": "bridges-to",
      "vc:value": "[[Blockchain]]"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-b5ccaa0fd503"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "created",
      "vc:value": "2025-10-29T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "artificial-intelligence"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/artificial-intelligence#DataMinimisation"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0426"
    },
    {
      "vc:key": "maturity",
      "vc:value": "mature"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Data Minimisation"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.35"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:artificial-intelligence:data-minimisation"
    },
    {
      "vc:key": "status",
      "vc:value": "draft"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:artificial-intelligence:data-minimisation"
    },
    {
      "vc:key": "version",
      "vc:value": "2.0.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:269cac29188bac335fbadcdbece5a144d4e232ae929bdcec59144a30330237b8@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:owl:class:data-minimisation",
  "@type": "OntologyClass",
  "label": "Data Minimisation",
  "subClassOf": [
    {
      "@id": "urn:visionflow:owl:class:privacy-and-data-governance",
      "vc:label": "Privacy and Data Governance"
    }
  ],
  "vc:sourceDomain": "artificial-intelligence",
  "vc:status": "draft",
  "vc:maturity": "mature",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:269cac29188bac335fbadcdbece5a144d4e232ae929bdcec59144a30330237b8"
  },
  "vc:inferenceRule": "R5DomainRootFallback",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:269cac29188bac335fbadcdbece5a144d4e232ae929bdcec59144a30330237b8@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "Data Minimisation is a privacy principle and GDPR requirement (Article 5(1)(c)) mandating that personal data collection and processing be limited to what is adequate, relevant, and necessary for specified purposes, reducing privacy risks by avoiding accumulation of excessive data that could be misused, breached, or enable function creep. This principle implements practical strategies including purpose-bound collection where data requirements are determined by explicitly defined processing purposes with only necessary attributes collected, feature selection applying machine learning techniques identifying minimal feature sets achieving acceptable model performance without extraneous predictors, dimensionality reduction using methods like principal component analysis or autoencoders compressing high-dimensional data while preserving essential information, data aggregation combining detailed records into summary statistics suitable for analysis without individual-level granularity, statistical sampling training models on representative subsets rather than entire populations when full datasets unnecessary, and retention limitation automatically deleting data when no longer needed for o",
  "vc:qualityScore": {
    "@value": "0.35",
    "@type": "xsd:float"
  },
  "vc:authorityScore": {
    "@value": "0.95",
    "@type": "xsd:float"
  },
  "vc:bridgesTo": [
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    }
  ]
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
      "resolved": "urn:visionflow:owl:class:aiethics-domain",
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
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:269cac29188bac335fbadcdbece5a144d4e232ae929bdcec59144a30330237b8@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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

- ### Provenance
  - sources:: [[GDPR Article 5(1)(c)]], [[GDPR Article 25]], [[ISO 29100]]
  - migration-date:: 2026-04-26T00:00:00Z
