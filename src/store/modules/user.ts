import {action,observable} from 'mobx'
import {login} from '../../service/index'
import {setToken, removeToken} from '../../utils/index'
let account = (window.localStorage.getItem('account') + '')

if (window.localStorage.getItem('account')) {
    account = JSON.stringify(window.localStorage.getItem('account') + '')
}
class User{
    @observable account: any = account;
    // @observable isLogin: boolean = false;
    @action async login(params:any):Promise<any>{
        const result:any = await login(params)
        console.log(result)
       if(result.code===1){
           console.log(params)
           // 1.判断是否记住用户名和密码
           if (params.remember){
            window.localStorage.setItem('account',JSON.stringify(params));
           }else{
            window.localStorage.removeItem('account');
           }
       }
       //判断7天免登陆
       if(params.autoLogin){
           setToken(result.token)
           console.log(result)
       }
       return result;
    }
    //退出登录
    @action async logout():Promise<any>{
        removeToken();
    }
}
export default User;