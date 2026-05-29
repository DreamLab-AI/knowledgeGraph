public:: true

# Evidence Collection
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:evidence-collection",
  "@type": "Page",
  "vc:slug": "evidence-collection",
  "title": "Evidence Collection",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:evidence-collection",
  "@type": "Class",
  "label": "Evidence Collection",
  "definition": "Evidence collection is the systematic process of identifying, preserving, and documenting artefacts — digital or physical — in a manner that maintains their integrity and admissibility for legal, regulatory, or investigative proceedings. In digital contexts it encompasses forensic acquisition of disk images, memory dumps, network captures, and log files while maintaining strict chain-of-custody documentation.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:digital-forensics", "label": "Digital Forensics"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:audit-log", "label": "Audit Log"},
      {"@id": "urn:ngm:class:chain-of-custody", "label": "Chain of Custody"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:incident-response", "label": "Incident Response"},
      {"@id": "urn:ngm:class:compliance-evidence", "label": "Compliance Evidence"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:legal-evidence", "label": "Legal Evidence"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Evidence Collection]] is the systematic forensic process of identifying, acquiring, and preserving digital or physical artefacts — including [[Audit Log]]s and disk images — while maintaining [[Chain of Custody]] documentation to ensure admissibility as [[Legal Evidence]] in judicial or regulatory proceedings.

- ### Relationships
  - Evidence Collection is a subclass of [[Digital Forensics]] and is operationally enabled by [[Audit Log]] infrastructure and rigorous [[Chain of Custody]] tracking. It supports [[Incident Response]] workflows by providing the foundational data from which breaches or misconduct are reconstructed. [[Compliance Evidence]] collection is a specialised variant focused on demonstrating adherence to regulatory requirements rather than proving specific wrongdoing.

- ### Content
  - The formalisation of evidence collection practices in digital contexts emerged in the late 1980s and 1990s as law enforcement encountered computer-stored evidence for the first time. Early guidance from the U.S. Department of Justice and the International Organisation on Computer Evidence (IOCE) established that digital evidence must be acquired in ways that do not alter the original — leading to the practice of creating forensic hash-verified copies (bit-for-bit images) before any analysis. Standards such as ISO/IEC 27037 (guidelines for digital evidence identification, collection, acquisition, and preservation) formalised these principles.
  - A forensic evidence collection process follows an ordered methodology: identification (determining what data sources are relevant — endpoints, servers, cloud storage, network logs); preservation (isolating live systems to prevent tampering, creating verified forensic copies using write-blockers and hashing — MD5, SHA-256); collection (acquiring data in a legally defensible manner, documenting every action with timestamps and operator details); and chain-of-custody (continuous documentation of who possessed each artefact, when, and under what conditions). Volatile data (RAM, running processes, network connections) must be collected before powering down a system, requiring specialised memory acquisition tools.
  - Evidence collection is critical in cybersecurity incident response (determining the scope and origin of breaches), legal proceedings (e-discovery, criminal prosecution of cybercrime), regulatory investigations (financial misconduct, data protection violations), and intellectual property disputes. Blockchain forensics has emerged as a specialised sub-domain where on-chain transaction graphs provide immutable evidence records. AI model provenance tracking is a nascent application — logging training data lineage and model weight states to provide evidence of compliance with data protection regulations.
  - In 2024-2025, cloud-first environments have fundamentally challenged classical forensic approaches: ephemeral container workloads, auto-scaling infrastructure, and multi-cloud deployments mean that traditional disk imaging is often inapplicable. Cloud-native forensics relies on provider-maintained audit trails (AWS CloudTrail, Azure Activity Log, GCP Cloud Audit Logs), which must be collected before log retention windows expire. AI-assisted evidence triage tools that automatically classify and prioritise artefacts are entering operational use, and the EU's NIS2 Directive and DORA regulation impose new obligations on regulated entities to maintain and produce audit evidence on demand.

