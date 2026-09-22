public:: true

# Conformity Assessment Body
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:conformity-assessment-body",
  "@type": "Page",
  "vc:slug": "conformity-assessment-body",
  "title": "Conformity Assessment Body",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:conformity-assessment-body",
  "@type": "Class",
  "label": "Conformity Assessment Body",
  "definition": "A conformity assessment body is an accredited organisation authorised to evaluate whether products, processes, or services meet specified standards or regulatory requirements. It performs testing, inspection, and certification activities and issues the formal attestations that allow goods to be placed on a market. Such bodies are themselves accredited by national accreditation authorities to ensure impartiality and competence.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:standards-body", "label": "Standards Body"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:robot-standard", "label": "Robot Standard"}, {"@id": "urn:ngm:class:trust-framework", "label": "Trust Framework"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A conformity assessment body is an accredited organisation that tests, inspects, and certifies conformance to standards such as a [[Robot Standard]], forming part of a wider [[Trust Framework]].
- ### Content
  - In the EU regime such bodies are often "notified bodies" designated to assess high-risk products against directives and regulations. Their attestations underpin CE-marking and analogous market-access schemes, and their own competence is verified through accreditation against ISO/IEC 17000-series standards.
