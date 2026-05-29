public:: true

# uk ai safety institute
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f2d59e62f357160e2e92378f0ae11a4a7830b9bd25ff4c681761f83d36255563",
  "@type": "Page",
  "vc:slug": "uk-ai-safety-institute",
  "title": "uk ai safety institute",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:uk-ai-safety-institute",
  "@type": "Class",
  "label": "UK AI Safety Institute",
  "definition": "The UK AI Safety Institute (AISI) is a UK government body established to evaluate the safety properties of frontier AI models before and after deployment, conduct research into emergent AI risks including deceptive alignment and capability elicitation, and coordinate with international counterparts—notably the US AI Safety Institute—on shared evaluation methodologies. It operates Inspect, an open-source AI evaluation framework, and publishes model evaluation results to inform regulatory and procurement decisions. The AISI sits within the Department for Science, Innovation and Technology and maintains close links with the Frontier Model Forum.",
  "domain": "artificial-intelligence",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-governance-and-ethics",
      "label": "AI Governance and Ethics"
    }
  ],
  "relations": {
    "supports": [
      {"@id": "urn:ngm:class:ai-safety", "label": "AI Safety"},
      {"@id": "urn:ngm:class:ai-safety-research", "label": "AI Safety Research"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:red-teaming", "label": "Red Teaming"},
      {"@id": "urn:ngm:class:frontier-model-forum", "label": "Frontier Model Forum"},
      {"@id": "urn:ngm:class:responsible-ai", "label": "Responsible AI"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:model-evaluation-results", "label": "Model Evaluation Results"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - The UK AI Safety Institute (AISI) is a UK government body established to evaluate the safety properties of frontier AI models before and after deployment, conduct research into emergent AI risks including deceptive alignment and capability elicitation, and coordinate with international counterparts—notably the US AI Safety Institute—on shared evaluation methodologies. It operates Inspect, an open-source AI evaluation framework, and publishes model evaluation results to inform regulatory and procurement decisions. The AISI sits within the Department for Science, Innovation and Technology and maintains close links with the Frontier Model Forum.

- ### Semantic Classification
  - owl-class:: uk-ai-safety-institute:UK AI Safety Institute
  - owl-role:: Concept

- ### Relationships
  - supports [[AI Safety]]
  - supports [[AI Safety Research]]
  - relatedTo [[Red Teaming]]
  - relatedTo [[Frontier Model Forum]]
  - relatedTo [[Responsible AI]]
  - enables [[Model Evaluation Results]]

- ### Content
  The UK AI Safety Institute (AISI) was established in November 2023 following commitments made at the inaugural AI Safety Summit held at Bletchley Park. Its founding mandate is to assess the safety of the most capable frontier AI models—those operating at the threshold of potentially dangerous capability—through systematic empirical evaluation rather than relying solely on developer self-reporting. The Institute works with AI developers to gain pre-deployment access to models for safety testing, and has published reports on its evaluations of leading frontier systems.

  Technically, AISI's evaluation work spans capability elicitation (assessing what a model can do with skilled prompting and scaffolding beyond naive assessment), dangerous capability evaluations (covering cyberoffence, biological weapons uplift, and autonomous replication), and alignment evaluations (assessing propensity for deceptive reasoning, manipulation, or goal misgeneralisation). The Inspect framework, open-sourced by AISI, provides a reproducible infrastructure for running these evaluations.

  AISI operates in an international context, coordinating with the US AI Safety Institute (housed within NIST), the EU AI Office, and national AI safety bodies in Japan, Canada, and other Bletchley Declaration signatories. This coordination supports the development of shared evaluation protocols that reduce duplicated testing burden on developers whilst maintaining independent verification. The Institute's outputs feed into the UK government's AI regulatory approach and provide technical evidence for international AI governance negotiations, including discussions under the OECD AI Policy Observatory and the UN's AI advisory body.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
