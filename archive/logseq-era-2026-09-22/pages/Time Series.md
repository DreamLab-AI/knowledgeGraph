public:: true

# Time Series

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:time-series",
  "@type": "Page",
  "title": "Time Series",
  "vc:slug": "time-series",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:time-series",
  "@type": "Class",
  "label": "Time Series",
  "definition": "A time series is a sequence of data points indexed in chronological order, typically sampled at consistent intervals, that captures how a measured quantity changes over time. Time series data underpins forecasting, trend analysis, and anomaly detection, and requires specialised handling for properties such as seasonality, trend, and autocorrelation that are absent from unordered datasets. Derived statistics such as moving averages are computed directly over a time series to smooth noise and reveal underlying patterns.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:data-structure",
      "label": "Data Structure"
    }
  ],
  "relations": {}
}
```
