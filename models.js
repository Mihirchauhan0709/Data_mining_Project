const goalScorersData = {
    x: [
        "Lionel Messi", "Karim Benzema", "Artem Dovbyk", "Robert Lewandowski",
        "Alexander Sørloth", "Luis Suárez", "Gerard Moreno", "Antoine Griezmann",
        "Jude Bellingham", "Alexander Isak", "Youssef En-Nesyri", "Ante Budimir",
        "Raúl de Tomás", "Iago Aspas", "Vinícius Júnior", "Joselu"
    ],
    y: [
        27.9, 25.6, 23.5, 23.1, 22.7, 20.4, 20.0, 20.0,
        19.1, 18.9, 17.7, 17.6, 17.6, 17.5, 16.4, 16.4
    ],
    type: "bar",
    marker: {
        color: [
            "rgb(0, 0, 255)", "rgb(20, 20, 240)", "rgb(40, 40, 225)", "rgb(60, 60, 210)",
            "rgb(80, 80, 195)", "rgb(100, 100, 180)", "rgb(120, 120, 165)", "rgb(140, 140, 150)",
            "rgb(160, 160, 135)", "rgb(180, 180, 120)", "rgb(200, 200, 105)", "rgb(220, 220, 90)",
            "rgb(240, 240, 75)", "rgb(255, 255, 60)", "rgb(200, 200, 45)", "rgb(220, 220, 30)"
        ],
    },
    text: [
        "27.9", "25.6", "23.5", "23.1", "22.7", "20.4", "20.0", "20.0",
        "19.1", "18.9", "17.7", "17.6", "17.6", "17.5", "16.4", "16.4"
    ],
    textposition: "auto",
};

const layout = {
    title: {
        text: "Top 20 Predicted Goal Scorers for the Coming Season",
        font: { size: 18, color: "#333" },
    },
    xaxis: {
        title: "Player Names",
        automargin: true,
        tickangle: -45,
        titlefont: { size: 14, color: "#333" },
    },
    yaxis: {
        title: "Predicted Goals",
        titlefont: { size: 14, color: "#333" },
    },
    margin: { l: 50, r: 30, b: 100, t: 70 },
};

Plotly.newPlot("goal-scorers-chart", [goalScorersData], layout);


// Data for the visualization
const data = [
    {
        x: [14.7, 13.3, 12.3, 12.2, 11.9, 10.4, 9.9, 9.9, 9.8, 9.7, 9.7, 9.6, 9.4, 9.1, 9.1, 9.0, 8.9, 8.8],
        y: [
            "Antoine Griezmann", "Alex Baena", "Karim Benzema", "Iago Aspas", "Ousmane Dembélé",
            "Nico Williams", "Vinícius Júnior", "Yannick Carrasco", "Toni Kroos", "Iker Muniain",
            "Sávio", "Jordi Alba", "İlkay Gündoğan", "Lionel Messi", "Daniel Parejo",
            "Marcos Llorente", "Raphinha", "Mikel Merino"
        ],
        type: "bar",
        orientation: "h",
        marker: {
            color: [
                "#003f5c", "#2f4b7c", "#665191", "#a05195", "#d45087",
                "#f95d6a", "#ff7c43", "#ffa600", "#ffab4c", "#ffb94d",
                "#ffc34e", "#ffc74f", "#ffce50", "#ffd451", "#ffd852",
                "#ffdc53", "#ffe154", "#ffe555"
            ],
            opacity: 0.8
        },
        hovertemplate:
            "<b>Player:</b> %{y}<br>" +
            "<b>Predicted Assists:</b> %{x:.1f}<extra></extra>"
    }
];

// Layout configuration
const layout2 = {
    title: {
        text: "Top 20 Predicted Assist Leaders for the Coming Season",
        font: { size: 24 }
    },
    xaxis: {
        title: "Predicted Assists",
        titlefont: { size: 16 },
        tickfont: { size: 12 }
    },
    yaxis: {
        title: "Player Name",
        titlefont: { size: 16 },
        tickfont: { size: 12 },
        automargin: true,
        categoryorder: "total ascending" // Sort by value
    },
    plot_bgcolor: "#f8f9fa",
    paper_bgcolor: "#ffffff",
    margin: { l: 150, r: 20, t: 60, b: 50 },
    hovermode: "closest"
};

// Render the chart
Plotly.newPlot("assist-chart", data, layout2);


// // Data for Discipline-Based Clustering
// const disciplineData = {
//     x: [1, 2, 3, 4, 5],
//     y: [3, 2, 4, 1, 5],
//     cluster: [0, 1, 2, 0, 1],
//     hover: [
//         "Cluster 0:<br>Unai Simón, Iñaki Williams, Álex Berenguer, Iker Muniain, Yuri Berchiche",
//         "Cluster 1:<br>Iñigo Martínez, Raúl García, Víctor Laguardia, Rubén Duarte, Rodrigo Battaglia",
//         "Cluster 2:<br>Ander Capa, Unai Núñez, Yeray Álvarez, Dani García, Mikel Vesga",
//         "Cluster 0:<br>Unai Simón, Iñaki Williams, Álex Berenguer, Iker Muniain, Yuri Berchiche",
//         "Cluster 1:<br>Iñigo Martínez, Raúl García, Víctor Laguardia, Rubén Duarte, Rodrigo Battaglia"
//     ]
// };

// // Data for Workload-Based Clustering
// const workloadData = {
//     x: [3330, 2519, 2387, 2278, 3154],
//     y: [37, 28, 38, 35, 37],
//     cluster: [2, 1, 2, 2, 0],
//     hover: [
//         "Cluster 2:<br>Unai Simón, Frenkie de Jong",
//         "Cluster 1:<br>Ander Capa, Unai Núñez, Iker Muniain",
//         "Cluster 2:<br>Iñaki Williams, Dani García",
//         "Cluster 2:<br>Álex Berenguer",
//         "Cluster 0:<br>Frenkie de Jong"
//     ]
// };

// // Data for Playmaking and Creativity Clustering
// const creativityData = {
//     x: [2, 24, 27, 20, 5],
//     y: [0, 2, 0, 1, 0],
//     cluster: [0, 1, 1, 2, 0],
//     hover: [
//         "Cluster 0:<br>Unai Simón",
//         "Cluster 1:<br>Asier Villalibre",
//         "Cluster 1:<br>Iñigo Lekue",
//         "Cluster 2:<br>Ibai Gómez",
//         "Cluster 0:<br>Oier Zarraga"
//     ]
// };

// // Data for Goals vs Assists Clustering
// const goalsAssistsData = {
//     x: [11, 12, 21, 9, 30],
//     y: [3, 11, 3, 8, 9],
//     cluster: [2, 2, 2, 1, 2],
//     hover: [
//         "Cluster 2:<br>Joselu",
//         "Cluster 2:<br>Marcos Llorente",
//         "Cluster 2:<br>Luis Suárez",
//         "Cluster 1:<br>Ángel Correa",
//         "Cluster 2:<br>Lionel Messi"
//     ]
// };

// // Function to render the charts
// function renderChart(chartId, data, xTitle, yTitle) {
//     const plotData = [{
//         x: data.x,
//         y: data.y,
//         mode: 'markers',
//         marker: {
//             size: 12,
//             color: data.cluster,
//             colorscale: 'Viridis',
//             showscale: true
//         },
//         text: data.hover,
//         hoverinfo: 'text'
//     }];

//     const layout = {
//         xaxis: { title: xTitle },
//         yaxis: { title: yTitle },
//         margin: { l: 40, r: 40, t: 40, b: 40 },
//         height: 400,
//         paper_bgcolor: '#f9f9f9',
//         plot_bgcolor: '#f9f9f9'
//     };

//     Plotly.newPlot(chartId, plotData, layout);
// }

// // Render charts for each clustering type
// renderChart('discipline-chart', disciplineData, 'Yellow Cards (CrdY)', 'Red Cards (CrdR)');
// renderChart('workload-chart', workloadData, 'Minutes Played (Min)', 'Matches Played (MP)');
// renderChart('creativity-chart', creativityData, 'Progressive Passes (PrgP)', 'Assists (Ast)');
// renderChart('goals-assists-chart', goalsAssistsData, 'Goals (Gls)', 'Assists (Ast)');



// Data for each season
const best11Data = {
"2020-2021": {
        players: ["Lionel Messi", "Karim Benzema", "Gerard Moreno", "Marcos Llorente", "Antoine Griezmann", "Yannick Carrasco", "Fidel", "Jordi Alba", "José Luis Gayà", "Marko Dmitrović"],
        goalsAssists: [39, 32, 30, 23, 20, 16, 9, 8, 8, 1],
        goals: [30, 23, 23, 12, 13, 6, 6, 3, 1, 1],
        assists: [9, 9, 7, 11, 7, 10, 3, 5, 7, 0],
        minutesPlayed: [3023, 2894, 2673, 2956, 2604, 2179, 2396, 3025, 2846, 3120]
    },
    "2021-2022": {
        players: ["Karim Benzema", "Vinícius Júnior", "Iago Aspas", "José Luis Morales", "Ángel Correa", "Gonçalo Guedes", "Jordi Alba", "Alfonso Pedraza", "Álex Moreno", "Johan Mojica", "Yassine Bounou"],
        goalsAssists: [39, 27, 23, 20, 17, 17, 12, 8, 8, 7, 2],
        goals: [27, 17, 18, 13, 12, 11, 2, 4, 5, 2, 0],
        assists: [12, 10, 5, 7, 5, 6, 10, 4, 3, 5, 2],
        minutesPlayed: [2593, 2690, 3087, 2719, 1856, 2606, 2644, 1701, 2404, 2855, 2790]
    },
     "2022-2023": {
        players: ["Antoine Griezmann", "Robert Lewandowski", "Karim Benzema", "Rodrygo", "Gabriel Veiga", "Yannick Carrasco", "Brian Oliván", "Arnau Martinez", "Alejandro Balde", "Álvaro Aceves"],
        goalsAssists: [31, 30, 22, 17, 15, 10, 8, 7, 7, 0],
        goals: [15, 23, 19, 9, 11, 7, 1, 3, 1, 0],
        assists: [16, 7, 3, 8, 4, 3, 7, 4, 6, 0],
        minutesPlayed: [2859, 2847, 2038, 2379, 2294, 2317, 2403, 2732, 2471, 13]
    },
    "2023-2024": {
        players: ["Artem Dovbyk", "Alexander Sørloth", "Robert Lewandowski", "Jude Bellingham", "Antoine Griezmann", "Sávio", "Marcos Llorente", "Miguel Gutiérrez", "Yan Couto", "Julen Agirrezabala"],
        goalsAssists: [32, 29, 27, 25, 22, 19, 10, 9, 9, 0],
        goals: [24, 23, 19, 19, 16, 9, 6, 2, 1, 0],
        assists: [8, 6, 8, 6, 6, 10, 4, 7, 8, 0],
        minutesPlayed: [2587, 2489, 2750, 2315, 2644, 2976, 2565, 3032, 2245, 238]
    }
};

// Function to render charts
function renderBest11Chart(chartId, season) {
    // Calculate color intensity based on Goals + Assists
    const colors = best11Data[season].goalsAssists.map(value => {
        const intensity = Math.round((value / Math.max(...best11Data[season].goalsAssists)) * 255);
        return `rgba(${255 - intensity}, ${100}, ${intensity}, 0.8)`; // Gradient from red to blue
    });

    const data = [{
        x: best11Data[season].players, // Players on the x-axis for vertical bars
        y: best11Data[season].goalsAssists, // Goals + Assists on the y-axis
        type: "bar",
        orientation: "v", // Vertical bar orientation
        marker: {
            color: colors,
            line: {
                color: "rgba(58,71,80,1.0)",
                width: 1
            }
        },
        text: best11Data[season].players.map((_, i) =>
            `Goals: ${best11Data[season].goals[i]}<br>Assists: ${best11Data[season].assists[i]}<br>Minutes Played: ${best11Data[season].minutesPlayed[i]}`),
        hovertemplate: "<b>%{x}</b><br>Goals + Assists: %{y}<br>%{text}<extra></extra>"
    }];

    const layout = {
        title: `Best 11 Players for ${season} Season (Goals + Assists)`,
        xaxis: { title: "Player Name", automargin: true, tickangle: -45 }, // Rotate x-axis labels for better readability
        yaxis: { title: "Goals + Assists" },
        height: 400,
        paper_bgcolor: "#f9f9f9",
        plot_bgcolor: "#f9f9f9",
        margin: { l: 50, r: 30, t: 50, b: 100 } // Adjusted margin for longer player names
    };

    Plotly.newPlot(chartId, data, layout);
}

// Render charts for each season
renderBest11Chart("best-11-2020-2021", "2020-2021");
renderBest11Chart("best-11-2021-2022", "2021-2022");
renderBest11Chart("best-11-2022-2023", "2022-2023");
renderBest11Chart("best-11-2023-2024", "2023-2024");



// Data for recommended players
const recommendationData = {
    players: ["Lionel Messi", "Jude Bellingham", "Karim Benzema", "Kirian Rodríguez", "Isco", "Sergi Darder", "Sávio", "Toni Kroos", "İlkay Gündoğan", "Iago Aspas"],
    recommendations: [25, 23, 22, 21, 15, 13, 12, 10, 8, 6]
};

// Function to render the recommendation chart
function renderRecommendationChart(chartId) {
    const data = [{
        x: recommendationData.recommendations,
        y: recommendationData.players,
        type: "bar",
        orientation: "h",
        marker: {
            color: [
                "rgba(33, 150, 243, 0.8)",
                "rgba(33, 150, 243, 0.7)",
                "rgba(33, 150, 243, 0.6)",
                "rgba(33, 150, 243, 0.5)",
                "rgba(224, 224, 224, 0.8)",
                "rgba(255, 152, 0, 0.8)",
                "rgba(255, 152, 0, 0.7)",
                "rgba(255, 152, 0, 0.6)",
                "rgba(255, 87, 34, 0.7)",
                "rgba(255, 87, 34, 0.6)"
            ],
            line: {
                color: "rgba(0, 0, 0, 1)",
                width: 1
            }
        },
        hovertemplate: "<b>%{y}</b><br>Number of Recommendations: %{x}<extra></extra>"
    }];

    const layout = {
        title: "Top 10 Most Recommended Players Across Teams",
        xaxis: { title: "Number of Recommendations" },
        yaxis: { title: "Players", automargin: true },
        height: 500,
        paper_bgcolor: "#f9f9f9",
        plot_bgcolor: "#f9f9f9",
        margin: { l: 150, r: 30, t: 50, b: 50 }
    };

    Plotly.newPlot(chartId, data, layout);
}

// Render the recommendation chart
renderRecommendationChart("recommendation-chart");



// Data for Top 10 Predicted Goal Scorers
const topScorersData = {
    players: [
        "Artem Dovbyk", 
        "Lionel Messi", 
        "Karim Benzema", 
        "Robert Lewandowski", 
        "Luis Suárez", 
        "Joselu", 
        "Álvaro Morata", 
        "Iago Aspas", 
        "Jude Bellingham", 
        "Gerard Moreno"
    ],
    predictedGoals: [24.8, 23.3, 22.1, 21.9, 13.3, 13.3, 13.0, 12.6, 11.6, 11.6],
    assists: [5, 8, 7, 6, 4, 5, 3, 2, 7, 6],
    minutesPlayed: [2850, 2900, 2750, 2800, 2500, 2600, 2450, 2400, 2700, 2550]
};

// Render the chart for Top 10 Predicted Goal Scorers
function renderTopScorersChart() {
    const data = [{
        x: topScorersData.predictedGoals,
        y: topScorersData.players,
        type: "bar",
        orientation: "h",
        marker: {
            color: [
                "#4f72b7", "#637fc1", "#7c8dcc", "#95aad7", 
                "#e37f75", "#f5958d", "#faafaa", "#fab9ba", 
                "#c6e3b8", "#b2d3b6"
            ],
            opacity: 0.8
        },
        text: topScorersData.players.map((_, i) => 
            `Assists: ${topScorersData.assists[i]}<br>Minutes Played: ${topScorersData.minutesPlayed[i]}`),
        hovertemplate: "<b>%{y}</b><br>Predicted Goals: %{x}<br>%{text}<extra></extra>"
    }];

    const layout = {
        title: "Top 10 Predicted Goal Scorers for the Coming Season",
        xaxis: {
            title: "Predicted Goals",
            titlefont: { size: 16 },
            tickfont: { size: 12 }
        },
        yaxis: {
            title: "Player Name",
            titlefont: { size: 16 },
            tickfont: { size: 12 },
            automargin: true
        },
        height: 600,
        paper_bgcolor: "#f8f9fa",
        plot_bgcolor: "#ffffff",
        margin: { l: 150, r: 30, t: 50, b: 50 }
    };

    Plotly.newPlot("top-scorers-chart", data, layout);
}

// Call the function to render the chart
renderTopScorersChart();


// Data for Confusion Matrix
const confusionMatrixData = {
    labels: [
        "Aggressive Defender", 
        "All-rounder", 
        "Ball Carrier", 
        "Elite Goalscorer", 
        "Elite Playmaker", 
        "Goalscorer", 
        "Others", 
        "Playmaker", 
        "Workhorse"
    ],
    matrix: [
        [49, 0, 0, 0, 0, 0, 20, 0, 0],
        [0, 52, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 34, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 23, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 5, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 82, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 784, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1298, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 56]
    ]
};

// Render the Confusion Matrix
function renderConfusionMatrix() {
    const trace = {
        z: confusionMatrixData.matrix,
        x: confusionMatrixData.labels,
        y: confusionMatrixData.labels,
        type: 'heatmap',
        colorscale: [
            [0, '#f7fbff'],
            [0.1, '#deebf7'],
            [0.2, '#c6dbef'],
            [0.4, '#9ecae1'],
            [0.6, '#6baed6'],
            [0.8, '#4292c6'],
            [1, '#084594']
        ],
        hoverongaps: false,
        colorbar: {
            title: "Player Count",
            thickness: 20,
            len: 0.6,
            ticksuffix: " players",
            outlinewidth: 0,
            tickfont: { size: 12 }
        },
        text: confusionMatrixData.matrix.map(row => row.map(value => `Count: ${value}`)),
        hovertemplate: "<b>True Label:</b> %{y}<br><b>Predicted Label:</b> %{x}<br>%{text}<extra></extra>"
    };

    const layout = {
        title: {
            text: "Confusion Matrix for Player Classification",
            font: { size: 20 },
            x: 0.5
        },
        xaxis: {
            title: "Predicted Label",
            tickangle: -45,
            automargin: true,
            titlefont: { size: 14 },
            tickfont: { size: 12 }
        },
        yaxis: {
            title: "True Label",
            automargin: true,
            titlefont: { size: 14 },
            tickfont: { size: 12 }
        },
        height: 550,
        width: 750,
        paper_bgcolor: "#f8f9fa",
        plot_bgcolor: "#ffffff",
        margin: { l: 120, r: 50, t: 70, b: 100 }
    };

    Plotly.newPlot("confusion-matrix-chart", [trace], layout);
}

// Call the function to render the chart
renderConfusionMatrix();



    // Data for the chart
    const data5 = [
        {
            x: ["Athletic Club", "Barcelona"],
            y: [51.4, 48.6],
            type: "bar",
            marker: {
                color: ["#28a745", "#ff6347"],
            },
            text: ["51.40%", "48.60%"],
            textposition: "auto",
            hovertemplate: "<b>%{x}</b><br>Win Probability: %{y}%<extra></extra>",
        },
    ];

    // Layout for the chart
    const layout5 = {
        title: {
            text: "Match Win Probabilities",
            font: {
                size: 18,
            },
        },
        xaxis: {
            title: "Teams",
        },
        yaxis: {
            title: "Win Probability (%)",
            range: [0, 100],
        },
        paper_bgcolor: "#f9f9f9",
        plot_bgcolor: "#f9f9f9",
    };

    // Render the chart
    Plotly.newPlot("win-probability-chart", data5, layout5);


