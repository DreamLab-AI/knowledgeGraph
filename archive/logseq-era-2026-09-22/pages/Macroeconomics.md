public:: true

# Macroeconomics
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c03586b1229f07c1a0b25a412e15f5cf988e85702dd2b59e6fc2de3b095395dc",
  "@type": "Page",
  "vc:slug": "macroeconomics",
  "title": "Macroeconomics",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:inflation-hedge",
      "vc:label": "Inflation Hedge"
    },
    {
      "@id": "urn:visionflow:linked:inflation",
      "vc:label": "Inflation"
    },
    {
      "@id": "urn:visionflow:linked:monetary-policy",
      "vc:label": "Monetary Policy"
    },
    {
      "@id": "urn:visionflow:linked:economics",
      "vc:label": "Economics"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Macroeconomics"
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
  "@id": "urn:ngm:class:macroeconomics",
  "@type": "Class",
  "label": "Macroeconomics",
  "definition": "Macroeconomics is the branch of economics that studies the behaviour and performance of an economy as a whole, examining aggregate phenomena such as gross domestic product, price levels, unemployment, business cycles, and long-run growth. It analyses how monetary and fiscal policy shape inflation, output, and employment, and how international trade and capital flows interconnect national economies. The discipline develops formal models — from Keynesian demand frameworks to DSGE models — that link household, firm, and government behaviour to economy-wide outcomes. It contrasts with microeconomics by focusing on aggregate rather than individual-agent variables.",
  "domain": "finance",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:economics",
      "label": "Economics"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:monetary-policy",
        "label": "Monetary Policy"
      },
      {
        "@id": "urn:ngm:class:fiscal-policy",
        "label": "Fiscal Policy"
      },
      {
        "@id": "urn:ngm:class:national-income-accounting",
        "label": "National Income Accounting"
      },
      {
        "@id": "urn:ngm:class:international-trade",
        "label": "International Trade"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:economics",
        "label": "Economics"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:national-income-accounting",
        "label": "National Income Accounting"
      },
      {
        "@id": "urn:ngm:class:econometrics",
        "label": "Econometrics"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:inflation-hedge",
        "label": "Inflation Hedge"
      },
      {
        "@id": "urn:ngm:class:central-banking",
        "label": "Central Banking"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:gross-domestic-product",
        "label": "Gross Domestic Product"
      },
      {
        "@id": "urn:ngm:class:consumer-price-index",
        "label": "Consumer Price Index"
      },
      {
        "@id": "urn:ngm:class:interest-rate",
        "label": "Interest Rate"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:microeconomics",
        "label": "Microeconomics"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:inflation",
        "label": "Inflation"
      },
      {
        "@id": "urn:ngm:class:economic-growth",
        "label": "Economic Growth"
      },
      {
        "@id": "urn:ngm:class:exchange-rate",
        "label": "Exchange Rate"
      },
      {
        "@id": "urn:ngm:class:balance-of-payments",
        "label": "Balance of Payments"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:financial-market",
        "label": "Financial Market"
      },
      {
        "@id": "urn:ngm:class:data-analytics",
        "label": "Data Analytics"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:aggregate-economics",
      "label": "Aggregate Economics"
    }
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:macroeconomics:8ce1b739de4c",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:c03586b1229f07c1a0b25a412e15f5cf988e85702dd2b59e6fc2de3b095395dc"
  },
  "vc:resolutions": [
    {
      "raw": "[[Inflation Hedge]]",
      "resolved": "urn:visionflow:linked:inflation-hedge",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Inflation]]",
      "resolved": "urn:visionflow:linked:inflation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Monetary Policy]]",
      "resolved": "urn:visionflow:linked:monetary-policy",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Economics]]",
      "resolved": "urn:visionflow:linked:economics",
      "kind": "ResolvedLink"
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
  - Macroeconomics is the branch of [[Economics]] that studies the behaviour and performance of an economy as a whole rather than the decisions of individual agents or markets. It examines aggregate phenomena including [[Gross Domestic Product]], [[Inflation]], [[Unemployment]], [[Business Cycle]] fluctuations, and long-run [[Economic Growth]]. The field investigates how [[Monetary Policy]] set by central banks and [[Fiscal Policy]] enacted by governments interact with private-sector behaviour to determine economy-wide outcomes. Macroeconomic models range from simple Keynesian income-expenditure frameworks to modern Dynamic Stochastic General Equilibrium (DSGE) models used by central banks worldwide.

- ### Overview
  - Macroeconomics emerged as a distinct discipline following John Maynard Keynes's 1936 *General Theory of Employment, Interest and Money*, which argued that aggregate demand could be deficient and that government intervention was sometimes necessary to stabilise output and employment.
  - Prior to Keynes, classical economists assumed that markets clear automatically and that the economy tends towards full employment in the long run — a position associated with Say's Law.
  - The post-war neoclassical synthesis integrated Keynesian short-run analysis with classical long-run equilibrium, producing the IS-LM framework still taught in undergraduate programmes.
  - The 1970s stagflation crisis challenged Keynesian orthodoxy, giving rise to monetarism (Milton Friedman), rational expectations (Robert Lucas), and Real Business Cycle theory.
  - Contemporary macroeconomics is dominated by DSGE models that incorporate [[Aggregate Demand]], [[Aggregate Supply]], nominal rigidities, and optimising agents, used operationally by the Federal Reserve, the ECB, the Bank of England, and the IMF.
  - Macroeconomics matters because economies periodically experience deep recessions, runaway [[Inflation]], or crises in [[Balance of Payments]] — and policy-makers need reliable frameworks to diagnose causes and design remedies.

- ### Key Components
  - #### National Accounts
    - [[National Income Accounting]] provides the statistical scaffolding of macroeconomics. The System of National Accounts (SNA) measures [[Gross Domestic Product]] via the expenditure approach (C + I + G + NX), the income approach, and the production approach.
    - Key aggregates: GDP, Gross National Income (GNI), Net National Income, disposable income, and saving rates.
    - Price deflators convert nominal to real values, enabling meaningful comparisons over time and across countries.
  - #### Output and Growth
    - [[Economic Growth]] in the long run is explained by the Solow-Swan growth model: capital accumulation, labour force expansion, and total factor productivity (technological progress) drive per-capita income growth.
    - Endogenous growth theory (Romer, Lucas) internalises the sources of technological change, emphasising human capital and research.
    - Growth accounting decomposes observed output growth into contributions from capital, labour, and the Solow residual.
  - #### Business Cycles
    - [[Business Cycle]] analysis tracks short-run fluctuations around the long-run trend. Phases include expansion, peak, contraction (recession), and trough.
    - Leading, lagging, and coincident indicators — e.g., purchasing managers' indices, [[Consumer Price Index]] trends, yield-curve spreads — help forecast turning points.
    - Automatic stabilisers (progressive taxation, unemployment benefits) dampen cycle amplitude without active policy.
  - #### Inflation and Price Level
    - [[Inflation]] is the sustained rise in the general price level measured by indices such as the [[Consumer Price Index]] and the GDP deflator.
    - The Phillips Curve posits a short-run trade-off between [[Inflation]] and [[Unemployment]], though the long-run curve is widely regarded as vertical (natural rate of unemployment, NAIRU).
    - Inflation expectations anchor price-setting behaviour; central banks invest heavily in managing them via forward guidance and inflation targeting frameworks.
    - Cost-push, demand-pull, and built-in (wage-price spiral) inflation are the three primary causal mechanisms.
  - #### Unemployment
    - [[Unemployment]] is disaggregated into frictional (job search transitions), structural (skill mismatch), cyclical (demand deficiency), and seasonal components.
    - The natural rate of unemployment (NAIRU) is the level consistent with stable inflation; it is unobservable and must be estimated.
    - Full employment is a policy goal but is understood as consistent with positive frictional and structural unemployment.
  - #### Monetary Policy
    - [[Monetary Policy]] is the primary short-run stabilisation tool in most advanced economies, conducted by independent central banks.
    - Policy instruments: the policy interest rate ([[Interest Rate]]), open market operations, reserve requirements, and — since 2008 — unconventional tools such as quantitative easing and forward guidance.
    - The Taylor Rule provides a benchmark: the policy rate responds to deviations of inflation from target and of output from potential.
    - [[Central Banking]] institutions (Federal Reserve, European Central Bank, Bank of England, Bank of Japan) are the institutional locus of monetary policy.
  - #### Fiscal Policy
    - [[Fiscal Policy]] involves government spending and taxation decisions that affect aggregate demand and resource allocation.
    - Expansionary fiscal policy (higher spending or lower taxes) stimulates demand; contractionary policy does the opposite.
    - The fiscal multiplier measures how much GDP changes per unit of government spending — its magnitude depends on monetary policy, openness to trade, and the state of the economy.
    - [[Public Debt]] sustainability analysis evaluates whether deficit paths are consistent with a stable debt-to-GDP ratio.
  - #### Open Economy Macroeconomics
    - Open economies are linked via trade flows and [[International Trade]] and capital flows captured in the [[Balance of Payments]].
    - The Mundell-Fleming model extends IS-LM to an open economy, showing how [[Exchange Rate]] regimes (fixed vs. floating) alter the effectiveness of monetary and fiscal policy.
    - The current account identity links domestic saving–investment gaps to net exports and capital flows.
    - Currency crises, sudden stops in capital inflows, and contagion are open-economy phenomena studied in international macroeconomics.

- ### Theoretical Schools
  - **Classical / Neoclassical** — markets clear, prices are flexible, long-run equilibrium is self-correcting. Policy is largely ineffective in real terms.
  - **Keynesian** — price stickiness and [[Aggregate Demand]] shortfalls can produce prolonged recessions; fiscal stimulus can restore full employment.
  - **New Keynesian** — DSGE models with microfounded nominal rigidities; dominant framework in central banking today.
  - **Monetarist** — [[Monetary Policy]] should follow rules (e.g., constant money growth) rather than discretion; inflation is always and everywhere a monetary phenomenon (Friedman).
  - **Real Business Cycle** — business cycles are efficient responses to real (technology) shocks; monetary factors are secondary.
  - **Post-Keynesian** — emphasises demand-driven growth, financial instability (Minsky), and endogenous money creation.
  - **Behavioural Macroeconomics** — integrates psychological biases and bounded rationality into aggregate models.

- ### Applications and Use Cases
  - **Central Bank Operations** — [[Central Banking]] institutions use macroeconomic models to set [[Interest Rate]] targets, conduct stress tests, and communicate forward guidance to stabilise [[Inflation]] expectations.
  - **Fiscal Planning** — Finance ministries rely on macroeconomic forecasts to project tax revenues, plan public investment, and assess [[Public Debt]] sustainability under alternative scenarios.
  - **[[Economic Forecasting]]** — international organisations (IMF, World Bank, OECD), national statistics offices, and private banks publish GDP, [[Inflation]], and unemployment forecasts that guide business investment and asset allocation.
  - **[[Inflation Hedge]] Design** — investors use macroeconomic analysis to construct portfolios resilient to inflationary regimes, selecting assets such as index-linked bonds, commodities, and real estate.
  - **Exchange Rate Management** — policy-makers use open-economy macro models to evaluate intervention in [[Exchange Rate]] markets and design currency pegs or managed floats.
  - **Development Economics** — macroeconomic frameworks underpin structural adjustment programmes, debt relief initiatives, and growth diagnostics in emerging markets.
  - **Climate-Macro Integration** — integrated assessment models combine macroeconomic structure with climate damages to evaluate carbon pricing, green investment, and transition risks.

- ### Key Indicators and Data Sources
  - [[Gross Domestic Product]] — output of goods and services; published quarterly by national statistics offices.
  - [[Consumer Price Index]] and Producer Price Index — inflation measures; published monthly.
  - [[Unemployment]] rate — labour market slack; typically monthly from household surveys.
  - [[Interest Rate]] — policy rates set by central banks; market rates from bond markets.
  - [[Exchange Rate]] — spot and forward rates from foreign exchange markets.
  - Current account balance — external sector health from [[Balance of Payments]] statistics.
  - Money supply aggregates (M1, M2, M3) — monetary conditions.
  - Yield curve — spread between short and long-term government bond yields; recession predictor.

- ### Relationships
  - partOf:: [[Economics]]
  - hasPart:: [[Monetary Policy]], [[Fiscal Policy]], [[Business Cycle]], [[National Income Accounting]], [[International Trade]]
  - requires:: [[Econometrics]], [[National Income Accounting]]
  - enables:: [[Inflation Hedge]], [[Economic Forecasting]], [[Central Banking]]
  - dependsOn:: [[Aggregate Demand]], [[Aggregate Supply]]
  - uses:: [[Gross Domestic Product]], [[Consumer Price Index]], [[Interest Rate]]
  - contrastsWith:: [[Microeconomics]]
  - relatedTo:: [[Inflation]], [[Unemployment]], [[Economic Growth]], [[Exchange Rate]], [[Public Debt]], [[Balance of Payments]]
  - bridges-to:: [[Financial Market]], [[Data Analytics]]

- ### Standards and Institutional Context
  - **System of National Accounts (SNA 2008)** — the UN/IMF/World Bank/OECD/Eurostat joint standard for national accounts measurement; defines GDP, GNI, and sector balance sheets.
  - **Balance of Payments and International Investment Position Manual (BPM6)** — IMF standard for external sector statistics underpinning open-economy macro analysis.
  - **Government Finance Statistics Manual (GFSM 2014)** — IMF standard for fiscal data used in [[Fiscal Policy]] analysis.
  - **Basel III / IV** — prudential standards that interact with macroprudential policy and financial stability analysis.
  - **IMF Article IV Consultations** — annual bilateral surveillance of member-country macroeconomic policies; the primary international accountability mechanism.
  - **OECD Economic Outlook** — biannual global forecast and policy assessment covering 38 OECD members and major emerging economies.
  - Key institutions: International Monetary Fund, World Bank, OECD, Bank for International Settlements (BIS), national central banks, and finance ministries.

- ### Provenance
  - sources:: Keynes (1936) General Theory; Samuelson (1948) Economics; Mankiw (2020) Macroeconomics 11e; Blanchard (2021) Macroeconomics 8e; OECD SNA 2008; IMF BPM6; BIS Working Papers
  - updated:: 2026-06-13
