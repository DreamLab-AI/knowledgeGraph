public:: true

# Documentation As Code
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:documentation-as-code",
  "@type": "Page",
  "vc:slug": "documentation-as-code",
  "title": "Documentation As Code",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:documentation-as-code",
  "@type": "Class",
  "label": "Documentation As Code",
  "definition": "Documentation as Code is a software-engineering practice in which technical documentation is authored in plain-text markup, stored in version control alongside source code, and built and published through the same automated pipelines used for software. It applies developer workflows such as pull requests, code review, linting, and continuous integration to documentation. The approach keeps docs synchronised with code and improves consistency, traceability, and collaboration.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:software-development", "label": "Software Development"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:diagrams-as-code", "label": "Diagrams as Code"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Documentation as Code treats documentation as a first-class artefact managed in version control and built through CI/CD, mirroring how source code is handled. [[Diagrams as Code]] is a specialised extension of this practice for visual artefacts.
- ### Content
  - By writing docs in Markdown, AsciiDoc, or reStructuredText and reviewing them through pull requests, teams keep documentation versioned, testable, and automatically published. This reduces drift between code and docs and lets the same tooling enforce style and link integrity.
