public:: true

# AI Trustworthiness Dimensions
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f1001729fc7c6eacb396375ca801b58dd47a22bf536750681205fd3a1b2a6a1b",
  "@type": "Page",
  "vc:slug": "ai-trustworthiness-dimensions",
  "title": "AI Trustworthiness Dimensions",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:eu-charter-of-fundamental-rights",
      "vc:label": "EU Charter of Fundamental Rights"
    },
    {
      "@id": "urn:visionflow:linked:eu-hleg-ai",
      "vc:label": "EU HLEG AI"
    },
    {
      "@id": "urn:visionflow:owl:class:aiethics-domain",
      "vc:label": "AIEthicsDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:conceptual-layer",
      "vc:label": "ConceptualLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:eu-ai-act",
      "vc:label": "EU AI Act"
    },
    {
      "@id": "urn:visionflow:owl:class:smart-contract",
      "vc:label": "Smart Contract"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0408"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "AI Trustworthiness Dimensions"
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
  "@id": "urn:ngm:class:ai-trustworthiness-dimensions",
  "@type": "Class",
  "label": "AI Trustworthiness Dimensions",
  "definition": "AI Trustworthiness Dimensions are the seven interdependent assessment criteria—human agency and oversight, technical robustness and safety, privacy and data governance, transparency and explainability, diversity and non-discrimination and fairness, societal and environmental wellbeing, and accountability—that collectively determine whether an AI system meets the requirements for trustworthy deployment. Established by the EU High-Level Expert Group on AI Ethics Guidelines (2019) and operationalised through the EU AI Act, these dimensions are mutually reinforcing rather than substitutable: satisfying one does not compensate for deficiencies in another.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "qualityScore": 0.8,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-governance-and-ethics",
      "label": "AI Governance and Ethics"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:human-agency-and-oversight", "label": "Human Agency and Oversight"},
      {"@id": "urn:ngm:class:diversity-non-discrimination-and-fairness", "label": "Diversity, Non-Discrimination, and Fairness"},
      {"@id": "urn:ngm:class:societal-and-environmental-wellbeing", "label": "Societal and Environmental Wellbeing"},
      {"@id": "urn:ngm:class:accountability", "label": "Accountability"},
      {"@id": "urn:ngm:class:explainability", "label": "Explainability"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:ai-risk-management", "label": "AI Risk Management"},
      {"@id": "urn:ngm:class:fairness-metrics", "label": "Fairness Metrics"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:trustworthy-ai", "label": "Trustworthy AI"},
      {"@id": "urn:ngm:class:ai-governance-framework", "label": "AI Governance Framework"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:ai-trustworthiness", "label": "AI Trustworthiness"},
      {"@id": "urn:ngm:class:ethical-ai", "label": "Ethical AI"},
      {"@id": "urn:ngm:class:ai-safety", "label": "AI Safety"},
      {"@id": "urn:ngm:class:privacy-by-design", "label": "Privacy By Design"}
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:ai-trustworthiness-dimensions:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f1001729fc7c6eacb396375ca801b58dd47a22bf536750681205fd3a1b2a6a1b"
  },
  "vc:resolutions": [
    {
      "raw": "[[EU Charter of Fundamental Rights]]",
      "resolved": "urn:visionflow:linked:eu-charter-of-fundamental-rights",
      "kind": "StubLink"
    },
    {
      "raw": "[[EU HLEG AI]]",
      "resolved": "urn:visionflow:linked:eu-hleg-ai",
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
    },
    {
      "raw": "[[EU AI Act]]",
      "resolved": "urn:visionflow:owl:class:eu-ai-act",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:owl:class:smart-contract",
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


### Definition

AI Trustworthiness Dimensions are the seven interdependent assessment criteria—human agency and oversight, technical robustness and safety, privacy and data governance, transparency and explainability, diversity and non-discrimination and fairness, societal and environmental wellbeing, and accountability—that collectively determine whether an AI system meets the requirements for trustworthy deployment. Established by the EU High-Level Expert Group on AI Ethics Guidelines (2019) and operationalised through the EU AI Act, these dimensions are mutually reinforcing rather than substitutable: satisfying one does not compensate for deficiencies in another.

### Relationships

The framework **hasPart** [[Human Agency and Oversight]], [[Diversity, Non-Discrimination, and Fairness]], [[Societal and Environmental Wellbeing]], [[Accountability]], and [[Explainability]] as its constituent dimensions. It **requires** [[AI Risk Management]] (to identify which dimensions are at risk in a given deployment context) and [[Fairness Metrics]] (to operationalise the non-discrimination dimension with measurable criteria). It **enables** the creation of [[Trustworthy AI]] systems and provides the evaluative scaffold for an [[AI Governance Framework]]. The framework is **relatedTo** [[AI Trustworthiness]] (the overarching property being assessed), [[Ethical AI]] (the broader normative tradition), [[AI Safety]] (the robustness dimension in particular), and [[Privacy By Design]] (operationalising the privacy dimension at the architecture level).

### Content

The seven dimensions were developed by the EU HLEG as an operationalisation of the ethical principles articulated in its Ethics Guidelines for Trustworthy AI (April 2019). They translate abstract values—human dignity, autonomy, beneficence, justice—into assessable system properties applicable across the AI lifecycle from design through decommissioning.

Human agency and oversight requires that AI systems support rather than undermine human decision-making, preserve the right to opt out of automated decisions, and maintain meaningful oversight mechanisms. Technical robustness and safety demands resilience to adversarial inputs, graceful degradation when operating outside the training distribution, and rigorous safety testing. Privacy and data governance requires data minimisation, purpose limitation, privacy-by-design architecture, and verifiable data quality assurance.

Transparency and explainability mandates traceability of training data and model decisions, with explanations calibrated to the technical sophistication of each stakeholder group. Diversity, non-discrimination, and fairness requires active auditing for algorithmic bias across protected characteristics, inclusive design processes, and intersectional analysis where multiple protected attributes interact. Societal and environmental wellbeing extends assessment beyond direct harms to include energy consumption, labour market impacts, and effects on democratic institutions.

Accountability establishes the organisational and legal responsibilities for AI systems, requiring audit trails, redress mechanisms for affected individuals, and documented chains of responsibility. The EU AI Act translates these dimensions into binding requirements for high-risk AI systems, with conformity assessments conducted by notified bodies against harmonised standards developed by CEN/CENELEC and ISO/IEC JTC 1/SC 42.

- ### Provenance
  - sources:: [[EU HLEG AI]], [[EU Charter of Fundamental Rights]], [[EU AI Act]]
  - migration-date:: 2026-04-26T00:00:00Z
