public:: true

# Self Driving Car
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:979b4cddf634faee03f598962584c7aa8fa4c2fabf05ee3f85c69ed0515ece58",
  "@type": "Page",
  "vc:slug": "self-driving-car",
  "title": "Self Driving Car",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:adas",
      "vc:label": "ADAS"
    },
    {
      "@id": "urn:visionflow:owl:class:autonomous-vehicle",
      "vc:label": "Autonomous Vehicle"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "MetaverseDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:perception-system",
      "vc:label": "Perception System"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0347"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Self Driving Car"
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
  "@id": "urn:ngm:class:self-driving-car",
  "@type": "Class",
  "label": "Self Driving Car",
  "definition": "A self-driving car is an autonomous passenger vehicle capable of sensing its environment and operating with minimal or no human input, employing AI-driven perception, decision-making, and control systems to navigate roads, comply with traffic regulations, and transport occupants safely. Self-driving cars represent the consumer application of autonomous vehicle technology, typically targeting SAE Level 3–5 automation in urban and highway environments.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    }
  ],
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  },
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:perception-system",
        "label": "Perception System"
      },
      {
        "@id": "urn:ngm:class:sensor-fusion",
        "label": "Sensor Fusion"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:lidar",
        "label": "Lidar"
      },
      {
        "@id": "urn:ngm:class:computer-vision",
        "label": "Computer Vision"
      },
      {
        "@id": "urn:ngm:class:motion-planning",
        "label": "Motion Planning"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:adas",
        "label": "ADAS"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:autonomous-vehicle",
        "label": "Autonomous Vehicle"
      }
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:self-driving-car:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:979b4cddf634faee03f598962584c7aa8fa4c2fabf05ee3f85c69ed0515ece58"
  },
  "vc:resolutions": [
    {
      "raw": "[[ADAS]]",
      "resolved": "urn:visionflow:owl:class:adas",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Autonomous Vehicle]]",
      "resolved": "urn:visionflow:owl:class:autonomous-vehicle",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[MetaverseDomain]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Perception System]]",
      "resolved": "urn:visionflow:owl:class:perception-system",
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
  - A Self-Driving Car is an autonomous passenger vehicle capable of sensing its environment and operating with minimal or no human input, employing AI-driven perception, decision-making, and control systems to navigate roads, comply with traffic regulations, and transport occupants safely. Self-driving cars represent the consumer application of autonomous vehicle technology, typically targeting SAE Level 3-5 automation in urban and highway environments.

- ### Semantic Classification
  - owl-class:: spatial-computing:SelfDrivingCar
  - owl-role:: Concept
  - belongs-to-domain:: [[MetaverseDomain]]

- ### Relationships
  - Part of [[Autonomous Vehicle]]
  - Requires [[Perception System]]
  - Requires [[Sensor Fusion]]
  - Uses [[Lidar]]
  - Uses [[Computer Vision]]
  - Uses [[Motion Planning]]
  - Related to [[ADAS]]

- ### Content
  - A Self-Driving Car is an autonomous passenger vehicle capable of sensing its environment and operating with minimal or no human input, employing AI-driven perception, decision-making, and control systems to navigate roads, comply with traffic regulations, and transport occupants safely. Self-driving cars represent the consumer application of autonomous vehicle technology, typically targeting SAE Level 3-5 automation in urban and highway environments.

  - ## Conclusion
		- Enterprise AI is driving broad organisational transformation across multiple departments.
		- Challenges persist due to the wide-reaching and iterative nature of generative AI adoption.

  - ## Inequality as the driving force

  - ## Methodology and Approach
  - Mimic socratic self-questioning and theory of mind as needed
  - Do not elide or truncate code in code samples

  - ## Conclusion
		- Enterprise AI is driving broad organisational transformation across multiple departments.
		- Challenges persist due to the wide-reaching and iterative nature of generative AI adoption.

  - ## Inequality as the driving force

  - ## Methodology and Approach
  - Mimic socratic self-questioning and theory of mind as needed
  - Do not elide or truncate code in code samples

  - ## Agentic Architectures
		- Adoption of agentic architectures grew from 0% in 2023 to 12% in 2024.
		- Enterprise AI is driving broad organisational transformation across multiple departments.
		- Challenges persist due to the wide-reaching and iterative nature of generative AI adoption.
			- ![889099_6bc1d69ec5284cc0a19315afe6075af0~mv2.webp](assets/889099_6bc1d69ec5284cc0a19315afe6075af0~mv2_1728113404306_0.webp){:width 800}
				- As of August 2024, 39.4% of Americans aged 18-64 reported using generative AI.
				- 28% of employed respondents said they use generative AI at work.
				- Nearly 1 in 9 workers (10.6%) reported using generative AI daily at work.
				- Adoption has been faster than previous transformative technologies like personal computers and the internet.

  - ## Inequality as the driving force

  - ## Methodology and Approach
  - Mimic socratic self-questioning and theory of mind as needed
  - Do not elide or truncate code in code samples

  - ## Agentic Architectures
		- Enterprise AI is driving broad organisational transformation across multiple departments.

  - ## Inequality as the driving force

  ## Core Characteristics

  - **Full Autonomy**: Capable of handling complete driving task
  - **Safety-Critical**: Designed for passenger safety and public road operation
  - **Regulatory Compliance**: Adherence to traffic laws and vehicle regulations
  - **User Interface**: Passenger interaction and override capabilities
  - **Fail-Safe Systems**: Redundancy and graceful degradation

  ## Relationships

  - **Superclass**: Autonomous Vehicle
  - **Related**: Robotaxi, ADAS, Autonomous Navigation
  - **Standards**: SAE J3016, ISO 26262, UN Regulation 155/156

  ## Key Literature

  1. Litman, T. (2021). "Autonomous Vehicle Implementation Predictions: Implications for Transport Planning." *Victoria Transport Policy Institute*.

  2. Fagnant, D. J., & Kockelman, K. (2015). "Preparing a nation for autonomous vehicles: opportunities, barriers and policy recommendations." *Transportation Research Part A*, 77, 167-181.

  ## See Also

  - [[Autonomous Vehicle]]
  - [[ADAS]]
  - [[Perception System]]

  ## Core Characteristics

  - **Full Autonomy**: Capable of handling complete driving task
  - **Safety-Critical**: Designed for passenger safety and public road operation
  - **Regulatory Compliance**: Adherence to traffic laws and vehicle regulations
  - **User Interface**: Passenger interaction and override capabilities
  - **Fail-Safe Systems**: Redundancy and graceful degradation

  ## Relationships

  - **Superclass**: Autonomous Vehicle
  - **Related**: Robotaxi, ADAS, Autonomous Navigation
  - **Standards**: SAE J3016, ISO 26262, UN Regulation 155/156

  ## Key Literature

  1. Litman, T. (2021). "Autonomous Vehicle Implementation Predictions: Implications for Transport Planning." *Victoria Transport Policy Institute*.

  2. Fagnant, D. J., & Kockelman, K. (2015). "Preparing a nation for autonomous vehicles: opportunities, barriers and policy recommendations." *Transportation Research Part A*, 77, 167-181.

  ## See Also

  - [[Autonomous Vehicle]]
  - [[ADAS]]
  - [[Perception System]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
