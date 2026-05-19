public:: true

# Intersectional Fairness
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:bb4b38ac75c42d5660880c74200e7178e043b5c0101422ad2c2897bba90a1978",
  "@type": "Page",
  "vc:slug": "intersectional-fairness",
  "title": "Intersectional Fairness",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:buolamwini-and-gebru-2018",
      "vc:label": "Buolamwini and Gebru (2018)"
    },
    {
      "@id": "urn:visionflow:linked:crenshaw-1989",
      "vc:label": "Crenshaw (1989)"
    },
    {
      "@id": "urn:visionflow:linked:ieee-p7003-2021",
      "vc:label": "IEEE P7003-2021"
    },
    {
      "@id": "urn:visionflow:owl:class:aiethics-domain",
      "vc:label": "AIEthicsDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:conceptual-layer",
      "vc:label": "ConceptualLayer"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0384"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Intersectional Fairness"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:intersectional-fairness",
  "@type": "Class",
  "label": "Intersectional Fairness",
  "definition": "Intersectional Fairness is an approach to algorithmic fairness that accounts for overlapping and interacting protected attributes, recognizing that individuals with multiple marginalized identities may experience unique forms of discrimination not captured by analyzing single attributes in isolat...",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-governance-and-ethics",
      "label": "AI Governance and Ethics"
    }
  ],
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:intersectional-fairness:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:bb4b38ac75c42d5660880c74200e7178e043b5c0101422ad2c2897bba90a1978"
  },
  "vc:resolutions": [
    {
      "raw": "[[Buolamwini and Gebru (2018)]]",
      "resolved": "urn:visionflow:linked:buolamwini-and-gebru-2018",
      "kind": "StubLink"
    },
    {
      "raw": "[[Crenshaw (1989)]]",
      "resolved": "urn:visionflow:linked:crenshaw-1989",
      "kind": "StubLink"
    },
    {
      "raw": "[[IEEE P7003-2021]]",
      "resolved": "urn:visionflow:linked:ieee-p7003-2021",
      "kind": "StubLink"
    },
    {
      "raw": "[[AIEthicsDomain]]",
      "resolved": "urn:visionflow:owl:class:aiethics-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ConceptualLayer]]",
      "resolved": "urn:visionflow:owl:class:conceptual-layer",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Intersectional Fairness is an approach to algorithmic fairness that accounts for overlapping and interacting protected attributes, recognizing that individuals with multiple marginalized identities may experience unique forms of discrimination not captured by analyzing single attributes in isolation. Rooted in intersectionality theory from critical race and feminist scholarship (Crenshaw 1989), this framework acknowledges that the experiences of, for example, Black women cannot be understood simply as the combination of being Black and being a woman, but involve distinct discriminatory patterns at the intersection of race and gender. In AI systems, intersectional fairness requires evaluating bias and fairness metrics across intersectional subgroups defined by specific combinations of protected attribute values, where the number of subgroups equals the product of attribute cardinalities (e.g., 2 genders × 4 race categories × 3 age brackets = 24 subgroups). This analysis often reveals intersectional disparities where subgroups experience worse outcomes than predicted by single-attribute analysis, particularly affecting individuals with multiple marginalized identities. Implementation challenges include exponential growth of subgroups with additional attributes, sample size limitations for rare intersectional groups, and computational complexity of enforcing fairness across all subgroups simultaneously. Intersectional fairness auditing is increasingly required by comprehensive AI governance frameworks and documented in research by Buolamwini and Gebru (2018) on gender-race bias in facial recognition.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:IntersectionalFairness
  - owl-role:: Process
  - owl-inferred:: ai:VirtualProcess
  - belongs-to-domain:: [[AIEthicsDomain]]
  - implemented-in-layer:: [[ConceptualLayer]]

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  Intersectional Fairness — content pending enrichment.

- ### Provenance
  - sources:: [[Crenshaw (1989)]], [[Buolamwini and Gebru (2018)]], [[IEEE P7003-2021]]
  - migration-date:: 2026-04-26T00:00:00Z
