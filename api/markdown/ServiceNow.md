```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:30880c3d24429f3e74b462342ee4d8310a9d44ab49b50d38bfee2b50e89e5e09",
  "@type": "Page",
  "vc:slug": "service-now",
  "title": "ServiceNow",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:rest",
      "vc:label": "REST"
    },
    {
      "@id": "urn:visionflow:linked:threat-intelligence",
      "vc:label": "Threat Intelligence"
    },
    {
      "@id": "urn:visionflow:linked:database-systems",
      "vc:label": "Database Systems"
    },
    {
      "@id": "urn:visionflow:linked:workflow-automation",
      "vc:label": "Workflow Automation"
    },
    {
      "@id": "urn:visionflow:linked:https-www-servicenow-com",
      "vc:label": "https://www.servicenow.com/"
    },
    {
      "@id": "urn:visionflow:linked:https-docs-servicenow-com",
      "vc:label": "https://docs.servicenow.com/"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "ServiceNow"
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
  "@id": "urn:ngm:class:service-now",
  "@type": "Class",
  "label": "ServiceNow",
  "definition": "ServiceNow is a cloud platform for IT service management and workflow automation, delivering digital workflows across IT, security and business operations.",
  "domain": "distributed-systems",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:workflow-automation",
      "label": "Workflow Automation"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:rest",
        "label": "REST"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:threat-intelligence",
        "label": "Threat Intelligence"
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

- ### Definition
  - ServiceNow is a cloud platform for IT service management and workflow automation, delivering digital workflows across IT, security and business operations.

- ### Semantic Classification
  - owl-class:: distributed-systems:ServiceNow
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Workflow Automation]]
  - bridges-to:: [[Database Systems]]
  - requires:: [[REST]]
  - enables:: [[Threat Intelligence]]

- ### Content
  - ServiceNow provides a software-as-a-service platform centred on IT service management, including incident, problem and change management. It also offers modules for security operations, human resources and customer service.
  - The platform exposes REST APIs for integration and uses a central configuration management database to model assets and their relationships. Workflows are configured to automate routine operational tasks.

- ### Provenance
  - sources:: [[https://www.servicenow.com/]], [[https://docs.servicenow.com/]]
  - migration-date:: 2026-05-29T00:00:00Z
