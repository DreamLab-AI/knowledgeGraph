public:: true

# Dead Reckoning

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:dead-reckoning", "@type":"Page", "title":"Dead Reckoning", "vc:slug":"dead-reckoning", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:dead-reckoning",
  "@type":"Class",
  "label":"Dead Reckoning",
  "definition":"Dead reckoning is a navigation technique that estimates an entity's current position by applying its known speed, heading, and elapsed time to a previously determined position. It relies on relative motion measurements from sensors such as inertial measurement units and wheel encoders rather than external position fixes. Because errors accumulate over time as drift, dead reckoning is typically fused with absolute references like GPS to maintain accuracy.",
  "domain":"robotics",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:localisation","label":"Localisation"}],
  "relations":{
    "dependsOn":[{"@id":"urn:ngm:class:inertial-measurement-unit","label":"Inertial Measurement Unit"},{"@id":"urn:ngm:class:odometry","label":"Odometry"}],
    "uses":[{"@id":"urn:ngm:class:accelerometer","label":"Accelerometer"},{"@id":"urn:ngm:class:gyroscope","label":"Gyroscope"},{"@id":"urn:ngm:class:velocity","label":"Velocity"}],
    "enables":[{"@id":"urn:ngm:class:autonomous-navigation","label":"Autonomous Navigation"},{"@id":"urn:ngm:class:pose-estimation","label":"Pose Estimation"}],
    "requires":[{"@id":"urn:ngm:class:state-estimation","label":"State Estimation"}],
    "supports":[{"@id":"urn:ngm:class:simultaneous-localisation-and-mapping","label":"Simultaneous Localisation and Mapping"},{"@id":"urn:ngm:class:mobile-robot","label":"Mobile Robot"}],
    "contrastsWith":[{"@id":"urn:ngm:class:gps","label":"GPS"}],
    "relatedTo":[{"@id":"urn:ngm:class:sensor-fusion","label":"Sensor Fusion"},{"@id":"urn:ngm:class:kalman-filter","label":"Kalman Filter"},{"@id":"urn:ngm:class:navigation","label":"Navigation"},{"@id":"urn:ngm:class:imu","label":"IMU"}],
    "bridgesTo":[{"@id":"urn:ngm:class:sensor-fusion","label":"Sensor Fusion"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- **Dead Reckoning** is a [[Localisation]] technique that estimates current position from a prior position plus measured [[Velocity]], heading, and elapsed time.
- It depends on relative-motion sensors such as an [[Inertial Measurement Unit]] and [[Odometry]] rather than external fixes.
- Because errors accumulate as drift, it is usually fused with absolute references like [[GPS]].
- ### Overview
- Dead reckoning answers "where am I now?" by integrating motion forward from a last-known location, without needing to observe external landmarks or signals.
- A mobile robot or vehicle reads its speed and heading from wheel encoders, an [[Accelerometer]], and a [[Gyroscope]], then integrates these over time to update an estimated pose.
- The technique is fast, self-contained, and works where external positioning is unavailable — indoors, underwater, underground, or during GPS outages.
- Its central weakness is unbounded error growth: small measurement biases integrate into ever-larger drift, so dead reckoning is almost always combined with periodic absolute corrections through [[Sensor Fusion]].
- ### Mechanisms
- Integration: velocity and heading are integrated over time to propagate position.
- Inertial sensing: an [[Accelerometer]] and [[Gyroscope]] measure linear and angular motion.
- Wheel odometry: encoder counts estimate distance travelled by a [[Mobile Robot]].
- Drift management: bias and noise cause cumulative error requiring correction.
- Fusion: a [[Kalman Filter]] blends dead reckoning with absolute fixes for [[State Estimation]].
- ### Applications
- Indoor and GPS-denied robot [[Autonomous Navigation]].
- Inertial navigation for aircraft, ships, and submarines.
- Pedestrian and vehicle positioning during signal loss.
- Front-end motion prediction within [[Simultaneous Localisation and Mapping]].
- ### Relationships
- dependsOn:: [[Inertial Measurement Unit]]
- dependsOn:: [[Odometry]]
- uses:: [[Accelerometer]]
- uses:: [[Gyroscope]]
- uses:: [[Velocity]]
- enables:: [[Autonomous Navigation]]
- enables:: [[Pose Estimation]]
- requires:: [[State Estimation]]
- supports:: [[Simultaneous Localisation and Mapping]]
- supports:: [[Mobile Robot]]
- contrastsWith:: [[GPS]]
- relatedTo:: [[Sensor Fusion]]
- relatedTo:: [[Kalman Filter]]
- relatedTo:: [[Navigation]]
- relatedTo:: [[IMU]]
- bridgesTo:: [[Sensor Fusion]]
- ### Provenance
- updated:: 2026-06-15
- generatedAt:: 2026-06-15
- inferenceRule:: GapMaterialisation
