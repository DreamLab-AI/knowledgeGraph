
Satellite clock error is the residual offset between a satellite’s clock and the relevant GNSS system time after the user applies the broadcast clock correction.

A clock offset δt contributes approximately c × δt to the one-way range observable, where c is the speed of light; a one-nanosecond residual corresponds to about 0.30 metres of range. The range conversion quantifies the effect of a time residual, not the accuracy of a position solution or the size of a satellite’s uncorrected clock offset.[^1]

Constellation-specific navigation messages provide clock parameters. A receiver evaluates the specified correction at signal transmission time, using the applicable reference epoch and relativistic terms. The coefficients describe a broadcast correction model; they are not a direct measurement of the instantaneous clock error. The residual is the difference left after applying that model.[^2][^3]

The GPS interface and Galileo OS SIS ICD define signal-specific fields and user algorithms. They are implementation specifications, while performance standards and service reports define separately scoped commitments or measured service results. Galileo’s Q2 2026 report, for example, treats signal-in-space ranging and timing as service performance categories; neither is identical to a satellite-clock-only residual.[^2][^3][^4][^5]

The International GNSS Service distributes precise clock products in final, rapid and ultra-rapid classes. These are analysis-centre products with their own latency and processing context, distinct from broadcast corrections used by an ordinary receiver.[^6]

[^1]: https://gssc.esa.int/navipedia/index.php/Clock_Modelling
[^2]: https://www.gsc-europa.eu/sites/default/files/sites/all/files/Galileo_OS_SIS_ICD_in_force.pdf
[^3]: https://www.gps.gov/sites/default/files/2025-07/IS-GPS-200N.pdf
[^4]: https://navcen.uscg.gov/sites/default/files/pdf/gps/geninfo/2020SPSPerformanceStandardFINAL.pdf
[^5]: https://www.gsc-europa.eu/sites/default/files/sites/all/files/Galileo-OS-Quarterly-Performance_Report-Q2-2026.pdf
[^6]: https://www.igs.org/products/

