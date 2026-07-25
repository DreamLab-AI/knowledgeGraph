public:: true

# NCSC
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f183660d4fd911d45a448b54e3d4b97f355bf050d456094c6c27b02cf21924d2",
  "@type": "Page",
  "vc:slug": "ncsc",
  "title": "NCSC",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:cybersecurity",
      "vc:label": "Cybersecurity"
    },
    {
      "@id": "urn:visionflow:linked:incident-response",
      "vc:label": "Incident Response"
    },
    {
      "@id": "urn:visionflow:linked:information-security",
      "vc:label": "Information Security"
    },
    {
      "@id": "urn:visionflow:linked:risk-management",
      "vc:label": "Risk Management"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "NCSC"
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
  "@id": "urn:ngm:class:ncsc",
  "@type": "Class",
  "label": "NCSC",
  "definition": "The National Cyber Security Centre, the United Kingdom's national technical authority for cyber security, providing guidance and incident response support.",
  "domain": "governance",
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
        "@id": "urn:ngm:class:incident-response",
        "label": "Incident Response"
      },
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
  "@id": "urn:visionflow:annotation:link-resolutions:ncsc:cc7ca1d22133",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f183660d4fd911d45a448b54e3d4b97f355bf050d456094c6c27b02cf21924d2"
  },
  "vc:resolutions": [
    {
      "raw": "[[Cybersecurity]]",
      "resolved": "urn:visionflow:linked:cybersecurity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Incident Response]]",
      "resolved": "urn:visionflow:linked:incident-response",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Information Security]]",
      "resolved": "urn:visionflow:linked:information-security",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Risk Management]]",
      "resolved": "urn:visionflow:linked:risk-management",
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
  - The National Cyber Security Centre, the United Kingdom's national technical authority for cyber security, providing guidance and incident response support.

- ### Semantic Classification
  - owl-class:: governance:NCSC
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Cybersecurity]]
  - bridges-to:: [[Risk Management]]
  - requires:: [[Cybersecurity]]
  - enables:: [[Incident Response]], [[Information Security]]

- ### Content
  - The National Cyber Security Centre is the United Kingdom's authority on cyber security. It provides advice and support to the public and private sectors, publishes guidance on protective measures and coordinates responses to significant cyber incidents.
  - The centre issues threat assessments, technical standards and best-practice frameworks intended to raise resilience across organisations and critical national infrastructure. It works with government, industry and international partners on shared security objectives.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
