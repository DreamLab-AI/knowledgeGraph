public:: true

elevatedFrom:: [[Projects]]
# Active Research Projects Registry
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0d194c1e8c634a5980f9bf91e5259882162e0b673d484142179860c7c69a027f",
  "@type": "Page",
  "vc:slug": "active-research-projects-registry",
  "title": "Active Research Projects Registry",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Projects"
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
  "@id": "urn:ngm:class:active-research-projects-registry",
  "@type": "Class",
  "label": "Active Research Projects Registry",
  "definition": "Projects is the top-level organisational concept grouping active development initiatives within this knowledge graph. It serves as a Kanban and progress-tracking container for ongoing technical, research, and creative workstreams, linking to child project nodes such as PlayerTwo, BroBots, and Automated Podcast.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-software-engineering",
      "label": "Software Engineering"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:player-two", "label": "Player Two"},
      {"@id": "urn:ngm:class:toxic-content-counter-narrative-system", "label": "Project BroBots"},
      {"@id": "urn:ngm:class:automated-daily-podcast-pipeline", "label": "Project Automated Podcast"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:automated-planning", "label": "Automated Planning"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:decentralised-agent-coordination-initiative", "label": "Agentic Alliance"}
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:projects:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:0d194c1e8c634a5980f9bf91e5259882162e0b673d484142179860c7c69a027f"
  },
  "vc:resolutions": [],
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
  - Projects is the top-level organisational concept grouping active development initiatives within this knowledge graph. It serves as a Kanban and progress-tracking container for ongoing technical, research, and creative workstreams, linking to child project nodes such as PlayerTwo, BroBots, and Automated Podcast.

- ### Semantic Classification
  - owl-class:: infrastructure:Projects
  - owl-role:: Concept

- ### Relationships
  - hasPart: [[Player Two]], [[Toxic Content Counter-Narrative System]], [[Automated Daily Podcast Pipeline]]
  - uses: [[Automated Planning]]
  - relatedTo: [[Decentralised Agent Coordination Initiative]]

- ### Content
  - Fashion 3D objects
  - TODO write a script to start the docker for CRM
		- ```text
		  machinelearn@MLAI:/mnt/mldata/GenerativeAI/ComfyUI$ docker ps
		  CONTAINER ID   IMAGE                                  COMMAND                  CREATED        STATUS        PORTS                                       NAMES
		  d8bc0b15a890   yanwk/comfyui-boot:megapak             "bash /runner-script…"   9 hours ago    Up 9 hours    0.0.0.0:8188->8188/tcp, :::8188->8188/tcp   comfyui-mega
		  7428acfbd648   ghcr.io/open-webui/open-webui:ollama   "bash start.sh"          27 hours ago   Up 22 hours   0.0.0.0:3000->8080/tcp, :::3000->8080/tcp   open-webui
		  machinelearn@MLAI:/mnt/mldata/GenerativeAI/ComfyUI$ docker stop comfyui-mega
		  comfyui-mega

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
