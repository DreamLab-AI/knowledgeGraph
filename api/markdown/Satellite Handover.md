
Satellite handover is the transfer of a communications connection or service from one serving satellite to another, typically to maintain access as spacecraft visibility, link quality or network selection changes.

It differs from beam handover within one spacecraft: a terminal can move to another beam while retaining the same satellite, whereas satellite handover changes the serving spacecraft. Depending on the radio and network architecture, that transfer may also change the cell identity, radio link, route or session state.[^1][^5]

In an ESA 5G-LEO implementation example, satellite beam steering keeps an earth-fixed cell in place while a satellite is visible; when the next satellite serves the same ground area through another cell identity, the user equipment performs satellite handover managed by higher layers. ESA’s MEO modem project describes a different technique: dual receive chains can support make-before-break reception from setting and rising satellites. These pages describe particular designs and test activities, not universal implementation or uninterrupted-service guarantees.[^1][^3]

A transition may be predictive or coordinated with a network core and radio-resource management. For example, ESA’s SB-SAT project describes spot-beam handover inside a GEO footprint coordinated with the BGAN core; that is beam-level transfer within the satellite’s broader footprint, not a change of serving satellite.[^2]

3GPP TR 38.821 records Release 16 study solutions for NR non-terrestrial networks. Its official record labels it a technical report under change control. It is standards-study evidence, not proof that every option is required or deployed. ITU-R likewise presents satellite radio-interface architecture scenarios rather than a single mandatory handover procedure.[^4][^5]

[^1]: https://resilience.esa.int/archives/projects/5gleo
[^2]: https://resilience.esa.int/archives/projects/sb-sat
[^3]: https://resilience.esa.int/archives/projects/meo-modems
[^4]: https://portal.3gpp.org/desktopmodules/Specifications/SpecificationDetails.aspx?specificationId=3525
[^5]: https://www.itu.int/dms_pub/itu-r/opb/rep/R-REP-M.2514-2022-PDF-E.pdf

