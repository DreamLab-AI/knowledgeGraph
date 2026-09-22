public:: true

# Knowledge Preservation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:knowledge-preservation",
  "@type": "Page",
  "vc:slug": "knowledge-preservation",
  "title": "Knowledge Preservation",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:knowledge-preservation",
  "@type": "Class",
  "label": "Knowledge Preservation",
  "definition": "Knowledge preservation is the practice of capturing, organising and retaining institutional and individual knowledge so it remains accessible and usable over time. It mitigates loss from staff turnover, system obsolescence and the decay of tacit expertise by codifying knowledge into durable, retrievable forms. It encompasses documentation, archiving, knowledge bases and AI-assisted capture.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:data-management", "label": "Data Management"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:digital-archive", "label": "Digital Archive"},
      {"@id": "urn:ngm:class:meeting-ai-assistant", "label": "Meeting AI Assistant"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Knowledge preservation captures and retains organisational knowledge over time, enabled by a [[Digital Archive]] for durable storage and by a [[Meeting AI Assistant]] that records and structures discussions.
- ### Content
  - Effective preservation converts tacit expertise into explicit, searchable artefacts through documentation, transcription, tagging and version control. AI tools increasingly automate capture by summarising meetings, extracting decisions and linking related material, reducing the risk that critical knowledge is lost when people or systems change.
