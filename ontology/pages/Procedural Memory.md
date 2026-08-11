public:: true

# Procedural Memory
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:60d76c103c16acb643e3b6d3995517d462aea97b2bec682489c11fa6e9893ec5",
  "@type": "Page",
  "vc:slug": "procedural-memory",
  "title": "Procedural Memory",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:agent-memory",
      "vc:label": "Agent Memory"
    },
    {
      "@id": "urn:visionflow:linked:cognitive-architecture",
      "vc:label": "Cognitive Architecture"
    },
    {
      "@id": "urn:visionflow:linked:working-memory",
      "vc:label": "Working Memory"
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
  "@id": "urn:ngm:class:procedural-memory",
  "@type": "Class",
  "label": "Procedural Memory",
  "definition": "The long-term memory subsystem that stores knowledge of how to perform actions and skills — as opposed to episodic memory of specific events or semantic memory of facts; in cognitive science it underlies habits and motor skills learnt through repetition, while in cognitive architectures and AI agents it is realised as production rules, learned policies, reusable workflows, or refined system prompts that encode competence rather than content.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:agent-memory",
    "label": "Agent Memory"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:agent-memory-layers",
        "label": "Agent Memory Layers"
      },
      {
        "@id": "urn:ngm:class:cognitive-architecture",
        "label": "Cognitive Architecture"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:working-memory",
        "label": "Working Memory"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:cognitive-ai",
        "label": "Cognitive AI"
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
  - "The long-term memory subsystem that stores knowledge of how to perform actions and skills — as opposed to episodic memory of specific events or semantic memory of facts; in cognitive science it underlies habits and motor skills learnt through repetition, while in cognitive architectures and AI agents it is realised as production rules, learned policies, reusable workflows, or refined system prompts that encode competence rather than content."

- ### Semantic Classification
  - owl-class:: artificial-intelligence:ProceduralMemory
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Agent Memory]]
  - part-of:: [[Agent Memory Layers]], [[Cognitive Architecture]]
  - contrasts-with:: [[Working Memory]]
  - related-to:: [[Cognitive AI]]

- ### Content

  ## Definition

  **Procedural memory** is the store of "knowing how" — the long-term retention of skills, habits, and action sequences that can be executed without conscious recollection of when or where they were learnt. In human cognition it is the memory system that lets a person ride a bicycle or touch-type; it is implicit, acquired gradually through practice, and neurologically distinct from declarative memory, as demonstrated famously by patient H.M., who could learn new motor skills despite being unable to form new episodic memories.

  Cognitive architectures adopted the distinction directly. In ACT-R and Soar, procedural memory is the set of production rules (condition–action pairs) that fire against the contents of [[Working Memory]], while declarative memory holds facts and past episodes. Skill acquisition is modelled as compilation: deliberate, declaratively mediated behaviour is gradually converted into fast, automatic productions — the computational analogue of practice making perfect.

  In modern LLM-based agents, procedural memory has re-emerged as one of the standard layers in [[Agent Memory Layers]], alongside episodic and semantic stores. It is realised as the agent's accumulated know-how: refined system prompts and instructions, reusable tool-use patterns, saved skills and workflow templates, or fine-tuned policy weights. Frameworks such as CoALA (Cognitive Architectures for Language Agents) make the taxonomy explicit, and practical systems let agents write successful task procedures back to a skill library so that competence persists across sessions rather than being rediscovered each time.

  ## Technical Details

  - **Cognitive science basis**: Squire's taxonomy places procedural memory under non-declarative (implicit) memory, supported by the basal ganglia and cerebellum rather than the hippocampus; it degrades slowly and survives amnesias that destroy episodic recall.
  - **Symbolic realisation**: production rules in ACT-R/Soar, with utility learning and chunking converting deliberate problem-solving into automatic skill.
  - **Agentic realisation**: skill libraries (e.g. Voyager's ever-growing code skill repository), procedure files and reusable prompts, learned tool-invocation policies, and reinforcement-learned behaviours; distinct from episodic transcripts (what happened) and semantic/vector stores (what is known).
  - **Design consequence**: procedural memory updates change *behaviour* globally, so agent frameworks typically gate them behind evaluation or human review, whereas episodic writes are cheap and continuous.

  ## Current Landscape

  - **CoALA taxonomy is now the shared standard**: the semantic/episodic/procedural split for long-term agent memory (from CoALA) has been adopted across the major frameworks — LangChain's LangGraph/LangMem cites it directly, and mem0's "State of AI Agent Memory 2026" organises the field the same way; procedural memory is consistently defined as implicit (LLM weights) plus explicit (system-prompt rules, playbooks, skills, runbooks).
  - **Skill libraries as procedural memory**: production systems capture successful task procedures from episodes, validate them (replay or human review), and version-control them for just-in-time loading — Letta's automatic "skill learning" distils successful patterns into an agent's procedural memory.
  - **MemGPT/Letta hierarchy**: Letta (formerly MemGPT) manages an OS-style memory hierarchy (in-context core vs out-of-context archival), and a 2025 Letta benchmark found a plain filesystem scored ~74% on the LoCoMo memory benchmark, beating several specialised vector-store memory libraries.
  - **Procedural memory as an optimisation target**: recent research (e.g. Mem^p, arXiv Aug 2025) treats the build/retrieve/update lifecycle of procedural memory as a first-class object, distilling trajectories into step-by-step instructions and script-like abstractions that are continuously corrected and deprecated.

  **Sources**:
  - https://hidekazu-konishi.com/entry/ai_agent_memory_design_guide.html
  - https://arxiv.org/html/2508.06433v2
  - https://www.letta.com/blog/benchmarking-ai-agent-memory/

- ### Provenance
  - sources:: https://arxiv.org/html/2508.06433v2
  - migration-date:: 2026-08-07T00:00:00Z
