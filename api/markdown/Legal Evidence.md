public:: true

# Legal Evidence
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:legal-evidence",
  "@type": "Page",
  "vc:slug": "legal-evidence",
  "title": "Legal Evidence",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:legal-evidence",
  "@type": "Class",
  "label": "Legal Evidence",
  "definition": "Legal evidence is information presented to a court or tribunal to establish facts in dispute, which must satisfy admissibility criteria such as authenticity, relevance, and chain of custody. In digital contexts it includes logs, signed records, timestamps, and cryptographic proofs that demonstrate integrity and origin. Sound evidence handling is essential for proving non-repudiation and supporting enforcement.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:infra-legal-and-regulatory", "label": "Infrastructure Legal and Regulatory"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:evidence-collection", "label": "Evidence Collection"}, {"@id": "urn:ngm:class:non-repudiation", "label": "Non-Repudiation"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Legal evidence is admissible information used to prove facts in legal proceedings; it is produced by [[Evidence Collection]] processes and given probative force by [[Non-Repudiation]] guarantees over digital records.
- ### Content
  - For digital artefacts, admissibility hinges on a documented chain of custody, tamper-evident storage, and cryptographic signing or hashing that ties records to a source and time. Failure to preserve integrity can render otherwise relevant material inadmissible.
