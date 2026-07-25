public:: true

# Surface Marine Robot
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:55633b09b538ad9d0901a719ae773fee3c988ebf5e2f905eb08a47696536720c",
  "@type": "Page",
  "vc:slug": "surface-marine-robot",
  "title": "Surface Marine Robot",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:marine-robot",
      "vc:label": "Marine Robot"
    },
    {
      "@id": "urn:visionflow:owl:class:robotics",
      "vc:label": "Robotics"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-0127"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Surface Marine Robot"
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
  "@id": "urn:ngm:class:surface-marine-robot",
  "@type": "Class",
  "label": "Surface Marine Robot",
  "definition": "A Surface Marine Robot, also known as an Unmanned Surface Vehicle (USV), is an autonomous or remotely operated robotic platform that operates on the surface of bodies of water—oceans, lakes, rivers, and coastal zones. It performs tasks including hydrographic survey, environmental monitoring, maritime patrol, search-and-rescue support, and data relay without requiring an onboard crew, thereby reducing operational cost and human risk in hazardous or remote marine environments.",
  "domain": "robotics",
  "maturity": "established",
  "qualityScore": 0.8,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:marine-robot",
      "label": "Marine Robot"
    }
  ],
  "relations": {
    "contrastsWith": [
      {"@id": "urn:ngm:class:underwater-robot", "label": "Underwater Robot"},
      {"@id": "urn:ngm:class:aerial-robot", "label": "Aerial Robot"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:inspection-robot", "label": "Inspection Robot"},
      {"@id": "urn:ngm:class:autonomous-robot", "label": "Autonomous Robot"},
      {"@id": "urn:ngm:class:remotely-operated-vehicle-rov", "label": "Remotely Operated Vehicle (ROV)"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:autonomous-navigation", "label": "Autonomous Navigation"},
      {"@id": "urn:ngm:class:perception-system", "label": "Perception System"},
      {"@id": "urn:ngm:class:lidar", "label": "Lidar"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:motion-planning", "label": "Motion Planning"},
      {"@id": "urn:ngm:class:navigation-system", "label": "Navigation System"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:robotics", "label": "Robotics"}
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:surface-marine-robot:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:55633b09b538ad9d0901a719ae773fee3c988ebf5e2f905eb08a47696536720c"
  },
  "vc:resolutions": [
    {
      "raw": "[[Marine Robot]]",
      "resolved": "urn:visionflow:owl:class:marine-robot",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Robotics]]",
      "resolved": "urn:visionflow:owl:class:robotics",
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
  A Surface Marine Robot (Unmanned Surface Vehicle, USV) is an autonomous or remotely operated robotic platform that operates on the surface of bodies of water, performing tasks such as hydrographic survey, environmental monitoring, maritime patrol, and search-and-rescue support without requiring an onboard crew.

- ### Relationships
  Surface Marine Robots contrast with Underwater Robots, which operate fully submerged, and Aerial Robots, which operate above the surface. They are a specialised class of Autonomous Robots and are related to Inspection Robots for infrastructure assessment and Remotely Operated Vehicles for close-range underwater tasks. They use Autonomous Navigation and Perception Systems including Lidar for collision avoidance and situational awareness, and require Motion Planning and Navigation Systems to operate safely in dynamic marine environments. They are part of the broader Robotics domain.

- ### Content

  Surface marine robots operate across a wide range of form factors, from small kayak-sized platforms such as the Saildrone Explorer and AutoNaut wave-propelled glider to large ship-class USVs like the Sea Hunter developed for the US Navy. Propulsion systems vary accordingly: electric thrusters for small survey vehicles, diesel-driven waterjets for higher-speed patrol craft, and wind or wave energy for ultra-endurance scientific platforms that can remain at sea for months without refuelling.

  Navigation in the marine environment presents unique challenges compared to ground or air robotics. Currents, wind, and wave action introduce persistent disturbances that must be compensated through model-predictive control or adaptive autopilots. Obstacle avoidance must comply with the International Regulations for Preventing Collisions at Sea (COLREGs), which impose right-of-way rules beyond simple proximity avoidance and require the USV to infer the intent of manned vessels. GPS-denied environments—under bridges, in harbours with multi-path signal reflections, or in polar regions—demand dead-reckoning fusion with inertial measurement units and Doppler velocity logs.

  Environmental monitoring is one of the highest-value application domains. Surface robots deployed on rivers and coastal zones collect water quality samples, measure turbidity and dissolved oxygen, map harmful algal blooms, and track pollutant plumes. The persistence advantage over crewed vessels is substantial: a USV can conduct 24-hour continuous surveys in remote or dangerous areas, producing data density that manned operations cannot match cost-effectively. Oceanographic institutions increasingly deploy fleets of USVs in coordinated swarms to gather synoptic data over large areas, with each vehicle handling a sub-region of the survey domain.

  In maritime security, surface robots patrol harbours and critical infrastructure, conduct anti-piracy monitoring, and act as communication relays extending the operational range of underwater vehicles.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
