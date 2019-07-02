const data = {
    "eClass": "http://www.eclipsesource.com/emfforms/example/coffeemodel#//Machine",
    "children": [
        {
            "eClass": "http://www.eclipsesource.com/emfforms/example/coffeemodel#//BrewingUnit"
        },
        {
            "eClass": "http://www.eclipsesource.com/emfforms/example/coffeemodel#//ControlUnit",
            "processor": {
                "clockSpeed": 5,
                "numberOfCores": 10,
                "socketconnectorType": "Z51",
                "thermalDesignPower": 100
            },
            "display": {
                "width": 10,
                "height": 20
            }
        }
    ],
    "name": "Super Brewer 3000",
    "workflows": [
        {
            "nodes": [
                {
                    "eClass": "http://www.eclipsesource.com/emfforms/example/coffeemodel#//AutomaticTask",
                    "name": "PreHeat",
                    "component": {
                        "eClass": "http://www.eclipsesource.com/emfforms/example/coffeemodel#//BrewingUnit",
                        "$ref": "//@children.0"
                    }
                }
            ]
        }
    ]
}

module.exports = {
  data
}