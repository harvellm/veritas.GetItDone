import { Component, OnInit, Input } from '@angular/core';
import { SelectItem } from 'node_modules/primeng/api';

@Component({
  selector: 'app-projectinfo',
  templateUrl: './projectinfo.component.html'
})
export class ProjectinfoComponent implements OnInit {

  // @Input() - no longer needed with PrimeNG sidebar implemented correctly
  // open = false; - no longer needed with PrimeNG sidebar implemented correctly

  ReadytoStart: SelectItem[];
  ArchiveProject: SelectItem[];

  constructor() {
    this.ReadytoStart = [
      {label: 'Yes', value: 'Yes'},
      {label: 'No', value: 'No'}
    ];
    this.ArchiveProject = [
      {label: 'Yes', value: 'Yes'},
      {label: 'No', value: 'No'}
    ];
  }

  ngOnInit() {
  }

}
