public:: true

# Enterprise Workflow
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:febf6c8896c6192b4ef87e9fa2945dbd027429babdf9fe9b3f2f1c659135e997",
  "@type": "Page",
  "vc:slug": "enterprise-workflow",
  "title": "Enterprise Workflow",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:workflow-automation",
      "vc:label": "Workflow Automation"
    },
    {
      "@id": "urn:visionflow:linked:ai-agent",
      "vc:label": "AI Agent"
    },
    {
      "@id": "urn:visionflow:linked:https-en-wikipedia-org-wiki-workflow",
      "vc:label": "https://en.wikipedia.org/wiki/Workflow"
    },
    {
      "@id": "urn:visionflow:linked:https-www-omg-org-spec-bpmn",
      "vc:label": "https://www.omg.org/spec/BPMN/"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Enterprise Workflow"
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
  "@id": "urn:ngm:class:enterprise-workflow",
  "@type": "Class",
  "label": "Enterprise Workflow",
  "definition": "An enterprise workflow is a defined sequence of tasks and approvals that an organisation uses to carry out a business process. Software systems coordinate and automate these workflows.",
  "domain": "general",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:workflow-automation",
      "label": "Workflow Automation"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:workflow-automation",
        "label": "Workflow Automation"
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
  "@id": "urn:visionflow:annotation:link-resolutions:enterprise-workflow:27a48497270c",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:febf6c8896c6192b4ef87e9fa2945dbd027429babdf9fe9b3f2f1c659135e997"
  },
  "vc:resolutions": [
    {
      "raw": "[[Workflow Automation]]",
      "resolved": "urn:visionflow:linked:workflow-automation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[AI Agent]]",
      "resolved": "urn:visionflow:linked:ai-agent",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://en.wikipedia.org/wiki/Workflow]]",
      "resolved": "urn:visionflow:linked:https-en-wikipedia-org-wiki-workflow",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://www.omg.org/spec/BPMN/]]",
      "resolved": "urn:visionflow:linked:https-www-omg-org-spec-bpmn",
      "kind": "StubLink"
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
  - An enterprise workflow is a defined sequence of tasks and approvals that an organisation uses to carry out a business process. Software systems coordinate and automate these workflows.

- ### Semantic Classification
  - owl-class:: general:EnterpriseWorkflow
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Workflow Automation]]
  - bridges-to:: [[AI Agent]]
  - enables:: [[Workflow Automation]]

- ### Content
  - An enterprise workflow describes how work moves through an organisation, including the steps, the people or systems responsible, and the conditions for moving between steps. Workflow software models these processes and routes tasks accordingly.
  - Automating workflows can reduce manual handoffs and provide a record of decisions and timings. Modern systems increasingly incorporate AI components to classify documents, draft content, or make routine decisions within a process.

- ### Provenance
  - sources:: [[https://en.wikipedia.org/wiki/Workflow]], [[https://www.omg.org/spec/BPMN/]]
  - migration-date:: 2026-05-29T00:00:00Z
