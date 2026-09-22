public:: true

# Gradle
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:gradle",
  "@type": "Page",
  "vc:slug": "gradle",
  "title": "Gradle",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:gradle",
  "@type": "Class",
  "label": "Gradle",
  "definition": "Gradle is an open-source build-automation tool that uses a directed acyclic graph of tasks to compile, test, and package software, primarily for JVM languages such as Java, Kotlin, and Groovy. Its build scripts are written as a domain-specific language in Groovy or Kotlin, and it supports incremental builds, dependency management, and a build cache for speed. It is widely used in enterprise and Android development, including blockchain platforms built on the JVM.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:infra-software-engineering", "label": "Software Engineering"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:r3-corda", "label": "R3 Corda"}, {"@id": "urn:ngm:class:kotlin", "label": "Kotlin"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Gradle is a JVM-focused build-automation tool; it is used to build [[R3 Corda]] and its applications and is closely related to [[Kotlin]], which serves as both a target language and a build-script DSL.
- ### Content
  - Gradle models builds as task graphs, resolving dependencies from repositories such as Maven Central and executing only the tasks whose inputs changed, aided by an incremental engine and local or remote build cache. Plugins extend it for testing, code quality, containerisation, and platform-specific packaging. Its flexibility and performance have made it the default build system for Android and a common choice for large multi-module JVM projects.
