public:: true

# Sandboxed Execution
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:sandboxed-execution",
  "@type": "Page",
  "title": "Sandboxed Execution",
  "vc:slug": "sandboxed-execution",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:sandboxed-execution",
  "@type": "Class",
  "label": "Sandboxed Execution",
  "definition": "Sandboxed execution is the practice of running untrusted or partially trusted code inside an isolated environment with restricted access to the host filesystem, network and system resources. It contains the effects of faulty or malicious code by enforcing resource and permission boundaries at the process, container or virtual-machine level. Sandboxed execution underpins both security-sensitive contexts, such as running third-party plugins, and autonomous AI agents that must be prevented from taking unintended actions on a host system.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sandbox-environment",
      "label": "Sandbox Environment"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:sandbox-environment",
        "label": "Sandbox Environment"
      }
    ]
  },
  "quality": 0.65
}
```

- ### Definition
  - Sandboxed execution is the practice of running untrusted or partially trusted code inside an isolated environment with restricted access to the host filesystem, network and system resources.
  - It is a subclass of [[Sandbox Environment]].
- ### Content
  - Sandboxed execution is the practice of running untrusted or partially trusted code inside an isolated environment with restricted access to the host filesystem, network and system resources. It contains the effects of faulty or malicious code by enforcing resource and permission boundaries at the process, container or virtual-machine level. Sandboxed execution underpins both security-sensitive contexts, such as running third-party plugins, and autonomous AI agents that must be prevented from taking unintended actions on a host system.
