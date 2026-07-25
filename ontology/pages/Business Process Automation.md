public:: true

# Business Process Automation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:bb6e0b1b4bbf2c793f56cc7fa05fd001d4d793ff0f319c3bd70b92b0127365ae",
  "@type": "Page",
  "vc:slug": "business-process-automation",
  "title": "Business Process Automation",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:workflow-automation",
      "vc:label": "Workflow Automation"
    },
    {
      "@id": "urn:visionflow:linked:automation",
      "vc:label": "Automation"
    },
    {
      "@id": "urn:visionflow:linked:robotic-process-automation",
      "vc:label": "Robotic Process Automation"
    },
    {
      "@id": "urn:visionflow:linked:process-automation",
      "vc:label": "Process Automation"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Business Process Automation"
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
  "@id": "urn:ngm:class:business-process-automation",
  "@type": "Class",
  "label": "Business Process Automation",
  "definition": "The use of technology to automate complex, multi-step business processes beyond individual tasks, integrating systems and people to streamline operations. It targets end-to-end workflows rather than isolated actions.",
  "domain": "robotics",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:process-automation",
      "label": "Process Automation"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:workflow-automation",
        "label": "Workflow Automation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:automation",
        "label": "Automation"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:business-process-automation:04ee58e3b67e",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:bb6e0b1b4bbf2c793f56cc7fa05fd001d4d793ff0f319c3bd70b92b0127365ae"
  },
  "vc:resolutions": [
    {
      "raw": "[[Workflow Automation]]",
      "resolved": "urn:visionflow:linked:workflow-automation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Automation]]",
      "resolved": "urn:visionflow:linked:automation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Robotic Process Automation]]",
      "resolved": "urn:visionflow:linked:robotic-process-automation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Process Automation]]",
      "resolved": "urn:visionflow:linked:process-automation",
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
  - The use of technology to automate complex, multi-step business processes beyond individual tasks, integrating systems and people to streamline operations. It targets end-to-end workflows rather than isolated actions.

- ### Semantic Classification
  - owl-class:: automation:BusinessProcessAutomation
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Process Automation]]
  - bridges-to:: [[Robotic Process Automation]]
  - requires:: [[Workflow Automation]]
  - enables:: [[Automation]]

- ### Content
  - Business process automation orchestrates the steps of a business workflow, such as procurement, onboarding, or invoicing, across multiple systems and roles. It aims to reduce manual handoffs and improve consistency and traceability.
  - It often combines workflow engines, integration platforms, and robotic process automation, and is distinguished from task automation by its focus on coordinating whole processes rather than single activities.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
