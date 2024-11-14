// let result = document.getElementById("result");
// var textContent = result.textContent.trim();
// if(textContent == "High Crime"){
//     result.style.color = "red";
// }
// else{
//     result.style.color = "green";
// }

// new Chart(
//     document.getElementById('acquisitions'),
//     {
//       type: 'bar',
//       options: {
//         animation: false,
//         plugins: {
//           legend: {
//             display: false
//           },
//           tooltip: {
//             enabled: false
//           }
//         }
//       },
//       data: {
//         labels: data.map(row => row.year),
//         datasets: [
//           {
//             label: 'Acquisitions by year',
//             data: data.map(row => row.count)
//           }
//         ]
//       }
//     }
//   );
const ctx = document.getElementById('myChart1');
new Chart(ctx, {
    type: 'bar',
  data: {
    labels: [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011, 2012, 1013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021
      ],
    datasets: [{
      label: 'per 100,000 of population',
      data: [308.1,	311.3,	314.5,	317.7,321.9,326.1,334.9,339.4,344.1,349.4,354.9,359.5,366.1,371.4,374.5,377.9,384.6,392.3,387.8,385.5,487.8,445.9],
      borderWidth: 2,
      backgroundColor: '#bebebe',
      borderColor: '#c21d03',
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

const ctx2 = document.getElementById('myChart2');
new Chart(ctx2, {
    type: 'line',
  data: {
    labels: ['Uttar Pradesh',
    'Bihar',
    'West Bengal',
    'Maharashtra',
    'Assam',
    'Madhya Pradesh',
    'Rajasthan',
    'Odisha',
    'Karnataka',
    'Jharkhand',
    'Haryana',
    'Tamil Nadu',
    'Kerala',
    'Delhi',
    'Gujarat',
    'Telangana',
    'Chhattisgarh',
    'Andhra Pradesh',
    'Punjab',
    'Jammu and Kashmir',
    'Uttarakhand',
    'Himachal Pradesh',
    'Tripura',
    'Meghalaya',
    'Manipur',
    'Arunachal Pradesh',
    'Chandigarh',
    'Goa',
    'Puducherry',
    'Mizoram',
    'Sikkim',
    'Nagaland',
    'Dadra and Nagar Haveli and Daman and Diu',
    'Andaman and Nicobar Islands',
    'Ladakh',
    'Lakshadweep'],
    datasets: [{
      label: 'Total Crime In 2020, 2021, 2022',
      data: [157064,
        144506,
        144174,
        128275,
        66876,
        76443,
        67664,
        83083,
        46984,
        41004,
        38403,
        35706,
        28182,
        33267,
        25679,
        27705,
        25339,
        21002,
        18603,
        8608,
        9698,
        5437,
        4521,
        1681,
        1682,
        1346,
        1038,
        1057,
        606,
        534,
        383,
        402,
        332,
        250,
        62,
        15
        ],
      borderWidth: 2,
      backgroundColor: '#bebebe',
      borderColor: '#c21d03',
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

const ctx3 = document.getElementById('myChart3');
new Chart(ctx3, {
    type: 'bubble',
  data: {
    labels: ['Theft', 'IPC', 'Assault', 'Motor Vehicle Theft', 'Drug Related Offenses'],
    datasets: [{
        label: 'Most Commited Crime',
        data: [{
          x: 1,
          y: 25,
          r: 25
        }, {
          x: 5,
          y: 20,
          r: 20
        },
      {
        x: 10,
        y:15,
        r : 15
      },
      {
        x: 15,
        y:10,
        r : 10
      },
      {
        x: 20,
        y:5,
        r : 5
      }],
        backgroundColor: '#c21d03'
      }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});


const ctx4 = document.getElementById('myChart4');
new Chart(ctx4, {
    type: 'radar',
  data: {
    labels: ['Murder', 'Rape', 'Kidnapping', 'Death by road accidents', 'Grievous hurt', 'Riots'],
    datasets: [{
      label: 'per 100,000 population',
      data: [2.1, 4.8 , 7.4 , 10.1 , 6.6 , 3.1],
      borderWidth: 2,
      backgroundColor: '#bebebe',
      borderColor: '#c21d03',
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

const ctx5 = document.getElementById('myChart5');
new Chart(ctx5, {
    type: 'polarArea',
  data: {
    labels: ['Cyber crime', 'Theft', 'Fraud', 'Simple hurt', 'Trespassing'],
    datasets: [{
      label: '# of Votes',
      data: [15, 11, 7, 5, 3, 1],
      borderWidth: 2,
      backgroundColor: '#bebebe',
      borderColor: '#c21d03',
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

const ctx6 = document.getElementById('myChart6');
new Chart(ctx6, {
    type: 'doughnut',
  data: {
    labels: ['Murder', 'Rape', 'Kidnapping', 'Crimes against children', 'Human trafficking'],
    datasets: [{
      label: '# of Votes',
      data: [2.1 , 4.8 , 7.4 , 3.3, 3.47],
      borderWidth: 2,
      backgroundColor: '#bebebe',
      borderColor: '#c21d03',
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});


