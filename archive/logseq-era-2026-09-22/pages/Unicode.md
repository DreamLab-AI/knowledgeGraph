public:: true

# Unicode
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:unicode",
  "@type": "Page",
  "vc:slug": "unicode",
  "title": "Unicode",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-07-25T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:unicode",
  "@type": "Class",
  "label": "Unicode",
  "definition": "Unicode is an international character encoding standard that assigns a unique code point to every character across the world's writing systems, symbols, and control codes, enabling consistent text representation across platforms and languages. It is implemented through encoding forms such as UTF-8, UTF-16, and UTF-32, which map code points to byte sequences of varying width. Unicode underlies virtually all modern text-based data interchange formats, including JSON and Turtle/RDF serialisations.",
  "domain": "standards",
  "maturity": "emerging",
  "qualityScore": 0.5,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:data-format",
      "label": "Data Format"
    }
  ],
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-07-25T00:00:00Z",
    "inferenceRule": "DanglingRelationFix-batch6-2026-07-25"
  }
}
```

- ### Definition
  - Unicode is an international character encoding standard that assigns a unique code point to every character across the world's writing systems, symbols, and control codes, enabling consistent text representation across platforms and languages. It is implemented through encoding forms such as UTF-8, UTF-16, and UTF-32, which map code points to byte sequences of varying width. Unicode underlies virtually all modern text-based data interchange formats, including JSON and Turtle/RDF serialisations.
