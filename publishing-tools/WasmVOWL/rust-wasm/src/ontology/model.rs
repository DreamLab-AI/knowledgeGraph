//! Domain model for OWL constructs

/// OWL class types supported by VOWL
#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash)]
pub enum OwlClassType {
    /// Standard OWL Class
    Class,
    /// rdfs:Datatype
    Datatype,
    /// owl:Thing (universal class)
    Thing,
    /// owl:Nothing (empty class)
    Nothing,
    /// Deprecated class
    Deprecated,
    /// External class reference
    External,
}

/// OWL property types
#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash)]
pub enum OwlPropertyType {
    /// Standard object property
    ObjectProperty,
    /// Datatype property
    DatatypeProperty,
    /// rdfs:subClassOf
    SubClassOf,
    /// owl:disjointWith
    DisjointWith,
    /// Set operator (union, intersection, complement)
    SetOperator,
}

/// Set operators for complex class definitions
#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash)]
pub enum SetOperator {
    /// owl:unionOf
    Union,
    /// owl:intersectionOf
    Intersection,
    /// owl:complementOf
    Complement,
    /// owl:disjointUnionOf
    DisjointUnion,
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_class_types() {
        assert_ne!(OwlClassType::Class, OwlClassType::Thing);
        assert_eq!(OwlClassType::Nothing, OwlClassType::Nothing);
    }

    #[test]
    fn test_property_types() {
        let prop = OwlPropertyType::ObjectProperty;
        assert_eq!(prop, OwlPropertyType::ObjectProperty);
    }
}
