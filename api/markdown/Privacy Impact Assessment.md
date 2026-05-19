public:: true

# Privacy Impact Assessment
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ab4619ea0c5ba1dda0c75dba40ea2b6046cc0ef8a1a39f5425eeb5e9e26250a2",
  "@type": "Page",
  "vc:slug": "privacy-impact-assessment",
  "title": "Privacy Impact Assessment",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:gdpr-article-35",
      "vc:label": "GDPR Article 35"
    },
    {
      "@id": "urn:visionflow:linked:ico-dpia-code",
      "vc:label": "ICO DPIA Code"
    },
    {
      "@id": "urn:visionflow:linked:iso-29134",
      "vc:label": "ISO 29134"
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
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0425"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Privacy Impact Assessment"
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
  "@id": "urn:ngm:class:privacy-impact-assessment",
  "@type": "Class",
  "label": "Privacy Impact Assessment",
  "definition": "Privacy Impact Assessment is a structured eprocess identifying, analyzing, and mitigating privacy risks associated with data processing activities, particularly AI systems handling personal information, ensuring compliance with data protection regulations and protecting individual privacy rights.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-governance-and-ethics",
      "label": "AI Governance and Ethics"
    }
  ],
  "quality": 0.35,
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
  "@id": "urn:visionflow:annotation:link-resolutions:privacy-impact-assessment:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ab4619ea0c5ba1dda0c75dba40ea2b6046cc0ef8a1a39f5425eeb5e9e26250a2"
  },
  "vc:resolutions": [
    {
      "raw": "[[GDPR Article 35]]",
      "resolved": "urn:visionflow:linked:gdpr-article-35",
      "kind": "StubLink"
    },
    {
      "raw": "[[ICO DPIA Code]]",
      "resolved": "urn:visionflow:linked:ico-dpia-code",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO 29134]]",
      "resolved": "urn:visionflow:linked:iso-29134",
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
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Privacy Impact Assessment is a structured evaluation process identifying, analyzing, and mitigating privacy risks associated with data processing activities, particularly AI systems handling personal information, ensuring compliance with data protection regulations and protecting individual privacy rights. This assessment methodology follows defined stages including systematic description documenting processing operations (data flows, purposes, retention periods, recipients), necessity and proportionality assessment evaluating whether processing is essential for stated purposes and uses minimal data required, privacy risk identification analyzing potential harms including unauthorized access, discrimination, surveillance, function creep, and re-identification risks, risk severity and likelihood evaluation producing risk matrices categorizing threats as low, medium, high, or very high based on potential impact and probability, mitigation strategy design specifying technical and organizational measures reducing risks to acceptable levels, and residual risk assessment determining whether remaining risks after mitigation require consultation with data protection authorities per GDPR Article 36. Assessment triggers mandated by GDPR Article 35 include automated decision-making with legal or similarly significant effects on individuals, large-scale processing of special category data (health, biometric, genetic, racial or ethnic origin, political opinions, religious beliefs, trade union membership, sexual orientation), systematic monitoring of publicly accessible areas at large scale, innovative use of new technologies, and processing that prevents data subjects from exercising rights or using services. AI-specific considerations examine algorithmic bias risks affecting protected groups, model explainability limitations preventing meaningful transparency, data quality issues propagating errors or outdated information, automation risks removing meaningful human oversight, and scale effects where processing volumes amplify individual harms. Stakeholder involvement requires consulting data protection officers providing expert guidance, data subjects gathering perspectives from affected individuals, processing staff understanding operational realities, legal counsel ensuring regulatory compliance, and technical experts evaluating security and privacy controls. Documentation artifacts include assessment reports capturing analysis and decisions, risk registers tracking identified risks and mitigation status, consultation records documenting stakeholder input, approval signatures from accountable executives, and review schedules ensuring periodic reassessment as systems or regulations evolve, with assessments reviewed whenever material changes occur in processing purposes, data categories, technologies, or legal landscape.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:PrivacyImpactAssessment
  - owl-role:: Process
  - owl-inferred:: ai:VirtualProcess
  - belongs-to-domain:: [[AIEthicsDomain]]
  - implemented-in-layer:: [[ConceptualLayer]]

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  0425 Privacy Impact Assessment — content pending enrichment.

- ### Provenance
  - sources:: [[GDPR Article 35]], [[ISO 29134]], [[ICO DPIA Code]]
  - migration-date:: 2026-04-26T00:00:00Z
