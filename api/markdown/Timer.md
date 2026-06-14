public:: true

# Timer
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:timer",
  "@type": "Page",
  "vc:slug": "timer",
  "title": "Timer",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:timer",
  "@type": "Class",
  "label": "Timer",
  "definition": "A timer is a software or hardware mechanism that measures elapsed time or schedules an action to occur after a delay or at a recurring interval. In collaborative and real-time applications it provides shared countdowns, time-boxing, and synchronised triggers that all participants observe consistently. Timers are a basic building block of event scheduling, animation, and time-bounded interaction.",
  "domain": "metaverse",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:dc-workspace-tools", "label": "Workspace Tools"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:collaborative-systems-modality-whiteboard", "label": "Collaborative Whiteboard"},
      {"@id": "urn:ngm:class:real-time", "label": "Real Time"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A timer measures elapsed time or fires an action after a delay, providing shared countdowns and time-boxing features inside tools such as a [[Collaborative Whiteboard]] and underpinning [[Real-Time]] coordination.
- ### Content
  - At the system level a timer is driven by a clock source and either reports elapsed duration or invokes a callback when its deadline is reached, supporting one-shot and periodic modes. In collaborative software, a shared timer is synchronised across clients so every participant sees the same countdown, which is used for facilitation patterns like timed brainstorming and sprint reviews. Reliable behaviour depends on consistent time references and tolerance for clock drift and network latency between participants.
