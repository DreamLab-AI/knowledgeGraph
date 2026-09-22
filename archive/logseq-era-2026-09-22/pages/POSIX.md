public:: true

# POSIX

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:posix",
  "@type": "Page",
  "title": "POSIX",
  "vc:slug": "posix",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:posix",
  "@type": "Class",
  "label": "POSIX",
  "definition": "POSIX (Portable Operating System Interface) is a family of IEEE standards that defines the application programming interface, command-line shells, and utility interfaces for maintaining compatibility between operating systems. By specifying system calls, file-system semantics, process control, and shell behaviour, POSIX allows software written against the standard to be ported across conforming Unix-like systems with minimal modification. It is the canonical contract underpinning portable system software.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:standards",
      "label": "Standards"
    }
  ],
  "relations": {
    "implements": [
      {
        "@id": "urn:ngm:class:operating-system",
        "label": "Operating System"
      },
      {
        "@id": "urn:ngm:class:file-system",
        "label": "File System"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:ieee",
        "label": "IEEE"
      },
      {
        "@id": "urn:ngm:class:api-standard",
        "label": "API Standard"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:interoperability",
        "label": "Interoperability"
      },
      {
        "@id": "urn:ngm:class:portability",
        "label": "Portability"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:portability",
        "label": "Portability"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:interoperability",
        "label": "Interoperability"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:file-system",
        "label": "File System"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:standards",
        "label": "Standards"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:operating-system",
        "label": "Operating System"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:api-standard",
        "label": "API Standard"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
- [[POSIX]] is an [[IEEE]]-maintained family of [[API Standard]] documents that define a portable interface to an [[Operating System]], covering system calls, the [[File System]], and shell utilities. It exists to maximise software [[Portability]] and [[Interoperability]] across Unix-like platforms.
- ### Overview
- POSIX emerged in the late 1980s to reconcile the fragmentation of competing Unix derivatives, giving developers a single specification to target rather than each vendor's idiosyncratic interface.
- The standard is layered: a core defines mandatory system interfaces, while optional feature groups cover threading, real-time extensions, and additional utilities. Conformance can be claimed at the source level (recompile and run) or at the binary level.
- Today POSIX is jointly maintained by IEEE and The Open Group as part of the Single UNIX Specification, and most modern Unix-like systems implement a large subset even when they are not formally certified.
- ### Key aspects
- System call interface: standardised functions for process creation, signals, and I/O against the [[File System]].
- Shell and utilities: a defined command language and a set of utilities ensuring scripts behave consistently.
- File-system semantics: hierarchical paths, permissions, and the everything-is-a-file model.
- Threading and real-time: optional groups specifying pthreads and timing guarantees.
- ### Applications
- Cross-platform system software and daemons that compile unchanged across Linux, BSD, and macOS.
- Containerised and cloud workloads relying on consistent kernel-interface behaviour for [[Interoperability]].
- Embedded and real-time systems adopting POSIX profiles for predictable behaviour.
- Toolchains and shells whose portability depends on POSIX-conformant utilities.
- ### Relationships
- partOf:: [[Standards]]
- implements:: [[Operating System]]
- implements:: [[File System]]
- standardizedBy:: [[IEEE]]
- standardizedBy:: [[API Standard]]
- enables:: [[Interoperability]]
- enables:: [[Portability]]
- supports:: [[Portability]]
- relatedTo:: [[Interoperability]]
- uses:: [[File System]]
- bridgesTo:: [[Operating System]]
- contrastsWith:: [[API Standard]]
- ### Provenance
- updated:: 2026-06-15
