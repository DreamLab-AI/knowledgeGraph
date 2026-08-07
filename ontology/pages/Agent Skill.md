public:: true

# Agent Skill
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ba7f5acd6c32de9dac7517f72f80b0904a1008b78e73020e0be91263d1f93655",
  "@type": "Page",
  "vc:slug": "agent-skill",
  "title": "Agent Skill",
  "vc:public": true,
  "vc:outboundWikilinks": [
    { "@id": "urn:visionflow:linked:prompt-template", "vc:label": "PromptTemplate" },
    { "@id": "urn:visionflow:linked:tool-use", "vc:label": "ToolUse" },
    { "@id": "urn:visionflow:linked:context-management", "vc:label": "ContextManagement" },
    { "@id": "urn:visionflow:linked:agentic-workflow", "vc:label": "AgenticWorkflow" }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": { "@id": "did:nostr:ontology-mesh" },
  "prov:generatedAtTime": { "@value": "2026-08-07T00:00:00Z", "@type": "xsd:dateTime" }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:agent-skill",
  "@type": "Class",
  "label": "Agent Skill",
  "definition": "An agent skill is a packaged, self-contained unit of procedural knowledge — a named bundle of instructions, and optionally scripts and reference resources — that an agent loads into its context on demand when a task matches the skill's trigger, and unloads afterwards. Rather than baking every capability into the base system prompt, a skill lets specialised know-how (how to run a deployment, audit prose, drive a browser) live as a discoverable, versioned artifact that is progressively disclosed only when relevant, keeping the working context small while giving the agent deep competence in whatever domain the current task demands.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "subClassOf": { "@id": "urn:ngm:class:prompt-template", "label": "Prompt Template" },
  "relations": {
    "relatedTo": [ { "@id": "urn:ngm:class:tool-use", "label": "Tool Use" }, { "@id": "urn:ngm:class:capability-advertisement", "label": "Capability Advertisement" } ],
    "uses": [ { "@id": "urn:ngm:class:context-management", "label": "Context Management" } ],
    "enables": [ { "@id": "urn:ngm:class:agentic-workflow", "label": "Agentic Workflow" } ]
  },
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "GapFill"
  }
}
```

- ### Definition
  - "An agent skill is a packaged, self-contained unit of procedural knowledge — a named bundle of instructions, and optionally scripts and reference resources — that an agent loads into its context on demand when a task matches the skill's trigger, and unloads afterwards. Rather than baking every capability into the base system prompt, a skill lets specialised know-how (how to run a deployment, audit prose, drive a browser) live as a discoverable, versioned artifact that is progressively disclosed only when relevant, keeping the working context small while giving the agent deep competence in whatever domain the current task demands."

- ### In Plain Terms
  - A skill is a folder of instructions (and sometimes helper scripts) that an agent picks up only when it is actually doing that kind of task, so it can be an expert on demand without carrying every manual around all the time.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:AgentSkill
  - owl-role:: Artifact

- ### Relationships
  - is-subclass-of:: [[PromptTemplate]]
  - related-to:: [[ToolUse]]
  - related-to:: [[CapabilityAdvertisement]]
  - uses:: [[ContextManagement]]
  - enables:: [[AgenticWorkflow]]

- ### Content

  ## Definition

  An **Agent Skill** is a modular, on-demand capability package for a language-model agent. It generalises the idea of a reusable prompt into a richer artifact: a named unit that carries a description of when it applies, a body of procedural instructions, and often bundled scripts, templates, or reference files. The defining behaviour is progressive disclosure — the agent is aware that the skill exists (usually via a short one-line description) but only pulls its full contents into context when the current task matches, and releases that context when done.

  This design solves a concrete pressure in agent systems: the base system prompt cannot hold detailed instructions for every task the agent might face without becoming bloated, slow, and diluted. By externalising specialised know-how into skills, the always-on context stays lean while an effectively unbounded library of competencies remains available. A skill for running deployments, one for auditing prose style, and one for driving a browser can all coexist, each invisible until its trigger fires.

  ## Anatomy of a Skill

  - **Trigger / description.** A concise statement of what the skill is for, used to decide whether to load it. Precise triggers are what make routing to the right skill reliable.
  - **Instructions.** The core procedural content: the steps, conventions, and cautions for doing the task well.
  - **Bundled resources.** Optional scripts the agent can execute, reference documents it can read on demand, and templates it can fill — so a skill can carry executable capability, not just prose.
  - **Versioning.** Because a skill is a discrete artifact, it can be edited, reviewed, and versioned independently of the agent that uses it.

  ## Relationship to Neighbouring Concepts

  A skill sits alongside, but is distinct from, [[ToolUse]]: a tool is an external function the model can call, whereas a skill is a package of instructions (which may itself orchestrate several tools). It relates to [[CapabilityAdvertisement]] in that a skill's description is effectively how the agent advertises and discovers what it can do. And it depends on [[ContextManagement]], since the load-on-demand, unload-after pattern is precisely a strategy for spending the limited context budget wisely. Well-designed skills are a major enabler of reliable [[AgenticWorkflow]], letting a single general agent behave like a fleet of specialists.
