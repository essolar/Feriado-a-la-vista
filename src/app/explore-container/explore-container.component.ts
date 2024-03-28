import { Component, Input, model } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import FeriadoModel from '../../models/Feriado';
import * as dayjs from 'dayjs';


@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent {


  @Input() name?: string;

  feriados: FeriadoModel[] = [];


  constructor(private http: HttpClient) {
    this.loadJson();
  }

  loadJson() {

    const now = dayjs();
    this.http.get<FeriadoModel[]>("assets/data/feriados.json").subscribe(data => {
      this.feriados = data;
      this.feriados = this.feriados.filter(f => {
        const formula = Math.abs(dayjs(f.fecha).diff(now,'day'));
        return formula >=1 && formula <=7
      })

    })
  }



}
