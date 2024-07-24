import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  // task-1
  // name="aishuu";
  //task-2
  @Input() name="aishwarya"
  @Input() imageurl="https://e0.pxfuel.com/wallpapers/618/134/desktop-wallpaper-whatsapp-d-p-cute-baby.jpg"

}
