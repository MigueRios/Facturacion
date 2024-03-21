import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Role } from './role';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css',
})
export class RolesComponent {
  roles: Role[] = [
    //Objetos con formato JSON
    {
      id: 1,
      roleName: 'Admin',
      descripcion:
        'Este rol permite a los' +
        ' Administradores del sistema realizar cualquier acci[on sobre el sistema.',
    },
    {
      id: 2,
      roleName: 'User',
      descripcion:
      'Este es le rol de los usuarios normal.' +
      ' Tiene muchas limitaciones.',
    },
    {
      id: 3,
      roleName: 'Organizador',
      descripcion:
      'Este rol permite organizar' +
        ' eventos',
    },
    {
      id: 4,
      roleName: 'Editor',
      descripcion:
        'Este rol permite gestionar tablas' +
        ' de referencia.',
    },
  ];

  constructor(){}
}
