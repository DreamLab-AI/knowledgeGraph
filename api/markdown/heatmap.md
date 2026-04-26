iri:: http://narrativegoldmine.com/infrastructure#Heatmap
uri:: urn:visionclaw:concept:infrastructure:heatmap
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:infrastructure:heatmap
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: infrastructure
preferred-term:: heatmap
content-hash:: sha256-12-da12e7bab3a5
status:: stub
maturity:: draft
quality-score:: 0.50
authority-score:: 0.00
version:: 2.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T13:00:00Z
public:: true

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
