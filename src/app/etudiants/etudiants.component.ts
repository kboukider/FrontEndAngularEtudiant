import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";


@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantsComponent implements OnInit {

  listFormations ;
  listEtudiants;
  currentFormation = {id:-1};

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get("http://localhost:8080/formations")
      .subscribe(data => {
        this.listFormations = data
        }, error => {
        console.log("erreur dans la récupération");
        }
      );
  }

  onGetEtudiants(f) {
    this.currentFormation = f;
    this.httpClient.get("http://localhost:8080/formations/"+f.id+"/etudiants")
      .subscribe(data => {
          this.listEtudiants = data
        }, error => {
          console.log("erreur dans la récupération");
        }
      );
  }
}
