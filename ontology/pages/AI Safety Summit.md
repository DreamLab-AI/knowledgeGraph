public:: true

# AI Safety Summit
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:8fe91d4649563bbbbe61d8e08e2aa9b1aaa7117017b6aea49126551f7025e0f0",
  "@type": "Page",
  "vc:slug": "ai-safety-summit",
  "title": "AI Safety Summit",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:international-ai-cooperation", "vc:label": "International AI Cooperation"},
    {"@id": "urn:visionflow:linked:bletchley-declaration", "vc:label": "Bletchley Declaration"},
    {"@id": "urn:visionflow:linked:ai-safety-institute", "vc:label": "AI Safety Institute"},
    {"@id": "urn:visionflow:linked:frontier-ai", "vc:label": "Frontier AI"}
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {"@id": "did:nostr:ontology-mesh"},
  "prov:generatedAtTime": {"@value": "2026-08-06T00:00:00Z", "@type": "xsd:dateTime"}
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ai-safety-summit",
  "@type": "Class",
  "label": "AI Safety Summit",
  "definition": "An intergovernmental summit series on frontier AI risk, inaugurated at Bletchley Park in November 2023, that convenes governments, leading AI companies, and researchers to agree shared assessments of advanced-model risks and coordination mechanisms for testing and governance. The series produced the Bletchley Declaration, catalysed the creation of national AI safety institutes, and continued through the Seoul summit (2024) and the Paris AI Action Summit (2025).",
  "domain": "governance",
  "maturity": "emerging",
  "subClassOf": {
    "@id": "urn:ngm:class:international-ai-cooperation",
    "label": "International AI Cooperation"
  },
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:bletchley-declaration", "label": "Bletchley Declaration"},
      {"@id": "urn:ngm:class:ai-safety-institute", "label": "AI Safety Institute"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:ai-governance", "label": "AI Governance"},
      {"@id": "urn:ngm:class:frontier-ai", "label": "Frontier AI"},
      {"@id": "urn:ngm:class:ai-safety", "label": "AI Safety"}
    ]
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
  }
}
```

- ### Definition
  - "An intergovernmental summit series on frontier AI risk, inaugurated at Bletchley Park in November 2023, that convenes governments, leading AI companies, and researchers to agree shared assessments of advanced-model risks and coordination mechanisms for testing and governance. The series produced the Bletchley Declaration, catalysed the creation of national AI safety institutes, and continued through the Seoul summit (2024) and the Paris AI Action Summit (2025)."

- ### Semantic Classification
  - owl-class:: governance:AISafetySummit
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[International AI Cooperation]]
  - enables:: [[Bletchley Declaration]]
  - enables:: [[AI Safety Institute]]
  - related-to:: [[Frontier AI]]

- ### Content

  ## Definition

  The **AI Safety Summit** is a series of intergovernmental gatherings focused on the risks posed by the most capable "frontier" AI systems. The inaugural summit, hosted by the United Kingdom at Bletchley Park on 1–2 November 2023, brought together 28 governments — including the United States, China, and the European Union — alongside frontier AI laboratories and civil society. Its headline outcome, the [[Bletchley Declaration]], was the first joint statement in which those governments recognised the potential for serious, even catastrophic, harm from frontier AI and committed to internationally coordinated scientific risk assessment.

  The summit process established a repeating diplomatic mechanism rather than a one-off event. The AI Seoul Summit (May 2024, co-hosted by the Republic of Korea and the UK) secured the Frontier AI Safety Commitments from major developers, under which companies agreed to publish safety frameworks and thresholds for intolerable risk. The Paris AI Action Summit (February 2025) broadened the agenda from safety towards innovation, public-interest AI, and sustainability, illustrating how the series has evolved as national priorities shifted.

  Within this graph the summit series functions as the central convening instrument of [[International AI Cooperation]]: it seeded the network of national [[AI Safety Institute]] bodies (UK AISI announced at Bletchley, followed by the US, Japan, Singapore, and others), commissioned the International AI Safety Report led by Yoshua Bengio, and provides the venue where voluntary commitments by [[Frontier AI]] developers are negotiated and reviewed.

  ## Current Landscape

  - **Bletchley Park, UK (2023)**: 28 signatories to the Bletchley Declaration; agreement on state-backed pre-deployment testing of frontier models; UK AI Safety Institute launched.
  - **Seoul, Republic of Korea (2024)**: sixteen leading developers (later more) signed the Frontier AI Safety Commitments; agreement to build an international network of AI safety institutes.
  - **Paris, France (2025)**: rebranded the AI Action Summit, emphasising open, inclusive, and sustainable AI; notable for the UK and US declining to sign the leaders' statement, highlighting divergence in governance approaches.
  - **Asia-Pacific engagement**: the series anchors regional participation in global AI governance, with Korea, Japan, Singapore, and India active in the safety-institute network and follow-on summits.
  - The summit mechanism is voluntary and declaratory — it creates norms, shared science, and institutional infrastructure rather than binding law, complementing statutory regimes such as the EU AI Act.

- ### Provenance
  - sources::
  - migration-date:: 2026-08-06T00:00:00Z
