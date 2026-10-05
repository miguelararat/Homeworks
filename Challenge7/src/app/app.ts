  import { Component, signal } from '@angular/core';
  import { RouterOutlet } from '@angular/router';
  import { NaryTree } from '../models/NaryTree';
  import { NodoMenu } from '../models/Node';
  import { Sidebar } from './sidebar/sidebar';


  @Component({
    selector: 'app-root',
    imports: [Sidebar],
    templateUrl: './app.html',
    styleUrl: './app.css'
  })
  export class App {
    arbolMenu = new NaryTree();

    constructor(){
      

      
      const raiz = new NodoMenu('Menu', '', '');

      // Nodos hoja directos (sin submenú)
      const profile = new NodoMenu('Profile', '/profile', 'ProfileComponent');
      const messages = new NodoMenu('Messages', '/messages', 'MessagesComponent');
      const logout = new NodoMenu('Logout', '/logout', 'LogoutComponent');

      // Nodos con submenú
      const settings = new NodoMenu('Settings', '', '');
      const account = new NodoMenu('Account', '/settings/account', 'AccountComponent');
      const settingsProfile = new NodoMenu('Profile', '/settings/profile', 'ProfileSettingsComponent');
      const security = new NodoMenu('Security & Privacy', '/settings/security', 'SecurityComponent');
      const password = new NodoMenu('Password', '/settings/password', 'PasswordComponent');
      const notification = new NodoMenu('Notification', '/settings/notification', 'NotificationComponent');

      const help = new NodoMenu('Help', '', '');
      const faq = new NodoMenu('FAQ\'s', '/help/faq', 'FaqComponent');
      const ticket = new NodoMenu('Submit a Ticket', '/help/ticket', 'TicketComponent');
      const status = new NodoMenu('Network Status', '/help/status', 'StatusComponent');

      // Armar jerarquía: Settings
      settings.addChild(account);
      settings.addChild(settingsProfile);
      settings.addChild(security);
      settings.addChild(password);
      settings.addChild(notification);

      // Armar jerarquía: Help
      help.addChild(faq);
      help.addChild(ticket);
      help.addChild(status);

      
      raiz.addChild(profile);
      raiz.addChild(messages);
      raiz.addChild(settings);
      raiz.addChild(help);
      raiz.addChild(logout);

      this.arbolMenu.raiz = raiz;
      console.log(this.arbolMenu.dfs());
  };
    }
  

