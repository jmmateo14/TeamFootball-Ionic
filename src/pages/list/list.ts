import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TeamsProvider } from '../../providers/teams/teams';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private teamProvaider: TeamsProvider) {
    teamProvaider.getTeams().subscribe((result: any) => {
      this.teams = result;
      console.log(result);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

}
