public:: true

# UNESCO Recommendation on the Ethics of AI
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:311e0e36507571093bc8d0a8e8bab19b28ccc4b194f5384e8061d96fbec54535",
  "@type": "Page",
  "vc:slug": "unesco-recommendation-on-the-ethics-of-ai",
  "title": "UNESCO Recommendation on the Ethics of AI",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:unesco-recommendation-on-the-ethics-of-ai-2021",
      "vc:label": "UNESCO Recommendation on the Ethics of AI (2021)"
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
      "vc:value": "AI-0448"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "UNESCO Recommendation on the Ethics of AI"
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
  "@id": "urn:ngm:class:unesco-recommendation-on-the-ethics-of-ai",
  "@type": "Class",
  "label": "UNESCO Recommendation on the Ethics of AI",
  "definition": "The UNESCO Recommendation on the Ethics of Artificial Intelligence is the first global normative framework adopted unanimously by UNESCO's 193 Member States in November 2021, establishing shared ethical principles, values, and actionable policy guidance for responsible AI development and deployment. It articulates ten foundational principles — including proportionality, safety, fairness, sustainability, privacy, human oversight, transparency, accountability, AI literacy, and multi-stakeholder governance — and four core values centred on human dignity, peaceful societies, diversity, and environmental flourishing. As a non-binding but globally authoritative instrument, it shapes national legislation, institutional policy, and international cooperation on AI governance.",
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
    "requires": [
      {"@id": "urn:ngm:class:ai-governance", "label": "AI Governance"},
      {"@id": "urn:ngm:class:accountability", "label": "Accountability"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:responsible-ai", "label": "Responsible AI"},
      {"@id": "urn:ngm:class:ai-policy", "label": "AI Policy"},
      {"@id": "urn:ngm:class:compliance-framework", "label": "Compliance Framework"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:transparency", "label": "Transparency"},
      {"@id": "urn:ngm:class:fairness", "label": "Fairness"},
      {"@id": "urn:ngm:class:privacy", "label": "Privacy"},
      {"@id": "urn:ngm:class:human-rights", "label": "Human Rights"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:ai-ethics", "label": "AI Ethics"},
      {"@id": "urn:ngm:class:ethical-ai", "label": "Ethical AI"},
      {"@id": "urn:ngm:class:governance-framework", "label": "Governance Framework"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:responsible-ai-principles", "label": "Responsible AI Principles"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:legal-framework", "label": "Legal Framework"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:unesco-recommendation-on-the-ethics-of-ai:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:311e0e36507571093bc8d0a8e8bab19b28ccc4b194f5384e8061d96fbec54535"
  },
  "vc:resolutions": [
    {
      "raw": "[[UNESCO Recommendation on the Ethics of AI (2021)]]",
      "resolved": "urn:visionflow:linked:unesco-recommendation-on-the-ethics-of-ai-2021",
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
  - The UNESCO Recommendation on the Ethics of Artificial Intelligence is the first global normative framework establishing ethical principles and policy actions for responsible AI development and deployment, adopted by UNESCO's 193 Member States in November 2021. This comprehensive instrument provides shared values, principles, and actionable policy recommendations to ensure AI technologies respect human rights, protect human dignity, promote diversity and inclusion, and contribute to peaceful and just societies living in harmony with the environment. The Recommendation establishes four core values (human rights and dignity, living in peaceful just and interconnected societies, ensuring diversity and inclusiveness, environment and ecosystem flourishing) and ten foundational principles including proportionality, safety and security, fairness and non-discrimination, sustainability, right to privacy and data protection, human oversight and determination, transparency and explainability, responsibility and accountability, awareness and literacy, and multi-stakeholder and adaptive governance. Unlike legally binding treaties, UNESCO Recommendations establish normative standards that guide national legislation, institutional policies, and international cooperation, providing a foundation for ethical AI governance frameworks worldwide.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:UNESCORecommendationEthicsAI
  - owl-role:: Process
  - owl-inferred:: ai:VirtualProcess
  - belongs-to-domain:: [[AIEthicsDomain]]
  - implemented-in-layer:: [[ConceptualLayer]]

- ### Definition
  The UNESCO Recommendation on the Ethics of Artificial Intelligence is the first global normative framework adopted unanimously by UNESCO's 193 Member States in November 2021, establishing shared ethical principles, values, and actionable policy guidance for responsible AI development and deployment. It articulates ten foundational principles — including proportionality, safety, fairness, sustainability, privacy, human oversight, transparency, accountability, AI literacy, and multi-stakeholder governance — and four core values centred on human dignity, peaceful societies, diversity, and environmental flourishing. As a non-binding but globally authoritative instrument, it shapes national legislation, institutional policy, and international cooperation on AI governance.

- ### Relationships
  - requires:: [[AI Governance]], [[Accountability]]
  - enables:: [[Responsible AI]], [[AI Policy]], [[Compliance Framework]]
  - hasPart:: [[Transparency]], [[Fairness]], [[Privacy]], [[Human Rights]]
  - relatedTo:: [[AI Ethics]], [[Ethical AI]], [[Governance Framework]]
  - supports:: [[Responsible AI Principles]]
  - contrastsWith:: [[Legal Framework]]

- ### Content
  The UNESCO Recommendation on the Ethics of AI emerged from a two-year global multi-stakeholder consultation process coordinated by the Ad Hoc Expert Group on the Ethics of AI. Its adoption in November 2021 by all 193 UNESCO Member States made it the broadest international consensus statement on AI ethics ever achieved, covering both developed and developing nations across all regions.

  The Recommendation's ten principles operate at different levels of abstraction. Proportionality and non-maleficence concern individual-level risk assessment. Safety and security address systemic risks. Fairness and non-discrimination encode social justice requirements. Sustainability ties AI development to planetary boundaries. Privacy and data protection extend existing rights frameworks. Human oversight and determination preserve meaningful human agency. Transparency and explainability address epistemic requirements. Responsibility and accountability allocate duty across the AI value chain. AI literacy empowers citizens and communities. Multi-stakeholder and adaptive governance calls for inclusive, iterative policy structures.

  Unlike the EU AI Act (a binding regulation) or OECD AI Principles (developed-country consensus), UNESCO's Recommendation carries both global reach and developing-nation perspectives. Implementation is supported by the UNESCO Ethical Impact Assessment framework and the ROAM-X indicators for assessing internet universality, adapted for AI contexts. Member States are encouraged to integrate the Recommendation into national AI strategies, educational curricula, research funding criteria, and procurement standards.

  The Recommendation explicitly addresses algorithmic systems' disproportionate impact on marginalised communities, mandating affirmative consideration of gender equality, cultural diversity, linguistic plurality, and the rights of indigenous peoples. This breadth distinguishes it from narrower technical safety frameworks and positions it as a foundational reference document for organisations designing AI governance architectures at national or institutional scale.

- ### Provenance
  - sources:: [[UNESCO Recommendation on the Ethics of AI (2021)]]
  - migration-date:: 2026-04-26T00:00:00Z
