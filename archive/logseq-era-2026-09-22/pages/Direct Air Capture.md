public:: true

# Direct Air Capture

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:direct-air-capture", "@type":"Page", "title":"Direct Air Capture", "vc:slug":"direct-air-capture", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:direct-air-capture",
  "@type":"Class",
  "label":"Direct Air Capture",
  "definition":"Direct Air Capture (DAC) is a class of carbon-dioxide-removal technologies that chemically extract CO2 directly from ambient air, rather than from a concentrated flue-gas stream. Captured CO2 is then either permanently stored underground or used as a feedstock, producing measurable negative emissions. DAC is energy-intensive because atmospheric CO2 is highly dilute, so its viability depends on low-carbon energy and durable storage or carbon-market incentives.",
  "domain":"governance",
  "maturity":"emerging",
  "subClassOf":[{"@id":"urn:ngm:class:climate-policy","label":"Climate Policy"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:net-zero","label":"Net Zero"}],
    "requires":[{"@id":"urn:ngm:class:renewable-energy","label":"Renewable Energy"}],
    "enables":[{"@id":"urn:ngm:class:carbon-offsetting","label":"Carbon Offsetting"}],
    "dependsOn":[{"@id":"urn:ngm:class:renewable-energy","label":"Renewable Energy"},{"@id":"urn:ngm:class:carbon-pricing","label":"Carbon Pricing"}],
    "supports":[{"@id":"urn:ngm:class:net-zero","label":"Net Zero"},{"@id":"urn:ngm:class:climate-policy","label":"Climate Policy"}],
    "uses":[{"@id":"urn:ngm:class:carbon-sequestration","label":"Carbon Sequestration"}],
    "standardizedBy":[{"@id":"urn:ngm:class:esg","label":"ESG"}],
    "contrastsWith":[{"@id":"urn:ngm:class:carbon-offsetting","label":"Carbon Offsetting"},{"@id":"urn:ngm:class:emissions-trading-scheme","label":"Emissions Trading Scheme"}],
    "bridgesTo":[{"@id":"urn:ngm:class:carbon-pricing","label":"Carbon Pricing"}],
    "relatedTo":[{"@id":"urn:ngm:class:emissions-trading-scheme","label":"Emissions Trading Scheme"},{"@id":"urn:ngm:class:sustainability","label":"Sustainability"},{"@id":"urn:ngm:class:esg","label":"ESG"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- Direct Air Capture extracts carbon dioxide directly from ambient air using chemical sorbents or solvents, producing negative emissions when paired with durable storage. It is a cornerstone of [[Climate Policy]] strategies aimed at [[Net Zero]], complementing point-source capture by addressing diffuse and historical emissions.
- Unlike [[Carbon Offsetting]] schemes that avoid emissions elsewhere, DAC physically removes CO2 from the atmosphere, but at high energy cost that ties it tightly to [[Renewable Energy]] supply and to [[Carbon Pricing]] economics.
- ### Overview
- DAC plants pull large volumes of air across a contactor where a chemical agent binds CO2. The agent is then regenerated, releasing concentrated CO2 for compression, transport and storage or utilisation.
- Two dominant approaches exist: solid sorbent systems operating at moderate temperatures with low-grade heat, and liquid solvent systems using aqueous hydroxide solutions regenerated at high temperature.
- Because atmospheric CO2 is roughly 0.04% by volume, DAC must process enormous air throughput, making energy efficiency the central engineering and economic constraint.
- The output of DAC is a quantifiable, verifiable removal that can be credited under rigorous carbon-accounting frameworks, distinguishing it from softer offset claims.
- ### Mechanisms
- Air contacting: fans draw ambient air across a sorbent surface engineered for high CO2 selectivity.
- Capture: amine-functionalised solids or hydroxide liquids chemically bind CO2 from the passing air stream.
- Regeneration: heat, pressure or moisture swing releases the captured CO2 and restores the sorbent for reuse.
- Conditioning and storage: released CO2 is purified, compressed and either injected into deep geological formations or converted to fuels, materials and chemicals.
- Measurement, reporting and verification underpin the credibility of each removed tonne.
- ### Applications
- Permanent geological sequestration to deliver durable negative emissions.
- Supply of climate-neutral CO2 feedstock for synthetic fuels and building materials.
- Corporate net-zero portfolios seeking high-permanence removals beyond avoidance offsets.
- National climate strategies addressing residual and hard-to-abate emissions.
- ### Relationships
- subClassOf:: [[Climate Policy]]
- partOf:: [[Net Zero]]
- requires:: [[Renewable Energy]]
- enables:: [[Carbon Offsetting]]
- dependsOn:: [[Renewable Energy]]
- dependsOn:: [[Carbon Pricing]]
- supports:: [[Net Zero]]
- supports:: [[Climate Policy]]
- uses:: [[Carbon Sequestration]]
- standardizedBy:: [[ESG]]
- contrastsWith:: [[Carbon Offsetting]]
- contrastsWith:: [[Emissions Trading Scheme]]
- bridgesTo:: [[Carbon Pricing]]
- relatedTo:: [[Emissions Trading Scheme]]
- relatedTo:: [[Sustainability]]
- relatedTo:: [[ESG]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
