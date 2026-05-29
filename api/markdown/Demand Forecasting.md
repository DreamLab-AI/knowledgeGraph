public:: true

# Demand Forecasting
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:demand-forecasting",
  "@type": "Page",
  "vc:slug": "demand-forecasting",
  "title": "Demand Forecasting",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:demand-forecasting",
  "@type": "Class",
  "label": "Demand Forecasting",
  "definition": "Demand forecasting is the analytical process of estimating future customer demand for products or services over a specified time horizon using historical sales data, statistical models, and increasingly machine learning algorithms. Accurate demand forecasts drive inventory replenishment, capacity planning, production scheduling, and financial budgeting decisions across retail, manufacturing, logistics, and energy sectors.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:predictive-analytics", "label": "Predictive Analytics"}],
  "relations": {
    "enables": [{"@id": "urn:ngm:class:supply-chain-management", "label": "Supply Chain Management"}, {"@id": "urn:ngm:class:demand-planning", "label": "Demand Planning"}],
    "uses": [{"@id": "urn:ngm:class:machine-learning", "label": "Machine Learning"}],
    "relatedTo": [{"@id": "urn:ngm:class:supply-chain", "label": "Supply Chain"}, {"@id": "urn:ngm:class:logistics-optimisation", "label": "Logistics Optimisation"}],
    "hasPart": [{"@id": "urn:ngm:class:forecast-horizon", "label": "Forecast Horizon"}]
  },
  "quality": 0.8
}
```

- ### Definition
  - Demand forecasting is a form of [[Predictive Analytics]] that estimates future demand for goods or services by fitting models to historical sales, seasonality, promotional, and external economic signals, with outputs directly informing [[Supply Chain Management]] and [[Demand Planning]] decisions.

- ### Relationships
  - Demand forecasting enables [[Supply Chain Management]] by providing replenishment signals, supports [[Demand Planning]] as its primary input artefact, uses [[Machine Learning]] algorithms for pattern extraction, relates to the broader [[Supply Chain]] optimisation domain, drives [[Logistics Optimisation]] through improved shipment scheduling, and is structured by [[Forecast Horizon]] (short-, medium-, and long-range windows).

- ### Content
  - Quantitative demand forecasting has been practised since the advent of operations research in the 1950s. Exponential smoothing methods (Holt-Winters, 1957-1960) became the workhorse of inventory systems through the 1970s-80s. The ARIMA family of statistical models (Box-Jenkins methodology, 1970) provided a systematic framework for time-series forecasting. The 1990s-2000s saw the adoption of enterprise planning systems (SAP APO, Oracle Demantra) that embedded these classical methods at scale. The M-Competitions (Makridakis Competitions) from 1982 onward provided standardised benchmarking, and the M5 Competition (2020) demonstrated that LightGBM and neural-network ensembles consistently outperform classical statistical methods.

  - Demand forecasting methods span classical statistics, machine learning, and deep learning. Classical approaches include exponential smoothing (ETS), ARIMA/SARIMA, and regression with external regressors. Machine learning methods include gradient-boosted trees (LightGBM, XGBoost) that handle large feature sets including promotions, holidays, weather, and macroeconomic indicators. Deep learning approaches include LSTM and Temporal Fusion Transformer (TFT) models that learn complex non-linear patterns and long-range dependencies. Hierarchical forecasting addresses the reconciliation problem: forecasts produced at national, regional, and SKU level must be mathematically consistent. Global models trained across all SKUs simultaneously often outperform per-SKU models by sharing statistical strength.

  - Accurate demand forecasting delivers material financial benefits. A 1% improvement in forecast accuracy typically reduces excess inventory by 1-3% and stockouts by 0.5-1%, translating directly into working capital savings and service-level improvements. In grocery retail, where products have short shelf lives and markdown costs are high, demand forecasting accuracy directly affects waste reduction and margin. In energy utilities, demand forecasting governs generator dispatch and grid balancing decisions measured in real-time. Pharmaceutical manufacturers rely on forecasts for API procurement and cold-chain logistics planning with multi-year lead times.

  - By 2024-2025 foundation models for time series (TimesFM, Chronos, Moirai) trained on billions of time-series observations have emerged as zero-shot forecasters that match or exceed supervised models in certain regimes, eliminating the need for per-product training pipelines. Probabilistic forecasting — producing full predictive distributions rather than point estimates — has become mainstream, enabling risk-aware inventory optimisation through stochastic programming. Large retailers (Amazon, Walmart, Zara) operate closed-loop systems in which forecasts trigger autonomous replenishment decisions without human review. Exogenous AI signals from web search trends, social media sentiment, and satellite imagery (parking lot occupancy, crop yield) are increasingly incorporated as features.
