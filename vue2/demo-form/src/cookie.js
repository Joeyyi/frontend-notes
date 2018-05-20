
export default {
    data:{
        getCookies() {
            return document.cookie.split(";");
        },
        
        getCookie(key) {
            let cookieArr = document.cookie.split(";");
            for( let i = 0; i < cookieArr.length; i++) {
                let arr = cookieArr[i].split('=');
                if(arr[0] == key ) {
                    return arr[1];
                }
            }
            return false;
        },
        
        setCookie(key, value, time) {
            let expire = new Date();
            expire.setDate(expire.getDate() + time );
            document.cookie = key + '=' + value + ';expires=' + expire;
        },
        
        removeCookie(key) {
            setCookie(key, '', -1);
        }
    }
    

}
