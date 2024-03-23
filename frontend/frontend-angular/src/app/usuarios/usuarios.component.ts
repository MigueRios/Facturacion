import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Usuario } from './usuario';
import { RolesComponent } from '../roles/roles.component';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [RolesComponent, CommonModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css',
})
export class UsuariosComponent {
  
  usuarios: Usuario[] = [];

  constructor (private usuariosService : UsuariosService) { } 
  
  ngOnInit(): void {
    this.usuarios = this.usuariosService.getUsuarios();
  }

  editarUsuario(usuario: Usuario) {
    // Aquí puedes abrir un modal o redirigir a otra página para editar el usuario
    console.log('Editar usuario:', usuario);
 }

 eliminarUsuario(usuario: Usuario) {
    // Implementa la lógica para eliminar el usuario
    console.log('Eliminar usuario:', usuario);
    // Aquí puedes confirmar la eliminación y luego filtrar el array de usuarios
    this.usuarios = this.usuarios.filter(u => u.id !== usuario.id);
 }
}
