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
  "definition": "The UK AI Safety Institute (AISI) is a UK government body established in November 2023 within the Department for Science, Innovation and Technology to evaluate the safety properties of frontier AI models both before and after deployment. It conducts empirical research into emergent AI risks—including dangerous capability elicitation, deceptive alignment, and autonomous replication—and coordinates internationally with counterpart bodies such as the US AI Safety Institute on shared evaluation methodologies and protocols. AISI operates Inspect, an open-source AI evaluation framework, publishes model evaluation reports to inform UK regulatory and procurement decisions, and serves as the primary technical interface between the UK government and leading AI developers for pre-deployment safety assessments. Its work is grounded in the Bletchley Declaration and feeds into broader multilateral AI governance processes including OECD and UN-level deliberations.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-governance-and-ethics",
      "label": "AI Governance and Ethics"
    }
  ],
  "relations": {
    "supports": [
      {
        "@id": "urn:ngm:class:ai-safety",
        "label": "AI Safety"
      },
      {
        "@id": "urn:ngm:class:ai-safety-research",
        "label": "AI Safety Research"
      },
      {
        "@id": "urn:ngm:class:responsible-ai",
        "label": "Responsible AI"
      },
      {
        "@id": "urn:ngm:class:ai-governance-and-ethics",
        "label": "AI Governance and Ethics"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:red-teaming",
        "label": "Red Teaming"
      },
      {
        "@id": "urn:ngm:class:capability-elicitation",
        "label": "Capability Elicitation"
      },
      {
        "@id": "urn:ngm:class:model-evaluation",
        "label": "Model Evaluation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:model-evaluation-results",
        "label": "Model Evaluation Results"
      },
      {
        "@id": "urn:ngm:class:international-ai-cooperation",
        "label": "International AI Cooperation"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:bletchley-declaration",
        "label": "Bletchley Declaration"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:frontier-model-forum",
        "label": "Frontier Model Forum"
      },
      {
        "@id": "urn:ngm:class:us-ai-safety-institute",
        "label": "US AI Safety Institute"
      },
      {
        "@id": "urn:ngm:class:ai-office",
        "label": "EU AI Office"
      },
      {
        "@id": "urn:ngm:class:oecd-ai-policy-observatory",
        "label": "OECD AI Policy Observatory"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:ai-self-regulation",
        "label": "AI Self-Regulation"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:biosecurity",
        "label": "Biosecurity"
      },
      {
        "@id": "urn:ngm:class:cybersecurity",
        "label": "Cybersecurity"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:aisi",
      "label": "AISI"
    }
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - The UK AI Safety Institute (AISI) is a UK government body established in November 2023 within the [[Department for Science, Innovation and Technology]] to evaluate the safety of [[Frontier AI]] models empirically, independent of developer self-reporting. It conducts research into dangerous [[Capability Elicitation]], [[Deceptive Alignment]], and autonomous replication risks, operates the open-source [[Inspect Evaluation Framework]], and coordinates with international counterparts—including the [[US AI Safety Institute]] and the [[EU AI Office]]—on shared evaluation protocols. Its outputs directly inform the UK government's [[AI Governance and Ethics]] approach and provide technical evidence for multilateral negotiations under the [[OECD AI Policy Observatory]] and the United Nations AI Advisory Body.

- ### Overview
  - AISI was created following the inaugural AI Safety Summit held at Bletchley Park in November 2023, the same event that produced the [[Bletchley Declaration]] signed by 28 nations. Its founding rationale is that as frontier AI models approach potentially dangerous capability thresholds, independent empirical safety evaluation is necessary to supplement voluntary developer commitments and corporate AI safety teams.
  - The Institute occupies a novel institutional position: it is a government technical body with direct access to pre-deployment frontier models, functioning as a neutral evaluation authority rather than a regulator with enforcement powers. This design reflects a deliberate policy choice to build technical expertise and evidence bases before codifying regulatory requirements, in line with the UK's principles-based AI regulatory approach.
  - AISI publishes model evaluation reports, develops evaluation tooling, trains government and regulatory staff in AI safety assessment, and engages with the research community to establish best practices for [[AI Safety Research]]. It also represents the UK in international AI safety coordination forums.
  - In mid-2024, AISI was rebranded as the UK AI Security Institute (UKASI) under a change in government emphasis, though it retained substantially the same mandate with added focus on [[Cybersecurity]] dimensions of frontier AI. The AISI name remains widely used in academic and policy literature.

- ### Key Components
  - **Inspect Evaluation Framework**
    - Open-source Python library and task runner for reproducible [[Model Evaluation]] at scale
    - Enables research community and government bodies to run structured evaluations against common benchmarks
    - Supports multi-step agentic evaluations, human-in-the-loop scoring, and sandboxed tool-use assessments
    - Integrates with major frontier model APIs for direct access testing
  - **Dangerous Capability Evaluations**
    - Systematic assessments of whether models provide meaningful uplift to actors attempting [[Bioweapons]] development, cyberoffensive operations, or critical infrastructure attacks
    - Uses [[Red Teaming]] methodologies and skilled human experts to attempt capability elicitation beyond naive prompting
    - Results are classified or partially redacted to avoid providing a roadmap for misuse
  - **Alignment Evaluations**
    - Tests for [[Deceptive Alignment]]—whether models behave differently under evaluation than in deployment
    - Assesses propensity for manipulation, [[Goal Misgeneralisation]], and resistance to oversight
    - Examines sycophancy, sandbagging, and emergent strategic behaviour in multi-step tasks
  - **Pre-Deployment Access Programme**
    - Formal agreements with leading AI developers (including Anthropic, OpenAI, Google DeepMind, Meta) to provide access to frontier models before public release
    - Enables AISI to assess safety properties and publish reports prior to deployment decisions
    - Modelled loosely on analogous programmes for pharmaceutical and aviation safety certification
  - **International Coordination**
    - Bilateral memoranda of understanding with the [[US AI Safety Institute]] (housed within NIST)
    - Participation in the International Network of AI Safety Institutes (INAIS), launched at the Seoul AI Summit in May 2024
    - Engagement with the [[Frontier Model Forum]] and [[OECD AI Policy Observatory]] on shared evaluation standards

- ### Applications and Use Cases
  - **Regulatory Evidence Base**: AISI evaluation reports inform UK government decisions on whether to impose conditions on deployment of particular frontier models, providing independent technical evidence to policymakers lacking deep ML expertise.
  - **Procurement Guidance**: Government departments and public sector bodies use AISI outputs to assess AI products prior to procurement, particularly where deployments involve sensitive data or high-stakes decisions.
  - **Developer Accountability**: The pre-deployment access programme creates a structured accountability mechanism; developers can demonstrate external safety validation beyond internal red-team results.
  - **International Standard-Setting**: AISI contributes to nascent international norms around evaluation methodology, helping to prevent a fragmented landscape where every jurisdiction runs incompatible bespoke assessments.
  - **Research Agenda-Setting**: By publishing findings on evaluation gaps and model behaviours, AISI helps direct the academic [[AI Safety Research]] community toward high-priority problems such as scalable oversight, elicitation robustness, and multi-agent evaluation.
  - **Biosecurity and Cybersecurity Interface**: AISI's dangerous capability work interfaces directly with national [[Biosecurity]] agencies (e.g. UKHSA) and the National Cyber Security Centre to assess dual-use risk from capable models.

- ### Relationships
  - supports:: [[AI Safety]]
  - supports:: [[AI Safety Research]]
  - supports:: [[Responsible AI]]
  - supports:: [[AI Governance and Ethics]]
  - uses:: [[Red Teaming]]
  - uses:: [[Capability Elicitation]]
  - uses:: [[Model Evaluation]]
  - enables:: [[Model Evaluation Results]]
  - enables:: [[Pre-Deployment Safety Testing]]
  - enables:: [[International AI Cooperation]]
  - implements:: [[Bletchley Declaration]]
  - implements:: [[AI Safety Evaluation Framework]]
  - relatedTo:: [[Frontier Model Forum]]
  - relatedTo:: [[US AI Safety Institute]]
  - relatedTo:: [[EU AI Office]]
  - relatedTo:: [[OECD AI Policy Observatory]]
  - relatedTo:: [[Deceptive Alignment]]
  - relatedTo:: [[Autonomous Replication]]
  - hasPart:: [[Inspect Evaluation Framework]]
  - partOf:: [[Department for Science, Innovation and Technology]]
  - contrastsWith:: [[AI Self-Regulation]]
  - bridges-to:: [[Biosecurity]]
  - bridges-to:: [[Cybersecurity]]

- ### Standards and Context
  - **Bletchley Declaration (2023)**: The founding international framework; 28 nations agreed on the need for international cooperation on frontier AI safety evaluation. AISI was announced at the same summit as the UK's implementation of this commitment.
  - **Seoul AI Summit Commitments (2024)**: At the Seoul summit, leading AI developers committed to providing pre-deployment model access to national AI safety institutes; AISI was among the first to operationalise such agreements.
  - **OECD AI Principles**: AISI's evaluation methodology is broadly aligned with OECD AI Principles, particularly on transparency, accountability, and the preservation of human oversight.
  - **UK AI Regulatory Framework**: AISI provides technical support to sector regulators (FCA, Ofcom, CQC, etc.) implementing the UK's proportionate, context-sensitive AI regulatory approach under the AI Opportunities Action Plan.
  - **NIST AI Risk Management Framework**: AISI collaborates with NIST to align evaluation taxonomies, reducing divergence between UK and US assessment approaches for globally deployed models.
  - **International Network of AI Safety Institutes (INAIS)**: A multilateral body bringing together national AI safety institutes from the UK, US, EU, Japan, Canada, Australia, and others to share methodologies, findings, and evaluation tooling.

- ### Governance and Institutional Structure
  - AISI sits within the Department for Science, Innovation and Technology (DSIT) and reports to the Secretary of State for Science.
  - Its founding Chief Executive Officer was Ian Hogarth, a prominent technology investor and AI safety advocate, who chaired the government's Foundation Models Taskforce that preceded AISI.
  - The Institute maintains an independent scientific advisory panel drawing on academic AI safety researchers, domain experts in biosecurity and cybersecurity, and ethicists.
  - Funding is provided through the UK government's AI Safety research budget, distinct from the broader innovation and R&D budgets, reflecting a deliberate separation between safety assessment and capability promotion mandates.
  - AISI does not have enforcement powers; it is positioned as a technical advisory and evaluation body, with regulatory authority remaining with sector-specific regulators and, potentially, a future AI regulator.

- ### Provenance
  - sources:: UK government DSIT announcements; Bletchley Declaration; Seoul AI Summit communiqué; AISI published evaluation reports; OECD AI Policy Observatory records; NIST AI Safety Institute MOU documentation
  - updated:: 2026-06-13
