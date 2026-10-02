A geodetic reference frame is the practical basis for assigning coordinates to positions on or near Earth. It is realised through coordinates for a network of stations or other reference points, with velocities or deformation models where the frame is dynamic. Modern ISO and OGC usage treats *geodetic reference frame* as the preferred term for a geodetic datum.[^1]

## Reference system and realisation

A terrestrial reference system defines conventions for origin, scale, orientation and time evolution. A terrestrial reference frame realises those conventions through observed coordinates. The International Terrestrial Reference System (ITRS), for example, is an ideal system; the International Terrestrial Reference Frame (ITRF) realises it using estimated station coordinates and velocities from GNSS and other space-geodetic techniques.[^2][^3]

Each release is part of the frame's identity. ITRF2020, ITRF2014 and earlier frames are separate solutions rather than interchangeable labels. IERS publishes solution uncertainties, station catalogues and velocities, so the bare term “ITRF” is insufficient for precise coordinates.[^3] Frame uncertainty also remains distinct from receiver error, monument motion and any later coordinate transformation.

## Static, dynamic and epoch

A static frame excludes time evolution from its defining parameters. A dynamic frame includes it, allowing coordinates to change as tectonic plates and the crust move. The **frame reference epoch** is the epoch of a dynamic frame's defining parameters. The **coordinate epoch** records when a coordinate tuple is valid. These values have different meanings and should be stored separately.[^1][^4]

Changing coordinate epoch can require station velocities, a deformation grid or another point-motion operation. A transformation between frames may then be applied before or after that propagation. OGC notes that alternative operation sequences need not produce identical results because their models and estimated parameters carry error.[^1] Provenance should therefore record the chosen route as well as the source and target frames.

ETRS89 provides a regional contrast with ITRS. It is tied to the stable part of Europe so that coordinates remain stable with the Eurasian plate. EUREF reports that European stations move by roughly 2.5 cm per year in the global ITRS because of plate motion.[^5] ETRS89 is nevertheless not immune to local deformation or unstable monuments.

## Realisation in Great Britain

OS Net realises ETRS89 for precise GNSS positioning in Great Britain. Ordnance Survey's current operational coordinates use the EUREF IE/UK 2009 realisation, related to ITRF97 at epoch 2009.756. The earlier OS Net v2001 coordinates were related to ITRF97 at epoch 2001.553.[^6] Retaining the OS Net version prevents apparently identical ETRS89 coordinates from being mixed across realisations.

Ordnance Survey reports base-station coordinate standard errors generally better than 0.008 m in plan and 0.020 m in height.[^7] Those figures describe the network coordinates. They exclude a user's GNSS observation error and do not substitute for the accuracy of OSTN15, OSGM15 or a survey product. A defensible record preserves the frame and release, frame and coordinate epochs, station solution, observation date, operation path and component uncertainties.

## References

[^1]: Open Geospatial Consortium, [Abstract Specification Topic 2: Referencing by coordinates](https://docs.ogc.org/as/18-005r8/18-005r8.pdf).
[^2]: International Earth Rotation and Reference Systems Service, [International Terrestrial Reference System](https://www.iers.org/iers/en/dataproducts/itrs/itrs).
[^3]: International Earth Rotation and Reference Systems Service, [International Terrestrial Reference Frame](https://www.iers.org/iers/en/dataproducts/itrf/itrf).
[^4]: Open Geospatial Consortium, [Well-known text representation of coordinate reference systems](https://docs.ogc.org/is/18-010r7/18-010r7.html).
[^5]: EUREF, [European Geodetic Reference Systems](https://www.euref.eu/european-geodetic-reference-systems).
[^6]: Ordnance Survey, [OS Net and GNSS questions and answers](https://www.ordnancesurvey.co.uk/geodesy-positioning/os-net/faq).
[^7]: Ordnance Survey, [Accuracy of OS Net, OSTN15 and OSGM15](https://www.ordnancesurvey.co.uk/geodesy-positioning/os-net/accuracy).

