public:: true

# AISI
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:dd21c0d551244224be34530977c043d768baa35bf54fc44983cc097cf7b3086a",
  "@type": "Page",
  "vc:slug": "aisi",
  "title": "AISI",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ai-governance",
      "vc:label": "AI Governance"
    },
    {
      "@id": "urn:visionflow:linked:ai-regulation",
      "vc:label": "AI Regulation"
    },
    {
      "@id": "urn:visionflow:linked:frontier-ai",
      "vc:label": "Frontier AI"
    },
    {
      "@id": "urn:visionflow:linked:ai-safety",
      "vc:label": "AI Safety"
    },
    {
      "@id": "urn:visionflow:linked:https-www-aisi-gov-uk",
      "vc:label": "https://www.aisi.gov.uk"
    },
    {
      "@id": "urn:visionflow:linked:https-www-gov-uk-government-organisations-ai-safety-institute",
      "vc:label": "https://www.gov.uk/government/organisations/ai-safety-institute"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "AISI"
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
  "@id": "urn:ngm:class:aisi",
  "@type": "Class",
  "label": "AISI",
  "definition": "The AI Safety Institute is a UK government body that evaluates advanced AI systems for safety and security risks. It was established to test frontier models and inform policy.",
  "domain": "governance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-safety",
      "label": "AI Safety"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:ai-governance",
        "label": "AI Governance"
      },
      {
        "@id": "urn:ngm:class:ai-regulation",
        "label": "AI Regulation"
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
  "@id": "urn:visionflow:annotation:link-resolutions:aisi:efa98ef1e586",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:dd21c0d551244224be34530977c043d768baa35bf54fc44983cc097cf7b3086a"
  },
  "vc:resolutions": [
    {
      "raw": "[[AI Governance]]",
      "resolved": "urn:visionflow:linked:ai-governance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[AI Regulation]]",
      "resolved": "urn:visionflow:linked:ai-regulation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Frontier AI]]",
      "resolved": "urn:visionflow:linked:frontier-ai",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[AI Safety]]",
      "resolved": "urn:visionflow:linked:ai-safety",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://www.aisi.gov.uk]]",
      "resolved": "urn:visionflow:linked:https-www-aisi-gov-uk",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://www.gov.uk/government/organisations/ai-safety-institute]]",
      "resolved": "urn:visionflow:linked:https-www-gov-uk-government-organisations-ai-safety-institute",
      "kind": "StubLink"
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
  - The AI Safety Institute is a UK government body that evaluates advanced AI systems for safety and security risks. It was established to test frontier models and inform policy.

- ### Semantic Classification
  - owl-class:: governance:AISI
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[AI Safety]]
  - bridges-to:: [[Frontier AI]]
  - enables:: [[AI Governance]], [[AI Regulation]]

- ### Content
  - The AI Safety Institute conducts technical evaluations of frontier AI models, examining capabilities and potential harms before and after deployment. Its work supports government decisions on the oversight of advanced systems.
  - The institute collaborates with model developers and international partners to share evaluation methods and findings. It focuses on areas such as misuse potential, autonomy, and the reliability of safety measures.

- ### Provenance
  - sources:: [[https://www.aisi.gov.uk]], [[https://www.gov.uk/government/organisations/ai-safety-institute]]
  - migration-date:: 2026-05-29T00:00:00Z
