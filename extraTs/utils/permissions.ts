import { permissions } from '../constants';

export default function hasPermission ( moduleName: string, role: string, permissionType: string ): boolean {
 const modulePermission = permissions[ moduleName ];
 if ( !modulePermission ) {
     return false;
    }
 if ( modulePermission.all.includes ( role ) ) {
     return true;
    }
 else {
     return modulePermission[ permissionType ] && modulePermission[ permissionType ].includes ( role );
    }
}
