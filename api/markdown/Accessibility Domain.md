public:: true

# Accessibility Domain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7addc9f6daaa0eb851b4104b4384969da66ab9024dd5e780fa90a06c8d262ea7",
  "@type": "Page",
  "vc:slug": "accessibility-domain",
  "title": "Accessibility Domain",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:assistive-technology",
      "vc:label": "Assistive Technology"
    },
    {
      "@id": "urn:visionflow:linked:accessible-content",
      "vc:label": "Accessible Content"
    },
    {
      "@id": "urn:visionflow:linked:conformance-standard",
      "vc:label": "Conformance Standard"
    },
    {
      "@id": "urn:visionflow:linked:inclusive-design",
      "vc:label": "Inclusive Design"
    },
    {
      "@id": "urn:visionflow:linked:semantic-markup",
      "vc:label": "Semantic Markup"
    },
    {
      "@id": "urn:visionflow:linked:design-guidelines",
      "vc:label": "Design Guidelines"
    },
    {
      "@id": "urn:visionflow:linked:semantic-structure",
      "vc:label": "Semantic Structure"
    },
    {
      "@id": "urn:visionflow:linked:inclusive-access",
      "vc:label": "Inclusive Access"
    },
    {
      "@id": "urn:visionflow:linked:regulatory-compliance",
      "vc:label": "Regulatory Compliance"
    },
    {
      "@id": "urn:visionflow:linked:assistive-technology-support",
      "vc:label": "Assistive Technology Support"
    },
    {
      "@id": "urn:visionflow:linked:enterprise-software-domain",
      "vc:label": "Enterprise Software Domain"
    },
    {
      "@id": "urn:visionflow:linked:web-3-domain",
      "vc:label": "Web3 Domain"
    },
    {
      "@id": "urn:visionflow:linked:identity-domain",
      "vc:label": "Identity Domain"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    },
    {
      "@id": "urn:visionflow:linked:wcag-2-2",
      "vc:label": "WCAG 2.2"
    },
    {
      "@id": "urn:visionflow:linked:en-301-549",
      "vc:label": "EN 301 549"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Accessibility Domain"
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
  "@id": "urn:ngm:class:accessibility-domain",
  "@type": "Class",
  "label": "Accessibility Domain",
  "definition": "The Accessibility Domain classifies concepts concerned with making products, content, and services usable by people with the widest range of abilities, including those with disabilities. It covers perceivable, operable, and understandable design, assistive technology compatibility, and the standards that define conformance. As a top-level subject classification, it scopes inclusive access rather than general usability or interface aesthetics.",
  "domain": "standards",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-software-engineering",
      "label": "Infra Software Engineering"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:assistive-technology",
        "label": "Assistive Technology"
      },
      {
        "@id": "urn:ngm:class:accessible-content",
        "label": "Accessible Content"
      },
      {
        "@id": "urn:ngm:class:conformance-standard",
        "label": "Conformance Standard"
      },
      {
        "@id": "urn:ngm:class:inclusive-design",
        "label": "Inclusive Design"
      },
      {
        "@id": "urn:ngm:class:semantic-markup",
        "label": "Semantic Markup"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:design-guidelines",
        "label": "Design Guidelines"
      },
      {
        "@id": "urn:ngm:class:semantic-structure",
        "label": "Semantic Structure"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:inclusive-access",
        "label": "Inclusive Access"
      },
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      },
      {
        "@id": "urn:ngm:class:assistive-technology-support",
        "label": "Assistive Technology Support"
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
  "@id": "urn:visionflow:annotation:link-resolutions:accessibility-domain:8d4eefd5db69",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:7addc9f6daaa0eb851b4104b4384969da66ab9024dd5e780fa90a06c8d262ea7"
  },
  "vc:resolutions": [
    {
      "raw": "[[Assistive Technology]]",
      "resolved": "urn:visionflow:linked:assistive-technology",
      "kind": "StubLink"
    },
    {
      "raw": "[[Accessible Content]]",
      "resolved": "urn:visionflow:linked:accessible-content",
      "kind": "StubLink"
    },
    {
      "raw": "[[Conformance Standard]]",
      "resolved": "urn:visionflow:linked:conformance-standard",
      "kind": "StubLink"
    },
    {
      "raw": "[[Inclusive Design]]",
      "resolved": "urn:visionflow:linked:inclusive-design",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Semantic Markup]]",
      "resolved": "urn:visionflow:linked:semantic-markup",
      "kind": "StubLink"
    },
    {
      "raw": "[[Design Guidelines]]",
      "resolved": "urn:visionflow:linked:design-guidelines",
      "kind": "StubLink"
    },
    {
      "raw": "[[Semantic Structure]]",
      "resolved": "urn:visionflow:linked:semantic-structure",
      "kind": "StubLink"
    },
    {
      "raw": "[[Inclusive Access]]",
      "resolved": "urn:visionflow:linked:inclusive-access",
      "kind": "StubLink"
    },
    {
      "raw": "[[Regulatory Compliance]]",
      "resolved": "urn:visionflow:linked:regulatory-compliance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Assistive Technology Support]]",
      "resolved": "urn:visionflow:linked:assistive-technology-support",
      "kind": "StubLink"
    },
    {
      "raw": "[[Enterprise Software Domain]]",
      "resolved": "urn:visionflow:linked:enterprise-software-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[Web3 Domain]]",
      "resolved": "urn:visionflow:linked:web-3-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Identity Domain]]",
      "resolved": "urn:visionflow:linked:identity-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[WCAG 2.2]]",
      "resolved": "urn:visionflow:linked:wcag-2-2",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[EN 301 549]]",
      "resolved": "urn:visionflow:linked:en-301-549",
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
  - The Accessibility Domain classifies concepts concerned with making products, content, and services usable by people with the widest range of abilities, including those with disabilities. It covers perceivable, operable, and understandable design, assistive technology compatibility, and the standards that define conformance. As a top-level subject classification, it scopes inclusive access rather than general usability or interface aesthetics.

- ### Semantic Classification
  - owl-class:: a11y:AccessibilityDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Enterprise Software Domain]], [[Web3 Domain]], [[Identity Domain]]
  - has-part:: [[Assistive Technology]], [[Accessible Content]], [[Conformance Standard]], [[Inclusive Design]], [[Semantic Markup]]
  - requires:: [[Design Guidelines]], [[Semantic Structure]]
  - enables:: [[Inclusive Access]], [[Regulatory Compliance]], [[Assistive Technology Support]]

- ### Content
  - The Accessibility Domain organises the practices that ensure people with diverse abilities can perceive, operate, and understand digital products. Semantic markup exposes structure to assistive technology, accessible content provides text alternatives and sufficient contrast, and inclusive design considers a broad range of needs from the outset rather than retrofitting accommodations.
  - Conformance is measured against published standards, principally the Web Content Accessibility Guidelines, which organise requirements under the principles of perceivable, operable, understandable, and robust interaction. Meeting these criteria supports compatibility with screen readers, keyboard navigation, and other assistive technology, and increasingly satisfies legal obligations across jurisdictions.
  - As a top-level domain, accessibility applies across enterprise software, Web3 interfaces, and identity systems, all of which present interfaces that users must operate. It bridges to those domains because inclusive access is a property of their products rather than a separate artefact. Treating accessibility as its own classification keeps inclusive-design obligations visible across the graph rather than buried in individual applications.

- ### Provenance
  - sources:: [[WCAG 2.2]], [[EN 301 549]]
  - migration-date:: 2026-05-29T00:00:00Z
