import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseURL = "http://localhost/api"

/*
  Generated class for the TeamsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TeamsProvider {

  constructor(public http: HttpClient) {
  }

  getTeams() {
    let url = baseURL + '/'
    return this.http.get(url);
  }

  getTeam(_id: any) {
    let url = baseURL + '/team/' + _id
    return this.http.get(url);
  }

  delTeam(_id: any) {
    let url = baseURL + '/team/' + _id
    return this.http.delete(url);
  }

  saveTeam(team: any) {
    let url = baseURL + '/team'
    return this.http.post(url, team);
  }

}
