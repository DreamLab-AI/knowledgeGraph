
Beam handover is a change in the satellite beam or radio cell serving a user or link, as coverage or network resource assignments change.

Specify what changes. A terminal may select a different beam from the same satellite; a satellite may steer a beam to keep an earth-fixed cell in place; or a network may schedule beam hopping, changing which beam is illuminated during a transmission interval. Beam hopping coordinates user traffic, the addressed beam and switching signals, but does not by itself transfer an active user connection.[^1][^2]

A beam handover can occur within one spacecraft’s wider footprint. ESA’s SB-SAT case describes predictive spot-beam handover within an Inmarsat GEO footprint in coordination with the BGAN core network. It is a particular system architecture, not a rule for all satellite networks.[^3] ESA’s VLEO constellation project treats handover alongside data routing and radio-resource management, highlighting the wider network coordination involved.[^4]

Beam and satellite handover can be related but are distinct. A moving LEO satellite may steer a beam so that an earth-fixed cell remains available; when a different satellite takes over, the cell identity may change and higher network layers manage a satellite handover. A MEO design may use two receive chains for make-before-break transfer between setting and rising satellites. Those are architecture examples and prototype work, not universal requirements or guarantees of uninterrupted service.[^2][^5]

ITU-R describes both moving and earth-fixed cells enabled by beam steering, confirming that cell movement and beam movement depend on system design. When documenting a handover, specify whether the change concerns antenna direction, selected beam, radio cell, serving spacecraft, or network session.[^6]

[^1]: https://resilience.esa.int/archives/projects/behop
[^2]: https://resilience.esa.int/archives/projects/5gleo
[^3]: https://resilience.esa.int/archives/projects/sb-sat
[^4]: https://resilience.esa.int/archives/projects/handingover
[^5]: https://resilience.esa.int/archives/projects/meo-modems
[^6]: https://www.itu.int/dms_pub/itu-r/opb/rep/R-REP-M.2514-2022-PDF-E.pdf

