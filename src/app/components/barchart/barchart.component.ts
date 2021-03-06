import { Component } from '@angular/core';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html'
})
export class BarchartComponent {

  data: any;

    constructor() {
        this.data = {
            labels: ['May', 'June', 'July', 'August'],
            datasets: [
                {
                    label: 'Estimated Hours',
                    backgroundColor: '#42A5F5',
                    borderColor: '#1E88E5',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'Remaining Hours',
                    backgroundColor: '#9CCC65',
                    borderColor: '#7CB342',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        }
    }

}
