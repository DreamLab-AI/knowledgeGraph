public:: true

# OASIS
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:oasis",
  "@type": "Page",
  "vc:slug": "oasis",
  "title": "OASIS",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:oasis",
  "@type": "Class",
  "label": "OASIS",
  "definition": "OASIS (Organisation for the Advancement of Structured Information Standards) is an international, not-for-profit standards development body that produces open standards for information technology, with particular strengths in web services, security, content formats, electronic business, and emergency management. Founded in 1993, OASIS operates through technical committees that develop specifications via an open, consensus-based process, producing both OASIS Standards and publicly available specifications that are frequently adopted as ISO/IEC standards. Prominent OASIS standards include MQTT for IoT messaging, SAML for federated identity, XACML for access control, OData for REST-based data access, and the OpenDocument Format. OASIS also co-publishes standards with other bodies including the W3C and ISO.",
  "domain": "standards",
  "maturity": "established",
  "subClassOf": {"@id": "urn:ngm:class:standards-body", "label": "Standards Body"},
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:technical-committee", "label": "Technical Committee"},
      {"@id": "urn:ngm:class:publicly-available-specification", "label": "Publicly Available Specification"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:open-standard", "label": "Open Standard"},
      {"@id": "urn:ngm:class:interoperability-standard", "label": "Interoperability Standard"},
      {"@id": "urn:ngm:class:federated-identity", "label": "Federated Identity"},
      {"@id": "urn:ngm:class:consensus-based-governance", "label": "Consensus-Based Governance"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:saml", "label": "SAML"},
      {"@id": "urn:ngm:class:xacml", "label": "XACML"},
      {"@id": "urn:ngm:class:opendocument-format", "label": "OpenDocument Format"},
      {"@id": "urn:ngm:class:odata", "label": "OData"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:mqtt", "label": "MQTT"},
      {"@id": "urn:ngm:class:rest-api", "label": "REST API"},
      {"@id": "urn:ngm:class:xml", "label": "XML"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:virtual-environment-specification", "label": "Virtual Environment Specification"},
      {"@id": "urn:ngm:class:iot-messaging", "label": "IoT Messaging"},
      {"@id": "urn:ngm:class:enterprise-security", "label": "Enterprise Security"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:iso-iec", "label": "ISO/IEC"},
      {"@id": "urn:ngm:class:w3-c", "label": "W3C"},
      {"@id": "urn:ngm:class:iso-standards", "label": "Iso Standards"},
      {"@id": "urn:ngm:class:cybersecurity-standard", "label": "Cybersecurity Standard"},
      {"@id": "urn:ngm:class:ietf", "label": "IETF"},
      {"@id": "urn:ngm:class:ieee", "label": "IEEE"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:w3-c", "label": "W3C"},
      {"@id": "urn:ngm:class:ietf", "label": "IETF"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:access-control", "label": "Access Control"},
      {"@id": "urn:ngm:class:digital-publishing", "label": "Digital Publishing"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:organisation-for-the-advancement-of-structured-information-standards", "label": "Organisation for the Advancement of Structured Information Standards"}
  ],
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - OASIS is a global [[Standards Body]] that produces consensus-based [[Open Standard]] and [[Interoperability Standard]] specifications across web services, security, IoT messaging ([[MQTT]]), and electronic business, frequently advancing their adoption through [[ISO/IEC]] co-publication.

- ### Relationships
  - OASIS enables the publication of [[Open Standard]] and [[Interoperability Standard]] specifications through its technical committee process. Its standards include [[MQTT]] for lightweight IoT publish-subscribe messaging and REST-API design patterns codified in OData. It maintains close relationships with [[ISO/IEC]] and [[W3C]] through formal liaison and joint publication arrangements, and its security standards inform national [[Iso Standards]] adoption. [[Cybersecurity Standard]] work, particularly XACML and SAML, originated in OASIS and underpins federated identity and access control systems globally. OASIS also contributes to [[Virtual Environment Specification]] work through its content format standards.

- ### Content
  - OASIS was founded in 1993 as SGML Open, a consortium focused on the adoption of the Standard Generalised Markup Language. As the internet and web services era unfolded, the organisation broadened its scope to encompass the full range of structured information standards needed for B2B integration, enterprise messaging, and eventually IoT and cybersecurity. Its renaming to OASIS in 1998 reflected this expanded mandate. Today the organisation hosts over 70 active technical committees covering domains from legal XML to digital publishing to quantum computing.

  - The OASIS process is distinguished by its accessibility and its explicit route from industry specification to formal international standard. Technical committees are open to any individual or organisation willing to participate, reducing the capture risk associated with closed standards bodies. Approved OASIS Standards can be submitted for adoption as ISO/IEC International Standards through PAS (Publicly Available Specification) transposition, giving them global legal and regulatory recognition. This pathway has been used successfully for the OpenDocument Format (ISO/IEC 26300) and MQTT (ISO/IEC 20922).

  - [[MQTT]], originally developed for satellite pipeline telemetry, became the dominant IoT messaging protocol following its standardisation as an OASIS Standard. Its lightweight publish-subscribe model, designed for constrained devices and unreliable networks, is now embedded in billions of IoT endpoints across industrial automation, smart buildings, and connected vehicles. The OASIS MQTT technical committee maintains the specification and its extensions for enhanced authentication and message expiry.

  - OASIS security standards form a substantial portion of enterprise identity infrastructure. SAML (Security Assertion Markup Language) enables browser-based single sign-on across organisational boundaries and remains the dominant protocol for enterprise federation despite the emergence of OAuth 2.0 and OpenID Connect. XACML (eXtensible Access Control Markup Language) provides a policy-based authorisation framework that separates access control policy from application code. These standards, though mature, continue to be actively deployed and extended in cloud and hybrid enterprise environments.
