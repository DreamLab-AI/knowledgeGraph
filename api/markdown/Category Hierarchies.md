public:: true

# Category Hierarchies
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3e98bdb550113e7d2a154edff1590b8d2c2525f7aff4ad4d364d87ccbc5091cf",
  "@type": "Page",
  "vc:slug": "category-hierarchies",
  "title": "Category Hierarchies",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:classification-rules",
      "vc:label": "Classification Rules"
    },
    {
      "@id": "urn:visionflow:linked:content-classification",
      "vc:label": "Content Classification"
    },
    {
      "@id": "urn:visionflow:linked:navigation-structure",
      "vc:label": "Navigation Structure"
    },
    {
      "@id": "urn:visionflow:linked:semantic-organization",
      "vc:label": "Semantic Organization"
    },
    {
      "@id": "urn:visionflow:linked:taxonomy-design",
      "vc:label": "Taxonomy Design"
    },
    {
      "@id": "urn:visionflow:linked:term-relationships",
      "vc:label": "Term Relationships"
    },
    {
      "@id": "urn:visionflow:owl:class:computer-vision",
      "vc:label": "Computer Vision"
    },
    {
      "@id": "urn:visionflow:owl:class:knowledge-organization-system",
      "vc:label": "Knowledge Organization System"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9816"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Category Hierarchies"
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
  "@id": "urn:ngm:class:category-hierarchies",
  "@type": "Class",
  "label": "Category Hierarchies",
  "definition": "A structured classification system that organizes concepts, objects, or information into parent-child relationships forming a tree-like taxonomy, enabling logical navigation from broad categories to specific subcategories for knowledge organization and content management.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-standards-and-interop",
      "label": "Standards and Interoperability"
    }
  ],
  "relations": {
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:knowledge-organization-system",
        "label": "Knowledge Organization System"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:classification-rules",
        "label": "Classification Rules"
      },
      {
        "@id": "urn:ngm:class:corporate-tax-compliance-frameworkonomy-design",
        "label": "Taxonomy Design"
      },
      {
        "@id": "urn:ngm:class:term-relationships",
        "label": "Term Relationships"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:content-classification",
        "label": "Content Classification"
      },
      {
        "@id": "urn:ngm:class:navigation-structure",
        "label": "Navigation Structure"
      },
      {
        "@id": "urn:ngm:class:semantic-organization",
        "label": "Semantic Organization"
      }
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:category-hierarchies:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:3e98bdb550113e7d2a154edff1590b8d2c2525f7aff4ad4d364d87ccbc5091cf"
  },
  "vc:resolutions": [
    {
      "raw": "[[Classification Rules]]",
      "resolved": "urn:visionflow:linked:classification-rules",
      "kind": "StubLink"
    },
    {
      "raw": "[[Content Classification]]",
      "resolved": "urn:visionflow:linked:content-classification",
      "kind": "StubLink"
    },
    {
      "raw": "[[Navigation Structure]]",
      "resolved": "urn:visionflow:linked:navigation-structure",
      "kind": "StubLink"
    },
    {
      "raw": "[[Semantic Organization]]",
      "resolved": "urn:visionflow:linked:semantic-organization",
      "kind": "StubLink"
    },
    {
      "raw": "[[Taxonomy Design]]",
      "resolved": "urn:visionflow:linked:taxonomy-design",
      "kind": "StubLink"
    },
    {
      "raw": "[[Term Relationships]]",
      "resolved": "urn:visionflow:linked:term-relationships",
      "kind": "StubLink"
    },
    {
      "raw": "[[Computer Vision]]",
      "resolved": "urn:visionflow:owl:class:computer-vision",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Knowledge Organization System]]",
      "resolved": "urn:visionflow:owl:class:knowledge-organization-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
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
  - A structured classification system that organizes concepts, objects, or information into parent-child relationships forming a tree-like taxonomy, enabling logical navigation from broad categories to specific subcategories for knowledge organization and content management.

- ### Semantic Classification
  - owl-class:: spatial-computing:CategoryHierarchies
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Knowledge Organization System]]
  - requires:: [[Taxonomy Design]], [[Term Relationships]], [[Classification Rules]]
  - enables:: [[Content Classification]], [[Navigation Structure]], [[Semantic Organization]]
  - bridges-to:: [[Computer Vision]]

- ### Content

  - ## Technical Details
  - **Hierarchy Types**:
		- **Linnaean System**: Domain, Kingdom, Phylum, Class, Order, Family, Genus, Species
		- **Library Classification**: Dewey Decimal, Library of Congress, Universal Decimal
		- **Faceted Taxonomy**: Independent filters combining to narrow results
  - **Design Principles**:
		- Terms arranged in parent-child relationships
		- Focus on terms needed for content coverage rather than abstract domain division
		- Avoid overly strict level definitions
		- Named levels (Domain, Category, Subcategory) are cautioned against
  - **Taxonomies vs. Ontologies**: Taxonomies are narrower, using hierarchical relationships; ontologies apply a larger variety of relation types
  - **Modern Applications**: Knowledge bases use hybrid taxonomy combining hierarchical navigation with intelligent tagging for multiple pathways to information
  - ## Applications
  - Content management system organization
  - E-commerce product categorization
  - Library and archive classification
  - Search and navigation optimization
  - Knowledge graph construction

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
