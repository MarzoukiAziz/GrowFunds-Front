import { Component } from '@angular/core';
import { Investisment } from 'src/app/models/Investisment';
import { Projects } from 'src/app/models/Projects';
import { TypeProjectStatus } from 'src/app/models/TypeProjectStatus';
import { InvestmentService } from 'src/app/services/investment.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-investmenets-clients',
  templateUrl: './investmenets-clients.component.html',
  styleUrls: ['./investmenets-clients.component.css']
})
export class InvestmenetsClientsComponent {
  projects!: Projects[];
  inves:Projects[]=[]
  noninves:Projects[]=[]

  constructor(private _service: ProjectService) { }


  ngOnInit(): void {
    this._service.getAllForClient().subscribe(res => {
      this.projects = res;
      console.log(this.projects)
      this.projects.filter(x=>x.status==TypeProjectStatus.APPROVED)
      console.log(this.projects)
      this.projects.forEach(p=>{
        var test=false
        p.investisments.forEach(i=>{
          if (i.investor.id==2)test=true
        })
        if(test)this.inves.push(p)
        else this.noninves.push(p)
      })
      console.log(this.inves,this.noninves)
    });

  }
}
