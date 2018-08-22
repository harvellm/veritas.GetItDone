import { Component } from '@angular/core';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html'
})
export class PiechartComponent {

  data: any;

    constructor() {
        this.data = {
            labels: ['Development','Database','VDP', 'BA/PM', 'QA'],
            datasets: [
                {
                    data: [120, 75, 45, 20, 25],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "#C8B4FD",
                        "#7AD3CB"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "#C8B4FD",
                        "#7AD3CB"
                    ]
                }]    
            };
    }

}
