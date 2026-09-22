public:: true

# Ambient Awareness
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ambient-awareness",
  "@type": "Page",
  "vc:slug": "ambient-awareness",
  "title": "Ambient Awareness",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ambient-awareness",
  "@type": "Class",
  "label": "Ambient Awareness",
  "definition": "Ambient Awareness is the peripheral, low-effort sense of others' presence, activity, and availability that collaborative systems convey through subtle continuous signals rather than explicit notifications. It is realized through presence indicators, status cues, activity streams, and spatial audio in shared digital workspaces. By keeping collaborators loosely informed of each other's context, it supports coordination and a feeling of co-location in distributed teams.",
  "domain": "metaverse",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:dc-telepresence", "label": "Telepresence"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:presence-indicator", "label": "Presence Indicator"}
    ]
  },
  "quality": 0.72
}
```
- ### Definition
  - Ambient Awareness is the background sense of colleagues' presence and activity sustained by subtle, continuous cues. It is surfaced concretely through the [[Presence Indicator]] and related status signals in shared workspaces.
- ### Content
  - Rather than interrupting with alerts, ambient awareness leaks lightweight context such as who is online, what they are working on, or whether they are speaking. In telepresence and virtual environments this is delivered via avatars, spatial audio, and activity feeds, reducing coordination overhead and recreating the incidental awareness of a shared physical space.
