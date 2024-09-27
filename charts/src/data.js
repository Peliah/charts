export const data = {
    "chartTitle": "Market Risk Evaluation",
    "xAxisLabel": "Risk Categories",
    "yAxisLabel": "Risk Level (1 to 10)",
    "riskLevels": {
        "lowRisk": {
            "min": 1,
            "max": 4,
            "color": "#00FF00"  // Green for low risk
        },
        "mediumRisk": {
            "min": 5,
            "max": 7,
            "color": "#FFFF00"  // Yellow for medium risk
        },
        "highRisk": {
            "min": 8,
            "max": 10,
            "color": "#FF0000"  // Red for high risk
        }
    },
    "categories": [
        {
            "label": "Market Maturity",
            "value": 7,
            "riskLevel": "mediumRisk"
        },
        {
            "label": "Market Situation",
            "value": 8,
            "riskLevel": "highRisk"
        },
        {
            "label": "Competitors",
            "value": 6,
            "riskLevel": "mediumRisk"
        },
        {
            "label": "Competition",
            "value": 7,
            "riskLevel": "mediumRisk"
        },
        {
            "label": "Customers",
            "value": 9,
            "riskLevel": "highRisk"
        }
    ]
}
