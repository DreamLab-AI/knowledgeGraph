public:: true

# EU HLEG AI
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f383e2e43bf4dcb05e45052eb515078444ca4fb373b3a891d26ca9a52bf70997",
  "@type": "Page",
  "vc:slug": "eu-hleg-ai",
  "title": "EU HLEG AI",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ai-ethics",
      "vc:label": "AI Ethics"
    },
    {
      "@id": "urn:visionflow:linked:ai-regulation",
      "vc:label": "AI Regulation"
    },
    {
      "@id": "urn:visionflow:linked:trustworthy-ai",
      "vc:label": "Trustworthy AI"
    },
    {
      "@id": "urn:visionflow:linked:ai-governance",
      "vc:label": "AI Governance"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "EU HLEG AI"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:eu-hleg-ai",
  "@type": "Class",
  "label": "EU HLEG AI",
  "definition": "The European Commission High-Level Expert Group on Artificial Intelligence (EU HLEG AI) is a multidisciplinary advisory body convened by the European Commission in 2018, comprising 52 experts from academia, industry, and civil society. It produced the foundational Ethics Guidelines for Trustworthy AI (April 2019), establishing seven key requirements — human agency and oversight, technical robustness and safety, privacy and data governance, transparency, diversity and fairness, societal and environmental wellbeing, and accountability — that shaped subsequent EU AI policy. The group also delivered a self-assessment tool (ALTAI) and sector-specific policy recommendations that directly informed the European AI Strategy and the EU AI Act legislative process.",
  "domain": "governance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-governance",
      "label": "AI Governance"
    }
  ],
  "relations": {
    "produces": [
      {
        "@id": "urn:ngm:class:trustworthy-ai",
        "label": "Trustworthy AI"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:ai-ethics",
        "label": "AI Ethics"
      },
      {
        "@id": "urn:ngm:class:human-oversight",
        "label": "Human Oversight"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:ai-regulation",
        "label": "AI Regulation"
      },
      {
        "@id": "urn:ngm:class:eu-ai-act-regulatory-instrument",
        "label": "EU AI Act"
      },
      {
        "@id": "urn:ngm:class:ai-policy",
        "label": "AI Policy"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:human-centric-ai",
        "label": "Human-Centric AI"
      },
      {
        "@id": "urn:ngm:class:responsible-ai",
        "label": "Responsible AI"
      },
      {
        "@id": "urn:ngm:class:ai-transparency-framework",
        "label": "AI Transparency"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:european-commission",
        "label": "European Commission"
      },
      {
        "@id": "urn:ngm:class:ai-accountability",
        "label": "AI Accountability"
      },
      {
        "@id": "urn:ngm:class:algorithmic-fairness",
        "label": "Algorithmic Fairness"
      },
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      },
      {
        "@id": "urn:ngm:class:privacy-by-design",
        "label": "Privacy By Design"
      },
      {
        "@id": "urn:ngm:class:explainable-ai",
        "label": "Explainable AI"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:oecd-ai-principles",
        "label": "OECD AI Principles"
      },
      {
        "@id": "urn:ngm:class:nist-ai-rmf",
        "label": "NIST AI RMF"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:digital-ethics",
        "label": "Digital Ethics"
      },
      {
        "@id": "urn:ngm:class:fundamental-rights",
        "label": "Fundamental Rights"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:high-level-expert-group-on-ai",
      "label": "High-Level Expert Group on AI"
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

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:eu-hleg-ai:ee703a02901b",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f383e2e43bf4dcb05e45052eb515078444ca4fb373b3a891d26ca9a52bf70997"
  },
  "vc:resolutions": [
    {
      "raw": "[[AI Ethics]]",
      "resolved": "urn:visionflow:linked:ai-ethics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[AI Regulation]]",
      "resolved": "urn:visionflow:linked:ai-regulation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Trustworthy AI]]",
      "resolved": "urn:visionflow:linked:trustworthy-ai",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[AI Governance]]",
      "resolved": "urn:visionflow:linked:ai-governance",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - The EU High-Level Expert Group on Artificial Intelligence (EU HLEG AI) is a multidisciplinary advisory body established by the [[European Commission]] in June 2018. Comprising 52 experts drawn from academia, industry, civil society, and fundamental rights organisations, the group produced the landmark Ethics Guidelines for Trustworthy AI (April 2019) and the Assessment List for Trustworthy AI (ALTAI, 2020). These outputs defined a canonical framework of seven requirements for [[Trustworthy AI]] and established vocabulary — lawfulness, ethics, robustness — that permeated subsequent [[AI Governance]] discourse across Europe and beyond.

- ### Overview
  - The group was established as part of the European Commission's coordinated plan on AI, announced in April 2018. Its mandate was to advise the Commission on how to position Europe in the global AI landscape while ensuring the technology remained anchored in European values and [[Fundamental Rights]].
  - The HLEG operated in two phases: a consultation and drafting phase (2018–2019) and an implementation and piloting phase (2019–2020). The first phase culminated in the Ethics Guidelines for [[Trustworthy AI]]; the second phase produced ALTAI and sector-specific recommendations.
  - The group's influence extends well beyond its formal mandate. Its framing of [[AI Ethics]] as operational requirements — rather than abstract principles — shaped how the [[European Commission]] drafted the [[EU AI Act]], the world's first comprehensive legislative framework for AI.
  - The HLEG's work popularised the concept of [[Human-Centric AI]], arguing that AI systems must serve human ends, preserve human agency, and remain subject to meaningful [[Human Oversight]]. This stance became foundational to the European approach to [[AI Regulation]].

- ### Key Components
  - #### Seven Requirements for Trustworthy AI
    - **Human Agency and Oversight** — AI must support [[Human Oversight]] and preserve the ability of humans to intervene; connects to [[Explainable AI]] and [[AI Accountability]].
    - **Technical Robustness and Safety** — Systems must be reliable, secure, and fail-safe; links to [[AI Safety]] and [[Robustness]].
    - **Privacy and Data Governance** — Personal data must be protected; intersects with [[Privacy by Design]] and [[Data Governance]].
    - **Transparency** — AI systems and their reasoning should be interpretable; see [[AI Transparency]] and [[Explainable AI]].
    - **Diversity, Non-Discrimination and Fairness** — Systems must avoid bias and promote [[Algorithmic Fairness]] and inclusion.
    - **Societal and Environmental Wellbeing** — Broader impacts, including environmental costs, must be considered; links to [[Sustainable AI]].
    - **Accountability** — Clear lines of responsibility; see [[AI Accountability]] and [[AI Auditing]].
  - #### ALTAI (Assessment List for Trustworthy AI)
    - A practical self-assessment checklist translating the seven requirements into concrete questions for developers and deployers. Designed to operationalise [[Trustworthy AI]] requirements at the organisational level.
    - Piloted with over 350 organisations across Europe between 2019 and 2020.
  - #### Policy Recommendations
    - Sector-specific guidance covering healthcare, public administration, education, and finance.
    - Recommendations on investment, talent, skills, and infrastructure fed directly into the European AI Strategy.

- ### Applications and Use Cases
  - **Legislative Drafting** — The HLEG's seven requirements directly shaped the risk-tiering and conformity-assessment structures in the [[EU AI Act]].
  - **Corporate AI Ethics Frameworks** — Many European organisations adopted the ALTAI checklist as an internal governance tool, embedding [[Responsible AI]] practices in product development cycles.
  - **Regulatory Guidance** — National AI strategies in Germany, France, Finland, and others explicitly reference the HLEG Guidelines when setting domestic standards for [[AI Policy]].
  - **International Harmonisation** — The HLEG framework influenced the [[OECD AI Principles]] (2019) and subsequent UNESCO recommendations on AI ethics, demonstrating how a regional advisory body can shape global norm-setting.
  - **Research and Academia** — The seven-requirement taxonomy became a widely cited reference frame in academic literature on [[AI Ethics]], [[Algorithmic Fairness]], and [[Digital Ethics]].
  - **Procurement and Public Sector** — EU member-state procurement bodies use HLEG-derived criteria to evaluate AI systems for public deployment.

- ### Relationships
  - partOf:: [[AI Governance]]
  - requires:: [[AI Ethics]]
  - requires:: [[Human Oversight]]
  - enables:: [[AI Regulation]]
  - enables:: [[EU AI Act]]
  - enables:: [[AI Policy]]
  - supports:: [[Human-Centric AI]]
  - supports:: [[Responsible AI]]
  - supports:: [[AI Transparency]]
  - implements:: [[European AI Strategy]]
  - relatedTo:: [[European Commission]]
  - relatedTo:: [[AI Accountability]]
  - relatedTo:: [[Algorithmic Fairness]]
  - relatedTo:: [[Data Governance]]
  - relatedTo:: [[Privacy by Design]]
  - relatedTo:: [[Explainable AI]]
  - contrastsWith:: [[OECD AI Principles]]
  - contrastsWith:: [[NIST AI Risk Management Framework]]
  - bridges-to:: [[Digital Ethics]]
  - bridges-to:: [[Fundamental Rights]]

- ### Standards and Context
  - The HLEG operated within the broader context of EU digital and data policy, including the [[General Data Protection Regulation]] (GDPR), which already established a rights-based approach to data processing in Europe.
  - The group's Ethics Guidelines were published in April 2019 following a three-month open stakeholder consultation that attracted over 500 responses, indicating strong societal engagement with the question of [[AI Governance]].
  - The guidelines are explicitly non-binding, distinguishing them from the [[EU AI Act]] (which creates enforceable obligations). They function as soft law, shaping norms and voluntary industry practice rather than imposing legal penalties.
  - The HLEG taxonomy aligns conceptually with the [[IEEE Ethically Aligned Design]] framework and informed the EU's position in international standard-setting bodies including ISO/IEC JTC1/SC42 (Artificial Intelligence).
  - The group was dissolved after delivering its mandate in 2020. Its work was absorbed into the [[AI Alliance]] (formerly the AI Alliance stakeholder group), a broader multi-stakeholder body continuing the advisory function.
  - The relationship between the HLEG's soft-law framework and the [[EU AI Act]]'s hard-law obligations is one of the defining examples of how voluntary ethics guidelines can precede and shape binding regulation in emerging technology domains.

- ### Comparative Context
  - The HLEG approach emphasises values-based requirements framing, contrasting with the risk-tiering approach of the [[NIST AI Risk Management Framework]] and the principles-based approach of the [[OECD AI Principles]].
  - Unlike sector-specific bodies such as the [[European Medicines Agency]] for pharmaceuticals, the HLEG adopted a horizontal, cross-sector perspective, applying the same seven requirements regardless of application domain.
  - The inclusion of civil society representatives alongside industry experts was deliberate, reflecting a commitment to democratic legitimacy in AI norm-setting — a model subsequently adopted by the [[Council of Europe AI Convention]] process.

- ### Provenance
  - sources:: European Commission (2019). Ethics Guidelines for Trustworthy AI. Brussels: European Commission. | European Commission (2020). Assessment List for Trustworthy AI (ALTAI). | Floridi, L. et al. (2018). AI4People — An Ethical Framework for a Good AI Society. Minds and Machines.
  - updated:: 2026-06-13
