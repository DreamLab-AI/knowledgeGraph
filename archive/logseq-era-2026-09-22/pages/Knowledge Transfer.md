public:: true

# Knowledge Transfer
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:knowledge-transfer",
  "@type": "Page",
  "vc:slug": "knowledge-transfer",
  "title": "Knowledge Transfer",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:knowledge-transfer",
  "@type": "Class",
  "label": "Knowledge Transfer",
  "definition": "Knowledge transfer is the movement of expertise, skills and understanding from one person, team or system to another. In collaborative work it occurs through mentoring, shared practice and direct interaction, allowing tacit know-how to spread across an organisation. It is a key outcome of practices such as remote pair programming.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:software-development", "label": "Software Development"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:remote-pair-programming", "label": "Remote Pair Programming"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Knowledge transfer is the spread of skills and expertise between people or teams; it is directly enabled by and closely related to [[Remote Pair Programming]], where two developers share context in real time.
- ### Content
  - Transfer is most effective when it surfaces tacit knowledge through demonstration, narration and feedback rather than documentation alone. In software teams, pairing, code review and shared incident response accelerate it, reducing key-person risk and raising collective competence across the codebase.
