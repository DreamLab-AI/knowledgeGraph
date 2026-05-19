schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/artificial-intelligence#MedicalDiagnosisAI
legacy_uri:: urn:visionclaw:concept:artificial-intelligence:medical-diagnosis-ai
public:: true

# Medical Diagnosis AI
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0568a78019883114e75f26e1ec4b35ad9678728d1b4a7bb0bb00f2072badf4e4",
  "@type": "Page",
  "vc:slug": "medical-diagnosis-ai",
  "title": "Medical Diagnosis AI",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:clinical-decision-support",
      "vc:label": "Clinical Decision Support"
    },
    {
      "@id": "urn:visionflow:owl:class:medical-ai",
      "vc:label": "Medical AI"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse-domain",
      "vc:label": "MetaverseDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:treatment-planning-ai",
      "vc:label": "Treatment Planning AI"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-6bc396e4754a"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "artificial-intelligence"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/artificial-intelligence#MedicalDiagnosisAI"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0343"
    },
    {
      "vc:key": "maturity",
      "vc:value": "draft"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Medical Diagnosis AI"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.50"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:artificial-intelligence:medical-diagnosis-ai"
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
      "vc:value": "urn:visionclaw:concept:artificial-intelligence:medical-diagnosis-ai"
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
    "@id": "urn:visionflow:page:0568a78019883114e75f26e1ec4b35ad9678728d1b4a7bb0bb00f2072badf4e4@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:ngm:class:medical-diagnosis-ai",
  "@type": "Class",
  "label": "Medical Diagnosis AI",
  "definition": "Medical Diagnosis AI refers to artificial intelligence systems that automate or assist in the diagnostic process by analysing patient symptoms, medical history, laboratory results, imaging findings, and other clinical data to generate differential diagnoses, diagnostic hypotheses, and diagnostic ...",
  "domain": "artificial-intelligence",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:medical-ai",
      "label": "Medical AI"
    }
  ],
  "quality": 0.5,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:medical-diagnosis-ai:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:0568a78019883114e75f26e1ec4b35ad9678728d1b4a7bb0bb00f2072badf4e4"
  },
  "vc:resolutions": [
    {
      "raw": "[[Clinical Decision Support]]",
      "resolved": "urn:visionflow:owl:class:clinical-decision-support",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Medical AI]]",
      "resolved": "urn:visionflow:owl:class:medical-ai",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[MetaverseDomain]]",
      "resolved": "urn:visionflow:owl:class:metaverse-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Treatment Planning AI]]",
      "resolved": "urn:visionflow:owl:class:treatment-planning-ai",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:0568a78019883114e75f26e1ec4b35ad9678728d1b4a7bb0bb00f2072badf4e4@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Medical Diagnosis AI refers to artificial intelligence systems that automate or assist in the diagnostic process by analysing patient symptoms, medical history, laboratory results, imaging findings, and other clinical data to generate differential diagnoses, diagnostic hypotheses, and diagnostic recommendations. These systems employ machine learning, knowledge representation, and clinical reasoning algorithms validated against expert physician performance.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:MedicalDiagnosisAI
  - owl-role:: Concept
  - belongs-to-domain:: [[MetaverseDomain]]

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  - Medical Diagnosis AI refers to artificial intelligence systems that automate or assist in the diagnostic process by analysing patient symptoms, medical history, laboratory results, imaging findings, and other clinical data to generate differential diagnoses, diagnostic hypotheses, and diagnostic recommendations. These systems employ machine learning, knowledge representation, and clinical reasoning algorithms validated against expert physician performance.

  ## Core Characteristics

  - **Differential Diagnosis Generation**: Ranked list of possible diagnoses
  - **Multi-Modal Data Integration**: Symptoms, labs, imaging, history synthesis
  - **Evidence-Based Reasoning**: Clinical guideline adherence
  - **Uncertainty Quantification**: Confidence scores and diagnostic uncertainty
  - **Explainable Outputs**: Clinically interpretable diagnostic reasoning

  ## Relationships

  - **Superclass**: Medical AI
  - **Related**: Clinical Decision Support, Medical Imaging AI, Clinical Reasoning
  - **Utilises**: Deep Learning, Knowledge Graphs, Probabilistic Reasoning

  ## Key Literature

  1. Rajkomar, A., Dean, J., & Kohane, I. (2019). "Machine learning in medicine." *New England Journal of Medicine*, 380(14), 1347-1358.

  2. Jiang, F., et al. (2017). "Artificial intelligence in healthcare: past, present and future." *Stroke and Vascular Neurology*, 2(4), 230-243.

  ## See Also

  - [[Medical AI]]
  - [[Clinical Decision Support]]
  - [[Treatment Planning AI]]

  ## Core Characteristics

  - **Differential Diagnosis Generation**: Ranked list of possible diagnoses
  - **Multi-Modal Data Integration**: Symptoms, labs, imaging, history synthesis
  - **Evidence-Based Reasoning**: Clinical guideline adherence
  - **Uncertainty Quantification**: Confidence scores and diagnostic uncertainty
  - **Explainable Outputs**: Clinically interpretable diagnostic reasoning

  ## Relationships

  - **Superclass**: Medical AI
  - **Related**: Clinical Decision Support, Medical Imaging AI, Clinical Reasoning
  - **Utilises**: Deep Learning, Knowledge Graphs, Probabilistic Reasoning

  ## Key Literature

  1. Rajkomar, A., Dean, J., & Kohane, I. (2019). "Machine learning in medicine." *New England Journal of Medicine*, 380(14), 1347-1358.

  2. Jiang, F., et al. (2017). "Artificial intelligence in healthcare: past, present and future." *Stroke and Vascular Neurology*, 2(4), 230-243.

  ## See Also

  - [[Medical AI]]
  - [[Clinical Decision Support]]
  - [[Treatment Planning AI]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
