schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/artificial-intelligence#FairnessMetrics
legacy_uri:: urn:visionclaw:concept:artificial-intelligence:fairness-metrics
public:: true

# Fairness Metrics
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:655ddd6220ef4b1d8cdf5f3b713f29ab9db463aeba8fce27be118a52bf4cc4fc",
  "@type": "Page",
  "vc:slug": "fairness-metrics",
  "title": "Fairness Metrics",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ieee-p7003-2021",
      "vc:label": "IEEE P7003-2021"
    },
    {
      "@id": "urn:visionflow:linked:iso-iec-tr-24027",
      "vc:label": "ISO/IEC TR 24027"
    },
    {
      "@id": "urn:visionflow:linked:nist-sp-1270",
      "vc:label": "NIST SP 1270"
    },
    {
      "@id": "urn:visionflow:owl:class:aiethics-domain",
      "vc:label": "AIEthicsDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
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
      "vc:key": "content-hash",
      "vc:value": "sha256-12-46948fd9af87"
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
      "vc:value": "http://narrativegoldmine.com/artificial-intelligence#FairnessMetrics"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0377"
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
      "vc:value": "Fairness Metrics"
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
      "vc:value": "urn:visionclaw:concept:artificial-intelligence:fairness-metrics"
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
      "vc:value": "urn:visionclaw:concept:artificial-intelligence:fairness-metrics"
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
    "@id": "urn:visionflow:page:655ddd6220ef4b1d8cdf5f3b713f29ab9db463aeba8fce27be118a52bf4cc4fc@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:visionflow:owl:class:fairness-metrics",
  "@type": "OntologyClass",
  "label": "Fairness Metrics",
  "subClassOf": [
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence",
      "vc:label": "artificial-intelligence"
    }
  ],
  "vc:sourceDomain": "artificial-intelligence",
  "vc:status": "draft",
  "vc:maturity": "mature",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:655ddd6220ef4b1d8cdf5f3b713f29ab9db463aeba8fce27be118a52bf4cc4fc"
  },
  "vc:inferenceRule": "R5DomainRootFallback",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:655ddd6220ef4b1d8cdf5f3b713f29ab9db463aeba8fce27be118a52bf4cc4fc@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "Fairness Metrics are quantitative measures and mathematical frameworks used to evaluate and ensure equitable treatment across different demographic groups in AI systems. These metrics provide objective, measurable criteria to assess whether an algorithmic system produces disparate impacts, maintains statistical parity, or achieves equalized odds across protected attributes such as race, gender, age, or disability status. Key fairness metrics include demographic parity (equal positive prediction rates across groups), equalized odds (equal true positive and false positive rates), equal opportunity (equal true positive rates), and predictive parity (equal precision across groups). The selection and application of fairness metrics depends on the specific context, stakeholder values, and regulatory requirements, as different metrics can conflict and no single metric satisfies all fairness criteria simultaneously. Implementation requires confusion matrix analysis, statistical testing, and careful consideration of base rate differences between groups, as formalized in IEEE P7003-2021 and NIST SP 1270 guidelines for algorithmic fairness assessment.",
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
  "@id": "urn:visionflow:annotation:link-resolutions:fairness-metrics:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:655ddd6220ef4b1d8cdf5f3b713f29ab9db463aeba8fce27be118a52bf4cc4fc"
  },
  "vc:resolutions": [
    {
      "raw": "[[IEEE P7003-2021]]",
      "resolved": "urn:visionflow:linked:ieee-p7003-2021",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO/IEC TR 24027]]",
      "resolved": "urn:visionflow:linked:iso-iec-tr-24027",
      "kind": "StubLink"
    },
    {
      "raw": "[[NIST SP 1270]]",
      "resolved": "urn:visionflow:linked:nist-sp-1270",
      "kind": "StubLink"
    },
    {
      "raw": "[[AIEthicsDomain]]",
      "resolved": "urn:visionflow:owl:class:aiethics-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
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
    "@id": "urn:visionflow:page:655ddd6220ef4b1d8cdf5f3b713f29ab9db463aeba8fce27be118a52bf4cc4fc@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Fairness Metrics are quantitative measures and mathematical frameworks used to evaluate and ensure equitable treatment across different demographic groups in AI systems. These metrics provide objective, measurable criteria to assess whether an algorithmic system produces disparate impacts, maintains statistical parity, or achieves equalized odds across protected attributes such as race, gender, age, or disability status. Key fairness metrics include demographic parity (equal positive prediction rates across groups), equalized odds (equal true positive and false positive rates), equal opportunity (equal true positive rates), and predictive parity (equal precision across groups). The selection and application of fairness metrics depends on the specific context, stakeholder values, and regulatory requirements, as different metrics can conflict and no single metric satisfies all fairness criteria simultaneously. Implementation requires confusion matrix analysis, statistical testing, and careful consideration of base rate differences between groups, as formalized in IEEE P7003-2021 and NIST SP 1270 guidelines for algorithmic fairness assessment.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:FairnessMetrics
  - owl-role:: Process
  - owl-inferred:: ai:VirtualProcess
  - belongs-to-domain:: [[AIEthicsDomain]]
  - implemented-in-layer:: [[ConceptualLayer]]

- ### Relationships
  - <!-- No relationships defined -->
  - bridges-to:: [[Blockchain]] (domain: bc)

- ### Content
  Fairness Metrics — content pending enrichment.

- ### Provenance
  - sources:: [[IEEE P7003-2021]], [[ISO/IEC TR 24027]], [[NIST SP 1270]]
  - migration-date:: 2026-04-26T00:00:00Z
