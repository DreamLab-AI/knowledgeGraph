```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:security-scanning",
  "@type": "Page",
  "vc:slug": "security-scanning",
  "title": "Security Scanning",
  "vc:public": true,
  "vc:outboundWikilinks": [
    "Open Claw",
    "VirusTotal"
  ],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:security-scanning",
  "@type": "Class",
  "label": "Security Scanning",
  "definition": "The automated process of inspecting software artifacts, code, or data for known vulnerabilities, malware, or policy violations before deployment or execution.",
  "domain": "security",
  "maturity": "draft",
  "quality": 0.35,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:security",
      "label": "Security"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:vulnerability-management",
        "label": "Vulnerability Management"
      },
      {
        "@id": "urn:ngm:class:intrusion-detection",
        "label": "Intrusion Detection"
      }
    ]
  },
  "provenance": {
    "source": "podcast-knowledge-ingest",
    "created": "2026-08-24",
    "episode": "the-saaspocalypse-continues.md"
  }
}
```

- ### Overview
  - **[Industry analysis]** Open Claw partnered with VirusTotal to scan every skill uploaded to their platform to verify they are malware-free. *(Source: AI Daily Brief host, via AI Daily Brief, 2026-08-24)*
- ### Relationships
- ### Provenance
