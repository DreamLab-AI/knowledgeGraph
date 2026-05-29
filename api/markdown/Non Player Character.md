public:: true

# Non Player Character
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:093fe5099bff5f2059c0ac322a2823c49541120e4873537a32791f2b1d24a9fe",
  "@type": "Page",
  "vc:slug": "non-player-character",
  "title": "Non Player Character",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9171"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Non Player Character"
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
  "@id": "urn:ngm:class:non-player-character",
  "@type": "Class",
  "label": "Non Player Character",
  "definition": "An autonomous, computer-controlled character in a virtual environment that follows scripted behaviour trees, finite state machines, or AI-driven policies to interact with human users and the scene. Modern NPCs increasingly leverage conversational AI and large language models to produce contextually responsive dialogue and adaptive behavioural patterns.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-content-and-assets",
      "label": "Content and Assets"
    }
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:state-machine", "label": "State Machine"},
      {"@id": "urn:ngm:class:conversational-ai", "label": "Conversational AI"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:avatar", "label": "Avatar"},
      {"@id": "urn:ngm:class:agent", "label": "Agent"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:animation", "label": "Animation"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:simulation", "label": "Simulation"},
      {"@id": "urn:ngm:class:generative-ai", "label": "Generative AI"}
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:non-player-character:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:093fe5099bff5f2059c0ac322a2823c49541120e4873537a32791f2b1d24a9fe"
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
  - An autonomous, computer-controlled character in a virtual environment that follows scripted behaviour trees, finite state machines, or AI-driven policies to interact with human users and the scene. Modern NPCs increasingly leverage conversational AI and large language models to produce contextually responsive dialogue and adaptive behavioural patterns.

- ### Semantic Classification
  - owl-class:: spatial-computing:NonPlayerCharacter
  - owl-role:: Concept

- ### Relationships
  - **uses** [[State Machine]] — finite state machines govern standard NPC behavioural transitions
  - **uses** [[Conversational AI]] — LLM-driven conversational AI enables contextually rich NPC dialogue
  - **hasPart** [[Avatar]] — NPCs are represented by avatar meshes and animations in the virtual environment
  - **hasPart** [[Agent]] — each NPC is an autonomous agent with perception, decision-making, and action capabilities
  - **dependsOn** [[Animation]] — animation rigs and blend trees drive NPC locomotion and expressiveness
  - **enables** [[Simulation]] — large populations of NPCs enable complex social and ecological simulations
  - **enables** [[Generative AI]] — generative AI models power NPC procedural dialogue and adaptive behaviour

- ### Content
  # NonPlayerCharacter
  NonPlayerCharacter represents a key component in Metaverse infrastructure and technology. Research: NonPlayerCharacter (NPC) - AI agents, virtual assistants, autonomous characters
  - https://www.khronos.org/ - Industry standards
  - https://www.w3.org/TR/ - Web standards
  - https://developer.mozilla.org/ - Technical documentation

  ## Sources

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
