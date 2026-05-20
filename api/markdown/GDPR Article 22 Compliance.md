public:: true

# GDPR Article 22 Compliance
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cc8690b5d2b8370d4887fa8f8541dc4d0b08e43ffc6683ce8594ca18a5288530",
  "@type": "Page",
  "vc:slug": "gdpr-article-22-compliance",
  "title": "GDPR Article 22 Compliance",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:dutch-dpa",
      "vc:label": "Dutch DPA"
    },
    {
      "@id": "urn:visionflow:linked:french-cnil",
      "vc:label": "French CNIL"
    },
    {
      "@id": "urn:visionflow:linked:gdpr-article-22",
      "vc:label": "GDPR Article 22"
    },
    {
      "@id": "urn:visionflow:linked:wp29-guidelines",
      "vc:label": "WP29 Guidelines"
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
      "vc:value": "AI-0429"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "GDPR Article 22 Compliance"
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
  "@id": "urn:ngm:individual:gdpr-article-22-compliance",
  "@type": "Individual",
  "label": "GDPR Article 22 Compliance",
  "definition": "GDPR Article 22 Compliance addresses automated decision-making and profiling by establishing that data subjects have the right not to be subject to decisions based solely on automated processing (including profiling) which produce legal effects or similarly significantly affect them, requiring hu...",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "instanceOf": [
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
  "@id": "urn:visionflow:annotation:link-resolutions:gdpr-article-22-compliance:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:cc8690b5d2b8370d4887fa8f8541dc4d0b08e43ffc6683ce8594ca18a5288530"
  },
  "vc:resolutions": [
    {
      "raw": "[[Dutch DPA]]",
      "resolved": "urn:visionflow:linked:dutch-dpa",
      "kind": "StubLink"
    },
    {
      "raw": "[[French CNIL]]",
      "resolved": "urn:visionflow:linked:french-cnil",
      "kind": "StubLink"
    },
    {
      "raw": "[[GDPR Article 22]]",
      "resolved": "urn:visionflow:linked:gdpr-article-22",
      "kind": "StubLink"
    },
    {
      "raw": "[[WP29 Guidelines]]",
      "resolved": "urn:visionflow:linked:wp29-guidelines",
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
  - GDPR Article 22 Compliance addresses automated decision-making and profiling by establishing that data subjects have the right not to be subject to decisions based solely on automated processing (including profiling) which produce legal effects or similarly significantly affect them, requiring human intervention, contestation mechanisms, and meaningful information provision for permitted automated decisions. Article 22(1) prohibits solely automated decisions with significant effects unless falling within Article 22(2) exceptions: necessary for contract performance between data subject and controller, authorized by EU or member state law providing suitable safeguards for rights and legitimate interests, or based on data subject's explicit consent. Article 22(3) mandates safeguards for permitted automated decisions including right to obtain human intervention (qualified human reviewer with authority to change decision assessing AI outputs and exercising meaningful discretion rather than rubber-stamping), right to express views (data subjects may provide context, explanations, or objections influencing final determination), and right to contest decision (formal challenge procedures with review and potential reversal), while Article 22(4) restricts decisions based solely on special category data (health, genetic, biometric, racial/ethnic origin, political opinions, religious beliefs, trade union membership, sexual orientation) unless substantial public interest exception applies with suitable safeguards. Compliance requirements encompass determining legal effects or significant effects through criteria including financial impact (credit denial, insurance pricing, employment termination), access to services (healthcare, education, social benefits), legal status (visa, residency, criminal justice), and life opportunities (housing, employment, education), ensuring meaningful human involvement through reviewers with competence to assess AI outputs, authority to change decisions, access to all relevant information beyond AI recommendations, and sufficient time for considered evaluation, providing transparency through information about logic involved in automated processing, significance and envisaged consequences for data subject, and factors considered in decision-making, and implementing technical measures including explainable AI enabling human reviewers to understand decision rationale, audit trails documenting automated and human decision components, bias detection and mitigation ensuring fair treatment across groups, and data quality assurance preventing propagation of errors or outdated information. The 2024-2025 enforcement period witnessed multiple actions establishing that nominal human review insufficient if humans consistently defer to AI outputs (French CNIL cases), automated social welfare systems requiring genuine human discretion (Dutch DPA investigations), and automated employment screening necessitating adequate rejection explanations when AI-driven (Austrian DPA challenges), collectively establishing that Article 22 creates de facto requirement for explainable AI in high-stakes contexts as unexplainable decisions cannot satisfy right to explanation, with decision types commonly subject to Article 22 including credit scoring, recruitment and employment decisions, healthcare diagnoses and treatment recommendations, insurance underwriting and claims processing, and profiling for targeted advertising or content curation when producing significant effects.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:GDPRArticle22Compliance
  - owl-role:: Process
  - owl-inferred:: ai:VirtualProcess
  - belongs-to-domain:: [[AIEthicsDomain]]
  - implemented-in-layer:: [[ConceptualLayer]]

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  GDPR Article 22 Compliance — content pending enrichment.

- ### Provenance
  - sources:: [[GDPR Article 22]], [[French CNIL]], [[Dutch DPA]], [[WP29 Guidelines]]
  - migration-date:: 2026-04-26T00:00:00Z
