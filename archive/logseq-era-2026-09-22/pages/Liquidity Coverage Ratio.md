public:: true

# Liquidity Coverage Ratio

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:liquidity-coverage-ratio", "@type":"Page", "title":"Liquidity Coverage Ratio", "vc:slug":"liquidity-coverage-ratio", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:liquidity-coverage-ratio",
  "@type":"Class",
  "label":"Liquidity Coverage Ratio",
  "definition":"The Liquidity Coverage Ratio (LCR) is a prudential regulatory standard requiring banks to hold a stock of high-quality liquid assets sufficient to cover their projected net cash outflows over a thirty-day stress scenario. Introduced under Basel III, it is expressed as the ratio of the liquidity buffer to stressed net outflows and must equal or exceed one hundred per cent. The measure is designed to ensure short-term resilience to acute liquidity shocks.",
  "domain":"finance",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:banking-regulation","label":"Banking Regulation"}],
  "relations":{
    "hasPart":[{"@id":"urn:ngm:class:capital-adequacy","label":"Capital Adequacy"}],
    "requires":[{"@id":"urn:ngm:class:stress-testing","label":"Stress Testing"}],
    "standardizedBy":[{"@id":"urn:ngm:class:basel-iii","label":"Basel III"},{"@id":"urn:ngm:class:basel-committee","label":"Basel Committee"}],
    "supports":[{"@id":"urn:ngm:class:financial-stability","label":"Financial Stability"}],
    "implements":[{"@id":"urn:ngm:class:prudential-regulation","label":"Prudential Regulation"}],
    "dependsOn":[{"@id":"urn:ngm:class:risk-management","label":"Risk Management"}],
    "partOf":[{"@id":"urn:ngm:class:basel-iii","label":"Basel III"}],
    "relatedTo":[{"@id":"urn:ngm:class:capital-adequacy","label":"Capital Adequacy"},{"@id":"urn:ngm:class:financial-regulation","label":"Financial Regulation"}],
    "contrastsWith":[{"@id":"urn:ngm:class:capital-adequacy","label":"Capital Adequacy"}],
    "bridgesTo":[{"@id":"urn:ngm:class:regulatory-framework","label":"Regulatory Framework"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- The [[Liquidity Coverage Ratio]] requires banks to hold high-quality liquid assets sufficient to survive a thirty-day liquidity stress, a core component of [[Banking Regulation]].
- It was introduced under [[Basel III]] and is overseen by the [[Basel Committee]] as part of [[Prudential Regulation]].
- The ratio promotes [[Financial Stability]] by reducing reliance on volatile short-term funding.
- ### Overview
- The LCR is computed as the stock of high-quality liquid assets divided by total net cash outflows over a defined thirty-day stress horizon.
- Regulators require the ratio to be at least one hundred per cent, meaning the liquidity buffer fully covers stressed outflows.
- High-quality liquid assets are classified into tiers reflecting their reliability of conversion to cash under stress, with haircuts applied to lower tiers.
- Net outflows are derived by applying standardised run-off rates to deposits and other liabilities and inflow caps to expected receipts.
- ### Key aspects
- The numerator emphasises unencumbered assets that can be monetised quickly with little or no loss of value.
- The denominator reflects a hypothetical but severe combined idiosyncratic and market-wide stress scenario.
- The standard complements longer-horizon measures such as the net stable funding ratio that address structural funding.
- Supervisors monitor the ratio continuously and may require remediation if it falls below the threshold.
- ### Applications
- Forms part of the supervisory toolkit used by central banks and prudential authorities to assess bank resilience.
- Drives bank treasury management of liquidity buffers and funding profiles.
- Underpins [[Stress Testing]] exercises and recovery planning.
- ### Relationships
- subClassOf:: [[Banking Regulation]]
- hasPart:: [[Capital Adequacy]]
- requires:: [[Stress Testing]]
- standardizedBy:: [[Basel III]]
- standardizedBy:: [[Basel Committee]]
- supports:: [[Financial Stability]]
- implements:: [[Prudential Regulation]]
- dependsOn:: [[Risk Management]]
- partOf:: [[Basel III]]
- relatedTo:: [[Capital Adequacy]]
- relatedTo:: [[Financial Regulation]]
- contrastsWith:: [[Capital Adequacy]]
- bridgesTo:: [[Regulatory Framework]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
