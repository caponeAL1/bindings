import { Component } from '@angular/core';
import { UserData } from './UserData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  udata:UserData=new UserData();
  userList:UserData[]=[];
  title = 'bindings';
  themeName:string='forest';
  applyColor:string="blue";
  size: number=100;
  stateName:string="TN";
 
  enableDisable:boolean=false;
  saveData()
  {
    
    this.userList.push(this.udata);
    console.log('Added data to the array...');
    console.log(this.udata);
    this.udata=new UserData();
  }

  checkData()
  {
   //console.log(event.target);
   console.log(this.udata.FirstName);
   
  }
  sendData()
  {
    console.log("Sending data to Express backend.");
  }
}