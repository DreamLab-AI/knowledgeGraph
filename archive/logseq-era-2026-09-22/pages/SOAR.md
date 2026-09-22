public:: true

# SOAR
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:soar",
  "@type": "Page",
  "vc:slug": "soar",
  "title": "SOAR",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:soar",
  "@type": "Class",
  "label": "SOAR",
  "definition": "SOAR (Security Orchestration, Automation and Response) is a class of platforms that coordinate detection tools, automate repetitive incident-handling workflows, and orchestrate response actions across a security stack through codified playbooks. It ingests alerts from disparate sources, enriches them with context, and executes graded responses to reduce analyst workload and mean time to respond. The acronym also denotes Soar, a cognitive architecture for modelling general intelligence, but in security contexts the orchestration sense dominates.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:cybersecurity", "label": "Cybersecurity"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:cognitive-ai", "label": "Cognitive AI"},
      {"@id": "urn:ngm:class:cyber-security-and-cryptography", "label": "Cyber Security and Cryptography"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - SOAR (Security Orchestration, Automation and Response) is a [[Cybersecurity]] platform category that automates and orchestrates incident response through codified playbooks across heterogeneous detection and response tools.
- ### Content
  - A SOAR system ingests alerts, enriches them with threat intelligence, and triggers graded automated actions, sharply reducing analyst toil and mean time to respond. Within [[Cyber Security and Cryptography]] operations it acts as the connective layer between SIEM, EDR, and ticketing tools, and increasingly incorporates [[Cognitive AI]] techniques to prioritise and reason over incoming signals.
