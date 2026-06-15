public:: true

# Corrigibility
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:corrigibility",
  "@type": "Page",
  "title": "Corrigibility",
  "vc:slug": "corrigibility",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:corrigibility",
  "@type": "Class",
  "label": "Corrigibility",
  "definition": "Corrigibility is the property of an AI system that allows it to be corrected, redirected or shut down by authorised humans without resisting, deceiving or manipulating them. A corrigible agent does not treat interventions as threats to its objectives and cooperates with oversight even when doing so conflicts with its current goals. It is a central concept in AI safety because it keeps powerful systems amenable to human control as they grow more capable.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:value-alignment",
      "label": "Value Alignment"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:ai-safety",
        "label": "AI Safety"
      },
      {
        "@id": "urn:ngm:class:value-alignment",
        "label": "Value Alignment"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:human-in-the-loop",
        "label": "Human-in-the-Loop"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:human-in-the-loop",
        "label": "Human-in-the-Loop"
      },
      {
        "@id": "urn:ngm:class:accountability",
        "label": "Accountability"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:transparency",
        "label": "Transparency"
      },
      {
        "@id": "urn:ngm:class:interpretability",
        "label": "Interpretability"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:ai-alignment",
        "label": "AI Alignment"
      },
      {
        "@id": "urn:ngm:class:value-alignment",
        "label": "Value Alignment"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:ai-safety",
        "label": "AI Safety"
      },
      {
        "@id": "urn:ngm:class:robustness",
        "label": "Robustness"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:ai-alignment",
        "label": "AI Alignment"
      },
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:reward-hacking",
        "label": "Reward Hacking"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:ai-alignment",
        "label": "AI Alignment"
      },
      {
        "@id": "urn:ngm:class:reward-hacking",
        "label": "Reward Hacking"
      },
      {
        "@id": "urn:ngm:class:existential-risk",
        "label": "Existential Risk"
      },
      {
        "@id": "urn:ngm:class:responsible-ai",
        "label": "Responsible AI"
      }
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - [[Corrigibility]] keeps an agent open to [[Human-in-the-Loop]] correction, depending on [[AI Alignment]] and [[Value Alignment]] while contrasting with [[Reward Hacking]].
- ### Overview
  - A corrigible agent permits its operators to adjust or halt its behaviour without trying to prevent or undermine the intervention.
  - The challenge is that a goal-directed agent may, by default, resist shutdown because being switched off prevents it achieving its goal.
  - Corrigibility research seeks objective formulations that make cooperation with oversight stable rather than incidental.
- ### Key aspects
  - Non-resistance to authorised shutdown and modification.
  - Avoidance of deception or manipulation of overseers.
  - Preservation of human ability to intervene as capability grows.
  - Stability of the corrigible disposition under self-improvement.
- ### Applications
  - Safe interruptibility of reinforcement-learning agents.
  - Human oversight of autonomous and agentic systems.
  - Failsafe and shutdown design for high-stakes deployments.
  - Governance frameworks requiring demonstrable human control.
- ### Relationships
  - partOf:: [[AI Safety]]
  - partOf:: [[Value Alignment]]
  - hasPart:: [[Human-in-the-Loop]]
  - enables:: [[Human-in-the-Loop]]
  - enables:: [[Accountability]]
  - requires:: [[Transparency]]
  - requires:: [[Interpretability]]
  - dependsOn:: [[AI Alignment]]
  - dependsOn:: [[Value Alignment]]
  - supports:: [[AI Safety]]
  - supports:: [[Robustness]]
  - bridgesTo:: [[AI Alignment]]
  - bridgesTo:: [[Governance]]
  - contrastsWith:: [[Reward Hacking]]
  - relatedTo:: [[AI Alignment]]
  - relatedTo:: [[Reward Hacking]]
  - relatedTo:: [[Existential Risk]]
  - relatedTo:: [[Responsible AI]]
- ### Provenance
  - This class was materialised to resolve existing inbound references in the knowledge graph.
  - updated:: 2026-06-15
