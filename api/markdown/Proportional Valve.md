public:: true

# Proportional Valve
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:proportional-valve",
  "@type": "Page",
  "vc:slug": "proportional-valve",
  "title": "Proportional Valve",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:proportional-valve",
  "@type": "Class",
  "label": "Proportional Valve",
  "definition": "A proportional valve is a fluid-power control element that modulates flow rate, pressure, or direction continuously and proportionally in response to an electrical command signal, in contrast to on/off solenoid valves that switch between two discrete states. The valve's spool or poppet position is controlled by a proportional solenoid or voice-coil actuator whose force output is linearly related to the applied current, enabling smooth, variable control of hydraulic or pneumatic systems.",
  "domain": "robotics",
  "maturity": "mature",
  "subClassOf": [{"@id": "urn:ngm:class:fluid-power-device", "label": "Fluid Power Device"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:servo-valve", "label": "Servo Valve"},
      {"@id": "urn:ngm:class:hydraulic-actuator", "label": "Hydraulic Actuator"},
      {"@id": "urn:ngm:class:pneumatic-actuator", "label": "Pneumatic Actuator"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:pid-controller", "label": "PID Controller"},
      {"@id": "urn:ngm:class:feedback-control", "label": "Feedback Control"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:industrial-automation", "label": "Industrial Automation"}
    ]
  },
  "quality": 0.85
}
```

- ### Definition
  - A [[Proportional Valve]] is a [[Fluid Power Device]] that varies hydraulic or pneumatic flow or pressure continuously in proportion to an electrical command, enabling smooth motion control of [[Hydraulic Actuator]]s and [[Pneumatic Actuator]]s under [[Feedback Control]] with a [[PID Controller]].

- ### Relationships
  - Proportional valves occupy the performance space between simple on/off solenoid valves and high-precision [[Servo Valve]]s. They are central to [[Industrial Automation]] systems where cost-effective variable-speed cylinder control is needed. They work under closed-loop [[Feedback Control]] with [[PID Controller]]s, taking position or pressure feedback from sensors to drive a [[Hydraulic Actuator]] or [[Pneumatic Actuator]] to a demanded setpoint.

- ### Content
  - Proportional valve technology emerged in the 1960s and 1970s as electrohydraulic control proliferated in mobile machinery, industrial presses, and injection moulding equipment. The key innovation was the proportional solenoid: a variable-force electromagnetic actuator whose push force scales linearly with applied DC current over a useful stroke range, unlike a conventional solenoid which saturates almost immediately. Manufacturers such as Bosch Rexroth, Parker Hannifin, and Moog industrialised proportional directional control valves in the 1980s, and by the 1990s integrated electronics (on-board amplifiers with ramp generators and dither circuitry) made them plug-and-play for machine builders.
  - Internally, a proportional directional valve consists of a precision-machined spool inside a bore, shifted axially by one or two proportional solenoids. The spool's land geometry determines how metering notches open ports to connect pressure supply (P), actuator ports (A, B), and tank (T). Spool displacement — typically 0–4 mm — is controlled by the net force balance between the solenoid and a centring spring. High-performance variants add an LVDT or hall-effect position sensor on the spool and a closed-loop position controller in the valve amplifier, yielding hysteresis below 0.5% and frequency response of 30–100 Hz. Pressure-reducing and flow-control proportional valves use similar solenoid actuators but different internal geometry.
  - Proportional valves matter in applications that require smooth, programmable motion without the cost of full servo-valve electrohydraulics. Plastic injection moulding machines use them to control injection speed and holding pressure profiles precisely; agricultural and construction equipment use them to modulate boom and bucket movements; industrial presses use them to hold force or position with cycle-to-cycle repeatability. The ability to programme velocity profiles reduces product defects, cycle times, and energy consumption compared to throttle-valve or relief-valve-based circuits. Pneumatic proportional valves enable force control in soft robotics and collaborative robot grippers.
  - By 2024–2025, Industry 4.0 integration has driven proportional valve manufacturers to embed IO-Link and EtherCAT fieldbus interfaces directly into the valve body, enabling parametrisation, diagnostics, and condition monitoring from PLCs without dedicated amplifier cards. Predictive maintenance algorithms use valve current-versus-position signatures to detect spool wear and seal degradation before failure. Hydraulic hybrid mobile machines combine proportional valves with electro-hydraulic actuators and energy-recovery accumulators for fuel economy. Electrohydrostatic actuators (EHAs) that integrate a pump, motor, and cylinder in one unit are beginning to replace conventional proportional-valve circuits in aerospace and premium industrial segments.
