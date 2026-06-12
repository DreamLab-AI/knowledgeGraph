public:: true

# User Education
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f902220350af9ed0a85b847a1e3b3e544c377b88fe8c517801bd4b320ba9b134",
  "@type": "Page",
  "vc:slug": "user-education",
  "title": "User Education",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9715"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "User Education"
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
  "@id": "urn:ngm:class:user-education",
  "@type": "Class",
  "label": "User Education",
  "definition": "Structured programmes, tutorials, and onboarding materials that build user competencies in operating spatial computing platforms, XR devices, and metaverse applications, including safety guidance, digital literacy, and skill development delivered through interactive or immersive pedagogic methods.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-content-and-assets",
      "label": "Content and Assets"
    }
  ],
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  },
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:education-metaverse",
        "label": "Education Metaverse"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:education-technology",
        "label": "Education Technology"
      },
      {
        "@id": "urn:ngm:class:immersive-experience",
        "label": "Immersive Experience"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:ai-technology-skills-curriculum",
        "label": "Courses and Training"
      },
      {
        "@id": "urn:ngm:class:education-and-ai",
        "label": "Education and AI"
      },
      {
        "@id": "urn:ngm:class:virtual-experience",
        "label": "Virtual Experience"
      }
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:user-education:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f902220350af9ed0a85b847a1e3b3e544c377b88fe8c517801bd4b320ba9b134"
  },
  "vc:resolutions": [
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:owl:class:owl-thing",
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
  - Structured programmes, tutorials, and onboarding materials that build user competencies in operating spatial computing platforms, XR devices, and metaverse applications, including safety guidance, digital literacy, and skill development delivered through interactive or immersive pedagogic methods.

- ### Semantic Classification
  - owl-class:: spatial-computing:UserEducation
  - owl-role:: concept

- ### Relationships
  - Enables: [[Education Metaverse]]
  - Uses: [[Education Technology]]
  - Uses: [[Immersive Experience]]
  - Related To: [[AI Technology Skills Curriculum]]
  - Related To: [[Education and AI]]
  - Related To: [[Virtual Experience]]

- ### Content

  ## Overview

  User Education represents an abstract concept in the metaverse ontology hierarchy.

  #### Related Concepts
  - [[owl:Thing]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
