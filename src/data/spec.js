const cars = require('../data/cars.json');
const spec0 = 
{
  "$schema": "https://vega.github.io/schema/vega-lite/v3.json",
  "description": "A scatterplot showing horsepower and miles per gallons.",
  "data": {"values": cars},
  "mark": "point",
  "encoding": {
    "x": {"field": "Horsepower", "type": "quantitative"},
    "y": {"field": "Miles_per_Gallon", "type": "quantitative"},
    "color": {"field": "Origin", "type": "nominal"},
    "shape": {"field": "Origin", "type": "nominal"}
  }
}
const spec1 = 
{
    "data": {"values": cars},
    "facet": {"row": {"field": "Origin", "type": "nominal"}},
    "spec": {
    "$schema": "https://vega.github.io/schema/vega-lite/v3.json",
    "description": "A scatterplot showing horsepower and miles per gallons.",
    "mark": "point",
    "encoding": {
        "x": {"field": "Horsepower", "type": "quantitative"},
        "y": {"field": "Miles_per_Gallon", "type": "quantitative"},
        "color": {"field": "Origin", "type": "nominal"},
        "shape": {"field": "Origin", "type": "nominal"}
        }
    }
}
const spec2 = 
{
    "data": {"values": cars},
    "facet": {"column": {"field": "Origin", "type": "nominal"}},
    "spec": {
    "$schema": "https://vega.github.io/schema/vega-lite/v3.json",
    "description": "A scatterplot showing horsepower and miles per gallons.",
    "mark": "point",
    "encoding": {
        "x": {"field": "Horsepower", "type": "quantitative"},
        "y": {"field": "Miles_per_Gallon", "type": "quantitative"},
        "color": {"field": "Origin", "type": "nominal"},
        "shape": {"field": "Origin", "type": "nominal"}
        }
    }
}
const spec3 = 
{
  "$schema": "https://vega.github.io/schema/vega-lite/v3.json",
  "description": "A scatterplot showing horsepower and miles per gallons.",
  "data": {"values": cars},
  "mark": "point",
  "transform": [
    {"filter": {"field": "Origin", "equal": "Europe"}}
  ],
  "encoding": {
    "x": {"field": "Horsepower", "type": "quantitative"},
    "y": {"field": "Miles_per_Gallon", "type": "quantitative"},
    "color": {"field": "Origin", "type": "nominal"},
    "shape": {"field": "Origin", "type": "nominal"}
  }
}
const spec4 = 
{
  "$schema": "https://vega.github.io/schema/vega-lite/v3.json",
  "description": "A scatterplot showing horsepower and miles per gallons.",
  "data": {"values": cars},
  "mark": "point",
  "transform": [
    {"filter": {"field": "Origin", "equal": "Japan"}}
  ],
  "encoding": {
    "x": {"field": "Horsepower", "type": "quantitative"},
    "y": {"field": "Miles_per_Gallon", "type": "quantitative"},
    "color": {"field": "Origin", "type": "nominal"},
    "shape": {"field": "Origin", "type": "nominal"}
  }
}
const spec5 = 
{
  "$schema": "https://vega.github.io/schema/vega-lite/v3.json",
  "description": "A scatterplot showing horsepower and miles per gallons.",
  "data": {"values": cars},
  "mark": "point",
  "transform": [
    {"filter": {"field": "Origin", "equal": "USA"}}
  ],
  "encoding": {
    "x": {"field": "Horsepower", "type": "quantitative"},
    "y": {"field": "Miles_per_Gallon", "type": "quantitative"},
    "color": {"field": "Origin", "type": "nominal"},
    "shape": {"field": "Origin", "type": "nominal"}
  }
}
const Spec = [spec0, spec1, spec2, spec3, spec4, spec5];
export default Spec;