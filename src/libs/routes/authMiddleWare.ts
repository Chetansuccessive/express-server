import * as jwt from 'jsonwebtoken';
import hasPermission from './Permissions';
export default (module,permissionType)=> (req,res,next)=> {
    try{
        console.log("The config is ",module,permissionType);

    console.log("Header is ",req.headers['authorization'])
    const token = req.headers['authorization']
    const decodedUser = jwt.verify(token,'qwertyuiopasdfghjklzxcvbnm123456')
        console.log('User',decodedUser);
        const result =hasPermission(module,decodedUser.role,permissionType);
        if(result)
            next(); 
        else{
            next({
                error:"Unauthorized",
                code: 403
            })
        }
    } catch(err){
        next({
            error:"Unauthorized",
            code: 403
        })
    }
    
    
}