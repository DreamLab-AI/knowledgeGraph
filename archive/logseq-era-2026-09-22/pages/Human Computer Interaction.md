public:: true
alias:: Human-Computer Interaction, HumanComputerInteraction

# Human Computer Interaction
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7017fba0728405b4708d4c4c21fb869e821e4caa8e4c63b07e6884cc0990d64b",
  "@type": "Page",
  "vc:slug": "human-computer-interaction",
  "title": "Human Computer Interaction",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:human-ai-collaboration",
      "vc:label": "Human-AI Collaboration"
    },
    {
      "@id": "urn:visionflow:linked:user-experience-design",
      "vc:label": "User Experience Design"
    },
    {
      "@id": "urn:visionflow:owl:class:conversational-ai",
      "vc:label": "Conversational AI"
    },
    {
      "@id": "urn:visionflow:owl:class:explainable-ai",
      "vc:label": "Explainable AI"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-9015"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Human Computer Interaction"
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
  "@id": "urn:ngm:class:human-computer-interaction",
  "@type": "Class",
  "label": "Human Computer Interaction",
  "definition": "Human-Computer Interaction (HCI) in the AI context examines the design, evaluation, and implementation of interactive systems that incorporate artificial intelligence capabilities. This interdisciplinary field addresses usability, accessibility, user experience, and cognitive aspects of AI-powered interfaces, emphasising transparency, trust calibration, and ethical implications of algorithmic decision-making on human users.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  },
  "subClassOf": {
    "@id": "urn:ngm:class:ai-research-area",
    "label": "AI Research Area"
  },
  "sameAs": [
    {"@id": "urn:ngm:class:human-computer-interaction", "label": "Human Computer Interaction"},
    {"@id": "urn:ngm:class:hci", "label": "HCI"},
    {"@id": "urn:ngm:class:computer-human-interaction", "label": "Computer-Human Interaction"}
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:user-interface-design", "label": "User Interface Design"},
      {"@id": "urn:ngm:class:usability-engineering", "label": "Usability Engineering"},
      {"@id": "urn:ngm:class:interaction-design", "label": "Interaction Design"},
      {"@id": "urn:ngm:class:cognitive-ergonomics", "label": "Cognitive Ergonomics"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:user-experience", "label": "User Experience"},
      {"@id": "urn:ngm:class:accessibility", "label": "Accessibility"},
      {"@id": "urn:ngm:class:human-ai-collaboration", "label": "Human-AI Collaboration"},
      {"@id": "urn:ngm:class:adaptive-user-interface", "label": "Adaptive User Interface"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:cognitive-science", "label": "Cognitive Science"},
      {"@id": "urn:ngm:class:user-research", "label": "User Research"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:natural-language-processing", "label": "Natural Language Processing"},
      {"@id": "urn:ngm:class:machine-learning", "label": "Machine Learning"},
      {"@id": "urn:ngm:class:computer-vision", "label": "Computer Vision"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:explainable-ai", "label": "Explainable AI"},
      {"@id": "urn:ngm:class:ai-ethics", "label": "AI Ethics"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:conversational-ai", "label": "Conversational AI"},
      {"@id": "urn:ngm:class:user-experience-design", "label": "User Experience Design"},
      {"@id": "urn:ngm:class:affective-computing", "label": "Affective Computing"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:spatial-computing", "label": "Spatial Computing"},
      {"@id": "urn:ngm:class:augmented-reality", "label": "Augmented Reality"},
      {"@id": "urn:ngm:class:digital-twin", "label": "Digital Twin"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:autonomous-agent", "label": "Autonomous Agent"}
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:human-computer-interaction:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:7017fba0728405b4708d4c4c21fb869e821e4caa8e4c63b07e6884cc0990d64b"
  },
  "vc:resolutions": [
    {
      "raw": "[[Human-AI Collaboration]]",
      "resolved": "urn:visionflow:linked:human-ai-collaboration",
      "kind": "StubLink"
    },
    {
      "raw": "[[User Experience Design]]",
      "resolved": "urn:visionflow:linked:user-experience-design",
      "kind": "StubLink"
    },
    {
      "raw": "[[Conversational AI]]",
      "resolved": "urn:visionflow:owl:class:conversational-ai",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Explainable AI]]",
      "resolved": "urn:visionflow:owl:class:explainable-ai",
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
  - Human-Computer Interaction (HCI) in the AI context examines the design, evaluation, and implementation of interactive systems that incorporate artificial intelligence capabilities. This interdisciplinary field addresses usability, accessibility, user experience, and cognitive aspects of AI-powered interfaces. Key areas include conversational AI (chatbots, voice assistants), explainable AI interfaces, mixed-initiative systems, and adaptive user interfaces that personalize based on user behavior. HCI for AI emphasizes transparency, user control, trust calibration, and the ethical implications of algorithmic decision-making on human users.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:HumanComputerInteraction
  - owl-role:: concept

- ### Relationships
  - is-subclass-of:: ['owl:Thing']
  - enables [[User Experience]]
  - enables [[Accessibility]]
  - relatedTo [[Conversational AI]]
  - relatedTo [[Explainable AI]]
  - uses [[Natural Language Processing]]

- ### Content

  #### Key Characteristics
  - Designs intuitive interfaces for AI-powered systems
  - Incorporates explainability and transparency mechanisms
  - Evaluates user trust and acceptance of AI recommendations
  - Addresses accessibility and inclusive design principles
  - Facilitates human-AI collaboration and co-creation

  ## Overview

  Human-Computer Interaction (HCI) in the AI context examines the design, evaluation, and implementation of interactive systems that incorporate artificial intelligence capabilities. This interdisciplinary field addresses usability, accessibility, user experience, and cognitive aspects of AI-powered interfaces. Key areas include conversational AI (chatbots, voice assistants), explainable AI interfaces, mixed-initiative systems, and adaptive user interfaces that personalize based on user behavior. HCI for AI emphasizes transparency, user control, trust calibration, and the ethical implications of algorithmic decision-making on human users.

  #### Related Concepts
  - [[Conversational AI]]
  - [[Explainable AI]]
  - [[User Experience Design]]
  - [[Human-AI Collaboration]]

  #### References
  - Amershi, S. et al. (2019). Guidelines for Human-AI Interaction. CHI 2019.
  - Shneiderman, B. (2020). Human-Centered Artificial Intelligence: Reliable, Safe & Trustworthy. International Journal of Human-Computer Interaction, 36(6), 495-504.
  - Yang, Q. et al. (2020). Re-examining Whether, Why, and How Human-AI Interaction Is Uniquely Difficult to Design. CHI 2020.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
