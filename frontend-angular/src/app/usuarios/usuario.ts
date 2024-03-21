import { Role } from "../roles/role";

export class Usuario {
    /* crear los siguientes atributos que están en el Backend
        private Long id;
        private String username;
        private String password;
        private String email;
        private String name;
        private String phone;
        private String photo;
        private Boolean enabled;
        private Date create_at;
        private List<Role> roles;
        private create_at = new Date();
    */
    
    id: number;
    username: string ;
    password: string ;
    email: string ;
    name: string ;
    phone: string ;
    photo: string ;
    create_at: Date ;
    enabled: boolean ;
    roles: Role[] ;

    constructor(){
        this.id = 0;
        this.username = '';
        this.password = '';
        this.email = '';
        this.name = '';
        this.phone = '';
        this.photo = '';
        this.create_at = new Date
        this.enabled = false;
        this.roles = [];


    }
}
