public:: true

# Workforce Augmentation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:1bc54073989e4c69c5973b63648420c1895b935b6ab1388ceab473b934a76211",
  "@type": "Page",
  "vc:slug": "workforce-augmentation",
  "title": "Workforce Augmentation",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence",
      "vc:label": "Artificial Intelligence"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0872"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Workforce Augmentation"
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
  "@id": "urn:ngm:class:workforce-augmentation",
  "@type": "Class",
  "label": "Workforce Augmentation",
  "definition": "Workforce Augmentation refers to the use of AI tools, agentic systems, and intelligent automation to extend the cognitive and physical capabilities of human workers rather than replacing them. By offloading repetitive tasks to AI assistants and copilots, organisations can redeploy human attention to higher-value judgement and creative work, improving both productivity and job quality.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-application",
      "label": "AI Application"
    }
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:agentic-ai", "label": "Agentic AI"},
      {"@id": "urn:ngm:class:workflow-automation", "label": "Workflow Automation"},
      {"@id": "urn:ngm:class:human-in-the-loop", "label": "Human in the Loop"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:collaborative-systems-modality-robot", "label": "Collaborative Robot"},
      {"@id": "urn:ngm:class:human-robot-interaction", "label": "Human Robot Interaction"},
      {"@id": "urn:ngm:class:ai-agents", "label": "AI Agents"},
      {"@id": "urn:ngm:class:meeting-ai-assistant", "label": "Meeting AI Assistant"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:ai-augmented-software-engineering", "label": "AI-Augmented Software Engineering"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:ai-application", "label": "AI Application"}
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:workforce-augmentation:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:1bc54073989e4c69c5973b63648420c1895b935b6ab1388ceab473b934a76211"
  },
  "vc:resolutions": [
    {
      "raw": "[[Artificial Intelligence]]",
      "resolved": "urn:visionflow:owl:class:artificial-intelligence",
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
  - Workforce Augmentation is a concept within the ai domain.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:WorkforceAugmentation
  - owl-role:: Concept
  - belongs-to-domain:: [[Artificial Intelligence]]

- ### Relationships
  - is-subclass-of:: [[Artificial Intelligence]]

- ### Content
  Workforce Augmentation — content pending enrichment.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
