import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TeamsProvider } from '../../providers/teams/teams';
import { TeamsPage } from '../teams/teams';

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  teams = [];
  team = [];
  player = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private teamProvaider: TeamsProvider) {
    teamProvaider.getTeams().subscribe((result: any) => {
      this.teams = result;
      console.log(result);
    })
  }

  getTeam(_id: any) {
    this.teamProvaider.getTeam(_id).subscribe((result: any) =>{
      this.team = result;
      this.player = result.player;
      console.log(result.player);
      this.navCtrl.push(TeamsPage, {
        "team": this.team,
        "player": this.player 
      });
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

}
