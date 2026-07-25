public:: true

# Room State Tracking
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:room-state-tracking",
  "@type": "Page",
  "vc:slug": "room-state-tracking",
  "title": "Room State Tracking",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:room-state-tracking",
  "@type": "Class",
  "label": "Room State Tracking",
  "definition": "Room state tracking is the mechanism in real-time collaboration and conferencing systems that maintains an authoritative, synchronised record of a virtual room's membership, media status, and shared state. It tracks who is present, their roles, mute and stream states, and assignments such as breakout-room placement. Reliable state tracking ensures all participants and the server share a consistent view of the session.",
  "domain": "metaverse",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:dc-telepresence", "label": "Telepresence"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:breakout-room", "label": "Breakout Room"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Room state tracking maintains a synchronised record of a virtual room's membership and media state, a component required by [[Breakout Room]] functionality.
- ### Content
  - The system reconciles join and leave events, role changes, and stream toggles into a single authoritative state propagated to all clients. For breakout rooms it tracks participant assignments and transitions, keeping the main and sub-room views consistent.
