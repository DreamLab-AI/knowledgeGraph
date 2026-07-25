public:: true

# Workflow Engine
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:workflow-engine",
  "@type": "Page",
  "vc:slug": "workflow-engine",
  "title": "Workflow Engine",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:workflow-engine",
  "@type": "Class",
  "label": "Workflow Engine",
  "definition": "A workflow engine is a software system that executes, coordinates, and monitors multi-step processes defined as a sequence or graph of tasks, managing state transitions, branching, retries, and human or system handoffs. It separates process definition from execution, enabling durable, observable orchestration of long-running business or computational workflows. Workflow engines underpin enterprise process automation and increasingly the orchestration of AI agent pipelines.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:infra-software-engineering", "label": "Software Engineering"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:agent-frameworks", "label": "Agent Frameworks"}, {"@id": "urn:ngm:class:workflow-orchestration", "label": "Workflow Orchestration"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A workflow engine executes and tracks multi-step processes from a declarative definition; it provides the orchestration substrate for [[Agent Frameworks]] and broader [[Workflow Orchestration]].
- ### Content
  - Engines such as Temporal, Camunda, and Airflow persist execution state so workflows survive crashes, support timers, signals, compensation, and parallel branches, and expose visibility into in-flight runs. Design choices distinguish data-pipeline DAG schedulers from durable-execution and BPMN-style human-task engines, with the common goal of reliable, resumable coordination of distributed steps.
