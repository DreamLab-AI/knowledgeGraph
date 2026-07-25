public:: true

# Informed Consent
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:informed-consent",
  "@type": "Page",
  "vc:slug": "informed-consent",
  "title": "Informed Consent",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:informed-consent",
  "@type": "Class",
  "label": "Informed Consent",
  "definition": "Informed consent is a legal and ethical doctrine requiring that an individual voluntarily agrees to a procedure, treatment, data use, or research participation after receiving and comprehending all material information about its nature, risks, benefits, and alternatives. It rests on four elements: disclosure of relevant information, comprehension by the consenting party, voluntariness free from coercion, and capacity to make the decision. Codified in post-Nuremberg biomedical ethics (Belmont Report, Declaration of Helsinki), GDPR data protection law, and clinical trials regulations, informed consent is the foundational mechanism protecting individual autonomy across medical, research, and digital data contexts.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:consent-management",
    "label": "Consent Management"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:disclosure",
        "label": "Disclosure"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:clinical-trials",
        "label": "Clinical Trials"
      },
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      },
      {
        "@id": "urn:ngm:class:granular-consent-control",
        "label": "Granular Consent Control"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:data-protection-regulation",
        "label": "Data Protection Regulation"
      },
      {
        "@id": "urn:ngm:class:gdpr",
        "label": "GDPR"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:ai-transparency-framework",
        "label": "AI Transparency"
      },
      {
        "@id": "urn:ngm:class:federated-learning",
        "label": "Federated Learning"
      },
      {
        "@id": "urn:ngm:class:synthetic-data",
        "label": "Synthetic Data"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:data-privacy",
        "label": "Data Privacy"
      },
      {
        "@id": "urn:ngm:class:ai-ethics",
        "label": "AI Ethics"
      },
      {
        "@id": "urn:ngm:class:privacy-and-data-governance",
        "label": "Privacy and Data Governance"
      },
      {
        "@id": "urn:ngm:class:ethical-ai",
        "label": "Ethical AI"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:voluntary-informed-consent",
      "label": "Voluntary Informed Consent"
    },
    {
      "@id": "urn:ngm:class:free-and-informed-consent",
      "label": "Free and Informed Consent"
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

- ### Definition
  - [[Informed Consent]] is a foundational ethical and legal doctrine of [[Consent Management]] that requires voluntary, comprehension-based agreement—encompassing disclosure of risks, benefits, and alternatives—before any medical procedure, research participation, or personal [[Data Privacy]] use, enforced through [[Data Protection Regulation]] and biomedical ethics frameworks.

- ### Relationships
  - Informed Consent is the cornerstone mechanism of [[Consent Management]] across medical, research, and digital contexts. It enables valid [[Clinical Trials]] by ensuring participants understand experimental conditions and freely choose to participate. It underpins [[Data Governance]] frameworks by establishing the legal basis for processing personal data, and is operationalised in digital systems through [[Granular Consent Control]] mechanisms. It is directly related to [[Data Privacy]] rights, [[GDPR]] as the primary European data consent framework, and [[Privacy and Data Governance]] strategies. In AI deployment contexts, informed consent requirements shape [[AI Ethics]] frameworks around training data use and automated decision-making, and are a core concern for [[Ethical AI]] certification.

- ### Content
  - The doctrine of informed consent developed from a series of medical ethics catastrophes in the twentieth century. The Nuremberg Doctors' Trial (1946–47) established the Nuremberg Code, which articulated voluntary consent as "absolutely essential" for human experimentation. The Declaration of Helsinki (1964, regularly updated) extended these principles to clinical research globally. In the United States, the Tuskegee Syphilis Study (1932–1972), in which Black men with syphilis were left untreated without knowledge or consent, triggered the National Research Act of 1974 and the Belmont Report (1979), which codified three principles—respect for persons, beneficence, and justice—and required informed consent as the primary mechanism protecting research subjects. These frameworks were incorporated into the Common Rule (45 CFR Part 46), the US federal regulation governing human subjects research.

  - Valid informed consent comprises four elements as defined in bioethics and case law. Disclosure requires that the practitioner or investigator communicate the nature of the proposed action, foreseeable risks and benefits, alternatives, and the right to refuse or withdraw without penalty. Comprehension requires that the information be communicated in a form the individual can understand, considering literacy, language, and cognitive capacity. Voluntariness requires freedom from coercion, undue inducement, or manipulation. Capacity (or competence) requires that the individual possess the cognitive and legal ability to make the decision; proxy consent mechanisms apply where capacity is absent (minors, individuals with cognitive impairment). In clinical practice, consent is documented in writing with signature, though verbal consent is legally sufficient in some contexts.

  - In data protection law, informed consent has been formalised as one of six lawful bases for processing personal data under GDPR (Article 6(1)(a)), with specific conditions defined in Article 7: consent must be freely given, specific, informed, and unambiguous; withdrawal must be as easy as giving consent; and consent cannot be bundled with other agreements. Special category data (health, genetic, biometric, religious, political) requires explicit consent (Article 9). The European Data Protection Board guidance on consent emphasises that pre-ticked boxes, silence, and bundled terms do not constitute valid consent. GDPR's territorial reach—applying to any processing of EU residents' data regardless of processor location—made informed consent a global data governance obligation for technology companies.

  - Through 2024–2025, informed consent faces significant challenges from AI and digital health contexts. AI training on public or clinical datasets raises questions about whether individuals who generated that data consented to its use in model training—a gap being addressed through data trust frameworks, federated learning, and synthetic data generation. The FDA's framework for AI-enabled medical devices includes consent considerations for algorithm updates post-approval. The EU AI Act (effective 2024) imposes transparency requirements for high-risk AI systems that interact with individuals, effectively mandating disclosure elements similar to informed consent for consequential automated decisions. Research into dynamic or just-in-time consent models—where individuals receive contextualised consent requests at the point of data use rather than blanket upfront agreements—is advancing, enabled by consent management platforms that implement [[Granular Consent Control]] at per-purpose, per-processor granularity.