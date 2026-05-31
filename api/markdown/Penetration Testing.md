public:: true

# Penetration Testing
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b5c2f77a4f3cf8ced9df9bea5003765006bec2f3e713ca13ee4144f67843c759",
  "@type": "Page",
  "vc:slug": "penetration-testing",
  "title": "Penetration Testing",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:cybersecurity",
      "vc:label": "Cybersecurity"
    },
    {
      "@id": "urn:visionflow:linked:information-security",
      "vc:label": "Information Security"
    },
    {
      "@id": "urn:visionflow:linked:software-testing",
      "vc:label": "Software Testing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Penetration Testing"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:penetration-testing",
  "@type": "Class",
  "label": "Penetration Testing",
  "definition": "An authorised, simulated attack on a system or network carried out to identify and assess exploitable security weaknesses.",
  "domain": "cryptographic",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cybersecurity",
      "label": "Cybersecurity"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:cybersecurity",
        "label": "Cybersecurity"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:information-security",
        "label": "Information Security"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:penetration-testing:1576699565d0",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b5c2f77a4f3cf8ced9df9bea5003765006bec2f3e713ca13ee4144f67843c759"
  },
  "vc:resolutions": [
    {
      "raw": "[[Cybersecurity]]",
      "resolved": "urn:visionflow:linked:cybersecurity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Information Security]]",
      "resolved": "urn:visionflow:linked:information-security",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Software Testing]]",
      "resolved": "urn:visionflow:linked:software-testing",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - An authorised, simulated attack on a system or network carried out to identify and assess exploitable security weaknesses.

- ### Semantic Classification
  - owl-class:: cryptographic:PenetrationTesting
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Cybersecurity]]
  - bridges-to:: [[Software Testing]]
  - requires:: [[Cybersecurity]]
  - enables:: [[Information Security]]

- ### Content
  - Penetration testing is a security assessment in which testers attempt to breach a target system using techniques an adversary might employ, working within an agreed scope and authorisation. The goal is to find vulnerabilities, demonstrate their impact and recommend remediation before real attackers exploit them.
  - Engagements range from external network testing to application, wireless and social engineering assessments, and they complement automated scanning by exercising chained weaknesses and realistic attack paths. Results feed into an organisation's broader information security programme.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
