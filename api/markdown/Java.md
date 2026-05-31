public:: true

# Java
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:java",
  "@type": "Page",
  "vc:slug": "java",
  "title": "Java",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:java",
  "@type": "Class",
  "label": "Java",
  "definition": "Java is a class-based, object-oriented, statically typed programming language designed to run on the Java Virtual Machine, enabling write-once-run-anywhere portability across platforms. It compiles to bytecode executed by the JVM and emphasises strong typing, automatic memory management and a vast standard library. Java is widely used in enterprise back-end systems, Android development and permissioned blockchain platforms.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:programming-language", "label": "Programming Language"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:kotlin", "label": "Kotlin"},
      {"@id": "urn:ngm:class:enterprise-smart-contracts", "label": "Enterprise Smart Contracts"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Java is a JVM-based object-oriented programming language closely related to [[Kotlin]] and frequently used to author [[Enterprise Smart Contracts]] on permissioned distributed-ledger platforms.
- ### Content
  - Its portability, mature tooling and large ecosystem make it a default choice for enterprise services, Android apps and ledger frameworks such as Corda and Hyperledger Fabric. Java's strong static typing, garbage collection and extensive concurrency libraries support large-scale, long-lived systems where reliability and maintainability are paramount.
