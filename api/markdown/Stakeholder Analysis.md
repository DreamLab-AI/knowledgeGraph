public:: true

# Stakeholder Analysis
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:stakeholder-analysis",
  "@type": "Page",
  "vc:slug": "stakeholder-analysis",
  "title": "Stakeholder Analysis",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:stakeholder-analysis",
  "@type": "Class",
  "label": "Stakeholder Analysis",
  "definition": "Stakeholder analysis is a systematic methodology for identifying, mapping, and evaluating the individuals, groups, and organisations that have an interest in—or are affected by—a system, project, or policy, assessing their interests, power, influence, and potential impact on outcomes. It is a foundational practice in requirements engineering, impact assessment, governance design, and change management, enabling decision-makers to anticipate conflicts, prioritise engagement, and design participation mechanisms that are inclusive and legitimate. In AI and technology contexts, stakeholder analysis extends to affected communities who may not self-identify or organise, requiring proactive identification of indirect and diffuse impacts.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:stakeholder", "label": "Stakeholder"}],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:power-interest-grid", "label": "Power-Interest Grid"},
      {"@id": "urn:ngm:class:influence-mapping", "label": "Influence Mapping"},
      {"@id": "urn:ngm:class:stakeholder-register", "label": "Stakeholder Register"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:requirements-engineering", "label": "Requirements Engineering"},
      {"@id": "urn:ngm:class:impact-assessment", "label": "Impact Assessment"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:ai-impact-assessment", "label": "AI Impact Assessment"},
      {"@id": "urn:ngm:class:privacy-impact-assessment", "label": "Privacy Impact Assessment"},
      {"@id": "urn:ngm:class:stakeholder-engagement-in-ai", "label": "Stakeholder Engagement in AI"},
      {"@id": "urn:ngm:class:change-management", "label": "Change Management"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:social-network-analysis", "label": "Social Network Analysis"},
      {"@id": "urn:ngm:class:consultation-process", "label": "Consultation Process"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:participatory-policy-making", "label": "Participatory Policy Making"},
      {"@id": "urn:ngm:class:ai-governance", "label": "AI Governance"},
      {"@id": "urn:ngm:class:regulatory-compliance", "label": "Regulatory Compliance"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:stakeholder-engagement", "label": "Stakeholder Engagement"},
      {"@id": "urn:ngm:class:stakeholder-trust", "label": "Stakeholder Trust"},
      {"@id": "urn:ngm:class:risk-assessment", "label": "Risk Assessment"},
      {"@id": "urn:ngm:class:stakeholder-theory", "label": "Stakeholder Theory"},
      {"@id": "urn:ngm:class:conflict-of-interest", "label": "Conflict of Interest"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:expert-elicitation", "label": "Expert Elicitation"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:ai-ethics", "label": "AI Ethics"},
      {"@id": "urn:ngm:class:fundamental-rights-impact-assessment", "label": "Fundamental Rights Impact Assessment"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:stakeholder-mapping", "label": "Stakeholder Mapping"}
  ],
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - [[Stakeholder Analysis]] is a structured methodology for identifying and evaluating the interests, power, and potential impacts of individuals and groups affected by a system or policy—foundational to [[AI Impact Assessment]], [[Privacy Impact Assessment]], and inclusive [[AI Governance]] design that must account for stakeholders who may not self-represent.

- ### Relationships
  - Stakeholder analysis drives [[Stakeholder Engagement]] activities by prioritising which groups require dialogue, co-design, or notification based on influence and impact mapping. It informs [[Risk Assessment]] by surfacing interests that, if unaddressed, generate resistance or litigation. It enables [[AI Impact Assessment]] and [[Privacy Impact Assessment]] by ensuring affected populations are systematically included rather than discovered post-deployment. The outputs of stakeholder analysis shape [[Participatory Policy Making]] agendas and [[AI Governance]] frameworks by revealing whose voices are structurally absent from standard consultation processes, and strengthening [[Stakeholder Trust]] through demonstrated accountability.

- ### Content
  - Stakeholder analysis as a formal discipline emerged from management science and project management in the 1980s, building on R. Edward Freeman's 1984 work on stakeholder theory as a framework for corporate strategy. Originally conceived as a tool for identifying claimants on corporate resources and obligations, the methodology was rapidly absorbed into public policy analysis, development project evaluation, and later software engineering requirements processes. The core analytic task—identifying who is affected and with what power to act—proved applicable wherever multiple parties had legitimate interests in a common outcome.

  - The practice involves several analytical moves: identification (who has a stake?), categorisation (are they primary or secondary, directly or indirectly affected?), attribute mapping (what are their interests, what power do they hold, what is their position on the issue?), and relationship analysis (how do stakeholders interact with each other?). Common outputs include stakeholder matrices that plot actors on power-interest grids, influence diagrams, and engagement plans specifying the appropriate participation mechanism—from information provision and consultation to co-design and shared decision-making—for each group. In complex sociotechnical systems, computational tools including social network analysis and text mining now assist large-scale stakeholder identification from public documents and social media.

  - In technology governance and AI deployment, stakeholder analysis addresses a structural challenge: systems affect people who have no voice in their design. Predictive policing algorithms affect communities that are not party to procurement decisions; algorithmic hiring tools affect job-seekers who do not know the system is applied to them; algorithmic content moderation affects global audiences governed by policies made in a small number of corporate headquarters. Stakeholder analysis provides the methodological basis for regulatory requirements such as those in the EU AI Act, which mandates fundamental rights impact assessments for high-risk AI systems, and the GDPR's data protection impact assessments, both of which require systematic consideration of affected parties beyond direct contractual relationships.

  - During 2024 and 2025, stakeholder analysis methods adapted to address the distinctive challenges of large-scale AI foundation model deployment, where impacts are diffuse, emergent, and often cross-sectoral. Researchers developed participation frameworks for AI standard-setting processes, highlighting that technical bodies such as ISO and IEEE historically underrepresent civil society and Global South communities. Impact assessment methodologies were extended to capture second-order effects—labour market disruption, cultural homogenisation through AI-generated content, environmental costs of compute infrastructure—that standard project-level stakeholder maps were not designed to surface. Automated stakeholder identification tools using LLMs to analyse regulatory filings, academic literature, and public consultations began entering practice at policy agencies.

