import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doughnutchart',
  templateUrl: './doughnutchart.component.html'
})
export class DoughnutchartComponent {

  data: any;

    constructor() {
        this.data = {
            labels: ['Development', 'Database', 'VDP', 'BA/PM', 'QA'],
            datasets: [
                {
                    data: [120, 75, 45, 20, 25],
                    backgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56',
                        '#C8B4FD',
                        '#7AD3CB'
                    ],
                    hoverBackgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56',
                        '#C8B4FD',
                        '#7AD3CB'
                    ]
                }]
            };
    }

}
