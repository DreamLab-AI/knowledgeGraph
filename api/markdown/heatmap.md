public:: true

# heatmap
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0d6e0b190399ae2e7283b092ca002aec75df4de41f77c334d49fe3aafd006bdd",
  "@type": "Page",
  "vc:slug": "heatmap",
  "title": "heatmap",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "heatmap"
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
  "@id": "urn:ngm:class:heatmap",
  "@type": "Class",
  "label": "heatmap",
  "definition": "heatmap is a technology infrastructure concept and a type of infrastructure.",
  "domain": "infrastructure",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-software-engineering",
      "label": "Software Engineering"
    }
  ],
  "quality": 0.5,
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
  "@id": "urn:visionflow:annotation:link-resolutions:heatmap:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:0d6e0b190399ae2e7283b092ca002aec75df4de41f77c334d49fe3aafd006bdd"
  },
  "vc:resolutions": [],
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
  - heatmap is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: infrastructure:Heatmap
  - owl-role:: Concept

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  - add in risk minimax, add composite severity column, reorder for severity, highlight GenAI for media in bold
  - {{renderer code_diagram,vegalite}}
		- ```vegalite
		  {
		    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
		    "description": "A heatmap of AI impacts and categories with recalibrated urgency, impact, and manually calculated composite severity score out of 100, manually ordered by severity",
		    "data": {
		      "values": [
		        {"Category": "Security Risks", "Metric": "Urgency", "Value": 80},
		        {"Category": "Security Risks", "Metric": "Impact", "Value": 95},
		        {"Category": "Security Risks", "Metric": "Severity", "Value": 88},
		        {"Category": "AI Arms Race", "Metric": "Urgency", "Value": 75},
		        {"Category": "AI Arms Race", "Metric": "Impact", "Value": 90},
		        {"Category": "AI Arms Race", "Metric": "Severity", "Value": 83},
		        {"Category": "Global Problem Solving", "Metric": "Urgency", "Value": 60},
		        {"Category": "Global Problem Solving", "Metric": "Impact", "Value": 90},
		        {"Category": "Global Problem Solving", "Metric": "Severity", "Value": 80},
		        {"Category": "Unintended Consequences", "Metric": "Urgency", "Value": 70},
		        {"Category": "Unintended Consequences", "Metric": "Impact", "Value": 90},
		        {"Category": "Unintended Consequences", "Metric": "Severity", "Value": 80},
		        {"Category": "Algorithmic Bias", "Metric": "Urgency", "Value": 70},
		        {"Category": "Algorithmic Bias", "Metric": "Impact", "Value": 80},
		        {"Category": "Algorithmic Bias", "Metric": "Severity", "Value": 75},
		        {"Category": "Efficiency Gains", "Metric": "Urgency", "Value": 55},
		        {"Category": "Efficiency Gains", "Metric": "Impact", "Value": 85},
		        {"Category": "Efficiency Gains", "Metric": "Severity", "Value": 70},
		        {"Category": "Job Automation", "Metric": "Urgency", "Value": 65},
		        {"Category": "Job Automation", "Metric": "Impact", "Value": 75},
		        {"Category": "Job Automation", "Metric": "Severity", "Value": 70},
		        {"Category": "AI Regulation", "Metric": "Urgency", "Value": 60},
		        {"Category": "AI Regulation", "Metric": "Impact", "Value": 80},
		        {"Category": "AI Regulation", "Metric": "Severity", "Value": 70},
		        {"Category": "Innovation Potential", "Metric": "Urgency", "Value": 40},
		        {"Category": "Innovation Potential", "Metric": "Impact", "Value": 85},
		        {"Category": "Innovation Potential", "Metric": "Severity", "Value": 63},
		        {"Category": "Quality of Life Improvements", "Metric": "Urgency", "Value": 50},
		        {"Category": "Quality of Life Improvements", "Metric": "Impact", "Value": 80},
		        {"Category": "Quality of Life Improvements", "Metric": "Severity", "Value": 65},
		        {"Category": "AI Ethics", "Metric": "Urgency", "Value": 45},
		        {"Category": "AI Ethics", "Metric": "Impact", "Value": 85},
		        {"Category": "AI Ethics", "Metric": "Severity", "Value": 65},
		        {"Category": "Cultural and Creative Enrichment", "Metric": "Urgency", "Value": 30},
		        {"Category": "Cultural and Creative Enrichment", "Metric": "Impact", "Value": 70},
		        {"Category": "Cultural and Creative Enrichment", "Metric": "Severity", "Value": 50}
		      ]
		    },
		    "mark": "rect",
		    "encoding": {
		      "x": {
		        "field": "Metric",
		        "type": "nominal",
		        "axis": {"labelAngle": -90}
		      },
		      "y": { 
		        "field": "Category",
		        "type": "nominal",
		        "axis": {"labelAngle": -45}
		      },
		      "color": {
		        "field": "Value",
		        "type": "quantitative",
		        "scale": {
		          "domain": [40, 100],
		          "scheme": "blues"
		        },
		        "legend": null
		      }
		    }
		  }

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
