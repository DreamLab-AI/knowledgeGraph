public:: true

# AI Surveillance
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:62235aaf4112394d6b9562496d73fd101a352661373767b799a2a621896408fa",
  "@type": "Page",
  "vc:slug": "ai-surveillance",
  "title": "AI Surveillance",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:surveillance",
      "vc:label": "Surveillance"
    },
    {
      "@id": "urn:visionflow:linked:facial-recognition",
      "vc:label": "Facial Recognition"
    },
    {
      "@id": "urn:visionflow:linked:digital-society-surveillance",
      "vc:label": "Digital Society Surveillance"
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
  "@id": "urn:ngm:class:ai-surveillance",
  "@type": "Class",
  "label": "AI Surveillance",
  "definition": "AI surveillance is the application of machine learning and computer vision to monitoring at scale: automated facial recognition in public space, gait and behaviour analysis, licence-plate reading, social-media and communications analytics, and predictive scoring of individuals or crowds. It differs from conventional surveillance in that inference, not observation, does the work — systems classify, track, and flag people continuously without human attention per subject, raising distinct governance questions about bias, proportionality, chilling effects, and the legal basis for algorithmic monitoring.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:surveillance",
    "label": "Surveillance"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:digital-society-surveillance",
        "label": "Digital Society Surveillance"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:facial-recognition",
        "label": "Facial Recognition"
      },
      {
        "@id": "urn:ngm:class:computer-vision",
        "label": "Computer Vision"
      },
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:algorithmic-bias",
        "label": "Algorithmic Bias"
      },
      {
        "@id": "urn:ngm:class:privacy",
        "label": "Privacy"
      },
      {
        "@id": "urn:ngm:class:ai-ethics",
        "label": "AI Ethics"
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
  - "AI surveillance is the application of machine learning and computer vision to monitoring at scale: automated facial recognition in public space, gait and behaviour analysis, licence-plate reading, social-media and communications analytics, and predictive scoring of individuals or crowds. It differs from conventional surveillance in that inference, not observation, does the work — systems classify, track, and flag people continuously without human attention per subject, raising distinct governance questions about bias, proportionality, chilling effects, and the legal basis for algorithmic monitoring."

- ### Semantic Classification
  - owl-class:: governance:AiSurveillance
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Surveillance]]
  - part-of:: [[Digital Society Surveillance]]
  - uses:: [[Facial Recognition]], [[Computer Vision]]
  - related-to:: [[Algorithmic Bias]], [[Privacy]]

- ### Content

  ## Definition

  **AI surveillance** is monitoring in which the collection, interpretation, and escalation of observations are automated by machine learning. Where classical surveillance is bounded by the number of human watchers, AI surveillance scales with compute: a single facial-recognition deployment can compare every passer-by against a watchlist in real time, and analytics platforms can score behaviour across thousands of camera feeds, communication channels, and financial or location data streams simultaneously.

  The category spans several qualitatively different capabilities. Biometric identification (face, gait, voice) links observations to identity; object and behaviour analytics detect events such as loitering, crowd formation, or "anomalous" movement; predictive systems assign risk scores to people, places, or transactions; and cross-source fusion joins CCTV, ANPR, telecoms metadata, and online activity into persistent profiles. Each stage inherits the failure modes of its models — false-positive identifications, demographic performance skews, and opaque decision logic — which in a surveillance context translate directly into wrongful stops, discriminatory targeting, and unaccountable interference with rights of assembly and expression.

  Because harm arises from inference rather than mere observation, AI surveillance is regulated as a distinct object. The EU AI Act treats real-time remote biometric identification in public spaces as a prohibited or tightly restricted practice; UK deployments by police forces have been tested against data-protection and equality law (notably *Bridges v South Wales Police*, 2020); and procurement-level moratoria on facial recognition exist in several US cities. The governance debate is therefore less about whether cameras may exist than about which inferences may be drawn, by whom, with what oversight and redress.

  ## Current Landscape

  Deployment is widespread and growing: market analyses consistently find that the majority of countries operate some form of AI-enabled public surveillance, spanning smart-city platforms, border biometrics, and predictive policing pilots. Vendor ecosystems range from large Chinese and Western platform suppliers to specialist analytics firms, with export controls and human-rights due-diligence requirements becoming procurement factors.

  - **EU AI Act prohibitions live since 2 February 2025**: Article 5 bans real-time remote biometric identification in publicly accessible spaces for law enforcement (bar narrow, pre-authorised exceptions for missing persons, imminent terrorist threats, and listed serious crimes) and prohibits building facial-recognition databases through untargeted scraping of internet or CCTV images.
  - **Enforcement teeth from 2 August 2025**: Breaches of the Article 5 prohibitions attract the top-tier fine of up to €35 million or 7% of worldwide annual turnover; the 2026 Digital Omnibus did not move these dates.
  - **High-risk regime from 2 December 2027**: Post/non-real-time (retrospective) biometric identification and biometric verification in high-risk contexts fall under Annex III and must meet full high-risk requirements — risk management, data governance, human oversight, accuracy, and logging.
  - **UK case law**: Police deployments remain tested against data-protection and equality law, notably *R (Bridges) v South Wales Police* (Court of Appeal, 2020), the first successful legal challenge to live facial recognition.
  - **Technical frontier**: Re-identification across camera networks, multimodal foundation models applied to video, and emotion or intent inference of contested scientific validity continue to move faster than the accountability mechanisms designed for them.

  **Sources**:
  - https://www.regulation-ai.eu/en/prohibited-practices/
  - https://www.regulatoryai.eu/ai-facial-recognition/
  - https://www.bundesnetzagentur.de/EN/Areas/Digitalisation/AI/08_ProhibitedPractices/start.html
