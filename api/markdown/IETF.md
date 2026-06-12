public:: true

# IETF
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ietf",
  "@type": "Page",
  "vc:slug": "ietf",
  "title": "IETF",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ietf",
  "@type": "Class",
  "label": "IETF",
  "definition": "The Internet Engineering Task Force (IETF) is the principal international standards body responsible for developing and promoting voluntary Internet standards, particularly those comprising the Internet protocol suite (TCP/IP). It operates through working groups organised into areas and publishes specifications as Requests for Comments (RFCs), which become the canonical technical definitions of protocols such as HTTP, TLS, SMTP, and DNS. The IETF is a bottom-up, consensus-driven body with no formal membership; participation is open to any interested individual.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:web-standards", "label": "Web Standards"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:network-protocol", "label": "Network Protocol"},
      {"@id": "urn:ngm:class:network-standards", "label": "Network Standards"},
      {"@id": "urn:ngm:class:web-standard", "label": "Web Standard"},
      {"@id": "urn:ngm:class:interoperability-standard", "label": "Interoperability Standard"},
      {"@id": "urn:ngm:class:semantic-web-linked-data-standard-standards", "label": "Semantic Web Standards"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:oauth-2-0", "label": "OAuth 2.0"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:interoperability", "label": "Interoperability"},
      {"@id": "urn:ngm:class:communication-protocol", "label": "Communication Protocol"},
      {"@id": "urn:ngm:class:api-standard", "label": "API Standard"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:ai-governance", "label": "AI Governance"},
      {"@id": "urn:ngm:class:authentication-standards", "label": "Authentication Standards"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - The IETF (Internet Engineering Task Force) is the open standards body that designs and maintains the core protocols of the Internet, publishing specifications as RFCs through a community-driven, consensus-based process.

- ### Relationships
  - The IETF underpins the entire [[Network Protocol]] stack that the internet runs on, including [[OAuth 2.0]] for authorisation. Its work is foundational to [[Interoperability]] across platforms and enables [[Communication Protocol]] standardisation. The IETF's outputs inform [[Web Standards]] and its processes model good practice for other governance bodies working on [[AI Governance]] and [[Authentication Standards]].

- ### Content
  - The Internet Engineering Task Force (IETF) was formed in 1986 as an informal body of volunteer engineers working under the Internet Architecture Board (IAB). Unlike formal national standards bodies such as ISO or ANSI, the IETF has no official membership, fees, or country-based voting. Anyone can attend IETF meetings (held three times per year) or participate in mailing lists. Decisions are made by "rough consensus and running code" — a pragmatic ethos that has proven remarkably durable.

  - The primary output of the IETF is the RFC (Request for Comments) document series. RFCs are numbered sequentially and cover everything from April Fools jokes to the most critical protocol specifications. When a working group achieves consensus on a specification, it is published as an RFC and may be advanced through maturity levels — Proposed Standard, Internet Standard — after demonstrated interoperability. Key protocols standardised by the IETF include TCP/IP (RFCs 793, 791), HTTP/1.1 (RFC 2616), HTTP/2 (RFC 7540), HTTP/3 and QUIC (RFC 9000/9114), TLS 1.3 (RFC 8446), OAuth 2.0 (RFC 6749), and SMTP (RFC 5321).

  - The IETF is structured into areas (Applications, Internet, Operations, Routing, Security, Transport) each overseen by Area Directors who form the Internet Engineering Steering Group (IESG). Working groups within each area focus on specific protocol problems and are time-bounded. The IETF's relationship with the W3C (World Wide Web Consortium) is complementary: the IETF standardises network-layer and transport-layer protocols, while the W3C focuses on web application standards (HTML, CSS, WebAssembly).

  - In 2024–2025, the IETF has active working groups addressing challenges relevant to AI and emerging technology: the MASQUE working group extends HTTP proxying for new use cases; the SCITT (Supply Chain Integrity, Transparency, and Trust) working group develops attestation formats for software supply chains; and the OAUTH working group continues evolving token-based authorisation. The IETF's RATS (Remote ATtestation procedureS) working group is particularly relevant to trustworthy AI system deployment, as it provides standards for verifying hardware and software integrity of AI inference nodes. The body's open, meritocratic process remains a model for governance in rapidly evolving technology domains.

  - The IETF's significance extends beyond protocol specification. Its consensus-based model has influenced how other standards bodies approach technical governance, and its published RFCs serve as the legal and technical baseline for internet infrastructure contracts, regulatory frameworks, and interoperability assessments worldwide. As AI systems increasingly depend on internet infrastructure for training data, API access, and deployment, IETF standards form a foundational layer beneath all AI operations.
