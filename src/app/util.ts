import { HttpHeaders } from "@angular/common/http";

export class Util {
    public authHeader(){
        const user = localStorage.getItem("token");
        if(user)
        {
            return new HttpHeaders().set("Authorization","Bearer "+ user);
        }
    return {};
    }
}
