public:: true

# Medical Devices
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:medical-devices",
  "@type": "Page",
  "vc:slug": "medical-devices",
  "title": "Medical Devices",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:medical-devices",
  "@type": "Class",
  "label": "Medical Devices",
  "definition": "Medical devices are instruments, machines, implants, or software intended for the diagnosis, prevention, monitoring, or treatment of disease and injury. They are classified by risk and tightly regulated, demanding high reliability, fault tolerance, and often real-time performance where failure can cause patient harm. Embedded and connected medical devices increasingly incorporate sensing, control, and AI under stringent safety regimes.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:system-architecture", "label": "System Architecture"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:fault-tolerance", "label": "Fault Tolerance"}, {"@id": "urn:ngm:class:real-time", "label": "Real Time"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Medical devices are regulated instruments and software used to diagnose, monitor, or treat patients. Their safety-critical nature makes [[Fault Tolerance]] essential and frequently imposes [[Real-Time]] performance requirements.
- ### Content
  - Device design follows risk-based classification under frameworks such as the EU MDR and FDA regulations, mandating verification, validation, and traceability. Connected and AI-enabled devices add cybersecurity, post-market surveillance, and continuous-learning governance to the established hardware and software assurance burden.
