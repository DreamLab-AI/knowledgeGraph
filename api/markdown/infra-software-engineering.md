public:: true

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:de682cce0bd46afcc03c9e09cd0887d0a5ea1f722fe3b02b476cf637fb04c47c",
  "@type": "Page",
  "vc:slug": "infra-software-engineering",
  "title": "Software Engineering",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T19:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

## Software Engineering

Software engineering is the disciplined application of engineering principles to the design, development, testing, deployment, and maintenance of software systems. It spans individual coding practices up to organisation-wide processes for managing large distributed systems and AI-enabled applications.

Core sub-domains include software architecture (defining system structure, component interfaces, and quality attribute trade-offs), software development processes (agile, DevOps, CI/CD pipelines), version control and collaborative tooling, testing and quality assurance, and increasingly AI-assisted development through code generation.

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@type": "Class",
  "@id": "urn:ngm:class:infra-software-engineering",
  "label": "Software Engineering",
  "definition": "Taxonomy hub for software engineering concepts within the infrastructure domain, encompassing the practices, processes, tools, and architectures used to design, build, test, and maintain software systems at scale.",
  "domain": "infrastructure",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infrastructure-domain",
      "label": "Infrastructure Domain"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:software-architecture", "label": "Software Architecture"},
      {"@id": "urn:ngm:class:software-development-process", "label": "Software Development Process"},
      {"@id": "urn:ngm:class:version-control", "label": "Version Control"},
      {"@id": "urn:ngm:class:testing-process", "label": "Testing Process"},
      {"@id": "urn:ngm:class:software-testing", "label": "Software Testing"},
      {"@id": "urn:ngm:class:microservices-architecture", "label": "Microservices Architecture"},
      {"@id": "urn:ngm:class:code-generation", "label": "Code Generation"},
      {"@id": "urn:ngm:class:programming-language", "label": "Programming Language"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:infra-legal-and-regulatory", "label": "Legal and Regulatory"},
      {"@id": "urn:ngm:class:cloud-infrastructure", "label": "Cloud Infrastructure"},
      {"@id": "urn:ngm:class:distributed-system", "label": "Distributed System"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:api-gateway", "label": "API Gateway"},
      {"@id": "urn:ngm:class:testing-infrastructure", "label": "Testing Infrastructure"}
    ]
  },
  "quality": 0.8,
  "qualityScore": 0.8,
  "maturity": "established"
}
```
