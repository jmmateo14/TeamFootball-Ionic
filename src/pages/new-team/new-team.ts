import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TeamsProvider } from '../../providers/teams/teams';
import { ListPage } from '../list/list';

/**
 * Generated class for the NewTeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-team',
  templateUrl: 'new-team.html',
})
export class NewTeamPage {

  teamForm: FormGroup;
  team = [];


  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, private teamProvider: TeamsProvider) {
    this.teamForm = this.createTeamForm();
  }

  saveData() {
    this.teamProvider.saveTeam(this.teamForm.value).subscribe((result: any) => {
      this.team = result;
      console.log(this.team);
      this.navCtrl.push(ListPage,{})
    })
  }

  private createTeamForm() {
    
    return this.formBuilder.group({
      name: [''],
      country: [''],
      foundation: [''],
      coach: [''],
      stadium:[''],
      /*stars_player: this.formBuilder.group({
        stars_player1: [''],
        stars_player2: [''],
        stars_player3: ['']
      }),*/
      image_url:['']
    });
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad NewTeamPage');
  }

}
