public:: true

# EU AI Act
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:4f65548bc2b3aafaa4d06d118c2e598d71035d85dc348d6764ca466c3f8b3970",
  "@type": "Page",
  "vc:slug": "eu-ai-act",
  "title": "EU AI Act",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:regulation",
      "vc:label": "Regulation"
    },
    {
      "@id": "urn:visionflow:linked:risk-based-regulation",
      "vc:label": "Risk Based Regulation"
    },
    {
      "@id": "urn:visionflow:linked:ai-governance",
      "vc:label": "AI Governance"
    },
    {
      "@id": "urn:visionflow:linked:algorithmic-bias",
      "vc:label": "Algorithmic Bias"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-06T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:eu-ai-act",
  "@type": "Class",
  "label": "EU AI Act",
  "definition": "The European Union's Artificial Intelligence Act (Regulation (EU) 2024/1689), the world's first comprehensive horizontal legal framework for artificial intelligence, which classifies AI systems into risk tiers — unacceptable, high, limited and minimal — and imposes proportionate obligations on providers and deployers, including conformity assessment, data governance, transparency, human oversight, robustness and post-market monitoring, with extraterritorial reach over any system placed on the EU market and penalties of up to 7% of global annual turnover.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:regulation",
    "label": "Regulation"
  },
  "relations": {
    "implements": [
      {
        "@id": "urn:ngm:class:risk-based-regulation",
        "label": "Risk Based Regulation"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:ai-governance",
        "label": "AI Governance"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:algorithmic-bias",
        "label": "Algorithmic Bias"
      },
      {
        "@id": "urn:ngm:class:compliance-audit-trail",
        "label": "Compliance Audit Trail"
      }
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "ResearchAugment"
  }
}
```

- ### Definition
  - "The European Union's Artificial Intelligence Act (Regulation (EU) 2024/1689), the world's first comprehensive horizontal legal framework for artificial intelligence, which classifies AI systems into risk tiers — unacceptable, high, limited and minimal — and imposes proportionate obligations on providers and deployers, including conformity assessment, data governance, transparency, human oversight, robustness and post-market monitoring, with extraterritorial reach over any system placed on the EU market and penalties of up to 7% of global annual turnover."

- ### Semantic Classification
  - owl-class:: governance:EUAIAct
  - owl-role:: Artifact

- ### Relationships
  - is-subclass-of:: [[Regulation]]
  - implements:: [[Risk Based Regulation]]
  - part-of:: [[AI Governance]]
  - related-to:: [[Algorithmic Bias]]

- ### Content

  ## Definition

  The **EU AI Act** entered into force on 1 August 2024 as Regulation (EU) 2024/1689, establishing the first binding, economy-wide legal regime for artificial intelligence anywhere in the world. Its central mechanism is a risk-based pyramid: practices deemed an unacceptable risk (social scoring by public authorities, manipulative subliminal techniques, untargeted scraping of facial images, most real-time remote biometric identification in public spaces) are prohibited outright; high-risk systems (in areas such as employment, credit scoring, education, critical infrastructure, law enforcement and medical devices) must satisfy strict requirements before and after market placement; limited-risk systems carry transparency duties such as disclosing that a user is interacting with an AI; and minimal-risk systems remain unregulated.

  For high-risk systems the Act mandates a quality-management system, risk management across the lifecycle, training-data governance to limit [[Algorithmic Bias]], technical documentation, record-keeping and logging, human oversight, and demonstrated accuracy, robustness and cybersecurity — obligations verified through conformity assessment and CE marking. A separate chapter added late in negotiation governs general-purpose AI (GPAI) models, imposing documentation and copyright-policy duties on all providers and additional systemic-risk obligations (model evaluation, adversarial testing, incident reporting) on models trained above a compute threshold of 10²⁵ FLOPs.

  The Act applies extraterritorially: any provider placing a system on the EU market, or whose system's output is used in the Union, falls within scope regardless of establishment. Enforcement is shared between national market-surveillance authorities and the European AI Office for GPAI, with fines tiered up to €35 million or 7% of worldwide annual turnover for prohibited practices.

  ## Current Landscape

  Application is phased, and the timeline was substantially revised in 2026. Prohibitions and AI-literacy duties applied from 2 February 2025 and GPAI obligations from 2 August 2025. The "Digital Omnibus on AI" (Regulation (EU) 1744/2026, applicable from 27 July 2026) then deferred the bulk of the high-risk regime: obligations for stand-alone Annex III high-risk systems (employment, education, biometrics, law enforcement, critical infrastructure) now apply from 2 December 2027, and those for AI embedded in regulated products under Annex I from 2 August 2028, largely because CEN-CENELEC JTC 21 harmonised standards — whose adoption gives providers a presumption of conformity — were not ready in time.

  What the Omnibus did not move: Article 50 transparency duties (disclosing interaction with AI, deepfake labelling) applied on schedule on 2 August 2026 for newly placed systems, with the Article 50(2) machine-readable marking of synthetic content deferred only to 2 December 2026; and the AI Office's GPAI enforcement powers, including fines, activated on 2 August 2026. The Act continues to function as a de facto global standard through the "Brussels effect", shaping vendor compliance programmes far beyond Europe.

  **Sources**:
  - https://fpf.org/blog/the-ai-act-implementation-timeline-what-changes-under-the-ai-omnibus/
  - https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai
  - https://www.mayerbrown.com/en/insights/publications/2026/07/eu-ai-act-news-digital-omnibus-on-ai-new-guidance-on-risk-classification-gpai-and-transparency-obligations
  - https://cdp.cooley.com/digital-ai-omnibus-delays-key-deadlines-introduces-new-rules/

  Within this knowledge graph the EU AI Act anchors the regulatory dimension of [[AI Governance]]: accountability, transparency and bias-mitigation practices reference it as the binding instrument that operationalises [[Risk Based Regulation]], and audit-trail and disclosure mechanisms cite it as the source of their documentation requirements.
