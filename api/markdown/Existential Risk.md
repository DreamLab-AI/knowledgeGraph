public:: true

# Existential Risk
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:existential-risk",
  "@type": "Page",
  "vc:slug": "existential-risk",
  "title": "Existential Risk",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:existential-risk",
  "@type": "Class",
  "label": "Existential Risk",
  "definition": "An existential risk is any risk that could permanently and drastically curtail humanity's long-run potential — including human extinction, irreversible civilisational collapse, or permanent totalitarian lock-in — as distinct from severe but recoverable catastrophes. The concept grounds a research agenda that prioritises preventing outcomes from which recovery is impossible, because their badness is unbounded by the loss of all future generations.",
  "domain": "governance",
  "maturity": "emerging",
  "subClassOf": {
    "@id": "urn:ngm:class:catastrophic-risk-assessment",
    "label": "Catastrophic Risk Assessment"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:existential-ai-risk",
        "label": "Existential AI Risk"
      },
      {
        "@id": "urn:ngm:class:biosecurity",
        "label": "Biosecurity"
      },
      {
        "@id": "urn:ngm:class:nuclear-risk",
        "label": "Nuclear Risk"
      },
      {
        "@id": "urn:ngm:class:pandemic-risk",
        "label": "Pandemic Risk"
      },
      {
        "@id": "urn:ngm:class:engineered-pathogen-risk",
        "label": "Engineered Pathogen Risk"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:global-catastrophic-risk",
        "label": "Global Catastrophic Risk"
      },
      {
        "@id": "urn:ngm:class:risk-analysis",
        "label": "Risk Analysis"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:probability-estimation",
        "label": "Probability Estimation"
      },
      {
        "@id": "urn:ngm:class:moral-philosophy",
        "label": "Moral Philosophy"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:catastrophic-risk-reduction",
        "label": "Catastrophic Risk Reduction"
      },
      {
        "@id": "urn:ngm:class:ai-policy",
        "label": "AI Safety Policy"
      },
      {
        "@id": "urn:ngm:class:pandemic-preparedness",
        "label": "Pandemic Preparedness"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:longtermism",
        "label": "Longtermism"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:ai-governance",
        "label": "AI Governance"
      },
      {
        "@id": "urn:ngm:class:regulation",
        "label": "Biosafety Regulation"
      },
      {
        "@id": "urn:ngm:class:international-coordination",
        "label": "International Coordination"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:ai-alignment",
        "label": "AI Alignment"
      },
      {
        "@id": "urn:ngm:class:climate-risk",
        "label": "Climate Risk"
      },
      {
        "@id": "urn:ngm:class:future-of-humanity-institute",
        "label": "Future of Humanity Institute"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:longtermism",
        "label": "Longtermism"
      },
      {
        "@id": "urn:ngm:class:biosecurity",
        "label": "Biosecurity"
      },
      {
        "@id": "urn:ngm:class:future-of-humanity-institute",
        "label": "Future of Humanity Institute"
      },
      {
        "@id": "urn:ngm:class:centre-for-the-study-of-existential-risk",
        "label": "Centre for the Study of Existential Risk"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:global-catastrophic-risk",
      "label": "Global Catastrophic Risk"
    },
    {
      "@id": "urn:ngm:class:civilisational-risk",
      "label": "Civilisational Risk"
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
  - Existential risk denotes hazards capable of permanently foreclosing humanity's long-term potential, either through extinction or irreversible lock-in to a state vastly worse than what could otherwise be achieved. The concept, formalised by philosopher Nick Bostrom and studied at the [[Future of Humanity Institute]], underlies much work in [[Existential Risk Research]] and [[Longtermism]].

- ### Relationships
  - Existential risk is the broadest category; [[Existential AI Risk]] is a specific sub-domain focused on risks from advanced AI systems. The research community dedicated to this area intersects with [[Longtermism]] as its philosophical foundation and [[Biosecurity]] as a major practical focus. Studying existential risks aims to motivate and direct [[Catastrophic Risk Reduction]] policy and research.

- ### Content
  - The term "existential risk" was introduced into academic discourse by Nick Bostrom in his 2002 paper "Existential Risks: Analysing Human Extinction Scenarios and Related Hazards." Bostrom distinguished existential from merely catastrophic risks by emphasising finality: a pandemic that kills half of humanity is catastrophic but recoverable; a pandemic that eliminates humanity entirely is existential. The field drew on earlier nuclear-era discussions of species-level risk but provided a systematic taxonomy including extinction, permanent totalitarianism, and "flawed realisation" scenarios where civilisation persists but its potential is permanently diminished.
  - Existential risk analysis combines probability estimation with moral philosophy. Because future generations are vastly more numerous than present ones, even a tiny reduction in extinction probability carries enormous expected value under many ethical frameworks. Risk sources are typically grouped into four categories: naturally occurring risks (asteroid impacts, supervolcanic eruptions), engineered risks (engineered pandemics, nuclear war), risks from misaligned AI, and socio-political lock-in. Each category demands different mitigation strategies ranging from asteroid deflection programmes to biosafety regulation to AI alignment research.
  - The field matters because existential risks are uniquely irreversible: there is no recovery from human extinction, no "undo" for civilisational lock-in. This asymmetry justifies extraordinary levels of caution even at low probabilities. Existential risk research has influenced government policy through organisations such as the UK's Centre for Long-Term Resilience and the US Office of Science and Technology Policy. It shapes biosecurity legislation, AI safety summits, and pandemic preparedness frameworks.
  - In 2024–2025, existential risk studies is a recognised academic sub-field at Cambridge (Centre for the Study of Existential Risk), Oxford (now reorganised after FHI's closure), and MIT. The closure of FHI in 2024 was a significant institutional shift, with researchers dispersing to new institutes and industry safety teams. The Bletchley Declaration (2023) and subsequent Seoul and Paris AI Safety Summits brought existential AI risk into formal intergovernmental discourse. Biosecurity remains a co-equal concern following COVID-19, with dual-use biotechnology regulation intensifying globally.
