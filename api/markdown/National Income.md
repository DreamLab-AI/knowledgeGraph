public:: true

# National Income
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:462e7810725dab4c8a27466e1d29d0c99be8c5281545b2aae336568a331a1d98",
  "@type": "Page",
  "vc:slug": "national-income",
  "title": "National Income",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:macroeconomics", "vc:label": "Macroeconomics"},
    {"@id": "urn:visionflow:linked:gross-domestic-product", "vc:label": "Gross Domestic Product"},
    {"@id": "urn:visionflow:linked:inflation", "vc:label": "Inflation"},
    {"@id": "urn:visionflow:linked:economics", "vc:label": "Economics"}
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {"@id": "did:nostr:ontology-mesh"},
  "prov:generatedAtTime": {"@value": "2026-08-06T00:00:00Z", "@type": "xsd:dateTime"}
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:national-income",
  "@type": "Class",
  "label": "National Income",
  "definition": "National income is the total income earned by a country's residents — wages, profits, rent, and interest — from the production of goods and services over an accounting period, whether that production occurs at home or abroad. It is measured within the system of national accounts, where gross national income equals gross domestic product plus net factor income from overseas, and net national income further deducts depreciation of the capital stock, making it the income-side counterpart to output measures of economic activity.",
  "domain": "finance",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:macroeconomics",
    "label": "Macroeconomics"
  },
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:economics", "label": "Economics"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:gross-domestic-product", "label": "Gross Domestic Product"},
      {"@id": "urn:ngm:class:inflation", "label": "Inflation"}
    ]
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
  }
}
```

- ### Definition
  - "National income is the total income earned by a country's residents — wages, profits, rent, and interest — from the production of goods and services over an accounting period, whether that production occurs at home or abroad. It is measured within the system of national accounts, where gross national income equals gross domestic product plus net factor income from overseas, and net national income further deducts depreciation of the capital stock, making it the income-side counterpart to output measures of economic activity."

- ### Semantic Classification
  - owl-class:: finance:NationalIncome
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Macroeconomics]]
  - part-of:: [[Economics]]
  - related-to:: [[Gross Domestic Product]]

- ### Content

  ## Definition

  **National income** is the aggregate income accruing to a country's residents from productive activity in a given period. Where [[Gross Domestic Product]] measures the value of output produced *within* a territory, national income follows the *ownership* of the factors of production: it adds income that residents earn abroad (repatriated profits, cross-border wages, investment income) and subtracts income generated domestically but paid to non-residents. The two perspectives are reconciled in the system of national accounts (SNA), the internationally standardised framework maintained by the UN, IMF, OECD, World Bank, and Eurostat.

  The family of measures runs from gross to net. Gross national income (GNI, formerly GNP) equals GDP plus net primary income from the rest of the world. Deducting consumption of fixed capital yields net national income (NNI), and adjusting to factor cost — removing indirect taxes and adding subsidies — gives national income in its classical sense: the sum of wages and salaries, corporate profits, rental income, net interest, and proprietors' income. Because production, income, and expenditure are three views of the same circular flow, these accounts must balance in principle, and the statistical discrepancy between them is itself a published quality indicator.

  National income matters practically as well as analytically. GNI per capita is the World Bank's criterion for classifying economies into income groups, which in turn gates concessional lending and aid eligibility; EU member-state contributions are levied partly on GNI; and the divergence between GDP and GNI is a standard diagnostic for economies with large multinational sectors, most famously Ireland, where profit-shifting by foreign-owned firms inflates GDP well above the income actually accruing to residents.

  ## Technical Details

  Measurement proceeds by three routes that should agree: the income approach (summing factor incomes from tax and survey data), the production approach (value added by industry), and the expenditure approach (consumption, investment, government spending, net exports). Real national income is obtained by deflating nominal figures with an appropriate price index, since [[Inflation]] otherwise overstates growth in the income aggregate. Known limitations mirror those of GDP: household and informal production are undercounted, environmental depletion is not netted off (motivating adjusted measures such as green NNI and the UN's inclusive wealth accounts), and distribution is invisible in the aggregate — prompting the distributional national accounts programme, which allocates national income across the household distribution to link macro totals with inequality statistics.
