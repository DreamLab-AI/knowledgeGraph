public:: true

# Signal Amplifier
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:signal-amplifier",
  "@type": "Page",
  "vc:slug": "signal-amplifier",
  "title": "Signal Amplifier",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:signal-amplifier",
  "@type": "Class",
  "label": "Signal Amplifier",
  "definition": "A signal amplifier is an electronic circuit that increases the power, voltage, or current of a weak signal while ideally preserving its waveform. In sensing applications it boosts low-amplitude transducer outputs above the noise floor so they can be digitised, with gain, bandwidth, noise figure, and linearity as key parameters. It is an essential front-end component of sensors and biosignal acquisition systems.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:hardware", "label": "Hardware"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:infrared-sensor", "label": "InfraredSensor"}, {"@id": "urn:ngm:class:brain-computer-interfaces", "label": "Brain Computer Interfaces"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A signal amplifier boosts a weak signal's power or voltage above the noise floor while preserving its shape. It is a front-end part of an [[Infrared Sensor]] and of the acquisition chain in [[Brain-Computer Interfaces]].
- ### Content
  - Low-noise and instrumentation amplifiers are chosen for microvolt-level biosignals, where common-mode rejection and input impedance dominate design. Trade-offs among gain, bandwidth, and noise figure determine how faithfully faint transducer outputs survive digitisation and downstream processing.
