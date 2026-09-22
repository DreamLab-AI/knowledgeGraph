public:: true

# US AI Safety Institute
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:bac2e871ffb9f9d297462595d27cc197b9fcb1918e44e75805c04c9572a8e6a3",
  "@type": "Page",
  "vc:slug": "us-ai-safety-institute",
  "title": "US AI Safety Institute",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ai-safety-institute",
      "vc:label": "AI Safety Institute"
    },
    {
      "@id": "urn:visionflow:linked:uk-ai-safety-institute",
      "vc:label": "UK AI Safety Institute"
    },
    {
      "@id": "urn:visionflow:linked:nist",
      "vc:label": "NIST"
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
  "@id": "urn:ngm:class:us-ai-safety-institute",
  "@type": "Class",
  "label": "US AI Safety Institute",
  "definition": "The US AI Safety Institute (US AISI) is the United States government body, established within the National Institute of Standards and Technology (NIST), tasked with developing the science, evaluations, and guidelines for safe and trustworthy artificial intelligence. It conducts pre-deployment testing of frontier models, produces measurement methods and red-teaming guidance, and advances standards for AI safety. As a distinct organisation from the UK AI Safety Institute, it operates under US jurisdiction and NIST's standards mandate; the two institutes coordinate on evaluations through a bilateral partnership while remaining separate national bodies with their own remits, funding, and legal contexts. In June 2025 the Trump administration renamed the body the Center for AI Standards and Innovation (CAISI), dropping 'safety' from its title and narrowing its mandate to demonstrable national-security risks while keeping it within NIST.",
  "domain": "governance",
  "maturity": "emerging",
  "subClassOf": {
    "@id": "urn:ngm:class:ai-safety-institute",
    "label": "AI Safety Institute"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:nist",
        "label": "NIST"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:ai-self-regulation",
        "label": "AI Self-Regulation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:uk-ai-safety-institute",
        "label": "UK AI Safety Institute"
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
  - "The US AI Safety Institute (US AISI) is the United States government body, established within the National Institute of Standards and Technology (NIST), tasked with developing the science, evaluations, and guidelines for safe and trustworthy artificial intelligence. It conducts pre-deployment testing of frontier models, produces measurement methods and red-teaming guidance, and advances standards for AI safety. As a distinct organisation from the UK AI Safety Institute, it operates under US jurisdiction and NIST's standards mandate; the two institutes coordinate on evaluations through a bilateral partnership while remaining separate national bodies with their own remits, funding, and legal contexts. In June 2025 the body was renamed the Center for AI Standards and Innovation (CAISI), dropping 'safety' from its title and narrowing its mandate to demonstrable national-security risks while keeping it within NIST."

- ### Semantic Classification
  - owl-class:: governance:USAISafetyInstitute
  - owl-role:: Artifact

- ### Relationships
  - is-subclass-of:: [[AI Safety Institute]]
  - part-of:: [[NIST]]
  - related-to:: [[UK AI Safety Institute]]
  - contrasts-with:: [[AI Self-Regulation]]

- ### Content

  ## Definition

  The **US AI Safety Institute** is the American government institution charged with building the measurement science and evaluation capability needed to assess advanced AI. It was established inside the National Institute of Standards and Technology, aligning it with NIST's long-standing role as the US authority on standards and metrology, and it works on model testing, safety guidelines, and the technical groundwork for AI standards.

  It is a sibling to, but distinct from, the **UK AI Safety Institute**. The two are separate legal entities in separate jurisdictions, with different funding lines, mandates, and reporting structures; the UK body sits within its national government while the US body sits within NIST. They are deliberately linked through a bilateral partnership to share evaluation methods and avoid duplicating frontier-model testing, but that cooperation does not make them one organisation — which is precisely why each warrants its own class.

  ## Current Landscape

  National AI safety institutes emerged rapidly as governments sought state capacity to evaluate frontier systems rather than relying solely on developers' own assurances. The US institute's placement within NIST gives it a route from evaluation findings into formal guidance and standards, and it has pursued pre-deployment access to leading models for testing. An international network of such institutes has begun to form, coordinating on shared evaluation science.

  Recent developments (2025-2026):

  - The US AISI was **founded in November 2023** within NIST (US Department of Commerce). On **3 June 2025** Commerce Secretary Howard Lutnick announced it would be reorganised as the **Center for AI Standards and Innovation (CAISI)**, framed as "pro-innovation, pro-science" and dropping "safety" from the name (NIST; Wikipedia).
  - CAISI's mandate **narrowed to demonstrable national-security risks** — cybersecurity, biosecurity, and chemical-weapons uplift, plus assessment of adversary AI systems and "malign foreign influence"; language on algorithmic discrimination, content provenance, and equity was removed, and CAISI was designated "industry's primary point of contact" for commercial AI testing (NIST CAISI page).
  - On **28 April 2026** the Commerce Department named **Chris Fall** (a former Department of Energy official) to lead CAISI; by mid-2026 it had signed pre-deployment testing agreements with Google DeepMind, Microsoft, and xAI, with Anthropic reported outside the new framework.
  - On **29 May 2026** NIST separately rebranded the supporting AI Safety Institute Consortium (AISIC, ~280 organisations) as the **NIST AI Consortium**, again dropping "safety" and expanding scope toward AI measurement science, innovation adoption, and US competitiveness (Federal Register notice).
  - Analysts (Harvard Kennedy School, Tech Policy Press) read the renaming as a substantive priority shift from broad societal-risk mitigation toward innovation speed and standards leadership, with no single US federal body now covering the full spectrum of AI risks. The counterpart **UK body was renamed the AI Security Institute in February 2025**.

  **Sources**:
  - https://www.nist.gov/caisi
  - https://en.wikipedia.org/wiki/Artificial_intelligence_safety_institute
  - https://techpolicy.press/from-safety-to-security-renaming-the-us-ai-safety-institute-is-not-just-semantics
