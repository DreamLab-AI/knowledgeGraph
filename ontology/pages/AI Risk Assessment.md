public:: true

# AI Risk Assessment
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ai-risk-assessment",
  "@type": "Page",
  "vc:slug": "ai-risk-assessment",
  "title": "AI Risk Assessment",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ai-risk-assessment",
  "@type": "Class",
  "label": "AI Risk Assessment",
  "definition": "A structured methodology for identifying, analysing, and evaluating the potential harms, failure modes, and adverse societal impacts arising from the development and deployment of artificial intelligence systems. It applies established risk management frameworks to the distinctive properties of AI—opacity, emergent behaviour, data dependency, and scalability—to produce actionable risk registers and mitigation plans. The process informs governance decisions and regulatory compliance across the full AI system lifecycle.",
  "domain": "governance",
  "maturity": "emerging",
  "subClassOf": {
    "@id": "urn:ngm:class:risk-assessment",
    "label": "Risk Assessment"
  },
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:ai-risk-register",
        "label": "AI Risk Register"
      },
      {
        "@id": "urn:ngm:class:red-teaming",
        "label": "Red Teaming"
      },
      {
        "@id": "urn:ngm:class:adversarial-testing",
        "label": "Adversarial Testing"
      },
      {
        "@id": "urn:ngm:class:threat-modelling",
        "label": "Threat Modelling"
      },
      {
        "@id": "urn:ngm:class:ai-model-card",
        "label": "AI Model Card"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:ai-risk-management",
        "label": "AI Risk Management"
      },
      {
        "@id": "urn:ngm:class:ai-governance-framework",
        "label": "AI Governance Framework"
      },
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      },
      {
        "@id": "urn:ngm:class:responsible-ai",
        "label": "Responsible AI"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:ai-impact-assessment",
        "label": "AI Impact Assessment"
      },
      {
        "@id": "urn:ngm:class:ai-safety",
        "label": "AI Safety"
      },
      {
        "@id": "urn:ngm:class:algorithmic-bias",
        "label": "Algorithmic Bias"
      },
      {
        "@id": "urn:ngm:class:ai-ethics",
        "label": "AI Ethics"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:ai-system",
        "label": "AI System"
      },
      {
        "@id": "urn:ngm:class:model-documentation",
        "label": "Model Documentation"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:nist-ai-rmf",
        "label": "NIST AI RMF"
      },
      {
        "@id": "urn:ngm:class:eu-ai-act-regulatory-instrument",
        "label": "EU AI Act"
      },
      {
        "@id": "urn:ngm:class:iso-iec-42001",
        "label": "ISO IEC 42001"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:failure-mode-analysis",
        "label": "Failure Mode Analysis"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:enterprise-risk-management",
        "label": "Enterprise Risk Management"
      },
      {
        "@id": "urn:ngm:class:cybersecurity-risk-assessment",
        "label": "Cybersecurity Risk Assessment"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:ai-risk-evaluation",
      "label": "AI Risk Evaluation"
    },
    {
      "@id": "urn:ngm:class:automated-system-risk-assessment",
      "label": "Automated System Risk Assessment"
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
  - [[AI Risk Assessment]] is the systematic process of evaluating the probability and severity of harms that may arise from an [[AI System]] throughout its lifecycle. Practitioners enumerate threat categories—ranging from [[Algorithmic Bias]] and [[AI Safety]] failures to data-privacy breaches and misuse—and assign likelihood and impact scores to inform prioritised mitigation. Outputs typically include a maintained [[AI Risk Register]] and form a prerequisite for regulatory conformance under frameworks such as the EU AI Act.

- ### Relationships
  - The assessment process feeds directly into [[AI Risk Management]] and supports the construction of an [[AI Governance Framework]]. It draws on adversarial methodologies including [[Red Teaming]] and [[Adversarial Testing]] to surface latent failure modes. Results are documented in an [[AI Risk Register]] and inform [[AI Impact Assessment]], which considers broader societal consequences. The process is iteratively revisited as systems are updated or deployed in new contexts.

- ### Content
  - Risk assessment as applied to automated systems predates the contemporary AI era, drawing on safety engineering traditions from aviation, nuclear, and medical device regulation. The emergence of opaque neural systems from roughly 2015 onwards created new challenges for traditional risk taxonomies, prompting standards bodies and regulators to develop AI-specific guidance, including NIST's AI Risk Management Framework (2023) and the EU AI Act's classification tiers.

  - The technical practice of AI risk assessment involves constructing attack surfaces, enumerating failure modes (distributional shift, adversarial inputs, data poisoning, hallucination), and quantifying residual risk after mitigations. [[Red Teaming]] exercises—in which dedicated teams attempt to elicit harmful outputs—have become a standard component. Model-specific artefacts such as [[AI Model Card]] reports are used to communicate known limitations and residual risks to downstream deployers.

  - In the enterprise ecosystem, specialised vendors and consulting practices offer AI risk assessment services layered on top of existing GRC (governance, risk, and compliance) platforms. Insurers are developing underwriting criteria that reference AI risk assessment outputs, and financial regulators in the UK, EU, and United States have issued sector-specific guidance requiring documented assessment before deploying high-impact AI systems.

  - By 2024–2025, AI risk assessment has become a mandatory or strongly recommended practice across multiple regulatory jurisdictions. The AISI Frontier AI Safety Framework and voluntary commitments by frontier labs have embedded pre-deployment risk evaluation as a condition of release. Tooling for automated red-teaming and continuous post-deployment monitoring is maturing, reducing the cost of maintaining living risk registers as models are updated.

