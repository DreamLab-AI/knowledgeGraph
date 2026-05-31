public:: true

# ITU-T
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:itu-t",
  "@type": "Page",
  "vc:slug": "itu-t",
  "title": "ITU-T",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:itu-t",
  "@type": "Class",
  "label": "ITU-T",
  "definition": "ITU-T is the Telecommunication Standardization Sector of the International Telecommunication Union, a United Nations agency that develops international standards (Recommendations) for telecommunications and information technology. Its work spans video and audio coding, network protocols, public-key infrastructure and digital signatures. ITU-T Recommendations such as the H-series video codecs and X.509 are foundational to global communications interoperability.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:standards-body", "label": "Standards Body"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:proprietary-video", "label": "Proprietary Video"},
      {"@id": "urn:ngm:class:digital-signature", "label": "Digital Signature"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - ITU-T is the standardization sector of the International Telecommunication Union, issuing the Recommendations that standardise video coding underpinning [[Proprietary Video]] formats and the X.509 framework behind [[Digital Signature]] infrastructure.
- ### Content
  - Its H.26x video coding standards (developed jointly with ISO/IEC), the X-series security and directory standards, and Y-series networking Recommendations are referenced across telecommunications, broadcasting and the public internet. ITU-T operates through study groups and a formal approval process that gives its outputs treaty-level recognition among member states.
