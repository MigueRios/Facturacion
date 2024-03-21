import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Usuario } from './usuario';
import { RolesComponent } from '../roles/roles.component';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [RolesComponent, CommonModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css',
})
export class UsuariosComponent {
  usuarios: Usuario[] = [
    //objetos con formato JSON
    {
      id: 1,
      username: 'Wil',
      password: 'wwwww',
      email: 'wil@gmail.com',
      name: 'Wilson',
      phone: '11111',
      photo: 'ruta1',
      create_at: new Date('2024-01-01'),
      enabled: true,
      roles: [],
    },
    {
      id: 2,
      username: 'Bibi',
      password: 'bbbbb',
      email: 'bibi@gmail.com',
      name: 'BIbiana',
      phone: '22222',
      photo: 'ruta2',
      create_at: new Date('2024-01-01'),
      enabled: true,
      roles: [],
    },
    {
      id: 3,
      username: 'Henry',
      password: 'hhhhh',
      email: 'henry@gmail.com',
      name: 'Henry',
      phone: '33333',
      photo: 'ruta3',
      create_at: new Date('2024-01-01'),
      enabled: true,
      roles: [],
    },
    {
      id: 4,
      username: 'David',
      password: 'dddddd',
      email: 'david@gmail.com',
      name: 'David',
      phone: '44444',
      photo: 'ruta4',
      create_at: new Date('2024-01-01'),
      enabled: true,
      roles: [],
    },
    {
      id: 5,
      username: 'Miguel',
      password: 'mmmmm',
      email: 'miguel@gmail.com',
      name: 'Miguel',
      phone: '55555',
      photo: 'ruta5',
      create_at: new Date('2024-01-01'),
      enabled: true,
      roles: [],
    },
    {
      id: 6,
      username: 'Karolina',
      password: 'kkkkk',
      email: 'karolina@gmail.com',
      name: 'Karolina',
      phone: '66666',
      photo: 'ruta6',
      create_at: new Date('2024-01-01'),
      enabled: true,
      roles: [],
    },
  ];
  editarUsuario(usuario: Usuario) {
    // Implementa la lógica para editar el usuario
    console.log('Editar usuario:', usuario);
    // Aquí puedes abrir un modal o redirigir a otra página para editar el usuario
 }

 eliminarUsuario(usuario: Usuario) {
    // Implementa la lógica para eliminar el usuario
    console.log('Eliminar usuario:', usuario);
    // Aquí puedes confirmar la eliminación y luego filtrar el array de usuarios
    this.usuarios = this.usuarios.filter(u => u.id !== usuario.id);
 }
}
