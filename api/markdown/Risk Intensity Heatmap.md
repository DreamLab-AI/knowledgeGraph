A heatmap is a data visualisation technique that encodes numerical values as colour intensities in a two-dimensional matrix, allowing rapid visual comparison of magnitudes across categorical dimensions. In the context of AI risk and impact analysis, heatmaps are used to compare urgency, impact, and composite severity scores across AI risk categories (such as security risks, algorithmic bias, job automation, and AI ethics), guiding prioritisation for governance and regulation. Heatmaps are typically rendered with colour-scheme gradients (e.g., Vega-Lite's blues scheme) and can be embedded directly in knowledge-graph pages for interactive analysis.

A **heatmap** is a two-dimensional data visualisation in which cell colour encodes a quantitative value, enabling rapid comparison of magnitudes across two categorical axes. In the AI risk domain, heatmaps plot risk categories (Security Risks, Algorithmic Bias, Job Automation, AI Ethics, etc.) against metrics (Urgency, Impact, Severity) to produce a composite risk landscape. The Vega-Lite rendering embedded in this page uses a "blues" colour scheme with a domain of 40–100 and manually ranked severity scores per category.

### Semantic Classification

### Content

- add in risk minimax, add composite severity column, reorder for severity, highlight GenAI for media in bold

```vegalite
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
```

### Provenance

