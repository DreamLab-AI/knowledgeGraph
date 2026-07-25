public:: true

# Participant Consent
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:participant-consent",
  "@type": "Page",
  "vc:slug": "participant-consent",
  "title": "Participant Consent",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:participant-consent",
  "@type": "Class",
  "label": "Participant Consent",
  "definition": "Participant Consent is the explicit, informed agreement obtained from individuals before their voice, image, or data are recorded or processed. In meeting and communication contexts it is both an ethical norm and a legal requirement under many wiretapping and data-protection regimes, often necessitating clear notice and an opportunity to decline. Capturing and recording consent state is a prerequisite for lawful recording and downstream processing.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:regulatory-compliance", "label": "Regulatory Compliance"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:meeting-recording", "label": "Meeting Recording"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Participant Consent is the informed agreement individuals give before being recorded or having their data processed, a legal and ethical prerequisite for [[Meeting Recording]].
- ### Content
  - Many jurisdictions require clear notice and an option to decline before audio or video capture. Systems therefore capture and store consent state, gating recording and downstream analytics on it so that processing remains lawful under wiretapping and data-protection regimes.
