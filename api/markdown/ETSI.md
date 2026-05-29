public:: true

# etsi
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0944dfd4b4316429b1b3086dde7a699cb7ffd6e17d58acf8cd5a29246d98bf30",
  "@type": "Page",
  "vc:slug": "etsi",
  "title": "etsi",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:etsi",
  "@type": "Class",
  "label": "ETSI",
  "definition": "ETSI (European Telecommunications Standards Institute) is a not-for-profit, independent standardisation organisation that produces globally applicable standards for information and communications technology, including telecommunications, broadcasting, and electronic signatures. Headquartered in Sophia Antipolis, France, it operates under a unique membership model that grants access to industry, research organisations, and governments worldwide. ETSI standards underpin technologies such as 5G NR, NFV, MEC, and the eIDAS-compliant electronic signature formats (CAdES, XAdES, PAdES).",
  "domain": "infrastructure",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-network-and-comms",
      "label": "Infra Network and Comms"
    }
  ],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:open-standard", "label": "Open Standard"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:interoperability", "label": "Interoperability"},
      {"@id": "urn:ngm:class:edge-computing", "label": "Edge Computing"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:etsi-domain-taxonomy", "label": "ETSI Domain Taxonomy"},
      {"@id": "urn:ngm:class:ai-regulation", "label": "AI Regulation"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - ETSI (European Telecommunications Standards Institute) is a not-for-profit, independent standardisation organisation that produces globally applicable standards for information and communications technology, including telecommunications, broadcasting, and electronic signatures. Headquartered in Sophia Antipolis, France, it operates under a unique membership model that grants access to industry, research organisations, and governments worldwide. ETSI standards underpin technologies such as 5G NR, NFV, MEC, and the eIDAS-compliant electronic signature formats (CAdES, XAdES, PAdES).

- ### Semantic Classification
  - owl-class:: etsi:ETSI
  - owl-role:: Concept

- ### Relationships
  - enables [[Open Standard]]
  - supports [[Interoperability]]
  - supports [[Edge Computing]]
  - relatedTo [[ETSI Domain Taxonomy]]
  - relatedTo [[AI Regulation]]

- ### Content
  - ETSI occupies a central role in the global ICT standards ecosystem, working alongside ISO/IEC, ITU-T, and 3GPP to deliver specifications that achieve wide market adoption. Its technical committees cover areas from network functions virtualisation (NFV) and multi-access edge computing (MEC) to cybersecurity, quantum-safe cryptography, and AI. The ETSI ISG (Industry Specification Group) model allows faster-moving, industry-led work that complements the more formal technical committee process.
  - In the AI domain, ETSI's ISG on Experiential Networked Intelligence (ENI) addresses AI-assisted network management, while other groups contribute to AI trustworthiness, testing, and conformity specification. ETSI also participates in CEN-CENELEC joint working groups that develop European harmonised standards supporting the EU AI Act, providing the technical backbone that manufacturers reference when demonstrating conformity.
  - ETSI's electronic signature standards—particularly the ETSI EN 319 series—are mandated under the eIDAS regulation and define the formats (CAdES, XAdES, PAdES, JAdES) used for qualified electronic signatures across the EU. This places ETSI at the intersection of digital identity, legal compliance, and cryptographic infrastructure, linking its telecommunications heritage to emerging digital trust frameworks.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
