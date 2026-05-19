schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/artificial-intelligence#Diversity,Non-discrimination,AndFairness
legacy_uri:: urn:visionclaw:concept:artificial-intelligence:diversity-non-discrimination-and-fairness
public:: true

# Diversity, Non-Discrimination, and Fairness
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:59716cc9468415a64b4c7688e4ebd1c543c737b0243411dad903e72a3c19144e",
  "@type": "Page",
  "vc:slug": "diversity-non-discrimination-and-fairness",
  "title": "Diversity, Non-Discrimination, and Fairness",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:eu-charter-article-21",
      "vc:label": "EU Charter Article 21"
    },
    {
      "@id": "urn:visionflow:linked:iso-iec-tr-24027",
      "vc:label": "ISO/IEC TR 24027"
    },
    {
      "@id": "urn:visionflow:linked:wcag",
      "vc:label": "WCAG"
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
    },
    {
      "@id": "urn:visionflow:owl:class:digital-twin",
      "vc:label": "Digital Twin"
    },
    {
      "@id": "urn:visionflow:owl:class:eu-ai-act",
      "vc:label": "EU AI Act"
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
      "vc:value": "sha256-12-7ba84de39373"
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
      "vc:value": "http://narrativegoldmine.com/artificial-intelligence#Diversity,Non-discrimination,AndFairness"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0413"
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
      "vc:value": "Diversity, Non-Discrimination, and Fairness"
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
      "vc:value": "urn:visionclaw:concept:artificial-intelligence:diversity-non-discrimination-and-fairness"
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
      "vc:value": "urn:visionclaw:concept:artificial-intelligence:diversity-non-discrimination-and-fairness"
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
    "@id": "urn:visionflow:page:59716cc9468415a64b4c7688e4ebd1c543c737b0243411dad903e72a3c19144e@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:visionflow:owl:class:diversity-non-discrimination-and-fairness",
  "@type": "OntologyClass",
  "label": "Diversity, Non-Discrimination, and Fairness",
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
    "@id": "urn:visionflow:page:59716cc9468415a64b4c7688e4ebd1c543c737b0243411dad903e72a3c19144e"
  },
  "vc:inferenceRule": "R5DomainRootFallback",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:59716cc9468415a64b4c7688e4ebd1c543c737b0243411dad903e72a3c19144e@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "Diversity Non-Discrimination and Fairness is a trustworthiness dimension ensuring AI systems avoid unfair bias, ensure equitable treatment across demographic groups, implement accessibility and universal design, and enable inclusive stakeholder participation throughout development and deployment. This dimension encompasses three core components: unfair bias avoidance (identifying bias affecting protected characteristics including sex, racial or ethnic origin, religion, disability, age, and sexual orientation per EU Charter Article 21, implementing bias mitigation through pre-processing data corrections, in-processing fairness constraints, and post-processing prediction adjustments, and continuously monitoring fairness metrics including demographic parity requiring equal selection rates across groups, equalized odds ensuring equal true positive and false positive rates, equal opportunity guaranteeing equal true positive rates, and individual fairness treating similar individuals similarly), accessibility and universal design (complying with Web Content Accessibility Guidelines WCAG ensuring perceivable, operable, understandable, and robust interfaces, implementing European Accessibi",
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
    },
    {
      "@id": "urn:visionflow:owl:class:digital-twin",
      "vc:label": "Digital Twin"
    }
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:diversity-non-discrimination-and-fairness:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:59716cc9468415a64b4c7688e4ebd1c543c737b0243411dad903e72a3c19144e"
  },
  "vc:resolutions": [
    {
      "raw": "[[EU Charter Article 21]]",
      "resolved": "urn:visionflow:linked:eu-charter-article-21",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO/IEC TR 24027]]",
      "resolved": "urn:visionflow:linked:iso-iec-tr-24027",
      "kind": "StubLink"
    },
    {
      "raw": "[[WCAG]]",
      "resolved": "urn:visionflow:linked:wcag",
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
    },
    {
      "raw": "[[Digital Twin]]",
      "resolved": "urn:visionflow:owl:class:digital-twin",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[EU AI Act]]",
      "resolved": "urn:visionflow:owl:class:eu-ai-act",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:59716cc9468415a64b4c7688e4ebd1c543c737b0243411dad903e72a3c19144e@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Diversity Non-Discrimination and Fairness is a trustworthiness dimension ensuring AI systems avoid unfair bias, ensure equitable treatment across demographic groups, implement accessibility and universal design, and enable inclusive stakeholder participation throughout development and deployment. This dimension encompasses three core components: unfair bias avoidance (identifying bias affecting protected characteristics including sex, racial or ethnic origin, religion, disability, age, and sexual orientation per EU Charter Article 21, implementing bias mitigation through pre-processing data corrections, in-processing fairness constraints, and post-processing prediction adjustments, and continuously monitoring fairness metrics including demographic parity requiring equal selection rates across groups, equalized odds ensuring equal true positive and false positive rates, equal opportunity guaranteeing equal true positive rates, and individual fairness treating similar individuals similarly), accessibility and universal design (complying with Web Content Accessibility Guidelines WCAG ensuring perceivable, operable, understandable, and robust interfaces, implementing European Accessibility Act requirements, and applying universal design principles creating systems usable by people with diverse abilities without specialized adaptation), and stakeholder participation (involving diverse stakeholders including end users, affected communities, domain experts, and civil society throughout development lifecycle, implementing participatory design methodologies enabling co-creation with affected populations, and ensuring representative development teams reflecting diversity of deployment contexts and user populations). Legal frameworks including the EU AI Act mandate high-risk systems implement data governance ensuring training, validation, and testing datasets are relevant, representative, accurate, complete, and free from errors, with potential biases identified and mitigated. The 2024-2025 period marked transition from voluntary fairness practices to legally mandated requirements with enforcement mechanisms across jurisdictions including EU AI Act penalties reaching EUR 35 million or 7% of worldwide annual turnover, U.S. state-level legislation including Colorado AI Act and New York City Bias Audit Law, and international standards including ISO/IEC TR 24027:2021 for bias detection and ISO/IEC 42001:2023 for AI risk management, with regulatory sandboxes enabling deliberate testing to expose unwanted bias before deployment.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:DiversityNonDiscriminationFairness
  - owl-role:: Process
  - owl-inferred:: ai:VirtualProcess
  - belongs-to-domain:: [[AIEthicsDomain]]
  - implemented-in-layer:: [[ConceptualLayer]]

- ### Relationships
  - <!-- No relationships defined -->
  - bridges-to:: [[Digital Twin]], [[Blockchain]]

- ### Content
  Diversity, Non-Discrimination, and Fairness — content pending enrichment.

- ### Provenance
  - sources:: [[EU AI Act]], [[EU Charter Article 21]], [[ISO/IEC TR 24027]], [[WCAG]]
  - migration-date:: 2026-04-26T00:00:00Z
