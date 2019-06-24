import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TeamsProvider } from '../../providers/teams/teams';
import { ListPage } from '../list/list';

/**
 * Generated class for the TeamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {
  team: any;
  player = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private teamProvider: TeamsProvider) {
    this.team = this.navParams.get("team");
    this.player = this.navParams.get("player");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamsPage');
  }

  deleteTeam(_id: any){
    this.teamProvider.delTeam(_id).subscribe((result: any) =>{
      this.deleteTeam = result;
      this.navCtrl.push(ListPage,{})
  })
}

}
